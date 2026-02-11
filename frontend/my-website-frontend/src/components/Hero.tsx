'use client';

import React from 'react';
import { TechBackground } from './TechBackground';
import { ParallaxPortrait } from './ParallaxPortrait';
import { Button } from './Button';

export function Hero() {
    return (
        <section className="hero-container">
            {/* Technical background layer */}
            <TechBackground />

            {/* Main content */}
            <div className="hero-content">
                {/* Left side - Text content */}
                <div className="hero-text">
                    <div className="hero-badge">
                        <span className="badge-dot" />
                        <span className="badge-text">Available for opportunities</span>
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm{' '}
                        <span className="hero-name">Biniyam Alemayehu</span>
                    </h1>

                    <h2 className="hero-role">Full-Stack Developer</h2>

                    <p className="hero-bio">
                        Full-Stack Developer with hands-on experience building scalable web
                        and mobile applications. Strong in backend API development, database
                        design, and modern frontend frameworks, with a focus on delivering
                        clean, reliable, and user-friendly solutions.
                    </p>

                    <div className="hero-cta">
                        <Button variant="primary" href="#projects">
                            View Projects
                        </Button>
                        <Button variant="ghost" href="#contact">
                            Contact Me
                        </Button>
                    </div>
                </div>

                {/* Right side - Portrait */}
                <div className="hero-portrait">
                    <ParallaxPortrait />
                </div>
            </div>

            <style jsx>{`
        .hero-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-8);
          overflow: hidden;
          background: var(--color-background);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-16);
          align-items: center;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-6);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-2);
          padding: var(--spacing-2) var(--spacing-4);
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          width: fit-content;
          animation: fadeInUp 0.6s ease-out;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--color-primary);
          border-radius: 50%;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 0 0 var(--color-primary);
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 0 4px rgba(139, 30, 63, 0.3);
          }
        }

        .badge-text {
          font-family: var(--font-body);
          font-size: var(--font-size-sm);
          color: var(--color-text-secondary);
          font-weight: var(--font-weight-medium);
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: var(--font-size-h1);
          font-weight: var(--font-weight-extrabold);
          line-height: var(--line-height-tight);
          color: var(--color-text-primary);
          margin: 0;
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        .hero-name {
          background: linear-gradient(
            135deg,
            var(--color-primary-light) 0%,
            var(--color-primary) 50%,
            var(--color-primary-dark) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }

        .hero-role {
          font-family: var(--font-heading);
          font-size: var(--font-size-h3);
          font-weight: var(--font-weight-semibold);
          color: var(--color-text-accent);
          margin: 0;
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        .hero-bio {
          font-family: var(--font-body);
          font-size: var(--font-size-lg);
          line-height: var(--line-height-relaxed);
          color: var(--color-text-secondary);
          margin: 0;
          max-width: 600px;
          animation: fadeInUp 0.6s ease-out 0.3s both;
        }

        .hero-cta {
          display: flex;
          gap: var(--spacing-4);
          margin-top: var(--spacing-4);
          animation: fadeInUp 0.6s ease-out 0.4s both;
        }

        .hero-portrait {
          height: 600px;
          animation: fadeIn 0.8s ease-out 0.2s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Responsive design */
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-12);
            text-align: center;
          }

          .hero-text {
            align-items: center;
          }

          .hero-bio {
            max-width: 100%;
          }

          .hero-portrait {
            height: 500px;
          }

          .hero-title {
            font-size: var(--font-size-h2);
          }

          .hero-role {
            font-size: var(--font-size-h4);
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: var(--spacing-4);
          }

          .hero-title {
            font-size: var(--font-size-h3);
          }

          .hero-role {
            font-size: var(--font-size-h5);
          }

          .hero-bio {
            font-size: var(--font-size-base);
          }

          .hero-cta {
            flex-direction: column;
            width: 100%;
          }

          .hero-portrait {
            height: 400px;
          }
        }
      `}</style>
        </section>
    );
}

