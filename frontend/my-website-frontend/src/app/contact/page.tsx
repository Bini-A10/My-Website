'use client';

import React from 'react';
import { Button } from "@/components/Button";

export default function ContactPage() {
    return (
        <main className="contact-page-container">
            <section className="contact-section">
                <div className="contact-header">
                    <h1 className="contact-title">Contact Me</h1>
                    <p className="contact-subtitle">Let's build something extraordinary together.</p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info glass">
                        <h2 className="info-title">Reach Out</h2>
                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-label-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon"><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /><rect width="20" height="16" x="2" y="4" rx="2" /></svg>
                                    <span className="info-label">Email</span>
                                </div>
                                <a href="mailto:alemayehubiniyam367@gmail.com" className="info-value">alemayehubiniyam367@gmail.com</a>
                            </div>
                            <div className="info-item">
                                <div className="info-label-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    <span className="info-label">Phone</span>
                                </div>
                                <a href="tel:+251983269115" className="info-value">+251983269115</a>
                            </div>
                            <div className="info-item">
                                <div className="info-label-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    <span className="info-label">Location</span>
                                </div>
                                <span className="info-value">Adama/Nazret, Ethiopia</span>
                            </div>
                            <div className="info-item">
                                <div className="info-label-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon"><circle cx="12" cy="12" r="10" /><path d="M16 8h-2a2 2 0 0 0-2 2v8" /><path d="M12 10H8" /></svg>
                                    <span className="info-label">Socials</span>
                                </div>
                                <div className="social-links">
                                    <a href="#" className="social-link" title="LinkedIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    </a>
                                    <a href="#" className="social-link" title="GitHub">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                    </a>
                                    <a href="#" className="social-link" title="Twitter">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                                    </a>
                                    <a href="#" className="social-link" title="Instagram">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                    </a>
                                    <a href="#" className="social-link" title="Facebook">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                    </a>
                                    <a href="#" className="social-link" title="WhatsApp">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </a>
                                    <a href="#" className="social-link" title="Discord">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" /><path d="M9 8c2 0 5 0 5 0" /><path d="M7.5 15.5c0 0-1.5-.5-3-2.5 0 0 1-4 3-5.5 0 0 2-1 4.5-1s4.5 1 4.5 1c2 1.5 3 5.5 3 5.5-1.5 2-3 2.5-3 2.5L15 14H9l-1.5 1.5z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="contact-form glass">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows={5} placeholder="How can I help you?" required></textarea>
                        </div>
                        <Button type="submit">Send Message</Button>
                    </form>
                </div>
            </section>

            <style jsx>{`
        .contact-page-container {
          position: relative;
          min-height: 100vh;
          background: 
            linear-gradient(rgba(5, 5, 5, 0.4), rgba(5, 5, 5, 0.4)),
            url('/images/BG.png') no-repeat center center fixed;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 2rem 4rem 2rem;
        }

        .contact-section {
          max-width: 1100px;
          width: 100%;
          z-index: 10;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-title {
          font-family: 'Ethnocentric', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 4px;
          margin-bottom: 1rem;
          text-shadow: 0 0 20px rgba(255, 0, 60, 0.4);
        }

        .contact-subtitle {
          font-family: 'Gilroy-LightItalic', sans-serif;
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
        }

        .glass {
          background: rgba(15, 15, 15, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 0, 60, 0.2);
          border-radius: 20px;
          padding: 3rem;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8);
        }

        .info-title {
          font-family: 'Ethnocentric', sans-serif;
          font-size: 1.5rem;
          color: white;
          margin-bottom: 2.5rem;
          border-bottom: 2px solid var(--color-primary);
          padding-bottom: 1rem;
          display: inline-block;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .info-label-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--color-primary);
        }

        .info-icon {
          filter: drop-shadow(0 0 5px rgba(255, 0, 60, 0.4));
        }

        .info-label {
          font-family: 'Gilroy-Black', sans-serif;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1.2px;
        }

        .info-value {
          font-family: 'Gilroy-LightItalic', sans-serif;
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: all 0.3s ease;
          padding-left: 0.25rem;
        }

        .info-value:hover {
          color: var(--color-primary);
          padding-left: 0.5rem;
        }

        .social-links {
          display: flex;
          gap: 1.25rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 0, 60, 0.2);
          border-radius: 10px;
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        .social-link:hover {
          color: var(--color-primary);
          background: rgba(255, 0, 60, 0.05);
          border-color: var(--color-primary);
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 5px 15px rgba(255, 0, 60, 0.2);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-family: 'Gilroy-Black', sans-serif;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .form-group input,
        .form-group textarea {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
          color: white;
          font-family: 'Gilroy-LightItalic', sans-serif;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 15px rgba(255, 0, 60, 0.2);
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .contact-page-container {
            padding-top: 10rem;
          }
        }

        @media (max-width: 640px) {
          .glass {
            padding: 2rem 1.5rem;
          }
          .contact-title {
            font-size: 2rem;
          }
        }
      `}</style>
        </main>
    );
}
