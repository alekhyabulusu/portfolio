'use client';
import { FormEvent } from 'react';

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thanks for reaching out! Connect a backend to enable messaging.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" className="form-input" placeholder="Name" required />
        <input type="email" className="form-input" placeholder="Email" required />
      </div>
      <div className="form-group">
        <input type="text" className="form-input" placeholder="Subject" />
      </div>
      <div className="form-group">
        <textarea className="form-input" placeholder="Message" required />
      </div>
      <button type="submit" className="form-submit">
        Send Message
      </button>
    </form>
  );
}
