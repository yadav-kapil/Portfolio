import { motion } from "motion/react";
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
<div className="w-screen py-12 
bg-[#FAFBFD] dark:bg-[#0A0D1A]
transition-colors duration-300
">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.6, delay: 0.05 }}
        viewport={{ once: true }}
        className="skillHead mb-8 flex flex-col items-center gap-2 text-center"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/25 shadow-sm backdrop-blur-md">
          ✦ EXPERTISE ✦
        </span>
        <h3 className="text-5xl max-md:text-3xl font-outfit font-extrabold tracking-tight bg-gradient-to-r from-primary via-indigo-500 to-violet-600 bg-clip-text text-transparent">
          MY SKILLS
        </h3>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex justify-center items-center"
      >
        <div className="flex gap-2 p-1.5 rounded-full bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabClick(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold font-outfit transition-all duration-300 cursor-pointer ${
                currTab === tab
                  ? "bg-gradient-to-r from-primary to-violet-600 text-white shadow-md shadow-primary/20 scale-95"
                  : "text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="my-6 max-md:px-3 px-12 flex flex-wrap justify-center items-center gap-8 w-full">
        {SkillItem.map((skill) => {
          return (
            skill.tab === currTab && (
              <SkillsMdItem
                key={skill.tab}
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
