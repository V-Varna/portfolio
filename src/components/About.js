import React from 'react';
import {
  FaUser,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaBriefcase,
  FaBullseye,
  FaLightbulb,
  FaHeart,
} from 'react-icons/fa';

import styles from './About.module.css';

const aboutCards = [
  {
    title: 'Education',
    icon: FaGraduationCap,
    type: 'education',
    content: (
      <>
        <strong>B.E. Information Technology</strong>
        <span>
          Gokaraju Lailavathi Women’s Engineering College, Hyderabad
        </span>
        <span className={styles.highlight}>
          2022 – 2026 | CGPA: 8.91
        </span>
      </>
    ),
  },
  {
    title: 'Location',
    icon: FaMapMarkerAlt,
    type: 'location',
    content: (
      <>
        <strong>Hyderabad</strong>
        <span>Telangana, India</span>
      </>
    ),
  },
  {
    title: 'Open to Work',
    icon: FaBriefcase,
    type: 'work',
    content: (
      <>
        <strong>-Currently seeking opportunities</strong>
        <span>
          -Open to Software Development and IT roles.
        </span>
      </>
    ),
  },
  {
    title: 'Interests',
    icon: FaBullseye,
    type: 'interests',
    content: (
      <ul>
        <li>-Software Development</li>
        <li>-Full-Stack Development</li>
        <li>-Backend Development</li>
        <li>-AI / ML Applications</li>
      </ul>
    ),
  },
];

function InfoCard({ item }) {
  const Icon = item.icon;

  return (
    <div className={`${styles.infoCard} ${styles[item.type]}`}>
      <div className={styles.iconWrapper}>
        <Icon />
      </div>

      <div className={styles.infoContent}>
        <h3>{item.title}</h3>

        <div className={styles.infoBody}>
          {item.content}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>

      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className={styles.sectionHeading}>
          

          <h2>
            About <span>Me</span>
          </h2>

          <p>
            Get to know more about me, my background and what drives me.
          </p>
        </div>


        {/* Main About Layout */}
        <div className={styles.aboutGrid}>

          {/* Professional Summary */}
          <div className={`${styles.summaryCard} ${styles.mainCard}`}>

            <div className={styles.cardIcon}>
              <FaUser />
            </div>

            <div className={styles.summaryContent}>

              <h3>Professional Summary</h3>

              <div className={styles.titleLine}></div>

              <p>
                I’m an Information Technology graduate and aspiring
                software developer passionate about building practical
                web applications and exploring modern technologies.
              </p>

              <p>
                I enjoy turning ideas into practical solutions through
                clean code, thoughtful design, and continuous learning.
              </p>

              <p>
                I like taking on unfamiliar challenges, finding a clear
                way forward, and seeing my work through with attention
                to detail and accuracy.
              </p>

            </div>
          </div>


          {/* Right-side Information Cards */}
          <div className={styles.infoGrid}>
            {aboutCards.map((item) => (
              <InfoCard
                key={item.title}
                item={item}
              />
            ))}
          </div>


          {/* Learning & Growth */}
          <div className={styles.bottomCard}>

            <div className={`${styles.iconWrapper} ${styles.learningIcon}`}>
              <FaLightbulb />
            </div>

            <div>
              <h3>Learning & Growth</h3>

              <p>
                Currently exploring{' '}
                <strong>
                  Generative AI, Machine Learning, LLMs, LangChain and RAG.
                </strong>
              </p>

              <p>
                I believe in learning continuously and staying curious.
              </p>
            </div>

          </div>


          {/* Beyond Code */}
          <div className={styles.bottomCard}>

            <div className={`${styles.iconWrapper} ${styles.beyondIcon}`}>
              <FaHeart />
            </div>

            <div>
              <h3>Beyond Code</h3>

              <p>
                I enjoy exploring new ideas, learning independently,
                and working on projects that challenge me to grow.
              </p>

              <p>
                I value curiosity, consistency, and finding better
                ways to approach problems.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}