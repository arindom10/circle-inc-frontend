"use client";

import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaSkype, FaTelegram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#263C7E] to-[#1A2E5C] text-white">
      {/* Top Bar */}
      <div className="bg-[#1A2E5C] text-sm py-2">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MdEmail className="text-lg" />
            <span>circle.inc@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+8801735049535"
              className="flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <BsTelephoneFill className="text-base" />
              <span>+880 1716 213091</span>
            </a>
            <FaTelegram className="text-xl" />
            <FaSkype className="text-xl" />
            <FaWhatsapp className="text-xl" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="max-w-screen-xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <Image
          src="https://i.ibb.co/zT8WfTwS/8446f24ac909d200d3ee398db723eded1d1b9203.png"
          alt="Circle Logo"
          width={120}
          height={50}
        />
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <Link href="#" className="hover:text-white">
            Home
          </Link>
          <Link href="#" className="hover:text-white">
            Service
          </Link>
          <Link href="#" className="hover:text-white">
            Projects
          </Link>
          <Link href="#" className="hover:text-white">
            Blog
          </Link>
          <Link href="#" className="hover:text-white">
            About Us
          </Link>
        </nav>
        <a
          href="tel:+8801735049535"
          className="bg-blue-400 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold"
        >
          LET&#39;S TALK
        </a>
      </header>

      {/* Hero Main Content */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10 pt-10 pb-20 min-h-[calc(100vh-112px)]">
        {/* Left Text Content */}
        <div className="md:max-w-xl text-center md:text-left order-2 md:order-1">
          <p className="uppercase text-xs text-blue-200 font-semibold tracking-wider mb-3">
            A LEADING IT SOLUTION COMPANY BASED ON BANGLADESH
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            BRING YOUR DREAM <br /> INTO REALITY
          </h1>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Unlock unprecedented growth for your business through cutting-edge
            technology and the premier IT solution company. With over 7 years of
            extensive experience and a team of skilled Designer and Developer,
            we are dedicated to delivering top-tier services.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 text-white rounded-md text-sm font-medium">
            Get Your Free Quote
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full  md:w-[500px] order-1 md:order-2">
          <Image
            src="https://i.ibb.co/m4Z3VPr/image-2024-02-23-23-50-02.png"
            alt="Hero Banner"
            width={500}
            height={500}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
