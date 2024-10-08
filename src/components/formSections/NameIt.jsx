import React from "react";

import img from "../../assets/image1.png";
import { ProjectName, Website } from "../../store/FormInputs";

const NameIt = () => {
  return (
    <div className="h-full flex">
      <img src={img} alt="" className="fixed bottom-0 h-40 ml-2" />
      <p className="ml-6 mt-4">
        <span className="text-2xl font-medium">1</span>
      </p>

      <h2 className="text-2xl text-wrap m-4">Name It</h2>
      <div className="absolute top-[30%] left-[10%]">
        <label
          htmlFor="brandStyle"
          className={`mt-4 w-20 transition-opacity text-4xl duration-500 ease-in-out font-inter text-left`}
        >
          What's the Name?
        </label>
        <p className="text-left mt-6">
          You may share your <span className="">website</span> URL here,
          <br />
          if you have one.
        </p>
      </div>
      <div className="flex flex-col fixed top-28 left-[45%] w-[60%]">
        <ProjectName />
        <Website />
      </div>
    </div>
  );
};

export default NameIt;
