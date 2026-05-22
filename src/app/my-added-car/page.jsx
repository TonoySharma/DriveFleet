"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MyAddedCarsPage() {
  const { data: session, status } = useSession();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (status === "authenticated" && session?.user?.email) {
      
      fetch(`/api/my-cars?email=${session.user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCars(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Data fetch error:", err);
          setLoading(false);
        });
    } else if (status === "unauthenticated") {
     
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false);
    }
  }, [session, status]);


  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  // not login
//   if (status === "unauthenticated") {
//     return (
//       <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
//         <p className="text-xl text-red-500"></p>
//       </div>
//     );
//   }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white p-8 md:p-12 mt-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold my-10">My added cars</h1>
        
        {cars?.length === 0 ? (
          <p className="text-zinc-400 text-lg"></p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cars.map((car) => (
              <motion.div 
                key={car._id} 
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-xl"
                whileHover={{ scale: 1.02 }}
              >
           
                {car.imageUrl && (
                  <img 
                    src={car.imageUrl} 
                    alt={car.carName} 
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                )}
                <h3 className="text-2xl font-semibold mb-2">{car.carName}</h3>
                <p className="text-zinc-400 text-sm mb-3 line-clamp-2">{car.description}</p>
                
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/10">
                  <span className="text-zinc-400 text-sm">{car.pickupLocation}</span>
                  <span className="text-blue-400 font-bold text-lg">${car.dailyPrice}/day</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}