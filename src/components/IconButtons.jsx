import React from "react";

const IconButtons = ({ btnText, url, target, index }) => {
  return (
    <a
      className="inline-flex justify-center items-center w-10 h-10 md:w-[45px] md:h-[45px] bg-transparent border-2 border-[#0ef] rounded-full text-[20px] md:text-[24px] text-[#0ef] no-underline transition-all duration-500 ease-in-out opacity-0 animate-slideLeft hover:bg-[#0ef] hover:text-[#081b29] hover:shadow-[0_0_20px_#0ef] hover:-translate-y-1"
      href={url}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {btnText}
    </a>
  );
};

export default IconButtons;