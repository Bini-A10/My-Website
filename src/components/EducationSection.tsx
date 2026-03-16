import React from 'react';

const education = [
    {
        title: "BSc in Computer Science",
        institution: "Unity University",
        date: "2021 – 2025",
        description: "Graduated with Honors, ranking in the Top 10% of the class with a GPA of 3.74. Specialized in Software Engineering, Database Systems, and Full-Stack Development, building strong foundations in modern software development and system design.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        )
    },
    {
        title: "Diploma in Electrical / Electronic Technology (Level IV)",
        institution: "Adama Polytechnic College",
        date: "2016 – 2020",
        description: "Completed a Level IV Diploma in Electrical and Electronic Technology, focusing on electrical systems, electronics fundamentals, and technical troubleshooting. Successfully achieved the Center of Competence (COC) certification, validating professional technical skills.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        )
    }
];

const certifications = [
    {
        title: "BSc Degree in Computer Science",
        issuer: "Unity University",
        date: "2025",
        file: "/images/certificates/BSc Degree in Computer Science.pdf"
    },
    {
        title: "Academic Transcript",
        issuer: "Unity University",
        date: "2025",
        file: "/images/certificates/Academic Transcript.pdf"
    },
    {
        title: "TVET Level IV Qualification Certificate",
        issuer: "Ministry of Science and Higher Education",
        date: "2020",
        file: "/images/certificates/TVET Level IV Qualification Certificate.pdf"
    },
    {
        title: "Technical Level IV Certificate (COC)",
        issuer: "Adama Polytechnic College",
        date: "2020",
        file: "/images/certificates/Technical Level IV Certificate (COC).pdf"
    },
    {
        title: "TVET Level III Qualification Certificate",
        issuer: "Ministry of Science and Higher Education",
        date: "2019",
        file: "/images/certificates/TVET Level III Qualification Certificate.pdf"
    },
    {
        title: "Technical Level III Certificate (COC)",
        issuer: "Adama Polytechnic College",
        date: "2019",
        file: "/images/certificates/Technical Level III Certificate (COC).pdf"
    },
    {
        title: "TVET Level I & II Qualification",
        issuer: "Ministry of Science and Higher Education",
        date: "2018",
        file: "/images/certificates/TVET Level I & II Qualification.pdf"
    },
    {
        title: "Technical Level II Certificate (COC)",
        issuer: "Adama Polytechnic College",
        date: "2018",
        file: "/images/certificates/Technical Level II Certificate (COC).pdf"
    },
    {
        title: "Technical Level I Certificate (COC)",
        issuer: "Adama Polytechnic College",
        date: "2017",
        file: "/images/certificates/Technical Level I Certificate (COC).pdf"
    },
    {
        title: "Red Cross Volunteer",
        issuer: "Ethiopian Red Cross Society",
        date: "2020",
        file: "/images/certificates/Red Cross Volunteer.pdf"
    },
    {
        title: "Managing Projects (B810)",
        issuer: "The Open University",
        date: "2025",
        file: "/images/certificates/Managing Projects (B810).pdf"
    },
    {
        title: "Developing Concurrent Software (D828)",
        issuer: "The Open University",
        date: "2025",
        file: "/images/certificates/Developing Concurrent Software (D828).pdf"
    },
    {
        title: "English for Academic Purposes (ENG)",
        issuer: "The Open University",
        date: "2025",
        file: "/images/certificates/English for Academic Purposes (ENG).pdf"
    },
    {
        title: "Information Literacy (INL)",
        issuer: "The Open University",
        date: "2025",
        file: "/images/certificates/Information Literacy (INL).pdf"
    },
    {
        title: "OOP with Java (MOU)",
        issuer: "The Open University",
        date: "2025",
        file: "/images/certificates/OOP with Java (MOU).pdf"
    },
    {
        title: "Software Coding & Development (SCOD)",
        issuer: "The Open University",
        date: "2025",
        file: "/images/certificates/Software Coding & Development (SCOD).pdf"
    },
    {
        title: "Strategic Management (SM380)",
        issuer: "The Open University",
        date: "2025",
        file: "/images/certificates/Strategic Management (SM380).pdf"
    },
    {
        title: "The Networked World (T175)",
        issuer: "The Open University",
        date: "2025",
        file: "/images/certificates/The Networked World (T175).pdf"
    },
    {
        title: "Software Engineering Principles (T823)",
        issuer: "The Open University",
        date: "2025",
        file: "/images/certificates/Software Engineering Principles (T823).pdf"
    },
    {
        title: "Introduction to Computing & IT (TM112)",
        issuer: "The Open University",
        date: "2025",
        file: "/images/certificates/Introduction to Computing & IT (TM112).pdf"
    },
    {
        title: "Web Technologies (TM255)",
        issuer: "The Open University",
        date: "2025",
        file: "/images/certificates/Web Technologies (TM255).pdf"
    }
];

export function EducationSection() {
    return (
        <section className="accreditation-archive">
            <h2 className="section-title">ACCREDITATION ARCHIVE</h2>

            <div className="archive-grid">
                {/* Left Column: Academic Journey */}
                <div className="archive-column">
                    <div className="column-header">
                        <div className="header-icon-container">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cat-icon">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                <path d="M6 12v5c3 3 9 3 12 0v-5" />
                            </svg>
                        </div>
                        <h3 className="column-title">ACADEMIC JOURNEY</h3>
                    </div>

                    <div className="academic-content">
                        {education.map((item, idx) => (
                            <div key={idx} className="edu-item-card glass">
                                <div className="edu-item-top">
                                    <h4 className="edu-title">{item.title}</h4>
                                    <span className="edu-date">{item.date}</span>
                                </div>
                                <p className="edu-school">{item.institution}</p>
                                <p className="edu-description">{item.description}</p>
                                <div className="edu-badge">
                                    <span className="dot"></span>
                                    <span>Verified Academic Record</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Professional Certifications */}
                <div className="archive-column">
                    <div className="column-header">
                        <div className="header-icon-container">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cat-icon">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <h3 className="column-title">PROFESSIONAL CERTIFICATIONS</h3>
                    </div>

                    <div className="certs-scroll-area">
                        <div className="certs-list">
                            {certifications.map((cert, idx) => (
                                <a
                                    key={idx}
                                    href={cert.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-mini-card glass"
                                >
                                    <div className="cert-info">
                                        <h4 className="cert-name">{cert.title}</h4>
                                        <p className="cert-meta">{cert.issuer} • {cert.date}</p>
                                    </div>
                                    <div className="cert-action">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="open-icon">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .accreditation-archive {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
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

                .archive-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 3rem;
                    align-items: start;
                }

                .archive-column {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .column-header {
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                    margin-bottom: 1rem;
                }

                .header-icon-container {
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

                .cat-icon {
                    width: 1.8rem;
                    height: 1.8rem;
                }

                .column-title {
                    font-family: 'Gilroy-Black', sans-serif;
                    font-size: 1.3rem;
                    color: white;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    margin: 0;
                }

                /* Academic Card Style */
                .edu-item-card {
                    padding: 2.5rem;
                    border-radius: var(--radius-lg);
                    transition: all 0.4s ease;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }

                .edu-item-card:hover {
                    border-color: var(--color-primary);
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 10px 30px rgba(255, 0, 60, 0.15), var(--shadow-glow);
                }

                .edu-item-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1rem;
                    gap: 1rem;
                }

                .edu-title {
                    font-family: 'Gilroy-Black', sans-serif;
                    font-size: 1.4rem;
                    color: white;
                    margin: 0;
                    text-transform: uppercase;
                    line-height: 1.2;
                }

                .edu-date {
                    font-family: var(--font-mono);
                    font-size: 0.85rem;
                    color: var(--color-primary);
                    background: rgba(255, 0, 60, 0.1);
                    padding: 0.4rem 1rem;
                    border-radius: 20px;
                    flex-shrink: 0;
                }

                .edu-school {
                    color: var(--color-text-secondary);
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    font-size: 1.1rem;
                }

                .edu-description {
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.7;
                    margin-bottom: 2rem;
                }

                .edu-badge {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-family: 'Gilroy-Black', sans-serif;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: var(--color-primary);
                }

                .edu-badge .dot {
                    width: 8px;
                    height: 8px;
                    background: var(--color-primary);
                    border-radius: 50%;
                    box-shadow: 0 0 10px var(--color-primary);
                }

                /* Certs Vertical Scroll Style */
                .certs-scroll-area {
                    max-height: 700px;
                    overflow-y: auto;
                    padding-right: 1.5rem;
                    scrollbar-width: thin;
                    scrollbar-color: var(--color-primary) transparent;
                }

                .certs-scroll-area::-webkit-scrollbar {
                    width: 4px;
                }

                .certs-scroll-area::-webkit-scrollbar-thumb {
                    background: var(--color-primary);
                    border-radius: 10px;
                }

                .certs-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }

                .cert-mini-card {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    padding: 1.5rem 2rem;
                    border-radius: 12px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    text-decoration: none;
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }

                .cert-mini-card:hover {
                    background: rgba(255, 0, 60, 0.05);
                    border-color: rgba(255, 0, 60, 0.3);
                    transform: translateX(12px);
                    box-shadow: -5px 5px 20px rgba(255, 0, 60, 0.1);
                }

                .cert-name {
                    font-family: 'Gilroy-Black', sans-serif;
                    font-size: 1.1rem;
                    color: white;
                    margin: 0 0 0.5rem 0;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    line-height: 1.3;
                }

                .cert-meta {
                    font-size: 0.9rem;
                    color: rgba(255, 255, 255, 0.4);
                    margin: 0;
                }

                .cert-action {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-primary);
                    opacity: 0.3;
                    transition: all 0.3s ease;
                    margin-left: 1.5rem;
                }

                .cert-mini-card:hover .cert-action {
                    opacity: 1;
                    transform: scale(1.2);
                }

                .open-icon {
                    width: 1.4rem;
                    height: 1.4rem;
                }

                @media (max-width: 1024px) {
                    .archive-grid {
                        grid-template-columns: 1fr;
                        gap: 5rem;
                    }
                    .certs-scroll-area {
                        max-height: none;
                        padding-right: 0;
                    }
                }

                @media (max-width: 640px) {
                    .accreditation-archive {
                        margin-top: 5rem;
                    }
                    .section-title {
                        font-size: 1.5rem;
                        margin-bottom: 3rem;
                    }
                    .edu-item-card {
                        padding: 1.5rem;
                    }
                    .cert-mini-card {
                        padding: 1.25rem 1.5rem;
                    }
                    .cert-mini-card:hover {
                        transform: translateY(-5px);
                    }
                }
            `}</style>
        </section>
    );
}
