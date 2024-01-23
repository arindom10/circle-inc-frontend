"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const images = [
  "https://i.ibb.co/NsJh98f/cover-1.png",
  "https://i.ibb.co/R2zfT3L/Untitled-design-2.jpg",
  "https://i.ibb.co/NsJh98f/cover-1.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative overflow-hidden h-[300px] md:h-[420px]">
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`Carousel Image ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={`transition-transform ease-in-out duration-1000 transform ${
            index === currentIndex ? "translate-x-0" : "translate-x-full"
          } absolute border-neutral-950 rounded-2xl`}
        />
      ))}
    </div>
  );
};

export default Carousel;
