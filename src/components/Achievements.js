import React, { useEffect, useState } from 'react';
import {
  FaTrophy,
  FaCode,
  FaLightbulb,
  FaCertificate,
  FaMicrophone,
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
} from 'react-icons/fa';

import styles from './Achievements.module.css';

const achievements = [
  {
    category: 'COMPETITION',
    title: 'Smart India Hackathon',
    subtitle: 'National Finalist',
    icon: FaTrophy,
    accent: 'blue',
    description:
      'National Finalist in Smart India Hackathon for developing an innovative Anti-Doping Case Management Tool — recognized for its real-world applicability and impact.',
    links: [
      {
        label: 'LinkedIn Post',
        url: 'https://lnkd.in/p/daMAbhx8',
      },
    ],
  },

  {
    category: 'PROBLEM SOLVING',
    title: '150+ DSA Problems Solved',
    icon: FaCode,
    accent: 'peach',
    description:
      'Solved over 150+ Data Structures and Algorithms problems across coding platforms, strengthening problem-solving skills and improving algorithmic thinking.',
    links: [
      {
        label: 'LeetCode',
        url: 'https://leetcode.com/u/varna_vanamala/',
      },
      {
        label: 'HackerRank',
        url: 'https://www.hackerrank.com/profile/varnavanamala',
      },
    ],
  },

  {
    category: 'INNOVATION',
    title: 'Runner-Up – Ideathon',
    icon: FaLightbulb,
    accent: 'blue',
    description:
      'Secured Runner-Up at Pragnya Ideathon (GRIET) for proposing a tech-driven solution, judged for creativity, feasibility, and innovation.',
    links: [
      {
        label: 'LinkedIn Post',
        url: 'https://www.linkedin.com/posts/varna-vanamala_proudmoment-techinnovation-ideathonrunnerup-activity-7261415636256333824-ewYJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEj7JHcB2Af5JNy9fuZOe0l4YU_ImChs7VY',
      },
    ],
  },

  {
    category: 'CERTIFICATION',
    title: 'NPTEL Elite Certificate',
    icon: FaCertificate,
    accent: 'peach',
    description:
      'Awarded Elite grade for “The Joy of Computing using Python” by NPTEL, showcasing a strong grasp of foundational programming concepts.',
    links: [
      {
        label: 'LinkedIn Post',
        url: 'https://www.linkedin.com/posts/varna-vanamala_nptel-pythonprogramming-iitmadras-activity-7261278069032648706-ai2U?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEj7JHcB2Af5JNy9fuZOe0l4YU_ImChs7VY',
      },
    ],
  },

  {
    category: 'EXTRACURRICULAR',
    title: 'Stand-Up Comedy',
    icon: FaMicrophone,
    accent: 'blue',
    description:
      "Performed stand-up comedy twice during engineering — once for juniors at a fresher's event and once for seniors at a farewell event. These experiences helped me step outside my comfort zone and build confidence in public speaking and engaging with an audience.",
    links: [
      {
        label: 'LinkedIn Post',
        url: 'https://www.linkedin.com/posts/varna-vanamala_keepsmiling-happinessmatters-publicspeaking-activity-7381366150124904448-_ObP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEj7JHcB2Af5JNy9fuZOe0l4YU_ImChs7VY',
      },
    ],
  },
];

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  /*
    Returns the position of a card relative
    to the currently active center card.

    - 0  = center
    - -1 = left side
    - 1  = right side
    - -2 = far left
    - 2  = far right
  */
  const getRelativePosition = (index) => {
    let difference = index - activeIndex;

    if (difference > 2) {
      difference -= achievements.length;
    }

    if (difference < -2) {
      difference += achievements.length;
    }

    return difference;
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % achievements.length);
  };

  const goToPrevious = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + achievements.length) % achievements.length
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  /*
    Automatically move every 5 seconds.
  */
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  /*
    Pause briefly when the user interacts.
  */
  const handleInteraction = () => {
    setIsPaused(true);

    setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  return (
    <section
      id="achievements"
      className={styles.achievementsSection}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className={styles.sectionHeading}>


          <h2>
            Achievements{' '}
            <span>&amp; Beyond</span>
          </h2>

          <p>
            Milestones that reflect my journey of learning,
            building, and growing.
          </p>

        </div>


        {/* Carousel */}
        <div
          className={styles.carouselWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Previous Button */}
          <button
            type="button"
            className={`${styles.navigationButton} ${styles.previousButton}`}
            onClick={() => {
              handleInteraction();
              goToPrevious();
            }}
            aria-label="Previous achievement"
          >
            <FaArrowLeft />
          </button>


          {/* Cards */}
          <div className={styles.carousel}>

            {achievements.map((item, index) => {

              const position = getRelativePosition(index);

              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`${styles.achievementCard} ${
                    styles[`position${position}`]
                  } ${styles[item.accent]}`}
                  onClick={() => {
                    if (position !== 0) {
                      handleInteraction();
                      setActiveIndex(index);
                    }
                  }}
                >

                  {/* Category */}
                  <span className={styles.category}>
                    {item.category}
                  </span>


                  {/* Icon */}
                  <div className={styles.achievementIcon}>
                    <Icon />
                  </div>


                  {/* Content */}
                  <div className={styles.cardContent}>

                    <h3>{item.title}</h3>

                    {item.subtitle && (
                      <span className={styles.subtitle}>
                        {item.subtitle}
                      </span>
                    )}

                    <p>
                      {item.description}
                    </p>

                  </div>


                  {/* Links */}
                  <div className={styles.cardLinks}>

                    {item.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardLink}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {link.label}

                        <FaExternalLinkAlt
                          className={styles.externalIcon}
                        />
                      </a>
                    ))}

                  </div>

                </article>
              );
            })}

          </div>


          {/* Next Button */}
          <button
            type="button"
            className={`${styles.navigationButton} ${styles.nextButton}`}
            onClick={() => {
              handleInteraction();
              goToNext();
            }}
            aria-label="Next achievement"
          >
            <FaArrowRight />
          </button>

        </div>


        {/* Pagination Dots */}
        <div className={styles.pagination}>

          {achievements.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to achievement ${index + 1}`}
              className={`${styles.dot} ${
                index === activeIndex ? styles.activeDot : ''
              }`}
              onClick={() => {
                handleInteraction();
                goToSlide(index);
              }}
            />
          ))}

        </div>

      </div>
    </section>
  );
}