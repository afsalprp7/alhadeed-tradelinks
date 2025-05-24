"use client";
import Image from "next/image";
import Link from "next/link";

import logo_image from "../../../public/fevicon/android-chrome-512x512.png";
import iorn_bars from "../../../public/images/iornBars.jpeg";

import { motion } from "framer-motion";

import { SheetSidebar } from "@/utils/SheetSidebar";
import { useEffect } from "react";

const Navbar = () => {

  //scroll to the top when reloading the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-white">
      <div className="px-7 py-3 flex items-center md:space-x-44 lg:space-x-80 relative z-10 h-[80px]">
        {/* Logo and Brand */}
        <div className="flex items-center text-black font-bold text-xl">
          {/* Logo Image Placeholder */}
          <div className="cursor-pointer md:hidden">
            <SheetSidebar />
          </div>
          <div className="relative">
            <Image width={80} height={80} src={logo_image} alt="Logo" />
          </div>
          <div className="space-x-1 hidden md:block">
            <h1 className="text-blue-800 text-sm sm:text-md md:text-lg">ALHADEED TRADE LINKS</h1>
          </div>
        </div>


        {/* Navigation Links */}
        <div>
          <ul className="hidden md:flex space-x-6 text-black font-medium">
            <li>
              <Link
                href="/#"
                scroll={true}
                className="hover:text-blue-800 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#products"
                scroll={true}
                className="hover:text-blue-800 transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                scroll={true}
                className="hover:text-blue-800 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#contacts"
                scroll={true}
                className="hover:text-blue-800 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute right-0 top-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image height={85} width={120} src={iorn_bars} alt="iornBar" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
