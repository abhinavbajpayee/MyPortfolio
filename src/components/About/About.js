import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>
            I'm an engineering student at Jaypee University of Information Technology with a passion for web
            development, UI/UX design, and digital content. As a WordPress developer, I've worked on portfolio sites
            and collaborative projects.
          </p>
          <p>
            I'm also active in MUNs, article writing, and public speaking. Currently, I serve as
            PR Head at Internexus and Marketing Strategy Coordinator at Global Podium. My diverse experiences
            allow me to blend technical skills with strong communication and strategic thinking.
          </p>
          <p>
            I thrive in dynamic environments and am always eager to learn new technologies and contribute to impactful projects.
          </p>
        </div>
        <div className={styles.aboutHighlights}>
          <h3>Current Roles:</h3>
          <ul>
           <li>PR Head at Internexus </li>
           <li>Graphic Designer Intern at Rangmanch</li>
          </ul>
          <h3>Interests & Activities:</h3>
          <ul>
            <li>Model United Nations (MUNs) </li>
            <li>Article Writing </li>
            <li>Public Speaking </li>
            <li>Collaborative Projects</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;