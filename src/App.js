import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Extracurriculars from './components/Extracurriculars/Extracurriculars';
import Contact from './components/Contact/Contact';
import Chatbot from './components/Chatbot/Chatbot'; 
import Footer from './components/Footer/Footer';
// In src/index.js or src/App.js

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="extracurriculars">
          <Extracurriculars />
        </section>
        
        {/* RENAMED ID: Changed from 'chatbot' to 'bot-talk' */}
        <section id="bot-talk"> 
          <h2 style={{ textAlign: 'center', fontSize: '2.8em', marginBottom: '50px', color: 'var(--primary-color)' }}>Ask Abhinav's Bot!</h2>
          <Chatbot />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;