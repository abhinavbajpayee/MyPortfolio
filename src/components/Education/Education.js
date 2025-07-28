import React from 'react';
import styles from './Education.module.css';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelors of Technology",
      institution: "Jaypee University of Information Technology",
      duration: "Ongoing"
    },
    {
      degree: "CICSE/ICSE",
      institution: "City CMS School",
      percentage: "90.4%"
    }
  ];

  const certificationsData = [
    {
      name: "AI Tools Workshop",
      issuer: "Be10x"
    },
    {
      name: "WordPress Developer",
      issuer: "Udemy"
    },
    {
      name: "React Developer",
      issuer: "Udemy"
    }
  ];

  return (
    <section className={styles.educationSection}>
      <h2 className={styles.sectionTitle}>Education & Certifications</h2>

      <div className={styles.contentWrapper}>
        <div className={styles.educationColumn}>
          <h3 className={styles.subTitle}>Education</h3>
          {educationData.map((edu, index) => (
            <div key={index} className={styles.educationCard}>
              <h4 className={styles.cardTitle}>{edu.degree}</h4>
              <p className={styles.cardInstitution}>{edu.institution}</p>
              {edu.percentage && <p className={styles.cardDetail}>Percentage: {edu.percentage}</p>}
              {edu.duration && <p className={styles.cardDetail}>Duration: {edu.duration}</p>}
            </div>
          ))}
        </div>

        <div className={styles.certificationsColumn}>
          <h3 className={styles.subTitle}>Certifications</h3>
          {certificationsData.map((cert, index) => (
            <div key={index} className={styles.certificationCard}>
              <h4 className={styles.cardTitle}>{cert.name}</h4>
              <p className={styles.cardIssuer}>Issuer: {cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;