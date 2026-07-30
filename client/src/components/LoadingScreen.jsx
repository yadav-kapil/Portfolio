import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import loadingJson from "../assets/videos/loading_screen_man.json";

const TypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [stage, setStage] = useState("typing"); 

  useEffect(() => {
    let timer;

    if (stage === "typing") {
      let index = 0;
      timer = setInterval(() => {
        index++;
        setDisplayedText(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(timer);
          setTimeout(() => {
            setStage("deleting");
          }, 500); 
        }
      }, 45); 
    } else if (stage === "deleting") {
      let index = text.length;
      timer = setInterval(() => {
        index--;
        setDisplayedText(text.slice(0, index));
        if (index <= 0) {
          clearInterval(timer);
          setTimeout(() => {
            setStage("typing");
          }, 300); 
        }
      }, 25); 
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [stage, text]);

  return (
    <div className="flex items-center">
      <span>{displayedText}</span>
      <span className="inline-block w-1.5 h-3 bg-indigo-500 ml-0.5 animate-pulse"></span>
    </div>
  );
};

const TerminalCard = ({ text, isDark, position }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`absolute ${position} hidden lg:block w-48 rounded-2xl border p-4 backdrop-blur-md transition-all duration-300 shadow-md z-15 hover:scale-105 ${
        isDark
          ? "border-indigo-500/20 bg-[#08091A]/60 shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
          : "border-slate-200/80 bg-white/70 shadow-[0_10px_25px_rgba(99,102,241,0.04)]"
      }`}
    >
      
      <div className="flex items-center gap-1.5 mb-2.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F]"></div>
      </div>
      
      <div className={`flex items-start gap-1.5 font-mono text-[11px] leading-normal font-semibold ${
        isDark ? "text-slate-200" : "text-slate-700"
      }`}>
        <span className="text-indigo-500 font-bold select-none">&gt;</span>
        <TypingText text={text} />
      </div>
    </motion.div>
  );
};

const LoadingScreen = ({ theme, setIsLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
      });
    }, 30); 

    return () => clearInterval(interval);
  }, [setIsLoading]);

  const isDark = theme === "dark";

  const bgGridStyle = {
    backgroundImage: isDark
      ? "radial-gradient(rgba(99, 102, 241, 0.15) 1.5px, transparent 1.5px)"
      : "radial-gradient(rgba(99, 102, 241, 0.1) 1.5px, transparent 1.5px)",
    backgroundSize: "24px 24px"
  };

  return (
    <div className={`fixed inset-0 w-screen h-[100dvh] flex flex-col items-center justify-between pt-8 pb-16 md:pt-12 md:pb-24 px-6 md:px-12 z-50 select-none overflow-hidden transition-colors duration-300 ${
      isDark ? "bg-[#030308] text-white" : "bg-[#FAFBFD] text-slate-900"
    }`}>
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80" style={bgGridStyle}></div>

      <div className={`absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none z-0 animate-pulse ${
        isDark ? "bg-indigo-500/10" : "bg-indigo-500/8"
      }`}></div>
      <div className={`absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full blur-3xl pointer-events-none z-0 animate-pulse delay-1000 ${
        isDark ? "bg-purple-500/10" : "bg-purple-500/8"
      }`}></div>

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className={`w-full h-full ${isDark ? "opacity-[0.18]" : "opacity-35"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <defs>
            <linearGradient id="curveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#A855F7" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="curveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <path 
            d="M-100 500 C 200 600, 500 200, 800 550 C 1100 800, 1300 400, 1600 450" 
            fill="none" 
            stroke="url(#curveGrad1)" 
            strokeWidth="2" 
            strokeDasharray="6 6" 
          />
          
          <path 
            d="M-50 300 C 300 100, 600 700, 900 350 C 1200 100, 1400 600, 1650 550" 
            fill="none" 
            stroke="url(#curveGrad2)" 
            strokeWidth="2.5" 
            strokeDasharray="8 6" 
          />
        </svg>
      </div>

      <div className="absolute left-[28%] top-[48%] hidden md:block z-10 animate-pulse">
        <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]"></div>
      </div>
      <div className="absolute right-[15%] bottom-[32%] hidden md:block z-10 animate-pulse delay-1000">
        <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
      </div>

      <div className="absolute top-[10%] left-[8%] xl:left-[12%] z-5 pointer-events-none select-none animate-float-slow hidden xl:block">
        <svg className="w-16 h-16 overflow-visible filter drop-shadow-[0_10px_15px_rgba(192,132,252,0.2)]" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="facet1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
            <linearGradient id="facet2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#818CF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
            <linearGradient id="facet3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
          </defs>
          <polygon points="50,15 80,45 50,75" fill="url(#facet1)" />
          <polygon points="50,15 20,45 50,75" fill="url(#facet2)" />
          <polygon points="50,75 80,45 50,85" fill="url(#facet3)" />
          <polygon points="50,75 20,45 50,85" fill="url(#facet2)" opacity="0.6" />
          <polygon points="50,15 80,45 20,45" fill="url(#facet1)" opacity="0.4" />
        </svg>
      </div>

      <div className="absolute top-[45%] right-[6%] xl:right-[10%] z-5 pointer-events-none select-none animate-float-delayed hidden xl:block">
        <svg className="w-16 h-16 overflow-visible" viewBox="0 0 100 100" transform="rotate(25)">
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

      <div className="absolute bottom-[10%] left-[10%] xl:left-[15%] z-5 pointer-events-none select-none animate-float-delayed hidden xl:block">
        <svg className="w-16 h-16 overflow-visible" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="cubeFront" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#818CF8" stopOpacity="0.55" />
            </linearGradient>
            <linearGradient id="cubeTop" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0.65" />
            </linearGradient>
          </defs>
          <rect x="15" y="45" width="60" height="40" rx="12" fill="rgba(129, 140, 248, 0.12)" filter="blur(8px)" />
          <polygon points="10,35 50,20 90,35 50,50" fill="url(#cubeTop)" />
          <polygon points="10,35 50,50 50,85 10,70" fill="url(#cubeFront)" />
          <polygon points="50,50 90,35 90,70 50,85" fill="url(#cubeFront)" opacity="0.8" />
          <text x="50" y="60" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle" transform="skewY(-10) rotate(-10)" className="font-sans">{"</>"}</text>
        </svg>
      </div>

      <div className="absolute bottom-[10%] right-[10%] xl:right-[15%] z-5 pointer-events-none select-none animate-float-slow hidden xl:block">
        <svg className="w-16 h-16 overflow-visible filter drop-shadow-[0_12px_20px_rgba(99,102,241,0.2)]" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="folderBack" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
            <linearGradient id="folderFront" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
          <path d="M10 25h20l8 8h42a10 10 0 0 1 10 10v32a10 10 0 0 1-10 10H10a10 10 0 0 1-10-10V35a10 10 0 0 1 10-10z" fill="url(#folderBack)" />
          <rect x="15" y="35" width="60" height="40" rx="4" fill="#E9D5FF" transform="rotate(-5 15 35)" />
          <path d="M5 42h80a5 5 0 0 1 5 5v33a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V47a5 5 0 0 1 5-5z" fill="url(#folderFront)" />
        </svg>
      </div>

      <div className="absolute top-[28%] left-[22%] hidden md:block z-0 animate-[spin_40s_linear_infinite] opacity-35">
        <svg className={`w-12 h-12 ${isDark ? "text-indigo-400" : "text-indigo-600"}`} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-[28%] right-[22%] hidden md:block z-0 animate-[spin_55s_linear_infinite] opacity-35">
        <svg className={`w-14 h-14 ${isDark ? "text-purple-400" : "text-purple-600"}`} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" fill="none" />
        </svg>
      </div>

      <div className="absolute bottom-[35%] left-[8%] z-5 pointer-events-none select-none animate-float-slow hidden xl:block">
        <svg className="w-8 h-8 text-yellow-400 fill-current filter drop-shadow(0 0 8px rgba(250,204,21,0.4))" viewBox="0 0 24 24">
          <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
        </svg>
      </div>
      <div className="absolute top-[35%] right-[28%] z-5 pointer-events-none select-none animate-float-slow opacity-60">
        <svg className="w-4 h-4 text-purple-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
        </svg>
      </div>

      <div className="flex flex-col items-center gap-1.5 text-center relative z-10">
        <div className="flex items-center gap-2 font-mono text-xs md:text-sm font-semibold select-none">
          <span className="text-indigo-500 font-bold">{`{`}</span>
          <span className={`${isDark ? "text-white" : "text-slate-900"} font-bold tracking-widest`}>kapil</span>
          <span className="text-indigo-500 font-bold">{`}`}</span>
          <span className="text-indigo-500 animate-pulse ml-0.5">✦</span>
        </div>
      </div>

      <div className="flex flex-col items-center text-center max-w-2xl px-6 relative z-10 gap-2.5 mt-2">
        <h1 className="font-outfit text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.2] pb-0.5">
          <span className={isDark ? "text-white" : "text-[#0f172a]"}>Building Experiences,</span>
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent md:block mt-1.5 pb-1">
            Crafting Impact
          </span>
        </h1>
        <p className={`font-mono text-[9px] md:text-[10px] tracking-wider uppercase max-w-md ${
          isDark ? "text-indigo-400/80" : "text-indigo-600/80"
        }`}>
          Turning ideas into digital reality, one line of code at a time.
        </p>
      </div>

      <TerminalCard
        text="Initializing core portfolio systems..."
        isDark={isDark}
        position="top-[24%] left-[6%] xl:left-[12%]"
      />
      <TerminalCard
        text="Fetching professional records..."
        isDark={isDark}
        position="top-[20%] right-[6%] xl:right-[12%]"
      />
      <TerminalCard
        text="Loading creative showcases..."
        isDark={isDark}
        position="bottom-[28%] left-[6%] xl:left-[10%]"
      />
      <TerminalCard
        text="Compiling tech stack matrix..."
        isDark={isDark}
        position="bottom-[32%] right-[6%] xl:right-[10%]"
      />

      <div className="relative flex items-center justify-center w-full max-w-xs md:max-w-md lg:max-w-xl aspect-square max-h-[220px] sm:max-h-[280px] md:max-h-[360px] lg:max-h-[420px] z-10 select-none px-4">
        
        <div className={`absolute w-[140px] h-[140px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] rounded-full blur-3xl animate-pulse pointer-events-none ${
          isDark ? "bg-indigo-500/10" : "bg-indigo-500/8"
        }`}></div>

        <Player
          autoplay
          loop
          src={loadingJson}
          style={{ width: "100%", height: "100%" }}
          className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px] z-10 select-none pointer-events-none"
        />

        <div className="absolute top-[30%] left-1 md:top-[32%] md:left-[-12%] lg:left-[-18%] z-20 animate-float-slow hover:scale-115 transition-transform duration-300">
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md border ${
            isDark ? "bg-[#08091A]/90 border-indigo-950/40 shadow-black/60" : "bg-white border-slate-100 shadow-slate-200/50"
          }`}>
            <FaReact className="w-5.5 h-5.5 md:w-7 md:h-7 text-[#61DAFB] animate-[spin_12s_linear_infinite]" />
          </div>
        </div>

        <div className="absolute top-[33%] right-1 md:top-[35%] md:right-[-12%] lg:right-[-18%] z-20 animate-float-delayed hover:scale-115 transition-transform duration-300">
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md border ${
            isDark ? "bg-[#08091A]/90 border-indigo-950/40 shadow-black/60" : "bg-white border-slate-100 shadow-slate-200/50"
          }`}>
            <FaJs className="w-5.5 h-5.5 md:w-7 md:h-7 text-[#F7DF1E]" />
          </div>
        </div>

        <div className="absolute bottom-[20%] left-1.5 md:bottom-[22%] md:left-[-8%] lg:left-[-14%] z-20 animate-float-delayed hover:scale-115 transition-transform duration-300">
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md border ${
            isDark ? "bg-[#08091A]/90 border-indigo-950/40 shadow-black/60" : "bg-white border-slate-100 shadow-slate-200/50"
          }`}>
            <FaNodeJs className="w-5.5 h-5.5 md:w-7 md:h-7 text-[#339933]" />
          </div>
        </div>

        <div className="absolute bottom-[20%] right-1.5 md:bottom-[22%] md:right-[-8%] lg:right-[-14%] z-20 animate-float-slow hover:scale-115 transition-transform duration-300">
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-md border ${
            isDark ? "bg-[#08091A]/90 border-indigo-950/40 shadow-black/60" : "bg-white border-slate-100 shadow-slate-200/50"
          }`}>
            <SiMongodb className="w-5.5 h-5.5 md:w-7 md:h-7 text-[#47A248]" />
          </div>
        </div>

        <div className="absolute top-[14%] right-[22%] lg:right-[18%] z-5 opacity-65 pointer-events-none animate-float-slow">
          <svg className={`w-9 h-6 ${isDark ? "text-indigo-400/25" : "text-indigo-300/40"}`} viewBox="0 0 100 60" fill="currentColor">
            <path d="M20 35a15 15 0 0 1 12-14.7 18 18 0 0 1 34.4-4.6 15 15 0 0 1 13.6 19.3 12 12 0 0 1-4 23H24a12 12 0 0 1-4-23z" />
          </svg>
        </div>

        <div className="absolute bottom-[8%] left-[18%] md:left-[15%] lg:left-[12%] z-20 animate-float-slow">
          <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center shadow-sm relative ${
            isDark ? "bg-[#0c0d24] border border-indigo-950/60" : "bg-slate-800 border border-slate-700"
          }`}>
            <span className="text-[8px] md:text-[9px] text-white font-mono font-bold">&lt;/&gt;</span>
            <div className={`absolute right-[-4px] top-[5px] md:top-[6px] w-2 h-3.5 md:h-4 rounded-r-md border-r-2 border-y-2 ${
              isDark ? "border-indigo-950/60" : "border-slate-700"
            }`}></div>
          </div>
        </div>

        <div className="absolute bottom-[8%] right-[18%] md:right-[15%] lg:right-[12%] z-20 animate-float-delayed flex flex-col items-center">
          <div className="flex gap-0.5 justify-center mb-[-2px]">
            <div className="w-1 h-2.5 md:w-1.5 md:h-3 rounded-full bg-green-500 transform -rotate-45 origin-bottom"></div>
            <div className="w-1.5 h-3 md:w-1.5 md:h-4 rounded-full bg-green-600 origin-bottom"></div>
            <div className="w-1 h-2.5 md:w-1.5 md:h-3 rounded-full bg-green-500 transform rotate-45 origin-bottom"></div>
          </div>
          <div className="w-3.5 h-3.5 md:w-4 md:h-4 bg-purple-600 rounded-b-sm border-t border-purple-500"></div>
        </div>
      </div>

      <div className="w-[90%] md:w-[85%] max-w-lg md:max-w-xl relative z-10 flex flex-col gap-2.5 mb-2 px-1">
        <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase font-mono leading-none text-indigo-500/80">
          <span>Building Something Amazing...</span>
          <span>{progress}%</span>
        </div>
        <div className={`w-full h-2 rounded-full overflow-hidden p-[1px] ${
          isDark ? "bg-slate-900 border border-slate-800" : "bg-slate-100 border border-slate-200"
        }`}>
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex items-center justify-center gap-1.5 text-[10.5px] mt-1.5 font-mono select-none">
          <span className="text-indigo-500 font-bold">✦</span>
          <span className={isDark ? "text-slate-500" : "text-slate-450"}>
            Crafting clean code. Building better experiences.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
