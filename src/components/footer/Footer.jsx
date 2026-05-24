"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import FadeUp from "../FadeUp";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <FadeUp>
      <div className="container mx-auto px-6 md:px-12 py-16">
        
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-5">
              Car <span className="text-orange-400">Rental</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Premium car rental service for your business trips,
              vacations, and special events.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-orange-400 transition flex items-center justify-center"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-orange-400 transition flex items-center justify-center"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-orange-400 transition flex items-center justify-center"
              >
                <FaTwitter size={18} />
              </Link>

              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-orange-400 transition flex items-center justify-center"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Useful Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/" className="hover:text-orange-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/cars" className="hover:text-orange-400 transition">
                  Car List
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-orange-400 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-orange-400 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-orange-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5 text-gray-400">
              
              <div className="flex items-start gap-4">
                <FaLocationDot
                  className="text-orange-400 mt-1"
                  size={18}
                />
                <p>Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-orange-400" size={18} />
                <p>+880 17*******</p>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-orange-400" size={18} />
                <p>carrentalt58@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Newsletter
            </h3>

            <p className="text-gray-400 mb-5">
              Subscribe to get latest offers and updates.
            </p>

            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-orange-400"
              />

              <button className="bg-orange-400 hover:bg-orange-500 transition rounded-xl py-3 font-semibold text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-gray-500 text-sm">
            © 2026 Car Rental. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-orange-400 transition">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-orange-400 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
       </FadeUp>
    </footer>
  );
};

export default Footer;