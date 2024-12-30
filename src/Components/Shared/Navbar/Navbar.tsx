import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-[#193D70] text-black px-4 md:px-36 py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Mobile Menu - Displayed for small screens */}
        <div className="md:hidden flex items-center justify-between w-full">
          <div className="text-white">
            <Link href="/">
              <Image
                height={100}
                width={100}
                src="https://i.ibb.co.com/L8ngMTD/Circle-inc-W-1.png"
                alt="Circle"
                style={{
                  height: "35px",
                  width: "120px",
                  borderRadius: "5px",
                }}
              />
            </Link>
          </div>
          <a href="tel:+8801735049535">
            <button className="text-white rounded-full bg-[#009494] w-24 h-10 font-semibold relative">
              Contact
            </button>
          </a>
        </div>

        {/* Left side - Hidden by default, displayed for medium screens and above */}
        <div className="hidden md:flex items-center mt-4 md:mt-0">
          <div className="text-white mr-4">
            <Link href="/">
              <Image
                height={100}
                width={100}
                src="https://i.ibb.co.com/L8ngMTD/Circle-inc-W-1.png"
                alt="Circle"
                style={{
                  height: "82px",
                  width: "140px",
                  borderRadius: "5px",
                }}
              />
            </Link>
          </div>
        </div>

        {/* Right side - Hidden by default, displayed for medium screens and above */}
        <div className="hidden md:flex items-center mt-4 md:mt-0 gap-4">
          <a href="tel:+8801735049535">
            <button className="text-white rounded-full bg-[#009494] w-24 h-10 font-semibold relative">
              Contact
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
