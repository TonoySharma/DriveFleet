import Image from "next/image";
import { auth } from "../../lib/auth";
import { headers } from "next/headers";
import { BookingDeleteAlet } from "../../components/delete/BookingDeleteAlert";
import FadeUp from "@/components/FadeUp";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center p-4">
        <div className="backdrop-blur-md bg-white/60 p-8 rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-100 max-w-sm text-center">
          <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">!</div>
          <h3 className="text-lg font-bold text-slate-800">Authentication Required</h3>
          <p className="text-sm text-slate-500 mt-2">Please sign in to your account to track your active car rentals.</p>
        </div>
      </div>
    );
  }

  const res = await fetch(`http://localhost:5000/bookNow/${user.id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const bookings = await res.json();

  return (
    <div className="min-h-screen bg-[#f5f1ea] py-16 px-4">
      <div className="max-w-7xl mx-auto mt-10">
        
        {/* Minimalist Header */}
        <FadeUp>
        <div className="flex flex-col md:flex-row md:items-end justify-between
         mb-16 border-b border-slate-200 pb-6 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600
             bg-indigo-50 px-3 py-1 rounded-full">Workspace</span>
            <h1 className="text-4xl font-black text-slate-900 mt-3 tracking-tight">Car Booking Overview</h1>
          </div>
          <p className="text-sm font-medium text-slate-500">
            Total Active Bookings: <span className="text-slate-900 font-bold bg-white px-2.5 
            py-1 rounded-md border border-slate-200 shadow-sm">{bookings?.length || 0}</span>
          </p>
        </div>
        </FadeUp>

       
        {!bookings || bookings.length === 0 ? (
          <div className="text-center py-24 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-slate-400 font-medium">Your booking car is empty.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((bookcar) => (
              <FadeUp    key={bookcar._id}>
              <div 
             
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 overflow-hidden flex flex-col lg:flex-row items-stretch"
              >
                {/* Left Side */}
                <div className="relative w-full lg:w-80 min-h-[200px] lg:min-h-auto bg-slate-900 flex-shrink-0">
                  <Image 
                    src={bookcar.carImage} 
                    alt={bookcar.carTitle || "Car"}
                    fill
                    className="object-cover opacity-85 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 flex flex-col justify-between">
                    <span className="self-start bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border border-white/20">
                      Verified Fleet
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">{bookcar.carBrand}</p>
                      <h3 className="text-xl font-bold text-white tracking-wide mt-0.5">{bookcar.carTitle}</h3>
                    </div>
                  </div>
                </div>

                {/* Right Side*/}
                <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between gap-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div>
                      <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Status</span>
                      <div className="mt-1.5 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-sm font-semibold text-slate-700 capitalize">{bookcar.availability || "Confirmed"}</span>
                      </div>
                    </div>

                    <div>
                      <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Reserved On</span>
                      <span className="block mt-1.5 text-sm font-semibold text-slate-700">
                        {bookcar.bookNow || "Immediate"}
                      </span>
                    </div>

                    <div className="col-span-2 md:col-span-1">
                      <span className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">Rate</span>
                      <span className="block mt-1 text-2xl font-black text-slate-900">
                        ${bookcar.price}<span className="text-xs font-normal text-slate-500">/day</span>
                      </span>
                    </div>
                  </div>


                  <div className="flex justify-end pt-4 border-t border-slate-100">
  
                    <div className="flex gap-3">
                      <BookingDeleteAlet carsId={bookcar._id}></BookingDeleteAlet>

                    </div>
                  </div>
                </div>

              </div>
              </FadeUp>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default MyBookingsPage;