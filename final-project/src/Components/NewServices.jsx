import React from "react";
import { ArrowRight } from "lucide-react";

const NewServices = () => {
  const services = [
    { title: "Sewing Kit", image: "/src/assets/Sewing.jpg" },
    { title: "Yarns & Crochets", image: "/src/assets/Yarns.jpg" },
    { title: "Pottery Art", image: "/src/assets/Pottery.jpg" },
    { title: "Coloring Books", image: "/src/assets/Drawing Book.jpg" },
  ];

  // Duplicate list for seamless looping
  const loopServices = [...services, ...services];

  return (
    <section className="bg-gray-100 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start px-6 gap-10">

        {/* Left Section */}
        <div className="lg:w-1/3 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            New on <span className="text-cyan-500">AllThingsCraft</span>
          </h2>
          <p className="text-gray-600">
            Get the latest supplies on discounted offers.
          </p>

          <button className="flex items-center gap-2 text-cyan-600 font-semibold hover:underline">
            Check All <ArrowRight size={18} />
          </button>
        </div>

        {/* Continuous Scrolling Loop */}
        <div className="lg:w-2/3 overflow-hidden relative">
          <div
            className="flex gap-6 animate-scroll whitespace-nowrap"
            style={{ width: "max-content" }}
          >
            {loopServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow min-w-[220px] overflow-hidden hover:shadow-lg transition-all"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 🔥 Add scrolling animation */}
      <style>
        {`
          .animate-scroll {
            animation: scroll 18s linear infinite;
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default NewServices;
