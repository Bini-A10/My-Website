'use client';

import React from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { SkillsSection } from '@/components/SkillsSection';
import { ResumeSection } from '@/components/ResumeSection';
import { EducationSection } from '@/components/EducationSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';

const projects = [
  {
    title: "E-Commerce System",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment integration.",
    imageSrc: "/images/work.png",
    tags: ["Laravel", "React", "MySQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    problem: "Inefficient manual inventory tracking and slow checkout processes leading to customer churn.",
    solution: "Implemented a real-time WebSocket-based inventory system and integrated Stripe for seamless payments.",
    techStack: ["Laravel 10", "React 18", "Redis", "Stripe API"],
    outcome: "30% increase in checkout speed and 100% accuracy in stock levels."
  },
  {
    title: "School Management App",
    description: "Comprehensive platform for educational institutions featuring student tracking and automated reporting.",
    imageSrc: "/images/Edu.png",
    tags: ["Spring Boot", "Flutter", "Java", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    problem: "Difficulty in managing large student datasets and the lack of a centralized platform for grading.",
    solution: "Developed a microservices architecture to handle high concurrency and a cross-platform mobile app for parents.",
    techStack: ["Spring Boot", "Flutter SDK", "Docker", "PostgreSQL"],
    outcome: "Streamlined administrative tasks for 5+ institutions, serving 2000+ students."
  },
  {
    title: "Transportation SaaS",
    description: "Cloud-based fleet management and logistics tracking system improving operational efficiency.",
    imageSrc: "/images/approach.png",
    tags: ["Node.js", "Docker", "MongoDB", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    problem: "Lack of real-time visibility into vehicle locations and fuel consumption in large fleets.",
    solution: "Built a real-time GPS tracking dashboard and fuel analytics engine using Node.js and IoT sensors.",
    techStack: ["Node.js", "Socket.io", "MongoDB", "Google Maps API"],
    outcome: "Reduced fuel costs by 15% and improved route efficiency by 25%."
  },
  {
    title: "Mobile Business Suite",
    description: "A suite of business tools including CRM, task management, and offline-capable reporting.",
    imageSrc: "/images/skill.png",
    tags: ["Flutter", "Dart", "Firebase", "SQLite"],
    liveUrl: "#",
    githubUrl: "#",
    problem: "Sales teams in rural areas struggled with poor connectivity while needing access to customer data.",
    solution: "Engineered a robust SQLite-based offline sync mechanism that reconciles data when back online.",
    techStack: ["Flutter", "SQLite", "Firebase Auth", "Riverpod"],
    outcome: "Enabled 100% productivity in low-connectivity areas for 50+ sales reps."
  },
  {
    title: "AI Analysis Portal",
    description: "Advanced data visualization and AI-driven insights for inventory sales trends.",
    imageSrc: "/images/vision.png",
    tags: ["React", "Python", "Data Viz", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    problem: "Businesses failing to predict seasonal demand, resulting in overstocking or missing sales.",
    solution: "Integrated a Python Flask backend with ML models to provide demand forecasting visuals.",
    techStack: ["React", "Python Flask", "Scikit-Learn", "D3.js"],
    outcome: "Improved inventory turnover ratio by 20% for early adopters."
  },
  {
    title: "Full-Stack Portfolio",
    description: "Modern, high-performance personal portfolio with Cyber Ninja aesthetics.",
    imageSrc: "/images/Me.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    problem: "Standard portfolios lacked the professional depth and brand identity required to stand out.",
    solution: "Designed a unique dark/blood-red theme with glassmorphism and structured project cases.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    outcome: "Created a premium digital presence that effectively communicates full-stack capabilities."
  }
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page-container">
      {/* 1. Header Section */}
      <div className="portfolio-header">
        <h1 className="portfolio-title">Engineering Showcase</h1>
        <p className="portfolio-subtitle">
          A deep dive into the systems, solutions, and technologies
          I've architected to solve real-world problems.
        </p>
      </div>

      {/* 2. Projects Section */}
      <section className="section-container">
        <div className="section-header-alt">
          <span>01</span>
          <h3>Featured Projects</h3>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-grid-item">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>

      {/* 3. Resume Section */}
      <section className="section-container">
        <div className="section-header-alt">
          <span>02</span>
          <h3>Recruiter Pack</h3>
        </div>
        <ResumeSection />
      </section>

      {/* 4. Skills Section */}
      <section className="section-container">
        <div className="section-header-alt">
          <span>03</span>
          <h3>Technical Stack</h3>
        </div>
        <SkillsSection />
      </section>

      {/* 5. Education Section */}
      <section className="section-container">
        <div className="section-header-alt">
          <span>04</span>
          <h3>Background</h3>
        </div>
        <EducationSection />
      </section>

      {/* 6. Testimonials Section */}
      <section className="section-container">
        <div className="section-header-alt">
          <span>05</span>
          <h3>Endorsements</h3>
        </div>
        <TestimonialsSection />
      </section>

      <style jsx>{`
        .portfolio-page-container {
          position: relative;
          min-height: 100vh;
          background: 
            linear-gradient(rgba(5, 5, 5, 0.7), rgba(5, 5, 5, 0.7)),
            url('/images/BG.png') no-repeat center center fixed;
          background-size: cover;
          overflow-x: hidden;
          padding: var(--spacing-24) var(--spacing-8);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-10);
        }

        .portfolio-header {
          text-align: center;
          margin-bottom: 6rem;
          max-width: 900px;
        }

        .portfolio-title {
          font-family: 'Ethnocentric', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4rem);
          color: white;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 0 0 30px rgba(255, 0, 60, 0.4);
        }

        .portfolio-subtitle {
          font-family: var(--font-gilroy-light-italic), sans-serif;
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }

        .section-container {
            width: 100%;
            max-width: 1250px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 4rem;
        }

        .section-header-alt {
            align-self: flex-start;
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 3rem;
        }

        .section-header-alt span {
            font-family: var(--font-mono);
            font-size: 1rem;
            color: var(--color-primary);
            background: rgba(255, 0, 60, 0.1);
            padding: 0.4rem 0.8rem;
            border-radius: 4px;
        }

        .section-header-alt h3 {
            font-family: 'Ethnocentric', sans-serif;
            font-size: 1.5rem;
            color: white;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 3rem;
          width: 100%;
        }

        .project-grid-item {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 1024px) {
          .portfolio-page-container {
            padding: var(--spacing-20) var(--spacing-6);
          }
          .projects-grid {
            gap: 2rem;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
          .portfolio-header {
            margin-bottom: 4rem;
          }
        }

        @media (max-width: 768px) {
           .projects-grid {
              grid-template-columns: 1fr;
              max-width: 500px;
           }
        }

        @media (max-width: 640px) {
          .portfolio-page-container {
            padding: var(--spacing-16) var(--spacing-4);
          }
          .portfolio-title {
            font-size: clamp(1.75rem, 8vw, 2.5rem);
          }
          .portfolio-subtitle {
            font-size: 1rem;
          }
          .section-header-alt h3 {
              font-size: 1rem;
          }
           .section-header-alt {
              gap: 1rem;
              margin-bottom: 2rem;
          }
        }
      `}</style>
    </main>
  );
}
