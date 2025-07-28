import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <img src={project.image} alt={project.title} className={styles.projectImage} />
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.projectTech}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>{tech}</span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.btnLive}>
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.btnGithub}>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;