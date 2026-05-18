import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Explorcars = ({ car }) => {
    return (
        <div>
            <div

                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl
                transition-shadow duration-300 border border-gray-100 flex flex-col justify-between"
            >

                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={car.image}
                        alt={car.carModel}
                        fill
                        className="object-cover hover:scale-110 transition duration-500"
                    />
                </div>

                <div className="p-5">

                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full">
                        {car.brand}
                    </span>


                    <h1 className="text-xl font-bold text-gray-800 mt-3 mb-2 line-clamp-1">
                        {car.carModel}
                    </h1>


                    <p className="text-gray-600 text-sm font-medium">
                        Price: <span className="text-lg font-bold text-emerald-600">${car.pricePerDay}</span> / day
                    </p>
                </div>

                {/* View Details Button */}
                <div className="p-5 pt-0">
                    <Link href={'/'}>
                        <button
                            className="w-full bg-gray-900 hover:bg-gray-800 cursor-pointer
                             text-white font-medium py-3 px-4 rounded-xl
                             transition-all duration-300 shadow-sm group"
                        >
                            <p className="flex items-center justify-center gap-2 text-center">
                                View Details

                                <FaAngleRight
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </p>
                        </button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Explorcars;