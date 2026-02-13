'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="navbar">
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
            <div className="nav-links">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`nav-link ${pathname === link.href ? 'active' : ''}`}
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
                    padding: 0.4rem 2rem;
                    z-index: 5000;
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
                    cursor: pointer;
                }

                .logo-img {
                    width: 120px; /* Increased for better visibility */
                    height: 120px;
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
                    position: absolute;
                    left: 45%;
                    transform: translateX(-50%);
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
