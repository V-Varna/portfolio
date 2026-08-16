import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>

      <div className={styles.footerContainer}>

        {/* ================================
            BRAND
           ================================ */}

        <div className={styles.brandSection}>

          <h2 className={styles.brandName}>
            Varna <span>Vanamala</span>
          </h2>

          <p className={styles.tagline}>
            Building thoughtful digital experiences
            with code, creativity, and curiosity.
          </p>

        </div>


        {/* ================================
            QUICK LINKS
           ================================ */}

        <div className={styles.linksSection}>

          <h3>Quick Links</h3>

          <div className={styles.links}>

            <a href="#home">Home</a>

            <a href="#expertise">Expertise</a>

            <a href="#experience">Experience</a>

            <a href="#projects">Projects</a>

            <a href="#contact">Contact</a>

          </div>

        </div>


        {/* ================================
            CONNECT
           ================================ */}

        <div className={styles.connectSection}>

          <h3>Let's Connect</h3>

          <div className={styles.socialLinks}>

            <a
              href="mailto:v2005varna@gmail.com"
              aria-label="Email"
              className={styles.socialIcon}
            >
              <FaEnvelope />
            </a>

            <a
              href="https://www.linkedin.com/in/varna-vanamala/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={styles.socialIcon}
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/V-Varna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={styles.socialIcon}
            >
              <FaGithub />
            </a>

          </div>

        </div>

      </div>


      {/* ================================
          DIVIDER
         ================================ */}

      <div className={styles.divider}></div>


      {/* ================================
          BOTTOM
         ================================ */}

      <div className={styles.footerBottom}>

        <p>
          © {currentYear} Varna Vanamala. All rights reserved.
        </p>

        

      </div>

    </footer>
  );
}