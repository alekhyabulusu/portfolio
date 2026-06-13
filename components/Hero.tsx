import Image from 'next/image';
import { Github, Linkedin, MailFilled, Instagram, Twitter, ChevronDown } from './icons';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot" />
            Open to opportunities
          </div>
          <h1>
            Hi, I&apos;m <span>Alekhya</span>
          </h1>
          <p className="hero-title">Data Scientist &amp; AI/ML Engineer</p>
          <p className="hero-bio">
            Masters student at Northeastern university with an interest in building data driven
            solutions specializing in RAG architectures and scalable ML pipelines. I develop ML
            solutions using LangChain, Gaussian Processes, and modern NLP frameworks.
          </p>
          <div className="hero-actions">
            <a
              href="https://drive.google.com/file/d/1OowbWFVx3RX6rOYKAsfGkOhLBuK4n6Gu/view"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in Touch
            </a>
          </div>
          <div className="social-row">
            <a
              href="https://github.com/alekhyabulusu"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/alekhyabulusu"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin />
            </a>
            <a href="mailto:alekhyabulusu09@yahoo.com" className="social-btn" aria-label="Email" title="Email">
              <MailFilled />
            </a>
            <a
              href="https://instagram.com/alekhyabulusu"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com/iamlazyidc"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
            >
              <Twitter />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar-wrapper">
            <div className="avatar-glow" />
            <div className="avatar">
              <div className="avatar-inner">
                <Image
                  src="https://uploads.onecompiler.io/4498vsmkh/44rq5azx7/IMG_3142.jpeg"
                  alt="Alekhya Bulusu"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-cue" aria-label="Scroll to About section">
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
