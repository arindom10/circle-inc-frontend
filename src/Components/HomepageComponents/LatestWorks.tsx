import Image from "next/image";

const images = [
  "https://it.bcommerce.io/static/media/chinapaikary.f508ea5d136a049edad823d70ade03f5.svg",
  "https://it.bcommerce.io/static/media/skybuy.aae30f4c23f07d62b20c90fcac470b3b.svg",
  "https://it.bcommerce.io/static/media/chinaship.f8098b31387591aa07339edbcc311bfc.svg",
];

const LatestWorks = () => {
  return (
    <div className="mt-8 md:mt-16">
      <div className="text-center">
        <span className="font-bold text-xl md:text-2xl">
          আমরা <span className="text-cyan-600 ml-2"> ডেভেলপ করেছি </span>
        </span>
      </div>
      <div className="text-center mt-2 md:mt-4">
        <span className="font-bold text-xl md:text-2xl">
          দেশের সেরা <span className="text-cyan-600 ml-2"> ৩ টি </span>
          <span className="ml-2">ড্রপশিপিং ওয়েবসাইট</span>
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-4 md:mt-8 gap-4 md:gap-16">
        {images.map((image) => (
          <Image
            key={image}
            height={100}
            width={100}
            alt=""
            className="h-20 bg-slate-50"
            src={image}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestWorks;
