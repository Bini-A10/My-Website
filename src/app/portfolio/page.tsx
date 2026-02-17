'use client';

import React from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { SkillsSection } from '@/components/SkillsSection';
import { ResumeSection } from '@/components/ResumeSection';
import { EducationSection } from '@/components/EducationSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';

const projects = [
  {
    title: "Citizen Registration System",
    description: "A full-scale citizen registration platform including appointment booking, payment integration, and identity management.",
    images: [
      "/images/cris/cris1.jpg",
      "/images/cris/cris2.jpg",
      "/images/cris/cris3.jpg",
      "/images/cris/cris4.jpg",
      "/images/cris/cris5.png",
      "/images/cris/cris6.jpg",
      "/images/cris/cris7.png"
    ],
    tags: ["Java", "JavaFX", "Laravel", "MySQL"],
    problem: "Manual citizen registration processes caused long queues, inefficient data handling, and lack of centralized identity management.",
    solution: "Developed a multi-module system with appointment scheduling, integrated payment processing, and centralized citizen data management.",
    techStack: ["Java", "JavaFX", "Laravel", "HTML", "CSS", "JavaScript", "MySQL"],
    outcome: "Improved registration efficiency, digitized identity records, and streamlined appointment and payment workflows."
  },
  {
    title: "Robera Printing Management",
    description: "A mobile management application designed for a printing business owner to monitor and control operations remotely.",
    images: [
      "/images/robera/r1.png",
      "/images/robera/r2.png",
      "/images/robera/r3.png"
    ],
    tags: ["Flutter", "Dart"],
    problem: "The owner needed a simple way to track printing jobs, operations, and business activities remotely.",
    solution: "Built a dedicated mobile app allowing real-time monitoring and management of printing tasks and business workflows.",
    techStack: ["Flutter", "Dart"],
    outcome: "Enabled mobile business control, improved operational visibility, and simplified daily management tasks."
  },
  {
    title: "Harambee E-Student Mobile",
    description: "A university student service mobile application for easier access to academic services and system functionality.",
    images: [
      "/images/e-student mobile/e1.png",
      "/images/e-student mobile/e2.png",
      "/images/e-student mobile/e3.png",
      "/images/e-student mobile/e4.png"
    ],
    tags: ["Flutter", "Dart"],
    problem: "Students required easier mobile access to academic services and updated system functionality.",
    solution: "Contributed to feature development and later upgraded the application with improvements and updates.",
    techStack: ["Flutter", "Dart"],
    outcome: "Enhanced student accessibility, improved usability, and modernized system functionality."
  },
  {
    title: "Harambee E-Student Website",
    description: "A web-based student management platform maintaining legacy systems and developing modernized improved solutions.",
    images: [
      "/images/e-student web/ew1.jpg",
      "/images/e-student web/ew2.jpg",
      "/images/e-student web/ew3.jpg"
    ],
    tags: ["Laravel", "React", "PostgreSQL"],
    problem: "Existing student portal required maintenance and modernization to improve reliability and scalability.",
    solution: "Maintained the existing platform while contributing to development of a newer improved system (frontend and backend).",
    techStack: ["Laravel", "React", "PostgreSQL"],
    outcome: "Improved system stability, better performance, and enhanced student service delivery."
  },
  {
    title: "Ride & Delivery Backend",
    description: "Backend system supporting ride booking and delivery service operations with robust database handling.",
    images: [
      "/images/ride and delivery/rd1.png",
      "/images/ride and delivery/rd2.png",
      "/images/ride and delivery/rd3.png",
      "/images/ride and delivery/rd4.png"
    ],
    tags: ["Spring Boot", "MySQL"],
    problem: "Needed a scalable backend to handle ride requests, delivery tracking, and operational data.",
    solution: "Built a complete backend API with robust database handling and service logic using Java Spring Boot.",
    techStack: ["Java Spring Boot", "MySQL"],
    outcome: "Reliable backend infrastructure supporting ride and delivery service functionality."
  },
  {
    title: "Transport & Cargo System",
    description: "A logistics system including backend services and mobile application for cargo transport management.",
    images: [
      "/images/transport and cargo/tc1.png",
      "/images/transport and cargo/tc2.png",
      "/images/transport and cargo/tc3.png",
      "/images/transport and cargo/tc4.png",
      "/images/transport and cargo/tc5.png"
    ],
    tags: ["Laravel", "Flutter", "MySQL"],
    problem: "Transport businesses needed efficient cargo tracking, management, and operational visibility.",
    solution: "Developed backend services and a mobile app for managing cargo operations and logistics workflows.",
    techStack: ["Laravel", "Flutter", "Dart", "MySQL"],
    outcome: "Improved cargo tracking, streamlined logistics management, and enhanced operational efficiency."
  },
  {
    title: "Inventory Frontend",
    description: "A web-based inventory system focusing on intuitive user interface for managing inventory data.",
    images: [
      "/images/inventory/i1.png",
      "/images/inventory/i2.png",
      "/images/inventory/i3.png",
      "/images/inventory/i4.png",
      "/images/inventory/i5.png"
    ],
    tags: ["React", "Redux", "Tailwind", "CSS"],
    problem: "Needed an intuitive interface for managing inventory data efficiently.",
    solution: "Worked on frontend UI development and state management for better usability.",
    techStack: ["React", "Redux", "Tailwind", "CSS"],
    outcome: "Enhanced user experience and improved content management workflow."
  },
  {
    title: "Personal Portfolio",
    description: "Responsive portfolio website showcasing projects, skills, and professional experience with modern UI/UX.",
    images: ["/images/Me.png", "/images/BG.png"],
    tags: ["React", "Tailwind", "CSS"],
    problem: "Needed a professional online presence to present projects and skills effectively.",
    solution: "Designed and developed a responsive portfolio website with modern UI/UX using React and Tailwind.",
    techStack: ["React", "Tailwind", "CSS"],
    outcome: "Strong personal branding platform and centralized professional portfolio."
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
          margin-top: 6rem;
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
          font-style: italic;
        }

        .section-container {
            width: 100%;
            max-width: 1300px;
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
            font-family: 'Ethnocentric', sans-serif;
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
          grid-template-columns: repeat(3, 1fr);
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
            grid-template-columns: repeat(2, 1fr);
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
