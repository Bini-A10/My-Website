import React, { useState } from 'react';

const education = [
    {
        title: "BSc in Computer Science",
        institution: "Unity University",
        date: "2021 - 2025",
        description: "Graduated with Honors, ranking in the Top 10% of the class with a GPA of 3.74. Specialized in Software Engineering, Database Systems, and Full-Stack Development.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        )
    }
];

const certifications = [
    {
        title: "BSc Degree in Computer Science",
        issuer: "Unity University",
        date: "2025",
        file: "/images/certificates/1.Degree.pdf"
    },
    {
        title: "Academic Transcript",
        issuer: "Unity University",
        date: "2025",
        file: "/images/certificates/2. Transcript.pdf"
    },
    {
        title: "Red Cross First Aid & CPR",
        issuer: "Ethiopian Red Cross Society",
        date: "2023",
        file: "/images/certificates/3. Red Cross Certificate.pdf"
    },
    {
        title: "Managing Projects with Microsoft Project",
        issuer: "The Open University (B810)",
        date: "2024",
        file: "/images/certificates/B810_1_statement.pdf"
    },
    {
        title: "Developing Concurrent Software",
        issuer: "The Open University (D828)",
        date: "2024",
        file: "/images/certificates/D828_1_statement.pdf"
    },
    {
        title: "English for Academic Purposes",
        issuer: "The Open University (ENG)",
        date: "2024",
        file: "/images/certificates/ENG_1_statement.pdf"
    },
    {
        title: "Information Literacy",
        issuer: "The Open University (INL)",
        date: "2024",
        file: "/images/certificates/INL_2_statement.pdf"
    },
    {
        title: "Object-oriented Programming with Java",
        issuer: "The Open University (MOU)",
        date: "2024",
        file: "/images/certificates/MOU_1_statement.pdf"
    },
    {
        title: "Software Coding & Development",
        issuer: "The Open University (SCOD)",
        date: "2024",
        file: "/images/certificates/SCOD_1_statement.pdf"
    },
    {
        title: "Strategic Management",
        issuer: "The Open University (SM380)",
        date: "2024",
        file: "/images/certificates/SM380_1_statement.pdf"
    },
    {
        title: "The Networked World",
        issuer: "The Open University (T175)",
        date: "2024",
        file: "/images/certificates/T175_7_statement.pdf"
    },
    {
        title: "Software Engineering Principles",
        issuer: "The Open University (T823)",
        date: "2024",
        file: "/images/certificates/T823_1_statement.pdf"
    },
    {
        title: "Introduction to Computing & IT",
        issuer: "The Open University (TM112)",
        date: "2024",
        file: "/images/certificates/TM112_1_statement.pdf"
    },
    {
        title: "Web Technologies",
        issuer: "The Open University (TM255)",
        date: "2024",
        file: "/images/certificates/TM255_1_statement.pdf"
    }
];

export function EducationSection() {
    return (
        <section className="edu-section">
            <div className="archive-header">
                <div className="vertical-title">
                    <span>ACCREDITATION</span>
                    <span className="accent">ARCHIVE</span>
                </div>
            </div>

            <div className="edu-content-grid">
                {/* Academic Journey */}
                <div className="academic-column">
                    <h3 className="column-label">Academic Journey</h3>
                    <div className="edu-cards">
                        {education.map((item, idx) => (
                            <div key={idx} className="academic-card glass">
                                <div className="card-top">
                                    <span className="edu-icon">{item.icon}</span>
                                    <span className="year-badge">{item.date}</span>
                                </div>
                                <h4>{item.title}</h4>
                                <p className="school">{item.institution}</p>
                                <p className="desc">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Horizontal Scroll */}
                <div className="certs-column">
                    <div className="certs-header">
                        <h3 className="column-label">Professional Certifications</h3>
                        <div className="scroll-hint">
                            <span>Scroll</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </div>
                    </div>
                    
                    <div className="horizontal-scroll-wrapper">
                        <div className="certs-track">
                            {certifications.map((cert, idx) => (
                                <a 
                                    key={idx} 
                                    href={cert.file} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="cert-card glass"
                                >
                                    <div className="cert-status">
                                        <span className="status-dot"></span>
                                        VERIFIED DOCUMENT
                                    </div>
                                    <h4 className="cert-name">{cert.title}</h4>
                                    <p className="cert-issuer">{cert.issuer}</p>
                                    <div className="cert-footer">
                                        <span className="cert-date">{cert.date}</span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="clip-icon">
                                            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                                        </svg>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .edu-section {
                    width: 100%;
                    max-width: 1400px;
                    margin: 8rem auto 0;
                    padding: 0 2rem;
                    display: grid;
                    grid-template-columns: 120px 1fr;
                    gap: 3rem;
                }

                .archive-header {
                    border-right: 1px solid rgba(255, 255, 255, 0.1);
                    padding-right: 2rem;
                }

                .vertical-title {
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                    font-family: 'Ethnocentric', sans-serif;
                    font-size: 2.5rem;
                    color: rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    text-transform: uppercase;
                    height: 100%;
                    white-space: nowrap;
                }

                .vertical-title .accent {
                    color: var(--color-primary);
                    opacity: 0.8;
                }

                .edu-content-grid {
                    display: grid;
                    grid-template-columns: 1fr 2.5fr;
                    gap: 4rem;
                    overflow: hidden;
                }

                .column-label {
                    font-family: 'Gilroy-Black', sans-serif;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    color: rgba(255, 255, 255, 0.4);
                    margin-bottom: 2rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .column-label::after {
                    content: '';
                    flex: 1;
                    height: 1px;
                    background: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);
                }

                /* Academic Card */
                .edu-cards {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .academic-card {
                    padding: 2rem;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    transition: all 0.4s ease;
                }

                .academic-card:hover {
                    border-color: var(--color-primary);
                    background: rgba(255, 0, 60, 0.03);
                    transform: translateY(-5px);
                }

                .card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .edu-icon {
                    width: 2.5rem;
                    height: 2.5rem;
                    color: var(--color-primary);
                    opacity: 0.8;
                }

                .year-badge {
                    font-family: var(--font-mono);
                    font-size: 0.8rem;
                    color: var(--color-primary);
                    background: rgba(255, 0, 60, 0.1);
                    padding: 0.4rem 1rem;
                    border-radius: 20px;
                }

                .academic-card h4 {
                    font-family: 'Gilroy-Black', sans-serif;
                    font-size: 1.25rem;
                    color: white;
                    margin: 0 0 0.5rem 0;
                }

                .school {
                    color: var(--color-text-secondary);
                    font-weight: 600;
                    margin: 0 0 1rem 0;
                }

                .desc {
                    font-size: 0.95rem;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.6;
                    margin: 0;
                }

                /* Certs Horizontal Scroll */
                .certs-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                .scroll-hint {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--color-primary);
                    font-family: 'Gilroy-Black', sans-serif;
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .scroll-hint .arrow {
                    width: 1rem;
                    height: 1rem;
                    animation: bounceRight 2s infinite;
                }

                @keyframes bounceRight {
                    0%, 20%, 50%, 80%, 100% {transform: translateX(0);}
                    40% {transform: translateX(5px);}
                    60% {transform: translateX(3px);}
                }

                .horizontal-scroll-wrapper {
                    overflow-x: auto;
                    padding-bottom: 2rem;
                    margin: 0 -1rem;
                    scrollbar-width: none; /* Firefox */
                }

                .horizontal-scroll-wrapper::-webkit-scrollbar {
                    display: none; /* Chrome/Safari */
                }

                .certs-track {
                    display: flex;
                    gap: 1.5rem;
                    padding: 0 1rem;
                }

                .cert-card {
                    flex: 0 0 300px;
                    padding: 1.5rem;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    text-decoration: none;
                    transition: all 0.4s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }

                .cert-card:hover {
                    border-color: var(--color-primary);
                    background: rgba(255, 0, 60, 0.03);
                    transform: translateY(-5px);
                }

                .cert-status {
                    font-size: 0.65rem;
                    font-family: 'Gilroy-Black', sans-serif;
                    letter-spacing: 1.5px;
                    color: rgba(255, 255, 255, 0.5);
                    display: flex;
                    align-items: center;
                    gap: 0.6rem;
                }

                .status-dot {
                    width: 6px;
                    height: 6px;
                    background: var(--color-primary);
                    border-radius: 50%;
                    box-shadow: 0 0 8px var(--color-primary);
                }

                .cert-name {
                    font-family: 'Gilroy-Black', sans-serif;
                    font-size: 1rem;
                    color: white;
                    margin: 0;
                    line-height: 1.4;
                    min-height: 2.8rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .cert-issuer {
                    font-size: 0.85rem;
                    color: var(--color-text-secondary);
                    margin: 0;
                }

                .cert-footer {
                    margin-top: auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 1rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }

                .cert-date {
                    font-family: var(--font-mono);
                    font-size: 0.75rem;
                    color: var(--color-primary);
                }

                .clip-icon {
                    width: 1rem;
                    height: 1rem;
                    color: rgba(255, 255, 255, 0.2);
                    transition: all 0.3s ease;
                }

                .cert-card:hover .clip-icon {
                    color: var(--color-primary);
                    transform: rotate(-15deg);
                }

                @media (max-width: 1200px) {
                    .edu-section {
                        grid-template-columns: 1fr;
                    }
                    .archive-header {
                        display: none;
                    }
                    .edu-content-grid {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }
                }

                @media (max-width: 768px) {
                    .edu-section {
                        margin-top: 5rem;
                        padding: 0 1.5rem;
                    }
                    .academic-card {
                        padding: 1.5rem;
                    }
                    .cert-card {
                        flex: 0 0 260px;
                    }
                }
            `}</style>
        </section>
    );
}
