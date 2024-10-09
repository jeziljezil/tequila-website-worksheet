import React, { useState } from "react";

import img from "../../assets/image2.png";
import { CompanyName, ContactPOC } from "../../store/FormInputs";

const Connect = () => {
  const handlePhoneChange = (phone) => {
    updateFormData("phone", phone); // Save the phone number to formData
  };

  return (
    <div className="h-full flex">
      <img src={img} alt="" className="fixed bottom-0 h-40 ml-2" />
      <p className="ml-6 mt-4">
        <span className="text-2xl font-medium">2</span>
      </p>
      <h2 className="text-2xl text-wrap m-4">Connecting With You</h2>
      <div className="absolute top-[15%] left-[10%] text-left">
        <label
          htmlFor="brandStyle"
          className={`mt-4 w-20 transition-opacity text-4xl duration-500 ease-in-out font-inter`}
        >
          We'd love
          <br />
          to
          <span className="font-medium bg-gradient-to-r from-[#38c3ed] via-[#3250e7] to-[#9261d6] bg-clip-text text-transparent">
            &nbsp;contact you
          </span>
        </label>
        <p className="text-left mt-6">
          Give us upto two contacts,
          <br />
          so we can keep you posted.
        </p>
      </div>

      <div className="flex flex-col fixed top-24 left-[40%] w-[90%]">
        <CompanyName />
        <ContactPOC />
      </div>
    </div>
  );
};

export default Connect;
