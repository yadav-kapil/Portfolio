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
import mongoDBLogo from "@/assets/skills_icons/mongodblogo.png";
import expressJsLogo from "@/assets/skills_icons/expressjslogo.png";
import nodejsLogo from "@/assets/skills_icons/nodejslogo.png";
import mysqlLogo from "@/assets/skills_icons/mysqllogo.png";
import numpyLogo from "@/assets/skills_icons/numpylogo.png";
import pandasLogo from "@/assets/skills_icons/pandaslogo.png";
import ollamaLogo from "@/assets/skills_icons/ollamaLogo.png";
import jupyterLabLogo from "@/assets/skills_icons/jupyterlablogo.png";


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
      tab : 'Language',
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
      tab : 'Frontend'
    },
    {
      link: "#",
      text: "Backend Skills",
      image: [
        { name: "MongoDB", logo: mongoDBLogo },
        { name: "Express Js", logo: expressJsLogo },
        { name: 'Node JS', logo: nodejsLogo },
        { name: "MySQL", logo: mysqlLogo },
      ],
      tab : 'Backend'
    },
    {
      link: "#",
      text: "Others",
      image: [
        { name: "Jupyter Lab", logo: jupyterLabLogo },
        { name: "Numpy", logo: numpyLogo },
        { name: 'Pandas', logo: pandasLogo },
        { name: "Ollama", logo: ollamaLogo },
      ],
      tab : 'Others'
    },
  ];
  return SkillItem;
};
