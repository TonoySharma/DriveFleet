'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-indigo-950 flex flex-col items-center justify-center text-white px-4 relative overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Content Card */}
      <div className="relative z-10 text-center max-w-xl backdrop-blur-sm bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
        
        {/* Animated 404 Number */}
        <motion.h1 
          className="text-9xl font-extrabold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          404
        </motion.h1>

        {/* Floating Effect for Code Block */}
        <motion.div 
          className="absolute -top-10 -right-6 md:-right-12 bg-gray-800 text-xs font-mono p-3 rounded-lg shadow-lg border border-gray-700 text-green-400 hidden sm:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>page_not_found.err</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mt-6 text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Lost in Space?
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {/* Back to Home Button */}
          <Link href="/">
            <span className="inline-block w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-xl shadow-lg shadow-indigo-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              Back to Home
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Premium subtle footer */}
      <div className="absolute bottom-6 text-xs text-gray-600 tracking-wider font-mono">
        LOST IN SPACE © {new Date().getFullYear()}
      </div>
    </div>
  );
}