import React from 'react';

const ExtraSection = () => {
    return (
     
         <div className='container mx-auto my-15'>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "120+", label: "Premium Cars" },
            { number: "50+", label: "Luxury Brands" },
            { number: "24/7", label: "Customer Support" },
            { number: "10k+", label: "Happy Riders" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <h2 className="text-3xl font-black text-black">
                {item.number}
              </h2>

              <p className="text-gray-500 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
        </div>
      
    );
};

export default ExtraSection;