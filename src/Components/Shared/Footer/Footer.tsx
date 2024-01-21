import Link from "next/link";
import React from "react";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="" style={{ background: "#006565" }}>
      <span className=" font-bold text-2xl flex justify-center ">
        CIRCLE INC
      </span>
      <div className="flex justify-center gap-10 mt-6">
        <span>Contact</span>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </div>
      <div className="flex justify-center mt-6 text-4xl gap-8">
        <Link href="https://wa.me/message/GW4RVNQAFXD3A1" target="_blank">
          <FaWhatsapp />
        </Link>
        <FaFacebook />
      </div>
      <div className="flex justify-center mt-6  gap-8">
        <span>© 2023-2024 Circle-INC - All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
