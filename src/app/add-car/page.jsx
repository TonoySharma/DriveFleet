
import React from 'react';
import AddCarPage from '../../components/addCar/AddCarForm';

export const metadata = {
  title: "Add New Car | Car Rental",
  description:
    "List your vehicle on our premium car rental platform. Enter car details, specifications, and pricing to start renting out.",
};

const CarPage = () => {
  return (
    <div>
      <AddCarPage></AddCarPage>
    </div>
  );
};

export default CarPage;