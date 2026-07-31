import { useRef, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import learnify from "../assets/learnify.png";
import queueCure from "../assets/queue-cure-project.png";
import rentora from "../assets/rentora-project.png";

const projects = [
  {
    title: "Queue Cure",
    subtitle: "Smart Queue. Better Care.",
    description:
      "A real-time clinic queue management platform connecting doctors, receptionists, and patients through a shared live queue, eliminating waiting uncertainty.",
    image: queueCure,
    tags: ["React", "Express", "MongoDB", "Socket.IO"],
    github: "https://github.com/yadav-kapil/queue-cure-26",
    live: "https://queue-cure-yadavkapil.duckdns.org/",
    fullDescription:
      "Queue Cure transforms traditional clinic queue management into a transparent, connected, and real-time system. Instead of relying on paper tokens, verbal announcements, and manual display updates, Queue Cure provides live queue tracking, dynamic wait-time estimation, and instant synchronization across doctor, receptionist, and patient dashboards using Socket.IO. Building Queue Cure was more than just a full-stack project—it gave me hands-on experience with real-time systems using WebSockets and Socket.IO, synchronizing state across users, and building scalable, production-ready apps with modern DevOps practices, including CI/CD pipelines, containerization, and cloud deployment.",
    highlights: [
      "Real-time synchronized queue with instant updates using Socket.IO",
      "Role-based dashboards for doctors and receptionists with queue and session management",
      "Patient interface with live queue tracking and dynamic wait-time estimation",
      "Smart notifications and automated token generation for seamless flow",
      "Modern DevOps pipeline featuring AWS EC2, Docker, Docker Compose, Nginx, and GitHub Actions",
    ],
    techStackDetail: {
      frontend: ["React", "Vite", "React Router", "Tailwind CSS", "Framer Motion", "jsPDF"],
      backend: ["Node.js", "Express.js", "Socket.IO", "JWT Authentication", "Bcrypt.js", "Joi Validation", "Multer", "Nodemailer"],
      database: ["MongoDB Atlas", "Cloudinary"],
      infrastructure: ["AWS EC2", "Docker", "Docker Compose", "Nginx", "GitHub Actions"]
    },
    role: "Full-Stack Developer",
    duration: "Hackathon Submission",
    status: "Live",
  },
  {
    title: "Rentora",
    subtitle: "Vacation Rental Marketplace",
    description:
      "A peer-to-peer vacation rental marketplace connecting property hosts and guests. Features role-based dashboards, booking workflows, Wishlists, Cloudinary media gallery, and guest reviews.",
    image: rentora,
    tags: ["React", "Node.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/yadav-kapil/Rentora",
    live: "https://rentora-yadavkapil.duckdns.org/",
    fullDescription:
      "Rentora is a peer-to-peer vacation rental marketplace (similar to Airbnb) that connects property hosts and travelers (guests). Guests can search and filter accommodations, view pricing, reserve stays, save favorites, write reviews, and receive status notifications. Hosts utilize a management dashboard to list properties, upload cover/gallery images to Cloudinary, edit listings, and manage booking approvals (Accept/Reject).",
    highlights: [
      "Role-based workflows for Guests (booking history, wishlist, reviews) and Hosts (property listings, approvals)",
      "Search & filter engine with live pricing, check-in/out date calculations, and support messaging",
      "Onboarding forms for listings with cover images and media galleries uploaded directly to Cloudinary",
      "Dynamic booking requests and approvals dashboard with real-time status notifications",
      "DevOps pipeline featuring AWS EC2, Docker, Docker Compose, Nginx, and GitHub Actions (CI/CD)",
    ],
    techStackDetail: {
      frontend: ["React", "Vite", "React Router", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express.js", "JWT Authentication", "REST APIs"],
      database: ["MongoDB", "Mongoose", "Cloudinary"],
      infrastructure: ["Docker", "Docker Compose", "AWS EC2", "Nginx", "GitHub Actions (CI/CD)"]
    },
    role: "Full-Stack Developer",
    duration: "Personal Project",
    status: "Live",
  },
  {
    title: "Learnify",
    subtitle: "AI-Powered Learning Assistant",
    description:
      "An AI-powered assistant that helps users solve doubts, practice concepts, and learn interactively through real-time conversations.",
    image: learnify,
    tags: ["React", "Framer Motion", "Node.js", "Gemini"],
    github: "https://github.com/yadav-kapil/Learnify_Hacksprint",
    live: "https://learnify-hacksprint.vercel.app/",
    fullDescription:
      "Learnify is a full-stack AI learning assistant built during a hackathon. It lets students type or speak any question and receive clear, structured explanations powered by the Gemini API. The platform adapts to the user's learning level, tracks session history, and suggests follow-up questions to deepen understanding.",
    highlights: [
      "Real-time AI Q&A with Gemini API integration",
      "Session history & topic tracking",
      "Voice input support via Web Speech API",
      "Responsive dark-mode UI built with React + Framer Motion",
      "REST API backend with Node.js & Express",
    ],
    techStackDetail: {
      frontend: ["React", "Vite", "Framer Motion", "Tailwind CSS", "Web Speech API"],
      backend: ["Node.js", "Express.js", "Gemini API", "REST API"]
    },
    role: "Full-Stack Developer",
    duration: "48 hrs (Hackathon)",
    status: "Live",
  }
];

const TagPill = ({ tag }) => (
  <span className="px-2.5 py-[3px] rounded border border-indigo-100/60 dark:border-indigo-900/50 bg-indigo-50/30 dark:bg-indigo-950/15 text-[9px] font-bold text-indigo-500/90 dark:text-indigo-400/80 uppercase font-mono tracking-wider">
    {tag}
  </span>
);

const ProjectDialog = ({ project, dialogRef }) => {
  
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if ("closedBy" in HTMLDialogElement.prototype) return; 

    const handleClick = (e) => {
      if (e.target !== dialog) return;
      const r = dialog.getBoundingClientRect();
      const inside =
        r.top <= e.clientY && e.clientY <= r.top + r.height &&
        r.left <= e.clientX && e.clientX <= r.left + r.width;
      if (!inside) dialog.close();
    };
    dialog.addEventListener("click", handleClick);
    return () => dialog.removeEventListener("click", handleClick);
  }, [dialogRef]);

  return (
    
    <dialog
      ref={dialogRef}
      
      closedby="any"
      aria-labelledby="dialog-title"
      className={[
        
        "w-[min(92vw,560px)] max-h-[85vh] overflow-y-auto rounded-2xl p-0",
        
        "bg-white dark:bg-[#07081A]",
        "border border-slate-200/80 dark:border-white/[0.08]",
        "shadow-[0_32px_80px_rgba(0,0,0,0.18)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.7)]",
        
        "outline-none",
        
      ].join(" ")}
      style={{
        
        margin: "auto",
      }}
    >
      
      <div className="h-[3px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      <div className="flex items-start justify-between gap-4 px-7 pt-6 pb-0">
        <div>
          <h2 id="dialog-title" className="text-xl font-black font-outfit tracking-tight text-slate-900 dark:text-white leading-snug">
            {project.title}
          </h2>
          <p className="text-[10.5px] font-semibold text-indigo-500 dark:text-indigo-400 font-manrope mt-0.5 tracking-wide">
            {project.subtitle}
          </p>
        </div>
        <button
          onClick={() => dialogRef.current?.close()}
          aria-label="Close dialog"
          className="shrink-0 mt-0.5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.07] transition-all duration-150"
        >
          <FaTimes className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="mx-7 mt-4 h-px bg-slate-100 dark:bg-white/[0.06]" />

      <div className="mx-7 mt-4 rounded-xl overflow-hidden bg-slate-50 dark:bg-[#0d0e24] h-44 border border-slate-100 dark:border-white/[0.05]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="px-7 py-5 flex flex-col gap-5">

        <div className="flex flex-wrap gap-2">
          {[
            { label: "Role", value: project.role },
            { label: "Duration", value: project.duration },
            { label: "Status", value: project.status },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-white/[0.04] border border-slate-100 dark:border-white/[0.06]">
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 font-mono">{label}</span>
              <span className="text-[10.5px] font-bold text-slate-700 dark:text-slate-200 font-manrope">{value}</span>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 font-mono mb-2">Overview</h3>
          <p className="text-[12.5px] text-slate-600 dark:text-slate-300 font-inter leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 font-mono mb-3">Key Highlights</h3>
          <ul className="flex flex-col gap-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[12px] text-slate-600 dark:text-slate-300 font-inter leading-relaxed">
                <span className="mt-[3px] shrink-0 w-4 h-4 rounded flex items-center justify-center bg-indigo-500/10 dark:bg-indigo-500/15">
                  <svg className="w-2 h-2 text-indigo-500" viewBox="0 0 8 8" fill="currentColor">
                    <path d="M1 4l2 2 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 font-mono mb-3">Tech Stack</h3>
          {project.techStackDetail ? (
            <div className="flex flex-col gap-3">
              {Object.entries(project.techStackDetail).map(([category, items]) => (
                <div key={category} className="flex flex-col gap-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 font-mono">
                    {category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item, i) => <TagPill key={i} tag={item} />)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => <TagPill key={i} tag={tag} />)}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 px-7 py-5 border-t border-slate-100 dark:border-white/[0.05]">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[11px] font-bold font-mono tracking-wide hover:opacity-90 transition-opacity duration-200 shadow-sm shadow-indigo-500/30"
          >
            Live Demo <FaExternalLinkAlt className="w-2.5 h-2.5" />
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-300 text-[11px] font-bold font-mono hover:border-slate-400 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
        >
          <FaGithub className="w-3.5 h-3.5" /> GitHub
        </a>
      </div>
    </dialog>
  );
};

const ProjectCard = ({ project, index }) => {
  const dialogRef = useRef(null);
  const openDialog = useCallback(() => dialogRef.current?.showModal(), []);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
        viewport={{ once: true, amount: 0.15 }}
        className="group relative flex flex-col flex-1 min-w-[290px] sm:min-w-[320px] max-w-[360px] rounded-2xl overflow-hidden border border-slate-200/70 dark:border-white/[0.07] bg-white dark:bg-[#07081A] shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.55)] hover:shadow-[0_8px_40px_rgba(99,102,241,0.12)] dark:hover:shadow-[0_12px_50px_rgba(99,102,241,0.15)] hover:-translate-y-1.5 transition-all duration-400"
      >
        
        <div className="h-[3px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shrink-0" />

        <div className="relative overflow-hidden bg-slate-50 dark:bg-[#0c0d24] h-48 shrink-0 border-b border-slate-100 dark:border-white/[0.04]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        </div>

        <div className="flex flex-col flex-1 px-7 pt-5 pb-6">

          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-black font-outfit tracking-tight text-slate-900 dark:text-white leading-snug">
                {project.title}
              </h3>
              <p className="text-[10.5px] font-semibold text-indigo-500 dark:text-indigo-400 font-manrope mt-0.5 tracking-wide">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={openDialog}
              aria-label={`View details for ${project.title}`}
              className="shrink-0 mt-0.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-200/60 dark:border-indigo-700/30 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold font-mono tracking-wide hover:border-indigo-400/70 dark:hover:border-indigo-500/50 hover:bg-indigo-100/60 dark:hover:bg-indigo-950/40 transition-all duration-200"
            >
              <HiOutlineInformationCircle className="w-3.5 h-3.5" />
              Details
            </button>
          </div>

          <div className="w-full h-px bg-slate-100 dark:bg-white/[0.05] my-4" />

          <p className="text-[12.5px] text-slate-500 dark:text-slate-400 font-inter leading-relaxed flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-5">
            {project.tags.map((tag, i) => <TagPill key={i} tag={tag} />)}
          </div>

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.05]">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[11px] font-bold font-mono tracking-wide hover:opacity-90 transition-opacity duration-200 shadow-sm shadow-indigo-500/30"
              >
                Live Demo
                <FaExternalLinkAlt className="w-2.5 h-2.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            ) : (
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-600 font-mono">Coming Soon</span>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 text-[11px] font-bold font-mono hover:border-slate-400 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
            >
              <FaGithub className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>
        </div>
      </motion.article>

      <ProjectDialog project={project} dialogRef={dialogRef} />
    </>
  );
};

const Projects = () => (
  <div
    id="projects"
    className="relative w-full overflow-hidden bg-gradient-to-br from-indigo-50/15 via-white to-purple-50/15 dark:from-[#030308]/96 dark:via-[#090B19]/96 dark:to-[#020205]/98 transition-colors duration-300 pt-20 pb-24 px-6 sm:px-12 lg:px-24"
  >
    
    <div className="absolute inset-0 bg-[radial-gradient(#c7d2fe_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#312e81_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-40 dark:opacity-30 pointer-events-none z-0"></div>

    <div className="absolute top-[10%] left-[-150px] w-[500px] h-[500px] rounded-full border border-indigo-200/20 dark:border-indigo-500/10 pointer-events-none z-0"></div>
    <div className="absolute top-[15%] left-[-100px] w-[400px] h-[400px] rounded-full border border-dashed border-indigo-200/25 dark:border-indigo-500/15 pointer-events-none z-0 animate-[spin_100s_linear_infinite]"></div>
    <div className="absolute bottom-[10%] right-[-200px] w-[600px] h-[600px] rounded-full border border-indigo-200/15 dark:border-indigo-500/5 pointer-events-none z-0"></div>
    <div className="absolute bottom-[15%] right-[-150px] w-[500px] h-[500px] rounded-full border border-dashed border-indigo-200/20 dark:border-indigo-500/10 pointer-events-none z-0 animate-[spin_80s_linear_infinite]"></div>

    <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none z-0 animate-pulse bg-indigo-500/10 dark:bg-indigo-500/8" />
    <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none z-0 animate-pulse delay-1000 bg-purple-500/10 dark:bg-purple-500/8" />

    <div className="absolute top-[28%] left-[22%] hidden md:block z-0 animate-[spin_45s_linear_infinite] opacity-35 dark:opacity-20 pointer-events-none">
      <svg className="w-12 h-12 text-indigo-500" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" fill="none" />
      </svg>
    </div>
    <div className="absolute bottom-[28%] right-[22%] hidden md:block z-0 animate-[spin_60s_linear_infinite] opacity-35 dark:opacity-20 pointer-events-none">
      <svg className="w-14 h-14 text-purple-500" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" fill="none" />
      </svg>
    </div>

    <div className="absolute top-[12%] left-[6%] xl:left-[10%] z-5 pointer-events-none select-none animate-float-slow hidden xl:block">
      <svg className="w-14 h-14 overflow-visible filter drop-shadow-[0_10px_15px_rgba(192,132,252,0.2)]" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="projFacet1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>
          <linearGradient id="projFacet2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
          <linearGradient id="projFacet3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
        </defs>
        <polygon points="50,15 80,45 50,75" fill="url(#projFacet1)" />
        <polygon points="50,15 20,45 50,75" fill="url(#projFacet2)" />
        <polygon points="50,75 80,45 50,85" fill="url(#projFacet3)" />
        <polygon points="50,75 20,45 50,85" fill="url(#projFacet2)" opacity="0.6" />
      </svg>
    </div>

    <div className="absolute top-[40%] right-[5%] xl:right-[8%] z-5 pointer-events-none select-none animate-float-delayed hidden xl:block">
      <svg className="w-14 h-14 overflow-visible animate-pulse" viewBox="0 0 100 100" transform="rotate(25)">
        <defs>
          <linearGradient id="projTorus" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="50%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="28" stroke="url(#projTorus)" strokeWidth="10" fill="none" filter="drop-shadow(0 10px 15px rgba(192,132,252,0.15))" />
      </svg>
    </div>

    <div className="absolute bottom-[15%] left-[5%] xl:left-[8%] z-5 pointer-events-none select-none animate-float-delayed hidden xl:block">
      <svg className="w-14 h-14 overflow-visible" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="projCubeFront" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="projCubeTop" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.65" />
          </linearGradient>
        </defs>
        <polygon points="10,35 50,20 90,35 50,50" fill="url(#projCubeTop)" />
        <polygon points="10,35 50,50 50,85 10,70" fill="url(#projCubeFront)" />
        <polygon points="50,50 90,35 90,70 50,85" fill="url(#projCubeFront)" opacity="0.8" />
        <text x="50" y="60" fill="white" fontSize="16" fontWeight="bold" textAnchor="middle" transform="skewY(-10) rotate(-10)">{"</>"}</text>
      </svg>
    </div>

    <div className="absolute top-[15%] right-[12%] text-indigo-400/50 dark:text-indigo-500/30 animate-pulse z-0">
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
      </svg>
    </div>
    <div className="absolute bottom-[30%] left-[8%] text-purple-400/40 dark:text-purple-500/20 animate-pulse z-0 delay-1000">
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M10 0l2.5 7.5 7.5 2.5-7.5 2.5-2.5 7.5-2.5-7.5-7.5-2.5 7.5-2.5z" />
      </svg>
    </div>

    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="w-full h-full opacity-25 dark:opacity-[0.12]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="projCurveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="projCurveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path 
          d="M-100 500 C 200 600, 500 200, 800 550 C 1100 800, 1300 400, 1600 450" 
          fill="none" 
          stroke="url(#projCurveGrad1)" 
          strokeWidth="2" 
          strokeDasharray="6 6" 
        />
        <path 
          d="M-50 300 C 300 100, 600 700, 900 350 C 1200 100, 1400 600, 1650 550" 
          fill="none" 
          stroke="url(#projCurveGrad2)" 
          strokeWidth="2.5" 
          strokeDasharray="8 6" 
        />
      </svg>
    </div>

    <div className="w-full max-w-6xl mx-auto relative z-10">

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
            My Work
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
          Featured{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="relative w-16 h-4 flex items-center mt-0.5 justify-center">
          <div className="h-[3px] bg-gradient-to-r from-indigo-500 to-purple-600 w-full rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500 border border-white dark:border-[#030308]" />
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mt-2.5 font-inter leading-relaxed">
          A curated selection of projects that reflect my passion for clean code,
          thoughtful UI, and meaningful user experiences.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <a
          href="https://github.com/yadav-kapil"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-lg border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 hover:border-indigo-300 dark:hover:border-indigo-700/50 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow-md transition-all duration-250 text-sm font-bold font-outfit"
        >
          <FaGithub className="w-4 h-4" />
          View all on GitHub
          <FaExternalLinkAlt className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
        </a>
      </motion.div>

    </div>
  </div>
);

export default Projects;
