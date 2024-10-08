import React from "react";

import img from "../../assets/image6.png";
import { Reference } from "../../store/FormInputs";

const Preference = () => {
  return (
    <div className="h-full flex">
      <img src={img} alt="" className="fixed bottom-0 h-40 ml-2" />
      <p className="ml-6 mt-4">
        <span className="text-2xl font-medium">6</span>
      </p>
      <h2 className="text-2xl text-wrap m-4">Your Preferences</h2>
      <div className="absolute flex flex-col top-[30%] left-[10%]">
        <label
          htmlFor="brandStyle"
          className={`mt-4 w-20 text-nowrap transition-opacity text-4xl duration-500 ease-in-out font-inter text-left`}
        >
          It's your own!
        </label>
        <p className="text-left mt-6">
          We'd like to hear
          <span className="tracking-wider text-3xl bg-gradient-to-r from-[#38c3ed] via-[#3250e7] to-[#9261d6] bg-clip-text text-transparent">
            &nbsp;your preferences
          </span>
          <br />
          for the website.
        </p>
      </div>
      <div className="flex flex-col fixed top-10 left-[40%] w-[90%]">
        <Reference />
      </div>
    </div>
  );
};

export default Preference;
