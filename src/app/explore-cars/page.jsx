
import { Search } from "lucide-react";
import Explorcars from "../../components/exploreCars/Explorcars";

const fatchcars = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars`)
    //    console.log(process.env.NEXT_PUBLIC_API_URL);
    const data = res.json();
    return data || [];
}


const ExploreCardsPage = async () => {
    const exploreCars = await fatchcars();

    // console.log(exploreCars, 'exploreCars');

    return (
        <div>
            <section className="w-full bg-[#f5f1ea] py-24 px-4">
                <div className="container mx-auto ">

                    {/* Top Content */}
                    <div className="max-w-3xl">
                        <p className="uppercase tracking-[0.3em] text-sm font-semibold text-lime-600 mb-4">
                            Explore Cars
                        </p>

                        <h1 className="text-5xl md:text-7xl font-black leading-[0.95] text-black">
                            Find a car that
                            <br />
                            matches the trip.
                        </h1>

                        <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-2xl">
                            Search across premium vehicles and discover the perfect ride for
                            your next adventure. Luxury, comfort, and performance — all in one
                            place.
                        </p>
                    </div>

                    {/* Search Box */}
                    <div className="mt-14">
                        <div className="bg-white/80 backdrop-blur-xl border
                         border-white/50  rounded-xl p-4 flex flex-col lg:flex-row gap-4 items-center">

                            {/* Search Input */}
                            <div className="flex items-center gap-3 bg-[#f7f7f7] rounded-2xl px-5 py-4 flex-1 w-full border border-gray-100">
                                <Search className="w-5 h-5 text-gray-400" />

                                <input
                                    type="text"
                                    placeholder="Search by car name..."
                                    className="bg-transparent outline-none w-full text-gray-700 placeholder:text-gray-400"
                                />
                            </div>

                            {/* Select */}
                            <select className="w-full lg:w-[220px] bg-[#f7f7f7] border
                             border-gray-100 rounded-2xl px-5 py-4 text-gray-700 outline-none">
                                <option>All Categories</option>
                                <option>SUV</option>
                                <option>Luxury</option>
                                <option>Electric</option>
                                <option>Sports</option>
                            </select>

                            {/* Button */}
                            <button className="w-full lg:w-auto bg-lime-400 hover:bg-lime-300
                             transition-all duration-300 text-black font-semibold px-10 py-4 rounded-2xl shadow-lg hover:scale-105">
                                Search
                            </button>
                        </div>
                    </div>

                </div>

                <div className="container mx-auto my-10 px-4">
                 
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {exploreCars?.map((car) => <Explorcars car={car} key={car._id}></Explorcars>
                            
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExploreCardsPage;

