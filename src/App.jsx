import "./App.css";
import AboutPage from "./components/AboutPage";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { TimeLineDemo } from "./components/TimeLineDemo";
import ThemeContextProvider from "./store/themeContext";
import Skills from "./components/Skills";
import SkillsMaxMd from "./components/SkillsMaxMd";
import Projects from "./components/Projects";
import "lenis/dist/lenis.css";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <div className="relative bg-[#F4F6FF] dark:bg-[#121633]">
          <Navbar />
          <Hero />
          <AboutPage />
          {window.innerWidth >= 1280 ? <Skills /> : <SkillsMaxMd />}
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
