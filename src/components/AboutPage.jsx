import kapilYadav from "../assets/kapilYadav.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { motion } from "motion/react";
import { FaArrowAltCircleRight } from "react-icons/fa";


const AboutPage = () => {
  return (
    <div className="bg-primary pb-12 px-4">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, delay: 0.1 }}
        className="flex justify-center pt-6 text-white text-5xl font-bold"
      >
        <h1>-- ABOUT ME --</h1>
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
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <h2 className="mb-4 text-3xl font-semibold text-white">
              Who is <span className="text-[#C9CCFF]">Kapil Yadav</span> 👋
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-[#E3E5FF]">
              I’m a{" "}
              <span className="font-medium text-white">
                Full Stack Web Developer
              </span>{" "}
              focused on building clean, modern websites with smooth animations
              and intuitive user experiences.
            </p>
            <p className="mb-4 text-base leading-relaxed text-[#C9CCFF]">
              Currently, I’m a{" "}
              <span className="text-white">B.Tech 1st Year student</span> with a
              strong foundation in web development, creating complete
              applications from frontend to backend.
            </p>
            <p className="text-base leading-relaxed text-[#C9CCFF]">
              I primarily work with the{" "}
              <span className="text-white">MERN stack</span> (MongoDB, Express,
              React, Node.js), along with{" "}
              <span className="text-white">Tailwind CSS</span> and animation
              libraries(such as framer motion) to deliver fast, responsive, and
              visually polished digital experiences.
            </p>
          </motion.div>
          <div
            className="connect mt-24 flex max-md:flex-col gap-4 items-center"
          >
            <motion.button 
            initial={{ x:-40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative bg-white text-primary group flex items-center gap-2 rounded-lg px-2 py-2 font-bold font-outfit hover:scale-90 hover:text-white  hover:bg-violet-500 transition-all duration-500 ease-in-out ">
              <p className="md:translate-x-3 md:group-hover:translate-x-0 transition-all duration-500 cursor-pointer">Let's Connect</p>
              <FaArrowAltCircleRight className="max-md:hidden translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"/>
            </motion.button>
            <motion.div
            initial={{ x:40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="social flex items-center gap-1">
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
