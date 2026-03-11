import React from "react";
import backGround2 from "../assets/image/background_image02.png";
import SectionTitle from "../components/SectionTitle";
import PillButtons from "../components/PillButtons.jsx";
import Resume from "../assets/resume/imran.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen pt-17.5 px-[5%] md:px-[10%] pb-0 *:leading-tight"
    >
      <SectionTitle titleText1="About" titleText2=" Me" />

      <div className="flex flex-col md:flex-row items-center justify-between relative mt-8 md:mt-20 w-full h-full">
        {/* Profile Image Container */}
        <div className="about-picture">
          <img
            src={backGround2}
            alt="Imran Ali"
            className="h-52 w-52 md:h-100 md:w-100 rounded-full object-cover shadow-[0_0_20px_#0ef]"
          />
        </div>

        {/* Text Content Container */}
        <div className="max-w-full md:max-w-150 w-full">
          <h1 className="text-[2.35rem] md:text-[56px] font-bold  pt-4 md:pt-0 pb-1.5 md:pb-2 -my-0.75">
            I'm <span className="text-[#0ef]">Imran Ali</span>
          </h1>

          <h5 className="text-[1.35rem] md:text-[32px] font-bold pb-1.5 md:pb-1">
            MERN Stack Developer
          </h5>

          <p className="text-[1.1rem] md:text-[20px]  font-medium pb-3">
            I'm a passionate MERN Stack Developer who loves building modern,
            responsive, and high-performance web applications. I work with
            MongoDB, Express.js, React, and Node.js to create seamless
            full-stack solutions that deliver great user experiences. My focus
            is on writing clean, scalable, and efficient code with attention to
            design and functionality.
          </p>

          <div className="mt-3 md:mt-4.5">
            <PillButtons btnText="Resume" url={Resume} target="_blank" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
