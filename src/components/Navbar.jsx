import React, { useState } from "react";
import logoIcon from "../assets/image/icon_01.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 w-full h-[70px] bg-[#051129]/90 backdrop-blur-sm flex items-center justify-between px-[5%] md:px-[10%] z-[2000] shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
        <img
          src={logoIcon}
          className="h-12 w-12 md:h-14 md:w-14 rounded-full shadow-[0_0_15px_#0ef] animate-slideRight opacity-0"
          alt="Logo"
        />

        <button
          className="md:hidden text-[32px] text-[#0ef] cursor-pointer transition-transform duration-200 hover:scale-110 animate-slideLeft opacity-0"
          onClick={() => setIsSidebarOpen(true)}
        >
          <i className="bx bx-menu"></i>
        </button>

        <nav
          className={`
            fixed top-0 w-1/2 h-full bg-[rgba(30,30,30,0.5)] backdrop-blur-[20px] shadow-[-6px_0_20px_rgba(0,0,0,0.3)] flex flex-col pt-[70px] transition-all duration-500 z-[1500]
            md:static md:w-auto md:h-auto md:bg-transparent md:backdrop-blur-none md:shadow-none md:flex-row md:pt-0 md:transition-none
            ${isSidebarOpen ? "right-0" : "-right-[100%] md:right-0"}
          `}
        >
          <button
            className="md:hidden absolute top-[18px] right-5 text-[32px] text-[#0ef] cursor-pointer hover:rotate-90 transition-transform duration-200"
            onClick={() => setIsSidebarOpen(false)}
          >
            <i className="bx bx-x"></i>
          </button>

          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              className="block md:inline-block text-[1.1rem] md:text-[22px] font-medium py-[15px] px-[20%] text-center md:text-left md:p-0 md:ml-[35px] tracking-[0.5px] max-md:bg-[rgba(30,30,30,0.5)] hover:text-[#0ef] transition-all duration-300 animate-slideTop opacity-0"
              onClick={() => setIsSidebarOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[1000] transition-all duration-300 md:hidden ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
    </div>
  );
};

export default Navbar;