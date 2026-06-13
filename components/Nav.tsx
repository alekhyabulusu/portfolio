'use client';
import { useState } from 'react';

const navSections = ['about', 'skills', 'projects', 'experience', 'education', 'contact'] as const;

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <div className="container nav-inner">
        <a href="#" className="logo" onClick={(e) => handleNavClick(e, 'body')}>
          <span className="logo-mark">AB</span>
          Alekhya Bulusu
        </a>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          {navSections.map((section) => (
            <li key={section}>
              <a href={`#${section}`} onClick={(e) => handleNavClick(e, `#${section}`)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <button className="mobile-menu" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
