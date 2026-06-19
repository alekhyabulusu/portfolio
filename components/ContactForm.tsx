'use client';
import { FormEvent, useState } from 'react';

const TO = 'alekhyabulusu09@yahoo.com';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = ((data.get('name') as string) || '').trim();
    const email = ((data.get('email') as string) || '').trim();
    const subject = ((data.get('subject') as string) || '').trim();
    const message = ((data.get('message') as string) || '').trim();

    const mailSubject = subject || `Portfolio message from ${name || 'a visitor'}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text" name="name" className="form-input" placeholder="Name" required />
        <input type="email" name="email" className="form-input" placeholder="Email" required />
      </div>
      <div className="form-group">
        <input type="text" name="subject" className="form-input" placeholder="Subject" />
      </div>
      <div className="form-group">
        <textarea name="message" className="form-input" placeholder="Message" required />
      </div>
      <button type="submit" className="form-submit">
        Send Message
      </button>
      {sent && (
        <p className="form-note" role="status">
          Opening your email app — your message is addressed to {TO}.
        </p>
      )}
    </form>
  );
}
