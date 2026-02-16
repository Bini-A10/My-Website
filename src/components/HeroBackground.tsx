'use client';

import React from 'react';

/**
 * HeroBackground Component
 * A high-quality SVG background blending nature, tech, and football themes.
 * Optimized for a dark-themed developer portfolio.
 */
export function HeroBackground() {
    return (
        <div className="hero-background-wrapper">
            <svg
                className="hero-svg"
                viewBox="0 0 1440 900"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Main background gradient */}
                    <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="var(--color-background-elevated)" />
                        <stop offset="100%" stopColor="var(--color-background)" />
                    </radialGradient>

                    {/* Primary accent glow */}
                    <radialGradient id="accentGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
                    </radialGradient>

                    {/* Nature/Topographic texture pattern */}
                    <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="0.5" fill="var(--color-text-muted)" opacity="0.2" />
                    </pattern>

                    {/* Hexagonal/Football Grid */}
                    <pattern id="hexGrid" x="0" y="0" width="100" height="173.2" patternUnits="userSpaceOnUse">
                        <path
                            d="M50 0L100 28.85V86.6L50 115.45L0 86.6V28.85L50 0Z"
                            fill="none"
                            stroke="var(--color-border-subtle)"
                            strokeWidth="0.5"
                            opacity="0.1"
                        />
                    </pattern>

                    {/* Filters for soft glows */}
                    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="30" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* Base Background Layer */}
                <rect width="1440" height="900" fill="url(#bgGradient)" />

                {/* Subtle Tech Grid Layer */}
                <rect width="1440" height="900" fill="url(#hexGrid)" opacity="0.4" />

                {/* Nature Fusion: Topographic Waves */}
                <g className="nature-waves">
                    <path
                        d="M-100 700C200 650 400 850 720 750C1040 650 1200 800 1540 700V900H-100V700Z"
                        fill="var(--color-surface-sunken)"
                        opacity="0.3"
                    />
                    <path
                        d="M-100 700C200 650 400 850 720 750C1040 650 1200 800 1540 700"
                        stroke="url(#dotPattern)"
                        strokeWidth="4"
                        fill="none"
                        opacity="0.5"
                    />
                    <path
                        d="M-100 750C300 700 500 900 820 800C1140 700 1300 850 1640 750"
                        stroke="var(--color-primary-muted)"
                        strokeWidth="0.5"
                        strokeDasharray="10 5"
                        fill="none"
                        opacity="0.2"
                    />
                </g>

                {/* Football Theme: Stylized Pitch Lines / Arc */}
                <g className="football-elements" opacity="0.15">
                    {/* Large Center Circle Arc */}
                    <circle
                        cx="1200"
                        cy="450"
                        r="300"
                        stroke="var(--color-text-muted)"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="2 10"
                    />
                    <circle
                        cx="1200"
                        cy="450"
                        r="10"
                        fill="var(--color-primary)"
                        opacity="0.5"
                    />

                    {/* Tactical Patterning */}
                    <path
                        d="M1000 300L1100 250M1100 250L1200 300M1200 300L1100 350M1100 350L1000 300"
                        stroke="var(--color-border-accent)"
                        strokeWidth="0.5"
                        fill="none"
                    />
                </g>

                {/* Tech Fusion: Floating Nodes & Connections */}
                <g className="tech-nodes">
                    <circle cx="150" cy="200" r="2" fill="var(--color-primary)" opacity="0.3" />
                    <circle cx="200" cy="180" r="1.5" fill="var(--color-primary)" opacity="0.2" />
                    <line x1="150" y1="200" x2="200" y2="180" stroke="var(--color-primary)" strokeWidth="0.5" opacity="0.1" />

                    <circle cx="300" cy="600" r="1.5" fill="var(--color-primary)" opacity="0.3" />
                    <circle cx="350" cy="580" r="1" fill="var(--color-primary)" opacity="0.2" />
                    <line x1="300" y1="600" x2="350" y2="580" stroke="var(--color-primary)" strokeWidth="0.5" opacity="0.1" />
                </g>

                {/* Atmosphere: Glows and Highlights */}
                <circle cx="1200" cy="450" r="400" fill="url(#accentGlow)" filter="url(#softGlow)" />
                <circle cx="200" cy="200" r="200" fill="url(#accentGlow)" filter="url(#softGlow)" />
            </svg>

            <style jsx>{`
        .hero-background-wrapper {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .hero-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .nature-waves {
          animation: drift 30s ease-in-out infinite alternate;
        }

        @keyframes drift {
          from { transform: translateX(-20px) translateY(10px); }
          to { transform: translateX(20px) translateY(-10px); }
        }

        .tech-nodes circle {
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 105% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.5); }
        }
      `}</style>
        </div>
    );
}
