import React, { useEffect, useRef, useState } from 'react';
import {
  FaCode,
  FaGlobe,
  FaLayerGroup,
  FaServer,
  FaDatabase,
  FaProjectDiagram,
  FaToolbox,
  FaCompass,
} from 'react-icons/fa';

const expertise = [
  {
    title: 'Programming & Problem Solving',
    icon: FaCode,
    skills: ['C++', 'Java', 'Python', 'SQL'],
  },
  {
    title: 'Web Development',
    icon: FaGlobe,
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Tailwind CSS',
      'MERN Stack',
    ],
  },
  {
    title: 'Frontend & Interface Design',
    icon: FaLayerGroup,
    skills: [
      'UI Design',
      'Responsive Design',
      'Wireframing',
      'Prototyping',
    ],
  },
  {
    title: 'Backend & APIs',
    icon: FaServer,
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    skills: ['MongoDB', 'MySQL', 'SQLite'],
  },
  {
    title: 'Core Concepts & Practices',
    icon: FaProjectDiagram,
    skills: [
      'OOP',
      'DBMS',
      'Data Structures',
      'Software Design Principles',
      'Version Control',
      'Agile Development',
      'Unit Testing — Basic',
      'CI/CD — Basic',
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: FaToolbox,
    skills: ['GitHub', 'Vercel', 'Netlify', 'Render', 'Figma'],
  },
  {
    title: 'Currently Exploring',
    icon: FaCompass,
    skills: ['Generative AI', 'Machine Learning', 'RAG', 'LLMs', 'LangChain'],
  },
];

function getCirclePosition(index, total) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  const radius = total > 6 ? 39 : 38;

  return {
    left: `${50 + Math.cos(angle) * radius}%`,
    top: `${50 + Math.sin(angle) * radius}%`,
    transform: 'translate(-50%, -50%)',
  };
}

export default function Expertise() {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  const cardRefs = useRef([]);

  /*
   * Observe each card individually.
   * This makes the reveal animation happen as the cards
   * actually enter the viewport.
   */
  useEffect(() => {
    const observers = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((current) => {
              const updated = new Set(current);
              updated.add(index);
              return updated;
            });

            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -40px 0px',
        }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleCardClick = (index) => {
    setActiveCard((current) =>
      current === index ? null : index
    );
  };

  return (
    <section
      id="expertise"
      className="relative overflow-hidden py-20 sm:py-24"
      style={{
        backgroundColor: 'var(--card-bg)',
        color: 'var(--text-primary)',
        transition:
          'background-color 0.4s ease, color 0.4s ease',
      }}
    >
      <div className="container mx-auto px-6">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <h2 className="text-4xl font-bold sm:text-5xl">
            My{' '}
            <span className="gradient-text">
              Expertise
            </span>
          </h2>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {expertise.map((item, index) => {
            const Icon = item.icon;

            const expanded =
              activeCard === index ||
              hoveredCard === index;

            const isCardVisible =
              visibleCards.has(index);

            return (
              <div
                key={item.title}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className="relative self-start"
                style={{
                  opacity: isCardVisible ? 1 : 0,
                  transform: isCardVisible
                    ? 'translateY(0)'
                    : 'translateY(45px)',
                  transition: `
                    opacity 700ms ease ${index * 100}ms,
                    transform 700ms ease ${index * 100}ms
                  `,
                }}
              >

                {/* Card */}
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-label={`${expanded ? 'Collapse' : 'Expand'} ${item.title}`}

                  onClick={() => handleCardClick(index)}

                  onMouseEnter={() =>
                    setHoveredCard(index)
                  }

                  onMouseLeave={() =>
                    setHoveredCard(null)
                  }

                  onFocus={() =>
                    setHoveredCard(index)
                  }

                  onBlur={() =>
                    setHoveredCard(null)
                  }

                  className="
                    group relative w-full overflow-hidden
                    rounded-[24px] text-left
                    focus:outline-none
                  "

                  style={{
                    minHeight: expanded
                      ? '380px'
                      : '270px',

                    backgroundColor:
                      'var(--bg-primary)',

                    border: `1px solid ${
                      expanded
                        ? 'var(--accent)'
                        : 'transparent'
                    }`,

                    boxShadow: expanded
                      ? '0 16px 38px rgba(0, 0, 0, 0.12)'
                      : 'var(--card-shadow)',

                    transition:
                      'min-height 450ms ease, border-color 350ms ease, box-shadow 350ms ease, background-color 400ms ease',
                  }}
                >

                  {/* Central Card Content */}
                  <div
                    className="
                      absolute left-1/2 top-1/2
                      z-20 flex
                      w-[75%]
                      -translate-x-1/2
                      -translate-y-1/2
                      flex-col items-center
                      text-center
                    "
                  >

                    {/* Category Icon */}
                    <span
                      className="
                        mb-4 flex h-14 w-14
                        items-center justify-center
                        rounded-full text-xl
                        shadow-sm
                      "
                      style={{
                        background:
                          index % 2 === 0
                            ? 'var(--accent)'
                            : 'var(--secondary)',

                        color: '#fff',

                        transform: expanded
                          ? 'scale(0.92)'
                          : 'scale(1)',

                        transition:
                          'transform 350ms ease',
                      }}
                    >
                      <Icon />
                    </span>

                    {/* Category Heading */}
                    <h3
                      className="
                        text-xl font-semibold
                        leading-snug
                        sm:text-2xl
                      "
                      style={{
                        color:
                          'var(--text-primary)',
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Instruction */}
                    <p
                      className="
                        mt-3 text-xs uppercase
                        tracking-[0.18em]
                      "
                      style={{
                        color:
                          'var(--text-primary)',

                        opacity: expanded
                          ? 0
                          : 0.5,

                        transform: expanded
                          ? 'translateY(8px)'
                          : 'translateY(0)',

                        transition:
                          'opacity 250ms ease, transform 250ms ease',
                      }}
                    >
                      Hover or tap to explore
                    </p>

                  </div>

                  {/* Skill Circles */}
                  <div
                    className="
                      pointer-events-none
                      absolute inset-0 z-10
                    "
                  >
                    {item.skills.map(
                      (skill, skillIndex) => (
                        <span
                          key={skill}
                          className="
                            absolute flex
                            max-w-[96px]
                            items-center
                            justify-center
                            rounded-full
                            px-3 py-2
                            text-center
                            text-[10px]
                            font-medium
                            leading-tight
                            sm:max-w-[108px]
                            sm:text-[11px]
                          "
                          style={{
                            ...getCirclePosition(
                              skillIndex,
                              item.skills.length
                            ),

                            minHeight: '42px',

                            /*
                             * Only the outline has the
                             * blue/peach accent color.
                             */
                            backgroundColor:
                              'transparent',

                            border: `1.5px solid ${
                              skillIndex % 2 === 0
                                ? 'var(--accent)'
                                : 'var(--secondary)'
                            }`,

                            /*
                             * Light mode:
                             * dark text.
                             *
                             * Dark mode:
                             * light text.
                             *
                             * The existing theme variable
                             * handles this automatically.
                             */
                            color:
                              'var(--text-primary)',

                            opacity: expanded
                              ? 1
                              : 0,

                            scale: expanded
                              ? 1
                              : 0.35,

                            transition: `
                              opacity 350ms ease ${
                                skillIndex * 45
                              }ms,
                              scale 450ms
                              cubic-bezier(
                                0.2,
                                0.8,
                                0.2,
                                1
                              ) ${
                                skillIndex * 45
                              }ms
                            `,

                            boxShadow: expanded
                              ? '0 4px 12px rgba(0, 0, 0, 0.05)'
                              : 'none',
                          }}
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>

                  {/* Soft Background Glow */}
                  <span
                    className="
                      pointer-events-none
                      absolute left-1/2 top-1/2
                      z-0 h-44 w-44
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                    "
                    style={{
                      background:
                        index % 2 === 0
                          ? 'var(--accent)'
                          : 'var(--secondary)',

                      opacity: expanded
                        ? 0.08
                        : 0,

                      transform: expanded
                        ? 'translate(-50%, -50%) scale(1.2)'
                        : 'translate(-50%, -50%) scale(0.7)',

                      transition:
                        'opacity 450ms ease, transform 450ms ease',
                    }}
                  />

                </button>
              </div>
            );
          })}

        </div>

        {/* Currently Exploring */}
        <p
          className="
            mx-auto mt-10
            max-w-2xl
            text-center
            text-sm
            leading-relaxed
            sm:mt-12
          "
          style={{
            color: 'var(--text-primary)',
            opacity: 0.65,
          }}
        >
          
        </p>

      </div>
    </section>
  );
}