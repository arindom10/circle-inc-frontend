import Image from "next/image";
import React from "react";

interface OfferType {
  id: number;
  name: string;
  description: string;
  image: string;
}

const fakeData: OfferType[] = [
  {
    id: 1,
    name: "WEB DEVELOPMENT",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
  excepturi, distinctio magni nesciunt neque ea velit numquam
  saepe illo at non soluta enim molestias impedit ipsam adipisci
  sequi sunt repudiandae.`,
    image:
      "https://i.ibb.co/nLSR48m/photo-2024-02-24-00-09-07-removebg-preview.png",
  },
  {
    id: 2,
    name: "WEB DEVELOPMENT",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
  excepturi, distinctio magni nesciunt neque ea velit numquam
  saepe illo at non soluta enim molestias impedit ipsam adipisci
  sequi sunt repudiandae.`,
    image:
      "https://i.ibb.co/nLSR48m/photo-2024-02-24-00-09-07-removebg-preview.png",
  },
  {
    id: 3,
    name: "WEB DEVELOPMENT",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
  excepturi, distinctio magni nesciunt neque ea velit numquam
  saepe illo at non soluta enim molestias impedit ipsam adipisci
  sequi sunt repudiandae.`,
    image:
      "https://i.ibb.co/nLSR48m/photo-2024-02-24-00-09-07-removebg-preview.png",
  },
  {
    id: 4,
    name: "WEB DEVELOPMENT",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
  excepturi, distinctio magni nesciunt neque ea velit numquam
  saepe illo at non soluta enim molestias impedit ipsam adipisci
  sequi sunt repudiandae.`,
    image:
      "https://i.ibb.co/nLSR48m/photo-2024-02-24-00-09-07-removebg-preview.png",
  },
  {
    id: 5,
    name: "WEB DEVELOPMENT",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
  excepturi, distinctio magni nesciunt neque ea velit numquam
  saepe illo at non soluta enim molestias impedit ipsam adipisci
  sequi sunt repudiandae.`,
    image:
      "https://i.ibb.co/nLSR48m/photo-2024-02-24-00-09-07-removebg-preview.png",
  },
  {
    id: 6,
    name: "WEB DEVELOPMENT",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
  excepturi, distinctio magni nesciunt neque ea velit numquam
  saepe illo at non soluta enim molestias impedit ipsam adipisci
  sequi sunt repudiandae.`,
    image:
      "https://i.ibb.co/nLSR48m/photo-2024-02-24-00-09-07-removebg-preview.png",
  },
];

const WhatWeOffer = () => {
  return (
    <div className="py-8 md:px-32 sm:px-6 px-2">
      <h2 className=" text-center font-bold text-primary text-4xl">
        What we offer
      </h2>
      <div className="text-center my-4">
        At Circle Inc, we take pride in offering a comprehensive suite of
        cutting-edge IT solutions that empower businesses to thrive in the
        digital age. Our diverse range of services is designed to cater to your
        unique needs, providing you with the tools and expertise to stay ahead
        of the competition.
      </div>
      <div className="grid grid-cols-3 gap-8 mt-4">
        {fakeData.map((sin: OfferType) => (
          <div className="w-full border-2 rounded-lg shadow-lg" key={sin.id}>
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
                  src={sin?.image}
                  className="w-[60px] h-[60px]"
                />
              </div>
            </div>
            <div className="px-4 py-2">
              <h2 className="font-bold text-xl">{sin?.name}</h2>
              <div className="my-2 w-[50px] h-[4px] block bg-[#54C3F0]"></div>
              <p>{sin?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
