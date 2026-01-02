"use client";

import { Navbar } from "@/components/Navbar";
import {
  AnimatedSection,
  AnimatedCard,
  FloatingGradients,
  Sparkles,
  TiltCard,
  MagneticButton,
  FeatureCard,
} from "@/components/Animations";
import { portfolioConfig } from "@/lib/portfolio-config";

export default function Home() {
  const { hero, about, skills, projects, experience, contact, social } =
    portfolioConfig;

  return (
    <>
      <Sparkles />
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <FloatingGradients />
        <div className="container hero-content">
          <h1>{hero.headline}</h1>
          <div className="hero-badge">{hero.badge}</div>
          <p>{hero.description}</p>
          <div className="hero-buttons">
            {hero.ctaButtons.map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                className={`btn ${
                  btn.variant === "secondary" ? "btn-secondary" : "btn-primary"
                }`}
              >
                {btn.text}
              </a>
            ))}
          </div>
          <div className="hero-stats">
            {hero.stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection className="about-section" id="about">
        <FloatingGradients />
        <div className="container">
          <div className="section-header">
            <span className="section-tag animate-tag">{about.title}</span>
            <h2>👨‍💻 Who I Am</h2>
            <p className="section-subtitle">{about.description}</p>
          </div>
          <AnimatedCard className="about-content">
            <p>{about.content}</p>
          </AnimatedCard>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection className="skills-section" id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-tag animate-tag">My Stack</span>
            <h2>🛠️ {skills.title}</h2>
          </div>
          <div className="skills-grid">
            {skills.categories.map((category, idx) => (
              <TiltCard key={idx} className="skill-card-wrapper">
                <AnimatedCard delay={idx * 100} className="skill-card">
                  <div className="skill-category">{category.name}</div>
                  <div className="skill-items">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </AnimatedCard>
              </TiltCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection className="projects-section" id="projects">
        <FloatingGradients />
        <div className="container">
          <div className="section-header">
            <span className="section-tag animate-tag">Portfolio</span>
            <h2>🚀 {projects.title}</h2>
          </div>
          <div className="projects-grid">
            {projects.items.map((project, idx) => (
              <FeatureCard key={project.id} className="project-card-wrapper">
                <div className="project-card">
                  <div className="project-image">{project.emoji}</div>
                  <div className="project-content">
                    <div className="project-shine"></div>
                    <div className="project-background">
                      <div className="project-tiles">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((tile) => (
                          <div
                            key={tile}
                            className={`project-tile tile-${tile}`}
                          ></div>
                        ))}
                      </div>
                      <div className="project-lines">
                        <div className="project-line line-1"></div>
                        <div className="project-line line-2"></div>
                        <div className="project-line line-3"></div>
                      </div>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.links.map((link, i) => (
                        <a key={i} href={link.href} className="project-link">
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection className="experience-section" id="experience">
        <div className="container">
          <div className="section-header">
            <span className="section-tag animate-tag">Career</span>
            <h2>💼 {experience.title}</h2>
          </div>
          <div className="experience-timeline">
            {experience.items.map((item, idx) => (
              <AnimatedCard
                key={item.id}
                delay={idx * 100}
                className="experience-item"
              >
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{item.title}</h3>
                    <span className="experience-company">{item.company}</span>
                  </div>
                  <span className="experience-date">{item.duration}</span>
                </div>
                <p className="experience-description">{item.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection className="contact-section" id="contact">
        <FloatingGradients />
        <div className="container">
          <div className="section-header">
            <span className="section-tag animate-tag">Get in Touch</span>
            <h2>💬 {contact.title}</h2>
            <p className="section-subtitle">{contact.description}</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
              marginBottom: "60px",
            }}
          >
            {contact.methods.map((method, i) => (
              <AnimatedCard key={i} delay={i * 100}>
                <div
                  style={{
                    padding: "24px",
                    background: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    borderRadius: "16px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "12px" }}>
                    {method.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      marginBottom: "8px",
                      fontWeight: "600",
                    }}
                  >
                    {method.type}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text-primary)",
                      fontWeight: "500",
                    }}
                  >
                    {method.value}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedCard className="contact-form">
            <form
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" required></textarea>
              </div>
              <MagneticButton>Send Message</MagneticButton>
            </form>
          </AnimatedCard>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>&lt;Dev /&gt;</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                Building beautiful web experiences with modern technology.
              </p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <div className="footer-links">
                <a href="#about" className="footer-link">
                  About
                </a>
                <a href="#projects" className="footer-link">
                  Projects
                </a>
                <a href="#experience" className="footer-link">
                  Experience
                </a>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h3>Connect</h3>
              <div className="footer-links">
                {social.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Chanchlesh Nagre. All rights reserved.</p>
            <div className="social-links">
              {social.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
