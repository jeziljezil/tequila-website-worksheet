import React, { forwardRef } from "react";

const FormCard = forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className="relative w-full h-full m-0">
      <div className="">
        <div className="w-[85vw] h-[80vh] bg-[#fcfcfd] bg-opacity-5 backdrop-blur-lg rounded-3xl shadow-extra-lg text-center">
          {children}
        </div>
      </div>
    </div>
  );
});

export default FormCard;
