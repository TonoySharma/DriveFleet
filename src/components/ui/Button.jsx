"use client"

import { useRouter } from "next/navigation";
import { authClient, useSession } from "../../lib/auth-client";
import toast from "react-hot-toast";
import { Button } from "@heroui/react";
import { BookingButtonDropDown } from "../BookingButtonDropDown";



const ButtonSection = ({ availability, cars }) => {

  // const { data, session } = authClient.useSession()
  // // console.log(data.user);
  // const router = useRouter();

  // const handleBookNow = async () => {


  //   const { data: jwtData } = await authClient.token();

  //   // console.log(jwtData);
  //   const token = jwtData?.token;
  //   // console.log(token );

  //   if (!token) {
  //     toast.error("Authorization faild. car in add")

  //     return;
  //   }



  //   const updateData = {
  //     carImage: cars?.image,
  //     carBrand: cars?.brand,
  //     fuelType: cars?.fuelType,
  //     availability: cars?.availability,
  //     userId: data?.user?.id,
  //     userName: data?.user?.name,
  //     carTitle: cars?.carModel,
  //     price: cars?.pricePerDay
  //   }
  //   // console.log(updateData, 'update data');


  //   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookNow/${cars?._id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`
  //     },

  //     body: JSON.stringify(updateData)

  //   })

  //   // console.log(res);
  //   const result = await res.json();
  //   toast.success("Car booked successfuly")
  //   // console.log(result);

  //   if (!data) {
  //     toast.error("Something went wrong")

  //     return;
  //   }

  //   router.push('/my-bookings')

  // };



  return (
    <div>
      <BookingButtonDropDown availability={availability} cars={cars}></BookingButtonDropDown>
 </div>
  );
};

export default ButtonSection;