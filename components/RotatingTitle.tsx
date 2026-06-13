'use client';
import { useEffect, useState } from 'react';

export default function RotatingTitle({ titles }: { titles: string[] }) {
  const [text, setText] = useState(titles[0]);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduce(true);
      return;
    }
    let i = 0;
    let pos = titles[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;
    const loop = () => {
      if (deleting) {
        pos--;
        setText(titles[i].slice(0, pos));
        if (pos === 0) {
          deleting = false;
          i = (i + 1) % titles.length;
        }
        timer = setTimeout(loop, 45);
      } else {
        pos++;
        setText(titles[i].slice(0, pos));
        if (pos === titles[i].length) {
          deleting = true;
          timer = setTimeout(loop, 1700);
          return;
        }
        timer = setTimeout(loop, 80);
      }
    };
    timer = setTimeout(loop, 1700);
    return () => clearTimeout(timer);
  }, [titles]);

  return (
    <span className="rotating-title">
      <span>{reduce ? titles.join(' · ') : text}</span>
      {!reduce && <span className="type-caret" aria-hidden="true">▍</span>}
    </span>
  );
}
