import { motion } from "motion/react";
import learnify from "../assets/learnify.png";

const Projects = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-12 py-16 bg-[#F4F6FF] dark:bg-[#121633]">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12 max-md:text-center"
      >
        <h1 className="font-outfit font-bold text-5xl max-md:text-3xl text-gray-900 dark:text-white">
          My Latest Work
        </h1>
        <p className="mt-3 max-w-xl mx-auto md:mx-0 font-inter text-gray-600 dark:text-gray-300">
          A selection of projects showcasing my skills in modern web
          development, UI design, and interactive experiences.
        </p>
      </motion.div>

      {/* Card */}
      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8,delay:0.2 ,ease: "easeOut" }}
          className="
            w-full sm:w-[80%] md:w-[55%] lg:w-[22%]
            rounded-2xl
            bg-white/90 dark:bg-white/10
            border border-black/10 dark:border-white/15
            shadow-sm hover:shadow-xl
            hover:-translate-y-1
            transition-all duration-300
            px-4 py-4
          "
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={learnify}
              alt="Learnify"
              className="
                rounded-xl
                transition-transform duration-500
                hover:scale-110
                hover:cursor-pointer
              "
            />
          </div>

          {/* Content */}
          <div className="mt-4">
            <h2 className="text-xl font-outfit font-semibold text-gray-900 dark:text-white">
              Learnify
            </h2>

            <p className="mt-2 text-sm leading-relaxed font-inter text-gray-600 dark:text-gray-300">
              Learnify is an AI-powered assistant that helps users solve doubts,
              practice concepts, and learn interactively.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              className="
                flex-1 text-center
                px-4 py-2 rounded-lg
                font-outfit font-semibold text-sm
                text-primary
                bg-primary/5
                dark:bg-white
                border border-primary/30
                shadow-sm shadow-primary/15
                hover:bg-primary hover:text-white
                hover:shadow-md hover:shadow-primary/30
                hover:scale-95
                transition-all duration-300
              "
            >
              GitHub
            </a>

            <a
              href="#"
              className="
                flex-1 text-center
                px-4 py-2 rounded-lg
                font-outfit font-semibold text-sm
                text-white
                bg-primary
                border border-primary
                shadow-md shadow-primary/25
                hover:bg-primary/90
                hover:shadow-lg hover:shadow-primary/40
                hover:scale-95
                transition-all duration-300
              "
            >
              Live Site
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
