import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard'; // Import the sub-component

const Projects = () => {
  const projectsData = [
    {
      title: "Student Portfolio Maker",
      description: "Developed a personal portfolio website using WordPress, showcasing my design and development skills. Focused on responsive design and intuitive user experience.",
      technologies: ["React.js","Java Script","CSS"],
      liveLink: "https://github.com/ACM-JUIT/Team-10-Student-Portfolio-Platform-.git", // Replace with actual link
      githubLink: null, // WordPress sites usually don't have public GitHub repos for the core site
      image: "/project-wordpress.jpg" // Add an image in public folder
    },
    {
      title: "Collaborative Web Project (Example)",
      description: "Contributed to a team-based web application focused on [describe project purpose]. My role involved [your specific contributions, e.g., front-end development, API integration, UI design].",
      technologies: ["React", "Node.js", "Express", "MongoDB", "CSS"],
      liveLink: "https://your-collaborative-project.com", // Replace with actual link
      githubLink: "https://github.com/your-username/collaborative-project", // Replace with actual link
      image: "/project-collaborative.jpg" // Add an image in public folder
    },
    // Add more projects as needed
    // Example UI/UX Design Project:
    {
      title: "Mobile App UI/UX Redesign",
      description: "Led the redesign of a mobile application's user interface and experience, improving user flow and visual aesthetics. Conducted user research and created wireframes and prototypes.",
      technologies: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      liveLink: "https://www.behance.net/your-uiux-project", // Link to Behance, Dribbble, or a PDF
      githubLink: null,
      image: "/project-uiux.jpg" // Add an image in public folder
    }
  ];

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <p className={styles.callToAction}>
        More projects are available upon request or on my GitHub profile.
      </p>
    </section>
  );
};

export default Projects;