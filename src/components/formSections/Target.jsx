import React from "react";

import img from "../../assets/image4.png";
import { TargetAudience } from "../../store/FormInputs";

const Target = () => {
  return (
    <div className="h-full flex">
      <img src={img} alt="" className="fixed bottom-0 h-40 ml-2" />
      <p className="ml-6 mt-4">
        <span className="text-2xl font-medium">4</span>
      </p>

      <h2 className="text-2xl text-wrap m-4 mb-0">Your Target Audience</h2>
      <TargetAudience />
    </div>
  );
};

export default Target;
