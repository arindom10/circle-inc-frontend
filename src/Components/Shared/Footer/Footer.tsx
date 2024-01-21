import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

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
        <FaWhatsapp />
        <FaFacebook />
      </div>
      <div className="flex justify-center mt-6  gap-8">
        <span>© 2019-2023 Bcommerce - All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
