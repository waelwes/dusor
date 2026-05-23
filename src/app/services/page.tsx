"use client";

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

export default function Services() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative', minHeight: '50vh', padding: '140px 0 80px 0', display: 'flex', alignItems: 'center', color: '#ffffff', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <img src="/services_hero_bg.png" alt="Services Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 100%)' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="services-hero-text" style={{ textAlign: lang === 'ar' ? 'right' : 'left', width: '100%' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#ffffff', fontWeight: '800' }}>
              {t.servicesTitle}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', maxWidth: '700px' }}>
              {t.aboutScopeDesc.split('،')[0]}
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="section" style={{ background: '#ffffff', padding: '6rem 0 4rem 0' }}>
        <div style={{ width: '100%' }}>
          <ScrollReveal animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '6rem', padding: '0 2rem' }}>
            <h2 style={{ color: '#000000', fontSize: '2.8rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '0' }}>{t.servicesTitle}</h2>
            <div style={{ width: '80px', height: '4px', background: '#92c26e', borderRadius: '2px', margin: '1.5rem auto 1.5rem auto' }} />
          </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', paddingBottom: '4rem', width: '96%', maxWidth: '1800px', margin: '0 auto' }}>
            {t.servicesItems.map((item, idx) => {
              const serviceImages = [
                '/Our Services/water_resources_management.png',
                '/Our Services/smart_agriculture.png',
                '/Our Services/geospatial_survey.png',
                '/Our Services/project_development_saudi.png',
                '/Our Services/supply_chains.png',
              ];

              const isEven = idx % 2 === 0;

              return (
                <ScrollReveal key={idx} animation={isEven ? 'fade-right' : 'fade-left'}>
                <div className={`service-zigzag-card ${isEven ? 'even' : 'odd'}`}>
                  <div className="service-zigzag-img">
                    <img
                      src={serviceImages[idx]}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div className="service-zigzag-content">
                    <span style={{ color: '#c29d59', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                      {lang === 'ar' ? 'خدمة رئيسية' : 'OUR SERVICE'}
                    </span>
                    <h3 style={{ color: '#000000', fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.2rem', lineHeight: '1.3', textTransform: 'uppercase' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', margin: '0 0 2rem 0' }}>
                      {item.desc}
                    </p>
                    <div>
                      <Link href="/projects" style={{ display: 'inline-block', background: '#1a1a1a', color: '#ffffff', border: 'none', padding: '0.8rem 2rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px', cursor: 'pointer', textTransform: 'uppercase', textDecoration: 'none' }}>
                        {lang === 'ar' ? 'اقرأ المزيد' : 'LEARN MORE'}
                      </Link>
                    </div>
                  </div>
                </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
