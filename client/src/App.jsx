import "./App.css";
import AboutPage from "./components/AboutPage";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { TimeLineDemo } from "./components/TimeLineDemo";
import ThemeContextProvider from "./store/themeContext";
import SkillsMaxMd from "./components/SkillsMaxMd";
import Projects from "./components/Projects";
import "lenis/dist/lenis.css";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <div className="relative bg-[#FAFBFD] dark:bg-[#0A0D1A] text-slate-800 dark:text-slate-100 transition-colors duration-300">
          <Navbar />
          <Hero />
          <AboutPage />
          <SkillsMaxMd />
          <TimeLineDemo />
          <Projects />
          <ContactPage />
          <Footer />
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;
