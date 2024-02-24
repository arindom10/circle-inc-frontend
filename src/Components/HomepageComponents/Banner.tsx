import Image from "next/image";

const Banner = () => {
  return (
    <div
      className="grid grid-cols-12 gap-4 md:px-32 sm:px-6 px-2 pt-8 text-white"
      style={{
        background:
          "linear-gradient(32.22deg, #498CCA -35.86%, #193D70 104.35%, #1E4579 104.35%)",
      }}
    >
      <div className="col-span-12 md:col-span-6 flex justify-center flex-col gap-4 md:gap-8 pb-4 items-center">
        <div className="font-bold text-lg md:text-2xl text-center md:text-start">
          A Leading IT solution company base on Bangladesh
        </div>
        <span className="text-2xl md:text-5xl font-bold text-center md:text-start">
          Bring your dream <br />
          into reality
        </span>
        <p className="text-xs text-center md:text-start md:text-lg">
          Unlock unprecedented growth for your business through cutting-edge
          technology and the premier IT solution company. With over 7 years of
          extensive experience and a team of skilled Designer and Developer, we
          are dedicated to delivering top-tier services.
        </p>
        <a href="tel:+8801735049535">
          <button className="p-2 rounded-full bg-[#54C3F0] w-52 text-white font-semibold">
            Get your Free Quote <br />
            +8801735049535
          </button>
        </a>
      </div>

      <div className="col-span-6  my-auto hidden md:block">
        <Image
          height={100}
          width={100}
          // src="https://i.ibb.co/HPbVRWm/output-onlinegiftools.gif"
          src="https://i.ibb.co/m4Z3VPr/image-2024-02-23-23-50-02.png"
          alt="banner"
          className="h-[420px] w-full hidden md:block  "
        />
      </div>
    </div>
  );
};

export default Banner;
