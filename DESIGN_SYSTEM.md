# Design System Usage Guide

## Overview

This design system provides a complete, production-ready theming solution for your personal portfolio website. It features a **dark, elegant, muted blood-red aesthetic** that feels premium and modern.

## 🎨 Design Philosophy

- **Dark & Elegant**: Near-black backgrounds with deep blood-red accents
- **Muted & Premium**: No aggressive colors - everything is refined
- **Semantic Naming**: All tokens are named by purpose, not appearance
- **Zero Hard-coding**: Never use raw hex values in components
- **Scalable**: Easy to extend with light mode or new themes

---

## 📁 File Structure

```
src/
├── styles/
│   └── theme.ts          # TypeScript theme configuration
└── app/
    └── globals.css       # CSS custom properties & global styles
```

---

## 🎯 How to Use

### 1. **In CSS/Tailwind Classes**

Use CSS custom properties directly in your stylesheets or inline styles:

```css
/* Using CSS variables */
.my-component {
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-base);
  padding: var(--spacing-4);
  box-shadow: var(--shadow-glow);
  transition: all var(--transition-base);
}

.my-component:hover {
  background-color: var(--color-surface-elevated);
  box-shadow: var(--shadow-glow-strong);
}
```

### 2. **In React Components (Inline Styles)**

```tsx
export default function Card() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        color: 'var(--color-text-primary)',
        padding: 'var(--spacing-6)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <h3 style={{ color: 'var(--color-text-accent)' }}>
        Card Title
      </h3>
      <p style={{ color: 'var(--color-text-secondary)' }}>
        Card description text
      </p>
    </div>
  );
}
```

### 3. **In TypeScript (Programmatic Access)**

Import the theme object for type-safe access:

```tsx
import { theme } from '@/styles/theme';

export default function Button() {
  const buttonStyle = {
    backgroundColor: theme.colors.button.primary.DEFAULT,
    color: theme.colors.white,
    padding: `${theme.spacing[3]} ${theme.spacing[6]}`,
    borderRadius: theme.borderRadius.base,
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.semibold,
    transition: theme.transitions.base,
  };

  return <button style={buttonStyle}>Click Me</button>;
}
```

### 4. **With Tailwind (Using Utility Classes)**

The design system integrates with Tailwind v4. Use the predefined utility classes:

```tsx
export default function Hero() {
  return (
    <section className="bg-surface text-primary p-8 rounded-lg shadow-glow">
      <h1 className="text-accent">Welcome</h1>
      <p className="text-secondary">Your portfolio description</p>
    </section>
  );
}
```

---

## 🎨 Color System

### Primary Colors (Dark Blood-Red)

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-primary` | `#8B1E3F` | Main brand color, CTAs, important elements |
| `--color-primary-light` | `#A63D5C` | Hover states, highlights |
| `--color-primary-dark` | `#6B1730` | Active/pressed states |
| `--color-primary-muted` | `#5C1629` | Subtle accents, backgrounds |

### Secondary Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-secondary` | `#3C2F3D` | Secondary actions, alternative elements |
| `--color-secondary-light` | `#5A4A5C` | Hover states |
| `--color-secondary-dark` | `#2A1F2B` | Active states |

### Background Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-background` | `#0A0A0A` | Main page background |
| `--color-background-elevated` | `#121212` | Slightly elevated surfaces |
| `--color-background-overlay` | `#1A1A1A` | Modal/overlay backgrounds |

### Surface Colors (Cards, Panels)

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-surface` | `#161616` | Default card/panel background |
| `--color-surface-elevated` | `#1E1E1E` | Elevated cards (on hover) |
| `--color-surface-sunken` | `#0D0D0D` | Input fields, sunken areas |
| `--color-surface-overlay` | `#1C1C1C` | Modal/dialog surfaces |

### Text Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-text-primary` | `#E8E8E8` | Main headings, important text |
| `--color-text-secondary` | `#B0B0B0` | Body text, descriptions |
| `--color-text-muted` | `#707070` | Helper text, captions |
| `--color-text-disabled` | `#4A4A4A` | Disabled elements |
| `--color-text-accent` | `#A63D5C` | Highlighted text, links |

### Button Colors

```css
/* Primary Button */
background: var(--color-button-primary);           /* #8B1E3F */
background: var(--color-button-primary-hover);     /* #A63D5C */
background: var(--color-button-primary-active);    /* #6B1730 */
background: var(--color-button-primary-disabled);  /* #3D1520 */

/* Secondary Button */
background: var(--color-button-secondary);         /* #3C2F3D */
background: var(--color-button-secondary-hover);   /* #5A4A5C */

/* Ghost Button */
background: var(--color-button-ghost);             /* transparent */
background: var(--color-button-ghost-hover);       /* rgba(139, 30, 63, 0.1) */
```

### Status Colors

| Type | Default | Light | Dark | Background |
|------|---------|-------|------|------------|
| Success | `#2D7A4F` | `#3A9B63` | `#1F5A38` | `#1A3A2A` |
| Warning | `#D97706` | `#F59E0B` | `#B45309` | `#2A1F0A` |
| Error | `#DC2626` | `#EF4444` | `#B91C1C` | `#2A0F0F` |
| Info | `#2563EB` | `#3B82F6` | `#1D4ED8` | `#0F1A2A` |

---

## ✍️ Typography System

### Font Families

```css
/* Headings - Elegant serif */
font-family: var(--font-heading);  /* Playfair Display */

/* Body - Clean sans-serif */
font-family: var(--font-body);     /* Inter */

/* Code - Monospace */
font-family: var(--font-mono);     /* Geist Mono */
```

### Font Sizes

| Element | Variable | Size | Pixels |
|---------|----------|------|--------|
| H1 | `--font-size-h1` | `3.5rem` | 56px |
| H2 | `--font-size-h2` | `2.5rem` | 40px |
| H3 | `--font-size-h3` | `2rem` | 32px |
| H4 | `--font-size-h4` | `1.5rem` | 24px |
| H5 | `--font-size-h5` | `1.25rem` | 20px |
| H6 | `--font-size-h6` | `1.125rem` | 18px |
| Body | `--font-size-base` | `1rem` | 16px |
| Large | `--font-size-lg` | `1.125rem` | 18px |
| Small | `--font-size-sm` | `0.875rem` | 14px |
| Extra Small | `--font-size-xs` | `0.75rem` | 12px |

### Font Weights

```css
font-weight: var(--font-weight-light);      /* 300 */
font-weight: var(--font-weight-normal);     /* 400 */
font-weight: var(--font-weight-medium);     /* 500 */
font-weight: var(--font-weight-semibold);   /* 600 */
font-weight: var(--font-weight-bold);       /* 700 */
font-weight: var(--font-weight-extrabold);  /* 800 */
```

### Line Heights

```css
line-height: var(--line-height-tight);    /* 1.2 - Headings */
line-height: var(--line-height-snug);     /* 1.375 */
line-height: var(--line-height-normal);   /* 1.5 - Body */
line-height: var(--line-height-relaxed);  /* 1.625 - Paragraphs */
line-height: var(--line-height-loose);    /* 2 */
```

---

## 📏 Spacing System

Use consistent spacing throughout your application:

```css
padding: var(--spacing-4);   /* 16px */
margin: var(--spacing-8);    /* 32px */
gap: var(--spacing-6);       /* 24px */
```

| Variable | Size | Pixels |
|----------|------|--------|
| `--spacing-1` | `0.25rem` | 4px |
| `--spacing-2` | `0.5rem` | 8px |
| `--spacing-3` | `0.75rem` | 12px |
| `--spacing-4` | `1rem` | 16px |
| `--spacing-5` | `1.25rem` | 20px |
| `--spacing-6` | `1.5rem` | 24px |
| `--spacing-8` | `2rem` | 32px |
| `--spacing-10` | `2.5rem` | 40px |
| `--spacing-12` | `3rem` | 48px |
| `--spacing-16` | `4rem` | 64px |
| `--spacing-20` | `5rem` | 80px |
| `--spacing-24` | `6rem` | 96px |
| `--spacing-32` | `8rem` | 128px |

---

## 🔲 Border Radius

```css
border-radius: var(--radius-sm);    /* 4px - Small elements */
border-radius: var(--radius-base);  /* 8px - Default */
border-radius: var(--radius-md);    /* 12px - Cards */
border-radius: var(--radius-lg);    /* 16px - Large cards */
border-radius: var(--radius-xl);    /* 24px - Hero sections */
border-radius: var(--radius-full);  /* 9999px - Pills, avatars */
```

---

## 🌑 Shadows

```css
/* Standard shadows */
box-shadow: var(--shadow-sm);    /* Subtle */
box-shadow: var(--shadow-base);  /* Default */
box-shadow: var(--shadow-md);    /* Medium */
box-shadow: var(--shadow-lg);    /* Large */
box-shadow: var(--shadow-xl);    /* Extra large */

/* Special shadows */
box-shadow: var(--shadow-inner);       /* Inset shadow */
box-shadow: var(--shadow-glow);        /* Blood-red glow */
box-shadow: var(--shadow-glow-strong); /* Strong glow */
```

**Example: Glowing Card**
```css
.featured-card {
  box-shadow: var(--shadow-glow);
  transition: box-shadow var(--transition-base);
}

.featured-card:hover {
  box-shadow: var(--shadow-glow-strong);
}
```

---

## ⚡ Transitions

```css
transition: all var(--transition-fast);  /* 150ms - Quick interactions */
transition: all var(--transition-base);  /* 250ms - Default */
transition: all var(--transition-slow);  /* 350ms - Smooth animations */
```

---

## 📚 Component Examples

### Button Component

```tsx
export default function Button({ 
  variant = 'primary', 
  children 
}: { 
  variant?: 'primary' | 'secondary' | 'ghost'; 
  children: React.ReactNode;
}) {
  return (
    <button
      style={{
        backgroundColor: `var(--color-button-${variant})`,
        color: 'var(--color-white)',
        padding: 'var(--spacing-3) var(--spacing-6)',
        borderRadius: 'var(--radius-base)',
        fontSize: 'var(--font-size-base)',
        fontWeight: 'var(--font-weight-semibold)',
        border: 'none',
        cursor: 'pointer',
        transition: 'all var(--transition-base)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `var(--color-button-${variant}-hover)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = `var(--color-button-${variant})`;
      }}
    >
      {children}
    </button>
  );
}
```

### Card Component

```tsx
export default function Card({ 
  title, 
  description 
}: { 
  title: string; 
  description: string;
}) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-surface)',
        padding: 'var(--spacing-6)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--color-border)',
        boxShadow: 'var(--shadow-md)',
        transition: 'all var(--transition-base)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-surface-elevated)';
        e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-surface)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
    >
      <h3 style={{ 
        color: 'var(--color-text-accent)',
        fontSize: 'var(--font-size-h4)',
        marginBottom: 'var(--spacing-3)',
      }}>
        {title}
      </h3>
      <p style={{ 
        color: 'var(--color-text-secondary)',
        lineHeight: 'var(--line-height-relaxed)',
      }}>
        {description}
      </p>
    </div>
  );
}
```

### Alert Component

```tsx
export default function Alert({ 
  type = 'info', 
  message 
}: { 
  type?: 'success' | 'warning' | 'error' | 'info'; 
  message: string;
}) {
  return (
    <div
      style={{
        backgroundColor: `var(--color-${type}-bg)`,
        color: `var(--color-${type}-light)`,
        padding: 'var(--spacing-4)',
        borderRadius: 'var(--radius-base)',
        border: `1px solid var(--color-${type})`,
        fontSize: 'var(--font-size-sm)',
      }}
    >
      {message}
    </div>
  );
}
```

---

## 🚀 Best Practices

### ✅ DO

- **Always use CSS variables** instead of hard-coded values
- **Use semantic color names** (e.g., `--color-text-primary` not `--color-gray-100`)
- **Maintain consistency** across all components
- **Use the spacing scale** for all padding, margin, and gap values
- **Apply transitions** to interactive elements
- **Use the shadow system** for depth and hierarchy

### ❌ DON'T

- **Never hard-code colors** like `color: #8B1E3F`
- **Don't use arbitrary spacing** like `padding: 17px`
- **Avoid mixing font families** outside the defined system
- **Don't create custom shadows** without adding them to the system
- **Never skip semantic naming** when extending the system

---

## 🎯 Extending the System

### Adding New Colors

1. Add to `theme.ts`:
```ts
export const theme = {
  colors: {
    // ... existing colors
    tertiary: {
      DEFAULT: '#YOUR_COLOR',
      light: '#LIGHTER_VARIANT',
      dark: '#DARKER_VARIANT',
    },
  },
};
```

2. Add to `globals.css`:
```css
:root {
  --color-tertiary: #YOUR_COLOR;
  --color-tertiary-light: #LIGHTER_VARIANT;
  --color-tertiary-dark: #DARKER_VARIANT;
}
```

### Adding Light Mode (Future)

```css
@media (prefers-color-scheme: light) {
  :root {
    --color-background: #FFFFFF;
    --color-text-primary: #0A0A0A;
    /* Override other colors as needed */
  }
}
```

---

## 📱 Responsive Design

The design system is mobile-first. Use standard breakpoints:

```css
/* Mobile first (default) */
.container {
  padding: var(--spacing-4);
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: var(--spacing-8);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: var(--spacing-12);
  }
}
```

---

## 🎨 Color Palette Reference

### Quick Copy-Paste

```
Primary: #8B1E3F
Primary Light: #A63D5C
Primary Dark: #6B1730

Background: #0A0A0A
Surface: #161616
Surface Elevated: #1E1E1E

Text Primary: #E8E8E8
Text Secondary: #B0B0B0
Text Muted: #707070

Border: #2A2A2A
```

---

## 🔍 Troubleshooting

### Fonts Not Loading?

Ensure `layout.tsx` includes the font variables:
```tsx
className={`${playfairDisplay.variable} ${inter.variable} ${geistMono.variable}`}
```

### Colors Not Applying?

1. Check that `globals.css` is imported in `layout.tsx`
2. Verify CSS variable syntax: `var(--color-primary)` not `var(color-primary)`
3. Ensure the variable exists in `:root`

### TypeScript Errors?

Import the theme correctly:
```tsx
import { theme } from '@/styles/theme';
```

---

## 📄 Summary

This design system provides everything you need for a consistent, professional portfolio:

- ✅ **Complete color palette** with dark blood-red aesthetic
- ✅ **Typography system** with elegant fonts
- ✅ **Spacing & layout** tokens
- ✅ **Shadows & effects** including signature glow
- ✅ **Zero hard-coding** - all values are reusable
- ✅ **Production-ready** and scalable

**Never hard-code values. Always use the design system.**
