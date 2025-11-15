import React from "react";

const Discount = () => {
  return (
    <section className="bg-stone-400 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 py-3 text-white h-100">
      {/* Left Image */}
      <div className="flex justify-center md:w-1/2 mb-10 md:mb-0">
        <img
          src="/src/assets/Water brushes.jpg"
          alt="Tech Offer"
          className="w-80 md:w-96 rounded-lg shadow-lg h-100 object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Get Exclusive Deals <br /> on AllThingsCraft
        </h2>
        <p className="text-lg opacity-90">
          Subscribe to receive the latest offers, tools, and updates from
          AllThingsCraft.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition-all duration-200">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discount;