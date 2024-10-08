import React from "react";

import img from "../../assets/image7.png";
import { DomainHostingServices } from "../../store/FormInputs";

const DomainHosting = () => {
  return (
    <div className="h-full flex">
      <img src={img} alt="" className="fixed bottom-0 h-40 ml-2" />
      <p className="ml-6 mt-4">
        <span className="text-2xl font-medium">7</span>
      </p>

      <h2 className="text-2xl text-wrap m-4">Domain & Hosting</h2>
      <div className="absolute flex flex-col top-[30%] left-[10%]">
        <label
          htmlFor="brandStyle"
          className={`mt-4 w-20 text-nowrap transition-opacity text-4xl duration-500 ease-in-out font-inter text-left`}
        >
          Let's start
          <br />
          with the Domain
        </label>
        <p className="text-left mt-6">
          <span className="tracking-widest text-3xl bg-gradient-to-r from-[#38c3ed] via-[#3250e7] to-[#9261d6] bg-clip-text text-transparent">
            Select
          </span>
          &nbsp;the right options
        </p>
      </div>
      <div className="flex flex-col fixed top-20 left-[40%] w-[50%]">
        <DomainHostingServices />
      </div>
    </div>
  );
};

export default DomainHosting;
