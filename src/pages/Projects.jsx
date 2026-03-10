import React from "react";
import SectionTitle from "../components/SectionTitle";
import portfolioImg from "../assets/image/projects_img/portfolio.png";
import socialMediaImg from "../assets/image/projects_img/socialMedia.png";
import gitHubProfileFinderImg from "../assets/image/projects_img/gitHubProfileFinder.png";
import simpleCalculatorImg from "../assets/image/projects_img/simpleCalculator.png";
import shayariClubImg from "../assets/image/projects_img/shayariClub.png";

const projects = [
  {
    title: "My Portfolio",
    description: "Modern and fully responsive personal portfolio website built with React.js to showcase my projects, skills, and experience.",
    liveLink: "https://portfolio05.qzz.io",
    githubLink: "https://github.com/ftnimran/Portfolio",
    tags: ["React", "Tailwindcss", "CSS"],
    image: portfolioImg, 
  },
  {
    title: "Social Media Link",
    description: "Single platform website to showcase and share all your social media links easily.",
    liveLink: "https://ftnlinks.qzz.io",
    githubLink: "https://github.com/ftnimran/Social-Media-Links",
    tags: ["Html", "Css", "JavaScript"],
    image: socialMediaImg,
  },
  {
    title: "GitHub Profile Finder",
    description: "Simple app fetches GitHub profiles using real-time API instantly online.",
    liveLink: "https://github-profile-finder-505.netlify.app",
    githubLink: "https://github.com/ftnimran/GitHub-Profile-Finder",
    tags: ["Html", "Css", "JavaScript", "REST API"],
    image: gitHubProfileFinderImg,
  },
  {
    title: "Simple Calculator",
    description: "Simple web calculator built with HTML, CSS, JavaScript for basic arithmetic operations.",
    liveLink: "https://simple-calculator-505.netlify.app",
    githubLink: "https://github.com/ftnimran/Simple-Calculator",
    tags: ["Html", "Css", "JavaScript"],
    image: simpleCalculatorImg,
  },
  {
    title: "Shayari Club",
    description: "Simple shayari website offering Love, Sad, Bewafa, Birthday, and Attitude poetry categories.",
    liveLink: "https://shayari-club-505.netlify.app",
    githubLink: "https://github.com/ftnimran/Shayari-Club",
    tags: ["Html", "Css"],
    image: shayariClubImg,
  }
];

const ProjectCard = ({ project }) => (
  <div className="group relative flex flex-col overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.1)] bg-linear-to-br from-[rgba(99,102,241,0.1)] to-[rgba(236,72,153,0.05)] transition-all duration-[0.4s] ease-in-out hover:-translate-y-3.75 hover:border-[#00eeff] hover:shadow-[0_30px_60px_rgba(0,238,255,0.25)]">

    {/* Project Image Section */}
    <div className="relative h-55 w-full overflow-hidden">

      {/* Overlay for better text contrast on hover */}
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    {/* Project Info Section */}
    <div className="flex flex-1 flex-col p-4 md:p-8">
      <h3 className="mb-[0.8rem] text-[1.4rem] font-extrabold text-white">
        {project.title}
      </h3>
      <p className="mb-6 text-[0.95rem] leading-[1.6] text-gray-400">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mb-8 flex flex-wrap gap-2">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="rounded-[20px] bg-[rgba(0,238,255,0.5)] hover:bg-[rgba(0,238,255,0.8)] px-3 py-1 text-[0.7rem] font-semibold text-[#081b29] uppercase tracking-wider border border-[rgba(99,102,241,0.2)] hover:shadow-[0_15px_30px_rgba(0,238,255,0.5)] hover:border-[#00eeff] transition-all duration-[0.4s] ease-in-out hover:-translate-y-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="mt-auto flex items-center gap-3">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-[0.9rem] font-bold active:scale-95 shadow-lg bg-[rgba(0,238,255,0.8)] hover:bg-[rgba(0,238,255,1)]  text-[#081b29] tracking-wider border border-[rgba(99,102,241,0.2)] hover:shadow-[0_15px_30px_rgba(0,238,255,0.5)] hover:border-[#00eeff] transition-all duration-[0.4s] ease-in-out hover:-translate-y-1"
        >
          <i className='bx bx-link-external text-[20px]'></i> Live
        </a>

        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-xl border  bg-[rgba(255,255,255,0.05)] text-[#0ef] border-[#0ef] hover:border-[rgba(99,102,241,0.2)] hover:bg-[#0ef] hover:text-[#081b29] shadow-md text-3xl tracking-wider  hover:shadow-[0_15px_30px_rgba(0,238,255,0.5)] transition-all duration-[0.4s] ease-in-out hover:-translate-y-1"
          title="View Source"
        >
          <i className='bx bxl-github' ></i>
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen pt-17.5 px-[5%] md:px-[10%] pb-0 *:leading-tight"
    >
      <SectionTitle titleText1="My" titleText2=" Projects" />

      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10 mt-8 md:mt-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
