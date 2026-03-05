import { motion } from "motion/react";
import { Player } from "@lottiefiles/react-lottie-player";
import contactAnimation from "@/assets/videos/Support.json";
import headerAnimation from "@/assets/videos/headerAnim.json";
import { useRef } from "react";
import { useState } from "react";



const ContactPage = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    const msgData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    fetch(`${import.meta.env.VITE_SERVER_URI}/api/postContactForm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(msgData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to send");
        }
        setStatus("success");
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  return (
    <>
      <div
        id="contact"
        className="min-h-screen bg-gradient-to-br from-[#F4F6FF] to-[#E6ECFF] dark:from-[#0f172a] dark:to-[#1e293b] flex flex-col items-center justify-center px-6 py-12"
      >
        {/* Heading */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:mb-12 mb-8 text-4xl flex justify-center items-center md:text-5xl font-bold text-gray-800 dark:text-white"
        >
          <h1>GET IN TOUCH</h1>
          <Player
            autoplay
            loop
            src={headerAnimation}
            className="h-32 max-md:hidden"
          />
        </motion.div>

        {/* Main Card */}
        <div className="w-full max-w-6xl bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Animation */}
          <div className="flex justify-center">
            <Player
              autoplay
              loop
              src={contactAnimation}
              className="w-[300px] md:w-[450px]"
            />
          </div>

          {/* Right Side - Form */}
          <motion.form
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                ref={nameRef}
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-400 rounded-xl placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white bg-gray-100 dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-400 dark:text-white bg-gray-100 dark:bg-white/10 focus:outline-none focus:ring-2 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                ref={messageRef}
                rows="4"
                name="message"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl border border-gray-400 dark:text-white bg-gray-100 dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition resize-none"
              ></textarea>
            </div>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 px-4 py-2 text-sm font-medium text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-xl"
              >
                Form Submitted Successfully ✅
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 px-4 py-2 text-sm font-medium text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl"
              >
                Something went wrong ❌
              </motion.p>
            )}

            <button
              type="submit"
              className="w-full cursor-pointer py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 hover:scale-95 text-white font-semibold transition duration-300 shadow-lg hover:shadow-indigo-500/40"
            >
              {status === "loading" ? "Sending ..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
