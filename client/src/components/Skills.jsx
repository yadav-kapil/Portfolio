import FlowingMenu from "./FlowingMenu";
import { SkillsItems } from "../lib/SkillsItems";
import { motion } from "motion/react";

const Skills = () => {
  const SkillItem = SkillsItems();

  return (
    <>
  {/* section separator */}
  <div className="h-0.5 bg-primary" />

  <motion.div
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
    className="
      skillhead py-16 flex justify-center
      text-5xl font-ubuntu font-bold
      text-black dark:text-white
      bg-[#EEF1FF] dark:bg-black
    "
  >
    <h3> My Skills </h3>
  </motion.div>

  <div
    className="bg-[#EEF1FF] dark:bg-black"
    style={{ height: '600px', position: 'relative' }}
  >
    <FlowingMenu items={SkillItem} />
  </div>
</>

  );
};

export default Skills;
