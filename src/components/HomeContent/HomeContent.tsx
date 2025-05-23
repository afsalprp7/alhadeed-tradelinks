"use client";
import React, { useState } from "react";
import "./style.css";
import Image from "next/image";

import logo_image from "../../../public/fevicon/android-chrome-192x192.png";
import ProductsContactsSection from "../Product_contactSection/ProductsContactsSection";
function HomeContent() {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div className="mt-7">
      <div className="w-screen md:w-full p-10 h-auto about-section flex flex-col md:flex-row justify-between items-center space-y-10 md:sapce-y-0">
        <div className="w-screen md:w-[50%] flex justify-center">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-full shadow-lg shadow-blue-800 flex justify-center items-center relative">
            {/* left side */}
            <div className="iron-flats absolute w-24 h-24 rounded-full left-0 top-0 shadow-lg flex justify-center items-center animate-bounce"></div>
            <div className="iron-rounds absolute w-24 h-24 rounded-full left-[-20px] shadow-lg flex justify-center items-center animate-bounce"></div>
            <div className="iron-channels absolute w-24 h-24 rounded-full bottom-0 left-0 shadow-lg flex justify-center items-center animate-bounce"></div>
            {/* right side */}
            <div className="iron-angles absolute w-24 h-24 rounded-full right-0 top-0 shadow-lg flex justify-center items-center animate-bounce"></div>
            <div className="steel-sheets absolute w-24 h-24 rounded-full right-[-20px] shadow-lg flex justify-center items-center animate-bounce"></div>
            <div className="iron-squre-pipes absolute w-24 h-24 rounded-full bottom-0 right-0 shadow-lg flex justify-center items-center animate-bounce"></div>
            <Image src={logo_image} alt="main-image-aboutus" />
          </div>
        </div>
        <div
          className={`space-y-5 w-full md:w-[50%] md:bg-gray-100 md:p-10 md:rounded-2xl  ${
            expanded ? "h-auto" : "h-[300px] overflow-hidden md:h-auto"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#0000CC]  to-[#F48C8C] bg-clip-text text-transparent">
            ABOUT US
          </h1>
          <p className="text-justify reading-relaxed">
            At Alhadeed Trade Links, we believe that the foundation of any great
            structure lies in the quality of its materials — and the trust
            behind them. With years of experience in the steel industry, we’ve
            built our reputation on delivering premium steel products and
            forging lasting relationships with our clients. We specialize in a
            wide range of high-quality steel supplies including TMT Bars, Flats,
            Rounds, Angles, Steel Sheets, Channels, and Square Pipes — all
            carefully sourced to meet the highest industry standards. Whether
            you’re constructing a residential home, a commercial high-rise, or
            an industrial facility, we are committed to strength, durability,
            and timely delivery that helps you build with confidence. Strong
            Materials. Stronger Relationships. That’s our promise
          </p>
        </div>
        <span
          onClick={() => setExpanded((prev)=> prev ? false : true)}
          className="text-gray-500 md:hidden"
        >
          {expanded ? "less" : "more..."}
        </span>
      </div>
      <ProductsContactsSection />
    </div>
  );
}

export default HomeContent;
