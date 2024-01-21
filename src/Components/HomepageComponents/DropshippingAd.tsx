import { FaCheckCircle } from "react-icons/fa";
import Carousel from "./Carousel";

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
          এডভান্সড B2B/B2C <span className="text-cyan-600">ড্রপশিপিং</span>{" "}
          ওয়েবসাইট ও অ্যাপ
        </span>
        <span className="text-lg">
          চায়না, আমেরিকা, যুক্তরাজ্য, দুবাই, ইন্ডিয়া সহ পৃথিবীর যেকোন দেশের
          যেকোন ইকমার্স প্লাটফর্ম (1688, Alibaba, Aliexpress, Amazon, Walmart,
          Flipcart etc) এর সাথে API ইন্ট্রিগ্রেট করে আপনার হোলসেল / রিটেইল
          Dropshipping ওয়েবসাইট ডেভেলপ করুন খুব সহজে।
        </span>
        <div className="flex">
          {images.map((image) => (
            <img key={index} className="h-5" src={image} />
          ))}
        </div>
        <div className="flex gap-3">
          <FaCheckCircle className="text-cyan-600" />
          <span>যেকোন ইমেজ দিয়ে পণ্য সার্চ করার সুবিধা।</span>
        </div>
        <div className="flex gap-3">
          <FaCheckCircle className="text-cyan-600" />
          <span>
            1688, Alibaba, Aliexpress, Amazon ইত্যাদি ওয়েবসাইটের প্রোডাক্ট লিঙ্ক
            দিয়ে সার্চ করার সুবিধা।
          </span>
        </div>
        <div className="flex gap-3">
          <FaCheckCircle className="text-cyan-600" />
          <span>সুপার ফাস্ট লোড টাইম এবং ইউজার এক্সপেরিয়েন্স।</span>
        </div>
        <div className="flex gap-3">
          <FaCheckCircle className="text-cyan-600" />
          <span>অ্যাডভান্স এবং পারশিয়াল পেমেন্ট সিস্টেম।</span>
        </div>
        <div className="flex gap-3">
          <FaCheckCircle className="text-cyan-600" />
          <span>বিকাশ, নগদ, ব্যাংক, Sslcommerz পেমেন্ট গেটওয়ে।</span>
        </div>
      </div>
      <div className=" col col-span-6">
        <Carousel />
      </div>
    </div>
  );
};

export default DropshippingAd;
