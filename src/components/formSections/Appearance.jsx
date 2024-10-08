import React from "react";

import img from "../../assets/image5.png";
import { BrandStyle } from "../../store/FormInputs";

const Appearance = () => {
  return (
    <div className="h-full flex">
      <img src={img} alt="" className="fixed bottom-0 h-40 ml-2" />
      <p className="ml-6 mt-4">
        <span className="text-2xl font-medium">5</span>
      </p>

      <h2 className="text-2xl text-wrap m-4">Website Appearance</h2>
      <div className="">
        <BrandStyle />
      </div>
    </div>
  );
};

export default Appearance;
