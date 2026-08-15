import React from 'react';
import styles from './Experience.module.css';

const experience = [
  {
    role: 'Web Development Intern',
    company: 'Oasis Infobyte — Remote',
    years: 'Feb 2024 - Mar 2024',
    desc: 'Completed hands-on web development tasks using HTML, CSS, and JavaScript in a structured internship program.',
    bullets: [
      'Developed responsive web pages using HTML, CSS, and JavaScript.',
      'Built and styled web interfaces through hands-on implementation of assigned development tasks.',
      'Completed assigned tasks within the given internship timeline.',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className={styles.experienceSection}
      style={{
        backgroundColor: 'var(--card-bg)',
        color: 'var(--text-primary)',
        transition:
          'background-color 0.4s ease, color 0.4s ease',
      }}
    >
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <h2
          className={styles.experienceTitle}
          style={{
            color: 'var(--text-primary)',
            transition: 'color 0.4s ease',
          }}
        >
          Professional{' '}
          <span
            className={styles.accent}
            style={{
              background:
                'linear-gradient(90deg, var(--accent), var(--secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Experience
          </span>
        </h2>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto pl-10">

          {experience.map((item, i) => (
            <div
              key={i}
              className={styles['timeline-item']}
              style={{
                position: 'relative',
              }}
            >

              {/* Timeline Line */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-2rem',
                  top: '2.7rem',
                  width: '2px',
                  height: 'calc(100% - 2.7rem)',
                  background:
                    'linear-gradient(to bottom, var(--accent), var(--secondary))',
                  zIndex: 1,
                  transition: 'background 0.4s ease',
                }}
              />

              {/* Timeline Dot */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-2.5rem',
                  top: '2.2rem',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent)',
                  border: '2px solid var(--card-bg)',
                  zIndex: 2,
                  transition:
                    'background-color 0.4s ease, border-color 0.4s ease',
                }}
              />

              {/* Experience Card */}
              <div
                className={styles.card}
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  boxShadow:
                    '0 2px 12px rgba(0, 0, 0, 0.08)',
                  transition:
                    'background-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease',
                }}
              >

                {/* Card Header */}
                <div className={styles.cardHeader}>

                  <h3
                    className={styles.cardRole}
                    style={{
                      color: 'var(--text-primary)',
                      transition: 'color 0.4s ease',
                    }}
                  >
                    {item.role}
                  </h3>

                  <span
                    className={styles.cardYears}
                    style={{
                      background:
                        'linear-gradient(90deg, var(--accent), var(--secondary))',
                      color: '#ffffff',
                    }}
                  >
                    {item.years}
                  </span>

                </div>

                {/* Company */}
                <h4
                  className={styles.cardCompany}
                  style={{
                    color: 'var(--accent)',
                    transition: 'color 0.4s ease',
                  }}
                >
                  {item.company}
                </h4>

                {/* Description */}
                <p
                  className={styles.cardDesc}
                  style={{
                    color: 'var(--text-primary)',
                    opacity: 0.68,
                    transition: 'color 0.4s ease',
                  }}
                >
                  {item.desc}
                </p>

                {/* Responsibilities */}
                <ul
                  className={styles.cardBullets}
                  style={{
                    color: 'var(--text-primary)',
                    opacity: 0.68,
                    transition: 'color 0.4s ease',
                  }}
                >
                  {item.bullets.map((bullet, j) => (
                    <li key={j}>
                      {bullet}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}