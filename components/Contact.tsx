import FadeIn from './FadeIn';
import SectionHeader from './SectionHeader';
import ContactForm from './ContactForm';
import { Mail, Phone, Linkedin, Github } from './icons';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <SectionHeader index="06" label="Connect" title="Get in Touch" />
        <div className="contact-grid">
          <FadeIn className="contact-info">
            <h3>Let&apos;s work together</h3>
            <p>
              I&apos;m always interested in new opportunities, collaborations, or chatting about ML
              and data science.
            </p>
            <div className="contact-list">
              <a href="mailto:alekhyabulusu09@yahoo.com" className="contact-item">
                <span className="contact-icon"><Mail size={18} /></span>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">alekhyabulusu09@yahoo.com</p>
                </div>
              </a>
              <a href="tel:+16172384173" className="contact-item">
                <span className="contact-icon"><Phone size={18} /></span>
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">(617) 238-4173</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/alekhyabulusu"
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon"><Linkedin size={18} /></span>
                <div>
                  <p className="contact-label">LinkedIn</p>
                  <p className="contact-value">linkedin.com/in/alekhyabulusu</p>
                </div>
              </a>
              <a
                href="https://github.com/alekhyabulusu"
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon"><Github size={18} /></span>
                <div>
                  <p className="contact-label">GitHub</p>
                  <p className="contact-value">github.com/alekhyabulusu</p>
                </div>
              </a>
            </div>
          </FadeIn>
          <FadeIn className="contact-form">
            <p className="form-title">Send a message</p>
            <p className="form-subtitle">I&apos;ll get back to you soon</p>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
