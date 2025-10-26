import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
    // Determine if the project is a UI/UX design project
    const isUIUX = project.category === 'uiux';

    // Define the link button text based on the project type
    const liveLinkText = isUIUX ? 'Check This Design' : 'Live Demo';
    const githubLinkText = isUIUX ? 'Design/Repo Link' : 'GitHub';

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
                    {/* Live Link: Changes label for UI/UX projects */}
                    {project.liveLink && (
                        <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.btnLive}
                        >
                            {liveLinkText}
                        </a>
                    )}
                    
                    {/* GitHub Link: Changes label for UI/UX projects */}
                    {project.githubLink && (
                        <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={styles.btnGithub}
                        >
                            {githubLinkText}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;