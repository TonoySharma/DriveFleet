"use client"

import { useRouter } from "next/navigation";
import { authClient, useSession } from "../../lib/auth-client";
import toast from "react-hot-toast";
import { Button } from "@heroui/react";
import { BookingButtonDropDown } from "../BookingButtonDropDown";



const ButtonSection = ({ availability, cars }) => {


  return (
    <div>
      <BookingButtonDropDown availability={availability} cars={cars}></BookingButtonDropDown>
 </div>
  );
};

export default ButtonSection;