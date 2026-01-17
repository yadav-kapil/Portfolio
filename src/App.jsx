import "./App.css";
import AboutPage from "./components/AboutPage";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { TimeLineDemo } from "./components/TimeLineDemo";
import ThemeContextProvider from "./store/themeContext";
import FlowingMenu from './components/FlowingMenu';
import Skills from "./components/Skills";

function App() {

  return (
    <>
      <ThemeContextProvider>
        <div className="relative dark:bg-black">
          <Navbar />
          <Hero />
          <AboutPage />
          <TimeLineDemo />
          <Skills/>
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;
