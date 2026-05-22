"use client";

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { VisionIcon, MissionIcon, ValuesIcon, GoalsIcon, ScopeIcon } from '@/components/AboutIcons';

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '50vh', padding: '140px 0 80px 0', display: 'flex', alignItems: 'center', background: '#000000', color: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#ffffff', fontWeight: '800' }}>
              {t.about}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section" style={{ background: '#ffffff', padding: '6rem 0' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem' }}>
            {/* Vision Card */}
            <div style={{ background: '#f8faf6', padding: '3.5rem', borderRadius: '24px', border: '1px solid rgba(146, 194, 110, 0.2)', transition: 'transform 0.3s ease', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <div style={{ background: '#92c26e', color: '#000000', width: '70px', height: '70px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', fontSize: '2rem' }}>
                <VisionIcon />
              </div>
              <h2 className="text-gradient" style={{ fontSize: '2.2rem', marginBottom: '1.2rem', fontWeight: '800' }}>
                {t.aboutVisionTitle}
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                {t.aboutVisionDesc}
              </p>
            </div>
            
            {/* Mission Card */}
            <div style={{ background: '#f8faf6', padding: '3.5rem', borderRadius: '24px', border: '1px solid rgba(146, 194, 110, 0.2)', transition: 'transform 0.3s ease', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <div style={{ background: '#92c26e', color: '#000000', width: '70px', height: '70px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', fontSize: '2rem' }}>
                <MissionIcon />
              </div>
              <h2 className="text-gradient" style={{ fontSize: '2.2rem', marginBottom: '1.2rem', fontWeight: '800' }}>
                {t.aboutMissionTitle}
              </h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                {t.aboutMissionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Goals Section */}
      <section className="section" style={{ background: '#f0f7ea', padding: '6rem 0' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            {/* Values */}
            <div style={{ background: '#ffffff', padding: '3rem', borderRadius: '24px', boxShadow: '0 15px 40px rgba(146, 194, 110, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#92c26e', color: '#000000', width: '55px', height: '55px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  <ValuesIcon />
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: 0, fontWeight: '700', color: '#1a4a1a' }}>
                  {t.aboutValuesTitle}
                </h2>
              </div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                {t.aboutValuesDesc}
              </p>
            </div>
            
            {/* Goals */}
            <div style={{ background: '#ffffff', padding: '3rem', borderRadius: '24px', boxShadow: '0 15px 40px rgba(146, 194, 110, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#92c26e', color: '#000000', width: '55px', height: '55px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                  <GoalsIcon />
                </div>
                <h2 style={{ fontSize: '1.8rem', margin: 0, fontWeight: '700', color: '#1a4a1a' }}>
                  {t.aboutGoalsTitle}
                </h2>
              </div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.8', margin: 0 }}>
                {t.aboutGoalsDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="section" style={{ background: '#000000', padding: '6rem 0', color: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ background: '#92c26e', color: '#000000', width: '70px', height: '70px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '2rem' }}>
              <ScopeIcon />
            </div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '800', color: '#ffffff' }}>
              {t.aboutScopeTitle}
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', lineHeight: '2' }}>
              {t.aboutScopeDesc}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
