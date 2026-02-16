/**
 * Global Design System Theme Configuration
 * 
 * This file contains all design tokens for the personal portfolio website.
 * Features a dark, elegant, muted blood-red aesthetic.
 * 
 * Usage: Import this file to access theme constants programmatically
 * in React components or TypeScript files.
 */

export const theme = {
    /**
     * Color System
     * Semantic color tokens for consistent theming across the application
     */
    colors: {
        // Primary - Dark Blood Red
        primary: {
            DEFAULT: '#8B1E3F',      // Main brand color - deep blood red
            light: '#A63D5C',        // Lighter variant for hover states
            dark: '#6B1730',         // Darker variant for active states
            muted: '#5C1629',        // Muted variant for subtle accents
        },

        // Secondary - Deep Neutral Accent
        secondary: {
            DEFAULT: '#3C2F3D',      // Deep purple-gray
            light: '#5A4A5C',        // Lighter variant
            dark: '#2A1F2B',         // Darker variant
            muted: '#4A3D4B',        // Muted variant
        },

        // Background Colors
        background: {
            DEFAULT: '#0A0A0A',      // Near-black primary background
            elevated: '#121212',     // Slightly elevated surfaces
            overlay: '#1A1A1A',      // Overlay backgrounds
            subtle: '#0F0F0F',       // Subtle background variation
        },

        // Surface Colors (Cards, Panels)
        surface: {
            DEFAULT: '#161616',      // Default surface color
            elevated: '#1E1E1E',     // Elevated surfaces (cards on hover)
            sunken: '#0D0D0D',       // Sunken surfaces (inputs)
            overlay: '#1C1C1C',      // Modal/dialog surfaces
        },

        // Text Colors
        text: {
            primary: '#E8E8E8',      // Primary text - high contrast
            secondary: '#B0B0B0',    // Secondary text - medium contrast
            muted: '#707070',        // Muted text - low contrast
            disabled: '#4A4A4A',     // Disabled text
            inverse: '#0A0A0A',      // Inverse text (on light backgrounds)
            accent: '#A63D5C',       // Accent text (primary light)
        },

        // Button Colors
        button: {
            primary: {
                DEFAULT: '#8B1E3F',
                hover: '#A63D5C',
                active: '#6B1730',
                disabled: '#3D1520',
            },
            secondary: {
                DEFAULT: '#3C2F3D',
                hover: '#5A4A5C',
                active: '#2A1F2B',
                disabled: '#221A23',
            },
            ghost: {
                DEFAULT: 'transparent',
                hover: 'rgba(139, 30, 63, 0.1)',
                active: 'rgba(139, 30, 63, 0.2)',
                disabled: 'transparent',
            },
        },

        // Link Colors
        link: {
            DEFAULT: '#A63D5C',      // Default link color
            hover: '#C85577',        // Hover state
            visited: '#8B3D5C',      // Visited links
            active: '#8B1E3F',       // Active/pressed state
        },

        // Border & Divider Colors
        border: {
            DEFAULT: '#2A2A2A',      // Default border
            subtle: '#1F1F1F',       // Subtle border
            strong: '#3A3A3A',       // Strong border
            accent: '#8B1E3F',       // Accent border (primary)
            focus: '#A63D5C',        // Focus ring color
        },

        // Alert & Status Colors
        status: {
            success: {
                DEFAULT: '#2D7A4F',
                light: '#3A9B63',
                dark: '#1F5A38',
                bg: '#1A3A2A',
            },
            warning: {
                DEFAULT: '#D97706',
                light: '#F59E0B',
                dark: '#B45309',
                bg: '#2A1F0A',
            },
            error: {
                DEFAULT: '#DC2626',
                light: '#EF4444',
                dark: '#B91C1C',
                bg: '#2A0F0F',
            },
            info: {
                DEFAULT: '#2563EB',
                light: '#3B82F6',
                dark: '#1D4ED8',
                bg: '#0F1A2A',
            },
        },

        // Utility Colors
        white: '#FFFFFF',
        black: '#000000',
        transparent: 'transparent',

        // Gray Scale
        gray: {
            50: '#F9F9F9',
            100: '#E8E8E8',
            200: '#D1D1D1',
            300: '#B0B0B0',
            400: '#8A8A8A',
            500: '#707070',
            600: '#5A5A5A',
            700: '#3A3A3A',
            800: '#2A2A2A',
            900: '#1A1A1A',
            950: '#0A0A0A',
        },
    },

    /**
     * Typography System
     * Font families, sizes, weights, and line heights
     */
    typography: {
        // Font Families
        fonts: {
            heading: 'var(--font-playfair)',  // Elegant serif for headings
            body: 'var(--font-inter)',        // Clean sans-serif for body
            mono: 'var(--font-geist-mono)',   // Monospace for code
        },

        // Font Sizes (in rem)
        fontSize: {
            // Headings
            h1: '3.5rem',      // 56px
            h2: '2.5rem',      // 40px
            h3: '2rem',        // 32px
            h4: '1.5rem',      // 24px
            h5: '1.25rem',     // 20px
            h6: '1.125rem',    // 18px

            // Body
            base: '1rem',      // 16px
            lg: '1.125rem',    // 18px
            xl: '1.25rem',     // 20px

            // Small
            sm: '0.875rem',    // 14px
            xs: '0.75rem',     // 12px
            xxs: '0.625rem',   // 10px
        },

        // Font Weights
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
        },

        // Line Heights
        lineHeight: {
            tight: 1.2,
            snug: 1.375,
            normal: 1.5,
            relaxed: 1.625,
            loose: 2,
        },

        // Letter Spacing
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        },
    },

    /**
     * Spacing System
     * Consistent spacing scale
     */
    spacing: {
        0: '0',
        1: '0.25rem',    // 4px
        2: '0.5rem',     // 8px
        3: '0.75rem',    // 12px
        4: '1rem',       // 16px
        5: '1.25rem',    // 20px
        6: '1.5rem',     // 24px
        8: '2rem',       // 32px
        10: '2.5rem',    // 40px
        12: '3rem',      // 48px
        16: '4rem',      // 64px
        20: '5rem',      // 80px
        24: '6rem',      // 96px
        32: '8rem',      // 128px
    },

    /**
     * Border Radius
     */
    borderRadius: {
        none: '0',
        sm: '0.25rem',    // 4px
        DEFAULT: '0.5rem', // 8px
        md: '0.75rem',    // 12px
        lg: '1rem',       // 16px
        xl: '1.5rem',     // 24px
        full: '9999px',
    },

    /**
     * Shadows
     */
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
        DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
        md: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        lg: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
        xl: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.5)',
        glow: '0 0 20px rgba(139, 30, 63, 0.3)',
        glowStrong: '0 0 30px rgba(139, 30, 63, 0.5)',
    },

    /**
     * Transitions
     */
    transitions: {
        fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
        base: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
        slow: '350ms cubic-bezier(0.4, 0, 0.2, 1)',
    },

    /**
     * Z-Index Scale
     */
    zIndex: {
        base: 0,
        dropdown: 1000,
        sticky: 1100,
        fixed: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        tooltip: 1600,
    },
} as const;

// Type exports for TypeScript autocomplete
export type Theme = typeof theme;
export type ThemeColors = typeof theme.colors;
export type ThemeTypography = typeof theme.typography;
