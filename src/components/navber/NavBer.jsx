"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FaChevronDown, FaCar, FaCalendarCheck, FaList, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";
import NavLink from "../NavLink";
import { authClient } from "../../lib/auth-client";
import { Avatar } from "@heroui/react";

export default function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSingOut = async () => {
    await authClient.signOut();
    setProfileOpen(false);
  };


  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
     
      <div className="bg-gray-400 border-b border-gray-800/60 shadow-xl">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            
           
            <Link href="/">
              <div className="flex flex-col leading-none cursor-pointer transform hover:scale-105 transition duration-300">
                <Image src={"/image.png"} alt="logo.png" width={120} height={120} priority />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <NavLink href="/" className="font-medium text-gray-300 
              hover:text-[#f3a738] transition duration-200">
                Home
              </NavLink>
              <NavLink href="/explore-cars" className="font-medium text-gray-300
               hover:text-[#f3a738] transition duration-200">
                Explore Cars
              </NavLink>
            </div>

        
            <div className="flex items-center gap-4">
              {user ? (
             
                <div className="relative flex items-center" ref={dropdownRef}>
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-5 bg-gray-900 hover:bg-gray-850 p-1.5 pr-3
                     rounded-full px-4 border border-gray-800 transition duration-200 focus:outline-none"
                  >
                    <Avatar size="sm" className="w-9 h-9 cursor-pointer">
                      <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                      <Avatar.Fallback className="bg-[#f3a738] text-black font-bold">
                        {user?.name?.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar>
                    <FaChevronDown
                      className={`text-gray-400 text-xs transition-transform duration-300 ${
                        profileOpen ? "rotate-180 text-[#f3a738]" : ""
                      }`}
                    />
                  </button>

               
                  <div
                    className={`absolute right-0 top-full mt-3 w-56 bg-[#1a1a1a] border border-gray-800 rounded-xl shadow-2xl transition-all duration-300 origin-top-right z-50 py-2 ${
                      profileOpen
                        ? "opacity-100 visible scale-100"
                        : "opacity-0 invisible scale-95 pointer-events-none"
                    }`}
                  >
                  
                    <div className="px-4 py-2 border-b border-gray-800/60 mb-1">
                      <p className="text-[11px] text-gray-500 tracking-wide uppercase">Signed in as</p>
                      <p className="text-sm font-semibold text-gray-200 truncate">{user?.name}</p>
                    </div>

                    <Link
                      href="/add-car"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-[#f3a738] transition duration-200"
                    >
                      <FaCar className="text-base text-gray-400" /> Add Car
                    </Link>
                    <Link
                      href="/my-bookings"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-[#f3a738] transition duration-200"
                    >
                      <FaCalendarCheck className="text-base text-gray-400" /> My Bookings
                    </Link>
                    <Link
                      href="/my-added-cars"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-[#f3a738] transition duration-200"
                    >
                      <FaList className="text-base text-gray-400" /> My Added Cars
                    </Link>

                    <div className="border-t border-gray-800/60 mt-1 pt-1">
                      <button
                        onClick={handleSingOut}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition duration-200 text-left font-medium"
                      >
                        <FaSignOutAlt className="text-base" /> Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
              
                <div className="hidden md:flex items-center gap-3">
                  <Link href="/login">
                    <button className="bg-[#f3a738] hover:bg-[#dd962e] text-black px-6 py-2.5 rounded-lg font-bold transition-all duration-300 shadow-[0_4px_20px_rgba(243,167,56,0.15)]">
                      Login
                    </button>
                  </Link>
                  <Link href="/register">
                    <button className="bg-transparent hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg font-medium transition border border-gray-700">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="lg:hidden text-white text-2xl p-2 rounded-lg bg-gray-900 border border-gray-800 hover:bg-gray-800 transition duration-200"
              >
                {mobileMenu ? <HiX /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>
      </div>

     
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenu ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
  
        <div className="absolute inset-0 bg-black/75" onClick={() => setMobileMenu(false)} />

        {/* Menu Content Box - Solid Background */}
        <div
          className={`absolute top-0 left-0 h-full w-[280px] bg-[#121212] border-r border-gray-800/80 p-6 flex flex-col justify-between transition-transform duration-300 shadow-2xl ${
            mobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-5 mt-12">
            <Link href="/" onClick={() => setMobileMenu(false)} className="text-white text-lg font-medium hover:text-[#f3a738] transition">
              Home
            </Link>
            <Link href="/explore-cars" onClick={() => setMobileMenu(false)} className="text-gray-300 text-lg hover:text-[#f3a738] transition">
              Explore Cars
            </Link>

            {user && (
              <>
                <hr className="border-gray-800 my-1" />
                <Link href="/add-car" onClick={() => setMobileMenu(false)} className="text-gray-300 text-lg hover:text-[#f3a738] transition">
                  Add Car
                </Link>
                <Link href="/my-bookings" onClick={() => setMobileMenu(false)} className="text-gray-300 text-lg hover:text-[#f3a738] transition">
                  My Bookings
                </Link>
                <Link href="/my-added-cars" onClick={() => setMobileMenu(false)} className="text-gray-300 text-lg hover:text-[#f3a738] transition">
                  My Added Cars
                </Link>
              </>
            )}
          </div>

     
          <div className="mb-6">
            {user ? (
              <button
                onClick={() => {
                  handleSingOut();
                  setMobileMenu(false);
                }}
                className="w-full bg-red-500/10 text-red-400 border border-red-500/20 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition"
              >
                <FaSignOutAlt /> Logout
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                <Link href="/login" onClick={() => setMobileMenu(false)}>
                  <button className="w-full bg-[#f3a738] hover:bg-[#dd962e] text-black py-3 rounded-xl font-bold shadow-lg transition">
                    LogIn
                  </button>
                </Link>
                <Link href="/register" onClick={() => setMobileMenu(false)}>
                  <button className="w-full bg-transparent text-white border border-gray-700 py-3 rounded-xl font-medium transition">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}