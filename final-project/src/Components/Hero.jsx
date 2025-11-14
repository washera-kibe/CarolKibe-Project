import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-4">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute bottom-0 left-0 w-full h-15 bg-gradient-to-b from-transparent to-white opacity-100"></div>
      </div>

      {/* Header */}
      <header className="w-full top-0 left-0 bg-transparent p-4 absolute">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <Link to="/">
              <img src={Logo} alt="Logo" className="h-10 pl-15" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-4 items-center">
              <li>
                <Link to="/" className="text-[#F5F5F5] text-lg hover:text-cyan-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#F5F5F5] text-lg hover:text-cyan-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-[#F5F5F5] text-lg hover:text-cyan-300">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#F5F5F5] text-lg hover:text-cyan-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition text-lg"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl text-black font-bold mb-4">Welcome to AllThingsCraft</h1>
        <p className="text-lg text-black mb-8 ">
          We are dedicated to provide you the finest range of craft and DIY products designed to bring your creative visions to life.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Let's Shop
        </button>
      </div>
    </section>
  );
};
export default Hero;