"use client";

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import ServiceIcon from '@/components/ServiceIcon';

export default function Services() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '50vh', padding: '140px 0 80px 0', display: 'flex', alignItems: 'center', background: '#000000', color: '#ffffff' }}>
        <div className="container">
          <div className="services-hero-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#ffffff', fontWeight: '800' }}>
              {t.servicesTitle}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
              {t.aboutScopeDesc.split('،')[0]}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section" style={{ background: '#f0f7ea', padding: '6rem 0' }}>
        <div className="container">
          <div className="grid-3">
            {t.servicesItems.map((item, idx) => (
              <div key={idx} style={{ 
                background: '#ffffff', 
                padding: '2.5rem', 
                borderRadius: '24px', 
                boxShadow: '0 15px 40px rgba(146, 194, 110, 0.08)',
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                border: '1px solid rgba(146, 194, 110, 0.15)'
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-8px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 50px rgba(146,194,110,0.15)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 15px 40px rgba(146,194,110,0.08)'; }}
              >
                <div style={{ 
                  background: '#92c26e', 
                  color: '#000000', 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '1.5rem',
                  fontSize: '1.8rem'
                }}>
                  <ServiceIcon index={idx} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '700', color: '#1a4a1a' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', margin: 0, flexGrow: 1 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
