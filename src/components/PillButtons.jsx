import React from "react";

const PillButtons = ({ btnText, url, target }) => {
  return (
    <>
      <a
        className="inline-block px-7 py-3 rounded-[40px] text-[16px] no-underline opacity-0  animate-slideTop [animation-delay:2s] bg-linear-to-br from-[rgba(99,102,241,0.1)] to-[rgba(236,72,153,0.05)]  duration-[0.4s] ease-[ease] hover:bg-linear-to-br hover:from-[rgba(99,102,241,0.2)] hover:to-[rgba(236,72,153,0.1)]hover:shadow-[0_0_5px_cyan,0_0_25px_cyan,0_0_50px_cyan,0_0_100px_cyan,0_0_200px_cyan] bg-[rgba(0,238,255,0.8)] hover:bg-[rgba(0,238,255,1)] font-semibold text-[#081b29] tracking-wider border border-[rgba(99,102,241,0.2)] hover:shadow-[0_15px_30px_rgba(0,238,255,0.5)] hover:border-[#00eeff] transition-all  hover:-translate-y-1"
        href={url}
        target={target}
      >
        {btnText}
      </a>
    </>
  );
};

export default PillButtons;
