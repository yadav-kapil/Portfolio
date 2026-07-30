import { motion } from "motion/react";
import { FaCalendarAlt, FaAward } from "react-icons/fa";
import { LuBot, LuArrowRight } from "react-icons/lu";

const cards = [
  {
    windowTitle: "HackSprint '25",
    title: "Learnify - AI Study Doubts Solver",
    subtitle: "SR Technologies Hackathon",
    badge: "Participant",
    badgeColor:
      "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:bg-purple-500/8 dark:text-purple-400 dark:border-purple-500/10",
    date: "Nov 2025",
    description:
      "Designed and developed Learnify during a 48-hour sprint. It connects students with an AI doubt-solving assistant using the Gemini API, enabling voice support via Web Speech API and doubt tracking capabilities.",
    techStack: [
      "React",
      "Gemini API",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    certificate:
      "https://drive.google.com/file/d/1Qn9tGWFUXGKNCqMacp_zaTbaFZZJ8m5a/view",
    logoColor: "from-purple-600 to-indigo-500",
    tagColor:
      "bg-purple-500/5 text-purple-600 border-purple-500/15 dark:bg-purple-500/5 dark:text-purple-400 dark:border-purple-500/10",
    icon: <LuBot className="w-8 h-8" />,
  },
  {
    windowTitle: "Queue Cure '26",
    title: "Queue Cure - Clinic Queue System",
    subtitle: "Wooble Hackathon",
    badge: "Participant",
    badgeColor:
      "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:bg-emerald-500/8 dark:text-emerald-400 dark:border-emerald-500/10",
    date: "Jul 2026",
    description:
      "Built a clinic queue management system to eliminate waiting uncertainty. Features Doctor/Receptionist dashboards, patient queue tracking, real-time live synchronization using Socket.IO, AWS EC2, and Docker Compose CI/CD deployment.",
    techStack: [
      "React",
      "Socket.IO",
      "Node.js",
      "MongoDB",
      "Docker",
      "AWS EC2",
      "Nginx",
      "GitHub Actions",
    ],
    certificate: "https://wooble.org/certifications/ad0b62c04fb3c73f86bbb91c6d",
    logoColor: "from-emerald-500 to-teal-400",
    tagColor:
      "bg-emerald-500/5 text-emerald-600 border-emerald-500/15 dark:bg-emerald-500/5 dark:text-emerald-400 dark:border-emerald-500/10",
    icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8zm7 5c0 1.2-1 2-2.5 2s-2.5-.8-2.5-2h5zm0-2c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    ),
  },
];

const HackathonCard = ({ card, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 48 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
    viewport={{ once: true, amount: 0.2 }}
    className="w-full max-w-3xl"
  >
    <div className="w-full rounded-2xl border border-slate-200/70 dark:border-indigo-500/15 bg-white dark:bg-[#08091B] shadow-lg shadow-indigo-950/5 dark:shadow-[0_12px_40px_rgba(0,0,0,0.55)] hover:border-indigo-300/60 dark:hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/8 dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.65)] transition-all duration-300 overflow-hidden">
      <div className="h-[3px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      <div className="flex items-center justify-between border-b border-slate-100 dark:border-indigo-500/10 px-5 sm:px-7 py-3 bg-slate-50/60 dark:bg-[#0c0e25]/40">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-indigo-400/60 tracking-wider">
          {card.windowTitle}
        </span>
        <span
          className={`px-2.5 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-wider font-mono ${card.badgeColor}`}
        >
          {card.badge}
        </span>
      </div>

      <div className="p-6 sm:p-8 flex flex-col md:flex-row items-start gap-5 md:gap-7">
        <div
          className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-tr ${card.logoColor} text-white flex items-center justify-center shadow-md shrink-0`}
        >
          {card.icon}
        </div>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
            <div>
              <h3 className="text-xl md:text-2xl font-black font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
                {card.title}
              </h3>
              <span className="text-xs font-bold text-indigo-500 dark:text-indigo-400 font-manrope mt-0.5 block">
                {card.subtitle}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 font-mono text-[10px] font-bold shrink-0 mt-0.5">
              <FaCalendarAlt className="w-3 h-3 text-indigo-500/70 dark:text-indigo-400/60" />
              <span>{card.date}</span>
            </div>
          </div>

          <p className="text-[12.5px] md:text-sm text-slate-500 dark:text-slate-400 mt-3.5 font-inter leading-relaxed">
            {card.description}
          </p>

          <div className="mt-5">
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 font-mono block mb-2">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {card.techStack.map((tech, i) => (
                <span
                  key={i}
                  className={`px-2 py-0.5 rounded border text-[9px] font-bold font-mono uppercase tracking-wide ${card.tagColor}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100 dark:border-indigo-500/10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] md:text-xs font-bold font-mono tracking-wide hover:opacity-90 transition-opacity duration-200 shadow-sm shadow-indigo-500/25"
            >
              Go to Project
              <LuArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <a
              href={card.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-emerald-300/60 dark:border-emerald-500/20 bg-emerald-50/30 dark:bg-emerald-950/15 text-emerald-600 dark:text-emerald-400 text-[10px] md:text-xs font-bold font-mono hover:border-emerald-400 dark:hover:border-emerald-400/50 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/30 transition-all duration-200"
            >
              <FaAward className="w-3.5 h-3.5" /> Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Experience = () => (
  <div
    id="experience"
    className="relative w-full overflow-hidden bg-[#F7F8FC] dark:bg-[#030308] transition-colors duration-300 pt-20 pb-24 px-6 sm:px-12 lg:px-24"
  >
    <div
      className="absolute inset-0 z-0 pointer-events-none opacity-[0.30] dark:opacity-[0.14]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #6366f1 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    />

    <div className="absolute top-0 left-0 right-0 h-24 z-0 pointer-events-none bg-gradient-to-b from-[#F7F8FC] dark:from-[#030308] to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-24 z-0 pointer-events-none bg-gradient-to-t from-[#F7F8FC] dark:from-[#030308] to-transparent" />

    <div
      className="absolute top-[-8%] right-[-10%] w-[480px] h-[480px] rounded-full z-0 pointer-events-none blur-[100px]"
      style={{
        background:
          "radial-gradient(circle, rgba(99,102,241,0.14) 0%, transparent 70%)",
      }}
    />
    <div
      className="absolute bottom-[-10%] left-[-10%] w-[420px] h-[420px] rounded-full z-0 pointer-events-none blur-[90px]"
      style={{
        background:
          "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
      }}
    />

    <div className="w-full max-w-3xl mx-auto relative z-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center mb-14 gap-1.5"
      >
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 dark:border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/8 dark:to-purple-500/8 w-fit hover:border-indigo-500/40 hover:shadow-[0_2px_12px_rgba(99,102,241,0.12)] transition-all duration-300">
          <span className="text-indigo-500 dark:text-indigo-400 animate-pulse">
            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
            </svg>
          </span>
          <span className="text-[10px] font-black tracking-[0.25em] text-indigo-650 dark:text-purple-300 font-manrope uppercase">
            Hackathons
          </span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-black font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
          Where Ideas Meet{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Impact.
          </span>
        </h2>

        <div className="relative w-16 h-4 flex items-center mt-0.5 justify-center">
          <div className="h-[3px] bg-gradient-to-r from-indigo-500 to-purple-600 w-full rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500 border border-white dark:border-[#030308]" />
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mt-2.5 font-inter leading-relaxed">
          Hackathons challenge me to build fast, collaborate, and turn ideas
          into real-world solutions.
        </p>
      </motion.div>

      <div className="w-full flex flex-col items-center gap-8">
        {cards.map((card, index) => (
          <HackathonCard key={card.windowTitle} card={card} index={index} />
        ))}
      </div>
    </div>
  </div>
);

export default Experience;
