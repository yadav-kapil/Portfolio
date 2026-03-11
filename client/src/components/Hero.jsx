"use client";
import { motion } from "motion/react";
import { FlipWords } from "./ui/flip-words";
import { MdOutlineCloudDownload } from "react-icons/md";
import CurvedLoop from "./ui/CurvedLoop";

import blueGradient from "../assets/blue-gradient.png";
import kapilYadav from "../assets/kapilYadav.png";

const Hero = () => {
  const words = [
    { text: "My Name is" },
    { text: " ", className: "ml-2" },
    {
      text: "Kapil Yadav",
      className: "text-primary dark:text-primary ",
    },
  ];

  const flipWords = [
    "Frontend Developer",
    "Backend developer",
    "Full Stack Developer",
  ];

  return (
    <>
      <div
        id="home"
        className="flex flex-row max-sm:flex-col-reverse gap-24 px-8 sm:px-12 lg:px-28 max-sm:pt-36 pb-16 relative w-full overflow-x-hidden"
      >
        <div className="left flex flex-col flex-1 gap-5 sm:mt-60 max-sm:items-center h-fit">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-fit font-mono py-2 px-4 border-black border text-black dark:text-white dark:border-white relative"
          >
            <div className="w-3 h-2 bg-blue-700 absolute -top-1 -right-1"></div>
            <div className="w-3 h-2 bg-blue-700 absolute -top-1 -left-1"></div>
            <div className="w-3 h-2 bg-blue-700 absolute -bottom-1 -right-1"></div>
            <div className="w-3 h-2 bg-blue-700 absolute -bottom-1 -left-1"></div>
            <p> Hello !</p>
          </motion.span>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="flex gap-3 items-center"
          >
            <span className="sm:text-lg md:text-2xl text-black dark:text-white lg:text-4xl font-bold">
              My Name is{","}
            </span>
            <span className="sm:text-lg md:text-2xl text-primary lg:text-4xl font-bold relative">
              Kapil Yadav
            </span>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center max-md:flex-col"
          >
            <div className="sm:text-xl md:text-3xl text-black dark:text-white lg:text-5xl font-bold">
              I<span className="text-primary">'</span>m a
            </div>
            <FlipWords
              words={flipWords}
              duration={2000}
              className={
                "sm:text-xl md:text-2xl lg:text-4xl p-2 font-bold border border-gray-400/20 ml-2 rounded-lg bg-gray-400/10 dark:text-gray-900 dark:bg-white/90 dark:border-gray-100"
              }
            />
          </motion.div>

          <motion.div className="leftBottom mt-4 max-md:mt-3 w-[95%] sm:w-[90%] md:w-[80%] flex flex-col gap-4">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="desc text-sm text-gray-500"
            >
              I build modern, responsive web applications designed for
              performance, scalability, and great user experiences, focusing on
              clean UI and solid architecture that works seamlessly across
              devices.
            </motion.div>
            <div className="btnHire flex gap-6 max-sm:flex-col">
              <motion.a
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                href="https://drive.google.com/file/d/1QGK9XuHoT_tlNwpXFXTBgfFbzr1gg2fI/view?usp=sharing"
                target="_blank"
                className="group bg-primary px-3 py-1.5 border-[0.5px] text-white font-bold border-gray-900 rounded-lg hover:scale-95 hover:bg-[#4338CA] transition-all flex justify-center overflow-hidden items-center gap-2 justify-center cursor-pointer"
              >
                <MdOutlineCloudDownload />
                <p>Resume</p>
              </motion.a>
              <motion.a
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                href="https://www.linkedin.com/in/kapilyadav9560/"
                target="_blank"
                className="px-3 py-1.5 flex justify-center font-bold border rounded-lg text-black bg-gray-400/10 border-gray-400/70 dark:bg-white/90 dark:border-white hover:scale-95 hover:bg-gray-500/30 dark:hover:bg-white/20 cursor-pointer dark:hover:text-white transition-all"
              >
                <p>Hire Me</p>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="right flex-1 flex justify-center sm:mt-52 relative">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="
            z-10
            imgBg bg-transparent relative
            border-2 border-primary dark:border-white
            rounded-2xl

            w-[200px] h-[250px]    
            sm:w-[230px] sm:h-[290px]
            lg:w-[280px] lg:h-[350px]
          "
          >
            <div className="innerBg w-full h-full absolute left-4 top-6 sm:left-8 sm:top-8 border border-black dark:border-white rounded-2xl bg-gradient-to-br from-[#5044E5] via-[#6A5CF2] to-[#3B2ECF]"></div>
            <img
              src={kapilYadav}
              className="scale-x-95 absolute left-4 lg:left-8 -bottom-6 sm:-bottom-8 rounded-b-2xl border-b-2 border-primary dark:border-b-white"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
            viewport={{ once: true }}
            className="bgGradient scale-110 absolute w-full h-full md:bottom-28 md:right-36 lg:bottom-28 lg:right-56 dark:hidden z-5 max-md:hidden"
          >
            <img src={blueGradient} className="w-full h-full" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="loop max-sm:hidden"
      >
        <CurvedLoop
          marqueeText=" Modern Web App ✦ Responsive UI ✦ Scalable APIs ✦"
          curveAmount={50}
        />
      </motion.div>
    </>
  );
};

export default Hero;
