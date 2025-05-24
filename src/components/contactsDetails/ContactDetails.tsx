import React from "react";

function ContactDetails() {
  return (
    <div className="p-10" id="contacts">
      <div className="shadow-2xl space-y-10 p-10">
        <div className="w-full  flex justify-center">
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#0000CC]  to-[#F48C8C] bg-clip-text text-transparent">
            CONTACT US
          </h1>
        </div>
        <div className="text-xl font-bold space-y-5 flex justify-between">
          <h2>MAIL dkhkdakjakl</h2>
          <h2>PHONE afafafaf</h2>
          <h2>LOCATION</h2>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
