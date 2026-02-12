'use client';

import React from 'react';
import Image from 'next/image';

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Image
                    src="/images/logoo.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="logo-img"
                    priority
                />
            </div>
            <div className="nav-links">
                <a href="#home" className="nav-link active">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#portfolio" className="nav-link">Portfolio</a>
                <a href="#blog" className="nav-link">Blog</a>
                <a href="#contact" className="nav-link">Contact</a>
            </div>


            <style jsx>{`
                .navbar {
                    position: fixed;
                    top: 2rem;
                    left: 50%;
                    transform: translateX(-50%);
                    width: calc(100% - 8rem);
                    max-width: 1200px;
                    display: flex;
                    align-items: center;
                    padding: 0.4rem 2rem;
                    z-index: 1000;
                    background: rgba(0, 0, 0, 0.15);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
                }

                .logo {
                    display: flex;
                    align-items: center;
                    min-width: 80px;
                    z-index: 10;
                }

                .logo-img {
                    width: 100px; /* Increased from default */
                    height: 100px;
                    border-radius: 10px;
                    border: 2px solid var(--color-primary);
                    box-shadow: 0 0 25px rgba(255, 0, 60, 0.4);
                    filter: brightness(1.2);
                    transition: all var(--transition-base);
                    object-fit: contain;
                }

                .logo-img:hover {
                    box-shadow: 0 0 25px rgba(255, 0, 60, 0.6);
                    filter: drop-shadow(0 0 10px rgba(255, 0, 60, 0.4));
                    transform: scale(1.05);
                }

                .nav-links {
                    position: absolute;
                    left: 45%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 2.5rem;
                    background: transparent;
                }

                .nav-link {
                    font-family: var(--font-body);
                    font-size: 1.05rem; /* Increased size */
                    color: var(--color-text-secondary);
                    text-decoration: none;
                    transition: all var(--transition-base);
                    font-weight: 500;
                    letter-spacing: 0.5px;
                }

                .nav-link:hover, .nav-link.active {
                    color: var(--color-text-primary);
                }

                .nav-extra {
                  display: flex;
                  gap: 1.5rem;
                  color: var(--color-text-secondary);
                  font-size: 1.2rem;
                  align-items: center;
                }

                .menu-icon {
                  font-weight: bold;
                  letter-spacing: 2px;
                }

                @media (max-width: 1024px) {
                  .navbar {
                    width: calc(100% - 4rem);
                  }
                  .nav-links {
                    display: none;
                  }
                }
            `}</style>
        </nav>
    );
}
