import React, { useState } from "react";
import logoIcon from "../assets/image/icon_01.png";
// import Resume from "../assets/resume/imran.pdf";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    // { name: "Resume", href: Resume, target: "_blank" },
  ];

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 w-full h-17.5 bg-[#051129] backdrop-blur-sm flex items-center justify-between px-[10%] max-md:px-[5%] z-2000 shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
        {/* Logo */}
        <img
          src={logoIcon}
          className="h-16 w-16 max-md:h-12 max-md:w-12 rounded-full shadow-[0_0_20px_#0ef] animate-slideRight opacity-0 fill-mode-forwards"
          alt="Logo"
        />

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-[28px] text-white cursor-pointer transition-transform duration-200 hover:scale-110 animate-slideLeft opacity-0 fill-mode-forwards"
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰
        </button>

        {/* Nav / Sidebar */}
        <nav
          className={`
            fixed top-0 w-1/2 h-full bg-[rgba(30,30,30,0.5)] backdrop-blur-[20px] shadow-[-6px_0_20px_rgba(0,0,0,0.3)] flex flex-col pt-17.5 transition-[right] duration-500 z-1500
            md:static md:w-auto md:h-auto md:bg-transparent md:backdrop-blur-none md:shadow-none md:flex-row md:pt-0 md:transition-none
            ${isSidebarOpen ? "right-0" : "-right-100 md:right-0"}
          `}
        >
          {/* Close Button */}
          <button
            className="md:hidden absolute top-4.5 right-5 text-[26px] text-white cursor-pointer hover:rotate-90 transition-transform duration-200"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✖
          </button>

          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target={link.target || "_self"}
              // Yahan animation delay React ke andar hi add kar diya hai
              style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              className="block md:inline-block text-[1.1rem] md:text-[25px] text-white font-medium py-3.75 px-[35%] md:p-0 md:ml-8.75 tracking-[0.5px] max-md:bg-[rgba(30,30,30,0.5)] hover:text-[#0ef] transition-all duration-500 animate-slideTop opacity-0 fill-mode-forwards"
              onClick={() => setIsSidebarOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-1000 transition-all duration-300 md:hidden ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>
    </div>
  );
};

export default Navbar;
