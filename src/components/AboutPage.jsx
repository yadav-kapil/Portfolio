import kapilYadav from "../assets/kapilYadav.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { motion } from "motion/react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div
      className="
    pb-12 px-4
    bg-[#F4F6FF] dark:bg-[#121633]

  "
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.1}}
        className="flex justify-center pt-6 text-black dark:text-white text-5xl font-outfit font-bold"
      >
        <h1> ABOUT ME </h1>
      </motion.div>
      <div className="flex max-md:flex-col justify-center items-center mt-12">
        <div className="left flex justify-center items-center">
          <img
            src={kapilYadav}
            alt="logo"
            className="w-2/3 max-md:w-3/4 bg-white rounded-full border px-18"
          />
        </div>

        <div className="right md:w-1/2 flex flex-col max-md:items-center mx-4 max-md:mx-8 mt-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{once:true}}
              className="mb-4 text-3xl font-semibold font-manrope text-gray-900 dark:text-white"
            >
              Who is{" "}
              <span className="font-outfit text-primary dark:text-[#C9CCFF]">
                Kapil Yadav
              </span>{" "}
              👋
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{once:true}}
              className="mb-4 text-lg leading-relaxed font-inter text-gray-700 dark:text-[#E3E5FF]"
            >
              I’m a{" "}
              <span className="font-outfit font-medium text-gray-900 dark:text-white">
                Full Stack Web Developer
              </span>{" "}
              focused on building clean, modern websites with smooth animations
              and intuitive user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{once:true}}
              className="mb-4 text-base leading-relaxed font-inter text-gray-600 dark:text-[#C9CCFF]"
            >
              Currently, I’m a{" "}
              <span className="font-outfit font-medium text-gray-900 dark:text-white">
                B.Tech 1st Year student
              </span>{" "}
              with a strong foundation in web development, creating complete
              applications from frontend to backend.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{once:true}}
              className="text-base leading-relaxed font-inter text-gray-600 dark:text-[#C9CCFF]"
            >
              I primarily work with the{" "}
              <span className="font-outfit font-medium text-gray-900 dark:text-white">
                MERN stack
              </span>{" "}
              (MongoDB, Express, React, Node.js), along with{" "}
              <span className="font-outfit font-medium text-gray-900 dark:text-white">
                Tailwind CSS
              </span>{" "}
              and animation libraries (such as Framer Motion) to deliver fast,
              responsive, and visually polished digital experiences.
            </motion.p>
          </div>
          <div className="connect mt-24 flex max-md:flex-col gap-4 items-center">
            <motion.button
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="
                  relative group
                  flex items-center gap-2
                  rounded-xl px-2 py-1
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
            </motion.button>
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="social flex items-center gap-1"
            >
              <a
                href="#"
                className="bg-white text-primary rounded-full px-2 py-1
             group flex items-center
             transition-all duration-500 ease-in-out"
              >
                <span
                  className="max-md:hidden max-w-0 overflow-hidden whitespace-nowrap
               group-hover:max-w-[95px]
               transition-all duration-500 font-semibold font-outfit"
                >
                  LinkedIn
                </span>
                <FaLinkedinIn
                  size={18}
                  className="transition-all duration-300 group-hover:w-0"
                />
              </a>

              <a
                href="#"
                className="bg-white text-primary rounded-full px-2 py-1
             group flex items-center
             transition-all duration-500 ease-in-out"
              >
                <span
                  className="max-md:hidden max-w-0 overflow-hidden whitespace-nowrap
               group-hover:max-w-[95px]
               transition-all duration-500 font-semibold font-outfit"
                >
                  Instagram
                </span>
                <FaInstagram
                  size={18}
                  className="transition-all duration-300 group-hover:w-0"
                />
              </a>

              <a
                href="#"
                className="bg-white text-primary rounded-full px-2 py-1
             group flex items-center
             transition-all duration-500 ease-in-out"
              >
                <span
                  className="max-md:hidden max-w-0 overflow-hidden whitespace-nowrap
               group-hover:max-w-[95px]
               transition-all duration-500 font-semibold font-outfit"
                >
                  Twitter
                </span>
                <FaXTwitter
                  size={18}
                  className="transition-all duration-300 group-hover:w-0"
                />
              </a>

              <a
                href="#"
                className="bg-white text-primary rounded-full px-2 py-1
             group flex items-center
             transition-all duration-500 ease-in-out"
              >
                <span
                  className="max-md:hidden max-w-0 overflow-hidden whitespace-nowrap
               group-hover:max-w-[95px]
               transition-all duration-500 font-semibold font-outfit"
                >
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
      <div id="skills"> </div>
    </div>
  );
};

export default AboutPage;
