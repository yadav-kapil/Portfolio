import FlowingMenu from "./FlowingMenu";
import { SkillsItems } from "../lib/SkillsItems";

const Skills = () => {
  const SkillItem = SkillsItems();

  return (
    <>
    <div className="seperator w-screen h-1 bg-primary"></div>
    <div className="skillhead py-16 flex justify-center text-5xl font-ubuntu font-bold text-black dark:text-white">
       <h3> My Skills </h3> 
    </div>
    <div style={{ height: "600px", position: "relative" }}>
      <FlowingMenu items={SkillItem} />
    </div>
    </>
  );
};

export default Skills;
