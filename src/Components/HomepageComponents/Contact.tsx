import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-12 gap-4 md:px-32 sm:px-6 px-2 py-8 mt-16">
      <div className=" col col-span-6 flex justify-center flex-col gap-8">
        <span className=" font-bold text-2xl">
          এছাড়া যেকোনো ওয়েবসাইট, অ্যাপ, সফটওয়্যার ডেভেলপ করতে যোগাযোগ করুন
        </span>
        <span className="text-lg">
          আমরা আপনার প্রয়োজন অনুসারে সম্পূর্ণ কাস্টমাইজড যেকোন ওয়েবসাইট, অ্যাপ
          ও সফটওয়্যার ডেভেলপ করে দিবো।
        </span>

        <a href="tel:+8801735049535">
          <button className="p-2 rounded-full bg-[#009494] w-52 text-white font-semibold">
            Call Now <br />
            +8801735049535
          </button>
        </a>
      </div>
      <div className=" col col-span-6  my-auto">
        <Image
          height={100}
          width={100}
          src="https://it.bcommerce.io/static/media/custom.8f41d893b2c947d0e1f6d8f3747f522a.svg"
          alt="banner"
          className=" h-[420px] w-full flex items-center justify-center"
        />
      </div>
    </div>
  );
};

export default Contact;
