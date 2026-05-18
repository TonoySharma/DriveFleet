import Image from 'next/image';


const fetchSinglecar = async (id)=>{
  
    const res = await fetch (`${process.env.NEXT_PUBLIC_API_URL}/cars/${id}`)
    const data = await res.json();
    return data || {};

}


export default async function CarDetails({params}) {
 const {id} = await params;
 const cars = await fetchSinglecar(id)

  const {
    carModel,
    brand,
    pricePerDay,
    image,
    fuelType,
    seats,
    availability,
  } = cars

// console.log(cars);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-10">
          
  
          <div className="relative h-[300px] sm:h-[400px] lg:h-full min-h-[350px] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-md group">
            <Image
              src={image}
              alt={carModel}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
      
            <span className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm ${
              availability ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}>
              {availability ? 'Available' : 'Rent Out'}
            </span>
          </div>

   
          <div className="flex flex-col justify-between space-y-6 py-2">
            <div>
        
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-1">
                {brand}
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
                {carModel}
              </h1>

              <div className="mt-4 flex items-baseline text-gray-900">
                <span className="text-3xl font-extrabold tracking-tight">${pricePerDay}</span>
                <span className="ml-1 text-sm font-semibold text-gray-500">/ day</span>
              </div>

              <hr className="my-6 border-gray-200" />

            
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col justify-center">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Fuel Type</span>
                  <span className="text-base font-bold text-gray-800 mt-0.5">{fuelType}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col justify-center">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Seats</span>
                  <span className="text-base font-bold text-gray-800 mt-0.5">{seats} Person</span>
                </div>
              </div>

             
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Experience the future of driving with the {carModel}. Combining performance, safety, and efficiency, it’s the perfect choice for your next premium trip.
                </p>
              </div>
            </div>

            
            <div className="pt-4">
              <button
                disabled={!availability}
                className={`w-full py-4 px-6 rounded text-center text-sm font-bold shadow-lg transition-all duration-200 active:scale-[0.98] ${
                  availability
                    ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-200 shadow-md'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {availability ? 'Book This Car Now' : 'Currently Unavailable'}
              </button>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}