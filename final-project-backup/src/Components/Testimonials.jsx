import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import profileImg from "../assets/Marker.jpg"; // replace with your local image path
import roomImg from "../assets/Brush.jpg"; // replace with your local image path

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-16 flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-16">
      {/* Left side: text */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          What People Are Saying About Us
        </h2>

        <div className="flex items-center gap-4 mb-4">
          <img
            src={profileImg}
            alt="Customer"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">Kennedy Kigo</h3>
            <p className="text-sm text-gray-500">Artisan Jewelry Maker</p>
          </div>
        </div>

        <p className="text-gray-600 text-base leading-relaxed mb-8">
          "Crafting has always been my passion, and the community at AllThingsCraft has fueled my creativity like never before. 
          The hands-on workshops and supportive environment have empowered me to innovate and express my unique style. Every piece 
          I create tells a story, and I owe much of my growth to this incredible space!"
        </p>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2 rounded-full bg-cyan-500 hover:bg-cyan-600 transition">
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Right side: image */}
      <div className="flex-1">
        <img
          src={roomImg}
          alt="Decorated room"
          className="w-full rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Testimonials;