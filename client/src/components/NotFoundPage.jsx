import { Link } from "react-router";
import astronautImg from "../assets/astronaut_404.jpg";

import { LuHouse, LuFolderOpen, LuCompass } from "react-icons/lu";

const NotFoundPage = () => {
  return (
    <div className="relative h-[100vh] w-screen bg-gradient-to-br from-indigo-50/20 via-white to-purple-50/20 dark:from-[#030308] dark:via-[#070817] dark:to-[#020205] text-slate-800 dark:text-slate-100 transition-colors duration-300 font-outfit overflow-hidden flex flex-col justify-between items-center py-5 sm:py-6 px-4 sm:px-6">
      {/* Dotted Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#c7d2fe_1px,transparent_1px)] dark:bg-[radial-gradient(#312e81_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none z-0" />

      {/* Elegant Curved Vector Lines (Parallax style) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full opacity-20 dark:opacity-[0.08]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <path d="M-100 400 C 200 450, 500 150, 800 450 C 1100 700, 1300 300, 1600 350" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="text-indigo-400 dark:text-indigo-500" />
          <path d="M-50 200 C 300 50, 600 650, 900 300 C 1200 50, 1400 500, 1650 450" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" className="text-purple-400 dark:text-purple-500" />
        </svg>
      </div>

      {/* Drifting Premium Gradient Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl pointer-events-none z-0 animate-orb-drift" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none z-0 animate-orb-drift-alt" />
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-500/5 dark:bg-pink-500/3 rounded-full blur-2xl pointer-events-none z-0 animate-aurora" />

      {/* Floating 3D Sparkle Star Icons */}
      <div className="absolute top-[14%] left-[10%] text-indigo-400/40 dark:text-indigo-500/20 animate-float-slow z-0 select-none">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" /></svg>
      </div>
      <div className="absolute top-[48%] left-[14%] text-purple-400/35 dark:text-purple-500/15 animate-float-delayed z-0 select-none">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" /></svg>
      </div>
      <div className="absolute bottom-[22%] right-[16%] text-pink-400/40 dark:text-pink-500/25 animate-float-slow z-0 select-none">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" /></svg>
      </div>
      <div className="absolute top-[22%] right-[16%] text-indigo-300/35 dark:text-indigo-500/15 animate-float-delayed z-0 select-none">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" /></svg>
      </div>

      {/* Top Header Group */}
      <div className="relative z-10 flex flex-col items-center select-none w-full">
        {/* Chip badge */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/15 dark:border-indigo-500/35 bg-indigo-500/5 dark:from-indigo-500/8 dark:to-purple-500/8 w-fit shadow-sm">
          <span className="text-[10px] sm:text-[11.5px] font-black tracking-[0.22em] text-indigo-650 dark:text-indigo-400 uppercase leading-none mt-0.5">
            ✦ Oops! You just found a ✦
          </span>
        </div>

        {/* Hero 404 with Custom Galaxy Portal */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-5 text-[6.5rem] sm:text-[8.5rem] lg:text-[10.5rem] font-extrabold tracking-tighter leading-none font-outfit mt-2">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent filter drop-shadow-[0_4px_16px_rgba(99,102,241,0.2)]">
            4
          </span>

          {/* Interactive Galaxy Portal for '0' */}
          <div className="relative group cursor-pointer scale-[0.88] sm:scale-100 transition-transform duration-300">
            {/* Spinning background halo */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 blur-sm group-hover:opacity-80 group-hover:blur-md transition duration-500 animate-[spin_12s_linear_infinite]" />
            
            {/* Outer portal container */}
            <div className="relative w-16 h-16 sm:w-22 sm:h-22 lg:w-26 lg:h-26 rounded-full overflow-hidden bg-slate-950 border-[3.5px] border-white dark:border-[#07081A] shadow-[0_0_35px_rgba(99,102,241,0.45)] dark:shadow-[0_0_55px_rgba(139,92,246,0.65)] flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-[spin_50s_linear_infinite]"
              >
                <defs>
                  <radialGradient id="spaceGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1e1b4b" />
                    <stop offset="60%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#020617" />
                  </radialGradient>
                  <linearGradient id="spiralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="50%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#f472b6" />
                  </linearGradient>
                </defs>
                <rect width="100" height="100" fill="url(#spaceGrad)" />
                {/* Galaxy Core */}
                <circle
                  cx="50"
                  cy="50"
                  r="5.5"
                  fill="#ffffff"
                  filter="drop-shadow(0 0 6px #a78bfa)"
                />
                {/* Spiral arms */}
                <path
                  d="M50 50 Q 60 40 70 50 T 80 70 T 50 90 T 20 60 T 40 30 T 75 35"
                  fill="none"
                  stroke="url(#spiralGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  opacity="0.85"
                />
                <path
                  d="M50 50 Q 40 60 30 50 T 20 30 T 50 10 T 80 40 T 60 70 T 25 65"
                  fill="none"
                  stroke="url(#spiralGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                {/* Stars */}
                <circle cx="25" cy="30" r="0.8" fill="#fff" opacity="0.8" />
                <circle cx="75" cy="70" r="1.2" fill="#fff" opacity="0.9" />
                <circle cx="35" cy="75" r="0.6" fill="#fff" opacity="0.5" />
                <circle cx="65" cy="20" r="1.0" fill="#fff" opacity="0.8" />
              </svg>
              <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,#020617_95%)] pointer-events-none" />
            </div>
          </div>

          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent filter drop-shadow-[0_4px_16px_rgba(99,102,241,0.2)]">
            4
          </span>
        </div>

        {/* Page Not Found Description */}
        <div className="max-w-md -mt-1 sm:-mt-3">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-none">
            Page <span className="text-indigo-600 dark:text-indigo-400">Not</span> Found
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-[13.5px] mt-1.5 leading-normal font-inter">
            The page you're looking for seems to have drifted into the digital universe.
          </p>
        </div>
      </div>

      {/* Middle Illustration & Floating Info Cards */}
      <div className="relative w-full max-w-2xl flex flex-col items-center justify-center flex-1 max-h-[35vh]">
        {/* Left Card - Floating "Lost in space?" */}
        <div className="lg:absolute lg:top-1/10 lg:left-[-40px] z-20 flex items-center gap-2.5 p-3 w-56 rounded-xl backdrop-blur-xl bg-white/70 dark:bg-white/[0.03] border border-white/50 dark:border-white/[0.08] shadow-[0_8px_32px_rgba(99,102,241,0.06)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.45)] hover:border-indigo-500/20 hover:-translate-y-0.5 transition-all duration-300 text-left select-none max-lg:hidden group">
          <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 text-indigo-500 shrink-0 group-hover:scale-110 transition-transform duration-300">
            <LuCompass size={16} />
          </div>
          <div>
            <h4 className="text-[11.5px] font-bold text-slate-800 dark:text-white">
              Lost in space?
            </h4>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-none mt-0.5 font-inter">
              Let's get you{" "}
              <span className="font-semibold text-indigo-650 dark:text-indigo-400">
                back on track.
              </span>
            </p>
          </div>
        </div>

        {/* Center Astronaut Illustration with Speech Bubble */}
        <div className="relative w-40 sm:w-52 lg:w-56 select-none flex items-center justify-center">
          <div className="relative rounded-full overflow-hidden border border-slate-200/30 dark:border-white/[0.05] p-1 bg-gradient-to-b from-indigo-50/20 to-purple-50/20 dark:from-indigo-950/10 dark:to-purple-950/10 shadow-lg">
            <img
              src={astronautImg}
              alt="Astronaut lost in space"
              className="w-full h-auto object-contain rounded-full filter drop-shadow-[0_12px_30px_rgba(99,102,241,0.15)] animate-float-badge"
            />
          </div>

          {/* Astronaut Speech Bubble */}
          <div className="absolute -top-3.5 -right-8 sm:-right-12 bg-white/95 dark:bg-[#07081A]/95 text-slate-800 dark:text-indigo-200 border border-slate-200/60 dark:border-indigo-500/25 rounded-xl py-1.5 px-3 text-[9.5px] font-bold shadow-md flex items-center gap-1.5 animate-bounce select-none">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping shrink-0" />
            <span>Hmm... looks like this page doesn't exist.</span>
            {/* Tooltip triangle tail */}
            <div className="absolute bottom-[-5px] left-[30%] -translate-x-1/2 w-2.5 h-2.5 bg-white dark:bg-[#07081A] border-r border-b border-slate-200/60 dark:border-indigo-500/25 rotate-45" />
          </div>
        </div>

        {/* Right Card - Floating "Error Code" */}
        <div className="lg:absolute lg:bottom-1/10 lg:right-[-40px] z-20 flex items-center gap-2.5 p-3 w-56 rounded-xl backdrop-blur-xl bg-white/70 dark:bg-white/[0.03] border border-white/50 dark:border-white/[0.08] shadow-[0_8px_32px_rgba(99,102,241,0.06)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.45)] hover:border-indigo-500/20 hover:-translate-y-0.5 transition-all duration-300 text-left select-none max-lg:hidden group">
          <div className="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-950/30 text-purple-500 shrink-0 group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <circle cx="12" cy="12" r="6" />
              <ellipse cx="12" cy="12" rx="11" ry="3" transform="rotate(-30 12 12)" />
            </svg>
          </div>
          <div>
            <h4 className="text-[11.5px] font-bold text-slate-800 dark:text-white">
              Error Code
            </h4>
            <p className="text-[9.5px] font-mono text-purple-600 dark:text-purple-400 mt-0.5 uppercase tracking-wider font-semibold">
              404_NOT_FOUND
            </p>
          </div>
        </div>
      </div>

      {/* Homepage Navigation Action Card */}
      <div className="relative z-10 w-full max-w-lg p-5.5 sm:p-6.5 rounded-3xl bg-white/80 dark:bg-[#070816]/65 backdrop-blur-xl border border-white/50 dark:border-indigo-500/15 shadow-[0_12px_40px_rgba(99,102,241,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col items-center select-none">
        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-1 leading-none font-outfit">
          Let's get you back{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">
            home
          </span>{" "}
          ✦
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-[11px] sm:text-xs mt-2 font-inter">
          Explore my portfolio and discover something amazing.
          </p>

        <div className="flex gap-3.5 mt-4.5 w-full justify-center">
          {/* Go to Homepage Button */}
          <Link
            to="/"
            className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:opacity-95 text-white font-bold text-[11.5px] shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/25 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer border border-transparent dark:border dark:border-indigo-500/35 font-outfit"
          >
            <LuHouse size={13} />
            <span>Go to Homepage</span>
          </Link>

          {/* Explore Projects Button */}
          <Link
            to="/#projects"
            className="flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/[0.07] hover:border-indigo-500/30 font-bold text-[11.5px] hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer font-outfit"
          >
            <LuFolderOpen size={13} />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>

      {/* Copyright Footer line */}
      <div className="relative z-10 pt-3.5 border-t border-slate-200/40 dark:border-white/[0.04] w-full max-w-4xl flex justify-between items-center select-none text-[9.5px] font-semibold text-slate-400 dark:text-slate-500 shrink-0">
        <p>© 2025 Kapil Yadav. All rights reserved.</p>
        <span className="font-bold font-mono">{"</>"}</span>
      </div>
    </div>
  );
};

export default NotFoundPage;
