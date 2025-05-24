import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { MdPhone, MdLocationOn } from "react-icons/md";

function ContactDetails() {
  return (
    <div className="p-6 md:p-10 mt-7 bg-black" id="contacts">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:space-x-20">
        {/* Left side: Contact Info */}
        <div className="flex-1 flex flex-col space-y-10">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[#0000CC] to-[#F48C8C] bg-clip-text text-transparent text-center md:text-left">
            CONTACT US
          </h1>

          <div className="flex flex-col space-y-6 text-center md:text-left text-gray-400 ">
            <div className="flex items-center md:justify-start space-x-4">
              <FaEnvelope className="text-xl md:text-2xl text-[#0000CC]" />
              <span className="text-sm md:text-base">
                tradelinksalhadeed@gmail.com
              </span>
            </div>

            <div className="flex items-center md:justify-start space-x-4">
              <MdPhone className="text-xl md:text-2xl text-[#0000CC]" />
              <span className="text-sm md:text-base">
                9747782881, 9387102420, 9072526000
              </span>
            </div>

            <div className="flex items-center  md:justify-start space-x-4">
              <MdLocationOn className="text-2xl md:text-4xl mt-1 text-[#0000CC] " />
              <span className="text-sm md:text-base">
                AL HADEED TRADE LINKS 6/3 KULATHUKKATIL WARD NO.6, MULLURKARA
                THRISSUR
              </span>
            </div>
          </div>
        </div>
        <hr className="mt-10 md:hidden"/>

        {/* Right side: Additional content */}
        <div className="flex-1 mt-10 md:mt-0 flex flex-col  justify-center text-center md:text-left text-gray-600 text-base md:text-lg">
          <h2 className="font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-justify">
            We offer reliable and quality trade services, ensuring customer
            satisfaction with timely delivery and competitive pricing. Reach out
            to us to experience the best in the industry.
          </p>
          {/* You can replace this with whatever text or even images, maps, etc. */}
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
