"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HiOutlineMenuAlt3,
  HiX,
} from "react-icons/hi";
import {
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";
import Image from "next/image";
import NavLink from "../NavLink";

export default function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      
      {/* Glass Effect */}
      <div className="backdrop-blur-2xl bg-gray/10 border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="flex items-center justify-between h-20">

            {/* Premium Text Logo */}
            <Link href="/">
              <div className="flex flex-col leading-none cursor-pointer">
                <Image src={"/image.png"} alt="logo.png" width={120} height={120} />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10 ">
              
              <NavLink href="/"
                className=" font-medium text-white"
              >
                Home
              </NavLink >

              <NavLink 
                href="/explore-cars"
                className=" font-medium text-white"
              >
                Explore Cars
              </NavLink >

              <NavLink
                href="/add-car"
                className="text-gray-300 hover:text-[#f3a738] transition font-medium "
              >
                Add Car
              </NavLink >

              <NavLink 
                href="/my-bookings"
                className="text-gray-300 hover:text-[#f3a738] transition font-medium"
              >
                My Bookings
              </NavLink >
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 ">

              {/* Premium Button */}
              <Link href="/login">
                <button className="cursore-pointer hidden md:flex items-center
                 gap-2 bg-[#f3a738] hover:bg-[#dd962e] text-black px-7 py-3 
                 rounded-xl font-bold transition-all duration-300 shadow-[0_8px_30px_rgba(243,167,56,0.25)] cursor-pointer">
                  Login
                </button>
              </Link>
              <Link href="/register ">
                <button className="cursore-pointer hidden md:flex items-center 
                gap-2 bg-[#f3a738] hover:bg-[#dd962e] text-black px-7 py-3 
                rounded-xl font-bold transition-all duration-300 shadow-[0_8px_30px_rgba(243,167,56,0.25)] cursor-pointer">
                  Sign Up
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="lg:hidden text-white text-3xl"
              >
                {mobileMenu ? <HiX /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden bg-[#0d0d0d]/95 backdrop-blur-2xl border-b border-white/10">
          
          <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
            
            <Link
              href="/"
              className="text-white text-lg font-medium"
            >
              Home
            </Link>

            <Link
              href="/explore-cars"
              className="text-gray-300 text-lg"
            >
              Explore Cars
            </Link>

            <Link
              href="/add-car"
              className="text-gray-300 text-lg"
            >
              Add Car
            </Link>

            <Link
              href="/my-bookings"
              className="text-gray-300 text-lg"
            >
              My Bookings
            </Link>

            <Link href="/login">
              <button className="mt-4 bg-[#f3a738] text-black py-3 rounded-full font-bold">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}