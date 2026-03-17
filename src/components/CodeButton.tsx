'use client';

import React, { useState } from 'react';

interface CodeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
}

export function CodeButton({ children, className = '', ...props }: CodeButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`code-button-container ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            <div className="code-content">
                <span className="token-cmd">{isHovered ? '>> STATUS: READY' : '>> RUN'}</span>
                <span className="token-method">.send</span>
                <span className="token-punctuation">(</span>
                <span className="message-content">"{children}"</span>
                <span className="token-punctuation">)</span>
                <span className="cursor">_</span>
            </div>
            
            <div className="button-glitch"></div>
            <div className="scan-line"></div>

            <style jsx>{`
                .code-button-container {
                    position: relative;
                    width: 100%;
                    padding: 1.25rem 2rem;
                    background: rgba(10, 10, 12, 0.8);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 0, 60, 0.2);
                    border-radius: 8px;
                    color: white;
                    font-family: 'Geist Mono', 'Fira Code', monospace;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    overflow: hidden;
                    text-align: left;
                    display: flex;
                    align-items: center;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                }

                .code-button-container:hover {
                    border-color: var(--color-primary);
                    background: rgba(255, 0, 60, 0.05);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 30px rgba(255, 0, 60, 0.15);
                }

                .code-content {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    gap: 0.25rem;
                    letter-spacing: 0.5px;
                }

                .token-cmd {
                    color: var(--color-primary);
                    font-weight: 700;
                    margin-right: 0.5rem;
                    transition: all 0.2s ease;
                }

                .token-method {
                    color: #00ff9d; /* Tech Green */
                }

                .token-punctuation {
                    color: #888;
                }

                .message-content {
                    color: #ffd700; /* Gold/String color */
                    font-style: italic;
                }

                .cursor {
                    display: inline-block;
                    width: 8px;
                    height: 1.2rem;
                    background: var(--color-primary);
                    margin-left: 4px;
                    animation: blink 1s step-end infinite;
                }

                .scan-line {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: rgba(255, 0, 60, 0.3);
                    opacity: 0;
                    z-index: 1;
                }

                .code-button-container:hover .scan-line {
                    animation: scan 2s linear infinite;
                    opacity: 1;
                }

                .button-glitch {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: var(--color-primary);
                    opacity: 0;
                    z-index: 1;
                }

                .code-button-container:active .button-glitch {
                    animation: glitch 0.1s linear;
                    opacity: 0.1;
                }

                @keyframes blink {
                    from, to { opacity: 1; }
                    50% { opacity: 0; }
                }

                @keyframes scan {
                    from { top: 0%; }
                    to { top: 100%; }
                }

                @keyframes glitch {
                    0% { transform: translate(0); }
                    20% { transform: translate(-2px, 2px); }
                    40% { transform: translate(-2px, -2px); }
                    60% { transform: translate(2px, 2px); }
                    80% { transform: translate(2px, -2px); }
                    100% { transform: translate(0); }
                }

                @media (max-width: 640px) {
                    .code-button-container {
                        padding: 1rem 1.5rem;
                        font-size: 0.85rem;
                    }
                    .token-cmd {
                        display: none;
                    }
                }
            `}</style>
        </button>
    );
}
