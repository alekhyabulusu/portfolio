'use client';
import { useEffect, useRef, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export default function FadeIn({ children, className = '', style, id }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} id={id} className={`fade-in${className ? ' ' + className : ''}`} style={style}>
      {children}
    </div>
  );
}
