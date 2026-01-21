import { motion } from "motion/react";
import Spline from "@splinetool/react-spline";

const ContactPage = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-[#F4F6FF] ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-md:text-center mx-auto"
      >
        <h1 className="font-outfit font-bold text-5xl max-md:text-3xl text-gray-900 dark:text-white">
          Get In Touch
        </h1>
      </motion.div>
    </div>
  );
};

export default ContactPage;
