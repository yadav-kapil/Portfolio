import { Fragment } from "react";
import { motion } from "motion/react";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";

/* ─── Shared sub-components ───────────────────────────────────────────── */

const TimelineNode = () => (
  <div className="w-5 h-5 rounded-full bg-[#FAFBFD] dark:bg-[#030308] border-2 border-indigo-500 dark:border-indigo-400 flex items-center justify-center shadow-md shrink-0">
    <div className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
  </div>
);

const DateBadge = ({ date }) => (
  <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-100/50 dark:border-indigo-550/15 bg-indigo-50/20 dark:bg-indigo-950/10 text-indigo-500 dark:text-indigo-400 font-mono text-[11px] font-bold shadow-sm">
    <FaCalendarAlt className="w-3.5 h-3.5 shrink-0" />
    <span className="whitespace-nowrap">{date}</span>
  </div>
);

const Card = ({ milestone, animX }) => (
  <motion.div
    initial={{ opacity: 0, x: animX }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover={{ scale: 1.02, y: -3 }}
    transition={{
      scale: { duration: 0.3, ease: "easeOut" },
      y: { duration: 0.3, ease: "easeOut" },
      default: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    }}
    viewport={{ once: true, amount: 0.3 }}
    className="flex flex-col p-7 rounded-[2rem] border border-white/60 dark:border-indigo-500/15 bg-white/40 dark:bg-[#090A1A]/70 backdrop-blur-md shadow-lg shadow-indigo-950/5 dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden group hover:border-indigo-500/35 dark:hover:border-indigo-500/45 dark:hover:shadow-[0_20px_50px_rgba(99,102,241,0.08)] transition-colors duration-500 select-none text-left w-full"
  >
    {/* Mobile-only date badge */}
    <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-100/50 dark:border-indigo-550/15 bg-indigo-50/20 dark:bg-indigo-950/10 text-indigo-500 dark:text-indigo-400 font-mono text-[9px] font-bold shadow-sm w-fit mb-4 lg:hidden">
      <FaCalendarAlt className="w-3 h-3" />
      <span>{milestone.date}</span>
    </div>

    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-500 dark:from-indigo-500 dark:to-indigo-400 text-white flex items-center justify-center shadow-md transform group-hover:scale-105 transition-transform duration-300 shrink-0">
        {milestone.icon}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2.5 flex-wrap">
          <h3 className="text-base font-bold text-slate-900 dark:text-white font-outfit leading-tight">
            {milestone.title}
          </h3>
          {milestone.isCurrent && (
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-[9px] font-bold text-emerald-500 uppercase tracking-wider font-mono">
              Current
            </span>
          )}
        </div>
        <span className="text-[11px] font-bold text-indigo-500 dark:text-indigo-400 font-manrope mt-1.5">
          {milestone.institution}
        </span>
        <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-3 font-inter leading-relaxed">
          {milestone.description}
        </p>
      </div>
    </div>

    <div className="flex flex-wrap gap-1.5 mt-6 pl-16">
      {milestone.tags.map((tag, i) => (
        <span
          key={i}
          className="px-2 py-0.5 rounded-md border border-indigo-100/50 dark:border-indigo-950/45 bg-indigo-50/20 dark:bg-indigo-950/10 text-[9px] font-bold text-indigo-500/80 dark:text-indigo-400/80 uppercase font-mono tracking-wider"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

/* ─── Main component ──────────────────────────────────────────────────── */

const Education = () => {
  const milestones = [
    {
      title: "B.Tech – Computer Science & Technology",
      institution: "IIEST Shibpur",
      date: "Aug 2025 - Present",
      isCurrent: true,
      description:
        "Currently pursuing undergraduate studies, focusing on data structures, algorithms, database systems, and software engineering principles.",
      icon: <FaGraduationCap className="w-6 h-6" />,
      tags: ["IIEST Shibpur", "Computer Science", "B.Tech", "Algorithms"],
    },
    {
      title: "Class 12 – CBSE Board",
      institution: "Nehru International Public School",
      date: "2025",
      isCurrent: false,
      description:
        "Graduated with secondary high school education, majoring in Science (Physics, Chemistry, Math) with a final academic score of 92%.",
      icon: <FaGraduationCap className="w-6 h-6" />,
      tags: ["CBSE", "Class 12", "Science", "NIPS"],
    },
    {
      title: "Class 10 – CBSE Board",
      institution: "Nehru International Public School",
      date: "2023",
      isCurrent: false,
      description:
        "Completed secondary school curriculum, securing an overall score of 92.4% in the final CBSE Board Examination.",
      icon: <HiAcademicCap className="w-6 h-6" />,
      tags: ["CBSE", "Class 10", "General Sciences", "NIPS"],
    },
  ];

  return (
    <div
      id="education"
      className="relative w-full overflow-hidden bg-[#F7F8FC] dark:bg-[#030308] transition-colors duration-300 pt-20 pb-24 px-6 sm:px-12 lg:px-24"
    >
      {/* ── LAYER 1: Fine dot-grid mesh ───────────────────────────────── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.35] dark:opacity-[0.18]"
        style={{
          backgroundImage: `radial-gradient(circle, #6366f1 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── LAYER 2: Radial vignette that fades the grid at edges ─────── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #F7F8FC 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none dark:block hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #030308 100%)",
        }}
      />

      {/* ── LAYER 3: Aurora / prismatic gradient bands ────────────────── */}
      <div
        className="absolute left-[-20%] top-[-5%] w-[80%] h-[55%] z-0 pointer-events-none rounded-full blur-[120px]"
        style={{
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.22) 0%, rgba(168,85,247,0.16) 50%, rgba(236,72,153,0.10) 100%)",
          animation: "aurora-shift 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute right-[-15%] bottom-[10%] w-[65%] h-[50%] z-0 pointer-events-none rounded-full blur-[100px]"
        style={{
          background:
            "linear-gradient(225deg, rgba(139,92,246,0.18) 0%, rgba(59,130,246,0.12) 55%, rgba(99,102,241,0.08) 100%)",
          animation: "aurora-shift 18s ease-in-out infinite 4s",
        }}
      />

      {/* ── LAYER 4: Large soft radial glow orbs ─────────────────────── */}
      <div
        className="absolute top-[-8%] left-[-8%] w-[520px] h-[520px] rounded-full z-0 pointer-events-none blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)",
          animation: "orb-drift 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[480px] h-[480px] rounded-full z-0 pointer-events-none blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.16) 0%, transparent 70%)",
          animation: "orb-drift-alt 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[40%] left-[30%] w-[340px] h-[340px] rounded-full z-0 pointer-events-none blur-[70px] dark:block hidden"
        style={{
          background:
            "radial-gradient(circle, rgba(79,70,229,0.10) 0%, transparent 70%)",
          animation: "orb-drift 25s ease-in-out infinite 8s",
        }}
      />

      {/* ── LAYER 5: Noise / grain texture overlay ────────────────────── */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-[0.045] dark:opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="edu-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#edu-noise)" />
      </svg>

      {/* ── LAYER 6: Floating geometric micro-particles ───────────────── */}
      {/* Diamond top-right */}
      <div
        className="hidden lg:block absolute top-[18%] right-[12%] w-3 h-3 z-0 pointer-events-none rotate-45 rounded-sm border border-indigo-400/40 dark:border-indigo-500/40 bg-indigo-400/10 dark:bg-indigo-500/10"
        style={{ animation: "particle-a 9s ease-in-out infinite" }}
      />
      {/* Circle bottom-left */}
      <div
        className="hidden lg:block absolute bottom-[28%] left-[10%] w-4 h-4 z-0 pointer-events-none rounded-full border border-purple-400/35 dark:border-purple-500/35 bg-purple-400/10 dark:bg-purple-500/10"
        style={{ animation: "particle-b 13s ease-in-out infinite 2s" }}
      />
      {/* Small dot mid-left */}
      <div
        className="hidden lg:block absolute top-[55%] left-[6%] w-2 h-2 z-0 pointer-events-none rounded-full bg-indigo-500/30 dark:bg-indigo-400/25 blur-[1px]"
        style={{ animation: "particle-a 11s ease-in-out infinite 5s" }}
      />
      {/* Small dot mid-right */}
      <div
        className="hidden lg:block absolute top-[70%] right-[8%] w-2.5 h-2.5 z-0 pointer-events-none rotate-45 border border-pink-400/30 dark:border-pink-500/30"
        style={{ animation: "particle-b 15s ease-in-out infinite 3s" }}
      />

      {/* ── LAYER 7: Spinning wire-frame accent shapes ────────────────── */}
      <div className="absolute top-[15%] left-[5%] z-0 pointer-events-none select-none animate-[spin_40s_linear_infinite] opacity-25 dark:opacity-15 hidden lg:block">
        <svg className="w-16 h-16 text-indigo-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
          <polygon points="50,8 92,32 92,68 50,92 8,68 8,32" />
          <line x1="50" y1="8"  x2="50" y2="92" />
          <line x1="8"  y1="32" x2="50" y2="50" />
          <line x1="92" y1="32" x2="50" y2="50" />
        </svg>
      </div>
      <div className="absolute bottom-[18%] right-[6%] z-0 pointer-events-none select-none animate-float-slow opacity-25 dark:opacity-15 hidden lg:block">
        <svg className="w-20 h-20 text-purple-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="18" y="18" width="64" height="64" rx="14" />
          <rect x="33" y="33" width="34" height="34" rx="6" />
          <line x1="18" y1="50" x2="33" y2="50" />
          <line x1="67" y1="50" x2="82" y2="50" />
        </svg>
      </div>

      {/* ── LAYER 8: Top + bottom edge fade-out masks ─────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-24 z-0 pointer-events-none bg-gradient-to-b from-[#F7F8FC] dark:from-[#030308] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 z-0 pointer-events-none bg-gradient-to-t from-[#F7F8FC] dark:from-[#030308] to-transparent" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-1.5 text-center mb-20"
        >
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-250/20 dark:border-purple-950/40 bg-purple-50/50 dark:bg-purple-950/10 w-fit select-none">
            <span className="text-purple-500">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
              </svg>
            </span>
            <span className="text-[10px] font-bold tracking-[0.25em] text-indigo-650 dark:text-purple-300 font-manrope uppercase">
              My Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
            Education{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
          <div className="relative w-16 h-4 flex items-center mt-0.5 justify-center">
            <div className="h-[3px] bg-gradient-to-r from-indigo-500 to-purple-600 w-full rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500 border border-white dark:border-[#030308]" />
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-350 max-w-lg mt-2.5 font-inter leading-relaxed">
            An overview of my educational milestones, board qualifications, and
            engineering exam achievements.
          </p>
        </motion.div>

        {/* ── Two-panel timeline ───────────────────────────────────────
            Desktop: [Date panel (260px)] | [Bar line + circles] | [Card panel (flex-1)]
            Mobile:  single column, bar on the far left edge
        ──────────────────────────────────────────────────────────────── */}
        <div className="relative">

          {/* ── Continuous vertical bar ── */}
          {/* Desktop: sits at the right edge of the 260px date panel */}
          <div
            className="hidden lg:block absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-slate-300/70 dark:via-indigo-600/25 to-transparent pointer-events-none z-0"
            style={{ left: "260px" }}
          />
          {/* Mobile: hugs the left edge */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-slate-300/70 dark:via-indigo-600/25 to-transparent pointer-events-none z-0" />

          {/* ── Grid rows: each milestone = 1 grid row ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr]">
            {milestones.map((milestone, index) => (
              <Fragment key={index}>

                {/* LEFT PANEL — date badge (desktop only) */}
                {/*
                  - Takes full cell height (grid stretches it to match card height)
                  - Flex centers the date badge vertically
                  - Circle is absolutely positioned at the right edge of this cell,
                    centered vertically → always aligned with the card's vertical midpoint
                */}
                <div className="hidden lg:flex items-center justify-end pr-10 py-10 relative">
                  <DateBadge date={milestone.date} />
                  {/* Circle node — centered on the bar line */}
                  <div className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                    <TimelineNode />
                  </div>
                </div>

                {/* RIGHT PANEL — content card */}
                <div className="relative flex items-center py-8 pl-12 lg:pl-10">
                  {/* Mobile circle node — centered on the left bar */}
                  <div className="lg:hidden absolute left-4 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                    <TimelineNode />
                  </div>
                  <Card milestone={milestone} animX={40} />
                </div>

              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
