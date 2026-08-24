import React from "react";

const PillButtons = ({ btnText, url, target }) => {
  return (
    <a
      className="inline-block px-7 py-3 rounded-[40px] text-[16px] font-semibold text-[#081b29] tracking-wider bg-[rgba(0,238,255,0.8)] border border-[rgba(99,102,241,0.2)] opacity-0 animate-slideTop transition-all duration-[0.4s] ease-[ease] hover:bg-[#0ef] hover:shadow-[0_15px_30px_rgba(0,238,255,0.5)] hover:border-[#0ef] hover:-translate-y-1"
      href={url}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      style={{ animationDelay: "1s" }}
    >
      {btnText}
    </a>
  );
};

export default PillButtons;