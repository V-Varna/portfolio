import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import projectsData from '../data/projectsData';

export default function Projects() {
  const [startIndex, setStartIndex] = useState(0);

  const totalProjects = projectsData.length;

  // Always show 3 projects at a time
  const visibleProjects = [
    projectsData[startIndex % totalProjects],
    projectsData[(startIndex + 1) % totalProjects],
    projectsData[(startIndex + 2) % totalProjects],
  ];

  /*
    Carousel direction:

    Initial:
    C6 C7 [C1 C2 C3] C4 C5

    RIGHT →
    C5 C6 [C7 C1 C2] C3 C4

    RIGHT →
    C4 C5 [C6 C7 C1] C2 C3

    LEFT ← moves in the opposite direction.
  */

  const handleNext = () => {
    // RIGHT moves one position backwards
    setStartIndex(
      (prev) => (prev - 1 + totalProjects) % totalProjects
    );
  };

  const handlePrevious = () => {
    // LEFT moves one position forwards
    setStartIndex(
      (prev) => (prev + 1) % totalProjects
    );
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <h2 className={styles.projectsTitle}>
          Featured <span className={styles.accent}>Projects</span>
        </h2>

        {/* Carousel */}
        <div className={styles.projectsCarousel}>

          {/* LEFT ARROW */}
          <button
            type="button"
            className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
            onClick={handlePrevious}
            aria-label="Previous projects"
          >
            <span>←</span>
          </button>

          {/* PROJECT CARDS */}
          <div className={styles.projectsGrid}>
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className={styles.projectCard}
              >

                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className={styles.projectImg}
                />

                <div className={styles.projectContent}>

                  {/* Project Name */}
                  <h3 className={styles.projectTitle}>
                    {project.name}
                  </h3>

                  {/* Short Description */}
                  <p className={styles.projectDesc}>
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className={styles.projectTags}>
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={styles.projectTag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project */}
                  <Link
                    to={`/projects/${project.id}`}
                    className={styles.projectLink}
                  >
                    View Project <span>→</span>
                  </Link>

                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
            onClick={handleNext}
            aria-label="Next projects"
          >
            <span>→</span>
          </button>

        </div>

        {/* Show All Projects */}
        <div className="text-center">
          <Link
            to="/projects"
            className={styles.showAllBtn}
          >
            Show All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}