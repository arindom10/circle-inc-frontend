const images = [
  "https://it.bcommerce.io/static/media/chinapaikary.f508ea5d136a049edad823d70ade03f5.svg",
  "https://it.bcommerce.io/static/media/skybuy.aae30f4c23f07d62b20c90fcac470b3b.svg",
  "https://it.bcommerce.io/static/media/chinaship.f8098b31387591aa07339edbcc311bfc.svg",
];

const LatestWorks = () => {
  return (
    <div className="mt-16">
      <div>
        <span className=" font-bold text-2xl flex justify-center items-center">
          আমরা <span className="text-cyan-600">ডেভেলপ করেছি </span>
        </span>
      </div>
      <div>
        <span className=" font-bold text-2xl flex justify-center items-center">
          দেশের সেরা<span className="text-cyan-600">৩ টি </span> ড্রপশিপিং
          ওয়েবসাইট
        </span>
      </div>
      <div className="flex justify-center items-center mt-16 gap-16">
        {images.map((image) => (
          <img key={index} className="h-20 bg-slate-50 " src={image} />
        ))}
      </div>
    </div>
  );
};

export default LatestWorks;
