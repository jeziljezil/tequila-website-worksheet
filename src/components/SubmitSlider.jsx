import React, { useState } from "react";

import img from "../assets/image7.png";

const SubmitSlider = () => {
  const [submitted, setSubmitted] = useState(false);
  const [hover, setHover] = useState(false);

  const arrowHead = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      stroke="white"
      strokeWidth="0.25"
      className="inline w-20 h-30 hover:text-white"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
  7;
  return (
    <div className="absolute top-[10%] left-[20%]">
      <img src={img} alt="" className="fixed left-0 bottom-0 h-40 ml-2" />
      <h1 className="text-left text-5xl">
        <span className="tracking-widest text-9xl bg-gradient-to-r from-[#38c3ed] via-[#3250e7] to-[#9261d6] bg-clip-text text-transparent">
          Great!
        </span>
        <br />
        That's all folks!
        <br />
        We're ready to take this forward...
      </h1>
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        className={`flex justify-between mt-5 max-w-fit items-center rounded-full shadow-2xl px-10 py-5 cursor-pointer ${
          hover ? "backdrop-blur-3xl" : "backdrop-blur-xl"
        }`}
      >
        <h1
          className={`text-7xl font-extrabold text-white transition-opacity duration-300 ease-in-out ${
            hover ? "opacity-80" : "opacity-50"
          }`}
        >
          <span className="">Let's gooo</span>
        </h1>
        <div className="move my-auto pb-4">{arrowHead}</div>
      </div>
    </div>
  );
};

export default SubmitSlider;
