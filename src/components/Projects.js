import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'FinanceFlow App',
    desc: 'A comprehensive financial management application with intuitive dashboard and transaction tracking.',
    img: 'https://readdy.ai/api/search-image?query=Modern%20finance%20app%20dashboard%20UI%20design%20with%20clean%20interface%2C%20data%20visualization%2C%20transaction%20history%2C%20dark%20and%20light%20mode%20versions%2C%20professional%20UI%20mockup%20on%20device%20screen&width=600&height=400&seq=2&orientation=landscape',
    tags: ['UI Design', 'Prototyping', 'User Research'],
  },
  {
    title: 'FitTrack Mobile App',
    desc: 'A fitness tracking application with personalized workout plans and progress visualization.',
    img: 'https://readdy.ai/api/search-image?query=Fitness%20tracking%20application%20UI%20design%20with%20workout%20progress%20charts%2C%20activity%20tracking%2C%20clean%20modern%20interface%2C%20both%20dark%20and%20light%20mode%20versions%2C%20professional%20UI%20mockup%20on%20device%20screen&width=600&height=400&seq=3&orientation=landscape',
    tags: ['UI Design', 'UX Research', 'Wireframing'],
  },
  {
    title: 'EcoShop E-commerce',
    desc: 'A sustainable e-commerce platform with intuitive product discovery and seamless checkout experience.',
    img: 'https://readdy.ai/api/search-image?query=E-commerce%20website%20UI%20design%20with%20product%20listings%2C%20shopping%20cart%2C%20checkout%20flow%2C%20modern%20and%20clean%20interface%2C%20both%20dark%20and%20light%20mode%20versions%2C%20professional%20UI%20mockup%20on%20desktop%20screen&width=600&height=400&seq=4&orientation=landscape',
    tags: ['UI Design', 'Responsive Design', 'User Testing'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container mx-auto px-6">
        <h2 className={styles.projectsTitle}>
          Featured <span className={styles.accent}>Projects</span>
        </h2>
        <div className={styles.projectsGrid}>
          {projects.map((p, i) => (
            <div key={i} className={styles.projectCard}>
              <img src={p.img} alt={p.title} className={styles.projectImg} />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{p.title}</h3>
                <p className={styles.projectDesc}>{p.desc}</p>
                <div className={styles.projectTags}>
                  {p.tags.map((tag, j) => (
                    <span key={j} className={styles.projectTag}>{tag}</span>
                  ))}
                </div>
                <a href="#" className={styles.projectLink}>
                  View Project <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="#" className={styles.showAllBtn}>Show All Projects</a>
        </div>
      </div>
    </section>
  );
}
