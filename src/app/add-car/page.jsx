'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, DollarSign, Image, Users, MapPin, FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AddCarPage() {
  const [formData, setFormData] = useState({
    carName: '',
    dailyPrice: '',
    carType: 'SUV',
    imageUrl: '',
    seatCapacity: '5',
    pickupLocation: '',
    description: '',
    isAvailable: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log('Submitted Data:', formData);
    setIsSubmitting(false);
    setSuccess(true);
    

    setTimeout(() => setSuccess(false), 3000);
  };


  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-start
     justify-center pt-28 pb-12 px-6 selection:bg-indigo-500 selection:text-white relative">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl bg-slate-800/50 backdrop-blur-xl border
         border-slate-700/50 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <motion.h2 
            className="text-3xl font-bold bg-gradient-to-r
             from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent inline-block"
            animate={{ scale: [0.95, 1] }}
          >
            Add New Car Listing
          </motion.h2>
          <p className="text-slate-400 mt-2 text-sm">Fill in the details below to list your vehicle.</p>
        </div>

     
        {success && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 flex items-center gap-2 bg-emerald-500/10 border
             border-emerald-500/20 text-emerald-400 p-4 rounded-xl text-sm"
          >
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>Listing added successfully! Your car is now live.</span>
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Car Name */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Car className="w-4 h-4 text-indigo-400" /> Car Name
            </label>
            <input 
              required
              type="text"
              name="carName"
              value={formData.carName}
              onChange={handleChange}
              placeholder="e.g. Tesla Model S, BMW M4"
              className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3
               text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 
               focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
            />
          </motion.div>

     
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-indigo-400" /> Daily Rent Price ($)
              </label>
              <input 
                required
                type="number"
                name="dailyPrice"
                value={formData.dailyPrice}
                onChange={handleChange}
                placeholder="0.00"
                className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3
                 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2
                  focus:ring-indigo-500/20 transition-all duration-200"/>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Car className="w-4 h-4 text-indigo-400" /> Car Type
              </label>
              <select 
                name="carType"
                value={formData.carType}
                onChange={handleChange}
                className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3
                 text-slate-100 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20
                  transition-all duration-200 cursor-pointer"
              >
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Luxury">Luxury</option>
                <option value="Crossover">Crossover</option>
              </select>
            </motion.div>
          </div>

          {/* Image URL & Seat Capacity (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Image className="w-4 h-4 text-indigo-400" /> Image URL
              </label>
              <input 
                required
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://imgbb.com/your-image-link"
                className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3
                 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 
                 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Users className="w-4 h-4 text-indigo-400" /> Seat Capacity
              </label>
              <select 
                name="seatCapacity"
                value={formData.seatCapacity}
                onChange={handleChange}
                className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3 text-slate-100
                 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 cursor-pointer"
              >
                <option value="2">2 Seats</option>
                <option value="4">4 Seats</option>
                <option value="5">5 Seats</option>
                <option value="7">7 Seats</option>
                <option value="8+">8+ Seats</option>
              </select>
            </motion.div>
          </div>

          {/* Pickup Location */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-indigo-400" /> Pickup Location
            </label>
            <input 
              required
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="e.g. Airport, Downtown, Specific Address"
              className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3
               text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500
                focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200"
            />
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-400" /> Description
            </label>
            <textarea 
              required
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Describe features, conditions, or rules of the car..."
              className="w-full bg-slate-900/60 border border-slate-700 rounded-xl px-4 py-3
               text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500
                focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 resize-none"
            />
          </motion.div>

          {/* Availability Status (Toggle Switch) */}
          <motion.div variants={itemVariants} className="flex items-center justify-between p-4
           bg-slate-900/40 border border-slate-700/60 rounded-2xl">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-200">Availability Status</span>
              <span className="text-xs text-slate-400">Turn off if the car is currently rented or under maintenance.</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                name="isAvailable"
                checked={formData.isAvailable}
                onChange={handleChange}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer
               peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute
                after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border
                 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500"></div>
            </label>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants} className="pt-2">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600
               hover:to-purple-700 text-white font-medium py-3.5 px-4 rounded shadow-lg shadow-indigo-500/20
                transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50  cursor-pointer" >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" />
                  </svg>
                  Processing...
                </>
              ) : 'Add  Car'}
            </motion.button>
          </motion.div>

        </form>
      </motion.div>
    </div>
  );
}