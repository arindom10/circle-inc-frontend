import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar: React.FC = () => {
  const router = useRouter();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Service", href: "/service" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Circle Logo"
            className="h-8"
          />
          <span className="text-lg font-bold">CIRCLE</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <Link
                  href="#"
                  className={`${
                    router.pathname === item.href
                      ? "text-blue-400 font-semibold"
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  {item.name}
                </Link>
              </Link>
            </li>
          ))}
        </ul>

        {/* Call-to-Action Button */}
        <div>
          <Link href="/contact">
            <a className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md font-semibold">
              LET'S TALK
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
