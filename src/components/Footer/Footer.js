import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {currentYear} Abhinav Bajpai. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="#home" onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</a>
          <a href="#contact" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</a>
          {/* Add more relevant links here */}
        </div>
        <div className={styles.footerSocial}>
          <a href="https://www.linkedin.com/in/abhinav-bajpai-58b36128b/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://medium.com/@abhinavbajpayee88" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <img src="/medium.png" alt="Medium" />
          </a>
          {/* Add GitHub if applicable */}
          {/* <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <img src="/github-icon.svg" alt="GitHub" />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;