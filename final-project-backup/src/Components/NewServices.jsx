import React, { useState } from "react";
import {ArrowRight} from "lucide-react";

const NewServices = () => {
  const initialServices = [
    {
      title: "Sewing Kit",
      image: "/src/assets/Sewing.jpg",
      checked: false,
    },
    {
      title: "Yarns & Crochets",
      image: "/src/assets/Yarns.jpg",
      checked: false,
    },
    {
      title: "Pottery Art",
      image: "/src/assets/Pottery.jpg",
      checked: false,
    },
    {
      title: "Coloring Books",
      image: "/src/assets/Drawing Book.jpg",
      checked: false,
    },
  ];

  const [services, setServices] = useState(initialServices);
  
   const toggleAll = () => {
    const allChecked = services.every(s => s.checked);
    setServices(services.map(s => ({ ...s, checked: !allChecked })));
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start px-6 gap-10">
        {/* Left text block */}
        <div className="lg:w-1/3 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            New on <span className="text-cyan-500">AllThingsCraft</span>
          </h2>
          <p className="text-gray-600">
            Get the latest supplies on disscounted offers.
          </p>
          <button
            onClick={toggleAll}
            className="flex items-center gap-2 text-cyan-600 font-semibold hover:underline"
          >
            Check All <ArrowRight size={18} />
          </button>
        </div>

        {/* Right service cards */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-xl shadow hover:shadow-lg overflow-hidden transition-all ${
                service.checked ? "border-4 border-blue-600" : ""
              }`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewServices;