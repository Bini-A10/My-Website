'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  problem?: string;
  solution?: string;
  techStack?: string[];
  outcome?: string;
}

export function ProjectCard({
  title,
  description,
  images,
  tags,
  problem,
  solution,
  techStack,
  outcome,
}: ProjectCardProps) {
  // Infinite scroll logic: [last, ...original, first]
  const displayImages = images.length > 1 ? [images[images.length - 1], ...images, images[0]] : images;
  const [currentIndex, setCurrentIndex] = useState(images.length > 1 ? 1 : 0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  React.useEffect(() => {
    if (!isHovered || images.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, 1800); // Reduced from 2500ms

    return () => clearInterval(interval);
  }, [isHovered, images.length, currentIndex]);

  const handleNext = () => {
    if (images.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (images.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (images.length <= 1) return;

    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(images.length);
    } else if (currentIndex === images.length + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  const setIndexManual = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setIsTransitioning(true);
    setCurrentIndex(index + 1);
  };

  // Calculate active dot (0-indexed based on original array)
  const activeIndex = images.length > 1
    ? (currentIndex === 0 ? images.length - 1 : (currentIndex === images.length + 1 ? 0 : currentIndex - 1))
    : 0;

  return (
    <div
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-image-container">
        <div
          className="image-slider-wrapper"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
          }}
        >
          {displayImages.map((img, idx) => (
            <div key={idx} className="slide-item">
              <Image
                src={img}
                alt={`${title} - image ${idx}`}
                fill
                className="project-image"
                priority={idx === 1}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button className="slider-control prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }} aria-label="Previous image">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button className="slider-control next" onClick={(e) => { e.stopPropagation(); handleNext(); }} aria-label="Next image">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6" /></svg>
            </button>

            <div className="slider-dots">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot ${activeIndex === idx ? 'active' : ''}`}
                  onClick={(e) => setIndexManual(e, idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="project-info">
        <h3 className="project-title">{title}</h3>

        <div className="project-details">
          <p className="project-description">{description}</p>

          {problem && (
            <div className="detail-item">
              <span className="detail-label">Problem:</span> {problem}
            </div>
          )}
          {solution && (
            <div className="detail-item">
              <span className="detail-label">Solution:</span> {solution}
            </div>
          )}
          {techStack && (
            <div className="detail-item">
              <span className="detail-label">Stack:</span> {techStack.join(', ')}
            </div>
          )}
          {outcome && (
            <div className="detail-item">
              <span className="detail-label">Outcome:</span> {outcome}
            </div>
          )}
        </div>

        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .project-card {
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s ease, box-shadow 0.4s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          padding: 0px 15px 0px 15px;
          width: 600px;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--color-primary);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4), 0 0 15px rgba(255, 0, 60, 0.15);
        }

        .project-image-container {
          position: relative;
          width: 100%;
          padding-top: 100%; /* Compact Height */
         
          overflow: hidden;
          background: #000;
        }

        .image-slider-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          display: flex;
          will-change: transform;
        }

        .slide-item {
          min-width: 100%;
          height: 100%;
          position: relative;
        }

        .project-image {
          object-fit: cover;
        }

        .slider-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.4);
          color: white;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transition: all 0.3s ease;
          z-index: 10;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .slider-control svg {
          width: 18px;
          height: 18px;
        }

        .slider-control.prev { left: 8px; }
        .slider-control.next { right: 8px; }

        .project-image-container:hover .slider-control {
          opacity: 1;
        }

        .slider-control:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          box-shadow: 0 0 12px var(--color-primary);
        }

        .slider-dots {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 10;
          background: rgba(0, 0, 0, 0.2);
          padding: 4px 8px;
          border-radius: 10px;
          backdrop-filter: blur(2px);
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: var(--color-primary);
          transform: scale(1.2);
          box-shadow: 0 0 8px var(--color-primary);
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.8);
        }
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .project-title {
          font-family: 'Ethnocentric', sans-serif;
          font-size: 1.3rem;
          color: white;
          margin: 0;
          letter-spacing: 2px;
          line-height: 1.2;
          text-transform: uppercase;
          text-shadow: 0 0 15px rgba(255, 0, 60, 0.3);
        }

        .project-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }

        .project-description {
          font-family: var(--font-gilroy-light-italic), sans-serif;
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin: 0 0 0.5rem 0;
          font-style: italic;
        }

        .detail-item {
          font-family: var(--font-gilroy-light-italic), sans-serif;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.4;
        }

        .detail-label {
          color: var(--color-primary);
          font-family: 'Ethnocentric', sans-serif;
          margin-right: 0.5rem;
          text-transform: uppercase;
          font-size: 0.65rem;
          letter-spacing: 1px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 0.5rem;
        }

        .project-tag {
          font-size: 0.7rem;
          color: white;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.3rem 0.7rem;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-family: var(--font-mono);
          transition: all 0.3s ease;
        }

        .project-card:hover .project-tag {
          border-color: rgba(255, 0, 60, 0.3);
          background: rgba(255, 0, 60, 0.05);
        }
      `}</style>
    </div>
  );
}
