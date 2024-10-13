import React, { useState } from "react";

const NeonButton = ({ text, color, onSelect, bgColor }) => {
  const [isNeon, setIsNeon] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const tickMark = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    setIsNeon(!isNeon); // Toggle the neon effect
    onSelect(text);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`cursor-pointer relative max-w-fit text-nowrap pl-2 pr-8 py-3 bg-gray-400 bg-opacity-5 hover:bg-opacity-15 shadow-extra-lg 
        ${
          isNeon ? "text-white" : "text-gray-300 hover:text-white"
        } tracking-wide rounded-full 
        transition-all duration-300 ease-in-out`}
      style={{
        backgroundColor: bgColor
          ? !isNeon
            ? isHovered
              ? `${bgColor}80`
              : `${bgColor}40`
            : `${bgColor}100`
          : "",
        // backgroundColor: bgColor
        //   ? isHovered
        //     ? `${bgColor}35`
        //     : `${bgColor}20`
        //   : "",
        border: isNeon ? `1px solid ${color}` : "1px solid transparent",
        boxShadow: isNeon
          ? `0 0 3px ${color}, 0 0 3px ${color}, 0 0 8px ${color}`
          : "",
      }}
    >
      <div className="flex gap-1">
        <div
          className={`transition-all pt-[1.75%] duration-300 ease-in-out overflow-hidden flex justify-end ${
            isNeon ? "opacity-100" : "opacity-0"
          }`}
        >
          {tickMark}
        </div>
        {text}
      </div>
    </div>
  );
};

export default NeonButton;
