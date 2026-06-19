'use client';
import { useEffect, useRef, useState } from 'react';

type Item = { label: string; hint: string; action: () => void };

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const go = (id: string) => () => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  const link = (url: string) => () => {
    setOpen(false);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const items: Item[] = [
    { label: 'About', hint: 'Section', action: go('about') },
    { label: 'Skills', hint: 'Section', action: go('skills') },
    { label: 'Projects', hint: 'Section', action: go('projects') },
    { label: 'Experience & Education', hint: 'Section', action: go('experience') },
    { label: 'Certifications', hint: 'Section', action: go('certifications') },
    { label: 'Contact', hint: 'Section', action: go('contact') },
    {
      label: 'View Resume',
      hint: 'Open',
      action: link('https://drive.google.com/file/d/18UMVCoEegXAwAUT_pvYaYSPUksIq_m0W/view?usp=sharing'),
    },
    {
      label: 'Email Alekhya',
      hint: 'mailto',
      action: () => {
        setOpen(false);
        window.location.href = 'mailto:alekhyabulusu09@yahoo.com';
      },
    },
    { label: 'LinkedIn', hint: 'Open', action: link('https://linkedin.com/in/alekhyabulusu') },
    { label: 'GitHub', hint: 'Open', action: link('https://github.com/alekhyabulusu') },
  ];

  const filtered = items.filter((it) => it.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('open-cmdk', onOpen as EventListener);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-cmdk', onOpen as EventListener);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  if (!open) return null;

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      filtered[active]?.action();
    }
  };

  return (
    <div className="cmdk-overlay" onClick={() => setOpen(false)}>
      <div className="cmdk-panel" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="cmdk-input"
          placeholder="Jump to a section or action…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onInputKey}
        />
        <ul className="cmdk-list">
          {filtered.length === 0 && <li className="cmdk-empty">No matches</li>}
          {filtered.map((it, i) => (
            <li
              key={it.label}
              className={`cmdk-item${i === active ? ' active' : ''}`}
              onMouseEnter={() => setActive(i)}
              onClick={it.action}
            >
              <span>{it.label}</span>
              <span className="cmdk-hint">{it.hint}</span>
            </li>
          ))}
        </ul>
        <div className="cmdk-foot">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
