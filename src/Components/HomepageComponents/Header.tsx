import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaTelegramPlane,
  FaSkype,
  FaWhatsapp,
} from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <div className="  bg-[#193D70]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-white" />
          <span>circle.inc@gmail.com</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-white" />
            <a href="tel:+8801735049535">
              <span>+880 1716 213091</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaTelegramPlane className="text-white hover:text-gray-300 cursor-pointer" />
            <FaSkype className="text-white hover:text-gray-300 cursor-pointer" />
            <Link href="https://wa.me/message/GW4RVNQAFXD3A1" target="_blank">
              <FaWhatsapp className="text-white hover:text-gray-300 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
