"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const images = [
  "https://i.ibb.co/NsJh98f/cover-1.png",
  'https://i.ibb.co/R2zfT3L/Untitled-design-2.jpg"',
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
    <div className="relative overflow-hidden h-full">
      {images.map((image, index) => (
        <Image
          height={100}
          width={100}
          key={image}
          src={image}
          alt={`Carousel Image ${index + 1}`}
          className={`transition-transform ease-in-out duration-1000 transform ${
            index === currentIndex ? "translate-x-0" : "translate-x-full"
          } absolute h-full w-full border-neutral-950 rounded-2xl`}
        />
      ))}
    </div>
  );
};

export default Carousel;
