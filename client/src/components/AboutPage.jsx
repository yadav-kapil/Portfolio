import kapilYadav from "../assets/kapilYadav.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { motion } from "motion/react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Services from "./Services";

const AboutPage = () => {
  return (
    <div
      id="about"
      className="
    relative w-full px-4 pb-16
    overflow-hidden
    bg-gradient-to-br 
    from-[#FAFBFD] via-white to-[#F1F5F9] 
    dark:from-[#0A0D1A] dark:via-[#0E1229] dark:to-[#05070E]
    transition-colors duration-300
  "
    >
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-40 animate-float-slow"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl opacity-40 animate-float-delayed"></div>

      {/* MAIN HEADING */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="flex flex-col items-center pt-10 z-40 gap-2"
        viewport={{ once: true }}
      >
      
        <h1
          className="
          text-5xl max-md:text-3xl
          font-outfit font-extrabold
          tracking-tight
          bg-gradient-to-r from-primary via-indigo-500 to-violet-600
          bg-clip-text text-transparent
        "
        >
          ABOUT ME
        </h1>
      </motion.div>

      <div className="flex max-md:flex-col-reverse justify-center items-center md:mt-8">
        {/* SERVICES */}
        <div className="w-5/12 max-md:w-[80%] px-2 max-md:mt-18">
          <Services />
        </div>

        {/* CONTENT */}
        <div
          className="
          right max-md:w-[90%] md:w-7/12
          flex flex-col
          mx-4 md:mx-0 mt-8

          p-8 md:p-10 
          rounded-3xl

          backdrop-blur-xl
          bg-white/60 dark:bg-white/5

          border border-white/40 dark:border-white/10

          shadow-lg shadow-primary/10
          hover:shadow-primary/30
          hover:-translate-y-2

          transition-all duration-500 ease-out
        "
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
              className="
                mb-6 text-3xl max-md:text-2xl
                font-semibold font-manrope
                tracking-tight
                text-slate-900 dark:text-white
              "
            >
              Who is{" "}
              <span
                className="
                font-outfit font-semibold
                bg-gradient-to-r from-primary to-violet-500
                bg-clip-text text-transparent
              "
              >
                Kapil Yadav
              </span>{" "}
              👋
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="
                mb-6 text-lg leading-relaxed
                font-inter
                tracking-wide
                text-slate-700 dark:text-slate-300
              "
            >
              I’m a{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Full Stack Web Developer
              </span>{" "}
              focused on building clean, modern websites with smooth animations
              and intuitive user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
              className="
                mb-6 text-base leading-relaxed
                font-inter
                tracking-wide
                text-slate-600 dark:text-slate-400
              "
            >
              Currently, I’m a{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                B.Tech 1st Year student
              </span>{" "}
              with a strong foundation in web development, creating complete
              applications from frontend to backend.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="
                text-base leading-relaxed
                font-inter
                tracking-wide
                text-slate-600 dark:text-slate-400
              "
            >
              I primarily work with the{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                MERN stack
              </span>{" "}
              (MongoDB, Express, React, Node.js), along with{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Tailwind CSS
              </span>{" "}
              and animation libraries (such as Framer Motion) to deliver fast,
              responsive, and visually polished digital experiences.
            </motion.p>
          </div>

          {/* CONNECT SECTION */}
          <div className="connect mt-12 flex max-md:flex-col gap-4 items-center w-full justify-start">
            <motion.a
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              href="#contact"
              className="
                  relative group
                  flex items-center justify-center gap-2
                  rounded-xl px-5 py-2.5
                  font-bold font-outfit text-sm
                  bg-gradient-to-r from-primary to-violet-600
                  hover:shadow-lg hover:shadow-primary/30
                  text-white
                  border border-white/10
                  transition-all duration-300 ease-out
                  cursor-pointer
                "
            >
              Let's Connect
              <FaArrowAltCircleRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="social flex items-center gap-2 flex-wrap"
            >
              <a
                href="https://www.linkedin.com/in/kapilyadav9560/"
                target="_blank"
                className="bg-white/80 dark:bg-white/5 text-slate-800 dark:text-slate-200 rounded-full px-3.5 py-1.5 group flex items-center gap-1.5 border border-slate-200/50 dark:border-white/10 shadow-sm hover:shadow-md hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300"
              >
                <span className="max-md:hidden max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[95px] transition-all duration-500 font-semibold font-outfit text-xs">
                  LinkedIn
                </span>
                <FaLinkedinIn
                  size={15}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="https://www.instagram.com/_yadav__kapil_"
                target="_blank"
                className="bg-white/80 dark:bg-white/5 text-slate-800 dark:text-slate-200 rounded-full px-3.5 py-1.5 group flex items-center gap-1.5 border border-slate-200/50 dark:border-white/10 shadow-sm hover:shadow-md hover:bg-pink-600 dark:hover:bg-pink-600 hover:text-white dark:hover:text-white transition-all duration-300"
              >
                <span className="max-md:hidden max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[95px] transition-all duration-500 font-semibold font-outfit text-xs">
                  Instagram
                </span>
                <FaInstagram
                  size={15}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="https://wa.me/9560340701"
                target="_blank"
                className="bg-white/80 dark:bg-white/5 text-slate-800 dark:text-slate-200 rounded-full px-3.5 py-1.5 group flex items-center gap-1.5 border border-slate-200/50 dark:border-white/10 shadow-sm hover:shadow-md hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white dark:hover:text-white transition-all duration-300"
              >
                <span className="max-md:hidden max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[95px] transition-all duration-500 font-semibold font-outfit text-xs">
                  WhatsApp
                </span>
                <FaWhatsapp
                  size={15}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="https://github.com/yadav-kapil"
                target="_blank"
                className="bg-white/80 dark:bg-white/5 text-slate-800 dark:text-slate-200 rounded-full px-3.5 py-1.5 group flex items-center gap-1.5 border border-slate-200/50 dark:border-white/10 shadow-sm hover:shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-700 hover:text-white dark:hover:text-white transition-all duration-300"
              >
                <span className="max-md:hidden max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[95px] transition-all duration-500 font-semibold font-outfit text-xs">
                  GitHub
                </span>
                <FiGithub
                  size={15}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div id="skills"></div>
    </div>
  );
};

export default AboutPage;
