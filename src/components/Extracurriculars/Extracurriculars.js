import React from 'react';
import styles from './Extracurriculars.module.css';

const Extracurriculars = () => {
  const activities = [
    "Department Representative, Alumni Cell - Jaypee University of Information Technology",
    "First Prize in University Debate Competition - Jaypee University of Information Technology",
    "7 Best Delegate Awards - Model United Nations",
    "President IIT Roorkee Model United Nations - Model United Nations, IIT Roorkee",
    "30 Chairing Experience - Model United Nations",
    "IIMUN Speaker - India's International Mission To Unite Nations",
    "Prefect-Student Council - City Montessori School"
  ];

  return (
    <section className={styles.extracurricularsSection}>
      <h2 className={styles.sectionTitle}>Extracurricular Activities</h2>
      <div className={styles.activitiesGrid}>
        {activities.map((activity, index) => (
          <div key={index} className={styles.activityCard}>
            <p className={styles.activityText}>{activity}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extracurriculars;