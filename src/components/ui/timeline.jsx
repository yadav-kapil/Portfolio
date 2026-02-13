"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import experienceHeader from "@/assets/videos/experienceHeader.json";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-gradient-to-b from-white via-white to-indigo-50/40 
               dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 
               font-sans md:px-10 pt-20"
      ref={containerRef}
    >
      {/* Header */}
      <div className="flex flex-col justify-center items-center text-center mb-16">
        <div className="flex items-center gap-4 max-md:flex-col">
          <h2
            className="text-3xl md:text-5xl font-extrabold 
                     bg-gradient-to-r from-[#5044e5] to-indigo-400 
                     bg-clip-text text-transparent"
          >
            Education / Experience
          </h2>
          <Player autoplay loop src={experienceHeader} className="h-24" />
        </div>
        <p
          className="mt-4 text-neutral-600 dark:text-neutral-400 
                    text-sm md:text-lg max-w-xl"
        >
          Here’s a timeline of my academic and professional journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto pb-24">
        {data.map((item, index) => {
          const progressPoint = (index + 1) / data.length;

          const dotColor = useTransform(
            scrollYProgress,
            [progressPoint - 0.3, progressPoint - 0.1],
            ["#e5e7eb", "#5044e5"], // neutral-200 → primary
          );

          const dotScale = useTransform(
            scrollYProgress,
            [progressPoint - 0.1, progressPoint],
            [1, 1.25],
          );

          return (
            <div
              key={index}
              className="flex justify-start pt-14 md:pt-32 md:gap-14"
            >
              <div
                className="sticky flex flex-col md:flex-row z-40 items-center 
                      top-40 self-start max-w-xs lg:max-w-sm md:w-full"
              >
                {/* Animated Timeline Dot */}
                <div
                  className="h-12 absolute left-2 md:left-2 w-12 
                        rounded-full bg-white dark:bg-neutral-900 
                        flex items-center justify-center 
                        shadow-md border border-neutral-200 
                        dark:border-neutral-800"
                >
                  <motion.div
                    style={{
                      backgroundColor: dotColor,
                      scale: dotScale,
                    }}
                    className="h-5 w-5 rounded-full 
                       border border-neutral-300 
                       dark:border-neutral-700 
                       shadow-lg"
                  />
                </div>

                <h3
                  className="hidden md:block text-3xl md:pl-24 md:text-6xl 
                       font-extrabold tracking-tight 
                       text-neutral-400 dark:text-neutral-600"
                >
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-6 md:pl-6 w-full">
                <h3
                  className="md:hidden block text-2xl mb-6 text-left 
                       font-bold text-[#5044e5]"
                >
                  {item.title}
                </h3>

                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="space-y-6"
                >
                  {item.content}
                </motion.div>
              </div>
            </div>
          );
        })}

        {/* Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] 
                   bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
                   from-transparent via-neutral-200 
                   dark:via-neutral-700 to-transparent 
                   [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] 
                     bg-gradient-to-b 
                     from-[#5044e5] via-indigo-400 to-transparent 
                     rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
