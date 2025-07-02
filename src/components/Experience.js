import React from 'react';
import styles from './Experience.module.css';

const experience = [
  {
    role: 'Senior UI Designer',
    company: 'DigitalCraft Studios',
    years: '2023 - Present',
    color: 'primary',
    desc: 'Led the UI design team for enterprise-level applications, focusing on creating cohesive design systems and improving user satisfaction.',
    bullets: [
      'Redesigned core product interface increasing user engagement by 42%',
      'Established design system that reduced design inconsistencies by 78%',
      'Mentored junior designers and conducted design thinking workshops',
    ],
  },
  {
    role: 'UI/UX Designer',
    company: 'InnovateX Solutions',
    years: '2021 - 2023',
    color: 'secondary',
    desc: 'Collaborated with product managers and developers to create intuitive interfaces for fintech applications.',
    bullets: [
      'Designed mobile banking app used by over 50,000 users',
      'Conducted user research that informed major UX improvements',
      'Created interactive prototypes for stakeholder presentations',
    ],
  },
  {
    role: 'Junior UI Designer',
    company: 'CreativeWave Agency',
    years: '2019 - 2021',
    color: 'primary',
    desc: 'Assisted senior designers in creating visual assets and interface components for various client projects.',
    bullets: [
      'Designed UI components for 12+ client websites',
      'Created wireframes and mockups for mobile applications',
      'Participated in user testing sessions and implemented feedback',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container mx-auto px-6">
        <h2 className={styles.experienceTitle}>
          Professional <span className={styles.accent}>Experience</span>
        </h2>
        <div className="max-w-3xl mx-auto pl-10">
          {experience.map((item, i) => (
            <div key={i} className={styles['timeline-item']}>
              <div className={styles['timeline-dot']}></div>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardRole}>{item.role}</h3>
                  <span className={item.color === 'secondary' ? `${styles.cardYears} ${styles.secondary}` : styles.cardYears}>{item.years}</span>
                </div>
                <h4 className={styles.cardCompany}>{item.company}</h4>
                <p className={styles.cardDesc}>{item.desc}</p>
                <ul className={styles.cardBullets}>
                  {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
