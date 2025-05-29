"use client";

import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdHome, MdPhone } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaRedditAlien,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-12 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - Logo & Contact Info */}
        <div className="space-y-6">
          <Image
            src="https://i.ibb.co/zT8WfTwS/8446f24ac909d200d3ee398db723eded1d1b9203.png"
            alt="Circle Logo"
            width={120}
            height={40}
          />
          <div className="flex items-start gap-3 text-sm text-gray-300">
            <MdHome size={20} />
            <p>Lorem ipsum dolor sit amet consectetur. Nunc facilisis.</p>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <MdEmail size={20} />
            <p>circle.inc@gmail.com</p>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <MdPhone size={20} />
            <p>+880 1716 213091</p>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
            Quick Links
          </h3>
          <div className="space-y-2 text-sm text-gray-300 flex flex-col">
            <Link href="/services" className="hover:underline">
              Service
            </Link>
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
          </div>
        </div>

        {/* Column 3 - Newsletter */}
        <div className="md:col-span-2">
          <h3 className="text-black font-semibold text-sm mb-4 uppercase tracking-wide">
            Subscribe to Our Newsletter
          </h3>
          <div className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-grow px-4 py-2 text-sm text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-gray-400 hover:bg-gray-500 text-sm font-semibold px-4 py-2 rounded-r-md">
              SUBSCRIBE
            </button>
          </div>

          {/* Social Icons - below "Keep in Touch" title */}
          <div className="mt-6">
            <p className="text-sm uppercase text-white mb-3">Keep in Touch</p>
            <div className="flex gap-6 text-xl text-gray-400">
              <Link href="#">
                <FaFacebookF className="hover:text-white cursor-pointer" />
              </Link>
              <Link href="#">
                <FaTwitter className="hover:text-white cursor-pointer" />
              </Link>
              <Link href="#">
                <FaLinkedinIn className="hover:text-white cursor-pointer" />
              </Link>
              <Link href="#">
                <FaRedditAlien className="hover:text-white cursor-pointer" />
              </Link>
              <Link href="#">
                <FaTelegramPlane className="hover:text-white cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Text */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © 2024 circle.inc All rights reserved
      </div>
    </footer>
  );
}
