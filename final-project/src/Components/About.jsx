import { Heading3 } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section className="relative bg-gradient-to-b from-transparent via-white to-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1">
          <img
            src="/src/assets/Knives.jpg"
            alt="AllThingsCraft"
            className="rounded-xl shadow-lg"
          />
        </div>
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            About Us 
          </h3>
          {/* List of Services */}
          <ul className="space-y-6">
            
           <p className="text-gray-600 text-sm">
           Welcome to AllThingsCraft! <br />We provide a wide range of craft and DIY products designed to bring your creative visions to life. Whether you're a seasoned artisan or just starting out, we have everything you need to turn your passion into beautiful creations. By offering these services, we create a dynamic and engaging shopping experience that caters to the needs of crafting enthusiasts and encourages repeat business.
          </p>
            <li className="flex items-start gap-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Wide Range of Craft Supplies
                </h3>
                <p className="text-gray-600 text-sm">
                   From paints, brushes, and easels to paper crafts, 
                   knitting supplies, and beads, we’ve curated tools and materials for every art and craft enthusiast.

                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Custom Orders
                </h3>
                <p className="text-gray-600 text-sm">
                  Need something unique? We offer customization 
                  services for individuals, schools, and organizations, ensuring you get tailored craft solutions.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Workshops & Tutorials
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn, grow, and network through our online and in-person workshops. 
                  Gain skills in painting, crafting, pottery, sewing, and more.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Art Community Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Join our growing community of creators, where you can share ideas, 
                  learn new techniques, and get inspired.
                </p>
              </div>
            </li>
          </ul>
       </div>

    </div>
    </section>
  );
};

export default About;