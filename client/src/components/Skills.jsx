import { motion } from "motion/react";

import { 
  LuCode,
  LuMonitor, 
  LuServer, 
  LuDatabase, 
  LuWrench, 
  LuBrain, 
  LuTerminal
} from "react-icons/lu";
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaGitAlt, 
  FaGithub, 
  FaDocker, 
  FaAws,
  FaPython,
  FaJava,
  FaBootstrap,
  FaLinux
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiExpress, 
  SiJsonwebtokens, 
  SiMongodb, 
  SiMysql, 
  SiCloudinary, 
  SiMongoose, 
  SiNginx,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiFlask,
  SiOpenai,
  SiRedux,
  SiVite,
  SiHtml5,
  SiCss3,
  SiSocketdotio,
  SiGithubactions,
  SiOllama,
  SiIntellijidea,
  SiJupyter,
  SiPostman
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandVscode } from "react-icons/tb";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <LuCode className="w-5.5 h-5.5" />,
    description: "Core languages used to build logic, algorithms, and applications.",
    skills: [
      { name: "Python", icon: <FaPython className="w-5.5 h-5.5 text-[#3776AB]" /> },
      { name: "JavaScript", icon: <FaJs className="w-5.5 h-5.5 text-[#F7DF1E]" /> },
      { name: "C", icon: <span className="font-outfit font-black text-sm text-[#00599C]">C</span> },
      { name: "Java", icon: <FaJava className="w-5.5 h-5.5 text-[#007396]" /> }
    ]
  },
  {
    title: "Frontend Development",
    icon: <LuMonitor className="w-5.5 h-5.5" />,
    description: "Building responsive and interactive user interfaces with modern web standards.",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="w-5 h-5 text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss3 className="w-5 h-5 text-[#1572B6]" /> },
      { name: "React.js", icon: <FaReact className="w-5.5 h-5.5 text-[#00D8FF]" /> },
      { name: "Vite", icon: <SiVite className="w-5 h-5 text-[#646CFF]" /> },
      { name: "Redux", icon: <SiRedux className="w-5 h-5 text-[#764ABC]" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="w-5.5 h-5.5 text-[#7952B3]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5.5 h-5.5 text-[#38BDF8]" /> },
      { name: "Framer Motion", icon: <TbBrandFramerMotion className="w-5.5 h-5.5 text-[#FF00C7]" /> }
    ]
  },
  {
    title: "Backend Development",
    icon: <LuServer className="w-5.5 h-5.5" />,
    description: "Developing secure server architectures, API routing, database schema design, and integrations.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="w-5.5 h-5.5 text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="w-5.5 h-5.5 text-black dark:text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-5.5 h-5.5 text-[#47A248]" /> },
      { name: "MySQL", icon: <SiMysql className="w-5.5 h-5.5 text-[#4479A1]" /> },
      { name: "Mongoose", icon: <SiMongoose className="w-5.5 h-5.5 text-[#880000]" /> },
      { name: "REST APIs", icon: <span className="font-mono font-bold text-[10px] text-[#4F46E5] dark:text-indigo-400">API</span> },
      { name: "Socket.io", icon: <SiSocketdotio className="w-5 h-5 text-black dark:text-white" /> },
      { name: "JWT Auth", icon: <SiJsonwebtokens className="w-5 h-5 text-[#D63AFF]" /> },
      { name: "Cloudinary", icon: <SiCloudinary className="w-5 h-5 text-[#3448C5]" /> }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: <LuWrench className="w-5.5 h-5.5" />,
    description: "Orchestrating container setups, cloud systems, and continuous delivery.",
    skills: [
      { name: "Docker", icon: <FaDocker className="w-5.5 h-5.5 text-[#2496ED]" /> },
      { name: "AWS EC2", icon: <FaAws className="w-5.5 h-5.5 text-[#FF9900]" /> },
      { name: "Nginx", icon: <SiNginx className="w-5.5 h-5.5 text-[#009639]" /> },
      { name: "CI/CD", icon: <SiGithubactions className="w-5 h-5 text-[#2088FF]" /> },
      { name: "Linux", icon: <FaLinux className="w-5.5 h-5.5 text-[#FCC624]" /> }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: <LuBrain className="w-5.5 h-5.5" />,
    description: "Integrating intelligent agents, modeling, and deep learning engineering.",
    skills: [
      { name: "NumPy", icon: <SiNumpy className="w-5 h-5 text-[#013243]" /> },
      { name: "Pandas", icon: <SiPandas className="w-5 h-5 text-[#150458]" /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn className="w-5.5 h-5.5 text-[#F7931E]" /> },
      { name: "Flask", icon: <SiFlask className="w-5 h-5 text-black dark:text-white" /> },
      { name: "LLMs", icon: <LuBrain className="w-5.5 h-5.5 text-[#818CF8]" /> },
      { name: "Ollama", icon: <SiOllama className="w-5 h-5 text-black dark:text-white" /> }
    ]
  },
  {
    title: "Development Tools",
    icon: <LuTerminal className="w-5.5 h-5.5" />,
    description: "Integrated development environments, notebooks, API testing platforms, and control systems.",
    skills: [
      { name: "VS Code", icon: <TbBrandVscode className="w-5.5 h-5.5 text-[#007ACC]" /> },
      { name: "IntelliJ", icon: <SiIntellijidea className="w-5.5 h-5.5 text-[#FE315D]" /> },
      { name: "Jupyter", icon: <SiJupyter className="w-5.5 h-5.5 text-[#F37626]" /> },
      { name: "Postman", icon: <SiPostman className="w-5.5 h-5.5 text-[#FF6C37]" /> },
      { name: "Git", icon: <FaGitAlt className="w-5.5 h-5.5 text-[#F05032]" /> },
      { name: "GitHub", icon: <FaGithub className="w-5.5 h-5.5 text-slate-800 dark:text-slate-200" /> }
    ]
  }
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="relative w-full overflow-hidden bg-[#FAFBFD] dark:bg-[#030308] transition-colors duration-300 pt-20 pb-24 px-6 sm:px-12 lg:px-24"
    >
      {/* Glowing Background Mesh Blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-950/5 rounded-full blur-3xl pointer-events-none z-0 animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-purple-500/10 dark:bg-purple-950/5 rounded-full blur-3xl pointer-events-none z-0 animate-pulse delay-1000"></div>

      {/* Intersecting Gradient Curves Wave Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full opacity-35 dark:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <defs>
            <linearGradient id="skillsGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="skillsGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M-100,200 C300,50 600,650 1000,150 C1200,-50 1400,300 1600,250" fill="none" stroke="url(#skillsGrad1)" strokeWidth="3" />
          <path d="M-50,450 C400,600 700,100 1100,350 C1300,450 1500,250 1650,400" fill="none" stroke="url(#skillsGrad2)" strokeWidth="2.5" strokeDasharray="8 6" />
          <path d="M100,750 C500,550 800,950 1200,650 C1400,450 1500,750 1700,600" fill="none" stroke="url(#skillsGrad1)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Floating Shape Elements */}
      {/* Glowing Purple 3D Sphere */}
      <div className="absolute top-[18%] left-[10%] z-0 pointer-events-none select-none animate-float-slow hidden xl:block">
        <svg className="w-16 h-16 overflow-visible" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="sphereGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="60%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#4F46E5" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="30" fill="url(#sphereGrad)" filter="drop-shadow(0 15px 25px rgba(99,102,241,0.35))" />
        </svg>
      </div>

      {/* Glowing 3D Glass Torus (Donut) */}
      <div className="absolute top-[42%] right-[10%] z-0 pointer-events-none select-none animate-float-delayed hidden xl:block">
        <svg className="w-20 h-20 overflow-visible" viewBox="0 0 100 100" transform="rotate(25)">
          <defs>
            <linearGradient id="torusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="50%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="30" stroke="url(#torusGrad)" strokeWidth="12" fill="none" filter="drop-shadow(0 10px 15px rgba(192,132,252,0.25))" />
        </svg>
      </div>

      {/* Glowing 4-Pointed Sparkle Star */}
      <div className="absolute bottom-[35%] left-[8%] z-0 pointer-events-none select-none animate-float-slow hidden xl:block">
        <svg className="w-10 h-10 text-yellow-400 fill-current filter drop-shadow(0 0 10px rgba(250,204,21,0.5))" viewBox="0 0 24 24">
          <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
        </svg>
      </div>

      {/* 3D Glass Cylinder (Capsule) */}
      <div className="absolute bottom-[16%] right-[18%] z-0 pointer-events-none select-none animate-float-delayed hidden xl:block">
        <svg className="w-16 h-20 overflow-visible" viewBox="0 0 60 90" transform="rotate(-30)">
          <defs>
            <linearGradient id="capsuleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#818CF8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect x="10" y="10" width="40" height="70" rx="20" fill="url(#capsuleGrad)" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.8" filter="drop-shadow(0 15px 20px rgba(56,189,248,0.25))" />
        </svg>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">


        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-1.5 text-center mb-16"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 dark:border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/8 dark:to-purple-500/8 w-fit select-none hover:border-indigo-500/40 hover:shadow-[0_2px_12px_rgba(99,102,241,0.15)] transition-all duration-300">
            <span className="text-indigo-500 dark:text-indigo-400 animate-pulse">
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
              </svg>
            </span>
            <span className="text-[10px] font-black tracking-[0.25em] text-indigo-650 dark:text-purple-300 font-manrope uppercase">
              My Skills
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
            Tools & Technologies <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">I Work With</span>
          </h2>
          <div className="relative w-16 h-4 flex items-center mt-0.5 justify-center">
            <div className="h-[3px] bg-gradient-to-r from-indigo-500 to-purple-600 w-full rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500 border border-white dark:border-[#030308]"></div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-350 max-w-lg mt-2.5 font-inter leading-relaxed">
            A curated set of technologies and tools I use to build modern, scalable and high-performance web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.025, y: -4 }}
              transition={{ 
                scale: { duration: 0.35, ease: "easeOut" },
                y: { duration: 0.35, ease: "easeOut" },
                default: { duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col p-6 sm:p-8 rounded-[2rem] border border-white/60 dark:border-indigo-500/15 bg-white/40 dark:bg-[#090A1A]/70 backdrop-blur-md shadow-lg shadow-indigo-950/5 dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden group hover:border-indigo-500/35 dark:hover:border-indigo-500/45 dark:hover:shadow-[0_20px_50px_rgba(99,102,241,0.08)] transition-colors duration-500 select-none text-left"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-500 dark:from-indigo-500 dark:to-indigo-400 text-white flex items-center justify-center shadow-md transform group-hover:scale-105 transition-transform duration-300 shrink-0">
                  {category.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-outfit leading-tight mt-1">
                    {category.title}
                  </h3>
                  <div className="h-[2px] bg-indigo-500 w-8 mt-1.5 rounded-full"></div>
                  <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-2.5 font-inter leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3.5 sm:gap-4 mt-8 w-full justify-center sm:justify-start">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 group/item cursor-pointer w-[21%] min-w-[48px] max-w-[65px]">
                    <div className="w-11 h-11 rounded-xl bg-slate-50/80 dark:bg-[#090A22]/90 border border-slate-200/50 dark:border-indigo-500/15 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover/item:scale-110 group-hover/item:bg-white dark:group-hover/item:bg-[#0E0F30] group-hover/item:border-indigo-500/55 group-hover/item:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300 shadow-sm">
                      {skill.icon}
                    </div>
                    <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 font-manrope group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors text-center leading-tight truncate w-full">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
