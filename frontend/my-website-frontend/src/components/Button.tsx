'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    children: React.ReactNode;
    href?: string;
}

export function Button({
    variant = 'primary',
    children,
    href,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = `
    inline-flex items-center justify-center
    px-8 py-4
    font-medium
    rounded-lg
    transition-all
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

    const variantStyles = {
        primary: `
      bg-[var(--color-button-primary)]
      text-[var(--color-text-primary)]
      hover:bg-[var(--color-button-primary-hover)]
      active:bg-[var(--color-button-primary-active)]
      disabled:bg-[var(--color-button-primary-disabled)]
      focus-visible:ring-[var(--color-border-focus)]
      shadow-[var(--shadow-base)]
      hover:shadow-[var(--shadow-glow)]
    `,
        secondary: `
      bg-[var(--color-button-secondary)]
      text-[var(--color-text-primary)]
      hover:bg-[var(--color-button-secondary-hover)]
      active:bg-[var(--color-button-secondary-active)]
      disabled:bg-[var(--color-button-secondary-disabled)]
      focus-visible:ring-[var(--color-border-focus)]
      shadow-[var(--shadow-base)]
    `,
        ghost: `
      bg-[var(--color-button-ghost)]
      text-[var(--color-text-accent)]
      border-2 border-[var(--color-border-accent)]
      hover:bg-[var(--color-button-ghost-hover)]
      hover:border-[var(--color-primary-light)]
      active:bg-[var(--color-button-ghost-active)]
      focus-visible:ring-[var(--color-border-focus)]
    `,
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

    if (href) {
        return (
            <a
                href={href}
                className={combinedClassName}
                style={{
                    textDecoration: 'none',
                    transition: 'all var(--transition-base)',
                }}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={combinedClassName}
            style={{
                transition: 'all var(--transition-base)',
            }}
            {...props}
        >
            {children}
        </button>
    );
}
