import Image from "next/image";
import React from "react";

const WhatWeOffer = () => {
  return (
    <div className="py-8 md:px-32 sm:px-6 px-2">
      <h2 className=" text-center font-bold text-primary text-3xl">
        What we offer
      </h2>
      <p className="text-center my-4">
        At Circle Inc, we take pride in offering a comprehensive suite of
        cutting-edge IT solutions that empower businesses to thrive in the
        digital age. Our diverse range of services is designed to cater to your
        unique needs, providing you with the tools and expertise to stay ahead
        of the competition.
      </p>
      <div className="grid grid-cols-3 gap-8 mt-4">
        {[1, 2, 3, 4, 5, 6].map((sin: number) => (
          <div className="w-full border-2 rounded-lg shadow-lg" key={sin}>
            <div className="relative">
              <Image
                height={100}
                width={100}
                alt="img"
                src="https://i.ibb.co/c1PV43r/image-2024-02-24-00-05-21.png"
                className="w-full rounded-t-lg"
              />
              <div className="absolute bottom-4 left-6">
                <Image
                  height={100}
                  width={100}
                  alt="img"
                  src="https://i.ibb.co/nLSR48m/photo-2024-02-24-00-09-07-removebg-preview.png"
                  className="w-[60px] h-[60px]"
                />
              </div>
            </div>
            <div className="px-4 py-2">
              <h2>WEB DEVELOPMENT</h2>
              <div className="my-2 w-[50px] h-[4px] block bg-[#54C3F0]"></div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
                excepturi, distinctio magni nesciunt neque ea velit numquam
                saepe illo at non soluta enim molestias impedit ipsam adipisci
                sequi sunt repudiandae.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
