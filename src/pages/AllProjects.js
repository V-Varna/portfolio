import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData';
import styles from './AllProjects.module.css';
import ThemeToggle from '../components/ThemeToggle';

export default function AllProjects() {
  return (
    
    <main className={styles.allProjectsPage}>
      <div className={styles.themeToggle}>
  <ThemeToggle />
</div>

      {/* Back to Portfolio */}
      <div className={styles.topBar}>
        <Link to="/" className={styles.backButton}>
          ← Back to Portfolio
        </Link>
      </div>

      {/* Page Heading */}
      <section className={styles.headingSection}>
        <h1 className={styles.pageTitle}>
          All <span>Projects</span>
        </h1>

        <p className={styles.pageDescription}>
          A collection of projects I have worked on across web development,
          machine learning, and software applications.
        </p>
      </section>

      {/* All Project Cards */}
      <section className={styles.projectsSection}>
        <div className={styles.projectsGrid}>

          {projectsData.map((project) => (
            <article
              key={project.id}
              className={styles.projectCard}
            >

              {/* Project Image */}
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.name}
                  className={styles.projectImage}
                />
              </div>

              {/* Project Content */}
              <div className={styles.projectContent}>

                <h2 className={styles.projectTitle}>
                  {project.name}
                </h2>

                <p className={styles.projectDescription}>
                  {project.shortDescription}
                </p>

                {/* Technology Pills */}
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
                  className={styles.viewProject}
                >
                  View Project <span>→</span>
                </Link>

              </div>

            </article>
          ))}

        </div>
      </section>

    </main>
  );
}