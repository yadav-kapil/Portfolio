import { motion } from "motion/react";
import learnify from "../assets/learnify.png";
import particlesWave from "@/assets/videos/particlesWave.json";
import { Player } from "@lottiefiles/react-lottie-player";


const Projects = () => {
  const tags = ["React", "Framer Motion"];

  return (
    <div className="relative w-full px-6 sm:px-10 lg:px-20 py-24 overflow-hidden bg-gradient-to-br from-[#eef2ff] via-white to-[#f8faff] dark:from-[#0f1226] dark:via-[#121633] dark:to-[#0b0e1d]">
      <div className="absolute left-0 -top-12">
        <Player autoplay loop src={particlesWave}/>
      </div>
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl opacity-30"></div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h1 className="font-outfit font-bold text-5xl max-md:text-3xl bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          My Latest Work
        </h1>
        <p className="mt-4 max-w-2xl mx-auto font-inter text-gray-600 dark:text-gray-300">
          A selection of projects showcasing my skills in modern web
          development, UI design, and interactive experiences.
        </p>
      </motion.div>

      {/* Card */}
      <div className="flex justify-center z-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            group relative
            w-full sm:w-[80%] md:w-[55%] lg:w-[25%]
            rounded-3xl
            backdrop-blur-xl
            bg-white/60 dark:bg-white/5
            border border-white/40 dark:border-white/10
            shadow-xl shadow-primary/10
            transition-all duration-500
            overflow-hidden
          "
        >
          {/* Gradient Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-t-3xl">
            <img
              src={learnify}
              alt="Learnify"
              className="w-full transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="relative p-6">
            <h2 className="text-2xl font-outfit font-semibold text-gray-900 dark:text-white">
              Learnify
            </h2>

            <p className="mt-3 text-sm leading-relaxed font-inter text-gray-600 dark:text-gray-300">
              Learnify is an AI-powered assistant that helps users solve doubts,
              practice concepts, and learn interactively.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
  {tags.map((tag, index) => (
    <motion.span
      key={index}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="
        px-4 py-1.5
        text-[11px] font-semibold tracking-wider uppercase
        rounded-full
        bg-gradient-to-r from-primary/20 to-purple-500/20
        text-primary dark:text-purple-300
        border border-primary/30 dark:border-purple-400/30
        backdrop-blur-md
        transition-colors duration-300
      "
    >
      {tag}
    </motion.span>
  ))}
</div>

            
            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="
                  flex-1 text-center
                  px-4 py-2.5 rounded-xl
                  text-sm font-semibold
                  text-primary
                  bg-primary/10
                  hover:bg-primary hover:text-white
                  transition-all duration-300
                "
              >
                GitHub
              </a>

              <a
                href="#"
                className="
                  flex-1 text-center
                  px-4 py-2.5 rounded-xl
                  text-sm font-semibold
                  text-white
                  bg-gradient-to-r from-primary to-purple-500
                  hover:opacity-90
                  transition-all duration-300
                "
              >
                Live Site
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
