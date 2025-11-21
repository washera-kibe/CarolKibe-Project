import React from "react";
import stationaryImg from "../assets/stationary.jpg";

const Features = () => {
  return (
    <section className="relative bg-gray-100 py-5 px-6">
      <div className="max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Get to know <br /> your supplies better!
          </h2>
          <p className="text-gray-600 mt-4 mb-8 max-w-md">
            Say hello to our brand-new, sustainable product range!
            From biodegradable glues to eco-friendly paints, we care about
            the planet as much as we care about creativity.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={stationaryImg}
            alt="Paint Brushes"
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Features;
