"use client";

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { VisionIcon, MissionIcon, ValuesIcon, GoalsIcon, ScopeIcon } from '@/components/AboutIcons';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* 1. Hero Section (Full Video Background) */}
      <section className="hero" style={{ position: 'relative', minHeight: '65vh', display: 'flex', alignItems: 'center', color: '#ffffff', overflow: 'hidden' }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%)', zIndex: 1 }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '140px 0 80px 0' }}>
          <div style={{ textAlign: lang === 'ar' ? 'right' : 'left', width: '100%' }}>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', color: '#ffffff', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase' }}>
              {lang === 'ar' ? 'عن دوسور' : 'ABOUT DUSOR'}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', maxWidth: '600px' }}>
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 2. About Us Text Section */}
      <section className="section" style={{ background: '#ffffff', padding: '6rem 0 3rem 0' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ color: '#000000', fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.75rem', lineHeight: '1.2', letterSpacing: '2px', textTransform: 'uppercase' }}>
                {lang === 'ar' ? 'أهم ما يميز دوسور' : 'ABOUT US'}
              </h2>
              <div style={{ width: '80px', height: '4px', background: '#92c26e', borderRadius: '2px', margin: '1rem auto 1.5rem auto' }} />
              <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', fontWeight: '300' }}>
                {lang === 'ar'
                  ? 'هذه هي النقاط الأكثر أهمية عن دوسور: من نحن، ماذا نقدم، ولماذا نُعد شريكاً موثوقاً للمشاريع التقنية والزراعية والمائية.'
                  : 'These are the key points about Dosur: who we are, what we deliver, and why we are a trusted partner for technical, agricultural, and water projects.'}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. What Defines Dosur (NEOM Style Leadership Cards) */}
      <section className="section" style={{ position: 'relative', padding: '6rem 0', color: '#ffffff', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <img src="/neom_landscape_1.png" alt="Landscape" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)' }} />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {/* Card 1 */}
            <ScrollReveal animation="fade-up" delay={0}>
              <div style={{ background: 'rgba(20, 20, 20, 0.65)', backdropFilter: 'blur(12px)', padding: '3.5rem 2.5rem', border: '1px solid rgba(255,255,255,0.05)', height: '100%', textAlign: 'center', transition: 'transform 0.3s' }}>
                <div style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '2.5rem', display: 'flex', justifyContent: 'center' }}>
                  <VisionIcon />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '800', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {lang === 'ar' ? 'من نحن' : 'Our Name'}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.8', margin: 0, fontWeight: '300' }}>
                  {lang === 'ar'
                    ? 'شركة استشارية تقنية سعودية تركز على حلول المياه والزراعة الذكية والمسح الجيومكاني ودعم المشاريع ذات الأثر المستدام.'
                    : 'A Saudi technical consulting company focused on water solutions, smart agriculture, geospatial surveying, and sustainable project support.'}
                </p>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div style={{ background: 'rgba(20, 20, 20, 0.65)', backdropFilter: 'blur(12px)', padding: '3.5rem 2.5rem', border: '1px solid rgba(255,255,255,0.05)', height: '100%', textAlign: 'center', transition: 'transform 0.3s' }}>
                <div style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '2.5rem', display: 'flex', justifyContent: 'center' }}>
                  <MissionIcon />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '800', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {lang === 'ar' ? 'ماذا نقدم' : 'Our Leadership'}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.8', margin: 0, fontWeight: '300' }}>
                  {lang === 'ar'
                    ? 'نقدم دراسات وحلولاً تنفيذية واستشارية تشمل إدارة الموارد المائية، الزراعة الذكية، النمذجة، الاستشعار، والتخطيط للمشاريع.'
                    : 'We provide studies, consulting, and execution support across water management, smart agriculture, modeling, sensing, and project planning.'}
                </p>
              </div>
            </ScrollReveal>

            {/* Card 3 */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div style={{ background: 'rgba(20, 20, 20, 0.65)', backdropFilter: 'blur(12px)', padding: '3.5rem 2.5rem', border: '1px solid rgba(255,255,255,0.05)', height: '100%', textAlign: 'center', transition: 'transform 0.3s' }}>
                <div style={{ color: '#ffffff', marginBottom: '1.5rem', fontSize: '2.5rem', display: 'flex', justifyContent: 'center' }}>
                  <ValuesIcon />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '800', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {lang === 'ar' ? 'قيمنا' : 'Our Values'}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.8', margin: 0, fontWeight: '300' }}>
                  {lang === 'ar'
                    ? 'نجمع بين الخبرة الوطنية، التقنيات الحديثة، والتركيز على الاستدامة لتحقيق نتائج عملية وواضحة.'
                    : 'We combine national expertise, modern technologies, and sustainability focus to deliver practical, measurable results.'}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission (ZigZag Layout) */}
      <section style={{ background: '#ffffff', padding: '8rem 0' }}>
        <div className="container">
          
          {/* Vision (Text Left, Image Right) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginBottom: '8rem' }}>
            <div style={{ flex: '1 1 40%', paddingRight: lang === 'ar' ? '0' : '5rem', paddingLeft: lang === 'ar' ? '5rem' : '0', minWidth: '300px', marginBottom: '2rem' }}>
              <ScrollReveal animation={lang === 'ar' ? 'fade-right' : 'fade-left'}>
                <span style={{ color: '#c29d59', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Our Vision</span>
                <h2 style={{ color: '#000000', fontSize: '2.5rem', marginBottom: '1.2rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {t.aboutVisionTitle}
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', fontWeight: '300' }}>
                  {t.aboutVisionDesc}
                </p>
                <div style={{ marginTop: '2.5rem' }}>
                  <Link href="/services" className="btn btn-primary" style={{ display: 'inline-block', background: '#000000', color: '#ffffff', border: 'none', borderRadius: '50px', padding: '1rem 2.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>
                    {lang === 'ar' ? 'اكتشف المزيد' : 'DISCOVER MORE'}
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div style={{ flex: '1 1 50%', minWidth: '300px' }}>
              <ScrollReveal animation={lang === 'ar' ? 'fade-left' : 'fade-right'}>
                <img src="/tech_agriculture.png" alt="Vision" style={{ width: '100%', height: 'auto', borderRadius: '0', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
              </ScrollReveal>
            </div>
          </div>

          {/* Mission (Image Left, Text Right) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', flexDirection: 'row-reverse' }}>
            <div style={{ flex: '1 1 40%', paddingLeft: lang === 'ar' ? '0' : '5rem', paddingRight: lang === 'ar' ? '5rem' : '0', minWidth: '300px', marginBottom: '2rem' }}>
              <ScrollReveal animation={lang === 'ar' ? 'fade-left' : 'fade-right'}>
                <span style={{ color: '#c29d59', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Our Mission</span>
                <h2 style={{ color: '#000000', fontSize: '2.5rem', marginBottom: '1.2rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {t.aboutMissionTitle}
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', fontWeight: '300' }}>
                  {t.aboutMissionDesc}
                </p>
                <div style={{ marginTop: '2.5rem' }}>
                  <Link href="/services" className="btn btn-primary" style={{ display: 'inline-block', background: '#000000', color: '#ffffff', border: 'none', borderRadius: '50px', padding: '1rem 2.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none' }}>
                    {lang === 'ar' ? 'اكتشف المزيد' : 'DISCOVER MORE'}
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            <div style={{ flex: '1 1 50%', minWidth: '300px' }}>
              <ScrollReveal animation={lang === 'ar' ? 'fade-right' : 'fade-left'}>
                <img src="/tech_hydrology.png" alt="Mission" style={{ width: '100%', height: 'auto', borderRadius: '0', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
              </ScrollReveal>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Our Story / Why Choose Dusor (Timeline Style over dark background) */}
      <section className="section" style={{ position: 'relative', padding: '8rem 0', color: '#ffffff', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <img src="/neom_landscape_2.png" alt="Story Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }} />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="fade-up">
            <div style={{ marginBottom: '4rem', textAlign: lang === 'ar' ? 'right' : 'left' }}>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#ffffff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {lang === 'ar' ? 'قصتنا' : 'Our Story'}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid-4" style={{ gap: '1.5rem' }}>
            {/* Timeline Cards */}
            <ScrollReveal animation="fade-up" delay={0}>
              <div style={{ background: 'rgba(250, 248, 245, 0.95)', color: '#000000', padding: '2.5rem 2rem', borderRadius: '0', borderTop: '4px solid #c29d59', height: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                <span style={{ fontWeight: '800', fontSize: '1.5rem', color: '#c29d59', marginBottom: '1rem', display: 'block' }}>2021</span>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', fontWeight: '800', textTransform: 'uppercase' }}>
                  {lang === 'ar' ? 'خبرة وطنية' : 'Local Expertise'}
                </h3>
                <p style={{ color: '#444444', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '300' }}>
                  {lang === 'ar' ? 'مستشارون وطنيون مؤهلون بأحدث المعارف الدولية.' : 'Local consultants qualified with cutting-edge international standards.'}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100}>
              <div style={{ background: 'rgba(20, 20, 20, 0.6)', backdropFilter: 'blur(10px)', color: '#ffffff', padding: '2.5rem 2rem', borderRadius: '0', borderTop: '4px solid rgba(255,255,255,0.2)', height: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                <span style={{ fontWeight: '800', fontSize: '1.5rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem', display: 'block' }}>2022</span>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', fontWeight: '800', textTransform: 'uppercase' }}>
                  {lang === 'ar' ? 'رؤية 2030' : 'Vision 2030'}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '300' }}>
                  {lang === 'ar' ? 'حلول مبتكرة لتعزيز الاستدامة البيئية والأمن المائي.' : 'Innovative solutions focused on sustainability and environmental growth.'}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div style={{ background: 'rgba(20, 20, 20, 0.6)', backdropFilter: 'blur(10px)', color: '#ffffff', padding: '2.5rem 2rem', borderRadius: '0', borderTop: '4px solid rgba(255,255,255,0.2)', height: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                <span style={{ fontWeight: '800', fontSize: '1.5rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem', display: 'block' }}>2023</span>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', fontWeight: '800', textTransform: 'uppercase' }}>
                  {lang === 'ar' ? 'ذكاء اصطناعي' : 'AI Solutions'}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '300' }}>
                  {lang === 'ar' ? 'نمذجة رياضية متقدمة لدعم اتخاذ القرارات الصحيحة.' : 'Advanced numerical modeling for high-precision decision support.'}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div style={{ background: 'rgba(20, 20, 20, 0.6)', backdropFilter: 'blur(10px)', color: '#ffffff', padding: '2.5rem 2rem', borderRadius: '0', borderTop: '4px solid rgba(255,255,255,0.2)', height: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                <span style={{ fontWeight: '800', fontSize: '1.5rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem', display: 'block' }}>2024</span>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', fontWeight: '800', textTransform: 'uppercase' }}>
                  {lang === 'ar' ? 'دقة الاستشعار' : 'High Precision'}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '300' }}>
                  {lang === 'ar' ? 'أدوات مسح جيومكاني واستشعار لنظم خرائط موثوقة.' : 'State-of-the-art geospatial mapping and spatial data.'}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Our Regions / Sectors (Grid Layout) */}
      <section className="section" style={{ background: '#f8faf6', padding: '8rem 0' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div style={{ marginBottom: '4rem', textAlign: lang === 'ar' ? 'right' : 'left' }}>
              <span style={{ color: '#c29d59', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Our Regions</span>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#000000', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {lang === 'ar' ? 'مناطق تركيزنا' : 'Our Focus Areas'}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid-4" style={{ gap: '2rem' }}>
            {/* Sector 1 */}
            <ScrollReveal animation="fade-up" delay={0}>
              <div style={{ textAlign: lang === 'ar' ? 'right' : 'left', cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <img src="/Our Services/smart_agriculture.png" alt="Agriculture" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '0', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#000000', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
                  {lang === 'ar' ? 'الزراعة الذكية' : 'Smart Agriculture'}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', fontWeight: '300' }}>
                  {lang === 'ar' ? 'حلول الذكاء الاصطناعي وأنظمة الري المتقدمة.' : 'AI solutions and advanced irrigation systems.'}
                </p>
                <Link href="/services" style={{ marginTop: 'auto', display: 'inline-block', textAlign: 'center', alignSelf: lang === 'ar' ? 'flex-end' : 'flex-start', background: '#000000', color: '#ffffff', border: 'none', padding: '0.6rem 1.8rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer', letterSpacing: '1px', textDecoration: 'none' }}>
                  {lang === 'ar' ? 'اقرأ المزيد' : 'Explore'}
                </Link>
              </div>
            </ScrollReveal>

            {/* Sector 2 */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div style={{ textAlign: lang === 'ar' ? 'right' : 'left', cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <img src="/Our Services/water_resources_management.png" alt="Water Management" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '0', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#000000', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
                  {lang === 'ar' ? 'إدارة الموارد المائية' : 'Water Management'}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', fontWeight: '300' }}>
                  {lang === 'ar' ? 'الاستكشاف والتحليل لتحقيق الاستدامة.' : 'Exploration and analysis for sustainability.'}
                </p>
                <Link href="/services" style={{ marginTop: 'auto', display: 'inline-block', textAlign: 'center', alignSelf: lang === 'ar' ? 'flex-end' : 'flex-start', background: '#000000', color: '#ffffff', border: 'none', padding: '0.6rem 1.8rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer', letterSpacing: '1px', textDecoration: 'none' }}>
                  {lang === 'ar' ? 'اقرأ المزيد' : 'Explore'}
                </Link>
              </div>
            </ScrollReveal>

            {/* Sector 3 */}
            <ScrollReveal animation="fade-up" delay={200}>
              <div style={{ textAlign: lang === 'ar' ? 'right' : 'left', cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <img src="/Our Services/geospatial_survey.png" alt="Geospatial" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '0', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#000000', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
                  {lang === 'ar' ? 'المسح الجيومكاني' : 'Geospatial Surveys'}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', fontWeight: '300' }}>
                  {lang === 'ar' ? 'أدوات مسح واستشعار دقيقة وموثوقة.' : 'Accurate and reliable surveying tools.'}
                </p>
                <Link href="/services" style={{ marginTop: 'auto', display: 'inline-block', textAlign: 'center', alignSelf: lang === 'ar' ? 'flex-end' : 'flex-start', background: '#000000', color: '#ffffff', border: 'none', padding: '0.6rem 1.8rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer', letterSpacing: '1px', textDecoration: 'none' }}>
                  {lang === 'ar' ? 'اقرأ المزيد' : 'Explore'}
                </Link>
              </div>
            </ScrollReveal>

            {/* Sector 4 */}
            <ScrollReveal animation="fade-up" delay={300}>
              <div style={{ textAlign: lang === 'ar' ? 'right' : 'left', cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <img src="/Our Services/project_development.png" alt="Project Dev" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '0', marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#000000', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>
                  {lang === 'ar' ? 'تطوير المشاريع' : 'Project Dev'}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', fontWeight: '300' }}>
                  {lang === 'ar' ? 'التخطيط وإدارة سلاسل الإمداد الزراعية.' : 'Planning and managing agricultural chains.'}
                </p>
                <Link href="/services" style={{ marginTop: 'auto', display: 'inline-block', textAlign: 'center', alignSelf: lang === 'ar' ? 'flex-end' : 'flex-start', background: '#000000', color: '#ffffff', border: 'none', padding: '0.6rem 1.8rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', cursor: 'pointer', letterSpacing: '1px', textDecoration: 'none' }}>
                  {lang === 'ar' ? 'اقرأ المزيد' : 'Explore'}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </>
  );
}
