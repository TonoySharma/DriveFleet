"use client";

import { Button, Modal, } from "@heroui/react";
import { DollarSign, ImageIcon, MapPin, Pencil } from "lucide-react";
import { RxUpdate } from "react-icons/rx";

export function EditeCarSection({carsId}) {

  // const [open, setOpen] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const cars = Object.fromEntries(formData.entries());

    console.log(cars, 'cars');

    const res = await fetch(`http://localhost:5000/bookNow/${carsId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(cars),
    });

    const data = await res.json();

    console.log(data, 'edite data');

 setOpen(false);
  }


  return (
    <Modal>
      {/* Trigger Button */}
      <Button
        className="flex items-center justify-center gap-2
      bg-zinc-900/60 border border-zinc-700/50
      px-4 py-2.5 rounded
      font-semibold text-sm text-zinc-200
      transition-all active:scale-[0.98] cursor-pointer backdrop-blur"
      >
        <Pencil size={14} className="text-zinc-400" />
        Update Car
      </Button>

      {/* Modal */}
      <Modal.Backdrop className="backdrop-blur-md bg-black/60">
        <Modal.Container placement="center">
          <Modal.Dialog
            className="sm:max-w-[520px] w-full
          bg-zinc-950/90 border border-zinc-800
          rounded-2xl shadow-2xl backdrop-blur-xl"
          >
            <Modal.CloseTrigger />

            {/* HEADER */}
            <Modal.Header className="p-6 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <Pencil className="size-5 text-purple-400" />
                </div>

                <div>
                  <Modal.Heading className="text-lg font-semibold text-white">
                    Update Car Details
                  </Modal.Heading>
                  <p className="text-sm text-zinc-400">
                    Edit your car information and save changes
                  </p>
                </div>
              </div>
            </Modal.Header>

            {/* BODY */}
            <Modal.Body className="p-6">


              <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div className="md:col-span-2">
                  <InputField
                    name="imageUrl"
                    icon={<ImageIcon size={18} />}
                    label="Image URL"
                    placeholder="https://i.ibb.co/example.jpg"
                    type="text"
                  />
                </div>

                <InputField
                  name="dailyPrice"
                  icon={<DollarSign size={18} />}
                  label="Daily Price"
                  placeholder="120"
                  type="number"
                />

                {/* Car Type */}
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400">Car Type</label>
                  <select
                    name="carType"
                    className="w-full bg-zinc-900 border border-zinc-800
                  text-white rounded-xl px-4 py-3 outline-none
                  focus:border-purple-500 transition"
                  >
                    <option>SUV</option>
                    <option>Sedan</option>
                    <option>Hatchback</option>
                    <option>Luxury</option>
                    <option>Sports</option>
                    <option>Convertible</option>
                  </select>
                </div>

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
                  <label className="text-sm text-zinc-400">Description</label>
                  <textarea
                    name="description"
                    rows={4}
                    placeholder="Write something about the car..."
                    className="w-full bg-zinc-900 border border-zinc-800
                  text-white rounded-xl px-4 py-3 outline-none
                  focus:border-purple-500 transition resize-none"
                  />
                </div>

                {/* Availability */}
                <div className="">
                  <label className="text-sm text-gray-400 ">Availability</label>
                  <select
                    name="isAvailable"
                    className="w-full bg-zinc-900 border border-zinc-800
                  text-white rounded-xl px-4 py-3 outline-none
                  focus:border-purple-500 transition">
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                  </select>
                
                
                  <Button type="submit"
                    className=" bg-gradient-to-r mt-15 from-purple-500
                     to-indigo-600 text-white font-semibold py-3 rounded
              hover:opacity-90 transition active:scale-[0.98] lg:w-full" >

                   <p className="flex gap-2 items-center"><RxUpdate /> Update Now</p>
                  </Button>
             
                </div>
              </form>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

function InputField({ icon, label, placeholder, type, name }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-zinc-400">{label}</label>

      <div
        className="flex items-center gap-3
        bg-zinc-900 border border-zinc-800
        rounded-xl px-4 py-3
        focus-within:border-purple-500 transition"
      >
        <span className="text-zinc-500">{icon}</span>

        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none
          text-white placeholder:text-zinc-500"
        />
      </div>
    </div>
  );
}