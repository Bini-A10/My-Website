'use client';

import React from 'react';

export function ResumeSection() {
    return (
        <section className="resume-section">
            <div className="resume-content-grid">
                {/* Left side: Summary & Experience Highlights */}
                <div className="resume-text glass">
                    <h2 className="resume-title">Professional Profile</h2>
                    <p className="resume-summary">
                        Results-driven Full-Stack Developer with a passion for building high-performance,
                        scalable web and mobile applications. Expert in modern JavaScript frameworks,
                        robust backend architectures, and cloud-native solutions. Proven track record
                        of delivering production-grade software that solves complex business problems.
                    </p>

                    <div className="highlights-container">
                        <div className="highlight-item">
                            <span className="dot" />
                            <div className="highlight-text">
                                <strong>5+ Years Experience</strong> in full-stack development across various industries.
                            </div>
                        </div>
                        <div className="highlight-item">
                            <span className="dot" />
                            <div className="highlight-text">
                                <strong>Architected</strong> and deployed multiple SaaS platforms from scratch.
                            </div>
                        </div>
                        <div className="highlight-item">
                            <span className="dot" />
                            <div className="highlight-text">
                                <strong>Optimization Specialist</strong> reducing API latency by 40% in recent projects.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side: Action Area */}
                <div className="resume-action glass">
                    <div className="action-header">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="doc-icon">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                        <h3>Ready to Work?</h3>
                    </div>

                    <p className="action-desc">
                        Looking for a dedicated developer to join your team?
                        Download my comprehensive CV for a deep dive into my
                        technical skills and work history.
                    </p>

                    <a href="/cv/Biniyam_Alemayehu_CV.pdf" download className="download-btn shadow-glow">
                        <span className="btn-content">
                            Download Resume (PDF)
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="download-icon">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>

            <style jsx>{`
        .resume-section {
          width: 100%;
          max-width: 1200px;
          margin-top: 8rem;
          padding: 0 1rem;
        }

        .resume-content-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2rem;
        }

        .resume-text {
          padding: 3rem;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .resume-title {
          font-family: 'Ethnocentric', sans-serif;
          font-size: 1.8rem;
          color: var(--color-primary);
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .resume-summary {
          font-family: var(--font-body);
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
          margin: 0;
        }

        .highlights-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .highlight-item {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }

        .dot {
          width: 10px;
          height: 10px;
          background: var(--color-primary);
          border-radius: 50%;
          margin-top: 0.6rem;
          box-shadow: 0 0 10px var(--color-primary);
          flex-shrink: 0;
        }

        .highlight-text {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }

        .highlight-text strong {
          color: white;
          font-family: 'Gilroy-Black', sans-serif;
          text-transform: uppercase;
          font-size: 0.9rem;
          margin-right: 0.25rem;
        }

        .resume-action {
          padding: 3rem;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: 2rem;
          border-color: rgba(255, 0, 60, 0.1);
        }

        .action-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .doc-icon {
          width: 3.5rem;
          height: 3.5rem;
          color: var(--color-primary);
          opacity: 0.8;
        }

        .action-header h3 {
          font-family: 'Gilroy-Black', sans-serif;
          font-size: 1.5rem;
          color: white;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .action-desc {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin: 0;
          max-width: 300px;
        }

        .download-btn {
          position: relative;
          padding: 1.25rem 2.5rem;
          background: var(--color-primary);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-family: 'Gilroy-Black', sans-serif;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          width: 100%;
        }

        .btn-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          position: relative;
          z-index: 1;
        }

        .download-icon {
          width: 1.25rem;
          height: 1.25rem;
          transition: transform 0.3s ease;
        }

        .download-btn:hover {
          transform: translateY(-5px) scale(1.02);
          background: white;
          color: var(--color-primary);
          box-shadow: 0 15px 30px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 0, 60, 0.4);
        }

        .download-btn:hover .download-icon {
          transform: translateY(3px);
        }

        @media (max-width: 1024px) {
          .resume-content-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .resume-text, .resume-action {
            padding: 2rem 1.5rem;
          }
          .resume-title {
            font-size: 1.5rem;
          }
          .resume-summary {
            font-size: 1rem;
          }
        }
      `}</style>
        </section>
    );
}
