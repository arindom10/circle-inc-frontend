import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-400 text-black px-4 md:px-36 py-2 ">
      <div className="container mx-auto flex flex-row justify-between items-center">
        {/* Left side */}
        <div className="flex items-center">
          <div className="text-white mr-4">
            <Link href="/">
              <Image
                height={100}
                width={100}
                src="https://www.buyerzonebd.com/images/Circle-inc-W.png"
                alt="Circle"
                style={{
                  height: "35px",
                  width: "120px",
                  borderRadius: "5px",
                }}
              />
            </Link>
          </div>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center mt-4 md:mt-0 gap-4">
          <Link href="/contact">
            <button className="text-white rounded-full bg-[#009494] w-24 h-10font-semibold  mr-2 relative">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
