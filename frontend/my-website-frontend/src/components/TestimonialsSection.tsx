'use client';

import React from 'react';

const testimonials = [
    {
        quote: "Biniyam is an exceptional developer who combines deep technical knowledge with a keen eye for user experience. His work on our inventory system was transformative.",
        author: "Sarah Johnson",
        role: "CTO, TechLogistics SaaS",
        avatar: "SJ"
    },
    {
        quote: "Reliable, proactive, and technically brilliant. He delivered our mobile app ahead of schedule and the code quality was top-notch. Highly recommended!",
        author: "Alemayehu T.",
        role: "Founder, EduPath Solutions",
        avatar: "AT"
    },
    {
        quote: "One of the most talented full-stack engineers I've mentored. His ability to grasp complex architectures and implement them efficiently is rare.",
        author: "David Chen",
        role: "Senior Staff Engineer, Google",
        avatar: "DC"
    }
];

export function TestimonialsSection() {
    return (
        <section className="testimonials-section">
            <h2 className="section-title">Testimonials</h2>
            <div className="testimonials-grid">
                {testimonials.map((item, idx) => (
                    <div key={idx} className="testimonial-card glass">
                        <div className="quote-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H3.017V21H5.017Z" />
                            </svg>
                        </div>
                        <p className="quote-text">{item.quote}</p>
                        <div className="author-info">
                            <div className="author-avatar">{item.avatar}</div>
                            <div className="author-details">
                                <p className="author-name">{item.author}</p>
                                <p className="author-role">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .testimonials-section {
          width: 100%;
          max-width: 1200px;
          margin-top: 8rem;
          margin-bottom: 8rem;
          padding: 0 1rem;
        }

        .section-title {
          font-family: 'Ethnocentric', sans-serif;
          font-size: 2rem;
          color: var(--color-primary);
          margin-bottom: 4rem;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 0 15px rgba(255, 0, 60, 0.3);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          padding: 3rem 2.5rem;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 2rem;
          transition: all 0.4s ease;
          position: relative;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          background: rgba(255, 0, 60, 0.02);
        }

        .quote-icon {
          width: 2.5rem;
          height: 2.5rem;
          color: var(--color-primary);
          opacity: 0.2;
          position: absolute;
          top: 2rem;
          right: 2rem;
        }

        .quote-text {
          font-family: var(--font-body);
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.85);
          font-style: italic;
          margin: 0;
          position: relative;
          z-index: 1;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-top: auto;
        }

        .author-avatar {
          width: 3.5rem;
          height: 3.5rem;
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Gilroy-Black', sans-serif;
          font-size: 1.2rem;
          color: white;
          box-shadow: 0 0 20px rgba(255, 0, 60, 0.3);
        }

        .author-name {
          font-family: 'Gilroy-Black', sans-serif;
          font-size: 1.1rem;
          color: white;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .author-role {
          font-size: 0.85rem;
          color: var(--color-text-secondary);
          margin: 0;
        }

        @media (max-width: 640px) {
          .testimonial-card {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
        </section>
    );
}
