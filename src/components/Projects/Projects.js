import React, { useState } from 'react';
import Slider from 'react-slick'; // <-- NEW IMPORT
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
    // State to track the currently selected project category
    const [selectedCategory, setSelectedCategory] = useState('web'); // Default to 'web'

    // ** Your projectsData array remains the same here **
    const projectsData = [
        // --- Existing Web Projects ---
        {
            title: "Student Portfolio Maker",
            description: "Developed a personal portfolio website using WordPress, showcasing my design and development skills. Focused on responsive design and intuitive user experience.",
            technologies: ["React.js", "Java Script", "CSS"],
            liveLink: "https://your-live-link.com", 
            githubLink: "https://github.com/ACM-JUIT/Team-10-Student-Portfolio-Platform-.git", 
            image: "Studentportfolio.png",
            category: 'web'
        },
        {
            title: "My Portfolio",
            description: "Contributed to a team-based web application focused on [describe project purpose]. My role involved [your specific contributions, e.g., front-end development, API integration, UI design].",
            technologies: ["React", "Java Scrip", "CSS"],
            liveLink: "https://your-live-portfolio.com", 
            githubLink: "https://github.com/abhinavbajpayee/MyPortfolio", 
            image: "myportfolio.png",
            category: 'web'
        },
          {
            title: "Academic Ally",
            description: "Contributed to a team-based web application focused on [describe project purpose]. My role involved [your specific contributions, e.g., front-end development, API integration, UI design].",
            technologies: ["React", "Java Scrip", "CSS"],
            liveLink: "https://your-live-portfolio.com", 
            githubLink: "https://github.com/abhinavbajpayee/MyPortfolio", 
            image: "academically.png",
            category: 'web'
        },
          {
            title: "Resume Analyser",
            description: "Contributed to a team-based web application focused on [describe project purpose]. My role involved [your specific contributions, e.g., front-end development, API integration, UI design].",
            technologies: ["React", "Java Scrip", "CSS"],
            liveLink: "https://your-live-portfolio.com", 
            githubLink: "https://github.com/abhinavbajpayee/MyPortfolio", 
            image: "resumematch.png",
            category: 'web'
        },
          {
            title: "Slot Smart",
            description: "Contributed to a team-based web application focused on [describe project purpose]. My role involved [your specific contributions, e.g., front-end development, API integration, UI design].",
            technologies: ["React", "Java Scrip", "CSS"],
            liveLink: "https://your-live-portfolio.com", 
            githubLink: "https://github.com/abhinavbajpayee/MyPortfolio", 
            image: "slotsmart.png",
            category: 'web'
        },
        
        // --- Example UI/UX Projects (Figma/Canva) ---
        // Note: I recommend using unique titles for better user experience
        {
            title: "Why do some startups raise massive early stage funding, while others struggle?",
            description: "This is a Linkedin post created on figma which shows my abilities in Figma",
            technologies: ["Figma", "Canva", "User Research", "Prototyping"],
            liveLink: "https://www.figma.com/design/1wXwNfFybbVkTnmseUEMBQ/Untitled?node-id=1-2&t=ER8kKsX0jX1OOPZL-1", 
            image: "Figma1.png",
            category: 'uiux' 
        },
        {
            title: "Your Website Looks Good,But Does It Work? ",
            description: "Designed a comprehensive set of visual assets for a social media marketing campaign which shows my skills in figma and also shows need to a proper functioning wesite",
            technologies: ["Figma", "Photoshop", "Visual Design","User Research","Prototyping"],
            liveLink: "https://www.figma.com/design/U9ChnCkIzb91hGNJP8HTsp/Untitled?node-id=1-2&t=ER8kKsX0jX1OOPZL-1", 
            image: "Figma2.png",
            category: 'uiux' 
        },
        {
            title: "Introduction Reel ",
            description: "Designed a comprehensive set of visual assets for a social media marketing campaign 2...",
            technologies: ["Canva", "Photoshop", "Visual Design"],
            liveLink: "https://www.canva.com/design/DAGsrS28Pmo/QocQW6pDdl3m2nchflP5JQ/edit?utm_content=DAGsrS28Pmo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", 
            image: "canva1.png",
            category: 'uiux' 
        },
        {
            title: "Quotation",
            description: "Designed a comprehensive Quotation which highlishts my designing skills while working with  professional diocuments and it also show my skills in  english language",
            technologies: ["Canva", "Photoshop", "Visual Design"],
            liveLink: "https://www.canva.com/design/DAGs3SYWSQ0/PkmkrQzT9Tvhhmy0XkxGAA/edit?utm_content=DAGs3SYWSQ0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", 
           
            image: "canva2.png",
            category: 'uiux' 
        },
        {
            title: "Presentation for orientation",
            description: "Designed a comprehensive Quotation which highlishts my designing skills while working with  professional diocuments and it also show my skills in  english language",
            technologies: ["Canva", "Photoshop", "Visual Design"],
            liveLink: "https://www.canva.com/design/DAGKaifn3CY/uVATsKl63iMKTByBtbU1Qg/edit?utm_content=DAGKaifn3CY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", 
            image: "canva3.png",
            category: 'uiux' 
        }
    ];

    // Filter projects based on the selected category
    const filteredProjects = projectsData.filter(
        (project) => project.category === selectedCategory
    );

    // 💡 NEW: Slider configuration settings
    const settings = {
        dots: true,       
        infinite: filteredProjects.length > 1, // Only loop if there's more than one project
        speed: 500,       
        slidesToShow: 3,  
        slidesToScroll: 1,
        autoplay: false,  
        responsive: [      
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false // Optional: hide arrows on smaller screens
                }
            }
        ]
    };

    return (
        <section className={styles.projectsSection}>
            <h2 className={styles.sectionTitle}>My Projects</h2>

            {/* Project Category Selector (remains the same) */}
            <div className={styles.categorySelector}>
                <button
                    className={`${styles.categoryButton} ${selectedCategory === 'web' ? styles.active : ''}`}
                    onClick={() => setSelectedCategory('web')}
                >
                    Web Projects
                </button>
                <button
                    className={`${styles.categoryButton} ${selectedCategory === 'uiux' ? styles.active : ''}`}
                    onClick={() => setSelectedCategory('uiux')}
                >
                    UI/UX Projects
                </button>
            </div>
            {/* End Project Category Selector */}

            {/* 🚀 MODIFIED: The Carousel Container */}
            <div className={styles.carouselContainer}>
                {filteredProjects.length > 0 ? (
                    <Slider {...settings}>
                        {filteredProjects.map((project, index) => (
                            // Add a wrapper div for padding between cards in the carousel
                            <div key={index} className={styles.slidePadding}> 
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p className={styles.noProjects}>No {selectedCategory === 'web' ? 'Web' : 'UI/UX'} projects available yet.</p>
                )}
            </div>
            {/* ------------------------------------- */}
            
            <p className={styles.callToAction}>
                More projects are available upon request or on my GitHub profile.
            </p>
        </section>
    );
};

export default Projects;