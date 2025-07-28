import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'extracurriculars', 'contact'];
      let currentActive = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sections[i];
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu on click
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo} onClick={() => scrollToSection('home')}>
          Abhinav Bajpai
        </a>
        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
          <li>
            <a
              href="#home"
              onClick={() => scrollToSection('home')}
              className={activeSection === 'home' ? styles.activeLink : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? styles.activeLink : ''}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => scrollToSection('skills')}
              className={activeSection === 'skills' ? styles.activeLink : ''}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => scrollToSection('experience')}
              className={activeSection === 'experience' ? styles.activeLink : ''}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => scrollToSection('projects')}
              className={activeSection === 'projects' ? styles.activeLink : ''}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={() => scrollToSection('education')}
              className={activeSection === 'education' ? styles.activeLink : ''}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#extracurriculars"
              onClick={() => scrollToSection('extracurriculars')}
              className={activeSection === 'extracurriculars' ? styles.activeLink : ''}
            >
              Extracurriculars
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className={activeSection === 'contact' ? styles.activeLink : ''}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;