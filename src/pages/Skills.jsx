import React, { useEffect, useRef, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { skillsData } from "../data/SkillsData"; 

const SkillCard = ({ name, icon, progress }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0); 
  const cardRef = useRef(null);

  // Intersection Observer to trigger animations when card is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // Number counting animation sync with the progress bar
  useEffect(() => {
    if (isVisible) {
      let startTime;
      const duration = 2500; // 2.5 sec for smooth counting

      const animateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const timeElapsed = timestamp - startTime;
        
        const progressRatio = Math.min(timeElapsed / duration, 1);
        
        setCount(Math.floor(progressRatio * progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isVisible, progress]);

  return (
    <div
      ref={cardRef}
      // Mobile ke liye p-4 aur Desktop ke liye p-6 kiya gaya hai taaki progress bar ko width mil sake
      className="group relative flex flex-col items-center justify-center overflow-hidden rounded-[15px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-4 md:p-6 transition-all duration-[0.4s] ease-[ease] cursor-pointer hover:-translate-y-2.5 hover:border-[#0ef] hover:shadow-[0_20px_40px_rgba(0,238,255,0.2)]"
    >
      <div className="mb-3 md:mb-4 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[rgba(0,238,255,0.1)] text-[2rem] md:text-[2.5rem] text-[#0ef] transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
        <i className={icon}></i>
      </div>
      <span className="text-[0.85rem] md:text-[0.95rem] font-bold text-gray-200 mb-4 md:mb-5">{name}</span>
      
      {/* Mobile me gap-2 aur Desktop me gap-3 rakha hai */}
      <div className="w-full flex items-center justify-between gap-2 md:gap-3">
        {/* Progress Bar (Height h-1.5 se h-2 kar di gayi hai better visibility ke liye) */}
        <div className="flex-1 h-2 bg-[#051129] rounded-full overflow-hidden relative">
          <div
            className="absolute top-0 left-0 h-full bg-[#0ef] shadow-[0_0_15px_#0ef] transition-all duration-[2.5s] ease-out"
            style={{ width: isVisible ? `${progress}%` : "0%" }}
          ></div>
        </div>
        
        {/* Percentage Number (Mobile me font aur width adjust ki gayi hai) */}
        <span className="text-[10px] md:text-[12px] font-bold text-[#0ef] tracking-widest w-[26px] md:w-[35px] text-right">
          {count}%
        </span>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-screen pt-[70px] px-[5%] md:px-[10%] pb-10">
      <SectionTitle titleText1="My" titleText2=" Skills" />
      <div className="grid gap-8 mt-12 md:mt-16">
        {skillsData.map((section, idx) => (
          <div key={idx} className="rounded-[20px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-5 md:p-12 transition-all duration-[0.4s] hover:border-[#0ef] hover:shadow-[0_20px_40px_rgba(0,238,255,0.1)]">
            <h3 className="mb-6 md:mb-8 text-[1.2rem] md:text-[1.5rem] font-bold tracking-[1px] bg-[linear-gradient(to_bottom_right,#00eeff,#83f0ff,#c3f1ff,#ecf5ff,#ffffff)] bg-clip-text text-transparent uppercase text-center md:text-left">
              {section.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-8">
              {section.skills.map((skill, sIdx) => (
                <SkillCard key={sIdx} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;