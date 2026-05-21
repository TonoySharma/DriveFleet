
import Explorcars from "../../components/exploreCars/Explorcars";
import SearchBar from "../../components/exploreSearchBar/SearchBar";

const fatchcars = async (searchCar = '') => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars?search=${searchCar}`);
    //    console.log(process.env.NEXT_PUBLIC_API_URL);
    const data = res.json();
    return data || [];
}


const ExploreCardsPage = async ({searchParams}) => {
    // console.log(searchParams, 'search ');
    const sparams = await searchParams;
    // console.log(sparams,  'suesses');
    
    
    const exploreCars = await fatchcars(sparams?.searchCar || "");

    // console.log(exploreCars, 'exploreCars');

    return (
        <div>
            <section className="w-full bg-[#f5f1ea] py-24 px-4">
                <div className="container mx-auto mt-8">

                    {/* Top Content */}
                    <div className="max-w-3xl">
                        <p className="uppercase tracking-[0.3em] text-sm font-semibold text-lime-600 mb-4">
                            Explore Cars
                        </p>

                        <h1 className="text-5xl md:text-7xl font-black leading-[0.95] text-black">
                            Find a car that
                            <br></br>
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
                     <SearchBar></SearchBar>
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

