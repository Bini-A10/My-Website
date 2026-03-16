'use client';

import React from 'react';

const skillCategories = [
    {
        title: "Programming Languages",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-cat-icon">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        skills: ["Java", "PHP", "Dart", "C++", "TypeScript", "SQL"]
    },
    {
        title: "Frameworks & Web",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-cat-icon">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
        ),
        skills: ["Laravel", "Spring Boot", "React (TS)", "Next.js", "JavaFX", "Tailwind CSS"]
    },
    {
        title: "Mobile & Desktop",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-cat-icon">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        ),
        skills: ["Flutter", "Dart", "JavaFX", "Mobile Integration", "Material Design"]
    },
    {
        title: "Databases & Queries",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-cat-icon">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
        ),
        skills: ["MySQL", "SQL Server", "MongoDB", "Query Optimization", "Database Design"]
    },
    {
        title: "Tools & Architecture",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-cat-icon">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        skills: ["Docker", "Git/GitHub", "REST API Design", "MVC Structure", "Auth Systems"]
    },
    {
        title: "Professional Skills",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-cat-icon">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        skills: ["Team Leadership", "Task Coordination", "Analytical Thinking", "Amharic & English"]
    }
];

export function SkillsSection() {
    return (
        <section className="skills-section">
            <h2 className="section-title">Technical Expertise</h2>
            <div className="skills-grid">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="skill-card glass">
                        <div className="skill-header">
                            <div className="skill-icon-container">
                                {category.icon}
                            </div>
                            <h3 className="skill-cat-title">{category.title}</h3>
                        </div>
                        <div className="skill-list">
                            {category.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .skills-section {
          width: 100%;
          max-width: 1200px;
          margin-top: 8rem;
          padding: 0 1rem;
        }

        .section-title {
          font-family: 'Ethnocentric', sans-serif;
          font-size: 2rem;
          color: var(--color-primary);
          margin-bottom: 4rem;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 0 15px rgba(255, 0, 60, 0.3);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          border-radius: var(--radius-lg);
        }

        .skill-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: var(--color-primary);
          box-shadow: 0 10px 30px rgba(255, 0, 60, 0.15), var(--shadow-glow);
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .skill-icon-container {
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 0, 60, 0.1);
          border-radius: 12px;
          color: var(--color-primary);
          transition: all 0.3s ease;
        }

        .skill-card:hover .skill-icon-container {
          background: var(--color-primary);
          color: white;
          transform: rotate(10deg);
        }

        :global(.skill-cat-icon) {
          width: 1.8rem;
          height: 1.8rem;
        }

        .skill-cat-title {
          font-family: 'Gilroy-Black', sans-serif;
          font-size: 1.3rem;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          padding: 0.4rem 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          color: var(--color-text-secondary);
          transition: all 0.3s ease;
        }

        .skill-card:hover .skill-tag {
          background: rgba(255, 0, 60, 0.05);
          border-color: rgba(255, 0, 60, 0.2);
          color: white;
        }

        .skill-tag:hover {
          background: var(--color-primary) !important;
          color: white !important;
          border-color: var(--color-primary) !important;
          transform: scale(1.1);
        }

        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skill-card {
            padding: 1.5rem;
          }
        }
      `}</style>
        </section>
    );
}
