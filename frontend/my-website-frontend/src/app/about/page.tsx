'use client';

import { AboutSection } from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <main className="about-page-container">
      {/* Section 1: Default (Text Left, Image Right) */}
      <AboutSection
        greeting="Hello, Welcome"
        name="Biniyam Alemayehu"
        description="I am a dedicated Full-Stack Developer with a passion for crafting seamless digital experiences. With a focus on performance, scalability, and modern design, I help turn complex ideas into functional, high-quality applications."
        ctaText="Contact Me"
        ctaHref="/contact"
        imageSrc="/images/bini.png"
        imageAlt="Biniyam Alemayehu"
      />

      {/* Section 2: Reversed (Image Left, Text Right) */}
      <AboutSection
        greeting="My Vision"
        name="Innovative Solutions"
        description="I believe in building technology that isn't just functional, but also intuitive and impactful. By leveraging the latest tools and best practices, I create solutions that stand the test of time and provide real value to users."
        ctaText="View Projects"
        ctaHref="/projects"
        imageSrc="/images/bini.png"
        imageAlt="Biniyam Alemayehu Vision"
        isReversed
      />

      {/* Section 3: Default (Text Left, Image Right) */}
      <AboutSection
        greeting="My Approach"
        name="Quality First"
        description="My development process is centered around writing clean, maintainable code. I prioritize performance and security, ensuring that every application I build is robust and ready to handle growth and complexity."
        ctaText="Technologies"
        ctaHref="/skills"
        imageSrc="/images/bini.png"
        imageAlt="Biniyam Alemayehu Approach"
      />

      {/* Section 4: Reversed (Image Left, Text Right) */}
      <AboutSection
        greeting="Collaborative"
        name="Team Player"
        description="I thrive in environments that value collaboration and open communication. Working closely with designers, stakeholders, and other developers, I ensure that the final product aligns perfectly with the project goals."
        ctaText="Get in Touch"
        ctaHref="/contact"
        imageSrc="/images/bini.png"
        imageAlt="Biniyam Alemayehu Collaboration"
        isReversed
      />

      <style jsx>{`
        .about-page-container {
          position: relative;
          min-height: 100vh;
          background: 
            linear-gradient(rgba(5, 5, 5, 0.4), rgba(5, 5, 5, 0.4)),
            url('/images/BG.png') no-repeat center center fixed;
          background-size: cover;
          overflow-x: hidden;
        }
      `}</style>
    </main>
  );
}
