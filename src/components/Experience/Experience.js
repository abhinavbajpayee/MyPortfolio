import React from 'react';
import styles from './Experience.module.css'; // Import CSS module

const Experience = () => {
  const experiences = [
    {
      title: "Public Relations Head",
      company: "Internexus",
      duration: "Jun 2024 - Present",
      description: [
        "Led outreach strategies and managed external communication to enhance brand visibility.",
        "Built media relationships and organized promotional campaigns, resulting in increased engagement across platforms.",
        "Successfully represented the organization at multiple university and national-level forums."
      ]
    },
    {
      title: "Contributing Writer",
      company: "Medium",
      duration: "Oct 2024 - Present",
      description: [
        "Write insightful articles on technology, student life, and personal development.",
        "Maintain editorial quality while researching, drafting, and optimizing content for audience engagement.",
        "Articles have reached hundreds of readers and sparked meaningful discussion on platforms like LinkedIn and Medium."
      ]
    },
    {
      title: "Writer",
      company: "The New Student",
      duration: "Jan 2025 - Present",
      description: [
        "Craft informative and relatable articles for a student-based publication, focusing on campus experiences, productivity tips, and youth opinion pieces.",
        "Work closely with the editorial team to meet deadlines and maintain tone and consistency."
      ]
    },
    {
      title: "Technical Content Writer",
      company: "University Internship",
      duration: "Jun 2025 - July 2025",
      description: [
        "Created user guides, technical documentation, and web content for internal tools and external stakeholders.",
        "Collaborated with software developers and UI designers to ensure documentation clarity and alignment with user workflows."
      ]
    },
    {
      title: "Marketing Strategy Coordinator",
      company: "Global Podium",
      duration: "Apr 2024 - Oct 2024",
      description: [
        "Planned and executed marketing campaigns to promote MUNs and youth summits.",
        "Conducted audience analysis and tailored strategies to enhance delegate outreach.",
        "Played a key role in increasing event registration and forming international collaborations."
      ]
    },
    {
      title: "UI/UX Designer",
      company: "Rang Manch",
      duration: "July 2025 - Present",
      description: [
        "Led outreach strategies and managed external communication to enhance brand visibility.",
        "Built media relationships and organized promotional campaigns, resulting in increased engagement across platforms.",
        "Successfully represented the organization at multiple university and national-level forums."
      ]
    }
  ];

  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>Professional Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3 className={styles.experienceTitle}>{exp.title}</h3>
              <p className={styles.companyName}>{exp.company}</p>
              <p className={styles.duration}>{exp.duration}</p>
              <ul className={styles.descriptionList}>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;