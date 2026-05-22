"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { t, lang, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = pathname === '/';
  const isStickyHeader = scrolled || !isHomePage;

  const isActive = (path: string) => pathname === path ? 'active' : '';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40 || !isHomePage);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHomePage]);

  return (
    <nav className={`navbar ${isStickyHeader ? 'scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="logo">
          <img 
            src={lang === 'ar' ? '/logo/logo.png' : '/logo/Logo_English.png'} 
            alt="DOSUR" 
            style={{ 
              height: '56px', 
              width: 'auto', 
              display: 'block',
              objectFit: 'contain'
            }} 
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="nav-links">
          <li><Link href="/" className={isActive('/')}>{t.home}</Link></li>
          <li><Link href="/about" className={isActive('/about')}>{t.about}</Link></li>
          <li><Link href="/services" className={isActive('/services')}>{t.services}</Link></li>
          <li><Link href="/projects" className={isActive('/projects')}>{t.projects}</Link></li>
          <li><Link href="/faq" className={isActive('/faq')}>{t.faq}</Link></li>
          <li><Link href="/contact" className={isActive('/contact')}>{t.contact}</Link></li>
        </ul>

        <div className="header-actions" style={{ display: 'flex', alignItems: 'center' }}>
          {/* Language Switch Dropdown */}
          <div className="desktop-only" style={{ position: 'relative' }}>
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)} 
              style={{ background: 'transparent', border: 'none', color: isStickyHeader ? 'var(--text-main)' : '#ffffff', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'inherit' }}
            >
              {lang === 'ar' ? 'العربية' : 'English'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s', transform: langDropdownOpen ? 'rotate(180deg)' : 'none' }}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {langDropdownOpen && (
              <div style={{ position: 'absolute', top: '100%', right: lang === 'en' ? 0 : 'auto', left: lang === 'ar' ? 0 : 'auto', marginTop: '1rem', background: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', padding: '0.5rem', minWidth: '120px', zIndex: 100 }}>
                <button 
                  onClick={() => {
                    toggleLanguage();
                    setLangDropdownOpen(false);
                  }}
                  style={{ width: '100%', textAlign: lang === 'ar' ? 'right' : 'left', background: 'transparent', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer', fontSize: '1rem', fontWeight: '500', color: 'var(--text-main)', borderRadius: '4px', fontFamily: 'inherit' }}
                >
                  {t.language}
                </button>
              </div>
            )}
          </div>

          {/* Get in Touch Button */}
          <Link
            href="/contact"
            className="btn btn-outline header-cta"
            style={{
              borderRadius: '50px',
              color: isStickyHeader ? 'var(--primary-color)' : '#ffffff',
              borderColor: isStickyHeader ? 'var(--primary-color)' : '#ffffff',
            }}
          >
            {lang === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
          </Link>

          {/* Hamburger button — mobile only */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: '22px', height: '2px', background: isStickyHeader ? 'var(--text-main)' : '#ffffff', borderRadius: '2px', transition: 'all 0.3s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: isStickyHeader ? 'var(--text-main)' : '#ffffff', borderRadius: '2px', margin: '5px 0', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: isStickyHeader ? 'var(--text-main)' : '#ffffff', borderRadius: '2px', transition: 'all 0.3s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      <div className={`mobile-backdrop${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div style={{ padding: '0 1.5rem', display: 'flex', justifyContent: lang === 'ar' ? 'flex-start' : 'flex-end', marginBottom: '1rem' }}>
          <button 
            onClick={() => setMenuOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text-main)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <ul>
          <li><Link href="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>{t.home}</Link></li>
          <li><Link href="/about" className={isActive('/about')} onClick={() => setMenuOpen(false)}>{t.about}</Link></li>
          <li><Link href="/services" className={isActive('/services')} onClick={() => setMenuOpen(false)}>{t.services}</Link></li>
          <li><Link href="/projects" className={isActive('/projects')} onClick={() => setMenuOpen(false)}>{t.projects}</Link></li>
          <li><Link href="/faq" className={isActive('/faq')} onClick={() => setMenuOpen(false)}>{t.faq}</Link></li>
          <li><Link href="/contact" className={isActive('/contact')} onClick={() => setMenuOpen(false)}>{t.contact}</Link></li>
          <li style={{ borderBottom: '1px solid rgba(146, 194, 110, 0.1)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.9rem 0' }}>
              <button onClick={() => setLangDropdownOpen(!langDropdownOpen)} style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', textAlign: lang === 'ar' ? 'right' : 'left', fontFamily: 'inherit' }}>
                {lang === 'ar' ? 'العربية' : 'English'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s', transform: langDropdownOpen ? 'rotate(180deg)' : 'none' }}>
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              {langDropdownOpen && (
                <button 
                  onClick={() => { toggleLanguage(); setMenuOpen(false); setLangDropdownOpen(false); }} 
                  style={{ background: 'rgba(146, 194, 110, 0.1)', border: 'none', color: 'var(--text-main)', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', padding: '0.8rem 1rem', borderRadius: '8px', textAlign: lang === 'ar' ? 'right' : 'left', marginTop: '0.5rem', fontFamily: 'inherit' }}
                >
                  {t.language}
                </button>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
