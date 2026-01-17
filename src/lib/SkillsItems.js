import reactLogo from "@/assets/skills_icons/reactLogo.png";
import pythonLogo from "@/assets/skills_icons/pythonLogo.png";
import jsLogo from "@/assets/skills_icons/jsLogo.png";
import javaLogo from "@/assets/skills_icons/javaLogo.png";
import CLogo from "@/assets/skills_icons/CLogo.png";
import BootStrapLogo from "@/assets/skills_icons/BootStrapLogo.png"
import FramerLogo from "@/assets/skills_icons/Framer.png";
import tailwindLogo from "@/assets/skills_icons/tailwindLogo.png";
import HTMLLogo from "@/assets/skills_icons/htmlLogo.png";
import CSSLogo from "@/assets/skills_icons/CSSLogo.png";
import splineLogo from "@/assets/skills_icons/splineLogo.png";
import viteLogo from "@/assets/skills_icons/viteLogo.png";
import reduxLogo from "@/assets/skills_icons/reduxLogo.png";


export const SkillsItems = () => {
  const SkillItem = [
    {
      link: "#",
      text: "Programming Language",
      image: [
        { name: "Python", logo: pythonLogo },
        { name: "Javscript", logo: jsLogo },
        { name: 'Java', logo: javaLogo },
        { name: "C Lang", logo: CLogo },
      ],
    },
    {
      link: "#",
      text: "Frontend Skills",
      image: [
        { name: 'HTML', logo: HTMLLogo },
        { name: 'CSS', logo: CSSLogo },
        { name: "Tailwind CSS", logo: tailwindLogo },
        { name: "BootStrap", logo: BootStrapLogo },
        { name: "React", logo: reactLogo },
        { name: "Redux", logo: reduxLogo },
        { name: 'Vite', logo: viteLogo },
        { name: 'Spline', logo: splineLogo },
        { name: "Framer Motion", logo: FramerLogo },
      ],
    },
    {
      link: "#",
      text: "Backend Skills",
      image: [
        { name: "MongoDB", logo: pythonLogo },
        { name: "Express Js", logo: jsLogo },
        { name: 'Node JS', logo: javaLogo },
        { name: "MySQL", logo: CLogo },
      ],
    },
    {
      link: "#",
      text: "Others",
      image: [
        { name: "Jupyter Lab", logo: pythonLogo },
        { name: "Numpy", logo: jsLogo },
        { name: 'Pandas', logo: javaLogo },
        { name: "Ollama", logo: CLogo },
      ],
    },
  ];
  return SkillItem;
};
