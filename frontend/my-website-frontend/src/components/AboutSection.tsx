'use client';

import Image from 'next/image';
import { Button } from './Button';

interface AboutSectionProps {
  greeting: string;
  name: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

export function AboutSection({
  greeting,
  name,
  description,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
  isReversed = false
}: AboutSectionProps) {
  return (
    <section className={`about-section-container ${isReversed ? 'reversed' : ''}`}>
      <div className="about-section-content">
        {/* Text Area */}
        <div className="about-section-text">
          <span className="about-greeting">{greeting}</span>
          <h2 className="about-name">{name}</h2>
          <p className="about-description">{description}</p>
          {ctaText && ctaHref && (
            <div className="about-cta">
              <Button href={ctaHref} variant="primary">
                {ctaText}
              </Button>
            </div>
          )}
        </div>

        {/* Image Area */}
        <div className="about-image-frame">
          <div className="about-image-inner">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={600}
              className="about-portrait"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section-container {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 4rem;
        }

        .about-section-content {
          width: 100%;
          max-width: 1200px;
          display: flex;
          align-items: center;
          gap: 6rem;
          z-index: 10;
        }

        .reversed .about-section-content {
          flex-direction: row-reverse;
        }

        .about-section-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .about-greeting {
          color: var(--color-primary);
          font-family: var(--font-body);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.9rem;
        }

        .about-name {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: white;
          margin: 0;
          line-height: 1.1;
        }

        .about-description {
          font-family: var(--font-body);
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--color-text-secondary);
          max-width: 500px;
          margin: 0;
        }

        .about-cta {
          margin-top: 1rem;
        }

        .about-image-frame {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-image-inner {
          width: 100%;
          max-width: 450px;
          aspect-ratio: 4/5;
          background: var(--color-surface-elevated);
          border-radius: 40px;
          overflow: hidden;
          position: relative;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--glass-border);
        }

        .about-portrait {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        @media (max-width: 1024px) {
          .about-section-container {
            padding: 4rem 2rem;
            min-height: auto;
          }
          .about-section-content,
          .reversed .about-section-content {
            flex-direction: column;
            text-align: center;
            gap: 4rem;
          }
          .about-section-text {
            align-items: center;
          }
          .about-description {
            max-width: 100%;
          }
          .about-image-inner {
            max-width: 400px;
          }
        }

        @media (max-width: 640px) {
          .about-name {
            font-size: 2.5rem;
          }
          .about-image-inner {
            border-radius: 30px;
          }
        }
      `}</style>
    </section>
  );
}
