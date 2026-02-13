import { motion } from "framer-motion";
import { FiMonitor, FiLayout, FiZap } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import serviceLoading from "@/assets/videos/serviceLoading.json";
import { Player } from "@lottiefiles/react-lottie-player";

const services = [
  { title: "Responsive Design", icon: FiMonitor },
  { title: "Modern UI", icon: FiLayout },
  { title: "High Performance Applications", icon: FiZap },
];

export default function Services() {
  return (
    <>
      <div className="service relative flex items-center max-md:justify-center md:ml-16 gap-4 mb-10 max-md:mb-4">
        <div
          className="
            p-3 rounded-xl
            text-primary shadow-md
            bg-white/90
          "
        >
          <FiGrid size={20} />
        </div>

        <h2
          className="
    text-3xl md:text-4xl font-bold font-ubuntu
    text-black dark:text-white
    tracking-wide
    relative
  "
        >
          Providing
        </h2>
        <div className="relative w-28 h-16 overflow-hidden -ml-2">
  <Player
    autoplay
    loop
    src={serviceLoading}
    className="absolute w-48 h-48 -top-16 left-1/2 -translate-x-1/2"
  />
</div>

      </div>

      <div className="flex flex-col gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="
              group
              mx-10
              max-md:w-full
              max-md:mx-2
              p-6 rounded-2xl
              backdrop-blur-xl
              bg-white/60 dark:bg-white/5
              border border-white/40 dark:border-white/10
              shadow-lg hover:shadow-primary/30
              hover:scale-105
              transition-all duration-500
            "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                min-w-14 h-14 rounded-xl flex items-center justify-center
                bg-gradient-to-r from-primary to-violet-600
                text-white shadow-md
                group-hover:rotate-6 group-hover:scale-110
                transition-all duration-500
              "
                >
                  <Icon size={22} />
                </div>

                <h3
                  className={`
                text-xl font-semibold
                bg-gradient-to-r from-primary to-violet-600
                bg-clip-text text-transparent
                group-hover:${index % 2 == 0 ? "-rotate-3" : "rotate-3"}
                transition-all duration-500
              `}
                >
                  {service.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
