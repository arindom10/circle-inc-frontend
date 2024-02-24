import Image from "next/image";

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
          className="w-[100%] md:w-[80%] h-[300px] md:h-[450px]"
        />
      </div>
    </div>
  );
};

export default HowWeWork;
