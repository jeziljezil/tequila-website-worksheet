import React from "react";

import banner from "../assets/banner.png";

const Intro = ({ firstScroll }) => {
  const arrowHead = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 30"
      stroke="white"
      strokeWidth="0.25"
      className="inline w-20 h-30 hover:text-white"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l11 13-11 13" />
    </svg>
  );
  return (
    <div>
      <div className="">
        <img src={banner} alt="" className="w-[60%] object-contain" />
      </div>
      <h2 className="m-6 mt-14 text-6xl uppercase text-left font-inter leading-tight">
        <span className="text-7xl font-normal">Congrats!</span>
        <br />
        <span className="text-5xl font-thin">on your</span>
        <span className="font-light"> first step</span>&nbsp;
        <span className="text-5xl font-thin">to</span>
        <br />
        <span className="tracking-widest font-semibold bg-gradient-to-r from-[#38c3ed] via-[#3250e7] to-[#9261d6] bg-clip-text text-transparent">
          digital transformation
        </span>
      </h2>
      <div className="fixed right-16 top-32 w-80">
        <p className="mr-24 text-3xl uppercase text-right font-thin">
          Tell us about your company and business goals
        </p>
        <div onClick={firstScroll} className="ml-40 flex move cursor-pointer">
          {arrowHead}
        </div>
      </div>
    </div>
  );
};

export default Intro;
