import { motion } from "motion/react";
import { 
  LuTarget, 
  LuZap, 
  LuGraduationCap, 
  LuUsers, 
  LuLayers, 
  LuMonitor, 
  LuCloudUpload, 
  LuCpu, 
  LuArrowUpRight, 
  LuArrowRight,
  LuMail
} from "react-icons/lu";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { MdOutlineCloudDownload } from "react-icons/md";

const strengths = [
  { icon: <LuTarget className="w-5.5 h-5.5" />, label: "Detail Oriented" },
  { icon: <LuZap className="w-5.5 h-5.5" />, label: "Problem Solver" },
  { icon: <LuGraduationCap className="w-5.5 h-5.5" />, label: "Quick Learner" },
  { icon: <LuUsers className="w-5.5 h-5.5" />, label: "Team Player" }
];

const services = [
  {
    title: "Full Stack Web Apps",
    icon: <LuLayers className="w-5.5 h-5.5" />,
    description: "Developing end-to-end web applications with robust architecture and rich features.",
    tags: ["MERN Stack", "REST APIs"]
  },
  {
    title: "Scalable & Responsive",
    icon: <LuMonitor className="w-5.5 h-5.5" />,
    description: "Designing adaptive interfaces that scale seamlessly across all screen sizes and devices.",
    tags: ["Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Cloud Deployment",
    icon: <LuCloudUpload className="w-5.5 h-5.5" />,
    description: "Deploying and managing applications in the cloud with CI/CD pipelines for high availability.",
    tags: ["AWS", "Docker", "CI/CD"]
  },
  {
    title: "AI Enabled Sites",
    icon: <LuCpu className="w-5.5 h-5.5" />,
    description: "Integrating smart AI capabilities, chatbots, and machine learning models to power automation.",
    tags: ["AI", "Chatbots", "ML"]
  }
];

const AboutPage = () => {
  const socials = [
    { href: "https://www.linkedin.com/in/kapilyadav9560/", icon: <FaLinkedinIn className="w-4.5 h-4.5 text-[#0077B5]" />, hoverColor: "hover:border-[#0077B5]/45 hover:shadow-[#0077B5]/5" },
    { href: "https://github.com/yadav-kapil", icon: <FaGithub className="w-4.5 h-4.5 text-slate-800 dark:text-slate-200" />, hoverColor: "hover:border-black/45 dark:hover:border-white/35 hover:shadow-black/5 dark:hover:shadow-white/5" },
    { href: "https://www.instagram.com/_yadav__kapil_/", icon: <FaInstagram className="w-4.5 h-4.5 text-[#E1306C]" />, hoverColor: "hover:border-[#E1306C]/45 hover:shadow-[#E1306C]/5" },
    { href: "mailto:ky843622@gmail.com", icon: <LuMail className="w-4.5 h-4.5 text-[#6366F1]" />, hoverColor: "hover:border-[#6366F1]/45 hover:shadow-[#6366F1]/5" }
  ];

  return (
    <div
      id="about"
      className="relative w-full overflow-hidden bg-gradient-to-br from-indigo-50/15 via-white to-purple-50/15 dark:from-[#030308]/96 dark:via-[#090B19]/96 dark:to-[#020205]/98 transition-colors duration-300 pt-20 pb-24 px-6 sm:px-12 lg:px-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#c7d2fe_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#312e81_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-40 dark:opacity-30 pointer-events-none z-0"></div>

      <div className="absolute top-12 left-[-150px] w-[500px] h-[500px] rounded-full border border-indigo-200/20 dark:border-indigo-500/10 pointer-events-none z-0"></div>
      <div className="absolute top-24 left-[-100px] w-[400px] h-[400px] rounded-full border border-dashed border-indigo-200/25 dark:border-indigo-500/15 pointer-events-none z-0 animate-[spin_80s_linear_infinite]"></div>
      <div className="absolute bottom-24 right-[-200px] w-[600px] h-[600px] rounded-full border border-indigo-200/15 dark:border-indigo-500/5 pointer-events-none z-0"></div>
      <div className="absolute bottom-36 right-[-150px] w-[500px] h-[500px] rounded-full border border-dashed border-indigo-200/20 dark:border-indigo-500/10 pointer-events-none z-0 animate-[spin_60s_linear_infinite]"></div>

      <div className="absolute left-[6%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-slate-200/40 dark:via-indigo-950/20 to-transparent pointer-events-none z-0 hidden xl:block"></div>
      <div className="absolute right-[6%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-slate-200/40 dark:via-indigo-950/20 to-transparent pointer-events-none z-0 hidden xl:block"></div>

      <div className="absolute top-[35%] left-[2%] w-32 h-64 pointer-events-none opacity-20 dark:opacity-10 z-0 hidden lg:block">
        <svg className="w-full h-full text-indigo-500" viewBox="0 0 100 200" fill="none">
          <path d="M-30,0 C40,50 -10,100 50,150 C80,180 90,190 120,200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
        </svg>
      </div>
      <div className="absolute bottom-[20%] right-[2%] w-32 h-64 pointer-events-none opacity-20 dark:opacity-10 z-0 hidden lg:block">
        <svg className="w-full h-full text-indigo-500" viewBox="0 0 100 200" fill="none">
          <path d="M130,0 C60,50 110,100 50,150 C20,180 10,190 -20,200" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 flex flex-col gap-6 text-left items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 dark:border-green-950/40 bg-green-50/50 dark:bg-green-950/10 w-fit select-none"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold text-green-600 dark:text-green-400 font-manrope uppercase tracking-wider">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-start gap-1"
            >
              <h1 className="text-4xl sm:text-5xl font-black font-outfit tracking-tight text-slate-900 dark:text-white leading-none select-none">
                About <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span>
              </h1>
              <div className="relative w-16 h-4 flex items-center mt-1">
                <div className="h-[3px] bg-gradient-to-r from-indigo-500 to-purple-600 w-full rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500 border border-white dark:border-[#030308]"></div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base leading-relaxed text-slate-650 dark:text-slate-200 font-inter"
            >
              I'm <span className="font-bold text-indigo-650 dark:text-indigo-400">Kapil Yadav</span>, a passionate Full Stack Developer who builds clean, scalable, and user-friendly web applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="group rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:opacity-95 text-white font-bold text-[13px] px-6 py-2.5 flex items-center justify-center gap-2 shadow-md shadow-indigo-500/10 dark:shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-indigo-500/20 dark:hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto dark:border dark:border-indigo-500/35 border border-transparent font-outfit"
              >
                <span>Let's Connect</span>
                <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/file/d/1UnXPRgETb4L85TAyKut17dse7LmGutqI/view?usp=drive_link"
                target="_blank"
                className="rounded-xl border border-slate-200 dark:border-indigo-500/25 bg-white/70 dark:bg-[#070814]/75 hover:bg-slate-50 dark:hover:bg-indigo-950/30 dark:hover:border-indigo-400/45 text-slate-800 dark:text-indigo-200 font-bold text-[13px] px-6 py-2.5 flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto font-outfit"
              >
                <span>Download Resume</span>
                <MdOutlineCloudDownload className="w-4 h-4 text-indigo-600 dark:text-indigo-455" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3.5 mt-2"
            >
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none select-none font-manrope">
                Let's connect
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {socials.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-10 h-10 rounded-xl bg-white/85 dark:bg-[#070814]/75 border border-slate-200/60 dark:border-indigo-500/25 flex items-center justify-center text-slate-650 dark:text-indigo-200 hover:scale-105 hover:shadow-md transition-all duration-305 shadow-sm ${item.hoverColor}`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end relative">
            
            <div className="absolute top-[35%] -left-[14%] z-30 pointer-events-none select-none animate-float-delayed hidden xl:block">
              <svg className="w-16 h-16 overflow-visible" viewBox="0 0 80 80">
                <defs>
                  <linearGradient id="cubeFace1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.15" />
                  </linearGradient>
                  <linearGradient id="cubeFace2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="cubeFace3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F472B6" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#DB2777" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <g transform="translate(10, 10)">
                  <polygon points="30,0 60,15 30,30 0,15" fill="url(#cubeFace1)" stroke="#818CF8" strokeWidth="1" strokeOpacity="0.7" />
                  <polygon points="0,15 30,30 30,60 0,45" fill="url(#cubeFace2)" stroke="#A78BFA" strokeWidth="1" strokeOpacity="0.7" />
                  <polygon points="30,30 60,15 60,45 30,60" fill="url(#cubeFace3)" stroke="#F472B6" strokeWidth="1" strokeOpacity="0.7" />
                </g>
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full max-w-xl rounded-[2rem] bg-white/60 dark:bg-[#0A0B1A]/60 backdrop-blur-md border border-white/80 dark:border-indigo-500/20 p-8 shadow-2xl shadow-indigo-950/5 dark:shadow-[#030308]/80 flex flex-col gap-6"
            >
              
              <div className="absolute top-[22%] -right-[30px] z-30 pointer-events-none select-none animate-float-slow hidden xl:block">
                <svg className="w-24 h-24 overflow-visible" viewBox="0 0 100 100">
                  <defs>
                    <radialGradient id="planetGrad" cx="30%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#C084FC" />
                      <stop offset="50%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#4C1D95" />
                    </radialGradient>
                    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#C084FC" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <path d="M 5,50 A 45,15 0 0,1 95,50" stroke="url(#ringGrad)" strokeWidth="4" fill="none" transform="rotate(-15 50 50)" />
                  <circle cx="50" cy="50" r="24" fill="url(#planetGrad)" filter="drop-shadow(0 10px 15px rgba(124,58,237,0.3))" />
                  <path d="M 95,50 A 45,15 0 0,1 5,50" stroke="url(#ringGrad)" strokeWidth="4" fill="none" transform="rotate(-15 50 50)" />
                </svg>
              </div>
              <span className="absolute -top-3 -right-3 text-indigo-500/80 animate-pulse select-none z-20 pointer-events-none">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
                </svg>
              </span>
              <span className="absolute -bottom-3 -left-3 text-indigo-500/80 animate-pulse select-none z-20 pointer-events-none delay-1000">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
                </svg>
              </span>

              <div className="text-left font-serif text-[65px] leading-none text-indigo-500/35 h-8 select-none">
                “
              </div>

              <p className="text-[17px] font-inter leading-relaxed text-slate-700 dark:text-slate-200 text-left">
                I love turning ideas into digital experiences. I focus on writing clean code and building applications that are{" "}
                <span className="text-indigo-650 dark:text-indigo-400 font-bold">fast</span>,{" "}
                <span className="text-indigo-650 dark:text-indigo-400 font-bold">reliable</span>, and{" "}
                <span className="text-indigo-650 dark:text-indigo-400 font-bold">impactful</span>.
              </p>

              <div className="w-full h-[1px] bg-slate-100 dark:bg-indigo-950/50"></div>

              <div className="grid grid-cols-4 gap-2.5">
                {strengths.map((item, i) => (
                  <div key={i} className="flex flex-col items-center select-none">
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100/50 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-sm">
                      {item.icon}
                    </div>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-slate-650 dark:text-slate-400 font-manrope mt-2 text-center leading-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-28 relative">
          {/* Left Margin Floating Background Elements */}
          <div className="absolute -left-16 xl:-left-36 top-0 z-0 hidden lg:flex flex-col gap-6 items-center pointer-events-none select-none opacity-60">
            <div className="w-32 h-32 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-2xl animate-pulse" />
            <motion.div
              animate={{ rotate: 360, y: [0, -8, 0] }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-14 h-14 rounded-2xl border border-dashed border-indigo-400/30 dark:border-indigo-400/15 flex items-center justify-center"
            >
              <LuLayers className="w-5 h-5 text-indigo-400/40 dark:text-indigo-400/20" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: 45 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-indigo-400/30 dark:text-indigo-400/15"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
              </svg>
            </motion.div>
          </div>

          {/* Right Margin Floating Background Elements */}
          <div className="absolute -right-16 xl:-right-36 top-0 z-0 hidden lg:flex flex-col gap-6 items-center pointer-events-none select-none opacity-60">
            <div className="w-32 h-32 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-2xl animate-pulse" />
            <motion.div
              animate={{ rotate: -360, y: [0, 8, 0] }}
              transition={{ 
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-14 h-14 rounded-full border border-purple-400/30 dark:border-purple-450/15 flex items-center justify-center relative"
            >
              <div className="w-8 h-8 rounded-full border border-dashed border-pink-400/30 dark:border-pink-500/15 flex items-center justify-center">
                <LuCpu className="w-3.5 h-3.5 text-purple-400/40 dark:text-purple-450/20" />
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-pink-400/25 dark:bg-pink-500/15"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-1.5 text-center mb-14"
          >
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 dark:border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/8 dark:to-purple-500/8 w-fit select-none hover:border-indigo-500/40 hover:shadow-[0_2px_12px_rgba(99,102,241,0.15)] transition-all duration-300">
              <span className="text-indigo-500 dark:text-indigo-400 animate-pulse">
                <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
                </svg>
              </span>
              <span className="text-[10px] font-black tracking-[0.25em] text-indigo-650 dark:text-purple-300 font-manrope uppercase">
                What I Do
              </span>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                animate={{ 
                  y: [0, -4, 0],
                  rotate: [0, 45, 0]
                }}
                transition={{
                  initial: { delay: 0.4 },
                  animate: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                }}
                className="absolute -left-9 top-1/2 -translate-y-1/2 text-indigo-400 dark:text-indigo-400/85 hidden sm:block pointer-events-none"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
                </svg>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit tracking-tight text-slate-900 dark:text-white px-2">
                Services I Provide
              </h2>

              <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                animate={{ 
                  y: [0, 4, 0],
                  rotate: [0, -45, 0]
                }}
                transition={{
                  initial: { delay: 0.5 },
                  animate: { repeat: Infinity, duration: 4.5, ease: "easeInOut" }
                }}
                className="absolute -right-9 top-1/2 -translate-y-1/2 text-purple-400 dark:text-purple-450/80 hidden sm:block pointer-events-none"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0l2.5 7.5 7.5 2.5-7.5 2.5-2.5 7.5-2.5-7.5-7.5-2.5 7.5-2.5z" />
                </svg>
              </motion.div>
            </div>
            
            <div className="relative w-48 h-8 flex items-center mt-1 justify-center select-none pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M 10 20 Q 50 5, 100 20 T 190 20" 
                  stroke="rgba(99, 102, 241, 0.15)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
                <motion.path 
                  d="M 10 20 Q 50 5, 100 20 T 190 20" 
                  stroke="url(#servicesGrad)" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                />
                <defs>
                  <linearGradient id="servicesGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="50%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-500 border border-white dark:border-[#090A1A] shadow-md shadow-indigo-500/50 flex items-center justify-center"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              </motion.div>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-350 max-w-lg mt-2 font-inter leading-relaxed">
              I build modern and scalable web solutions to help businesses grow and succeed online.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.025, y: -4 }}
                transition={{ 
                  scale: { duration: 0.35, ease: "easeOut" },
                  y: { duration: 0.35, ease: "easeOut" },
                  default: { duration: 0.85, delay: index * 0.16, ease: [0.16, 1, 0.3, 1] }
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col p-6 rounded-[2rem] border border-white/60 dark:border-indigo-500/15 bg-white/40 dark:bg-[#090A1A]/70 backdrop-blur-md shadow-lg shadow-indigo-950/5 dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden group hover:border-indigo-500/35 dark:hover:border-indigo-500/45 dark:hover:shadow-[0_20px_50px_rgba(99,102,241,0.08)] transition-colors duration-500 select-none text-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100/50 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-sm mb-6 transform group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-outfit mb-2.5">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-300 leading-relaxed font-inter mb-8">
                  {service.description}
                </p>

                
                <div className="flex flex-wrap gap-1.5 mt-auto pr-10">
                  {service.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-0.5 rounded-md border border-indigo-100/50 dark:border-indigo-950/45 bg-indigo-50/20 dark:bg-indigo-950/10 text-[9px] font-bold text-indigo-500/80 dark:text-indigo-400/80 uppercase font-mono tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 group-hover:border-transparent transition-all duration-300 cursor-pointer shadow-sm">
                  <LuArrowUpRight className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
