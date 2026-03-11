import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import backGround from "../assets/image/background_image01.png";
import IconButtons from "../components/IconButtons.jsx";
import PillButtons from "../components/PillButtons.jsx";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "MERN Stack Developer",
        "Full Stack Web Developer",
        "Frontend Developer.",
        "Backend Developer.",
        "UI & UX Designer.",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main
      id="home"
      className="relative w-full h-screen flex flex-col-reverse md:flex-row items-center justify-evenly md:justify-between pt-17.5 px-[5%] md:px-[10%] pb-17.5 md:pb-0 overflow-hidden"
    >
      {/* Left Content */}
      <div className="max-w-full md:max-w-150 text-left">
        <h3 className="text-[1.35rem] md:text-[32px] font-bold opacity-0 animate-[slideBottom_1s_ease_forwards_0.7s] leading-tight">
          Hello, It's Me
        </h3>

        <h1 className="text-[2.35rem] md:text-[56px] font-bold opacity-0 animate-[slideRight_1s_ease_forwards_1s] leading-tight -my-1.5">
          Imran Ali
        </h1>

        <h3 className="text-[1.35rem] md:text-[32px] font-bold mb-3 md:mb-6 opacity-0 animate-[slideTop_1s_ease_forwards_0.7s] leading-tight">
          And I'm a <span ref={typedRef} className="text-[#0ef]"></span>
        </h3>

        <p className="text-[1.1rem] md:text-[20px] opacity-0 animate-[slideRight_1s_ease_forwards_1s] leading-tight">
          I'm a passionate MERN Stack Developer with a strong focus on building
          modern, scalable, and user-friendly web applications. I love turning
          creative ideas into fully functional digital products using MongoDB,
          Express.js, React.js, and Node.js.
        </p>

        {/* Social Icons */}
        <div className="flex gap-3.5">
          <IconButtons
            btnText={<i className="bx bxl-linkedin"></i>}
            url="https://www.linkedin.com/in/imran-ali-214373241"
            nextwindows="_blank"
            index={7}
          />
          <IconButtons
            btnText={<i className="bx bxl-github"></i>}
            url="https://github.com/ftnimran"
            nextwindows="_blank"
            index={8}
          />
          <IconButtons
            btnText={<i className="bx bxl-instagram"></i>}
            url="https://www.instagram.com/ftn_imran/"
            nextwindows="_blank"
            index={9}
          />
          <IconButtons
            btnText={<i className="bx bxl-whatsapp"></i>}
            url="https://wa.me/7783037329"
            nextwindows="_blank"
            index={10}
          />
        </div>

        <PillButtons btnText="Contact Me" url="#contact" />
      </div>

      {/* Right Image */}
      <div className="flex justify-center items-center">
        <img
          src={backGround}
          alt="Imran Ali"
          className="h-52 w-52 md:h-120 md:w-120 rounded-full object-cover shadow-[0_0_20px_#0ef] opacity-0 animate-[slideLeft_1s_ease_forwards_0.7s] transition-all duration-1000 hover:scale-105 hover:shadow-[0_0_5px_orange,0_0_25px_white,0_0_50px_green,0_0_100px_cyan,0_0_200px_cyan] max-md:mt-3"
        />
      </div>
    </main>
  );
};

export default Hero;
