import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import './App.css';

function App() {
  useEffect(() => {
    const handleScroll = (event) => {
      const targetId = event.target.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });
    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <div className="App">
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <div id="home" className="content">
        <Home />
      </div>
      <div id="about" className="content">
        <About />
      </div>
      <div id="experience" className="content">
        <Experience />
      </div>
      <div id="projects" className="content">
        <Projects />
      </div>
      <div id="contact" className="content">
        <Contact />
      </div>
    </div>
  );
}

export default App;
