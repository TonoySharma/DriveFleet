"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 overflow-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <p
          className="text-red-600 font-bold 
          uppercase tracking-[3px] mb-5"
        >
          TURN YOUR CAR INTO A PASSIVE INCOME SOURCE
        </p>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl 
          font-black leading-[1.1] text-black 
          max-w-6xl"
        >
          TRUSTED BY THOUSANDS OF
          <br />

          <span className="font-light">
            SATISFIED CUSTOMERS
          </span>
        </h1>

      </motion.div>

      {/* Cards */}
      <div
        className="grid grid-cols-1 lg:grid-cols-3 
        gap-6 mt-16"
      >

        {/* Rating Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="bg-red-600 rounded-[32px] 
          p-8 md:p-10 text-white shadow-xl 
          flex flex-col justify-between min-h-[420px]"
        >

          <div>

            <h2 className="text-7xl font-black">
              4.9
            </h2>

            <div className="items-center gap-3 mt-3">

              <div className="flex gap-1 items-center justify-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-white text-lg" />
                ))}
              </div>

              <span className="font-semibold text-lg">
                (256k+ Reviews)
              </span>

            </div>

          </div>

          <p
            className="text-xl md:text-2xl 
            leading-relaxed font-medium"
          >
            Thousands of car owners are earning
            passive income by sharing their vehicles
            on our trusted platform.
          </p>

        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
          className="lg:col-span-2 bg-[#f5e7e7] 
          rounded-[32px] p-8 md:p-14 shadow-xl 
          relative min-h-[420px] flex flex-col justify-between"
        >

          {/* Quote */}
          <motion.h1
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="text-[90px] md:text-[120px] 
            leading-none text-black/60"
          >
            “
          </motion.h1>

          {/* Review Text */}
          <p
            className="text-2xl md:text-3xl lg:text-4xl 
            leading-relaxed text-black font-medium"
          >
            Renting out my car through this platform
            has completely changed the way I earn extra
            income. The booking process is smooth,
            secure, and incredibly easy to manage.
            I highly recommend it to anyone looking
            to make passive income from their vehicle.
          </p>

          {/* User */}
          <div className="flex items-center gap-4 mt-10">

            <div
              className="w-16 h-16 rounded-full 
              overflow-hidden border-4 border-red-300"
            >
              <Image
                src="https://i.pravatar.cc/150?img=32"
                alt="Sarah Lewis"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>

            <div>

              <h3 className="text-2xl font-bold text-black">
                Sarah Lewis
              </h3>

              <p className="text-gray-600 text-lg">
                California, United States
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default TestimonialSection;