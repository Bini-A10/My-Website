'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="logo">
                <Link href="/">
                    <Image
                        src="/images/logoo.png"
                        alt="Logo"
                        width={120}
                        height={120}
                        className="logo-img"
                        priority
                    />
                </Link>
            </div>

            {/* Hamburger Button */}
            <button
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle Navigation"
            >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>

            <div className={`nav-links ${isMenuOpen ? 'mobile-show' : ''}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
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
                    justify-content: space-between;
                    height: 70px; 
                    padding: 0 2rem;
                    z-index: 5000;
                    background: rgba(0, 0, 0, 1);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-radius: 12px;
                    border: 1px solid rgba(244, 8, 8, 0.3);
                    box-shadow: 0 4px 30px rgba(255, 0, 60, 0.3);
                    transition: all 0.3s ease;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    min-width: 80px;
                    z-index: 5002;
                    cursor: pointer;
                }

                .logo-img {
                    width: 80px;
                    height: 80px;
                    border-radius: 10px;
                    border: 2px solid var(--color-primary);
                    box-shadow: 0 0 25px rgba(255, 0, 60, 0.4);
                    filter: brightness(1.5);
                    transition: all var(--transition-base);
                    object-fit: contain;
                }

                .logo-img:hover {
                    box-shadow: 0 0 25px rgba(255, 0, 60, 0.6);
                    filter: drop-shadow(0 0 10px rgba(255, 0, 60, 0.4));
                    transform: scale(1.05);
                }

                .nav-links {
                    display: flex;
                    gap: 2.5rem;
                    background: transparent;
                }

                .nav-link {
                    font-family: 'Gilroy-Black', sans-serif !important;
                    font-size: 1.15rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #FFFFFF;
                    text-decoration: none;
                    transition: all var(--transition-base);
                }

                .nav-link:hover, .nav-link.active {
                    color: var(--color-primary);
                    text-shadow: 0 0 10px rgba(255, 0, 60, 0.3);
                }

                /* Hamburger Styles */
                .hamburger {
                    display: none;
                    flex-direction: column;
                    justify-content: space-around;
                    width: 30px;
                    height: 24px;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    z-index: 5002;
                }

                .hamburger .line {
                    width: 30px;
                    height: 3px;
                    background: white;
                    border-radius: 10px;
                    transition: all 0.3s linear;
                    position: relative;
                    transform-origin: 1px;
                }

                .hamburger.active .line:nth-child(1) {
                    transform: rotate(45deg);
                }

                .hamburger.active .line:nth-child(2) {
                    opacity: 0;
                    transform: translateX(20px);
                }

                .hamburger.active .line:nth-child(3) {
                    transform: rotate(-45deg);
                }

                @media (max-width: 1024px) {
                  .navbar {
                    width: calc(100% - 4rem);
                    height: 60px;
                    top: 1rem;
                  }
                  .logo-img {
                    width: 60px;
                    height: 60px;
                  }
                  .hamburger {
                    display: flex;
                  }
                  .nav-links {
                    position: fixed;
                    top: 0;
                    right: 0;
                    height: 100vh;
                    width: 100%;
                    background: rgba(0, 0, 0, 0.95);
                    backdrop-filter: blur(20px);
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transform: translateX(100%);
                    transition: transform 0.4s cubic-bezier(0.77,0.2,0.05,1.0);
                    z-index: 5001;
                    gap: 3rem;
                  }
                  .nav-links.mobile-show {
                    transform: translateX(0);
                  }
                  .nav-link {
                    font-size: 2rem;
                  }
                }

                @media (max-width: 640px) {
                  .navbar {
                    width: calc(100% - 2rem);
                    padding: 0 1.5rem;
                  }
                }
            `}</style>
        </nav>
    );
}
