"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from "react-hook-form";

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
  };



  return (
    <div className=" min-h-screen w-full flex bg-[#FDFBF7] font-sans overflow-hidden">


      <div className="hidden lg:flex w-1/2 bg-[#0E0E0E] text-white p-12 flex-col justify-between relative overflow-hidden">


        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 z-10">

          <div className="grid grid-cols-2 gap-1 w-6 h-6">
            <span className="bg-[#E25C34] rounded-sm"></span>
            <span className="bg-gray-600 rounded-sm"></span>
            <span className="bg-gray-600 rounded-sm"></span>
            <span className="bg-[#E25C34] rounded-sm"></span>
          </div>
          <span className="text-xl font-bold tracking-wide">Drive<span className="text-[#E25C34]">Fleet</span></span>
        </motion.div>


        <div className="z-10 my-auto space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Premium Fleet</p>
            <h2 className="text-2xl font-semibold tracking-tight">Luxury & Sports Cars</h2>
          </div>

          <div className="flex gap-6">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="w-1/2 aspect-[4/5] rounded-2xl overflow-hidden relative group cursor-pointer shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=600"
                alt="Luxury Sedan"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t import-from-black via-transparent to-transparent opacity-80" />
              <p className="absolute bottom-4 left-4 text-sm font-medium">Audi RS e-tron, Germany</p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              className="w-1/2 aspect-[4/5] rounded-2xl overflow-hidden relative group cursor-pointer shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600"
                alt="Sports Car"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <p className="absolute bottom-4 left-4 text-sm font-medium">Mercedes-AMG, Germany</p>
            </motion.div>
          </div>
        </div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="z-10"
        >
          <p className="text-xl font-light leading-relaxed">
            Your journey, elevated in <span className="text-[#E25C34] font-medium italic">every drive.</span>
          </p>
          <p className="text-xs text-gray-500 mt-2">DriveFleet Premium Rental Community</p>
        </motion.div>


        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#E25C34] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      </div>

      {/* Login Section */}
      <div
        className="w-full lg:w-1/2 flex items-center 
      justify-center p-8 sm:p-12 lg:p-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md space-y-8"
        >

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mt-4 mb-1">
              Login Account
            </h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Email */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-0.5">
                Email <span className="text-[#E25C34]">*</span>
              </label>

              <input
                type="email"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 
              focus:outline-none focus:border-black transition-all duration-300 
              text-sm placeholder-gray-400 bg-white shadow-sm"
              />

              {/* Field Error */}
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-0.5">
                Password <span className="text-[#E25C34]">*</span>
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 
              focus:outline-none focus:border-black transition-all duration-300 
              text-sm placeholder-gray-400 bg-white shadow-sm"
              />

              {/* Field Error */}
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}

              <p className="text-[11px] text-gray-400 pl-1">
                Must be at least 8 characters with 1 uppercase and 1 number
              </p>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-black text-white py-3.5 rounded font-medium text-sm flex
            items-center justify-center gap-2 shadow-lg hover:bg-zinc-900 transition-colors mt-6"
            >
              Login <span>&rarr;</span>
            </motion.button>

          </form>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-xs text-gray-400 uppercase tracking-widest">
              or
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full bg-white border border-gray-200 text-gray-700 py-3
          rounded font-medium text-sm flex items-center justify-center gap-2 
          shadow-sm hover:bg-gray-50 transition-colors"
          >
            <p className="flex gap-2 items-center">
              <FcGoogle />
              Continue with Google
            </p>
          </motion.button>


          <h2 className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-1">
            Already have an account?{" "}
            <Link href={'/register'}>
              <p
                href="#signin"
                className="text-[#E25C34] font-semibold hover:underline">
                Register
              </p>
            </Link>
          </h2>


        </motion.div>
      </div>
    </div>
  );
}