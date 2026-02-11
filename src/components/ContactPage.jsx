import { motion } from "motion/react";
import { Player } from "@lottiefiles/react-lottie-player";
import contactAnimation from "@/assets/videos/Support.json";

const ContactPage = () => {
  return (
    <>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="skillHead mb-8 flex justify-center text-5xl font-ubuntu font-bold text-black dark:text-white"
      >
        <h3> GET IN TOUCH </h3>
      </motion.div>
      <div className="w-full h-screen flex bg-[#F4F6FF] ">
        <Player
          autoplay
          loop
          src={contactAnimation}
          className="w-[50%]"
          style={{ height: "600px", width: "600px" }} // Set the size with inline styles
        ></Player>
        
      </div>
    </>
  );
};

export default ContactPage;
