import Link from "next/link";
import React from "react";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { fetchFeaturedCar } from "../../lib/cars/data";


const AvailableCars = async () => {
  const cars = await fetchFeaturedCar();

  return (
    <div className="bg-[#f5f1ea]">
      <div className="container mx-auto p-5">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 my-10">

          <div>
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-lime-600 mb-3">
              Premium Collection
            </p>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Available Cars
            </h1>
          </div>

          <Link href="/explore-cars">
            <div
              className="group flex items-center gap-3 cursor-pointer
      bg-white hover:bg-gray-900 border border-gray-200
      hover:border-gray-900 px-6 py-2 rounded-2xl
      transition-all duration-300 shadow-sm hover:shadow-xl w-fit"
            >
              <span
                className="font-semibold text-gray-800
        group-hover:text-white transition-colors duration-300"
              >
                View All Cars
              </span>

              <FaArrowRight
                className="text-gray-700 group-hover:text-white
        transition-all duration-300 group-hover:translate-x-1"
              />
            </div>
          </Link>
        </div>

        {/* Cars Grid */}


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
          {cars?.slice(0, 6).map((car) => (

            <div
              key={car._id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl
      transition-shadow duration-300 border border-gray-100 flex flex-col justify-between"
            >

              {/* Image */}
              <div className="relative h-68 w-full overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.carModel}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full">
                  {car.brand}
                </span>

                <h1 className="text-xl font-bold text-gray-800 mt-3 mb-2 line-clamp-1">
                  {car.carModel}
                </h1>
              </div>

              {/* Button */}
              <div className="p-5 pt-0">
                <Link href={`/cars/${car._id}`}>
                  <button
                    className="w-full bg-gray-900 hover:bg-gray-800 cursor-pointer
                     text-white font-medium py-3 px-4 transition-all duration-300 shadow-sm group">
                    <p className="flex items-center justify-center gap-2 text-center rounded-3xl">
                      View Details

                      <FaAngleRight
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AvailableCars;