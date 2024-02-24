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

const HowWeWork = () => {
  return (
    <div className="py-8 md:px-32 sm:px-6 px-2">
      <h2 className=" text-center font-bold text-primary text-4xl">
        How We Work
      </h2>
      <div className="text-center my-4">
        We prioritize customer-centric approach, and high-quality solutions
        through a systematic way <br /> to ensuring clients receive top-notch
        services and products.
      </div>
      <div className="mt-8 flex justify-center">
        <Image
          src="https://i.ibb.co/4FKwLXy/photo-2024-02-24-22-24-21.jpg"
          alt="img"
          height={100}
          width={100}
          className="w-[80%] h-[450px]"
        />
      </div>
    </div>
  );
};

export default HowWeWork;
