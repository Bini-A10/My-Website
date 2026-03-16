'use client';

import React, { useState, useEffect } from 'react';


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
    },
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
    const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (selectedTestimonial) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedTestimonial]);

    return (
        <section className="testimonials-section">
            <h2 className="section-title">Testimonials</h2>
            <div className="testimonials-scroll-area">
                {testimonials.map((item, idx) => (
                    <div 
                        key={idx} 
                        className="testimonial-card glass clickable"
                        onClick={() => setSelectedTestimonial(item)}
                    >
                        <div className="quote-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H3.017V21H5.017Z" />
                            </svg>
                        </div>
                        <p className="quote-text line-clamp">{item.quote}</p>
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

            {selectedTestimonial && (
                <div className="modal-overlay" onClick={() => setSelectedTestimonial(null)}>
                    <div className="modal-content glass" onClick={e => e.stopPropagation()}>
                        <button className="close-button" onClick={() => setSelectedTestimonial(null)}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                        
                        <div className="modal-body">
                            <div className="modal-sidebar">
                                <div className="modal-avatar">{selectedTestimonial.avatar}</div>
                                <div className="modal-author-info">
                                    <h3>{selectedTestimonial.author}</h3>
                                    <p>{selectedTestimonial.role}</p>
                                </div>
                            </div>
                            <div className="modal-main">
                                <div className="quote-icon-large">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H3.017V21H5.017Z" />
                                    </svg>
                                </div>
                                <p className="modal-quote">{selectedTestimonial.quote}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        .testimonials-section {
          width: 100%;
          max-width: 1600px;
          margin-top: 0;
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

        .testimonials-scroll-area {
          display: flex;
          overflow-x: auto;
          gap: 2rem;
          padding: 1rem 2rem 3rem;
          scroll-snap-type: x mandatory;
          scrollbar-width: thin;
          scrollbar-color: var(--color-primary) transparent;
          -webkit-overflow-scrolling: touch;
        }

        .testimonials-scroll-area::-webkit-scrollbar {
          height: 6px;
        }

        .testimonials-scroll-area::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .testimonials-scroll-area::-webkit-scrollbar-thumb {
          background: var(--color-primary);
          border-radius: 10px;
        }

        .testimonial-card {
          flex: 0 0 clamp(350px, 40vw, 500px);
          padding: 3rem 2.5rem;
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          gap: 2rem;
          transition: all 0.4s ease;
          position: relative;
          scroll-snap-align: start;
        }

        .testimonial-card.clickable {
          cursor: pointer;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          border-color: var(--color-primary);
          background: rgba(255, 0, 60, 0.05);
          box-shadow: 0 10px 30px rgba(255, 0, 60, 0.1);
        }

        .line-clamp {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 2rem;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          width: 100%;
          max-width: 900px;
          background: rgba(20, 20, 25, 0.8);
          border: 1px solid rgba(255, 0, 60, 0.2);
          border-radius: var(--radius-xl);
          position: relative;
          padding: 4rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .close-button {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          padding: 0.5rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-button:hover {
          color: var(--color-primary);
          transform: rotate(90deg);
        }

        .close-button svg {
          width: 1.5rem;
          height: 1.5rem;
        }

        .modal-body {
          display: flex;
          gap: 4rem;
          align-items: flex-start;
        }

        .modal-sidebar {
          flex: 0 0 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
        }

        .modal-avatar {
          width: 8rem;
          height: 8rem;
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Gilroy-Black', sans-serif;
          font-size: 2.5rem;
          color: white;
          box-shadow: 0 0 30px rgba(255, 0, 60, 0.3);
          border: 4px solid rgba(255, 255, 255, 0.1);
        }

        .modal-author-info h3 {
          font-family: 'Gilroy-Black', sans-serif;
          font-size: 1.4rem;
          color: white;
          margin: 0 0 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .modal-author-info p {
          font-size: 0.95rem;
          color: var(--color-text-secondary);
          margin: 0;
        }

        .modal-main {
          flex: 1;
          position: relative;
        }

        .quote-icon-large {
          width: 3rem;
          height: 3rem;
          color: var(--color-primary);
          opacity: 0.15;
          margin-bottom: 1.5rem;
        }

        .modal-quote {
          font-family: var(--font-body);
          font-size: 1.25rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.95);
          font-style: italic;
          margin: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 968px) {
          .modal-content {
            padding: 3rem 2rem;
            margin: 1rem;
          }
          
          .modal-body {
            flex-direction: column;
            gap: 2rem;
            align-items: center;
            text-align: center;
          }

          .modal-sidebar {
            flex: 0 0 auto;
          }

          .modal-avatar {
            width: 6rem;
            height: 6rem;
            font-size: 2rem;
          }

          .modal-quote {
            font-size: 1.1rem;
          }
          
          .quote-icon-large {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .testimonial-card {
            padding: 2.5rem 1.5rem;
          }
          
          .modal-overlay {
            padding: 1rem;
          }
          
          .modal-content {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
        </section>
    );
}
