const Banner = () => {
  return (
    <div className="grid grid-cols-12 gap-4 bg-[#DDEFF1] md:px-32 sm:px-6 px-2 py-8">
      <div className=" col col-span-6 flex justify-center flex-col gap-8">
        <span className=" font-bold text-2xl">
          প্রফেশনাল ইকমার্স ওয়েবসাইট ও অ্যাপ <br /> ডেভেলপমেন্ট প্ল্যাটফর্ম
        </span>
        <span className="text-lg">
          আপনার হোলসেল/রিটেইল যেকোন ব্যবসার জন্য প্রফেশনাল এবং সুপার ফাস্ট
          ইকমার্স/ড্রপশিপিং ওয়েবসাইট এবং মোবাইল অ্যাপ ডেভেলপ করে নিন খুব সহজে
          বিকমার্স থেকে।
        </span>
      </div>
      <div className=" col col-span-6">
        <img
          src="https://i.ibb.co/BtsqNyf/hire-developer-onsite.png"
          alt="banner"
          className=" h-[350px] w-full"
        />
      </div>
      <div>
        <button className="p-4 rounded-full bg-[#009494] w-52 text-white font-semibold">
          Call Now <br />
          +8801735049535
        </button>
      </div>
    </div>
  );
};

export default Banner;