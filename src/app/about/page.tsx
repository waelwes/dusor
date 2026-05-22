"use client";

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { VisionIcon, MissionIcon, ValuesIcon, GoalsIcon, ScopeIcon } from '@/components/AboutIcons';
import ScrollReveal from '@/components/ScrollReveal';

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

      {/* About Us Overview */}
      <section className="section" style={{ background: '#ffffff', padding: '5rem 0 4rem 0' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ display: 'inline-block', background: '#92c26e', color: '#000000', padding: '0.45rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.5px', marginBottom: '1rem' }}>
              {lang === 'ar' ? 'نبذة سريعة' : 'AT A GLANCE'}
            </span>
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.75rem', lineHeight: '1.2' }}>
              {lang === 'ar' ? 'أهم ما يميز دوسور' : 'What Defines Dosur'}
            </h2>
            <p style={{ maxWidth: '760px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              {lang === 'ar'
                ? 'هذه هي النقاط الأكثر أهمية عن دوسور: من نحن، ماذا نقدم، ولماذا نُعد شريكاً موثوقاً للمشاريع التقنية والزراعية والمائية.'
                : 'These are the key points about Dosur: who we are, what we deliver, and why we are a trusted partner for technical, agricultural, and water projects.'}
            </p>
          </div>
          </ScrollReveal>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            <ScrollReveal animation="fade-up" delay={0}>
            <div style={{ background: '#f8faf6', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(146, 194, 110, 0.18)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', height: '100%' }}>
              <div style={{ background: '#92c26e', color: '#000000', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', fontSize: '1.6rem' }}>
                <VisionIcon />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', fontWeight: '800', color: '#1a4a1a' }}>
                {lang === 'ar' ? 'من نحن' : 'Who We Are'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                {lang === 'ar'
                  ? 'شركة استشارية تقنية سعودية تركز على حلول المياه والزراعة الذكية والمسح الجيومكاني ودعم المشاريع ذات الأثر المستدام.'
                  : 'A Saudi technical consulting company focused on water solutions, smart agriculture, geospatial surveying, and sustainable project support.'}
              </p>
            </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
            <div style={{ background: '#f8faf6', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(146, 194, 110, 0.18)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', height: '100%' }}>
              <div style={{ background: '#92c26e', color: '#000000', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', fontSize: '1.6rem' }}>
                <MissionIcon />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', fontWeight: '800', color: '#1a4a1a' }}>
                {lang === 'ar' ? 'ماذا نقدم' : 'What We Deliver'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                {lang === 'ar'
                  ? 'نقدم دراسات وحلولاً تنفيذية واستشارية تشمل إدارة الموارد المائية، الزراعة الذكية، النمذجة، الاستشعار، والتخطيط للمشاريع.'
                  : 'We provide studies, consulting, and execution support across water management, smart agriculture, modeling, sensing, and project planning.'}
              </p>
            </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
            <div style={{ background: '#f8faf6', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(146, 194, 110, 0.18)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', height: '100%' }}>
              <div style={{ background: '#92c26e', color: '#000000', width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', fontSize: '1.6rem' }}>
                <GoalsIcon />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', fontWeight: '800', color: '#1a4a1a' }}>
                {lang === 'ar' ? 'لماذا نحن' : 'Why Us'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
                {lang === 'ar'
                  ? 'لأننا نجمع بين الخبرة الوطنية، التقنيات الحديثة، والتركيز على الاستدامة لتحقيق نتائج عملية وواضحة.'
                  : 'Because we combine national expertise, modern technologies, and sustainability focus to deliver practical, measurable results.'}
              </p>
            </div>
            </ScrollReveal>
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

      {/* Why Choose Dusor? Section */}
      <section className="section" style={{ background: '#000000', borderTop: '1px solid rgba(255, 255, 255, 0.1)', color: '#ffffff' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '0' }}>
              {lang === 'ar' ? 'لماذا دوسور للاستشارات التقنية؟' : 'Why Choose Dusor Consulting?'}
            </h2>
            <div style={{ width: '80px', height: '4px', background: '#92c26e', borderRadius: '2px', margin: '1rem auto 1.5rem auto' }} />
          </div>
          </ScrollReveal>

          <div className="grid-4">
            <ScrollReveal animation="fade-up" delay={0}>
            <div style={{ display: 'flex', gap: '1.2rem', height: '100%', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(146, 194, 110, 0.2)', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}>
              <div style={{ background: '#92c26e', color: '#000000', padding: '0.8rem', borderRadius: '12px', display: 'flex', flexShrink: 0, height: 'fit-content' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', fontWeight: '700', color: '#ffffff' }}>
                  {lang === 'ar' ? 'خبرة وطنية بمعايير عالمية' : 'Local Expertise, Global Standards'}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {lang === 'ar'
                    ? 'مستشارون وطنيون مؤهلون بأحدث المعارف الدولية.'
                    : 'Local consultants qualified with cutting-edge international standards.'}
                </p>
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
            <div style={{ display: 'flex', gap: '1.2rem', height: '100%', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(146, 194, 110, 0.2)', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}>
              <div style={{ background: '#92c26e', color: '#000000', padding: '0.8rem', borderRadius: '12px', display: 'flex', flexShrink: 0, height: 'fit-content' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                  <path d="M12 6V18" />
                  <path d="M8 10C8 10 9.5 8.5 12 8.5C14.5 8.5 16 10 16 10" />
                  <path d="M8 14C8 14 9.5 12.5 12 12.5C14.5 12.5 16 14 16 14" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', fontWeight: '700', color: '#ffffff' }}>
                  {lang === 'ar' ? 'دعم مستهدفات رؤية 2030' : 'Supporting Vision 2030'}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {lang === 'ar'
                    ? 'حلول مبتكرة لتعزيز الاستدامة البيئية والأمن المائي.'
                    : 'Innovative solutions focused on sustainability and environmental growth.'}
                </p>
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
            <div style={{ display: 'flex', gap: '1.2rem', height: '100%', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(146, 194, 110, 0.2)', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}>
              <div style={{ background: '#92c26e', color: '#000000', padding: '0.8rem', borderRadius: '12px', display: 'flex', flexShrink: 0, height: 'fit-content' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  <circle cx="12" cy="12" r="4"/>
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', fontWeight: '700', color: '#ffffff' }}>
                  {lang === 'ar' ? 'ذكاء اصطناعي ونمذجة ذكية' : 'AI-Powered Solutions'}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {lang === 'ar'
                    ? 'نمذجة رياضية متقدمة لدعم اتخاذ القرارات الصحيحة.'
                    : 'Advanced numerical modeling for high-precision decision support.'}
                </p>
              </div>
            </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
            <div style={{ display: 'flex', gap: '1.2rem', height: '100%', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(146, 194, 110, 0.2)', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}>
              <div style={{ background: '#92c26e', color: '#000000', padding: '0.8rem', borderRadius: '12px', display: 'flex', flexShrink: 0, height: 'fit-content' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', fontWeight: '700', color: '#ffffff' }}>
                  {lang === 'ar' ? 'دقة متناهية في الاستشعار' : 'High-Precision Sensing'}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {lang === 'ar'
                    ? 'أدوات مسح جيومكاني واستشعار لنظم خرائط موثوقة.'
                    : 'State-of-the-art geospatial mapping and spatial data.'}
                </p>
              </div>
            </div>
            </ScrollReveal>
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
