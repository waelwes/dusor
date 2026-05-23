"use client";

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="footer" style={{ textAlign: 'start', background: '#000000', color: '#ffffff', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem' }}>
      <div className="container grid-4" style={{ paddingBottom: '3rem', gap: '2rem' }}>
        {/* Column 1: Newsletter */}
        <div>
          <h4 style={{ color: '#92c26e', marginBottom: '1.2rem', fontSize: '1.15rem', fontWeight: '800' }}>
            {lang === 'ar' ? 'النشرة البريدية' : 'Newsletter'}
          </h4>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1rem', lineHeight: '1.6' }}>
            {lang === 'ar' ? 'اشترك في نشرتنا البريدية للحصول على أحدث الأخبار والمقالات.' : 'Subscribe to our newsletter to get the latest news and updates.'}
          </p>
          <form onSubmit={(e) => { e.preventDefault(); alert(lang === 'ar' ? 'تم الاشتراك بنجاح!' : 'Subscribed successfully!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <input 
              type="email" 
              placeholder={lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
              required
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '12px',
                border: '1px solid rgba(146, 194, 110, 0.4)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                outline: 'none',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 3px rgba(146, 194, 110, 0.2)')}
              onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
            />
            <button 
              type="submit" 
              style={{
                width: '100%',
                padding: '0.8rem 1.2rem',
                borderRadius: '12px',
                border: 'none',
                background: '#92c26e',
                color: '#000000',
                fontWeight: '700',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background 0.3s ease, transform 0.2s ease'
              }}
              onMouseEnter={(e) => { (e.currentTarget.style.background = '#ffffff'); (e.currentTarget.style.transform = 'translateY(-2px)'); }}
              onMouseLeave={(e) => { (e.currentTarget.style.background = '#92c26e'); (e.currentTarget.style.transform = 'translateY(0)'); }}
            >
              {lang === 'ar' ? 'اشتراك' : 'Subscribe'}
            </button>
          </form>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h4 style={{ color: '#92c26e', marginBottom: '1.2rem', fontSize: '1.15rem', fontWeight: '800' }}>
            {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0 }}>
            <li><Link href="/" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{t.home}</Link></li>
            <li><Link href="/about" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{t.about}</Link></li>
            <li><Link href="/services" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{t.services}</Link></li>
            <li><Link href="/projects" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{t.projects}</Link></li>
            <li><Link href="/contact" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{t.contact}</Link></li>
            <li><Link href="/faq" style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{t.faq}</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 style={{ color: '#92c26e', marginBottom: '1.2rem', fontSize: '1.15rem', fontWeight: '800' }}>
            {lang === 'ar' ? 'معلومات التواصل' : 'Contact Info'}
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: 0, color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
            <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
              <div style={{ color: '#92c26e', marginTop: '0.1rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span>{lang === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</span>
            </li>
            <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              <div style={{ color: '#92c26e' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span dir="ltr">info@dosur.sa</span>
            </li>
            <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              <div style={{ color: '#92c26e' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span dir="ltr">+966 11 000 0000</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Brand Info & Socials */}
        <div>
          <h4 style={{ color: '#92c26e', marginBottom: '1.2rem', fontSize: '1.15rem', fontWeight: '800' }}>
            {lang === 'ar' ? 'عن الشركة' : 'About Us'}
          </h4>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.7)' }}>{t.footerText}</p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.2rem' }}>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn" style={{ color: '#ffffff' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            {/* Twitter / X */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter" style={{ color: '#ffffff' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram" style={{ color: '#ffffff' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', paddingBottom: '2rem', textAlign: 'center' }}>
        <div className="container">
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
            &copy; {new Date().getFullYear()} {t.title}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
