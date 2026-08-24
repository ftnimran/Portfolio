import React from "react";

const SuccessPopup = ({ show }) => {
  return (
    <div
      className={`fixed z-[3000] transition-all duration-500 top-24 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 ${show ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}
    >
      <div className="flex items-center gap-3 px-6 py-4 rounded-xl text-sm md:text-lg bg-[rgba(0,238,255,0.9)] text-[#081b29] font-semibold shadow-[0_10px_30px_rgba(0,238,255,0.4)]">
        <i className="bx bx-check-circle text-2xl md:text-3xl"></i>
        Message Sent Successfully!
      </div>
    </div>
  );
};

export default SuccessPopup;