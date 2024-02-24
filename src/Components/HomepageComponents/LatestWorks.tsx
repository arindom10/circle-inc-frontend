"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const imageUrls = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://swiperjs.com/demos/images/nature-9.jpg",
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const LatestWorks = () => {
  return (
    <div
      className="mt-8 md:mt-16 py-8 md:px-32 sm:px-6"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/VCxcGf2/image-2024-02-24-21-43-28.png')",
        backgroundSize: "cover",
      }}
    >
      <h2 className=" text-center font-bold text-primary text-4xl">
        OUR PROJECTS
      </h2>
      <div className="text-center my-4 text-white">
        We try to provide our best value for our customers. Here are some recent
        projects we completed.
      </div>
      <div className="mt-4">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          dotListClass="custom-dot-list-style "
          itemClass="px-4"
        >
          {imageUrls?.map((single: string) => (
            <Image
              key={single}
              src={single}
              alt="img"
              height={100}
              width={100}
              className="h-[300px] w-full"
            />
          ))}
        </Carousel>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <button className="bg-primary px-8 py-2 rounded-lg text-white">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default LatestWorks;
