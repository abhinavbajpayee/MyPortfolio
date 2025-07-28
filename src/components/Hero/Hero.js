import React from 'react';
import styles from './Hero.module.css'; // Import CSS module

// You'll need a professional headshot image in your public folder, e.g., public/abhinav_photo.jpg
// Or you can import it if it's in src: import abhinavPhoto from '../../assets/abhinav_photo.jpg';

const Hero = () => {
  return (
    <header className={styles.heroContainer}>
      <div className={styles.heroContent}>
        {/* Placeholder for your professional photo */}
        <img
          src="/abhinav_photo.jpg" // Assuming image is in public folder
          alt="Abhinav Bajpai"
          className={styles.profilePhoto}
        />
        <h1 className={styles.heroTitle}>Abhinav Bajpai</h1>
        <p className={styles.heroSubtitle}>Web Developer | UI/UX Designer | Digital Content Creator</p>
        <p className={styles.heroDescription}>
          An engineering student passionate about web development, UI/UX design, and digital content.
          Experienced in WordPress development, I also excel in public speaking, article writing, and team management.
        </p>
        <div className={styles.heroButtons}>
          <a href="#projects" className={styles.btnPrimary}>View My Work</a>
          <a href="#contact" className={styles.btnSecondary}>Connect with Me</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;