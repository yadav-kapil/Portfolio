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
    from-[#eef2ff] via-white to-[#f8faff] 
    dark:from-[#0f1226] dark:via-[#121633] dark:to-[#0b0e1d]
  "
    >
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/30 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl opacity-30"></div>

      {/* MAIN HEADING */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="flex justify-center pt-10 z-40"
        viewport={{ once: true }}
      >
        <h1
          className="
          text-5xl max-md:text-3xl
          font-outfit font-extrabold
          tracking-tight
          bg-gradient-to-r from-primary to-violet-600
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
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2 }}
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

          {/* CONNECT SECTION (UNCHANGED) */}
          <div className="connect mt-24 flex max-md:flex-col gap-4 items-center">
            <motion.a
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              href="#contact"
              className="
                  relative group
                  flex items-center gap-2
                  rounded-xl px-2 py-2
                  font-bold font-outfit
                  border border-primary/20
                  shadow-sm shadow-primary/15
                  hover:shadow-md hover:shadow-primary/25
                  hover:scale-90
                  hover:bg-violet-700
                  bg-primary
                  border-white/20
                  text-white
                  dark:shadow-black/40
                  transition-all duration-300 ease-out
                "
            >
              <p className="md:translate-x-3 md:group-hover:translate-x-0 transition-all duration-500 cursor-pointer">
                Let's Connect
              </p>
              <FaArrowAltCircleRight className="max-md:hidden translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
            </motion.a>

            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="social flex items-center gap-1"
            >
              <a
                href="https://www.linkedin.com/in/kapilyadav9560/"
                target="_blank"
                className="bg-white text-primary rounded-full px-2 py-1 group flex items-center transition-all duration-500 ease-in-out border border-white/40 dark:border-white/10 shadow-lg shadow-primary/10
                hover:shadow-primary/30"
              >
                <span className="max-md:hidden max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[95px] transition-all duration-500 font-semibold font-outfit">
                  LinkedIn
                </span>
                <FaLinkedinIn
                  size={18}
                  className="transition-all duration-300 group-hover:w-0"
                />
              </a>

              <a
                href="https://www.instagram.com/_yadav__kapil_"
                target="_blank"
                className="bg-white text-primary rounded-full px-2 py-1 group flex items-center transition-all duration-500 ease-in-out border border-white/40 dark:border-white/10
                shadow-lg shadow-primary/10
                hover:shadow-primary/30"
              >
                <span className="max-md:hidden max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[95px] transition-all duration-500 font-semibold font-outfit">
                  Instagram
                </span>
                <FaInstagram
                  size={18}
                  className="transition-all duration-300 group-hover:w-0"
                />
              </a>

              <a
                href="https://wa.me/9560340701"
                target="_blank"
                className="bg-white text-primary rounded-full px-2 py-1 group flex items-center transition-all duration-500 ease-in-out border border-white/40 dark:border-white/10
                shadow-lg shadow-primary/10
                hover:shadow-primary/30"
              >
                <span className="max-md:hidden max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[95px] transition-all duration-500 font-semibold font-outfit">
                  WhatsApp
                </span>
                <FaWhatsapp
                  size={18}
                  className="transition-all duration-300 group-hover:w-0"
                />
              </a>

              <a
                href="https://github.com/yadav-kapil"
                target="_blank"
                className="bg-white text-primary rounded-full px-2 py-1 group flex items-center transition-all duration-500 ease-in-out border border-white/40 dark:border-white/10
                shadow-lg shadow-primary/10
                hover:shadow-primary/30"
              >
                <span className="max-md:hidden max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[95px] transition-all duration-500 font-semibold font-outfit">
                  GitHub
                </span>
                <FiGithub
                  size={18}
                  className="transition-all duration-300 group-hover:w-0"
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
