import Image from "next/image";

const Banner = () => {
  return (
    <div className="grid grid-cols-12 gap-4 bg-[#DDEFF1] md:px-32 sm:px-6 px-2 py-8">
      <div className=" col col-span-6 flex justify-center flex-col gap-8">
        <span className=" font-bold text-2xl">
          প্রফেশনাল <span className="text-cyan-600">ইকমার্স</span> ওয়েবসাইট ও
          অ্যাপ <br /> ডেভেলপমেন্ট প্ল্যাটফর্ম
        </span>
        <span className="text-lg">
          আপনার হোলসেল/রিটেইল যেকোন ব্যবসার জন্য প্রফেশনাল এবং সুপার ফাস্ট
          ইকমার্স/ড্রপশিপিং ওয়েবসাইট এবং মোবাইল অ্যাপ ডেভেলপ করে নিন খুব সহজে
          বিকমার্স থেকে।
        </span>

        <a href="tel:+8801735049535">
          <button className="p-2 rounded-full bg-[#009494] w-52 text-white font-semibold">
            Call Now <br />
            +8801735049535
          </button>
        </a>
      </div>
      <div className=" col col-span-6  my-auto">
        <Image
          height={100}
          width={100}
          src="https://i.ibb.co/HPbVRWm/output-onlinegiftools.gif"
          alt="banner"
          className=" h-[420px] w-full flex items-center justify-center"
        />
      </div>
    </div>
  );
};

export default Banner;
