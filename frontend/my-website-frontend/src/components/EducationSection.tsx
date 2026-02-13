'use client';

import React from 'react';

const education = [
    {
        title: "BSc in Computer Science",
        institution: "Addis Ababa University",
        date: "2018 - 2022",
        description: "Specialized in Software Engineering and Database Systems. Graduated with Great Distinction.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        )
    },
    {
        title: "Full-Stack Web Development",
        institution: "Udacity (NanoDegree)",
        date: "2023",
        description: "Advanced training in React, Node.js, and Cloud Deployment architectures.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ),
        certificateUrl: "#"
    }
];

const certifications = [
    {
        title: "AWS Certified Developer – Associate",
        issuer: "Amazon Web Services",
        date: "Oct 2024",
        link: "#"
    },
    {
        title: "Meta Frontend Developer Professional Certificate",
        issuer: "Meta (Coursera)",
        date: "Jan 2024",
        link: "#"
    },
    {
        title: "Oracle Certified Professional: Java SE Programmer",
        issuer: "Oracle",
        date: "May 2023",
        link: "#"
    }
];

export function EducationSection() {
    return (
        <section className="edu-section">
            <h2 className="section-title">Education & Certifications</h2>

            <div className="edu-grid">
                {/* Education Cards */}
                <div className="edu-column">
                    <h3 className="column-title">Academic Journey</h3>
                    <div className="cards-stack">
                        {education.map((item, idx) => (
                            <div key={idx} className="edu-card glass">
                                <div className="card-icon">{item.icon}</div>
                                <div className="card-info">
                                    <div className="card-header">
                                        <h4>{item.title}</h4>
                                        <span className="date-badge">{item.date}</span>
                                    </div>
                                    <p className="institution">{item.institution}</p>
                                    <p className="description">{item.description}</p>
                                    {item.certificateUrl && (
                                        <a href={item.certificateUrl} className="cert-link">View Certificate &rarr;</a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications List */}
                <div className="edu-column">
                    <h3 className="column-title">Professional Training</h3>
                    <div className="certs-list glass">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="cert-item">
                                <div className="cert-info">
                                    <p className="cert-title">{cert.title}</p>
                                    <p className="cert-meta">{cert.issuer} • {cert.date}</p>
                                </div>
                                <a href={cert.link} className="cert-icon-link">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .edu-section {
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

        .edu-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
        }

        .column-title {
          font-family: 'Gilroy-Black', sans-serif;
          font-size: 1.4rem;
          color: white;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .column-title::after {
          content: "";
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, var(--color-primary), transparent);
        }

        .cards-stack {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .edu-card {
          padding: 2rem;
          border-radius: var(--radius-lg);
          display: flex;
          gap: 1.5rem;
          transition: all 0.4s ease;
          border-color: rgba(255, 255, 255, 0.05);
        }

        .edu-card:hover {
          transform: translateX(10px);
          border-color: var(--color-primary);
          background: rgba(255, 0, 60, 0.03);
        }

        .card-icon {
          width: 3rem;
          height: 3rem;
          color: var(--color-primary);
          flex-shrink: 0;
          opacity: 0.8;
        }

        .card-icon svg {
          width: 100%;
          height: 100%;
        }

        .card-info {
          flex: 1;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
          gap: 1rem;
        }

        .card-header h4 {
          font-family: 'Gilroy-Black', sans-serif;
          font-size: 1.1rem;
          color: white;
          margin: 0;
        }

        .date-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--color-primary);
          background: rgba(255, 0, 60, 0.1);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          white-space: nowrap;
        }

        .institution {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          margin: 0 0 0.75rem 0;
          font-weight: 600;
        }

        .description {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin: 0 0 1rem 0;
        }

        .cert-link {
          font-family: 'Gilroy-Black', sans-serif;
          font-size: 0.75rem;
          color: var(--color-primary);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: gap 0.3s ease;
        }

        .cert-link:hover {
          color: white;
          letter-spacing: 1.5px;
        }

        .certs-list {
          padding: 2rem;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .cert-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .cert-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .cert-item:hover {
          padding-left: 0.5rem;
        }

        .cert-title {
          font-family: 'Gilroy-Black', sans-serif;
          font-size: 0.95rem;
          color: white;
          margin: 0 0 0.25rem 0;
        }

        .cert-meta {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
          margin: 0;
        }

        .cert-icon-link {
          color: var(--color-text-muted);
          transition: all 0.3s ease;
        }

        .cert-item:hover .cert-icon-link {
          color: var(--color-primary);
          transform: scale(1.2);
        }

        .cert-icon-link svg {
          width: 1.2rem;
          height: 1.2rem;
        }

        @media (max-width: 1024px) {
          .edu-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .edu-card {
            flex-direction: column;
            gap: 1rem;
            padding: 1.5rem;
          }
          .card-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
        </section>
    );
}
