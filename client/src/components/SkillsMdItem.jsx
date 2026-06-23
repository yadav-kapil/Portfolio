import { motion } from "motion/react";

const SkillsMdItem = ({ item }) => {
  return (
    <>
      {item.map((tool, idx) => {
        return (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.4, delay: idx * 0.04 }}
            whileHover={{ 
              scale: 1.05,
              y: -4,
              boxShadow: "0 12px 30px -10px rgba(80, 68, 229, 0.25)"
            }}
            viewport={{ once: true }}
            className="card relative flex w-fit min-w-38 max-sm:min-w-34 flex-col justify-center items-center gap-3
              border border-slate-200/60 dark:border-white/10
              rounded-2xl px-5 py-4 flex-shrink-0
              bg-gradient-to-b from-white/95 to-slate-50/95
              dark:from-[#0f1328]/90 dark:to-[#070a12]/90
              backdrop-blur-md
              shadow-sm hover:border-primary/30 dark:hover:border-primary/30
              transition-colors duration-300
              cursor-pointer overflow-hidden group"
          >
            {/* Top indicator gradient */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-primary via-indigo-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="h-14 w-14 flex items-center justify-center p-1.5 bg-slate-100/50 dark:bg-white/5 rounded-xl border border-slate-200/20 dark:border-white/5 group-hover:scale-105 transition-transform duration-300">
              <img
                className="object-contain h-10 w-10"
                src={`${tool.logo}`}
                alt={tool.name}
              />
            </div>
            <p className="font-outfit font-medium text-xs text-slate-800 dark:text-slate-200 tracking-wide mt-1">
              {tool.name}
            </p>
          </motion.div>
        );
      })}
    </>
  );
};

export default SkillsMdItem;
