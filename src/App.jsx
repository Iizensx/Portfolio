import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";
import { projects } from "./data/resumeData";

export default function App() {
  const [isDark, setIsDark] = useState(() => window.localStorage.getItem("portfolio-theme") === "dark");
  const selectedProject = new URLSearchParams(window.location.search).get("project");
  const project = projects.find((item) => item.slug === selectedProject);
  const toggleTheme = () => {
    setIsDark((value) => {
      const nextValue = !value;
      window.localStorage.setItem("portfolio-theme", nextValue ? "dark" : "light");
      return nextValue;
    });
  };

  if (project) {
    return (
      <div className={`site-shell project-shell ${isDark ? "theme-dark" : "theme-light"}`}>
        <ProjectDetail project={project} />
      </div>
    );
  }

  return (
    <div className={`site-shell ${isDark ? "theme-dark" : "theme-light"}`}>
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <main className="site-main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
