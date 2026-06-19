'use client';
import { FormEvent, useState } from 'react';

const TO = 'alekhyabulusu09@yahoo.com';
// FormSubmit needs no API key or signup — it delivers submissions to this address.
// The very first submission triggers a one-time confirmation email to TO; click the
// link in it once and all future messages are delivered automatically.
const ENDPOINT = `https://formsubmit.co/ajax/${TO}`;

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = ((data.get('name') as string) || '').trim();
    const email = ((data.get('email') as string) || '').trim();
    const subject = ((data.get('subject') as string) || '').trim();
    const message = ((data.get('message') as string) || '').trim();

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: subject || `Portfolio message from ${name || 'a visitor'}`,
          _replyto: email,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const json = await res.json();
      if (json.success === 'true' || json.success === true) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 7000);
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
      <button type="submit" className="form-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
      {status === 'sent' && (
        <p className="form-note" role="status">
          Thanks! Your message has been sent to Alekhya.
        </p>
      )}
      {status === 'error' && (
        <p className="form-note form-note-error" role="status">
          Something went wrong — please email {TO} directly.
        </p>
      )}
    </form>
  );
}
