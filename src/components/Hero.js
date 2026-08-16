import React from 'react';
import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaArrowRight,
} from 'react-icons/fa';

import styles from './Hero.module.css';
import profileImage from '../assets/varna-profile.png';

export default function Hero() {

  // Smoothly scroll to Projects section
  const scrollToProjects = (e) => {
    e.preventDefault();

    const projectsSection = document.getElementById('projects');

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Open email
  const openEmail = () => {
    window.location.href = 'mailto:v2005varna@gmail.com';
  };

  return (
    <section id="home" className={styles.heroSection}>

      <div className={styles.heroContainer}>

        {/* =================================================
            LEFT CONTENT
           ================================================= */}

        <div className={styles.heroContent}>

          {/* Eyebrow */}
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot}></span>
            HELLO, I'M
          </div>


          {/* Main Heading */}
          <h1 className={styles.heroTitle}>
            Varna
            <span>Vanamala</span>
          </h1>


          {/* Role */}
          <div className={styles.roleLine}>

            <span className={styles.rolePrimary}>
              IT Student
            </span>

            <span className={styles.roleDivider}>|</span>

            <span className={styles.roleSecondary}>
              Software Developer
            </span>

          </div>


          {/* Decorative accent */}
          <div className={styles.titleAccent}>
            <span></span>
            <span></span>
          </div>


          {/* Description */}
          <p className={styles.heroDescription}>
            I enjoy learning new things, building practical web applications,
            and taking on unfamiliar challenges. I work with clarity,
            attention to detail, and the determination to see every task through.
          </p>


          {/* Small Highlights */}
          <div className={styles.highlights}>

            <div className={styles.highlight}>
              <span className={styles.highlightDot}></span>
              Web Development
            </div>

            <div className={styles.highlight}>
              <span className={styles.highlightDot}></span>
              Problem Solving
            </div>

            <div className={styles.highlight}>
              <span className={styles.highlightDot}></span>
              Building Practical Solutions
            </div>

          </div>


          {/* Action Buttons */}
          <div className={styles.actionButtons}>

            {/* View Projects */}
            <a
              href="#projects"
              onClick={scrollToProjects}
              className={styles.primaryButton}
            >
              View Projects
              <FaArrowRight />
            </a>


            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/1t-dwWySyrLWmZFVmqS8ZHylEazEyBT4T/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              My Resume
            </a>

          </div>


          {/* Social Links */}
          <div className={styles.socialArea}>

            <span className={styles.socialLabel}>
              FIND ME ON
            </span>

            <div className={styles.socialLinks}>

              {/* Email */}
              <button
                type="button"
                onClick={openEmail}
                aria-label="Send email"
                title="Email"
                className={styles.socialIcon}
              >
                <FaEnvelope />
              </button>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/varna-vanamala/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className={styles.socialIcon}
              >
                <FaLinkedinIn />
              </a>


              {/* GitHub */}
              <a
                href="https://github.com/V-Varna"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className={styles.socialIcon}
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </div>


        {/* =================================================
            RIGHT SIDE — PROFILE IMAGE
           ================================================= */}

        <div className={styles.heroVisual}>

          {/* Top decorative circle */}
          <div
            className={`${styles.decorativeCircle} ${styles.circleTop}`}
          />


          {/* Profile Image */}
          <div
            className={styles.profileWrapper}
          >

            <div className={styles.profileImage}>
  <img
    src={profileImage}
    alt="Professional portrait of Varna Vanamala"
  />
</div>

          </div>


          {/* Bottom decorative circle */}
          <div
            className={`${styles.decorativeCircle} ${styles.circleBottom}`}
          />

        </div>

      </div>

    </section>
  );
}