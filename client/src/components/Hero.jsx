"use client";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { MdOutlineCloudDownload } from "react-icons/md";
import { LuArrowRight, LuFolder, LuCode, LuShield, LuCloud } from "react-icons/lu";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";

import bgHero from "../assets/bg-hero.jpg";
import blueGradient from "../assets/blue-gradient.png";
import kapilYadav from "../assets/kapilYadav.png";

const Hero = () => {
  const typingWords = ["Full Stack Developer"];
  const typingRef = useRef(null);

  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;
    let wordIndex = 0;
    let i = 0;
    let forward = true;
    let timeoutId;

    const type = () => {
      const currentWord = typingWords[wordIndex];
      if (forward) {
        i++;
        el.textContent = currentWord.slice(0, i);
        if (i === currentWord.length) {
          forward = false;
          timeoutId = setTimeout(type, 1800);
          return;
        }
      } else {
        i--;
        el.textContent = currentWord.slice(0, i);
        if (i === 0) {
          forward = true;
          wordIndex = (wordIndex + 1) % typingWords.length;
          timeoutId = setTimeout(type, 400);
          return;
        }
      }
      timeoutId = setTimeout(type, forward ? 80 : 45);
    };

    timeoutId = setTimeout(type, 600);
    return () => clearTimeout(timeoutId);
  }, []);

  const stats = [
    {
      icon: <LuCode className="w-5 h-5" />,
      value: "Building",
      label: "Modern Web Apps",
      progress: "100%",
      colorClass: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 dark:bg-indigo-500/8 border-indigo-500/20 dark:border-indigo-500/15",
      barColor: "from-indigo-500 via-indigo-400 to-purple-600"
    },
    {
      icon: <LuShield className="w-5 h-5" />,
      value: "Engineering",
      label: "Secure APIs",
      progress: "100%",
      colorClass: "text-emerald-600 dark:text-emerald-450 bg-emerald-500/10 dark:bg-emerald-500/8 border-emerald-500/20 dark:border-emerald-500/15",
      barColor: "from-emerald-500 via-emerald-400 to-teal-600"
    },
    {
      icon: <LuCloud className="w-5 h-5" />,
      value: "Deploying",
      label: "Cloud Infrastructure at scale",
      progress: "100%",
      colorClass: "text-sky-600 dark:text-sky-400 bg-sky-500/10 dark:bg-sky-500/8 border-sky-500/20 dark:border-sky-500/15",
      barColor: "from-sky-500 via-sky-400 to-indigo-600"
    },
  ];

  return (
    <div
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden pt-24 sm:pt-28 pb-16 px-6 sm:px-12 lg:px-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white/50 to-purple-50/50 dark:from-[#030308]/96 dark:via-[#090B19]/96 dark:to-[#020205]/98 pointer-events-none z-0"></div>
      
      <div className="absolute inset-0 bg-[radial-gradient(#c7d2fe_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#312e81_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-40 dark:opacity-30 pointer-events-none z-0"></div>

      <div className="absolute top-[20%] right-[-10%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full border border-indigo-400/20 dark:border-indigo-500/10 pointer-events-none z-0 [transform:rotateX(65deg)_rotateY(-15deg)]"></div>
      <div className="absolute top-[35%] right-[5%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full border border-purple-400/25 dark:border-purple-500/10 pointer-events-none z-0 [transform:rotateX(70deg)_rotateY(10deg)]"></div>

      <div className="absolute top-[22%] left-[10%] text-indigo-400/50 dark:text-indigo-500/30 animate-pulse z-0">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
        </svg>
      </div>
      <div className="absolute top-[48%] left-[45%] text-indigo-400/40 dark:text-indigo-500/20 animate-pulse z-0 delay-1000">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M10 0l2.5 7.5 7.5 2.5-7.5 2.5-2.5 7.5-2.5-7.5-7.5-2.5 7.5-2.5z" />
        </svg>
      </div>
      <div className="absolute bottom-[20%] right-[42%] text-purple-450/40 dark:text-purple-500/20 animate-pulse z-0">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
        </svg>
      </div>
      <div className="absolute bottom-[10%] right-[10%] text-indigo-400/50 dark:text-indigo-500/30 animate-pulse z-0">
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M14 0l3.5 10.5 10.5 3.5-10.5 3.5-3.5 10.5-3.5-10.5-10.5-3.5 10.5-3.5z" />
        </svg>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 relative">

        <div className="lg:col-span-6 flex flex-col gap-6 text-left items-start mt-6 sm:mt-10 lg:mt-16">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative px-6 py-2 rounded-xl border border-indigo-250/70 dark:border-[#5B21B6]/40 bg-white/40 dark:bg-[#1A0B2E]/40 text-[12px] font-bold tracking-[0.25em] text-indigo-600 dark:text-purple-300 font-mono w-fit select-none dark:shadow-[0_0_15px_rgba(124,58,237,0.05)]"
          >
            HELLO
            
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F4F6FF] dark:bg-[#030308] flex items-center justify-center border border-transparent z-10">
              <span className="text-indigo-500/80 animate-pulse">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
                </svg>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-1.5 leading-tight font-outfit text-slate-900 dark:text-white"
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">My Name is,</span>
            <span 
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight"
              style={{
                background: "linear-gradient(90deg, #4f46e5 0%, #7c3aed 50%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              Kapil Yadav
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-2xl font-bold font-outfit text-slate-800 dark:text-slate-200 flex items-center gap-2 select-none"
          >
            <span>I'm a</span>
            <span className="text-indigo-600 dark:text-indigo-400 flex items-center">
              <span ref={typingRef}></span>
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.1em",
                  marginLeft: "4px",
                  background: "#4f46e5",
                  animation: "blink-cursor 0.75s step-end infinite",
                  verticalAlign: "middle",
                }}
              />
              <style>{`@keyframes blink-cursor { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
            </span>
          </motion.div>

          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[13.5px] sm:text-sm text-slate-500 dark:text-slate-400 font-outfit leading-relaxed max-w-lg mt-2"
          >
            I build modern, scalable and secure backend systems that power high-performance web applications and deliver seamless experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mt-4 lg:mt-1.5 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="group rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:opacity-95 text-white font-bold text-[13.5px] px-6 py-2.5 lg:py-2 flex items-center justify-center gap-2 shadow-md shadow-indigo-500/10 dark:shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-indigo-500/20 dark:hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto dark:border dark:border-indigo-500/35 border border-transparent"
            >
              <span>View My Work</span>
              <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/1QGK9XuHoT_tlNwpXFXTBgfFbzr1gg2fI/view?usp=sharing"
              target="_blank"
              className="rounded-xl border border-slate-200 dark:border-indigo-500/25 bg-white/70 dark:bg-[#070814]/75 hover:bg-slate-50 dark:hover:bg-indigo-950/30 dark:hover:border-indigo-400/45 text-slate-800 dark:text-indigo-200 font-bold text-[13.5px] px-6 py-2.5 lg:py-2 flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer w-full sm:w-auto"
            >
              <span>Download Resume</span>
              <MdOutlineCloudDownload className="w-4 h-4 text-indigo-600 dark:text-indigo-455" />
            </a>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4.5 mt-8 lg:mt-5"
          >
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="flex flex-col py-3 px-5 rounded-2xl border border-slate-200/40 dark:border-indigo-500/15 bg-white/40 dark:bg-gradient-to-br dark:from-[#0B0D1B]/80 dark:to-[#05060C]/90 backdrop-blur-md shadow-lg shadow-indigo-950/5 dark:shadow-black/40 relative overflow-hidden group hover:scale-[1.02] hover:border-indigo-500/40 dark:hover:shadow-[0_0_20px_rgba(99,102,241,0.03)] transition-all duration-300 select-none text-left w-full"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-105 duration-300 shrink-0 ${stat.colorClass}`}>
                    {stat.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-[16px] sm:text-[18px] font-bold text-slate-900 dark:text-white font-outfit tracking-tight leading-tight">{stat.value}</div>
                    <div className="text-[12px] sm:text-[13px] font-medium text-slate-500 dark:text-slate-400 font-outfit mt-0.5 leading-tight">{stat.label}</div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-slate-200/50 dark:bg-indigo-950/30">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.barColor} transition-all duration-1000`} 
                    style={{ width: stat.progress }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        
        <div className="lg:col-span-6 flex justify-center items-center mt-8 lg:mt-0 relative select-none">
          
          
          <div className="absolute bottom-[-40px] right-[-30px] w-[350px] sm:w-[450px] opacity-25 dark:opacity-15 pointer-events-none z-0">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-indigo-400 dark:text-indigo-300">
              <path d="M10 80 C 40 10, 60 10, 100 80 C 130 150, 150 150, 190 80" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <path d="M10 95 C 40 25, 60 25, 100 95 C 130 165, 150 165, 190 95" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <path d="M10 110 C 40 40, 60 40, 100 110 C 130 180, 150 180, 190 110" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <path d="M10 125 C 40 55, 60 55, 100 125 C 130 195, 150 195, 190 125" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </svg>
          </div>

          <div className="max-md:px-2 relative w-[280px] sm:w-[340px] lg:w-[380px] h-[350px] sm:h-[420px] lg:h-[470px]">
            
            
            <div className="absolute top-[22%] -left-[45px] sm:-left-[60px] z-30 bg-white/90 dark:bg-gradient-to-br dark:from-[#0B0D1A]/90 dark:to-[#05060C]/95 backdrop-blur-sm border border-slate-200/50 dark:border-indigo-500/25 rounded-2xl p-3 shadow-xl shadow-indigo-950/5 dark:shadow-black/40 hover:border-indigo-500/45 dark:hover:shadow-[0_0_15px_rgba(99,102,241,0.05)] transition-colors duration-300 select-none w-[70px] sm:w-[85px] flex flex-col items-center gap-1.5 animate-float-badge">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/55 flex items-center justify-center border dark:border-indigo-500/20 text-[#00D8FF]">
                <FaReact className="w-5.5 h-5.5 animate-[spin_15s_linear_infinite]" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 dark:text-slate-200">React</span>
            </div>

            
            <div className="absolute top-[48%] -right-[40px] sm:-right-[55px] z-30 bg-white/90 dark:bg-gradient-to-br dark:from-[#0B0D1A]/90 dark:to-[#05060C]/95 backdrop-blur-sm border border-slate-200/50 dark:border-indigo-500/25 rounded-2xl p-3 shadow-xl shadow-indigo-950/5 dark:shadow-black/40 hover:border-indigo-500/45 dark:hover:shadow-[0_0_15px_rgba(99,102,241,0.05)] transition-colors duration-300 select-none w-[70px] sm:w-[85px] flex flex-col items-center gap-1.5 animate-float-badge-delayed">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/55 flex items-center justify-center border dark:border-indigo-500/20 text-[#F7DF1E]">
                <FaJs className="w-5.5 h-5.5" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 dark:text-slate-200">JavaScript</span>
            </div>

            
            <div className="absolute bottom-[10%] -left-[30px] sm:-left-[45px] z-30 bg-white/90 dark:bg-gradient-to-br dark:from-[#0B0D1A]/90 dark:to-[#05060C]/95 backdrop-blur-sm border border-slate-200/50 dark:border-indigo-500/25 rounded-2xl p-3 shadow-xl shadow-indigo-950/5 dark:shadow-black/40 hover:border-indigo-500/45 dark:hover:shadow-[0_0_15px_rgba(99,102,241,0.05)] transition-colors duration-300 select-none w-[70px] sm:w-[85px] flex flex-col items-center gap-1.5 animate-float-badge">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/55 flex items-center justify-center border dark:border-indigo-500/20 text-[#5FA04E]">
                <FaNodeJs className="w-5.5 h-5.5" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 dark:text-slate-200">Node.js</span>
            </div>

            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-full rounded-[2rem] bg-gradient-to-tr from-[#9876FF] via-[#7B5CF5]/90 to-[#B470FF]/90 shadow-2xl dark:shadow-[0_20px_50px_rgba(123,92,245,0.18)] p-6 relative flex flex-col border border-white/20 dark:border-[#B470FF]/20 overflow-hidden"
              style={{
                transform: "perspective(1000px) rotateX(10deg) rotateY(-15deg) rotateZ(-2deg)",
                transformStyle: "preserve-3d",
              }}
            >
              
              <div className="flex justify-between items-center w-full pb-4 border-b border-white/10" style={{ transform: "translateZ(10px)" }}>
                
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
                </div>
                
                <div className="flex flex-col gap-1 w-4 cursor-pointer opacity-70">
                  <div className="h-[2px] w-full bg-white rounded-full"></div>
                  <div className="h-[2px] w-3/4 bg-white rounded-full self-end"></div>
                </div>
              </div>

              
              <div className="flex-1 flex relative items-stretch mt-4" style={{ transform: "translateZ(15px)", transformStyle: "preserve-3d" }}>
                
                
                <div 
                  className="absolute left-0 bottom-[15%] text-white select-none z-10 font-serif italic text-base sm:text-lg lg:text-xl leading-tight font-light drop-shadow-sm flex flex-col gap-1"
                  style={{ transform: "translateZ(25px)" }}
                >
                </div>

                
                <div className="flex flex-col gap-2.5 mt-4 w-1/2 opacity-25 select-none" style={{ transform: "translateZ(5px)" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div className="h-1.5 w-16 bg-white rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2 pl-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/90"></div>
                    <div className="h-1.5 w-24 bg-white/90 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                    <div className="h-1.5 w-20 bg-white/70 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2 pl-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/80"></div>
                    <div className="h-1.5 w-16 bg-white/80 rounded-full"></div>
                  </div>
                </div>

                
                <img
                  src={kapilYadav}
                  alt="Kapil Yadav"
                  className="absolute -bottom-6 right-4 sm:right-6 w-[70%] sm:w-[76%] max-w-none z-50 pointer-events-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.2)] object-contain origin-bottom-right scale-115"
                  style={{
                    transform: "translateZ(30px)",
                  }}
                />

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Hero;
