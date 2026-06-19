'use client';
import { FormEvent, useState } from 'react';

const TO = 'alekhyabulusu09@yahoo.com';
// Free Web3Forms access key tied to alekhyabulusu09@yahoo.com.
// Get one at https://web3forms.com (enter that email) and paste it here to enable
// direct in-page sending. Until then, the form falls back to a pre-filled email.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = ((data.get('name') as string) || '').trim();
    const subject = ((data.get('subject') as string) || '').trim();

    if (!WEB3FORMS_KEY) {
      const email = ((data.get('email') as string) || '').trim();
      const message = ((data.get('message') as string) || '').trim();
      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      window.location.href = `mailto:${TO}?subject=${encodeURIComponent(
        subject || `Portfolio message from ${name || 'a visitor'}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      form.reset();
      setTimeout(() => setStatus('idle'), 6000);
      return;
    }

    setStatus('sending');
    data.append('access_key', WEB3FORMS_KEY);
    data.append('subject', subject || `Portfolio message from ${name || 'a visitor'}`);
    data.append('from_name', "Alekhya's Portfolio");
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 6000);
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
          Thanks! Your message is on its way to Alekhya.
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
