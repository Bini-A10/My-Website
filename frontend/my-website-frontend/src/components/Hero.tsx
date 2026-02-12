'use client';

import { ParallaxPortrait } from './ParallaxPortrait';
import { Button } from './Button';

export function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">

        {/* Left side - Content */}
        <div className="hero-main">


          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name">Biniyam Alemayehu</span>
          </h1>

          <div className="hero-description-container">
            <div className="accent-line" />
            <p className="hero-bio">
              Full-Stack Developer specializing in scalable, production-grade web and mobile
              applications. Experienced in designing robust backend architectures, optimized
              databases, and modern frontend experiences with a strong focus on performance,
              reliability, and long-term maintainability.
            </p>
          </div>


        </div>

        {/* Right side - Portrait Area */}
        <div className="hero-portrait-container">
          <ParallaxPortrait />

        </div>
      </div>

      <style jsx>{`
        .hero-container {
          position: relative;
          min-height: 100vh;
          /* Sophisticated dark gradient overlay for better text contrast and premium feel */
          background: 
            linear-gradient(rgba(5, 5, 5, 0.4), rgba(5, 5, 5, 0.4)),
            url('/images/BG.png') no-repeat center center;
          background-size: cover;
          overflow: hidden;
          padding: 6rem 4rem;
          display: flex;
          flex-direction: column;
        }

        .hero-content {
          position: relative;
          z-index: 2000;
          display: flex;
          flex: 1;
          align-items: center;
          gap: 8rem;
          padding-top: 2rem;
          justify-content: space-between;
        }

        .hero-bg-text {
          position: absolute;
          left: -2rem;
          top: 45%;
          transform: translateY(-50%);
          font-size: 18vw;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.02);
          white-space: nowrap;
          pointer-events: none;
          z-index: -1;
          text-transform: uppercase;
          letter-spacing: -5px;
        }

        .hero-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 700px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1;
          font-family: var(--font-body);
          font-weight: 900;
          color: white;
          margin: 0;
          letter-spacing: -2px;
        }

        .hero-greeting {
           font-size: 0.4em;
           font-weight: 400;
           color: var(--color-text-secondary);
           letter-spacing: 2px;
           text-transform: uppercase;
           display: block;
        }

        .hero-name {
          font-family: 'Ethnocentric', cursive;
          letter-spacing: normal;
          display: block;
          margin-top: 0.5rem;
          background: linear-gradient(to right, white, var(--color-text-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          /* Ensure the name doesn't clip */
          width: max-content;
          max-width: 100%;
        }

        .hero-description-container {
          display: flex;
          gap: 2rem;
          align-items: stretch;
          margin-top: 0.25rem;
        }

        .accent-line {
          width: 4px;
          background: linear-gradient(to bottom, var(--color-primary), transparent);
          flex-shrink: 0;
          border-radius: 2px;
        }

        .hero-bio {
          font-family: 'Gilroy-LightItalic', sans-serif;
          font-size: 1.15rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          max-width: 520px;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .hero-cta {
          display: flex;
          gap: 1.25rem;
          margin-top: 2rem;
          align-items: center;
        }

        .cta-icon-btn {
          width: 3.5rem;
          height: 3.5rem;
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          border: 1px solid var(--glass-border);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all var(--transition-base);
          border-radius: var(--radius-base);
        }

        .cta-icon-btn:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }

        .hero-portrait-container {
          flex: 1.5;
          height: 75vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        @media (max-width: 1200px) {
           .hero-title {
              font-size: 4rem;
           }
        }

        @media (max-width: 1024px) {
          .hero-container {
            padding: 6rem 1.5rem 2rem 1.5rem;
          }
          .hero-content {
            flex-direction: column;
            text-align: center;
            justify-content: center;
            gap: 2rem;
          }
          .hero-main {
            align-items: center;
            max-width: 100%;
          }
          .accent-line {
            display: none;
          }
          .hero-description-container {
            justify-content: center;
          }
          .hero-portrait-container {
             height: 450px;
             width: 100%;
             justify-content: center;
          }
          .hero-bg-text {
            font-size: 25vw;
          }
        }
      `}</style>
    </section>
  );
}
