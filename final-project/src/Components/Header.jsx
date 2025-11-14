import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4">  
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section  */}
        <div>
          <Link to="/">
          <img src={Logo} alt="Logo" className="h-8" />
          </Link>
        </div>
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>  
              <Link to="/about" className="text-white hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;