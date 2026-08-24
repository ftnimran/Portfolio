import React from "react";
import backGround2 from "../assets/image/background_image02.png";
import SectionTitle from "../components/SectionTitle";
import PillButtons from "../components/PillButtons.jsx";
import Resume from "../assets/resume/imran.pdf";

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen pt-[70px] px-[5%] md:px-[10%] pb-0">
      <SectionTitle titleText1="About" titleText2=" Me" />

      <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-20 w-full">
        <div className="about-picture flex justify-center relative">
          <div className="relative group">
            <div className="absolute -inset-1 bg-[#0ef] rounded-full blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <img
              src={backGround2}
              alt="Imran Ali Profile"
              className="relative h-52 w-52 md:h-100 md:w-100 rounded-full object-cover shadow-[0_0_20px_#0ef] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Text Left Aligned as per screenshot */}
        <div className="max-w-full md:max-w-150 w-full mt-6 md:mt-0 text-left">
          <h1 className="text-[2.35rem] md:text-[56px] font-bold pb-1.5 md:pb-2 -my-0.75 text-white">
            I'm <span className="text-[#0ef]">Imran Ali</span>
          </h1>
          <h5 className="text-[1.35rem] md:text-[32px] font-bold pb-1.5 md:pb-1 text-white">
            MERN Stack Developer
          </h5>
          <p className="text-[1.1rem] md:text-[20px] font-medium text-[#ededed] pb-3 mb-4 leading-tight">
            I'm a passionate MERN Stack Developer who loves building modern,
            responsive, and high-performance web applications. I work with
            MongoDB, Express.js, React, and Node.js to create seamless
            full-stack solutions that deliver great user experiences. My focus
            is on writing clean, scalable, and efficient code with attention to
            design and functionality.
          </p>
          <div className="mt-3 md:mt-4.5">
            <PillButtons btnText="Download Resume" url={Resume} target="_blank" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;