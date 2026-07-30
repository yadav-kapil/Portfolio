import { motion } from "motion/react";
import { Player } from "@lottiefiles/react-lottie-player";
import contactAnimation from "@/assets/videos/Support.json";
import { useRef, useState } from "react";
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaInstagram, 
  FaEnvelope 
} from "react-icons/fa";
import { 
  LuUser, 
  LuMail, 
  LuMapPin, 
  LuClock, 
  LuFileText, 
  LuPenTool, 
  LuLock, 
  LuSend, 
  LuArrowRight,
  LuBot
} from "react-icons/lu";

const ContactPage = ({ onOpenChat }) => {
  const [status, setStatus] = useState("");
  const [charCount, setCharCount] = useState(0);

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    const msgData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: `[Subject: ${subjectRef.current.value}] ${messageRef.current.value}`,
    };
    fetch(`${import.meta.env.VITE_SERVER_URI}/api/contactForm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(msgData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to send");
        }
        setTimeout(() => {
          setStatus("success");
          nameRef.current.value = "";
          emailRef.current.value = "";
          subjectRef.current.value = "";
          messageRef.current.value = "";
          setCharCount(0);

          setTimeout(() => {
            setStatus("");
          }, 10000);
        }, 1500);
      })
      .catch(() => {
        setTimeout(() => {
          setStatus("error");
          setTimeout(() => {
            setStatus("");
          }, 10000);
        }, 1500);
      });
  };

  return (
    <div
      id="contact"
      className="relative w-full overflow-hidden bg-gradient-to-br from-indigo-50/15 via-white to-purple-50/15 dark:from-[#030308]/96 dark:via-[#090B19]/96 dark:to-[#020205]/98 transition-colors duration-300 pt-20 pb-12 px-6 sm:px-12 lg:px-24"
    >
      
      <div className="absolute inset-0 bg-[radial-gradient(#c7d2fe_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#312e81_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-40 dark:opacity-30 pointer-events-none z-0"></div>

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full opacity-20 dark:opacity-[0.1]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <path 
            d="M-100 200 C 300 400, 700 100, 1100 300 C 1300 400, 1500 250, 1600 300" 
            fill="none" 
            stroke="#6366F1" 
            strokeWidth="1.5" 
            strokeDasharray="6 6" 
          />
          <path 
            d="M-50 700 C 400 600, 800 800, 1200 650 C 1350 600, 1500 700, 1650 680" 
            fill="none" 
            stroke="#A855F7" 
            strokeWidth="1.5" 
            strokeDasharray="6 6" 
          />
        </svg>
      </div>

      <div className="absolute top-[12%] left-[10%] text-indigo-400/40 animate-pulse pointer-events-none z-0">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
        </svg>
      </div>
      <div className="absolute top-[28%] right-[10%] text-purple-400/40 animate-pulse pointer-events-none z-0 delay-500">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M10 0l2.5 7.5 7.5 2.5-7.5 2.5-2.5 7.5-2.5-7.5-7.5-2.5 7.5-2.5z" />
        </svg>
      </div>
      <div className="absolute bottom-[8%] right-[5%] w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 blur-sm opacity-50 animate-bounce pointer-events-none z-0"></div>

      <div className="w-full max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-2 text-center mb-16 relative"
        >
          
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 dark:border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/8 dark:to-purple-500/8 w-fit select-none hover:border-indigo-500/40 hover:shadow-[0_2px_12px_rgba(99,102,241,0.15)] transition-all duration-300">
            <span className="text-indigo-500 dark:text-indigo-400 animate-pulse">
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
              </svg>
            </span>
            <span className="text-[10px] font-black tracking-[0.25em] text-indigo-650 dark:text-purple-300 font-manrope uppercase">
              LET'S CONNECT
            </span>
          </div>

          
          <h2 className="text-4xl sm:text-5xl font-black font-outfit tracking-tight text-slate-900 dark:text-white leading-tight mt-2">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent block mt-1 relative w-fit mx-auto">
              Amazing Together
              <span className="absolute bottom-1.5 left-0 w-full h-[3px] bg-indigo-500/30 rounded-full"></span>
            </span>
          </h2>

          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mt-4 font-inter leading-relaxed">
            Have a project in mind, a question, or just want to say hello?
            I'd love to hear from you!
          </p>

          
          <div className="absolute -top-6 right-[12%] lg:right-[18%] animate-float-slow hidden md:block">
            <svg className="w-16 h-16 text-indigo-500 filter drop-shadow-md" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M85 15L15 45L45 55L85 15Z" fill="#818CF8" />
              <path d="M85 15L45 55L55 85L85 15Z" fill="#6366F1" />
              <path d="M45 55L35 75V60L45 55Z" fill="#4F46E5" />
              <path d="M25 65 C 20 62, 10 65, 8 72 C 6 80, 18 85, 22 88" stroke="#818CF8" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
            </svg>
          </div>

          
          <div className="absolute top-[30%] left-[8%] lg:left-[12%] animate-float-delayed hidden md:block">
            <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/[0.04] border border-slate-100 dark:border-white/[0.06] shadow-md flex items-center justify-center text-indigo-500">
              <LuMail className="w-5 h-5" />
            </div>
          </div>
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.1 }}
          className="w-full bg-white dark:bg-[#07081A] border border-slate-200/60 dark:border-white/[0.06] shadow-xl dark:shadow-[0_24px_60px_rgba(0,0,0,0.6)] rounded-[2.5rem] p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-8 items-stretch relative overflow-hidden"
        >
          
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="w-full md:w-[380px] bg-gradient-to-br from-[#F0F2FE] to-[#E3E6FF] dark:from-[#11122D] dark:to-[#090A1E] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between shrink-0 border border-indigo-100/50 dark:border-indigo-950/40 relative overflow-hidden"
          >
            
            
            <div className="absolute top-[-20%] right-[-20%] w-[180px] h-[180px] rounded-full bg-indigo-400/10 blur-2xl pointer-events-none" />

            <div>
              
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-white/[0.06] text-[10px] font-extrabold uppercase tracking-wider text-indigo-650 dark:text-indigo-400 w-fit shadow-sm border border-indigo-100/30 dark:border-transparent select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Open to Opportunities
              </div>

              
              <div className="relative flex justify-center items-center py-6 h-56 select-none pointer-events-none">
                <div className="absolute w-40 h-40 rounded-full bg-indigo-500/5 blur-xl"></div>
                <Player
                  autoplay
                  loop
                  src={contactAnimation}
                  className="w-full h-full max-h-52 z-10"
                />
              </div>

              
              <div className="flex flex-col gap-3.5 mt-2">
                
                <motion.a 
                  href="mailto:ky843622@gmail.com" 
                  whileHover={{ y: -2, scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className="group/item flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-100 dark:border-white/[0.04] shadow-sm hover:border-indigo-400/40 dark:hover:border-indigo-500/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/15 flex items-center justify-center text-indigo-650 dark:text-indigo-400">
                      <LuMail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-slate-400 dark:text-slate-655 uppercase tracking-widest leading-none mb-1 font-mono">Email</div>
                      <div className="text-[11.5px] font-bold text-slate-800 dark:text-slate-200 leading-none">ky843622@gmail.com</div>
                    </div>
                  </div>
                  <LuArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/item:translate-x-1 group-hover/item:text-indigo-500 transition-all" />
                </motion.a>

                
                <motion.a 
                  href="https://maps.google.com/?q=Delhi+NCR,+India" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ y: -2, scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className="group/item flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-100 dark:border-white/[0.04] shadow-sm hover:border-indigo-400/40 dark:hover:border-indigo-500/40 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/15 flex items-center justify-center text-indigo-650 dark:text-indigo-400">
                      <LuMapPin className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-slate-400 dark:text-slate-655 uppercase tracking-widest leading-none mb-1 font-mono">Location</div>
                      <div className="text-[11.5px] font-bold text-slate-800 dark:text-slate-200 leading-none">Delhi NCR, India</div>
                    </div>
                  </div>
                  <LuArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/item:translate-x-1 group-hover/item:text-indigo-500 transition-all" />
                </motion.a>

                
                <motion.div 
                  whileHover={{ y: -2, scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className="group/item flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-100 dark:border-white/[0.04] shadow-sm hover:border-indigo-400/40 dark:hover:border-indigo-500/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/15 flex items-center justify-center text-indigo-650 dark:text-indigo-400">
                      <LuClock className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-slate-400 dark:text-slate-655 uppercase tracking-widest leading-none mb-1 font-mono">Response Time</div>
                      <div className="text-[11.5px] font-bold text-slate-800 dark:text-slate-200 leading-none">Within 24 hours</div>
                    </div>
                  </div>
                  <LuArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/item:translate-x-1 group-hover/item:text-indigo-500 transition-all" />
                </motion.div>

                
                <motion.button 
                  onClick={onOpenChat}
                  type="button" 
                  whileHover={{ y: -2, scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className="group/item flex items-center justify-between p-3.5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/10 border border-indigo-250/20 dark:border-indigo-950/40 shadow-sm hover:border-indigo-500/40 hover:shadow-indigo-500/5 transition-all duration-300 w-full text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/15 flex items-center justify-center text-indigo-650 dark:text-indigo-400">
                      <LuBot className="w-4.5 h-4.5 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-slate-400 dark:text-slate-655 uppercase tracking-widest leading-none mb-1 font-mono">Instant Support</div>
                      <div className="text-[11.5px] font-bold text-slate-800 dark:text-slate-200 leading-none">Ask Portfolio AI</div>
                    </div>
                  </div>
                  <LuArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover/item:translate-x-1 group-hover/item:text-indigo-500 transition-all" />
                </motion.button>
              </div>
            </div>

            
            <div className="mt-8 flex flex-col gap-3">
              <div className="text-[10px] font-bold text-indigo-950/60 dark:text-indigo-200/50 uppercase tracking-widest font-mono text-center">Let's connect across platforms</div>
              <div className="flex items-center justify-center gap-3">
                {[
                  { socialName: "GitHub", icon: <FaGithub className="w-4 h-4" />, link: "https://github.com/yadav-kapil" },
                  { socialName: "LinkedIn", icon: <FaLinkedinIn className="w-4 h-4" />, link: "https://www.linkedin.com/in/kapilyadav9560/" },
                  { socialName: "Instagram", icon: <FaInstagram className="w-4 h-4" />, link: "https://www.instagram.com/_yadav__kapil_/" },
                  { socialName: "Email", icon: <FaEnvelope className="w-4 h-4" />, link: "mailto:ky843622@gmail.com" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Connect via ${social.socialName}`}
                    whileHover={{ y: -3, scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-white dark:bg-white/[0.04] border border-indigo-100/40 dark:border-transparent flex items-center justify-center text-slate-600 dark:text-slate-355 hover:bg-indigo-50 hover:text-indigo-650 dark:hover:bg-white/[0.08] dark:hover:text-white shadow-sm transition-colors duration-200 cursor-pointer"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col justify-center px-2 py-4 md:px-6"
          >
            <form onSubmit={handleSubmit} className="space-y-6 w-full">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                <div className="flex flex-col gap-2">
                  <label className="text-[11.5px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-650 font-mono flex items-center gap-1.5">
                    <LuUser className="w-3.5 h-3.5 text-indigo-500" /> Your Name
                  </label>
                  <div className="relative">
                    <input
                      ref={nameRef}
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/[0.07] bg-slate-50/40 dark:bg-white/[0.02] text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 hover:border-slate-350 dark:hover:border-white/10 transition-all font-manrope text-[13px] font-semibold"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11.5px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-655 font-mono flex items-center gap-1.5">
                    <LuMail className="w-3.5 h-3.5 text-indigo-500" /> Your Email
                  </label>
                  <div className="relative">
                    <input
                      ref={emailRef}
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/[0.07] bg-slate-50/40 dark:bg-white/[0.02] text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 hover:border-slate-355 dark:hover:border-white/10 transition-all font-manrope text-[13px] font-semibold"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11.5px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-650 font-mono flex items-center gap-1.5">
                  <LuFileText className="w-3.5 h-3.5 text-indigo-500" /> Subject
                </label>
                <input
                  ref={subjectRef}
                  type="text"
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/[0.07] bg-slate-50/40 dark:bg-white/[0.02] text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 hover:border-slate-355 dark:hover:border-white/10 transition-all font-manrope text-[13px] font-semibold"
                />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-[11.5px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-655 font-mono flex items-center gap-1.5">
                  <LuPenTool className="w-3.5 h-3.5 text-indigo-500" /> Message
                </label>
                <textarea
                  ref={messageRef}
                  required
                  maxLength={500}
                  rows="5"
                  onChange={(e) => setCharCount(e.target.value.length)}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-white/[0.07] bg-slate-50/40 dark:bg-white/[0.02] text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 hover:border-slate-355 dark:hover:border-white/10 transition-all resize-none font-manrope text-[13px] font-semibold"
                ></textarea>

                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-600 font-mono text-right mt-1.5">
                  {charCount} / 500
                </div>
              </div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-4 py-3 text-xs font-bold font-mono uppercase tracking-wider text-green-700 dark:text-green-300 bg-green-500/10 border border-green-500/35 rounded-xl flex items-center gap-2"
                >
                  <span>Form Submitted Successfully ✅</span>
                </motion.div>
              )}

              {status === "loading" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-4 py-3 text-xs font-bold font-mono uppercase tracking-wider text-yellow-750 dark:text-yellow-450 bg-yellow-500/10 border border-yellow-500/35 rounded-xl flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-ping"></span>
                  <span>Connecting to Server...</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-4 py-3 text-xs font-bold font-mono uppercase tracking-wider text-red-700 dark:text-red-300 bg-red-500/10 border border-red-500/35 rounded-xl flex items-center gap-2"
                >
                  <span>Something went wrong ❌</span>
                </motion.div>
              )}

              <div className="pt-2 flex flex-col gap-4">
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="group/btn w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white font-bold tracking-wider font-mono text-[12px] uppercase shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:opacity-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <LuSend className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  {status === "loading" ? "Sending..." : "Send Message"}
                </motion.button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-slate-400 dark:text-slate-600 font-mono select-none">
                  <LuLock className="w-3 h-3 text-indigo-500" />
                  <span>Your information is safe and will never be shared.</span>
                </div>
              </div>

            </form>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
};

export default ContactPage;
