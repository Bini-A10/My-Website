'use client';

import React from 'react';
import Image from 'next/image';

/**
 * StaticPortrait Component
 * A premium, static portrait composition with an elegant red sun backdrop.
 */
export function ParallaxPortrait() {
  return (
    <div className="portrait-container">
      {/* Red Sun Background - Fixed and Elegant */}
      <div className="red-sun" />

      {/* Background glow shadow - Static and Mood-setting */}
      <div className="glow-circle" />

      {/* Portrait layer - Simplified Static Composition */}
      <div className="portrait-layer">
        <Image
          src="/images/bini.png"
          alt="Biniyam Alemayehu"
          width={550}
          height={550}
          className="portrait-image"
          priority
        />
      </div>

      <style jsx>{`
        .portrait-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .red-sun {
          position: absolute;
          width: 550px;
          height: 550px;
          background: var(--color-primary);
          border-radius: 50%;
          z-index: 1;
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
          box-shadow: 0 0 80px rgba(255, 0, 60, 0.35);
          /* Subtle static gradient for depth */
          background: radial-gradient(circle at 30% 30%, var(--color-primary-light), var(--color-primary-dark));
        }

        .glow-circle {
          position: absolute;
          width: 350px;
          height: 350px;
          background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.8) 0%,
            transparent 70%
          );
          opacity: 0.8;
          border-radius: 50%;
          filter: blur(50px);
          z-index: 2;
          right: 0%;
          top: 50%;
          transform: translateY(-50%);
        }

        .portrait-layer {
          position: relative;
          z-index: 3;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding-top: 50rem;
          padding-bottom: 0rem;
          padding-right: 5%;
        }

        .portrait-image {
          width: 75%;
          height: auto;
          max-height: 58vh;
          object-fit: contain;
          filter: drop-shadow(0 20px 80px rgba(0, 0, 0, 0.8));
          display: block;
        }

        @media (max-width: 1024px) {
          .red-sun {
            width: 380px;
            height: 380px;
            right: 0;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .portrait-layer {
            justify-content: center;
            padding-right: 0;
            padding-bottom: 0;
          }
          .portrait-image {
            max-height: 50vh;
          }
          .glow-circle {
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }

        @media (max-width: 768px) {
          .red-sun {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
