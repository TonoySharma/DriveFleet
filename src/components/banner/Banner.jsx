"use client";

import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2400&auto=format&fit=crop')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        
        <p className="uppercase tracking-[0.3em] text-[#f3a738] text-sm font-semibold mb-5">
          Rent Your Dream Car
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
          Drive Your Way, <br />
          Anytime, Anywhere
        </h1>

        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6">
          GetnGo makes car rental simple, fast, and affordable.
          Choose from a wide range of vehicles to suit your journey.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          
          <Link href="/explore-cars">
            <button className="cursor-pointer bg-[#f3a738] hover:bg-[#db9127]
             text-black font-bold px-8 py-4 rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg shadow-orange-500/20">
              Book Your Car
            </button>
          </Link>

          <Link href="/car-list">
            <button className="cursor-not-allowed bg-white/10 backdrop-blur-md
             hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-all duration-300">
              View Car List
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Banner;