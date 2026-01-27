import React from "react";

const STRAPI_URL = "http://localhost:1337";

interface Project {
    id: number;
    title: string;
    description: string;
    liveUrl: string;
    images: Array<{
        url: string;
    }>;
}

interface FeaturedProjectsProps {
    data: Project[];
}

export function FeaturedProjects({ data }: FeaturedProjectsProps) {
    if (!data || data.length === 0) return null;

    return (
        <section style={{ padding: "4rem 2rem" }}>
            <h2>Featured Projects</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                {data.map((project) => {
                    const imageUrl = project.images?.[0]?.url
                        ? `${STRAPI_URL}${project.images[0].url}`
                        : null;

                    return (
                        <div key={project.id} style={{ border: "1px solid #eaeaea", borderRadius: "10px", overflow: "hidden" }}>
                            {imageUrl && (
                                <img
                                    src={imageUrl}
                                    alt={project.title}
                                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                />
                            )}
                            <div style={{ padding: "1.5rem" }}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#0070f3" }}>
                                        View Project &rarr;
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
