"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';

export default function FloatingContact() {
  const { lang } = useLanguage();

  return (
    <Link 
      href="/contact" 
      className="floating-contact"
      aria-label="Contact Us"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: lang === 'ar' ? 'auto' : '30px',
        left: lang === 'ar' ? '30px' : 'auto',
        zIndex: 999,
      }}
    >
      <div className="floating-contact-inner">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
    </Link>
  );
}
