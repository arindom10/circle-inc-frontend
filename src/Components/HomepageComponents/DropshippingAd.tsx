import { FaCheckCircle } from "react-icons/fa";

const DropshippingAd = () => {
  const images = [
    "https://it.bcommerce.io/static/media/1688.d0a69550a2274f6c5d4c.png",
    "https://it.bcommerce.io/static/media/amazon.5ad50eeebb8e9c1fbbd1.png",
    "https://it.bcommerce.io/static/media/walmart.18056baaca0e2018135e.png",
    "https://it.bcommerce.io/static/media/aliexpress.812bd1c7ee1dfdbb1ad0.png",
    "https://it.bcommerce.io/static/media/alibaba.121cff6bd7f40cb46491.png",
  ];

  return (
    <div className="grid grid-cols-12 gap-4  md:px-32 sm:px-6 px-2 py-8">
      <div className=" col col-span-6 flex justify-center flex-col gap-8">
        <span className=" font-bold text-2xl">
          এডভান্সড B2B/B2C ড্রপশিপিং ওয়েবসাইট ও অ্যাপ
        </span>
        <span className="text-lg">
          চায়না, আমেরিকা, যুক্তরাজ্য, দুবাই, ইন্ডিয়া সহ পৃথিবীর যেকোন দেশের
          যেকোন ইকমার্স প্লাটফর্ম (1688, Alibaba, Aliexpress, Amazon, Walmart,
          Flipcart etc) এর সাথে API ইন্ট্রিগ্রেট করে আপনার হোলসেল / রিটেইল
          Dropshipping ওয়েবসাইট ডেভেলপ করুন খুব সহজে।
        </span>
        <div className="flex">
          {images.map((image) => (
            <img className="h-5" src={image} />
          ))}
        </div>
      </div>
      <div className=" col col-span-6">
        <img
          src="https://i.ibb.co/HPbVRWm/output-onlinegiftools.gif"
          alt="banner"
          className=" h-[500px] w-full"
        />
      </div>
      <div>
        <FaCheckCircle />
      </div>
    </div>
  );
};

export default DropshippingAd;
