'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  problem?: string;
  solution?: string;
  techStack?: string[];
  outcome?: string;
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  tags,
  liveUrl,
  githubUrl,
  problem,
  solution,
  techStack,
  outcome,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="project-image"
        />
        <div className="project-overlay">
          <div className="project-links">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                Live Demo
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn github">
                GitHub
              </a>
            )}
          </div>
        </div>
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
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .project-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255, 0, 60, 0.05), transparent);
          transform: translateX(-100%);
          transition: transform 0.8s ease;
          pointer-events: none;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--color-primary);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 0, 60, 0.2);
        }

        .project-card:hover::before {
          transform: translateX(100%);
        }

        .project-image-container {
          position: relative;
          width: 100%;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
          overflow: hidden;
        }

        .project-image {
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(5, 5, 5, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.4s ease;
          backdrop-filter: blur(4px);
          z-index: 10;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1.25rem;
          transform: translateY(20px);
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-links {
          transform: translateY(0);
        }

        .project-link-btn {
          padding: 0.75rem 1.5rem;
          background: var(--color-primary);
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-family: 'Gilroy-Black', sans-serif;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: all 0.3s ease;
          border: none;
        }

        .project-link-btn:hover {
          background: white;
          color: var(--color-primary);
          box-shadow: 0 0 20px white;
          transform: translateY(-3px);
        }

        .project-link-btn.github {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .project-link-btn.github:hover {
          background: white;
          color: black;
          border-color: white;
        }

        .project-info {
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .project-title {
          font-family: 'Ethnocentric', sans-serif;
          font-size: 1.4rem;
          color: white;
          margin: 0;
          letter-spacing: 1px;
          line-height: 1.2;
        }

        .project-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }

        .project-description {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin: 0 0 0.5rem 0;
        }

        .detail-item {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.4;
        }

        .detail-label {
          color: var(--color-primary);
          font-family: 'Gilroy-Black', sans-serif;
          margin-right: 0.5rem;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.5px;
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
