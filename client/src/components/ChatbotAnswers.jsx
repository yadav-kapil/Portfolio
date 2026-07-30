import {
  LuCode,
  LuCpu,
  LuDatabase,
  LuLayers,
  LuDownload,
  LuGraduationCap,
  LuMail,
  LuMapPin,
  LuUser,
  LuSparkles,
  LuMonitor,
} from "react-icons/lu";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import kapilImg from "../assets/kapilYadav.png";

// 1. Initial Greeting / Intro Suggestion Card
export const BotIntroResponse = () => (
  <div className="flex flex-col gap-2 font-inter">
    <span>Hi there! 👋 I'm Kapil Bot. I'm here to help you learn more about Kapil. You can ask me questions like:</span>
    <div className="flex flex-col gap-1.5 mt-2.5 pt-2.5 border-t border-slate-100 dark:border-white/[0.04] text-[10.5px]">
      <div className="flex items-center gap-1.5 text-slate-550 dark:text-slate-400">
        <span className="text-indigo-500">•</span>
        <span>"Who is Kapil?" (Detailed bio & goals)</span>
      </div>
      <div className="flex items-center gap-1.5 text-slate-555 dark:text-slate-400">
        <span className="text-indigo-500">•</span>
        <span>"What are your skills?" (Tech stack categorizations)</span>
      </div>
      <div className="flex items-center gap-1.5 text-slate-555 dark:text-slate-400">
        <span className="text-indigo-500">•</span>
        <span>"Show me your projects" (Featured works & details)</span>
      </div>
      <div className="flex items-center gap-1.5 text-slate-555 dark:text-slate-400">
        <span className="text-indigo-500">•</span>
        <span>"Where did you study?" (Education details)</span>
      </div>
      <div className="flex items-center gap-1.5 text-slate-555 dark:text-slate-400">
        <span className="text-indigo-500">•</span>
        <span>"What services do you provide?" (Web dev offerings)</span>
      </div>
      <div className="flex items-center gap-1.5 text-slate-555 dark:text-slate-400">
        <span className="text-indigo-500">•</span>
        <span>"How can I hire you?" (Connect social channels)</span>
      </div>
    </div>
  </div>
);

// 2. About Kapil Profile Card
export const AboutKapilResponse = () => (
  <div className="flex flex-col gap-3 font-inter">
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-full border border-indigo-500/20 overflow-hidden shrink-0 bg-slate-50 dark:bg-white/[0.03] p-0.5">
        <img src={kapilImg} alt="Kapil Yadav" className="w-full h-full object-cover rounded-full" />
      </div>
      <div>
        <h4 className="text-[12px] font-black text-slate-800 dark:text-white leading-tight">
          Kapil Yadav
        </h4>
        <p className="text-[9.5px] font-bold text-indigo-500 dark:text-indigo-400 mt-0.5 flex items-center gap-1 leading-none">
          <LuUser size={10} />
          <span>Full Stack Developer</span>
        </p>
        <p className="text-[8px] font-semibold text-slate-400 dark:text-slate-550 mt-0.5 flex items-center gap-0.5 leading-none">
          <LuMapPin size={9} className="text-slate-450" />
          <span>Delhi, India</span>
        </p>
      </div>
    </div>
    <div className="pt-2 border-t border-slate-100 dark:border-white/[0.04] text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold flex flex-col gap-2">
      <p>
        I am a passionate Full Stack Software Engineer dedicated to crafting clean, scalable, and user-centric web applications. I love solving complex backend problems, building beautiful responsive layouts, and exploring cloud architectures.
      </p>
      <div className="flex flex-col gap-1 mt-1 bg-slate-50/50 dark:bg-white/[0.01] border border-slate-100/50 dark:border-white/[0.02] p-2 rounded-xl text-[9px]">
        <div className="flex justify-between items-center">
          <span className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Education</span>
          <span className="text-slate-800 dark:text-slate-200">B.Tech in CSE (2026)</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Core Focus</span>
          <span className="text-slate-800 dark:text-slate-200">MERN Stack, API Design</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">Interest</span>
          <span className="text-slate-800 dark:text-slate-200">System Architecture, DevOps</span>
        </div>
      </div>
    </div>
  </div>
);

// 3. Education Timeline Card
export const EducationResponse = () => (
  <div className="flex flex-col gap-2 font-inter">
    <span>My academic details:</span>
    <div className="mt-2 pt-3 border-t border-slate-100 dark:border-white/[0.04] flex gap-2.5 text-left">
      <div className="p-2 h-fit rounded-lg bg-indigo-50 dark:bg-indigo-950/30 text-indigo-500 shrink-0">
        <LuGraduationCap size={16} />
      </div>
      <div>
        <h5 className="text-[11.5px] font-black text-slate-800 dark:text-white leading-tight">
          Bachelor of Technology (B.Tech)
        </h5>
        <p className="text-[9.5px] font-bold text-indigo-650 dark:text-indigo-400 mt-0.5 leading-none">
          Computer Science & Engineering (CSE)
        </p>
        <p className="text-[8px] font-semibold text-slate-450 dark:text-slate-500 mt-1 leading-none">
          Graduation Year: 2026
        </p>
        <p className="text-[9.5px] text-slate-500 dark:text-slate-400 leading-normal mt-2.5 font-semibold">
          Studied core computer science concepts including Algorithms, Data Structures, Database Systems, Web Development, and Object-Oriented Design.
        </p>
        <div className="mt-2 bg-slate-50/50 dark:bg-white/[0.01] border border-slate-100/50 dark:border-white/[0.02] p-2 rounded-xl text-[8.5px] font-semibold">
          <span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider block font-bold mb-1">Key Focus Areas:</span>
          <ul className="list-disc pl-3 text-slate-600 dark:text-slate-350 space-y-0.5">
            <li>Database Management Systems (DBMS)</li>
            <li>Object-Oriented Programming & Systems (OOPS)</li>
            <li>Analysis & Design of Algorithms</li>
            <li>Full Stack Web Methodologies</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// 4. Skills & Tech Stack Grid
export const SkillsResponse = () => (
  <div className="flex flex-col gap-2 font-inter">
    <span>Here are my technical skills:</span>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-2 pt-3 border-t border-slate-100 dark:border-white/[0.04] w-full">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
          <FaReact className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[9px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-0.5">
            Frontend
          </div>
          <div className="text-[8px] font-bold text-slate-450 dark:text-slate-500 leading-none">
            React.js, Javascript, TailwindCSS
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
          <LuCpu className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[9px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-0.5">
            Tools & DevOps
          </div>
          <div className="text-[8px] font-bold text-slate-455 dark:text-slate-500 leading-none">
            Git, GitHub, Docker, AWS (EC2/S3)
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
          <FaNodeJs className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[9px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-0.5">
            Backend APIs
          </div>
          <div className="text-[8px] font-bold text-slate-455 dark:text-slate-500 leading-none">
            Node.js, Express.js, Spring Boot
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-600 shrink-0">
          <FaJs className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[9px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-0.5">
            Languages
          </div>
          <div className="text-[8px] font-bold text-slate-455 dark:text-slate-500 leading-none">
            JavaScript, Java, SQL, HTML/CSS
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-650 shrink-0">
          <LuDatabase className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[9px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-0.5">
            Database
          </div>
          <div className="text-[8px] font-bold text-slate-455 dark:text-slate-500 leading-none">
            MongoDB, MySQL (indexing, queries)
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-550 shrink-0">
          <LuLayers className="w-4 h-4" />
        </div>
        <div>
          <div className="text-[9px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-0.5">
            Architectures
          </div>
          <div className="text-[8px] font-bold text-slate-455 dark:text-slate-500 leading-none">
            RESTful APIs, JWT Auth, Microservices
          </div>
        </div>
      </div>
    </div>
  </div>
);

// 5. Featured Projects list
export const ProjectsResponse = () => {
  const featuredProjects = [
    {
      name: "Queue Cure",
      desc: "Healthcare appointment scheduling and queue management system. Solved queue congestion using real-time polling.",
      tech: "React.js, Node.js, Express.js, MongoDB",
      link: "https://github.com/yadav-kapil",
    },
    {
      name: "Learnify",
      desc: "Interactive educational platform for students and instructors. Implemented course catalog and tracking.",
      tech: "React.js, TailwindCSS, Spring Boot",
      link: "https://github.com/yadav-kapil",
    },
    {
      name: "Developer Portfolio",
      desc: "This responsive glassmorphic portfolio featuring custom router configurations and an interactive chatbot hook.",
      tech: "React.js, Vite, TailwindCSS, Lucide",
      link: "https://github.com/yadav-kapil",
    },
  ];

  return (
    <div className="flex flex-col gap-2 font-inter">
      <span>Here are some of my featured projects:</span>
      <div className="flex flex-col gap-2 mt-2 pt-3 border-t border-slate-100 dark:border-white/[0.04] w-full">
        {featuredProjects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-1 p-2.5 rounded-xl bg-slate-50/50 dark:bg-white/[0.02] border border-slate-100/50 dark:border-white/[0.03] hover:border-indigo-500/30 transition-all block text-left"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10.5px] font-extrabold text-indigo-650 dark:text-indigo-400 flex items-center gap-1">
                <LuCode className="w-3.5 h-3.5" /> {proj.name}
              </span>
              <span className="text-[8px] font-bold text-slate-450 dark:text-slate-550 font-mono">
                View
              </span>
            </div>
            <p className="text-[9px] text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
              {proj.desc}
            </p>
            <span className="text-[7.5px] font-bold text-slate-400 dark:text-slate-555 font-mono tracking-wider">
              {proj.tech}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

// 6. Services Overview
export const ServicesResponse = () => (
  <div className="flex flex-col gap-2 font-inter">
    <span>Services Kapil provides:</span>
    <div className="flex flex-col gap-2.5 mt-2.5 pt-3 border-t border-slate-100 dark:border-white/[0.04] w-full text-[10px]">
      <div className="flex items-start gap-2.5">
        <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 text-indigo-500 shrink-0">
          <LuMonitor size={12} />
        </div>
        <div>
          <h5 className="font-bold text-slate-800 dark:text-white leading-tight">Web Development</h5>
          <p className="text-[8.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
            Building robust, fully-responsive frontend interfaces using React, JavaScript, and Tailwind CSS.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-2.5">
        <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 text-indigo-500 shrink-0">
          <LuCpu size={12} />
        </div>
        <div>
          <h5 className="font-bold text-slate-800 dark:text-white leading-tight">Backend & API Systems</h5>
          <p className="text-[8.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
            Designing secure, RESTful microservices and custom routing endpoints in Node.js and Express.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-2.5">
        <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 text-indigo-500 shrink-0">
          <LuDatabase size={12} />
        </div>
        <div>
          <h5 className="font-bold text-slate-800 dark:text-white leading-tight">Database Administration</h5>
          <p className="text-[8.5px] text-slate-500 dark:text-slate-400 mt-0.5 leading-normal">
            Structuring schemas and queries in MongoDB/MySQL for lightning-fast fetch queries.
          </p>
        </div>
      </div>
      
      <div className="mt-1 bg-slate-50/50 dark:bg-white/[0.01] border border-slate-100/50 dark:border-white/[0.02] p-2 rounded-xl text-[8.5px] font-semibold text-slate-500 dark:text-slate-400">
        <span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider block font-bold mb-1">Kapil's Guarantees:</span>
        <ul className="list-disc pl-3 text-[8px] space-y-0.5">
          <li>100% responsive, mobile-first designs</li>
          <li>Optimized load speeds (excellent Web Vitals)</li>
          <li>Clean, scalable, and fully documented source code</li>
        </ul>
      </div>
    </div>
  </div>
);

// 8. Download Resume CTA Card
export const ResumeResponse = () => (
  <div className="flex flex-col gap-2.5 font-inter">
    <span>You can download my resume using the link below:</span>
    <div className="pt-2 border-t border-slate-100 dark:border-white/[0.04]">
      <a
        href="https://drive.google.com/file/d/1QGK9XuHoT_tlNwpXFXTBgfFbzr1gg2fI/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-95 text-white font-bold text-[10px] font-mono uppercase tracking-wider shadow-sm transition-all"
      >
        <LuDownload className="w-3.5 h-3.5" /> Download Resume
      </a>
    </div>
  </div>
);

// 9. Contact / Hire / Connect Details
export const ContactResponse = () => (
  <div className="flex flex-col gap-2.5 font-inter w-full">
    <span>Let's collaborate! You can connect with Kapil via:</span>
    <div className="flex flex-col gap-2.5 mt-2 pt-3 border-t border-slate-100 dark:border-white/[0.04] w-full">
      {/* LinkedIn connect */}
      <a
        href="https://www.linkedin.com/in/kapilyadav9560/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-2 rounded-xl bg-gradient-to-r from-indigo-655 via-indigo-500 to-purple-600 hover:opacity-95 text-white font-bold text-[9.5px] font-mono uppercase tracking-wider shadow-sm transition-all w-full text-center"
      >
        <FaLinkedinIn className="w-3.5 h-3.5" /> LinkedIn
      </a>

      {/* GitHub connect */}
      <a
        href="https://github.com/yadav-kapil"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-2 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all font-bold text-[9.5px] font-mono uppercase tracking-wider shadow-sm w-full text-center"
      >
        <FaGithub className="w-3.5 h-3.5" /> GitHub
      </a>

      {/* Email Connect */}
      <a
        href="mailto:ky843622@gmail.com"
        className="flex items-center justify-center gap-2 py-2 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] text-slate-700 dark:text-slate-350 hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all font-bold text-[9.5px] font-mono uppercase tracking-wider shadow-sm w-full text-center"
      >
        <LuMail className="w-3.5 h-3.5" /> Email
      </a>
    </div>
  </div>
);

// 10. Fallback / Unrecognized question Card
export const FallbackResponse = () => (
  <div className="flex flex-col gap-1 font-inter">
    <p>Sorry, I didn't get that. 🤖</p>
    <p className="text-[11px] text-slate-400 dark:text-slate-500 font-semibold leading-relaxed mt-1">
      Try asking about my <span className="text-indigo-500">skills</span>, check out my <span className="text-indigo-500">projects</span>, request my <span className="text-indigo-500">resume</span>, or ask to <span className="text-indigo-500">connect</span>!
    </p>
  </div>
);
