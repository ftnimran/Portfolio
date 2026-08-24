import portfolioImg from "../assets/image/projects_img/portfolio.png";
import socialMediaImg from "../assets/image/projects_img/socialMedia.png";
import gitHubProfileFinderImg from "../assets/image/projects_img/gitHubProfileFinder.png";
import simpleCalculatorImg from "../assets/image/projects_img/simpleCalculator.png";
import shayariClubImg from "../assets/image/projects_img/shayariClub.png";

export const projectsData = [
  {
    title: "My Portfolio",
    description: "Modern and fully responsive personal portfolio website built with React.js to showcase my projects, skills, and experience.",
    liveLink: "https://portfolio05.qzz.io",
    githubLink: "https://github.com/ftnimran/Portfolio",
    tags: ["React", "Tailwind", "CSS"],
    image: portfolioImg, 
  },
  {
    title: "Social Media Link",
    description: "Single platform website to showcase and share all your social media links easily.",
    liveLink: "https://ftnlinks.qzz.io",
    githubLink: "https://github.com/ftnimran/Social-Media-Links",
    tags: ["HTML", "CSS", "JS"],
    image: socialMediaImg,
  },
  {
    title: "GitHub Profile Finder",
    description: "Simple app fetches GitHub profiles using real-time API instantly online.",
    liveLink: "https://github-profile-finder-505.netlify.app",
    githubLink: "https://github.com/ftnimran/GitHub-Profile-Finder",
    tags: ["JS", "REST API"],
    image: gitHubProfileFinderImg,
  },
  {
    title: "Simple Calculator",
    description: "Simple web calculator built with HTML, CSS, JavaScript for basic arithmetic operations.",
    liveLink: "https://simple-calculator-505.netlify.app",
    githubLink: "https://github.com/ftnimran/Simple-Calculator",
    tags: ["HTML", "CSS", "JS"],
    image: simpleCalculatorImg,
  },
  {
    title: "Shayari Club",
    description: "Simple shayari website offering Love, Sad, Bewafa, Birthday, and Attitude poetry categories.",
    liveLink: "https://shayari-club-505.netlify.app",
    githubLink: "https://github.com/ftnimran/Shayari-Club",
    tags: ["HTML", "CSS"],
    image: shayariClubImg,
  }
];