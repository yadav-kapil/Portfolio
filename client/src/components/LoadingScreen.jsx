import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

const TypingText = ({ text, active, isDark, isLast }) => {
  const [displayedText, setDisplayedText] = useState(active ? "" : text);
  // track whether this line's typing has already finished
  // so we never flash/re-render a completed line when a new one appears
  const typingDone = useRef(!active);

  useEffect(() => {
    if (!active) {
      // Only fill in the text if typing was interrupted (e.g. line timer
      // fired before the typing interval could finish). If already done,
      // skip the setState to avoid the glitch re-render.
      if (!typingDone.current) {
        setDisplayedText(text);
        typingDone.current = true;
      }
      return;
    }

    // Reset for fresh activation
    typingDone.current = false;
    setDisplayedText("");
    let i = 0;

    const id = setInterval(() => {
      i++;
      // slice-based approach avoids stale-closure accumulation bugs
      setDisplayedText(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        typingDone.current = true;
      }
    }, 22);

    return () => clearInterval(id);
  }, [active, text]);

  return (
    <span className={
      isLast
        ? `${isDark ? "text-purple-400" : "text-purple-600"} font-semibold`
        : (isDark ? "text-slate-200" : "text-slate-700")
    }>
      {displayedText}
    </span>
  );
};

const LoadingScreen = ({ theme, setIsLoading }) => {
  const [activeLines, setActiveLines] = useState(1);
  const [progress, setProgress] = useState(0);

  const terminalLines = [
    "Initialising portfolio...",
    "Compiling projects & experience...",
    "Polishing the final touches...",
    "Ready. Let's go ✦"
  ];

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setActiveLines((prev) => {
        if (prev < terminalLines.length) {
          return prev + 1;
        } else {
          clearInterval(lineInterval);
          return prev;
        }
      });
    }, 1600);

    return () => clearInterval(lineInterval);
  }, []);

  useEffect(() => {
    const targets = [0, 25, 55, 85, 100];
    const target = targets[activeLines];

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < target) {
          return prev + 1;
        } else if (prev === 100) {
          clearInterval(progressInterval);
          const finalTimeout = setTimeout(() => {
            setIsLoading(false);
          }, 800);
          return () => clearTimeout(finalTimeout);
        }
        return prev;
      });
    }, 10);

    return () => clearInterval(progressInterval);
  }, [activeLines, setIsLoading]);

  const isDark = theme === "dark";

  return (
    <div className={`fixed inset-0 w-full h-full flex flex-col items-center justify-center z-50 select-none overflow-hidden font-inter transition-colors duration-300 ${
      isDark ? "bg-[#030308] text-white" : "bg-[#FAFBFD] text-slate-900"
    }`}>
      {/* Ambient Glow Mesh Blobs */}
      <div className={`absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none z-0 animate-pulse ${
        isDark ? "bg-indigo-500/10" : "bg-indigo-500/8"
      }`}></div>
      <div className={`absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none z-0 animate-pulse delay-1000 ${
        isDark ? "bg-purple-500/10" : "bg-purple-500/8"
      }`}></div>

      {/* Decorative dashed orbits */}
      <div className={`absolute top-[28%] left-[22%] w-[120px] h-[120px] rounded-full border border-dashed pointer-events-none z-0 animate-[spin_40s_linear_infinite] ${isDark ? "border-indigo-500/10" : "border-indigo-500/15"}`}></div>
      <div className={`absolute bottom-[28%] right-[22%] w-[150px] h-[150px] rounded-full border border-dashed pointer-events-none z-0 animate-[spin_55s_linear_infinite] ${isDark ? "border-purple-500/10" : "border-purple-500/15"}`}></div>

      {/* Intersecting Gradient Curves Wave Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className={`w-full h-full ${isDark ? "opacity-[0.18]" : "opacity-35"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <defs>
            <linearGradient id="loadGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.75" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="loadGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M-100,200 C300,50 600,650 1000,150 C1200,-50 1400,300 1600,250" fill="none" stroke="url(#loadGrad1)" strokeWidth="3" />
          <path d="M-50,450 C400,600 700,100 1100,350 C1300,450 1500,250 1650,400" fill="none" stroke="url(#loadGrad2)" strokeWidth="2.5" strokeDasharray="8 6" />
          <path d="M100,750 C500,550 800,950 1200,650 C1400,450 1500,750 1700,600" fill="none" stroke="url(#loadGrad1)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Floating Shape Elements */}
      {/* 3D Sphere */}
      <div className="absolute top-[18%] left-[10%] z-0 pointer-events-none select-none animate-float-slow hidden xl:block">
        <svg className="w-16 h-16 overflow-visible" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="loadSphere" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="60%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#4F46E5" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="30" fill="url(#loadSphere)" filter="drop-shadow(0 15px 25px rgba(99,102,241,0.25))" />
        </svg>
      </div>

      {/* 3D Torus */}
      <div className="absolute top-[42%] right-[10%] z-0 pointer-events-none select-none animate-float-delayed hidden xl:block">
        <svg className="w-20 h-20 overflow-visible" viewBox="0 0 100 100" transform="rotate(25)">
          <defs>
            <linearGradient id="loadTorus" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="50%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="30" stroke="url(#loadTorus)" strokeWidth="12" fill="none" filter="drop-shadow(0 10px 15px rgba(192,132,252,0.15))" />
        </svg>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute bottom-[35%] left-[8%] z-0 pointer-events-none select-none animate-float-slow hidden xl:block">
        <svg className="w-9 h-9 text-yellow-400 fill-current filter drop-shadow(0 0 10px rgba(250,204,21,0.4))" viewBox="0 0 24 24">
          <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
        </svg>
      </div>
      <div className="absolute top-[50%] left-[5%] z-0 pointer-events-none select-none animate-float-delayed hidden xl:block">
        <svg className="w-6 h-6 text-purple-400 fill-current opacity-60" viewBox="0 0 24 24">
          <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
        </svg>
      </div>
      <div className="absolute bottom-[48%] right-[6%] z-0 pointer-events-none select-none animate-float-slow hidden xl:block">
        <svg className="w-7 h-7 text-indigo-400 fill-current opacity-60" viewBox="0 0 24 24">
          <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
        </svg>
      </div>

      {/* 3D Capsule */}
      <div className="absolute bottom-[16%] right-[18%] z-0 pointer-events-none select-none animate-float-delayed hidden xl:block">
        <svg className="w-16 h-20 overflow-visible" viewBox="0 0 60 90" transform="rotate(-30)">
          <defs>
            <linearGradient id="loadCapsule" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#818CF8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="10" y="10" width="40" height="70" rx="20" fill="url(#loadCapsule)" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.7" filter="drop-shadow(0 15px 20px rgba(56,189,248,0.15))" />
        </svg>
      </div>

      {/* Page Header */}
      <div className="flex flex-col items-center gap-2 mb-10 text-center relative z-10">
        <span className="text-indigo-500 animate-pulse">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09L12 0l3.09 8.91z" />
          </svg>
        </span>
        <span className={`text-[11px] font-bold tracking-[0.35em] font-mono uppercase ${
          isDark ? "text-indigo-400" : "text-indigo-600"
        }`}>
          Preparing Something Awesome
        </span>
      </div>

      {/* Terminal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-[90%] max-w-xl rounded-2xl border p-7 relative z-10 select-none text-left backdrop-blur-md transition-all duration-300 ${
          isDark 
            ? "border-indigo-500/20 bg-[#08091A]/60 shadow-[0_30px_70px_rgba(0,0,0,0.6)]" 
            : "border-slate-200/80 bg-white/75 shadow-[0_20px_50px_rgba(99,102,241,0.06)]"
        }`}
      >
        {/* Terminal Header */}
        <div className={`flex justify-between items-center border-b pb-4 mb-5 ${
          isDark ? "border-indigo-950/40" : "border-slate-100"
        }`}>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <span className={`text-xs font-mono ${
            isDark ? "text-slate-500" : "text-slate-400"
          }`}>kapilyadav.cloud</span>
          <div className="w-12"></div>
        </div>

        {/* Output lines */}
        <div className="min-h-[160px] flex flex-col gap-2 mb-8 select-none font-mono text-sm leading-relaxed">
          {terminalLines.slice(0, activeLines).map((line, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="text-indigo-500 font-bold select-none">&gt;</span>
              <TypingText 
                text={line} 
                active={i === activeLines - 1} 
                isDark={isDark} 
                isLast={i === terminalLines.length - 1} 
              />
              {i === activeLines - 1 && i < terminalLines.length - 1 && (
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
              )}
            </div>
          ))}
        </div>

        {/* Progress bar info */}
        <div className="w-full flex flex-col gap-2">
          <div className={`flex justify-between items-center text-[10px] font-bold tracking-widest uppercase font-mono leading-none ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}>
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
          <div className={`w-full h-1.5 rounded-full overflow-hidden ${
            isDark ? "bg-slate-900" : "bg-slate-100"
          }`}>
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 text-[10.5px] font-medium tracking-wide mt-6 select-none leading-none font-manrope">
          <svg className={`w-3.5 h-3.5 fill-current shrink-0 ${isDark ? "text-indigo-400/80" : "text-indigo-500/80"}`} viewBox="0 0 24 24">
            <path d="M12 2L2 14h9l-2 8 13-12h-9z" />
          </svg>
          <span className={isDark ? "text-slate-500" : "text-slate-450"}>
            Crafting clean code. Building better experiences.
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
