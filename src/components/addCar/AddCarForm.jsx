"use client";

import { motion } from "framer-motion";
import {
  Car,
  DollarSign,
  MapPin,
  Users,
  ImageIcon,
  CheckCircle2,
} from "lucide-react";

import { addCar } from "../../lib/action";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function AddCarPage() {
  const router = useRouter();

  const handleSubmit = async (formdata) => {

    const currentEmail = session?.user?.email;

    if (!currentEmail) {
      alert("Please Login");
      return;
    }

    formdata.append("userEmail", currentEmail);
    const data = await addCar(formdata);

    if (data?.insertedId) {
      router.push("/");
    }
  };

  const { data: session } = useSession();
  const userEmail = session?.user?.email || "";


  return (
    <div
      className="min-h-screen bg-gradient-to-br 
    from-black via-zinc-900 to-black 
    flex items-center justify-center px-4 py-12" >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-white/5 
        backdrop-blur-xl border border-white/10 
        rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="p-8 md:p-10 border-b border-white/10">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Add Car Listing
          </motion.h1>

          <p className="text-zinc-400 mt-3 text-lg">
            Showcase your premium vehicle with complete details.
          </p>
        </div>

        {/* Form */}
        <form
          action={handleSubmit}
          className="p-8 md:p-10 grid grid-cols-1 
          md:grid-cols-2 gap-6">

          {/* Car Name */}
          <InputField
            name="carName"
            icon={<Car size={18} />}
            label="Car Name"
            placeholder="Tesla Model S"
            type="text"
          />

          {/* Daily Rent */}
          <InputField
            name="dailyPrice"
            icon={<DollarSign size={18} />}
            label="Daily Rent Price"
            placeholder="120"
            type="number"
          />

          {/* Car Type */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-300">Car Type</label>

            <motion.select
              name="carType"
              whileFocus={{ scale: 1.01 }}
              className="w-full bg-zinc-900 border border-zinc-700
              text-white rounded-xl px-4 py-3 outline-none
              focus:border-purple-500 transition"
            >
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Luxury">Luxury</option>
              <option value="Sports">Sports</option>
              <option value="Convertible">Convertible</option>
            </motion.select>
          </div>

          {/* Seat Capacity */}
          <InputField
            name="seatCapacity"
            icon={<Users size={18} />}
            label="Seat Capacity"
            placeholder="4"
            type="number"
          />

          {/* Image URL */}
          <div className="md:col-span-2">
            <InputField
              name="imageUrl"
              icon={<ImageIcon size={18} />}
              label="Image URL"
              placeholder="https://i.ibb.co/example.jpg"
              type="text"
            />
          </div>

          {/* Pickup Location */}
          <div className="md:col-span-2">
            <InputField
              name="pickupLocation"
              icon={<MapPin size={18} />}
              label="Pickup Location"
              placeholder="Dhaka, Bangladesh"
              type="text"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2 space-y-2">
            <label className="text-sm text-zinc-300">Description</label>

            <motion.textarea
              name="description"
              whileFocus={{ scale: 1.01 }}
              rows={5}
              placeholder="Write something about the car..."
              className="w-full bg-zinc-900 border border-zinc-700 
              text-white rounded-2xl px-4 py-4 outline-none 
              focus:border-purple-500 transition resize-none"
            />
          </div>

          {/* Availability */}
          <div className="space-y-2">
            <label className="text-sm text-zinc-300">
              Availability Status
            </label>

            <motion.select
              name="isAvailable"
              whileFocus={{ scale: 1.01 }}
              className="w-full bg-zinc-900 border border-zinc-700 
              text-white rounded-xl px-4 py-3 outline-none 
              focus:border-purple-500 transition"
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </motion.select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 pt-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full text-white py-4 rounded
              font-semibold text-lg shadow bg-blue-500
              hover:bg-blue-600 transition flex items-center
              justify-center gap-2"
            >
              <CheckCircle2 size={22} />
              Add Car
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

/* Reusable Input Component */
function InputField({
  icon,
  label,
  placeholder,
  type,
  name,
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-zinc-300">{label}</label>

      <motion.div
        whileFocus={{ scale: 1.01 }}
        className="flex items-center gap-3 
        bg-zinc-900 border border-zinc-700 
        rounded-xl px-4 py-3 
        focus-within:border-purple-500 transition"
      >
        <span className="text-zinc-400">{icon}</span>

        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required
          className="w-full bg-transparent outline-none 
          text-white placeholder:text-zinc-500"
        />
      </motion.div>
    </div>
  );
}