// src/components/About.jsx
import React from "react";
import KnifeImg from "../assets/knives.jpg"; 

const About = () => {
  return (
    <section className="relative bg-gradient-to-b from-transparent via-white to-gray-100 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1 w-full md:w-1/2">
          <img
            src={KnifeImg}
            alt="AllThingsCraft — tools and supplies"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex-1 w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Why Choose Us
          </h2>

          <p className="text-gray-600 text-sm mb-6">
            AllThingsCraft is your go-to home for all creative supplies and DIY essentials.
            Whether you're a beginner or a seasoned artist, we provide high-quality materials,
            tools, and unique craft items to help you bring your ideas to life.
          </p>

          <ul className="space-y-6 text-left">
            <li>
              <h3 className="text-lg font-semibold text-gray-900">
                Wide Range of Craft Supplies
              </h3>
              <p className="text-gray-600 text-sm">
                From paints, brushes, and easels to paper crafts, knitting
                supplies, and beads — curated tools and materials for every
                creative maker.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold text-gray-900">Custom Orders</h3>
              <p className="text-gray-600 text-sm">
                Need something unique? We offer customization services for
                individuals, schools, and organizations.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold text-gray-900">Workshops & Tutorials</h3>
              <p className="text-gray-600 text-sm">
                Learn and grow through our online and in-person workshops —
                painting, pottery, sewing and more.
              </p>
            </li>

            <li>
              <h3 className="text-lg font-semibold text-gray-900">Art Community Support</h3>
              <p className="text-gray-600 text-sm">
                Join our community of creators to share ideas, learn new
                techniques, and get inspired.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
