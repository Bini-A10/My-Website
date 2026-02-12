'use client';

import React, { useState, useEffect } from 'react';

export function TechBackground() {
  const [particles, setParticles] = useState<{ left: string; top: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${15 + Math.random() * 10}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="tech-background">
      {/* Animated grid pattern */}
      <div className="grid-pattern" />

      {/* Floating particles - only rendered on client */}
      <div className="particles">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Subtle code snippets */}
      <div className="code-overlay">
        <pre className="code-snippet code-snippet-1">
          {`const developer = {
  name: "Biniyam",
  passion: "Building",
  focus: "Innovation"
};`}
        </pre>
        <pre className="code-snippet code-snippet-2">
          {`function createSolution() {
  return clean && scalable;
}`}
        </pre>
      </div>

      <style jsx>{`
        .tech-background {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(var(--color-border-subtle) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border-subtle) 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.15;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        .particles {
          position: absolute;
          inset: 0;
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: var(--color-primary-muted);
          border-radius: 50%;
          opacity: 0.3;
          animation: float linear infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        .code-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: var(--spacing-16);
        }

        .code-snippet {
          font-family: var(--font-mono);
          font-size: var(--font-size-xs);
          color: var(--color-text-muted);
          opacity: 0.15;
          line-height: var(--line-height-relaxed);
          margin: 0;
          white-space: pre;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(5px);
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .code-snippet-1 {
          align-self: flex-start;
          animation: fadeInOut 8s ease-in-out infinite;
        }

        .code-snippet-2 {
          align-self: flex-end;
          animation: fadeInOut 8s ease-in-out infinite;
          animation-delay: 4s;
        }

        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.12;
          }
        }
      `}</style>
    </div>
  );
}
