"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full flex bg-[#FDFBF7] font-sans overflow-hidden">
      
     
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
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
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
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
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

    
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md space-y-8" >
    
          <div>
            <span className="bg-[#F6ECE4] text-[#E25C34] text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider uppercase">
              New Account
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mt-4 mb-1">Create Account</h1>
            <p className="text-sm text-gray-500">Join 12,000+ drivers and car enthusiasts.</p>
          </div>

         
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
       
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-0.5">
                Full Name <span className="text-[#E25C34]">*</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter username" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none
                 focus:border-black transition-all duration-300 text-sm placeholder-gray-400 bg-white shadow-sm"/>
              <p className="text-[11px] text-gray-400 pl-1">Choose a unique username for your account</p>
            </div>

          
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-0.5">
                Email <span className="text-[#E25C34]">*</span>
              </label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none
                 focus:border-black transition-all duration-300 text-sm placeholder-gray-400 bg-white shadow-sm"
              />
            </div>

       
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">
                Photo URL <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input 
                type="url" 
                placeholder="Enter photo URL" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none
                 focus:border-black transition-all duration-300 text-sm placeholder-gray-400 bg-white shadow-sm"
              />
              <p className="text-[11px] text-gray-400 pl-1">Add a profile picture URL to personalize your account</p>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700 flex items-center gap-0.5">
                Password <span className="text-[#E25C34]">*</span>
              </label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none
                 focus:border-black transition-all duration-300 text-sm placeholder-gray-400 bg-white shadow-sm"
              />
              <p className="text-[11px] text-gray-400 pl-1">Must be at least 8 characters with 1 uppercase and 1 number</p>
            </div>

        
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-black text-white py-3.5 rounded-xl font-medium text-sm flex
               items-center justify-center gap-2 shadow-lg hover:bg-zinc-900 transition-colors mt-6"
            >
              Create Account <span>&rarr;</span>
            </motion.button>
          </form>

    
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-xs text-gray-400 uppercase tracking-widest">or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

       
          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full bg-white border border-gray-200 text-gray-700 py-3
             rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition-colors"
          >
          
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5.04c1.67 0 3.2.58
               4.38 1.71l3.27-3.27C17.67 1.6 14.99 1 12 1 7.35
                1 3.37 3.67 1.39 7.56l3.78 2.93c.89-2.67 3.39-4.45 6.83-4.45z"/>
              <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.42h6.46c-.28
               1.47-1.11 2.72-2.36 3.56l3.66 2.84c2.14-1.98 3.39-4.89 3.39-8.48z"/>
              <path fill="#FBBC05" d="M5.17 14.81c-.23-.69-.36-1.43-.36-2.19s.13-1.5.36-2.19L1.39
               7.56C.5 9.34 0 11.31 0 13.4s.5 4.06 1.39 5.84l3.78-2.93z"/>
              <path fill="#34A853" d="M12 23c3.24 0 5.97-1.08 7.96-2.91l-3.66-2.84c-1.01.68-2.31 1.09-4.3
               1.09-3.44 0-5.94-1.78-6.83-4.45L1.39 16.82C3.37 20.33 7.35 23 12 23z"/>
            </svg>
            Continue with Google
          </motion.button>

     
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{' '}
            <a href="#signin" className="text-[#E25C34] font-semibold hover:underline">Sign in</a>
          </p>

        </motion.div>
      </div>
    </div>
  );
}