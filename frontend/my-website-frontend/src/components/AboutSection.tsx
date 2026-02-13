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
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={300}
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
          padding: 5rem 4rem;
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
          flex: 1.2;
          display: flex;
          flex-direction: column;
          z-index: 20;
        }

        .about-card {
          background: rgba(15, 15, 15, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 0, 60, 0.1);
          border-radius: 2rem;
          padding: 3.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          box-shadow: 
            0 20px 50px rgba(0, 0, 0, 0.5),
            inset 0 0 20px rgba(255, 0, 60, 0.05);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .about-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
          opacity: 0.3;
        }

        .about-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 0, 60, 0.3);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.6),
            inset 0 0 30px rgba(255, 0, 60, 0.1);
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
          font-family: 'Gilroy-LightItalic', sans-serif;
          font-size: 1.15rem;
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
            align-items: stretch;
            width: 100%;
          }
          .about-card {
            padding: 2.5rem 2rem;
            text-align: center;
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
