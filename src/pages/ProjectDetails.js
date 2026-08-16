import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projectsData';
import styles from './ProjectDetails.module.css';
import ThemeToggle from '../components/ThemeToggle';

export default function ProjectDetails() {
  const { projectId } = useParams();

  const project = projectsData.find(
    (item) => item.id === projectId
  );

  // If someone enters an invalid project URL
  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>

        <Link to="/projects" className={styles.backButton}>
          ← Back to All Projects
        </Link>
      </div>
    );
  }

return (
  <>
 <div className={styles.projectPage}>

  <div className={styles.detailsThemeToggle}>
    <ThemeToggle />
  </div>
      {/* Back to All Projects */}
      <div className={styles.container}>
        <Link to="/projects" className={styles.backLink}>
          ← Back to All Projects
        </Link>
      </div>

      {/* ================================
          PROJECT HERO
          ================================ */}
      <section className={styles.heroSection}>
        <div className={styles.container}>

          <div className={styles.heroGrid}>

            {/* Project information */}
            <div className={styles.heroContent}>

              <h1 className={styles.projectName}>
                {project.name}
              </h1>

              <p className={styles.shortDescription}>
                {project.shortDescription}
              </p>

              <div className={styles.projectMeta}>

                <div className={styles.metaCard}>
                  <span className={styles.metaLabel}>
                    Year
                  </span>
                  <span className={styles.metaValue}>
                    {project.year}
                  </span>
                </div>

                <div className={styles.metaCard}>
                  <span className={styles.metaLabel}>
                    Team
                  </span>
                  <span className={styles.metaValue}>
                    {project.teamSize}
                  </span>
                </div>

              </div>

            </div>

            {/* Project image */}
            <div className={styles.heroImageWrapper}>
              <img
                src={project.image}
                alt={project.name}
                className={styles.heroImage}
              />
            </div>

          </div>

        </div>
      </section>


      {/* ================================
          PROJECT CONTENT
          ================================ */}
      <section className={styles.contentSection}>
        <div className={styles.container}>

          {/* What it does */}
          <section className={styles.contentBlock}>

            <div className={styles.sectionIcon}>
              ♥
            </div>

            <div className={styles.sectionContent}>

              <h2>What it does</h2>

              <p>
                {project.overview}
              </p>

            </div>

          </section>


          {/* How it works */}
          {project.howItWorks && project.howItWorks.length > 0 && (
            <section className={styles.contentBlock}>

              <div className={styles.sectionIcon}>
                →
              </div>

              <div className={styles.sectionContent}>

                <h2>How it works</h2>

                <ol className={styles.stepsList}>
                  {project.howItWorks.map((step, index) => (
                    <li key={index}>
                      <span className={styles.stepNumber}>
                        {index + 1}
                      </span>

                      <span>{step}</span>
                    </li>
                  ))}
                </ol>

              </div>

            </section>
          )}


          {/* Key Features */}
          <section className={styles.contentBlock}>

            <div className={styles.sectionIcon}>
              ★
            </div>

            <div className={styles.sectionContent}>

              <h2>Key Features</h2>

              <div className={styles.featureGrid}>

                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className={styles.featureCard}
                  >
                    <div className={styles.featureNumber}>
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <p>{feature}</p>
                  </div>
                ))}

              </div>

            </div>

          </section>


          {/* Technology */}
          <section className={styles.contentBlock}>

            <div className={styles.sectionIcon}>
              &lt;/&gt;
            </div>

            <div className={styles.sectionContent}>

              <h2>Technology Used</h2>

              <div className={styles.techGroups}>

                {Object.entries(project.techStack).map(
                  ([category, technologies]) => (
                    <div
                      key={category}
                      className={styles.techGroup}
                    >

                      <h3>
                        {formatCategory(category)}
                      </h3>

                      <div className={styles.techPills}>
                        {technologies.map((tech, index) => (
                          <span
                            key={index}
                            className={styles.techPill}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  )
                )}

              </div>

            </div>

          </section>


          {/* My Contribution */}
          <section className={styles.contentBlock}>

            <div className={styles.sectionIcon}>
              ●
            </div>

            <div className={styles.sectionContent}>

              <h2>My Contribution</h2>

              <p>
                {project.role}
              </p>

            </div>

          </section>


          {/* Links */}
          <div className={styles.projectLinks}>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.actionButton} ${styles.githubButton}`}
              >
                View on GitHub ↗
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.actionButton} ${styles.demoButton}`}
              >
                Live Demo ↗
              </a>
            )}

          </div>


          {/* ================================
              CONTACT CARD
              ================================ */}
          <section className={styles.contactCard}>

            <div className={styles.contactIcon}>
              ✉
            </div>

            <div className={styles.contactContent}>

              <h2>
                Have an <span>idea?</span>
              </h2>

              <p>
                Feel free to reach me on Gmail or LinkedIn.
              </p>

              <div className={styles.contactLinks}>

                <a
                  href="mailto:v2005varna@gmail.com"
                  className={styles.contactButton}
                >
                  ✉ Email Me
                </a>

                <a
                  href="https://www.linkedin.com/in/varna-vanamala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactButton}
                >
                  in LinkedIn
                </a>

              </div>

            </div>

          </section>

        </div>
      </section>

        </div>
  </>
);
}


/* Convert:
   machineLearning → Machine Learning
   dataAndAPIs → Data And APIs
*/
function formatCategory(category) {
  return category
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (letter) => letter.toUpperCase());
}