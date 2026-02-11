'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function ParallaxPortrait() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate relative position (-1 to 1)
            const x = (e.clientX - centerX) / (rect.width / 2);
            const y = (e.clientY - centerY) / (rect.height / 2);

            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div ref={containerRef} className="parallax-container">
            {/* Background glow effect */}
            <div
                className="glow-circle"
                style={{
                    transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                }}
            />

            {/* Logo layer - moves more */}
            <div
                className="logo-layer"
                style={{
                    transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
                }}
            >
                <Image
                    src="/logo.jpg"
                    alt="BA Logo"
                    width={150}
                    height={150}
                    className="logo-image"
                    priority
                />
            </div>

            {/* Portrait layer - moves less for depth */}
            <div
                className="portrait-layer"
                style={{
                    transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
                }}
            >
                <Image
                    src="/portrait.jpg"
                    alt="Biniyam Alemayehu"
                    width={500}
                    height={600}
                    className="portrait-image"
                    priority
                />
            </div>

            <style jsx>{`
        .parallax-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .glow-circle {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            var(--color-primary) 0%,
            transparent 70%
          );
          opacity: 0.2;
          border-radius: 50%;
          filter: blur(60px);
          transition: transform var(--transition-slow);
          z-index: 1;
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }

        .logo-layer {
          position: absolute;
          top: 10%;
          left: 10%;
          transition: transform var(--transition-slow);
          z-index: 3;
          animation: float 6s ease-in-out infinite;
        }

        .logo-image {
          width: 150px;
          height: 150px;
          object-fit: contain;
          filter: drop-shadow(var(--shadow-glow));
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .portrait-layer {
          position: relative;
          transition: transform var(--transition-slow);
          z-index: 2;
        }

        .portrait-image {
          width: 100%;
          max-width: 500px;
          height: auto;
          border-radius: var(--radius-lg);
          box-shadow: 
            var(--shadow-xl),
            var(--shadow-glow-strong);
          border: 2px solid var(--color-border-subtle);
          animation: breathe 4s ease-in-out infinite;
        }

        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        @media (max-width: 768px) {
          .portrait-image {
            max-width: 350px;
          }

          .logo-layer {
            top: 5%;
            left: 5%;
          }

          .logo-image {
            width: 100px;
            height: 100px;
          }

          .glow-circle {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
        </div>
    );
}
