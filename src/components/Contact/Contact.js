import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.sectionTitle}>Get in Touch</h2>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <p className={styles.infoItem}>
            <span className={styles.icon}>📞</span> WhatsApp: <a href="https://wa.me/919415421672" target="_blank" rel="noopener noreferrer">+91 9415421672</a>
          </p>
          <p className={styles.infoItem}>
            <span className={styles.icon}>✉️</span> Email: <a href="mailto:abhinavbajpayee88@gmail.com">abhinavbajpayee88@gmail.com</a>
          </p>
          <p className={styles.infoItem}>
            <span className={styles.icon}>📍</span> Location: 1610/652, Keshav Nagar, Lucknow, Uttar Pradesh
          </p>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/abhinav-bajpai-58b36128b/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src="/linkedin-icon.svg" alt="LinkedIn" /> {/* Add SVG icons to public folder */}
            </a>
            <a href="https://medium.com/@abhinavbajpayee88" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src="/medium-icon.svg" alt="Medium" /> {/* Add SVG icons to public folder */}
            </a>
            {/* Add GitHub icon if you have a public repo and an icon for it */}
            {/* <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src="/github-icon.svg" alt="GitHub" />
            </a> */}
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
          <h3>Send a Message</h3>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;