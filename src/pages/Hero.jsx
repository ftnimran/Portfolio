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
        "UI &amp; UX Designer.",
      ],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <main
      id="home"
      className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-evenly md:justify-between pt-[70px] px-[5%] md:px-[10%] pb-10 overflow-hidden"
    >
      <div className="max-w-full md:max-w-150 text-left z-10">
        <h3 className="text-[1.35rem] md:text-[32px] font-bold opacity-0 animate-[slideBottom_1s_ease_forwards_0.7s] leading-tight text-white">
          Hello, It's Me
        </h3>
        <h1 className="text-[2.35rem] md:text-[56px] font-bold opacity-0 animate-[slideRight_1s_ease_forwards_1s] leading-tight my-1 md:-my-1.5 text-white">
          Imran Ali
        </h1>
        
        {/* Ek hi line me aur left aligned (Original jaisa) */}
        <h3 className="text-[1.35rem] md:text-[32px] font-bold mb-3 md:mb-6 opacity-0 animate-[slideTop_1s_ease_forwards_0.7s] leading-tight text-white">
          And I'm a <span ref={typedRef} className="text-[#0ef]"></span>
        </h3>
        
        <p className="text-[1.1rem] md:text-[20px] text-[#ededed] opacity-0 animate-[slideRight_1s_ease_forwards_1s] leading-tight mb-8">
          I'm a passionate MERN Stack Developer with a strong focus on building
          modern, scalable, and user-friendly web applications. I love turning
          creative ideas into fully functional digital products using MongoDB,
          Express.js, React.js, and Node.js.
        </p>

        <div className="flex gap-3.5 mb-8">
          <IconButtons btnText={<i className="bx bxl-linkedin"></i>} url="https://www.linkedin.com/in/imran-ali-214373241" target="_blank" index={5} />
          <IconButtons btnText={<i className="bx bxl-github"></i>} url="https://github.com/ftnimran" target="_blank" index={6} />
          <IconButtons btnText={<i className="bx bxl-instagram"></i>} url="https://www.instagram.com/ftn_imran/" target="_blank" index={7} />
          <IconButtons btnText={<i className="bx bxl-whatsapp"></i>} url="https://wa.me/7783037329" target="_blank" index={8} />
        </div>

        <PillButtons btnText="Contact Me" url="#contact" />
      </div>

      <div className="flex justify-center items-center z-10 max-md:mt-5">
        <div className="relative group animate-[float_5s_ease-in-out_infinite]">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0ef] to-purple-600 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition duration-1000"></div>
          <img
            src={backGround}
            alt="Imran Ali Portrait"
            className="relative h-52 w-52 md:h-[450px] md:w-[450px] rounded-full object-cover shadow-[0_0_20px_#0ef] opacity-0 animate-[slideLeft_1s_ease_forwards_0.7s] transition-all duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;