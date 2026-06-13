'use client';
import { useEffect } from 'react';

export default function InteractionEffects() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    };
    window.addEventListener('mousemove', onMove);

    const cards = reduce
      ? []
      : Array.from(document.querySelectorAll<HTMLElement>('.project-card'));
    const cleanups: Array<() => void> = [];
    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-3px)`;
      };
      const leave = () => {
        card.style.transform = '';
      };
      card.addEventListener('mousemove', move);
      card.addEventListener('mouseleave', leave);
      cleanups.push(() => {
        card.removeEventListener('mousemove', move);
        card.removeEventListener('mouseleave', leave);
      });
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      glow.remove();
      cleanups.forEach((c) => c());
    };
  }, []);

  return null;
}
