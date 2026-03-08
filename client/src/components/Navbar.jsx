import { useContext, useState } from "react";
import { ThemeContext } from "../store/themeContext";
import { motion } from "motion/react";

// React-Icons
import { FiMoon } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";
import { CiLinkedin } from "react-icons/ci";

const Navbar = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  const [isSidebarOpen, setSidebarState] = useState(false);

  const isMobile = window.matchMedia("(max-width: 639px)").matches;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
        filter: "blur(1px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
      viewport={{ once: true }}
      className="
    fixed top-0 w-full z-50
    flex justify-between items-center
    px-6 sm:px-12 md:px-16 lg:px-24 xl:px-40 py-4
    backdrop-blur-xl
    font-medium
    bg-white/50
    dark:bg-gray-900/70
  "
    >
      <div className="text-xl font-bold">
        <span className="text-primary">{"{ "}</span>
        <span className="text-black dark:text-white">kapil</span>
        <span className="text-primary">{" }"}</span>
      </div>

      <div
        className={`
        tabs flex gap-5
        text-gray-700 dark:text-white
        sm:flex-row sm:static sm:w-auto sm:h-auto sm:bg-transparent sm:p-0 sm:translate-x-0
        sm:items-center

        max-sm:flex-col
        max-sm:fixed top-0 right-0
        max-sm:w-60 max-sm:h-screen
        max-sm:pt-40 max-sm:pl-10
        max-sm:bg-primary max-sm:text-white

        transition-transform duration-500 ease-out
        ${
          isSidebarOpen
            ? "max-sm:translate-x-0 max-sm:opacity-100"
            : "max-sm:translate-x-full max-sm:opacity-80"
        }`}
      >
        <button
          onClick={() => setSidebarState(false)}
          className="sm:hidden absolute top-10 right-10"
        >
          <IoCloseOutline size={35} />
        </button>
        <a
          onClick={() => setSidebarState(false)}
          href="#home"
          className="sm:hover:border-b transition-all"
        >
          Home
        </a>
        <a
          onClick={() => setSidebarState(false)}
          href="#about"
          className="sm:hover:border-b transition-all"
        >
          About
        </a>
        <a
          onClick={() => setSidebarState(false)}
          href="#skills"
          className="sm:hover:border-b transition-all"
        >
          Skills
        </a>
        <a
          onClick={() => setSidebarState(false)}
          href="#education"
          className="sm:hover:border-b transition-all"
        >
          Education
        </a>
        <a
          onClick={() => setSidebarState(false)}
          href="#projects"
          className="sm:hover:border-b transition-all"
        >
          Projects
        </a>

        <a
          href="https://www.linkedin.com/in/kapilyadav9560/"
          target="_blank"
          className="rounded-full px-4 py-1 flex items-center justify-center gap-1 bg-white text-primary font-bold cursor-pointer hover:scale-x-105 hover:bg-[#8f8f8f] transition-all sm:hidden absolute bottom-28 m-auto"
        >
          <p>Contact</p>
          <LuArrowRight />
        </a>
      </div>

      <div className="navBtn font-medium flex gap-5">
        <button
          onClick={handleToggleTheme}
          className="rounded-full border p-2 text-black dark:text-white transition-all"
        >
          {theme === "light" ? (
            <FiMoon strokeWidth={2.5} />
          ) : (
            <LuSun strokeWidth={2} />
          )}
        </button>
        <button
          onClick={() => setSidebarState(true)}
          className="sm:hidden font-bold text-black dark:text-white"
        >
          <HiMenuAlt1 size={35} />
        </button>
        <a
          href="https://www.linkedin.com/in/kapilyadav9560/"
          target="_blank"
          className="rounded-full max-md:px-2 px-4 py-1 flex items-center gap-1 bg-primary text-white cursor-pointer hover:scale-105 hover:bg-[#4338CA] transition-all max-sm:hidden"
        >
          <p className="max-md:hidden">Contact</p>
          <LuArrowRight className="max-md:hidden" />
          <CiLinkedin size={24} className="md:hidden" />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
