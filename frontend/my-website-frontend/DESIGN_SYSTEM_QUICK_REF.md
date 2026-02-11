# Design System Quick Reference

## 🎨 Most Used Colors

```css
/* Backgrounds */
background: var(--color-background);        /* #0A0A0A - Main page */
background: var(--color-surface);           /* #161616 - Cards */
background: var(--color-surface-elevated);  /* #1E1E1E - Hover */

/* Text */
color: var(--color-text-primary);    /* #E8E8E8 - Headings */
color: var(--color-text-secondary);  /* #B0B0B0 - Body */
color: var(--color-text-muted);      /* #707070 - Captions */
color: var(--color-text-accent);     /* #A63D5C - Highlights */

/* Accents */
color: var(--color-primary);         /* #8B1E3F - Brand */
color: var(--color-primary-light);   /* #A63D5C - Hover */

/* Borders */
border-color: var(--color-border);   /* #2A2A2A */
```

## ✍️ Typography

```css
/* Fonts */
font-family: var(--font-heading);  /* Playfair Display - Headings */
font-family: var(--font-body);     /* Inter - Body */

/* Sizes */
font-size: var(--font-size-h1);    /* 56px */
font-size: var(--font-size-h2);    /* 40px */
font-size: var(--font-size-h3);    /* 32px */
font-size: var(--font-size-base);  /* 16px */
font-size: var(--font-size-sm);    /* 14px */

/* Weights */
font-weight: var(--font-weight-normal);    /* 400 */
font-weight: var(--font-weight-semibold);  /* 600 */
font-weight: var(--font-weight-bold);      /* 700 */
```

## 📏 Spacing

```css
/* Common spacing values */
padding: var(--spacing-2);   /* 8px */
padding: var(--spacing-4);   /* 16px */
padding: var(--spacing-6);   /* 24px */
padding: var(--spacing-8);   /* 32px */
padding: var(--spacing-12);  /* 48px */

/* Gaps */
gap: var(--spacing-4);       /* 16px */
gap: var(--spacing-6);       /* 24px */
```

## 🔲 Borders & Radius

```css
/* Radius */
border-radius: var(--radius-base);  /* 8px - Default */
border-radius: var(--radius-lg);    /* 16px - Cards */
border-radius: var(--radius-full);  /* Pills/Avatars */

/* Borders */
border: 1px solid var(--color-border);
border: 1px solid var(--color-border-accent);
```

## 🌑 Shadows

```css
/* Standard */
box-shadow: var(--shadow-base);  /* Default */
box-shadow: var(--shadow-md);    /* Medium */
box-shadow: var(--shadow-lg);    /* Large */

/* Special */
box-shadow: var(--shadow-glow);         /* Blood-red glow */
box-shadow: var(--shadow-glow-strong);  /* Strong glow */
```

## ⚡ Transitions

```css
transition: all var(--transition-fast);  /* 150ms */
transition: all var(--transition-base);  /* 250ms */
```

## 🎯 Button States

```css
/* Primary Button */
background: var(--color-button-primary);        /* Default */
background: var(--color-button-primary-hover);  /* Hover */
background: var(--color-button-primary-active); /* Active */

/* Secondary Button */
background: var(--color-button-secondary);
background: var(--color-button-secondary-hover);
```

## 🚨 Status Colors

```css
/* Success */
color: var(--color-success);
background: var(--color-success-bg);

/* Error */
color: var(--color-error);
background: var(--color-error-bg);

/* Warning */
color: var(--color-warning);
background: var(--color-warning-bg);

/* Info */
color: var(--color-info);
background: var(--color-info-bg);
```

## 📦 Common Patterns

### Card
```css
.card {
  background: var(--color-surface);
  padding: var(--spacing-6);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.card:hover {
  background: var(--color-surface-elevated);
  box-shadow: var(--shadow-glow);
}
```

### Button
```css
.button {
  background: var(--color-button-primary);
  color: var(--color-white);
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-base);
  font-weight: var(--font-weight-semibold);
  transition: all var(--transition-base);
}

.button:hover {
  background: var(--color-button-primary-hover);
}
```

### Input
```css
.input {
  background: var(--color-surface-sunken);
  color: var(--color-text-primary);
  padding: var(--spacing-3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-base);
  font-size: var(--font-size-base);
}

.input:focus {
  border-color: var(--color-border-focus);
  outline: none;
}
```

## 🎨 Utility Classes

```css
/* Text */
.text-primary    { color: var(--color-text-primary); }
.text-secondary  { color: var(--color-text-secondary); }
.text-muted      { color: var(--color-text-muted); }
.text-accent     { color: var(--color-text-accent); }

/* Backgrounds */
.bg-primary      { background-color: var(--color-primary); }
.bg-surface      { background-color: var(--color-surface); }
.bg-surface-elevated { background-color: var(--color-surface-elevated); }

/* Shadows */
.shadow-glow        { box-shadow: var(--shadow-glow); }
.shadow-glow-strong { box-shadow: var(--shadow-glow-strong); }
```

## 📱 Responsive Breakpoints

```css
/* Mobile first (default) */
/* Styles here apply to all sizes */

/* Tablet: 768px and up */
@media (min-width: 768px) {
  /* Tablet styles */
}

/* Desktop: 1024px and up */
@media (min-width: 1024px) {
  /* Desktop styles */
}

/* Large Desktop: 1280px and up */
@media (min-width: 1280px) {
  /* Large desktop styles */
}
```

## 🔥 Pro Tips

1. **Never hard-code colors** - Always use CSS variables
2. **Use semantic names** - `--color-text-primary` not `--color-gray-100`
3. **Consistent spacing** - Stick to the spacing scale
4. **Add transitions** - Makes everything feel premium
5. **Use the glow effect** - Signature blood-red glow on featured items

## 📚 Full Documentation

See `DESIGN_SYSTEM.md` for complete documentation with examples and best practices.
