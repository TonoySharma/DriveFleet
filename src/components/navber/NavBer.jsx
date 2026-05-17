"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "../NavLink";

export default function NavBar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);


  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* 1. LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 tracking-wide">
              <Image src={'/image.png'} alt="Logo" width={100} height={100} />
            </Link>
          </div>

          {/* 2. NAVIGATION LINKS (Left/Center Side) */}
          <div className="hidden md:flex space-x-8 font-medium text-gray-600">
            <NavLink href="/">
              Home
            </NavLink>

            <NavLink href="/explore-cars" >
              Explore Cars
            </NavLink>

            <NavLink href="/add-car">
              Add Car
            </NavLink>

            <NavLink href="/my-bookings">
              My Bookings
            </NavLink>
          </div>

          {/* 3. CONDITIONAL BUTTONS / DROPDOWN (Right Side) */}
          <div className="flex items-center">
            {!isLoggedIn ? (
              // If NOT logged in: Show Login Button
           <Link href="/login">
                <button
                onClick={handleLogin}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-sm"
              >
                Login / Register
              </button>
           </Link>
            ) : (
              // If LOGGED in: Show User Profile Dropdown
              <div className="relative ml-3">
                <div>
                  <button
                    onClick={toggleDropdown}
                    className="flex text-sm rounded-full border-2 border-blue-600 focus:outline-none
                     focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                  >
                    <span className="sr-only">Open user menu</span>
                    {/* User Avatar (Placeholder) */}
                    <img
                      className="h-9 w-9 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                      alt="User Profile"
                    />
                  </button>
                </div>

                {/* Dropdown Menu Cards */}
                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-xl shadow-lg py-1
                   bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all divide-y divide-gray-100">

                    {/* Links according to your requirement */}
                    <div className="py-1">
                      <Link
                        href="/add-car"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        Add Car
                      </Link>
                      <Link
                        href="/my-bookings"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        My Bookings
                      </Link>
                      <Link
                        href="/my-added-cars"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      >
                        My Added Cars
                      </Link>
                    </div>

                    {/* Logout Button */}
                    <div className="py-1">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium transition-colors"
                      >
                        Logout
                      </button>
                    </div>

                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}