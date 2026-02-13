'use client';

import React from 'react';

const skillCategories = [
    {
        title: "Frontend Development",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-cat-icon">
                <path d="M2 12l10-10 10 10-10 10z" />
                <path d="M7 12l5-5 5 5-5 5z" />
            </svg>
        ),
        skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"]
    },
    {
        title: "Backend & Systems",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-cat-icon">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
        ),
        skills: ["Node.js", "Spring Boot", "Laravel", "Python/Django", "PHP", "Java"]
    },
    {
        title: "Database & Storage",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-cat-icon">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
        ),
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "SQLite"]
    },
    {
        title: "Tools & DevOps",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-cat-icon">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        skills: ["Docker", "AWS", "Git/GitHub", "CI/CD", "Linux", "Postman"]
    },
    {
        title: "Mobile Development",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-cat-icon">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        ),
        skills: ["Flutter", "React Native", "Dart", "Android Studio"]
    },
    {
        title: "Design & UX",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-cat-icon">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
            </svg>
        ),
        skills: ["Figma", "UI/UX Design", "Responsive Web Design", "Adobe Creative Suite"]
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
