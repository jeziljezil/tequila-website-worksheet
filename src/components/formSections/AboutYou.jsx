import React, { useState } from "react";

import img from "../../assets/image3.png";
import {
  FileUploadComponent,
  ServicesOffered,
  WebsitePurpose,
} from "../../store/FormInputs";

const AboutYou = () => {
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState(false);
  return (
    <div className="h-full flex">
      <img src={img} alt="" className="fixed bottom-0 h-40 ml-2" />
      <p className="ml-6 mt-4">
        <span className="text-2xl font-medium">3</span>
      </p>

      <h2 className="text-2xl text-wrap m-4">More About You</h2>

      <div className="w-[60%]">
        <div className="ml-10 w-[110%] h-[50%] flex justify-between relative">
          <p
            className={`absolute bottom-10 text-red-400 ${
              touched && error ? "opacity-100" : "opacity-0"
            }`}
          >
            Choose a file or describe your services.
          </p>
          <div className="h-[55%] w-[40%]">
            <FileUploadComponent setError={setError} setTouched={setTouched} />
          </div>
          <p className="mt-[15%]">OR</p>
          <div className="h-[70%] w-[50%]">
            <ServicesOffered setError={setError} setTouched={setTouched} />
          </div>
        </div>
        <WebsitePurpose />
      </div>
    </div>
  );
};

export default AboutYou;
