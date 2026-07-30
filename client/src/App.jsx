import { useState } from "react";
import AboutPage from "./components/AboutPage";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ThemeContextProvider from "./store/themeContext";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import { Player } from "@lottiefiles/react-lottie-player";
import chatbotAnim from "./assets/videos/chatbot.json";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <ThemeContextProvider>
      <div className="relative bg-[#FAFBFD] dark:bg-[#030308] text-slate-800 dark:text-slate-100 transition-colors duration-300">
        <Navbar isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
        <Hero />
        <AboutPage />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <ContactPage onOpenChat={() => setIsChatOpen(true)} />
        <Footer />

        
        {isChatOpen ? (
          <ChatWindow onClose={() => setIsChatOpen(false)} />
        ) : (
          <button
            onClick={() => setIsChatOpen(true)}
            aria-label="Open chat assistant"
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 group hover:scale-115 cursor-pointer transition-all duration-300 active:scale-95 block w-16 h-16 md:w-18 md:h-18 bg-transparent border-none outline-none"
          >
            <Player
              autoplay
              loop
              src={chatbotAnim}
              style={{ width: "100%", height: "100%" }}
              className="relative z-10"
            />
          </button>
        )}
      </div>
    </ThemeContextProvider>
  );
}

export default App;
