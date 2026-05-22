"use client";

import React, { useEffect, useRef, CSSProperties } from 'react';

type AnimationType = 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in' | 'scale-up';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // ms
  className?: string;
  style?: CSSProperties;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
  style = {},
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('sr-visible');
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={`sr-base sr-${animation} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
