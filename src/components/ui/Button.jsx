"use client"

import { useRouter } from "next/navigation";
import { authClient, useSession } from "../../lib/auth-client";
import toast from "react-hot-toast";


const ButtonSection = ({ availability, cars }) => {

  const { data, session } = authClient.useSession()
  // console.log(data.user);
  const router = useRouter();

  const handleBookNow = async () => {


    const { data: jwtData } = await authClient.token();

    // console.log(jwtData);
    const token = jwtData?.token;
    // console.log(token );

    if (!token) {
      toast.error("Authorization faild. car ni add")

      return;
    }



    const updateData = {
      carImage: cars?.image,
      carBrand: cars?.brand,
      fuelType: cars?.fuelType,
      availability: cars?.availability,
      userId: data?.user?.id,
      userName: data?.user?.name,
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
    toast.success("Car booked successfuly")
    // console.log(result);

    if (!data) {
      toast.error("Something went wrong")

      return;
    }

    router.push('/my-bookings')

  };



  return (

    <button
      onClick={handleBookNow}
      disabled={!availability}
      className={`w-full cursor-pointer py-4 px-6 rounded text-center text-sm font-bold shadow-lg transition-all duration-200 active:scale-[0.98] ${availability
        ? 'bg-blue-500 border border-blue-300 text-white hover:bg-blue-700 hover:shadow-blue-200 shadow-md'
        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}>
      {availability ? 'Book Now This Car' : 'Currently Unavailable'}

    </button>

  );
};

export default ButtonSection;