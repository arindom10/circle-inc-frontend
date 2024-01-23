import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-[#DDEFF1] md:px-32 sm:px-6 px-2 py-8 mt-8 md:mt-16">
      <div className="md:col-span-6 my-auto">
        <Image
          height={100}
          width={100}
          src="https://it.bcommerce.io/static/media/ecommerce.ba25d2ef078c4f6d00da7069dd31ca0e.svg"
          alt="banner"
          className="h-[420px] w-full object-cover md:h-auto md:w-full"
        />
      </div>

      <div className="md:col-span-6 flex justify-center flex-col gap-4">
        <span className="font-bold text-xl md:text-2xl">
          কাস্টমাইজড <span className="text-cyan-600 ml-2">ইকমার্স</span>{" "}
          ওয়েবসাইট এবং মোবাইল অ্যাপ
        </span>
        <span className="text-base md:text-lg">
          আমরা আপনার ব্যবসার ধরণ, প্রোডাক্ট ক্যাটেগরি এবং কাস্টমার সেগমেন্ট
          অনুযায়ী সকল প্রয়োজনীয় ও এডভান্সড ফিচারসমুহ নিয়ে একটি প্রফেশনাল, সিকিউর
          এবং সুপার ফাস্ট ইকমার্স ওয়েবসাইট ডেভেলপ করে দিবো।
        </span>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-cyan-600" />
          <span>যেকোন ইমেজ দিয়ে পণ্য সার্চ করার সুবিধা।</span>
        </div>
        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-cyan-600" />
          <span>
            1688, Alibaba, Aliexpress, Amazon ইত্যাদি ওয়েবসাইটের প্রোডাক্ট লিঙ্ক
            দিয়ে সার্চ করার সুবিধা।
          </span>
        </div>
        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-cyan-600" />
          <span>সুপার ফাস্ট লোড টাইম এবং ইউজার এক্সপেরিয়েন্স।</span>
        </div>
        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-cyan-600" />
          <span>অ্যাডভান্স এবং পারশিয়াল পেমেন্ট সিস্টেম।</span>
        </div>
        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-cyan-600" />
          <span>বিকাশ, নগদ, ব্যাংক, Sslcommerz পেমেন্ট গেটওয়ে।</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
