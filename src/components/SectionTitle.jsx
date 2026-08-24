import React from "react";

const SectionTitle = ({ titleText1, titleText2 }) => {
  return (
    <div className="w-full text-center">
      <h2 className="pt-1.5 font-bold text-[28px] md:text-[45px] leading-tight">
        {titleText1} <span className="text-[#0ef]">{titleText2}</span>
      </h2>
    </div>
  );
};

export default SectionTitle;