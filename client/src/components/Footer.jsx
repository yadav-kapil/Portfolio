import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaTwitter
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  LuMail,
  LuMapPin,
  LuClock,
  LuChevronRight,
  LuArrowUp,
  LuZap,
  LuShield,
  LuHeart,
  LuSend,
  LuArrowRight
} from "react-icons/lu";

const Footer = () => {
  const [subscribeState, setSubscribeState] = useState("");
  const subscribeRef = useRef();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = subscribeRef.current.value.trim();

    if (!email) {
      toast.warning("Please Enter A Valid Email");
      return;
    }
    try {
      setSubscribeState("loading");

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URI}/api/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      setTimeout(() => {
        setSubscribeState("");
        subscribeRef.current.value = "";
        toast.success("Subscribed Successfully :)");
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        console.error(error);
        setSubscribeState("");
        toast.error("Something Went Wrong !");
      }, 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-indigo-50/15 via-white to-purple-50/15 dark:from-[#030308]/96 dark:via-[#090B19]/96 dark:to-[#020205]/98 transition-colors duration-300 pt-12 pb-12 px-6 sm:px-12 lg:px-24">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="absolute inset-0 bg-[radial-gradient(#c7d2fe_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#312e81_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-45 dark:opacity-30 pointer-events-none z-0"></div>

      <div className="absolute top-[30%] left-[-150px] w-[450px] h-[450px] rounded-full border border-indigo-200/20 dark:border-indigo-500/10 pointer-events-none z-0"></div>
      <div className="absolute top-[35%] left-[-100px] w-[350px] h-[350px] rounded-full border border-dashed border-indigo-200/25 dark:border-indigo-500/15 pointer-events-none z-0 animate-[spin_100s_linear_infinite]"></div>

      <div className="absolute bottom-[20%] right-[-100px] text-purple-400/40 dark:text-purple-500/25 animate-pulse pointer-events-none z-0">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
        </svg>
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -12, scale: 1.015 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-white/70 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.08] backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
        >

          <div className="absolute right-[-5%] top-[10%] w-[120px] h-[120px] rounded-full bg-gradient-to-br from-indigo-500 to-purple-650 blur-sm opacity-60 dark:opacity-40 animate-bounce pointer-events-none" />
          <div className="absolute left-[-2%] top-[40%] w-[45px] h-[45px] rounded-full bg-gradient-to-br from-pink-500 to-purple-500 blur-sm opacity-50 dark:opacity-30 pointer-events-none animate-pulse" />

          <div className="absolute inset-0 pointer-events-none z-0 opacity-15 dark:opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none">
              <path d="M0 150 C 300 200, 700 80, 1000 150" fill="none" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="5 5" />
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">

            <div className="max-w-xl relative">
              
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 dark:border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/8 dark:to-purple-500/8 w-fit select-none hover:border-indigo-500/40 hover:shadow-[0_2px_12px_rgba(99,102,241,0.15)] transition-all duration-300 mb-4">
                <span className="text-indigo-500 dark:text-indigo-400 animate-pulse">
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
                  </svg>
                </span>
                <span className="text-[10px] font-black tracking-[0.25em] text-indigo-650 dark:text-purple-300 font-manrope uppercase">
                  LET'S STAY IN TOUCH
                </span>
              </div>

              
              <h2 className="text-3xl sm:text-4xl font-black font-outfit tracking-tight text-slate-900 dark:text-white leading-tight">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">
                  Amazing Together 🚀
                </span>
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-450 mt-4 leading-relaxed font-inter">
                Get updates about my latest projects, tech insights, and things I'm building.
              </p>

              
              <div className="absolute top-[10%] right-[-10%] w-[120px] h-[60px] pointer-events-none z-0 hidden lg:block text-indigo-400 dark:text-indigo-655">
                <svg className="w-full h-full" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 45 C 30 20, 70 40, 95 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
                  <path d="M90 10 L95 10 L95 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            
            <div className="flex flex-col gap-6 w-full lg:w-auto">
              
              <form onSubmit={handleSubscribe} className="relative flex items-center w-full lg:w-[450px]">
                <input
                  ref={subscribeRef}
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4.5 rounded-full border border-slate-200 dark:border-white/[0.08] bg-white/80 dark:bg-[#07081A]/40 text-sm font-semibold text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 pr-36 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 hover:border-slate-300 dark:hover:border-white/10 transition-all font-manrope shadow-sm"
                />
                <motion.button
                  type="submit"
                  disabled={subscribeState === "loading"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  className="absolute right-2 top-2 bg-gradient-to-r from-indigo-500 to-purple-650 hover:opacity-95 text-white font-bold text-[10px] uppercase tracking-wider font-mono px-5 py-3 rounded-full shadow-md flex items-center gap-1.5 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {subscribeState === "loading" ? "Subscribing" : "Notify Me"}
                  <LuSend className="w-3 h-3" />
                </motion.button>
              </form>

              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 p-3 rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.04] shadow-sm select-none"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/15 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    <LuZap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-1 font-outfit">Quick Updates</div>
                    <div className="text-[7.5px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-wider font-mono leading-none">No spam, just value</div>
                  </div>
                </motion.div>

                
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 p-3 rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.04] shadow-sm select-none"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 dark:bg-green-500/15 flex items-center justify-center text-green-600 dark:text-green-400">
                    <LuShield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-1 font-outfit">100% Privacy</div>
                    <div className="text-[7.5px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-wider font-mono leading-none">Your data is safe</div>
                  </div>
                </motion.div>

                
                <motion.div 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 p-3 rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-slate-100 dark:border-white/[0.04] shadow-sm select-none"
                >
                  <div className="w-8 h-8 rounded-lg bg-pink-500/10 dark:bg-pink-500/15 flex items-center justify-center text-pink-600 dark:text-pink-400">
                    <LuHeart className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-1 font-outfit">Only Good Stuff</div>
                    <div className="text-[7.5px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-wider font-mono leading-none">Projects & insights</div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </motion.div>

        
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-12 gap-10 mt-16 max-w-6xl mx-auto relative z-10 text-left"
        >
          
          
          <div className="col-span-2 lg:col-span-4 flex flex-col gap-6">
            
            
            <div className="flex items-center gap-2 font-mono text-xl font-bold select-none text-slate-850 dark:text-white leading-none">
              <span className="text-indigo-500">{`{`}</span>
              <span className="tracking-widest">kapil</span>
              <span className="text-indigo-500">{`}`}</span>
              <span className="text-indigo-500 animate-pulse">✦</span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-450 leading-relaxed font-inter max-w-xs">
              Backend Developer who loves building scalable, secure and high-performance applications.
            </p>

            
            <div className="flex flex-col gap-3 font-manrope font-semibold text-xs text-slate-600 dark:text-slate-350">
              
              
              <a href="mailto:ky843622@gmail.com" className="flex items-center gap-2.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <LuMail className="w-4.5 h-4.5 text-indigo-500 shrink-0" />
                <span>ky843622@gmail.com</span>
              </a>

              
              <div className="flex items-center gap-2.5 text-slate-600 dark:text-slate-350">
                <LuMapPin className="w-4.5 h-4.5 text-indigo-500 shrink-0" />
                <span>Noida, Uttar Pradesh</span>
              </div>

              
              <div className="flex items-center gap-2.5 select-none text-slate-500 dark:text-slate-400">
                <div className="w-4.5 h-4.5 flex items-center justify-center shrink-0">
                  <LuClock className="w-4.5 h-4.5 text-indigo-500" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  <span>Available for opportunities</span>
                </div>
              </div>

            </div>

            
            <div className="flex items-center gap-2.5">
              {[
                { icon: <FaGithub className="w-4 h-4" />, link: "https://github.com/yadav-kapil" },
                { icon: <FaLinkedinIn className="w-4 h-4" />, link: "https://www.linkedin.com/in/kapilyadav9560/" },
                { icon: <FaInstagram className="w-4 h-4" />, link: "https://www.instagram.com/_yadav__kapil_/" },
                { icon: <FaEnvelope className="w-4 h-4" />, link: "mailto:ky843622@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200/60 dark:border-transparent flex items-center justify-center text-slate-655 dark:text-slate-355 hover:bg-indigo-50 hover:text-indigo-650 dark:hover:bg-white/[0.08] dark:hover:text-white shadow-sm transition-colors duration-200 cursor-pointer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

          </div>

          
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-[10px] font-black tracking-[0.25em] text-indigo-650 dark:text-purple-300 font-mono uppercase mb-4 select-none">
              + Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "#" },
                { label: "About Me", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Education", href: "#education" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-1 text-xs text-slate-500 dark:text-slate-450 hover:text-indigo-600 dark:hover:text-indigo-400 font-manrope font-bold transition-all duration-200"
                  >
                    <span>{item.label}</span>
                    <LuChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-[10px] font-black tracking-[0.25em] text-indigo-650 dark:text-purple-300 font-mono uppercase mb-4 select-none">
              + Resources
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Resume", href: "https://drive.google.com/file/d/1QGK9XuHoT_tlNwpXFXTBgfFbzr1gg2fI/view?usp=sharing" },
                { label: "Hire Me", href: "https://www.linkedin.com/in/kapilyadav9560/" },
                { label: "Blog", href: "#" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-1 text-xs text-slate-500 dark:text-slate-455 hover:text-indigo-600 dark:hover:text-indigo-400 font-manrope font-bold transition-all duration-200"
                  >
                    <span>{item.label}</span>
                    <LuChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-[10px] font-black tracking-[0.25em] text-indigo-650 dark:text-purple-300 font-mono uppercase mb-4 select-none">
              + Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "GitHub", icon: <FaGithub className="w-3.5 h-3.5 shrink-0" />, href: "https://github.com/yadav-kapil" },
                { label: "LinkedIn", icon: <FaLinkedinIn className="w-3.5 h-3.5 shrink-0" />, href: "https://www.linkedin.com/in/kapilyadav9560/" },
                { label: "Email Me", icon: <FaEnvelope className="w-3.5 h-3.5 shrink-0" />, href: "mailto:ky843622@gmail.com" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-455 hover:text-indigo-600 dark:hover:text-indigo-400 font-manrope font-bold transition-all duration-200"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    <LuChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-4 relative">
            <h3 className="text-[10px] font-black tracking-[0.25em] text-indigo-650 dark:text-purple-300 font-mono uppercase select-none">
              + Let's Connect
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-455 leading-relaxed font-inter">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="group py-2 rounded-xl bg-linear-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:opacity-95 text-white font-bold font-mono text-[10px] uppercase tracking-wider shadow-md hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center w-full px-1"
            >
              <span>Start a Conversation</span>
              <LuArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>

            <div className="w-[120px] h-[55px] text-indigo-550/30 select-none pointer-events-none mt-2 relative mx-auto hidden lg:block">
              <svg className="w-full h-full" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 40 C 25 35, 30 15, 60 25 C 70 30, 80 20, 85 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
                <path d="M80 10 L85 10 L85 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-slate-200/60 dark:border-white/[0.08] mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono font-bold text-slate-400 dark:text-slate-600 select-none max-w-6xl mx-auto z-10 relative"
        >

          <p>© {new Date().getFullYear()} Kapil Yadav. All rights reserved.</p>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-200/25 dark:border-white/[0.04] bg-white/40 dark:bg-white/[0.01] shadow-sm">
            <LuHeart className="w-3 h-3 text-red-500 animate-pulse" />
            <span>Made with passion & JavaScript</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 hover:text-indigo-650 dark:hover:text-indigo-400 transition-colors cursor-pointer font-bold uppercase tracking-wider"
          >
            <span>Back to Top</span>
            <div className="w-5.5 h-5.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200/60 dark:border-transparent flex items-center justify-center shadow-sm">
              <LuArrowUp className="w-3.5 h-3.5 text-indigo-500" />
            </div>
          </motion.button>

        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
