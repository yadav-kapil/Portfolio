import { useContext, useState } from "react";
import { ThemeContext } from "../store/themeContext";
import { motion, AnimatePresence } from "motion/react";

// React-Icons
import { FiMoon } from "react-icons/fi";
import { LuSun, LuArrowRight } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  const [isSidebarOpen, setSidebarState] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.6 }}
        className="
          fixed top-4 left-0 right-0 mx-auto w-[92%] max-w-7xl z-50
          flex justify-between items-center
          px-6 md:px-10 py-3.5
          backdrop-blur-md rounded-2xl
          border border-slate-200/50 dark:border-indigo-500/20
          font-medium font-outfit
          bg-white/70 dark:bg-[#070815]/75
          shadow-lg shadow-indigo-950/5 dark:shadow-[0_20px_40px_rgba(0,0,0,0.7),_0_0_25px_rgba(99,102,241,0.08)]
        "
      >
        <a href="#home" className="flex flex-col relative group cursor-pointer select-none">
          <div className="flex items-center gap-1.5">
            <div className="text-xl font-extrabold tracking-tight flex items-center font-outfit">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-sans">{"{"}</span>
              <span className="text-slate-900 dark:text-white px-0.5">kapil</span>
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-sans">{"}"}</span>
            </div>
            
            {/* Sparkle Icon */}
            <span className="text-indigo-500/80 animate-pulse mt-0.5">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0l3.09 8.91L24 12l-8.91 3.09L12 24l-3.09-8.91L0 12l8.91-3.09z" />
              </svg>
            </span>
          </div>
          {/* Decorative horizontal line and bead below logo */}
          <div className="absolute -bottom-2.5 left-0 w-full flex items-center">
            <div className="h-[1.5px] bg-gradient-to-r from-indigo-400 to-transparent w-8"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 -ml-1 border border-white dark:border-slate-950"></div>
          </div>
        </a>

        {/* Center Navigation Links (Desktop) */}
      <div className="hidden sm:flex items-center gap-7">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="relative py-1.5 text-[13.5px] font-semibold tracking-wide text-slate-600 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 group"
          >
            {item.label}
            {/* Hover bottom line */}
            <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
          </a>
        ))}
      </div>

        {/* Right Actions Block */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={handleToggleTheme}
            className="rounded-full border border-slate-200 dark:border-slate-800/40 p-2 text-slate-700 dark:text-indigo-400 bg-white/10 dark:bg-indigo-950/15 hover:bg-slate-100 dark:hover:bg-indigo-900/35 transition-all flex items-center justify-center cursor-pointer shadow-sm shadow-black/5"
          >
            {theme === "light" ? (
              <FiMoon className="w-[17px] h-[17px]" strokeWidth={2.5} />
            ) : (
              <LuSun className="w-[17px] h-[17px]" strokeWidth={2} />
            )}
          </button>

          {/* Let's Connect Button */}
          <a
            href="#contact"
            className="rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:opacity-95 text-white font-semibold text-[13px] px-5 py-2 flex items-center gap-1.5 shadow-md shadow-indigo-500/10 dark:shadow-indigo-500/20 hover:shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer max-sm:hidden"
          >
            <span>Let's Connect</span>
            <LuArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburg Trigger */}
          <button
            onClick={() => setSidebarState(true)}
            className="sm:hidden font-bold text-slate-800 dark:text-white p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg cursor-pointer"
          >
            <HiMenuAlt1 size={28} />
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer (Sidebar) - Kept outside of transformed/blur container to prevent sizing bugs */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarState(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm sm:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed top-0 right-0 z-50 w-72 h-screen bg-white/95 dark:bg-[#070810]/95 border-l dark:border-[#1E2245]/30 backdrop-blur-md shadow-2xl p-8 flex flex-col justify-between sm:hidden"
            >
              <div>
                <div className="flex justify-between items-center mb-10">
                  <div className="text-lg font-bold font-outfit">
                    <span className="text-indigo-500">{"{"}</span>
                    <span className="text-slate-900 dark:text-white"> kapil </span>
                    <span className="text-indigo-500">{"}"}</span>
                  </div>
                  <button
                    onClick={() => setSidebarState(false)}
                    className="p-1.5 rounded-full border border-slate-200 dark:border-[#1E2245]/50 text-slate-700 dark:text-indigo-400 hover:bg-slate-100 dark:hover:bg-indigo-950/40 transition-colors"
                  >
                    <IoCloseOutline size={22} />
                  </button>
                </div>

                <div className="flex flex-col gap-5">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setSidebarState(false)}
                      className="text-base font-semibold py-1.5 border-b border-slate-100 dark:border-[#1E2245]/20 text-slate-750 dark:text-slate-305 hover:text-indigo-650 dark:hover:text-indigo-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <a
                  href="#contact"
                  onClick={() => setSidebarState(false)}
                  className="rounded-xl w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold flex items-center justify-center gap-1.5 shadow-md shadow-indigo-500/20 hover:opacity-95 active:scale-[0.98] transition-all"
                >
                  <span>Let's Connect</span>
                  <LuArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
