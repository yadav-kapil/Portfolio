import { motion, scale } from "motion/react";

const SkillsMdItem = ({ item }) => {
  return (
    <>
      {item.map((tool,idx) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="card flex w-fit min-w-38 max-sm:min-w-34 flex-col justify-center items-center gap-2 border border-gray-500 dark:border-white transition-all duration-500 rounded-xl px-4 py-2 flex-shrink-0 hover:scale-110 cursor-pointer bg-gray-200/50 dark:bg-white/35"
          >
                <img className="object-contain h-16" src={`${tool.logo}`} />
                <p className="font-mono text-black dark:text-white">{tool.name}</p>
          </motion.div>
        );
      })}
    </>
  );
};

export default SkillsMdItem;
