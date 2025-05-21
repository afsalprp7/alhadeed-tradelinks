"use client";
import Image from "next/image";
import Link from "next/link";

import logo_image from "../../../public/fevicon/android-chrome-512x512.png";
import iorn_bars from "../../../public/images/iornBars.jpeg";

import { motion } from 'framer-motion';
const Navbar = () => {
  return (
    <nav className="relative z-50 shadow-lg shadow-fuchsia-200 ">
      <div className="px-7 py-3 flex items-center md:space-x-80  relative z-10 h-[80px]">
        {/* Logo and Brand */}
        <div className="flex items-center text-black font-bold text-xl">
          {/* Logo Image Placeholder */}
          <div className="relative">
            <Image width={80} height={80} src={logo_image} alt="Logo" />
          </div>
          <div className="flex items-center space-x-1">
            <h1 className="text-blue-800 hidden md:block">
              ALHADEED TRADE LINKS
            </h1>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="hidden md:flex space-x-6 text-black font-medium">
            <li>
              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-gray-300 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="absolute right-0 top-0">
          <motion.div
          initial={{opacity:0 , x: 20}}
          animate={{opacity:1 , x: 0}}
          transition={{duration: 0.6}}>
            <Image height={85 } width={120} src={iorn_bars} alt="iornBar" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
