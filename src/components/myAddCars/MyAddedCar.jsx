"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { motion } from "framer-motion";
import {
  Car,
  MapPin,
  Users,
} from "lucide-react";


import { EditeCarSection } from "@/components/editeCar/EditeCarSection";
import { MyDeleteCar } from "@/components/addedDeleteCar/MyDeletecar";
import FadeUp from "@/components/FadeUp";

export default function MyAddedCarPage() {
  const { data: session } = useSession();

  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (session?.user?.email) {
      fetch(
        `https://drive-fleet-server-self.vercel.app/my-added-cars?email=${session.user.email}`
      )
        .then((res) => res.json())
        .then((data) => {

          // console.log(data);

          setCars(data);
        });
    }
  }, [session]);

  return (
    <div className="min-h-screen bg-[#f5f1ea]
     text-white px-4 md:px-10 py-24 selection:bg-blue-500 selection:text-white">


      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16 border-b border-white/5 pb-8 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4"
      >
        <div>
          <h1 className="text-4xl md:text-6xl text-black font-bold">
            My Added Cars
          </h1>
          <p className="text-gray-500 mt-3 text-lg font-medium">
            Manage and monitor all your premium fleet listings from one central hub.
          </p>
        </div>


        <div className="text-black border px-4 py-2 rounded-2xl 
    backdrop-blur-md text-sm font-semibold  self-start md:self-end">
          Total Fleet: {cars.length} {cars.length === 1 ? 'Car' : 'Cars'}
        </div>
      </motion.div>


      {cars.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-32 border border-dashed
       border-zinc-800 rounded-3xl max-w-4xl mx-auto bg-zinc-900/20 backdrop-blur-sm"
        >
          <div className="p-5 bg-zinc-900 rounded-2xl border border-zinc-800 text-zinc-500 shadow-xl">
            <Car size={48} className="animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold mt-6 tracking-tight text-zinc-200">No Cars Added Yet</h2>
          <p className="text-zinc-500 mt-2 text-center max-w-sm px-4">
            Your showroom is currently empty. Start showcasing your luxury vehicles to the world.
          </p>
        </motion.div>
      )}


      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto ">
        {cars.map((car, index) => {
          // Robust checking for boolean true or string matches
          const isCarAvailable = car.isAvailable === true || car.isAvailable === 'Available';

          return (
            <FadeUp
              key={car._id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut"
              }}
              whileHover={{ y: -8 }}
              className="group flex flex-col justify-between bg-zinc-900/40
           backdrop-blur-xl border border-zinc-800/80 hover:border-zinc-700 rounded-3xl
            overflow-hidden shadow-2xl transition-colors duration-300"
            >

              <div className="relative overflow-hidden aspect-[4/3] bg-zinc-950">
                <img
                  src={car.imageUrl}
                  alt={car.carName}
                  className="w-full h-full object-cover group-hover:scale-105 
              transition duration-700 ease-out brightness-[0.9] group-hover:brightness-100"
                  loading="lazy"
                />


                <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md border
                 border-white/5 px-3 py-1.5 rounded-xl shadow-lg">
                  <p className="text-xs font-bold tracking-wide uppercase text-zinc-300">
                    {car.carType}
                  </p>
                </div>

              </div>


              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold tracking-tight
               text-white line-clamp-1 transition-colors duration-300">
                    {car.carName}
                  </h2>


                  <div className="flex items-baseline gap-1 mt-2.5">
                    <span className="text-lg font-semibold ">$</span>
                    <p className="text-3xl font-black tracking-tight ">
                      {car.dailyPrice}
                    </p>
                    <span className="text-xs text-gray-600 font-medium ml-1">
                      / day
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-zinc-800/20 text-zinc-400 text-xs font-medium">
                    <div className="flex items-center gap-2 bg-zinc-950/40 p-2 rounded border border-zinc-800/40">
                      <MapPin size={14} className=" text-white shrink-0" />
                      <span className="text-white">{car.pickupLocation}</span>
                    </div>

                    <div className="flex items-center gap-2 bg-zinc-950/40 p-2 
                rounded border border-zinc-800/40">
                      <Users size={14} className="text-white  shrink-0" />
                      <span className="text-white">{car.seatCapacity} Seats</span>
                    </div>
                  </div>


                  <p className="text-white text-xs leading-relaxed mt-4 line-clamp-2 italic">
                    {car.description}
                  </p>
                </div>

                <div className="flex justify-between  mt-6 pt-4
                 border-t border-zinc-800/20 ">
                  {/* EDIT BUTTON */}
                    <EditeCarSection carsId={car._id} setCars={setCars} session={session}></EditeCarSection>

                  {/* DELETE BUTTON */}

                  <MyDeleteCar carsId={car._id}></MyDeleteCar>
                </div>


              </div>
            </FadeUp>
          );
        })}
      </div>
    </div>
  );
}