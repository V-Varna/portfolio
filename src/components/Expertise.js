import React from 'react';
import { FaPalette, FaMobileAlt, FaUserCheck, FaSitemap, FaRegObjectGroup, FaRegLightbulb } from 'react-icons/fa';
import styles from './Expertise.module.css';

const expertise = [
  { icon: <FaRegObjectGroup />, color: 'blue', title: 'UI Design', desc: 'Creating visually appealing interfaces with a focus on aesthetics, consistency, and brand alignment.' },
  { icon: <FaUserCheck />, color: 'peach', title: 'User Research', desc: 'Conducting interviews, surveys, and usability tests to understand user needs and behaviors.' },
  { icon: <FaSitemap />, color: 'blue', title: 'Wireframing', desc: 'Building structural blueprints that establish information hierarchy and core functionality.' },
  { icon: <FaPalette />, color: 'peach', title: 'Visual Design', desc: 'Crafting color schemes, typography, and visual elements that enhance user experience.' },
  { icon: <FaMobileAlt />, color: 'blue', title: 'Responsive Design', desc: 'Ensuring interfaces work seamlessly across all devices and screen sizes.' },
  { icon: <FaRegLightbulb />, color: 'peach', title: 'Prototyping', desc: 'Building interactive models to test and refine user flows and interactions.' },
];

export default function Expertise() {
  return (
    <section id="expertise" className={styles.expertiseSection}>
      <div className="container mx-auto px-6">
        <h2 className={styles.expertiseTitle}>
          My <span className={styles.accent}>Expertise</span>
        </h2>
        <div className={styles.expertiseGrid}>
          {expertise.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={item.color === 'blue' ? `${styles.iconCircle} ${styles.iconBlue}` : `${styles.iconCircle} ${styles.iconPeach}`}>
                <span style={{ color: '#fff', fontSize: 32 }}>{item.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
