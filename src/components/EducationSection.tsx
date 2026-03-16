import React, { useState } from 'react';

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
        link: "#",
        image: "/images/myweb/mw1.png"
    },
    {
        title: "Meta Frontend Developer Professional Certificate",
        issuer: "Meta (Coursera)",
        date: "Jan 2024",
        link: "#",
        image: "/images/myweb/mw2.png"
    },
    {
        title: "Oracle Certified Professional: Java SE Programmer",
        issuer: "Oracle",
        date: "May 2023",
        link: "#",
        image: "/images/myweb/mw3.png"
    },
    {
        title: "Google Cloud Professional Architect",
        issuer: "Google",
        date: "Dec 2023",
        link: "#",
        image: "/images/myweb/mw1.png"
    }
];

export function EducationSection() {
    const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

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
                    <h3 className="column-title">Certifications</h3>
                    <div className="certs-scroll-container glass">
                        <div className="certs-list">
                            {certifications.map((cert, idx) => (
                                <div key={idx} className="cert-item" onClick={() => setSelectedCert(cert)}>
                                    <div className="cert-info">
                                        <p className="cert-title">{cert.title}</p>
                                        <p className="cert-meta">{cert.issuer} • {cert.date}</p>
                                    </div>
                                    <button className="cert-icon-link">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificate Modal */}
            {selectedCert && (
                <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
                    <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setSelectedCert(null)}>&times;</button>
                        <div className="modal-header">
                            <h3>{selectedCert.title}</h3>
                            <p>{selectedCert.issuer} • {selectedCert.date}</p>
                        </div>
                        <div className="modal-body">
                            <img src={selectedCert.image} alt={selectedCert.title} />
                        </div>
                        <div className="modal-footer">
                            <a href={selectedCert.link} target="_blank" rel="noopener noreferrer" className="verify-btn">
                                Verify Credential
                            </a>
                        </div>
                    </div>
                </div>
            )}

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

        .certs-scroll-container {
          max-height: 450px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: var(--color-primary) transparent;
        }

        .certs-scroll-container::-webkit-scrollbar {
          width: 4px;
        }

        .certs-scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .certs-scroll-container::-webkit-scrollbar-thumb {
          background-color: var(--color-primary);
          border-radius: 20px;
        }

        .certs-list {
          padding: 2rem;
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
          cursor: pointer;
        }

        .cert-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .cert-item:hover {
          padding-left: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 4px;
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
          background: none;
          border: none;
          color: var(--color-text-muted);
          transition: all 0.3s ease;
          cursor: pointer;
          padding: 0;
        }

        .cert-item:hover .cert-icon-link {
          color: var(--color-primary);
          transform: scale(1.2);
        }

        .cert-icon-link svg {
          width: 1.2rem;
          height: 1.2rem;
        }

        /* Modal Styles */
        .cert-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
        }

        .cert-modal-content {
          background: #0a0a0a;
          border: 1px solid rgba(255, 0, 60, 0.2);
          border-radius: 20px;
          width: 100%;
          max-width: 800px;
          position: relative;
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
          animation: modalAppear 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalAppear {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .close-modal {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          line-height: 1;
          opacity: 0.6;
          transition: 0.3s;
          z-index: 10;
        }

        .close-modal:hover {
          opacity: 1;
          color: var(--color-primary);
          transform: rotate(90deg);
        }

        .modal-header {
          padding: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .modal-header h3 {
          font-family: 'Ethnocentric', sans-serif;
          font-size: 1.2rem;
          color: var(--color-primary);
          margin: 0 0 0.5rem 0;
        }

        .modal-header p {
          color: var(--color-text-secondary);
          font-size: 0.9rem;
          margin: 0;
        }

        .modal-body {
          padding: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #000;
        }

        .modal-body img {
          max-width: 100%;
          max-height: 60vh;
          object-fit: contain;
          border-radius: 8px;
        }

        .modal-footer {
          padding: 2rem;
          display: flex;
          justify-content: center;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .verify-btn {
          font-family: 'Gilroy-Black', sans-serif;
          background: var(--color-primary);
          color: white;
          text-decoration: none;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(255, 0, 60, 0.2);
        }

        .verify-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 0, 60, 0.4);
          background: white;
          color: var(--color-primary);
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
