'use client';
import { useEffect, useState } from 'react';

const navSections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'] as const;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? scrollY / max : 0);

      // Active section: the last target whose top has passed below the navbar line.
      const line = 120;
      let current = '';
      for (const id of navSections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (href === 'body') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="container nav-inner">
        <a href="#" className="logo" onClick={(e) => handleNavClick(e, 'body')}>
          <span className="logo-mark">AB</span>
          Alekhya Bulusu
        </a>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          {navSections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={active === section ? 'active' : undefined}
                onClick={(e) => handleNavClick(e, `#${section}`)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="cmdk-trigger"
          onClick={() => window.dispatchEvent(new Event('open-cmdk'))}
          aria-label="Open command palette"
        >
          <span className="cmdk-key">⌘</span>K
        </button>
        <button className="mobile-menu" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
