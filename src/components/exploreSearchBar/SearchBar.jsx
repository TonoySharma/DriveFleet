"use client"

import { Button } from '@heroui/react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { GoArrowUpLeft } from 'react-icons/go';


const SharchBar = () => {
const [search, setSearch] = useState();
const router = useRouter();
const searchParams = useSearchParams();

// console.log(searchParams,  'searchParams');

const handleSearchCar = () =>{
    const params = new URLSearchParams(searchParams.toString());
    if(search){
        params.set("searchCar", search)
    }else{
        params.delete("searchCar")
    }
  router.push(`/explore-cars?${params.toString()}`)

}


    return (
        <div>
             <Link href={'/explore-cars'}>
             <h1 className='my-5 text-cyan-600 font-bold hover:underline flex gap-1 items-center'><GoArrowUpLeft />Back to Explore</h1>
             </Link>
            <div className="bg-white/80 backdrop-blur-xl border
                         border-white/50  rounded-xl p-4 flex flex-col lg:flex-row gap-4 items-center">

                {/* Search Input */}
                <div className="flex items-center gap-3 bg-[#f7f7f7] 
                            rounded-xl px-5 py-4 flex-1 w-full border border-gray-200">
                    <Search className="w-5 h-5 text-gray-400" />

                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="Search by car name..."
                        className="bg-transparent outline-none w-full text-gray-700
                            placeholder:text-gray-400"/>
                </div>

                {/* Button */}
                <Button onClick={handleSearchCar} className="w-full lg:w-auto bg-green-100  border border-green-300 text-black font-semibold px-10 py-5
                              rounded shadow cursor-pointer lg:px-5 lg:py-6 hover:bg-green-300 transition-all duration-300">
                    <p className="flex gap-1 items-center"><FcSearch /> Search</p>
                </Button>
            </div>
        </div>
    );
};

export default SharchBar;