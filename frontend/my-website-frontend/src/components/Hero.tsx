import React from "react";

const STRAPI_URL = "http://localhost:1337";

interface HeroProps {
    data: {
        heading: string;
        subheading: string;
        ctaText: string;
        ctaLink: string;
        backgroundImage: {
            url: string;
        };
    };
}

export function Hero({ data }: HeroProps) {
    const { heading, subheading, ctaText, ctaLink, backgroundImage } = data;
    const imageUrl = backgroundImage?.url
        ? `${STRAPI_URL}${backgroundImage.url}`
        : null;

    return (
        <section style={{
            padding: "4rem 2rem",
            textAlign: "center",
            backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: imageUrl ? 'white' : 'black'
        }}>
            <h1>{heading}</h1>
            <p style={{ fontSize: "1.2rem", margin: "1rem 0" }}>{subheading}</p>
            {ctaLink && (
                <a
                    href={ctaLink}
                    style={{
                        display: "inline-block",
                        padding: "10px 20px",
                        backgroundColor: "#0070f3",
                        color: "white",
                        textDecoration: "none",
                        borderRadius: "5px",
                        marginTop: "1rem",
                    }}
                >
                    {ctaText}
                </a>
            )}
        </section>
    );
}
