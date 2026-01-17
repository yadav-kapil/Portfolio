import { motion, time } from "motion/react";
import { SkillsItems } from "../lib/SkillsItems";
import { useState } from "react";
import SkillsMdItem from "./SkillsMdItem";

const SkillsMaxMd = () => {
  const tabs = ["Language", "Frontend", "Backend", "Others"];
  const SkillItem = SkillsItems();
  const [currTab, setTab] = useState("Language");

  const onTabClick = (tab) => {
    setTab(tab);
  };
  return (
    <div className="border-t-primary py-12 border w-screen">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="skillHead mb-8 flex justify-center text-5xl font-ubuntu font-bold text-black dark:text-white"
      >
        <h3> My Skills </h3>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center gap-2"
      >
        {tabs.map((tab) => (
          <div
            key={tab + Math.random()}
            className={`tabs dark:text-white dark:border-white px-3 py-0.5 border w-fit flex gap-2 rounded-full max-md:text-sm font-medium font-outfit text-black hover:bg-primary hover:text-white cursor-pointer transition-all duration-500 hover:scale-95 ${currTab === tab ? "bg-primary text-white" : ""}`}
            onClick={() => {
              onTabClick(tab);
            }}
          >
            {tab}
          </div>
        ))}
      </motion.div>

      <div className="my-6 max-md:px-3 px-12 flex flex-wrap justify-center items-center gap-8 w-full">
        {SkillItem.map((skill) => {
          return (
            skill.tab === currTab && (
              <SkillsMdItem
                key={skill.tab + Math.random()}
                item={skill.image}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default SkillsMaxMd;
