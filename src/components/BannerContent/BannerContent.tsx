"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";

function BannerContent() {
  const [counter, setCounter] = useState<number>(0);

  const [quotes] = useState<string[]>([
    "Build Stronger with Alhadeed Trade Links !",
    "Your trusted partner in quality steel supply.",
    "We offer a wide range of premium steel products.",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);
  return (
    <div>
      <div
        id="top"
        className="w-screen md:w-full h-[50vh] md:h-[85vh] relative flex shadow-lg shadow-gray-400 bg-gray-200"
      >
        <div className="w-screen md:w-[50%] md:h-[85vh] flex flex-col overflow-hidden bg-gray-200">
          <div className="w-full h-[50%] flex justify-center items-end p-5">
            <div>
              <motion.h1
                key={counter}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg text-justify leading-relaxed font-black md:text-3xl bg-gradient-to-r from-[#0000CC] to-[#F48C8C] bg-clip-text text-transparent"
              >
                &quot;{quotes[counter]}&quot;
              </motion.h1>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bar-box w-screen h-[50%] md:w-full"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="hidden md:flex items-center justify-center relative bg-[#0000CC] w-0 md:w-[50%] rounded-l-full overflow-hidden"
        >
          <div className="text-white px-10">
            <h1 className="text-sm md:text-2xl font-bold text-justify bg-gradient-to-r from-white to-[#F48C8C] bg-clip-text text-transparent">
              &quot;Whether you&apos;re building a home, a high-rise, or industrial
              infrastructure, we ensure strength, durability, and on-time
              delivery — every time. Choose Alhadeed Trade Links Strong
              Materials. Stronger Relationships. &quot;
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BannerContent;
