'use client';

import { AboutSection } from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <main className="about-page-container">
      {/* Section 1: Default (Text Left, Image Right) */}
      <AboutSection
        greeting="Hello, Welcome"
        name="Biniyam Alemayehu"
        description="I am Biniyam Alemayehu, a passionate Full-Stack Developer dedicated to 
         building scalable, efficient, and user-focused digital solutions. I specialize in 
         transforming complex ideas into reliable software applications that combine strong
         performance, clean design, and practical real-world impact. My goal is not only to 
         write code, but to create meaningful technology that solves problems and improves 
         everyday experiences.
         With hands-on experience in both web and mobile development, 
         I have worked on production-grade systems across transportation, education, and 
         business sectors. I focus on writing maintainable code, optimizing backend 
         performance, and ensuring smooth user experiences from database to interface."
        imageSrc="/images/binu1.png"
        imageAlt="Biniyam Alemayehu"
      />

      {/* Section 2: Reversed (Image Left, Text Right) */}
      <AboutSection
        greeting="My Education"
        name="Academic Foundation"
        description="I earned my Bachelor of Science in Computer Science from Unity University
        , graduating with honors and ranking among the top 10% of my class (GPA 3.74).
          My academic experience provided a strong foundation in:
          - Software engineering principles
          - Database systems and optimization
          - Object-oriented programming
          - Mobile and web application development
          - Systems analysis and architecture design
          Beyond formal coursework, I actively engaged in collaborative development projects,
          leadership roles, and technical problem-solving activities that helped shape my 
          professional discipline and analytical thinking."
        imageSrc="/images/Edu.png"
        imageAlt="Biniyam Alemayehu Education"
        isReversed
      />

      {/* Section 3: Default (Text Left, Image Right) */}
      <AboutSection
        greeting="My Work"
        name="Professional Experience"
        description="Currently, I work as a Software Developer at Hawi Software Solution, 
          where I contribute to the development of enterprise-level web and mobile applications.
          My responsibilities include:
          - Designing scalable backend APIs and full-stack systems
          - Optimizing databases and application performance
          - Building mobile and web interfaces with modern frameworks
          - Supporting production deployments using containerized environments
          - Collaborating across multidisciplinary teams in agile workflows
          Some measurable achievements include improving operational efficiency in transportation
          systems, enhancing backend response times through query optimization, and developing 
          business applications that streamline client workflows and communication.
          Through these experiences, I have developed a strong understanding of real-world 
          software requirements, stakeholder collaboration, and production system reliability."
        imageSrc="/images/Vision.png"
        imageAlt="Biniyam Alemayehu Vision"
      />

      {/* Section 4: Reversed (Image Left, Text Right) */}
      <AboutSection
        greeting="Skill"
        name="Technical Expertise"
        description="My technical skill set covers the full application lifecycle — from 
        system architecture and backend logic to responsive user interface implementation. 
        I focus on building scalable, maintainable applications with clean design, efficient 
        performance, and strong usability.
          Core Technologies
          Backend:
          Laravel, Spring Boot, REST API design and development
          Frontend:
          React (TypeScript), HTML5, CSS3, Bootstrap, responsive UI design, modern frontend architecture
          Mobile Development:
          Flutter
          Desktop Applications:
          JavaFX
          Programming Languages
          Java, PHP, TypeScript, Dart, C++
          Databases & Infrastructure
          MySQL, SQL Server, MongoDB, Docker containerization, Git version control
          Professional Strengths
          Performance optimization and scalable system architecture
          Authentication systems and secure application design
          Database modeling, indexing, and query optimization
          Clean, maintainable code and technical documentation
          Team collaboration, leadership, and agile workflow experience"
        imageSrc="/images/vision.png"
        imageAlt="Biniyam Alemayehu Vision"
        isReversed
      />

      {/* Section 5: Default (Text Left, Image Right) */}
      <AboutSection
        greeting="My Approach"
        name="Quality First"
        description="My development philosophy centers on quality, clarity, and long-term 
          maintainability. I believe strong software is built through thoughtful architecture,
          disciplined coding standards, and continuous refinement.
          Key principles I follow:
          Writing clean, structured, and maintainable code
          Prioritizing performance and scalability early
          Designing with the user experience in mind
          Maintaining thorough documentation
          Encouraging collaboration and knowledge sharing
          This approach allows me to deliver solutions that are reliable, adaptable, and 
          professionally sustainable."
        imageSrc="/images/bini.png"
        imageAlt="Biniyam Alemayehu Approach"
      />

      {/* Section 6: Reversed (Image Left, Text Right) */}
      <AboutSection
        greeting="My Vision"
        name="Innovative Solutions"
        description="I aim to contribute to innovative technology solutions that empower 
          businesses, educational platforms, and digital communities. I am particularly 
          interested in developing systems that:
          Improve operational efficiency
          Enhance access to education and digital tools
          Support emerging technology ecosystems
          Solve practical problems with scalable solutions
          Continuous learning and adaptability remain central to my growth as a developer, 
          ensuring I stay aligned with evolving industry standards and technological
          advancements."
        imageSrc="/images/vision.png"
        imageAlt="Biniyam Alemayehu Collaboration"
        isReversed
      />

      {/* Section 7: Default (Text Left, Image Right) */}
      <AboutSection
        greeting="Collaborative"
        name="Team Player"
        description="I excel in collaborative environments where clear communication and 
          teamwork drive successful outcomes. Through close coordination with designers,
          stakeholders, and development teams, I help ensure that solutions remain aligned
          with business goals while maintaining strong technical and user-experience standards."
        imageSrc="/images/binu1.png"
        imageAlt="Biniyam Alemayehu"
      />

      {/* Section 8: Reversed (Image Left, Text Right) */}
      <AboutSection
        greeting="Goals"
        name="Future Direction"
        description="Looking ahead, my career objective is to grow into a senior engineering
          role where I can contribute not only as a developer but also as a technical leader 
          and solution architect.
          My long-term goals include:
          Designing large-scale, high-impact software systems
          Leading development teams and mentoring junior engineers
          Contributing to innovative digital infrastructure projects
          Expanding expertise in cloud architecture and distributed systems
          Building technology solutions that create positive social and economic impact
          I am committed to continuous professional development, staying updated with modern frameworks,
          software architecture trends, and emerging technologies."
        imageSrc="/images/Edu.png"
        imageAlt="Biniyam Alemayehu Education"
        isReversed
      />


      {/* Section 9: Beyond Technology */}
      <section className="beyond-tech-section">
        <div className="beyond-tech-content">
          <h2 className="beyond-tech-title">Beyond Technology</h2>
          <div className="beyond-tech-paragraphs">
            <p>
              Outside of my professional work, I value community engagement, collaborative learning, and continuous self-improvement. I actively participate in technical discussions, contribute to student workshops when possible, and maintain a strong interest in initiatives that combine technology with positive social impact.
            </p>
            <p>
              Beyond technology, I enjoy playing football, which helps me stay active, build teamwork skills, and maintain balance in my daily life. Regular exercise and sports are an important part of my routine, helping me stay focused, energized, and mentally sharp.
            </p>
            <p>
              These experiences allow me to maintain a balanced perspective — combining technical excellence with human-centered problem solving while supporting both personal growth and professional productivity.
            </p>
          </div>
        </div>
      </section>

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

        .beyond-tech-section {
          padding: 8rem 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 10;
        }

        .beyond-tech-content {
          max-width: 1000px;
          width: 100%;
        }

        .beyond-tech-title {
          font-family: 'Ethnocentric', sans-serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          color: var(--color-primary);
          margin-bottom: 4rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-align: center;
          width: 100%;
        }

        .beyond-tech-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .beyond-tech-paragraphs p {
          font-family: 'Gilroy-LightItalic', sans-serif;
          font-size: 1.25rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          text-align: left;
        }

        @media (max-width: 1024px) {
          .beyond-tech-section {
            padding: 6rem 2rem;
          }
          .beyond-tech-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 640px) {
          .beyond-tech-section {
            padding: 4rem 1.5rem;
          }
          .beyond-tech-title {
            font-size: 2rem;
            margin-bottom: 2.5rem;
          }
          .beyond-tech-paragraphs p {
            font-size: 1.1rem;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
