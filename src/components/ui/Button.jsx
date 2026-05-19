"use client"
import React from 'react';

const ButtonSection = ({availability, user}) => {

      const handeBookNow = async () => {
         const bookingsdata ={
        userId: user?.id,
        userImage: user?.image,
        userName: user?.name,
       
        
       };
       console.log("Booking Data:", bookingsdata);
      };

    return (
        
              <button
               onClick={handeBookNow}
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