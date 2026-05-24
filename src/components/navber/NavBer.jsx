"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import {
  FaChevronDown,
  FaCar,
  FaCalendarCheck,
  FaList,
  FaSignOutAlt,
} from "react-icons/fa";
import NavLink from "../NavLink";
import { authClient } from "../../lib/auth-client";
import { Avatar } from "@heroui/react";

export default function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
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

      {/* Desktop navbar */}
      <div
        style={{ background: "#1e293b", borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        className="shadow-md"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[66px]">

            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-1.5 cursor-pointer group">
                <span className="text-2xl font-medium text-white tracking-tight">
                  Car<span className="text-[#f3a738]">.</span>Rental
                </span>
                <span
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                  style={{ background: "#f3a738", color: "#000" }}
                >
                  Beta
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1 text-white gap-10">
              {[
                { href: "/", label: "Home" },
                { href: "/explore-cars", label: "Explore Cars" },
                { href: "/add-car", label: "Add Car" },
                { href: "/my-bookings", label: "My Bookings" },
              ].map(({ href, label }) => (
                <NavLink
                  key={href}
                  href={href}
                  className="text-[13.5px] text-white/50 hover:text-white hover:bg-white/10
                   px-3 py-1.5 rounded-lg transition-all duration-150"
                  activeClassName="text-white bg-white/10">
                  {label}
                </NavLink>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-2.5 px-3 py-1.5 rounded-[9px] transition-all duration-150 focus:outline-none"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: profileOpen
                        ? "1px solid rgba(243,167,56,0.4)"
                        : "1px solid rgba(255,255,255,0.1)",
                    }}>
                    <Avatar size="sm" className="w-7 h-7">
                      <Avatar.Image
                        referrerPolicy="no-referrer"
                        alt={user?.name}
                        src={user?.image}
                      />
                      <Avatar.Fallback
                        className="text-xs font-medium"
                        style={{ background: "#f3a738", color: "#000" }}
                      >
                        {user?.name?.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar>
                    <span className="text-[13px] text-white/80 hidden sm:block">
                      {user?.name?.split(" ")[0]}
                    </span>
                    <FaChevronDown
                      className={`text-[9px] transition-transform duration-200 ${
                        profileOpen ? "rotate-180 text-[#f3a738]" : "text-white/30"
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute right-0 top-full mt-2.5 w-[215px] rounded-xl py-1.5 z-50 transition-all duration-200 origin-top-right ${
                      profileOpen
                        ? "opacity-100 visible scale-100"
                        : "opacity-0 invisible scale-95 pointer-events-none"
                    }`}
                    style={{
                      background: "#253044",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <div
                      className="px-3 py-2.5 mb-1"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <p className="text-[10px] text-white/30 uppercase tracking-widest">
                        Signed in as
                      </p>
                      <p className="text-[13px] font-medium text-white/85 mt-0.5 truncate">
                        {user?.name}
                      </p>
                    </div>

                    {[
                      { href: "/add-car", icon: <FaCar />, label: "Add Car" },
                      { href: "/my-bookings", icon: <FaCalendarCheck />, label: "My Bookings" },
                      { href: "/my-added-car", icon: <FaList />, label: "My Added Cars" },
                    ].map(({ href, icon, label }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2.5 text-[13px] text-white/60 hover:text-[#f3a738] hover:bg-white/5 rounded-lg mx-1 transition-all duration-150"
                      >
                        <span className="text-sm">{icon}</span>
                        {label}
                      </Link>
                    ))}

                    <div
                      className="mt-1 pt-1"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-2.5 px-3 py-2.5 text-[13px] rounded-lg mx-1 transition-all duration-150 text-left"
                        style={{
                          color: "rgba(248,113,113,0.8)",
                          width: "calc(100% - 8px)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(248,113,113,0.08)";
                          e.currentTarget.style.color = "rgb(248,113,113)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "rgba(248,113,113,0.8)";
                        }}
                      >
                        <FaSignOutAlt /> Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  <Link href="/login">
                    <button
                      className="text-[13.5px] font-medium px-5 py-2 rounded-lg cursor-pointer 
                      transition-all duration-200 hover:brightness-90 text-white border border-orange-500 hover:bg-orange-600">
                      Login
                    </button>
                  </Link>
                  <Link href="/register">
                    <button
                      className="text-[13.5px] px-4 py-2 rounded-lg cursor-pointer transition-all duration-200
                       text-white border border-orange-500 hover:bg-orange-600">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="lg:hidden text-white text-xl p-2 rounded-lg transition-all duration-150 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
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
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMobileMenu(false)}
        />

        <div
          className={`absolute top-0 left-0 h-full w-[270px] flex flex-col justify-between p-6 shadow-2xl transition-transform duration-300 ${
            mobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            background: "#1a2638",
            borderRight: "1px solid rgba(255,255,255,0.08)",
          }}>
          {/* Logo */}
          <div>
            <div className="flex items-center gap-1.5 mb-8 mt-2">
              <span className="text-[18px] font-medium text-white">
                Car<span className="text-[#f3a738]">.</span>Rental
              </span>
            </div>

            <div className="flex flex-col gap-1 text-white space-y-8">
              {[
                { href: "/", label: "Home" },
                { href: "/explore-cars", label: "Explore Cars" },
                { href: "/add-car", label: "Add Car" },
                { href: "/my-bookings", label: "My Bookings" },
              ].map(({ href, label }) => (
                <NavLink
                  key={href}
                  href={href}
                  onClick={() => setMobileMenu(false)}
                  className="text-[14px] text-white/50 hover:text-white hover:bg-white/8 px-3 py-2.5 rounded-lg transition-all duration-150"
                  activeClassName="text-white bg-white/10"
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="mb-4">
            {user ? (
              <>
                <div
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg mb-3"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium"
                    style={{ background: "#f3a738", color: "#000" }}
                  >
                    {user?.name?.charAt(0)}
                  </div>
                  <span className="text-[13px] text-white/70 truncate">{user?.name}</span>
                </div>
                <button
                  onClick={() => { handleSignOut(); setMobileMenu(false); }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-[13.5px] font-medium transition cursor-pointer"
                  style={{
                    color: "rgb(248,113,113)",
                    background: "rgba(248,113,113,0.08)",
                    border: "1px solid rgba(248,113,113,0.15)",
                  }}
                >
                  <FaSignOutAlt /> Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <Link href="/login" onClick={() => setMobileMenu(false)}>
                  <button
                    className="w-full py-2.5 rounded-lg font-medium text-[14px] cursor-pointer transition hover:brightness-90"
                    style={{ background: "#f3a738", color: "#000" }}
                  >
                    Login
                  </button>
                </Link>
                <Link href="/register" onClick={() => setMobileMenu(false)}>
                  <button
                    className="w-full py-2.5 rounded-lg text-[14px] cursor-pointer transition"
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
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