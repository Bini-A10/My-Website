'use client';

/**
 * Design System Demo Page
 * 
 * This page showcases all design tokens and components
 * to visualize the dark blood-red aesthetic.
 */

export default function DesignSystemDemo() {
    return (
        <div style={{
            padding: 'var(--spacing-8)',
            maxWidth: '1200px',
            margin: '0 auto',
        }}>
            {/* Header */}
            <header style={{ marginBottom: 'var(--spacing-12)' }}>
                <h1 style={{
                    fontSize: 'var(--font-size-h1)',
                    marginBottom: 'var(--spacing-4)',
                    background: 'linear-gradient(135deg, var(--color-primary-light), var(--color-primary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>
                    Design System
                </h1>
                <p style={{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--color-text-secondary)',
                }}>
                    Dark, elegant, muted blood-red aesthetic for your personal portfolio
                </p>
            </header>

            {/* Color Palette */}
            <section style={{ marginBottom: 'var(--spacing-12)' }}>
                <h2 style={{ marginBottom: 'var(--spacing-6)' }}>Color Palette</h2>

                {/* Primary Colors */}
                <div style={{ marginBottom: 'var(--spacing-8)' }}>
                    <h3 style={{
                        fontSize: 'var(--font-size-h5)',
                        marginBottom: 'var(--spacing-4)',
                        color: 'var(--color-text-secondary)',
                    }}>
                        Primary (Dark Blood-Red)
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 'var(--spacing-4)',
                    }}>
                        {[
                            { name: 'Primary', var: '--color-primary', value: '#8B1E3F' },
                            { name: 'Primary Light', var: '--color-primary-light', value: '#A63D5C' },
                            { name: 'Primary Dark', var: '--color-primary-dark', value: '#6B1730' },
                            { name: 'Primary Muted', var: '--color-primary-muted', value: '#5C1629' },
                        ].map((color) => (
                            <div
                                key={color.var}
                                style={{
                                    backgroundColor: `var(${color.var})`,
                                    padding: 'var(--spacing-6)',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--color-border)',
                                }}
                            >
                                <div style={{
                                    fontSize: 'var(--font-size-sm)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    marginBottom: 'var(--spacing-2)',
                                    color: 'var(--color-white)',
                                }}>
                                    {color.name}
                                </div>
                                <div style={{
                                    fontSize: 'var(--font-size-xs)',
                                    color: 'var(--color-gray-200)',
                                    fontFamily: 'var(--font-mono)',
                                }}>
                                    {color.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Surface Colors */}
                <div style={{ marginBottom: 'var(--spacing-8)' }}>
                    <h3 style={{
                        fontSize: 'var(--font-size-h5)',
                        marginBottom: 'var(--spacing-4)',
                        color: 'var(--color-text-secondary)',
                    }}>
                        Surfaces & Backgrounds
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 'var(--spacing-4)',
                    }}>
                        {[
                            { name: 'Background', var: '--color-background', value: '#0A0A0A' },
                            { name: 'Surface', var: '--color-surface', value: '#161616' },
                            { name: 'Surface Elevated', var: '--color-surface-elevated', value: '#1E1E1E' },
                            { name: 'Surface Sunken', var: '--color-surface-sunken', value: '#0D0D0D' },
                        ].map((color) => (
                            <div
                                key={color.var}
                                style={{
                                    backgroundColor: `var(${color.var})`,
                                    padding: 'var(--spacing-6)',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--color-border)',
                                }}
                            >
                                <div style={{
                                    fontSize: 'var(--font-size-sm)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    marginBottom: 'var(--spacing-2)',
                                    color: 'var(--color-text-primary)',
                                }}>
                                    {color.name}
                                </div>
                                <div style={{
                                    fontSize: 'var(--font-size-xs)',
                                    color: 'var(--color-text-muted)',
                                    fontFamily: 'var(--font-mono)',
                                }}>
                                    {color.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Status Colors */}
                <div>
                    <h3 style={{
                        fontSize: 'var(--font-size-h5)',
                        marginBottom: 'var(--spacing-4)',
                        color: 'var(--color-text-secondary)',
                    }}>
                        Status Colors
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: 'var(--spacing-4)',
                    }}>
                        {[
                            { name: 'Success', var: '--color-success', value: '#2D7A4F' },
                            { name: 'Warning', var: '--color-warning', value: '#D97706' },
                            { name: 'Error', var: '--color-error', value: '#DC2626' },
                            { name: 'Info', var: '--color-info', value: '#2563EB' },
                        ].map((color) => (
                            <div
                                key={color.var}
                                style={{
                                    backgroundColor: `var(${color.var})`,
                                    padding: 'var(--spacing-6)',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--color-border)',
                                }}
                            >
                                <div style={{
                                    fontSize: 'var(--font-size-sm)',
                                    fontWeight: 'var(--font-weight-semibold)',
                                    marginBottom: 'var(--spacing-2)',
                                    color: 'var(--color-white)',
                                }}>
                                    {color.name}
                                </div>
                                <div style={{
                                    fontSize: 'var(--font-size-xs)',
                                    color: 'var(--color-gray-200)',
                                    fontFamily: 'var(--font-mono)',
                                }}>
                                    {color.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Typography */}
            <section style={{ marginBottom: 'var(--spacing-12)' }}>
                <h2 style={{ marginBottom: 'var(--spacing-6)' }}>Typography</h2>

                <div style={{
                    backgroundColor: 'var(--color-surface)',
                    padding: 'var(--spacing-8)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border)',
                }}>
                    <h1>Heading 1 - Playfair Display</h1>
                    <h2>Heading 2 - Playfair Display</h2>
                    <h3>Heading 3 - Playfair Display</h3>
                    <h4>Heading 4 - Playfair Display</h4>
                    <h5>Heading 5 - Playfair Display</h5>
                    <h6>Heading 6 - Playfair Display</h6>

                    <p style={{ marginTop: 'var(--spacing-6)' }}>
                        This is body text using Inter font. It's clean, modern, and highly readable.
                        Perfect for paragraphs and longer content. The line height is set to relaxed
                        for optimal readability.
                    </p>

                    <p style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-muted)',
                    }}>
                        This is small text, often used for captions, helper text, or metadata.
                    </p>
                </div>
            </section>

            {/* Buttons */}
            <section style={{ marginBottom: 'var(--spacing-12)' }}>
                <h2 style={{ marginBottom: 'var(--spacing-6)' }}>Buttons</h2>

                <div style={{
                    display: 'flex',
                    gap: 'var(--spacing-4)',
                    flexWrap: 'wrap',
                }}>
                    {/* Primary Button */}
                    <button
                        style={{
                            backgroundColor: 'var(--color-button-primary)',
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
                            e.currentTarget.style.backgroundColor = 'var(--color-button-primary-hover)';
                            e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-button-primary)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        Primary Button
                    </button>

                    {/* Secondary Button */}
                    <button
                        style={{
                            backgroundColor: 'var(--color-button-secondary)',
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
                            e.currentTarget.style.backgroundColor = 'var(--color-button-secondary-hover)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-button-secondary)';
                        }}
                    >
                        Secondary Button
                    </button>

                    {/* Ghost Button */}
                    <button
                        style={{
                            backgroundColor: 'var(--color-button-ghost)',
                            color: 'var(--color-primary-light)',
                            padding: 'var(--spacing-3) var(--spacing-6)',
                            borderRadius: 'var(--radius-base)',
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 'var(--font-weight-semibold)',
                            border: '1px solid var(--color-border-accent)',
                            cursor: 'pointer',
                            transition: 'all var(--transition-base)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-button-ghost-hover)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-button-ghost)';
                        }}
                    >
                        Ghost Button
                    </button>
                </div>
            </section>

            {/* Cards */}
            <section style={{ marginBottom: 'var(--spacing-12)' }}>
                <h2 style={{ marginBottom: 'var(--spacing-6)' }}>Cards</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--spacing-6)',
                }}>
                    {/* Standard Card */}
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
                            e.currentTarget.style.transform = 'translateY(-4px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-surface)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <h3 style={{
                            color: 'var(--color-text-accent)',
                            marginBottom: 'var(--spacing-3)',
                        }}>
                            Standard Card
                        </h3>
                        <p style={{
                            color: 'var(--color-text-secondary)',
                            fontSize: 'var(--font-size-sm)',
                        }}>
                            This is a standard card with hover effects. Notice the smooth transition
                            and elevation change.
                        </p>
                    </div>

                    {/* Featured Card with Glow */}
                    <div
                        style={{
                            backgroundColor: 'var(--color-surface)',
                            padding: 'var(--spacing-6)',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--color-border-accent)',
                            boxShadow: 'var(--shadow-glow)',
                            transition: 'all var(--transition-base)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = 'var(--shadow-glow-strong)';
                            e.currentTarget.style.transform = 'translateY(-4px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <h3 style={{
                            color: 'var(--color-primary-light)',
                            marginBottom: 'var(--spacing-3)',
                        }}>
                            Featured Card
                        </h3>
                        <p style={{
                            color: 'var(--color-text-secondary)',
                            fontSize: 'var(--font-size-sm)',
                        }}>
                            This card has the signature blood-red glow effect. Perfect for highlighting
                            important content.
                        </p>
                    </div>
                </div>
            </section>

            {/* Alerts */}
            <section style={{ marginBottom: 'var(--spacing-12)' }}>
                <h2 style={{ marginBottom: 'var(--spacing-6)' }}>Alerts</h2>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-4)',
                }}>
                    {[
                        { type: 'success', message: 'Success! Your changes have been saved.' },
                        { type: 'warning', message: 'Warning: This action cannot be undone.' },
                        { type: 'error', message: 'Error: Something went wrong. Please try again.' },
                        { type: 'info', message: 'Info: This feature is currently in beta.' },
                    ].map((alert) => (
                        <div
                            key={alert.type}
                            style={{
                                backgroundColor: `var(--color-${alert.type}-bg)`,
                                color: `var(--color-${alert.type}-light)`,
                                padding: 'var(--spacing-4)',
                                borderRadius: 'var(--radius-base)',
                                border: `1px solid var(--color-${alert.type})`,
                                fontSize: 'var(--font-size-sm)',
                            }}
                        >
                            {alert.message}
                        </div>
                    ))}
                </div>
            </section>

            {/* Shadows */}
            <section style={{ marginBottom: 'var(--spacing-12)' }}>
                <h2 style={{ marginBottom: 'var(--spacing-6)' }}>Shadows</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 'var(--spacing-6)',
                }}>
                    {[
                        { name: 'Small', shadow: 'var(--shadow-sm)' },
                        { name: 'Base', shadow: 'var(--shadow-base)' },
                        { name: 'Medium', shadow: 'var(--shadow-md)' },
                        { name: 'Large', shadow: 'var(--shadow-lg)' },
                        { name: 'Glow', shadow: 'var(--shadow-glow)' },
                        { name: 'Glow Strong', shadow: 'var(--shadow-glow-strong)' },
                    ].map((item) => (
                        <div
                            key={item.name}
                            style={{
                                backgroundColor: 'var(--color-surface)',
                                padding: 'var(--spacing-8)',
                                borderRadius: 'var(--radius-base)',
                                boxShadow: item.shadow,
                                textAlign: 'center',
                            }}
                        >
                            <div style={{
                                fontSize: 'var(--font-size-sm)',
                                fontWeight: 'var(--font-weight-semibold)',
                                color: 'var(--color-text-primary)',
                            }}>
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer style={{
                marginTop: 'var(--spacing-16)',
                paddingTop: 'var(--spacing-8)',
                borderTop: '1px solid var(--color-border)',
                textAlign: 'center',
            }}>
                <p style={{
                    color: 'var(--color-text-muted)',
                    fontSize: 'var(--font-size-sm)',
                }}>
                    Design System Demo • Dark Blood-Red Aesthetic
                </p>
            </footer>
        </div>
    );
}
