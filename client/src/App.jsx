import AboutPage from "./components/AboutPage";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import ThemeContextProvider from "./store/themeContext";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <div className="relative bg-[#FAFBFD] dark:bg-[#030308] text-slate-800 dark:text-slate-100 transition-colors duration-300">
          <Navbar />
          <Hero />
          <AboutPage />
          <Skills />
          <Education />
          <Projects />
          <ContactPage />
          <Footer />
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;
