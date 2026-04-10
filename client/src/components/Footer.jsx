import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "motion/react";
import { Player } from "@lottiefiles/react-lottie-player";
import rocket from "@/assets/videos/rocket.json";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Footer = () => {
  const [subscribeState, setSubscribeState] = useState("");

  const subscribeRef = useRef();

  const handleSubscribe = async () => {
    const email = subscribeRef.current.value.trim();

    if (!email) {
      toast.warning("Please Enter A Valid Email");
      return;
    }
    try {
      setSubscribeState("loading");

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URI}/api/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      setTimeout(() => {
        setSubscribeState("");
        subscribeRef.current.value = "";
        toast.success("Subscribed Successfully :)");
      }, 2000);
    } catch (error) {
      setTimeout(() => {
        console.error(error);
        setSubscribeState("");
        toast.error("Something Went Wrong !");
      }, 2000);
    }
  };

  return (
    <footer className="relative text-white overflow-hidden">
      <ToastContainer
        position="bottom-right"
        autoClose={9000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* 🌊 Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-[120px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#5044e5"
            d="M0,96L60,112C120,128,240,160,360,165.3C480,171,600,149,720,138.7C840,128,960,128,1080,144C1200,160,1320,192,1380,208L1440,224L1440,0L0,0Z"
          />
        </svg>
      </div>

      <div className="bg-primary pt-32 pb-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* ✨ Newsletter */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 mb-20 shadow-2xl">
            <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:text-left gap-8">
              <div>
                <div className="flex items-center relative">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Stay Connected
                  </h2>
                  <Player autoplay loop src={rocket} className="h-18 " />
                </div>
                <p className="text-white/80">
                  Stay updated with my latest projects
                </p>
              </div>

              <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
                <input
                  ref={subscribeRef}
                  type="email"
                  placeholder="Enter your email"
                  className="px-5 py-3 rounded-full bg-white/20 placeholder:text-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white transition w-full md:w-72 text-center md:text-left"
                />
                <button
                  onClick={handleSubscribe}
                  className="flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:scale-105 transition cursor-pointer"
                >
                  {subscribeState === "loading"
                    ? "Please Wait ..."
                    : "Subscribe"}{" "}
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* 🔗 Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center md:text-left ">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                Crafting beautiful digital experiences with modern technologies.
              </p>
            </div>

            <div className="flex gap-5 w-full justify-around">
              {/* Navigation */}
              <div>
                <h4 className="font-semibold mb-4 text-lg">Navigation</h4>
                <ul className="space-y-2 text-white/80">
                  {["Home", "About", "Projects", "Skills"].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-semibold mb-4 text-lg">Resources</h4>
                <ul className="space-y-2 text-white/80">
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1QGK9XuHoT_tlNwpXFXTBgfFbzr1gg2fI/view?usp=sharing"
                      target="_blank"
                      className="hover:text-white transition"
                    >
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/kapilyadav9560/"
                      target="_blank"
                      className="hover:text-white transition"
                    >
                      Hire Me
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-white transition">
                      Connect
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold mb-4 text-lg">Social Links</h4>
              <div className="flex gap-5 text-2xl justify-center md:justify-start">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.instagram.com/_yadav__kapil_"
                  target="_blank"
                  className="hover:text-pink-300 transition"
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://github.com/yadav-kapil"
                  target="_blank"
                  className="hover:text-gray-300 transition"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="https://www.linkedin.com/in/kapilyadav9560/"
                  target="_blank"
                  className="hover:text-blue-300 transition"
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70 text-center md:text-left">
            <p>© {new Date().getFullYear()} All rights reserved.</p>

            <div className="flex gap-6 justify-center">
              <h1 className="hover:text-white transition">SYSTUMM</h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
