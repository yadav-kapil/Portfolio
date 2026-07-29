import { useRef, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import learnify from "../assets/learnify.png";

/* ─── Project data ────────────────────────────────────────────────────── */
const projects = [
  {
    title: "Learnify",
    subtitle: "AI-Powered Learning Assistant",
    description:
      "An AI-powered assistant that helps users solve doubts, practice concepts, and learn interactively through real-time conversations.",
    image: learnify,
    tags: ["React", "Framer Motion", "Node.js", "Gemini"],
    github: "https://github.com/yadav-kapil/Learnify_Hacksprint",
    live: "https://learnify-hacksprint.vercel.app/",
    // ── Popup detail fields ──────────────────────────────────────────────
    fullDescription:
      "Learnify is a full-stack AI learning assistant built during a hackathon. It lets students type or speak any question and receive clear, structured explanations powered by the Gemini API. The platform adapts to the user's learning level, tracks session history, and suggests follow-up questions to deepen understanding.",
    highlights: [
      "Real-time AI Q&A with Gemini API integration",
      "Session history & topic tracking",
      "Voice input support via Web Speech API",
      "Responsive dark-mode UI built with React + Framer Motion",
      "REST API backend with Node.js & Express",
    ],
    role: "Full-Stack Developer",
    duration: "48 hrs (Hackathon)",
    status: "Live",
  },
];

/* ─── Tag pill ────────────────────────────────────────────────────────── */
const TagPill = ({ tag }) => (
  <span className="px-2.5 py-[3px] rounded border border-indigo-100/60 dark:border-indigo-900/50 bg-indigo-50/30 dark:bg-indigo-950/15 text-[9px] font-bold text-indigo-500/90 dark:text-indigo-400/80 uppercase font-mono tracking-wider">
    {tag}
  </span>
);

/* ─── Details dialog ──────────────────────────────────────────────────── */
const ProjectDialog = ({ project, dialogRef }) => {
  // Light-dismiss: native closedby="any" + Safari fallback
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if ("closedBy" in HTMLDialogElement.prototype) return; // native support

    // Safari fallback: close when clicking the backdrop
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
    /* Native <dialog> — top-layer, focus-trapped, Esc closes automatically */
    <dialog
      ref={dialogRef}
      // eslint-disable-next-line react/no-unknown-property
      closedby="any"
      aria-labelledby="dialog-title"
      className={[
        /* layout */
        "w-[min(92vw,560px)] max-h-[85vh] overflow-y-auto rounded-2xl p-0",
        /* colours */
        "bg-white dark:bg-[#07081A]",
        "border border-slate-200/80 dark:border-white/[0.08]",
        "shadow-[0_32px_80px_rgba(0,0,0,0.18)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.7)]",
        /* reset browser defaults */
        "outline-none",
        /* backdrop via CSS below */
      ].join(" ")}
      style={{
        /* center it using margin: auto (Baseline-safe, no JS needed) */
        margin: "auto",
      }}
    >
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      {/* Header */}
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

      {/* Divider */}
      <div className="mx-7 mt-4 h-px bg-slate-100 dark:bg-white/[0.06]" />

      {/* Body */}
      <div className="px-7 py-5 flex flex-col gap-5">

        {/* Meta chips */}
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

        {/* Full description */}
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 font-mono mb-2">Overview</h3>
          <p className="text-[12.5px] text-slate-600 dark:text-slate-300 font-inter leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Highlights */}
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

        {/* Tech stack */}
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600 font-mono mb-2.5">Tech Stack</h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => <TagPill key={i} tag={tag} />)}
          </div>
        </div>
      </div>

      {/* Footer */}
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

/* ─── Project card ────────────────────────────────────────────────────── */
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
        className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-200/70 dark:border-white/[0.07] bg-white dark:bg-[#07081A] shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.55)] hover:shadow-[0_8px_40px_rgba(99,102,241,0.12)] dark:hover:shadow-[0_12px_50px_rgba(99,102,241,0.15)] hover:-translate-y-1.5 transition-all duration-400"
      >
        {/* Top accent bar */}
        <div className="h-[3px] w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shrink-0" />

        {/* Image */}
        <div className="relative overflow-hidden bg-slate-50 dark:bg-[#0d0e24] h-40 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 px-7 pt-5 pb-6">

          {/* Title row + Details button */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-black font-outfit tracking-tight text-slate-900 dark:text-white leading-snug">
                {project.title}
              </h3>
              <p className="text-[10.5px] font-semibold text-indigo-500 dark:text-indigo-400 font-manrope mt-0.5 tracking-wide">
                {project.subtitle}
              </p>
            </div>

            {/* Details button */}
            <button
              onClick={openDialog}
              aria-label={`View details for ${project.title}`}
              className="shrink-0 mt-0.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-indigo-200/60 dark:border-indigo-700/30 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold font-mono tracking-wide hover:border-indigo-400/70 dark:hover:border-indigo-500/50 hover:bg-indigo-100/60 dark:hover:bg-indigo-950/40 transition-all duration-200"
            >
              <HiOutlineInformationCircle className="w-3.5 h-3.5" />
              Details
            </button>
          </div>

          {/* Thin rule */}
          <div className="w-full h-px bg-slate-100 dark:bg-white/[0.05] my-4" />

          {/* Short description */}
          <p className="text-[12.5px] text-slate-500 dark:text-slate-400 font-inter leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-5">
            {project.tags.map((tag, i) => <TagPill key={i} tag={tag} />)}
          </div>

          {/* Footer actions */}
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

      {/* Native dialog — rendered outside the card so it escapes overflow:hidden */}
      <ProjectDialog project={project} dialogRef={dialogRef} />
    </>
  );
};

/* ─── Main section ────────────────────────────────────────────────────── */
const Projects = () => (
  <div
    id="projects"
    className="relative w-full overflow-hidden bg-[#FAFBFD] dark:bg-[#030308] transition-colors duration-300 pt-20 pb-24 px-6 sm:px-12 lg:px-24"
  >
    {/* Background glows */}
    <div className="absolute top-[-10%] right-[-8%] w-[420px] h-[420px] rounded-full blur-[90px] pointer-events-none z-0"
      style={{ background: "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)" }} />
    <div className="absolute bottom-[-5%] left-[-8%] w-[380px] h-[380px] rounded-full blur-[80px] pointer-events-none z-0"
      style={{ background: "radial-gradient(circle, rgba(168,85,247,0.11) 0%, transparent 70%)" }} />

    {/* Dot-grid */}
    <div
      className="absolute inset-0 z-0 pointer-events-none opacity-[0.28] dark:opacity-[0.13]"
      style={{ backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)", backgroundSize: "36px 36px" }}
    />
    {/* Vignette */}
    <div className="absolute inset-0 z-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 45%, #FAFBFD 100%)" }} />
    <div className="absolute inset-0 z-0 pointer-events-none dark:block hidden"
      style={{ background: "radial-gradient(ellipse 85% 85% at 50% 50%, transparent 45%, #030308 100%)" }} />

    <div className="w-full max-w-6xl mx-auto relative z-10">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-1.5 text-center mb-16"
      >
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-250/20 dark:border-purple-950/40 bg-purple-50/50 dark:bg-purple-950/10 w-fit select-none">
          <span className="text-purple-500">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
            </svg>
          </span>
          <span className="text-[10px] font-bold tracking-[0.25em] text-indigo-650 dark:text-purple-300 font-manrope uppercase">
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

      {/* Cards */}
      <div className="flex justify-center">
        <div className="w-full max-w-sm">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* GitHub CTA */}
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
