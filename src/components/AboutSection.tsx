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
  imageWidth?: number;
  imageHeight?: number;
}

export function AboutSection({
  greeting,
  name,
  description,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
  isReversed = false,
  imageWidth = 400,
  imageHeight = 300
}: AboutSectionProps) {
  return (
    <section className={`about-section-container ${isReversed ? 'reversed' : ''}`}>
      <div className="about-section-content">
        {/* Text Area (Card Format) */}
        <div className="about-section-text">
          <div className="about-card">
            <span className="about-greeting">{greeting}</span>
            <h2 className="about-name">{name}</h2>
            <div className="about-description-container">
              {description.split('\n').map((line, index) => {
                const trimmedLine = line.trim();
                const isBullet = trimmedLine.startsWith('✦') || trimmedLine.startsWith('•') || trimmedLine.startsWith('-');

                return (
                  <p key={index} className="about-description">
                    {isBullet ? (
                      <>
                        <span className="bullet-point">{trimmedLine.charAt(0)}</span>
                        {trimmedLine.substring(1)}
                      </>
                    ) : (
                      trimmedLine
                    )}
                  </p>
                );
              })}
            </div>
            {ctaText && ctaHref && (
              <div className="about-cta">
                <Button href={ctaHref} variant="primary">
                  {ctaText}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Image Area */}
        <div className="about-image-frame">
          <div className="about-image-inner">
            {/* Image removed - keeping structure for layout */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section-container {
          position: relative;
          min-height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--spacing-16) var(--spacing-8);
        }

        .about-section-content {
          width: 100%;
          max-width: 1200px;
          display: flex;
          align-items: center;
          gap: clamp(2rem, 5vw, 6rem);
          z-index: 10;
        }

        .reversed .about-section-content {
          flex-direction: row-reverse;
        }

        .about-section-text {
          flex: 5;
          display: flex;
          flex-direction: column;
          z-index: 20;
        }


        .about-greeting {
          color: var(--color-primary);
          font-family: 'Ethnocentric', sans-serif;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 1rem;
          opacity: 0.9;
        }

        .about-name {
          font-family: 'Ethnocentric', sans-serif;
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 900;
          color: white;
          margin: 0;
          line-height: 1.1;
          text-transform: uppercase;
        }

        .about-description-container {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .about-description {
          font-family: var(--font-gilroy-light-italic), sans-serif;
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .bullet-point {
          color: var(--color-primary);
          margin-right: 0.8rem;
          font-weight: bold;
          font-size: 1.5rem;
          vertical-align: middle;
          line-height: 1;
        }

        .about-description:has(text:not(:empty)) {
           /* Handle potential extra spacing from split if needed */
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

      

        .about-portrait {
          display: none;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        @media (max-width: 1024px) {
          .about-section-container {
            padding: var(--spacing-12) var(--spacing-6);
          }
          .about-section-content,
          .reversed .about-section-content {
            flex-direction: column;
            text-align: center;
            gap: 3rem;
          }
          .about-section-text {
            align-items: center;
            width: 100%;
          }
          .about-card {
            text-align: center;
          }
          .about-description-container {
            text-align: left;
            max-width: 800px;
            margin: 0 auto;
          }
          .about-description {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .about-section-container {
            padding: var(--spacing-20) var(--spacing-6) var(--spacing-24) var(--spacing-6);
          }
          .about-name {
            font-size: clamp(1.75rem, 10vw, 2.5rem);
            margin-bottom: var(--spacing-4);
          }
          .about-greeting {
            font-size: 0.8rem;
            margin-bottom: var(--spacing-2);
          }
          .about-description-container {
            gap: 1.5rem;
          }
          .about-description {
            line-height: 1.8;
          }
        }
      `}</style>
    </section>
  );
}
