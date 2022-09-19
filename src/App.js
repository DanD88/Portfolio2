import React from "react";

import About from "./components/About";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ProjectLinks from "./components/ProjectLinks";
import Skills from "./components/Skills";
import Social from "./components/Social";
import Footer from "./components/Footer";

import './index.css'
import './index'


function App() {
  return (
      <main className="text-gray-400 bg-gray-100 bold-font">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ProjectLinks/>
        <Social />
        <Contact />
        <Footer />
      </main>
    );
}

export default App;
