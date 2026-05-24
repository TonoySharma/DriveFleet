import MyAddedCarPage from '@/components/myAddCars/MyAddedCar';
import React from 'react';

export const metadata = {
  title: "My Added Cars | Car Rental",
  description:
    "Manage your listed vehicles, track their availability, update pricing, and view rental performance of your added cars.",
};

const page = () => {
  return (
    <div>
      <MyAddedCarPage></MyAddedCarPage>
    </div>
  );
};

export default page;