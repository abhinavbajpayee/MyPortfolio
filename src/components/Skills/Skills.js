import React from 'react';
import styles from './Skills.module.css'; // Import CSS module

const Skills = () => {
  const keySkills = [
    "Public Speaking",
    "UI/UX Designing",
    "Team Management",
    "Report writing and presenting",
    "Critical thinking skills",
    "WordPress Development",
    "HTML, CSS, JS",
    "Article Writing",
    "Exceptional organisational skills"
  ];

  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>Key Skills</h2>
      <div className={styles.skillsGrid}>
        {keySkills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            {/* You could add icons here later */}
            <p className={styles.skillName}>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;