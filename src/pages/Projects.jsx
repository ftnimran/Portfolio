import React, { useState, useEffect } from "react";
import SectionTitle from "../components/SectionTitle";
import { projectsData } from "../data/ProjectsData";

const ProjectCard = ({ project }) => (
  <div className="group flex flex-col overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] transition-all duration-500 hover:-translate-y-3 hover:border-[#0ef] hover:shadow-[0_30px_60px_rgba(0,238,255,0.25)]">
    <div className="relative h-56 w-full overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#051129] to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
      <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
    </div>
    
    <div className="flex flex-1 flex-col p-6 z-20">
      <h3 className="mb-3 text-[1.4rem] font-bold text-white group-hover:text-[#0ef] transition-colors">{project.title}</h3>
      <p className="mb-6 text-[0.95rem] text-gray-400 flex-1 leading-relaxed">{project.description}</p>
      
      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="rounded-full bg-[rgba(0,238,255,0.1)] border border-[#0ef] px-3 py-1 text-[11px] font-bold tracking-widest text-[#0ef] uppercase">
            {tag}
          </span>
        ))}
      </div>
      
      {/* Restored Original Hover Effects for Buttons */}
      <div className="mt-auto pt-5 border-t border-white/5 flex items-center gap-4">
        <a 
          href={project.liveLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-[0.9rem] font-bold active:scale-95 shadow-lg bg-[rgba(0,238,255,0.8)] text-[#081b29] tracking-wider border border-[rgba(99,102,241,0.2)] transition-all duration-[0.4s] ease-in-out hover:bg-[rgba(0,238,255,1)] hover:border-[#00eeff] hover:shadow-[0_15px_30px_rgba(0,238,255,0.5)] hover:-translate-y-1"
        >
          <i className='bx bx-link-external text-[20px]'></i> Live Demo
        </a>
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex h-12 w-12 items-center justify-center rounded-xl border bg-[rgba(255,255,255,0.05)] text-[#0ef] border-[#0ef] shadow-md text-3xl tracking-wider transition-all duration-[0.4s] ease-in-out hover:border-[rgba(99,102,241,0.2)] hover:bg-[#0ef] hover:text-[#081b29] hover:shadow-[0_15px_30px_rgba(0,238,255,0.5)] hover:-translate-y-1"
        >
          <i className='bx bxl-github'></i>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const initialVisibleCount = isMobile ? 3 : 6;
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, initialVisibleCount);

  return (
    <section id="projects" className="w-full min-h-screen pt-[70px] px-[5%] md:px-[10%] pb-10">
      <SectionTitle titleText1="My" titleText2=" Projects" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-16">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {projectsData.length > initialVisibleCount && (
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-10 py-3 rounded-full border-2 border-[#0ef] text-[#0ef] font-bold text-[16px] transition-all duration-300 active:scale-95 hover:bg-[#0ef] hover:text-[#081b29] hover:shadow-[0_0_20px_#0ef]"
          >
            {showAll ? "Show Less" : "Show More Projects"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;