import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0F] text-gray-300 py-12 px-6 md:px-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-700 pb-10">
        <h1 className="text-2xl font-bold text-white mb-6 md:mb-0">
          AllThings<span className="text-blue-500">Craft</span>
        </h1>
        <div className="flex space-x-6 text-gray-400 text-xl">
          <a href="#" className="hover:text-blue-500 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-500 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-500 transition"><FaGithub /></a>
          <a href="#" className="hover:text-blue-500 transition"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-10 text-sm">
        {/* Services */}
        <div>
          <h3 className="font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Curated Supplies & Kits</a></li>
            <li><a href="#" className="hover:text-blue-400">Personalization & Customization</a></li>
            <li><a href="#" className="hover:text-blue-400">Gift Services</a></li>
            <li><a href="#" className="hover:text-blue-400">Subscription Boxes</a></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold text-white mb-4">Useful Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">Deliveries</a></li>
            <li><a href="#" className="hover:text-blue-400">Returns</a></li>
            <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
            <li><a href="#" className="hover:text-blue-400">Community</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            <li><a href="#" className="hover:text-blue-400">News</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-white mb-4">Connect</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
            <li><a href="#" className="hover:text-blue-400">Twitter</a></li>
            <li><a href="#" className="hover:text-blue-400">GitHub</a></li>
            <li><a href="#" className="hover:text-blue-400">Email Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        © AllThingsCraft {new Date().getFullYear()} — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;