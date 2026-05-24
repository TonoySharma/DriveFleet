"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Dropdown, Label, Modal } from "@heroui/react";
import { Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaAngleRight } from "react-icons/fa";
import { IoCarSportOutline } from "react-icons/io5";


export function BookingButtonDropDown({ availability, cars }) {
  const [selected, setSelected] = useState(new Set(["apple"]));
  const [note, setNote] = useState("");
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession()
  // console.log(session?.user);

  const router = useRouter();

  const handleBookNow = async () => {


    const { data: jwtData } = await authClient.token();

    // console.log(jwtData);
    const token = jwtData?.token;
    // console.log(token );

    if (!token) {
      toast.error("Authorization faild. car in add")

      return;
    }


    const updateData = {
      carImage: cars?.image,
      carBrand: cars?.brand,
      fuelType: cars?.fuelType,
      availability: cars?.availability,
      userId: session?.user?.id,
      userName: session?.user?.name,
      carTitle: cars?.carModel,
      price: cars?.pricePerDay
    }
    // console.log(updateData, 'update data');


    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookNow/${cars?._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },

      body: JSON.stringify(updateData)

    })

    // console.log(res);

    const result = await res.json();

    // console.log(result);


    if (!res.ok) {
      toast.error("Something went wrong");
      return;
    }

    toast.success("Car booked successfully");

    router.push('/my-bookings');

  };

  return (
    <Modal>
      {/* Trigger Button */}
      <Button
        className="w-full bg-gray-900 hover:bg-gray-800 cursor-pointer
                                   text-white font-medium py-3 px-4 rounded
                                   transition-all duration-300 shadow-sm group">
        <p className="flex items-center justify-center gap-2 text-center">
          View Details

          <FaAngleRight
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </p>
      </Button>

      {/* Modal */}
      <Modal.Backdrop className="backdrop-blur-sm bg-black/40">
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[400px] bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 p-2">

            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="flex items-center gap-3 px-4 pt-4">
              <Modal.Icon className="bg-blue-100 text-blue-600 rounded-full p-2">
                <IoCarSportOutline className="w-10 h-10" />
              </Modal.Icon>

              <Modal.Heading className="text-lg font-bold text-gray-800">
                Confirm Your Booking
              </Modal.Heading>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="px-4 py-4 space-y-4">

              <div className="text-sm text-gray-500">
                Choose confirmation option before booking your car
              </div>

              {/* Dropdown */}
              <div className="space-y-2">
                <label className="text-sm text-black">Need Driver</label>

                <select
                  name="carType"
                  whileFocus={{ scale: 1.01 }}
                  className="w-full bg-zinc-900 border border-gray-700
              text-white rounded px-4 py-3 outline-none transition"
                >
                  <option value="SUV">Select Option</option>
                  <option value="Sedan">Yes</option>
                  <option value="Hatchback">No</option>
                </select>
              </div>
              
              <div className="space-y-1">
                <Label>Note</Label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Enter your note"
                  className="w-full border border-dashed border-gray-300 rounded-xl px-3 py-2 h-24 bg-gray-50 resize-none"
                />
              </div>
            </Modal.Body>

            {/* Footer */}
            <Modal.Footer className="px-4 pb-4">
              <Button
                onClick={handleBookNow}
                disabled={!availability}
                className={`w-full bg-gray-900 hover:bg-gray-800 cursor-pointer
                       text-white font-medium py-3 px-4 rounded
                         transition-all duration-300 shadow-sm group]
              ${availability
                    ? " bg-gray-900 text-white shadow-lg hover:shadow-xl"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
              >
                {availability ? "Continue Booking →" : "Currently Unavailable"}
              </Button>
            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}