import { motion, scale } from "motion/react";

const SkillsMdItem = ({ item }) => {
  return (
    <>
      {item.map((tool, idx) => {
        return (
          <motion.div
            key={Date.now() * Math.random()}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="card flex w-fit min-w-38 max-sm:min-w-34 flex-col justify-center items-center gap-2
              border border-gray-200 dark:border-white/15
              rounded-xl px-4 py-2 flex-shrink-0
              bg-white dark:bg-neutral-900
              shadow-sm hover:shadow-lg
              transition-all duration-300
              hover:scale-105 cursor-pointer"
          >
            <motion.img
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="object-contain h-16"
              src={`${tool.logo}`}
            />
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="font-mono text-black dark:text-white"
            >
              {tool.name}
            </motion.p>
          </motion.div>
        );
      })}
    </>
  );
};

export default SkillsMdItem;
