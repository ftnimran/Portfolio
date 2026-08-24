import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-16 bg-[#051129] flex items-center justify-center mt-10">
      <p className="text-center text-sm text-gray-500">
        Copyright &copy; {new Date().getFullYear()} | Designed by Imran Ali
      </p>
    </footer>
  );
};

export default Footer;