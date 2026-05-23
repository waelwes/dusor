"use client";

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

export default function ProjectsPage() {
  const { lang, t } = useLanguage();

  const projects = lang === 'ar' ? [
    {
      title: 'تخطيط موارد مائية لمنطقة زراعية',
      category: 'المياه',
      desc: 'دراسة هيدرولوجية لتحديد أفضل مواقع الاستكشاف وتحسين قرارات الاستخدام طويل المدى.',
      result: 'رفع دقة التخطيط وتقليل المخاطر التشغيلية.',
      bg: '/project_water.png'
    },
    {
      title: 'منظومة زراعة ذكية لبيت محمي',
      category: 'الزراعة الذكية',
      desc: 'دمج حساسات التربة والمناخ مع إدارة ري دقيقة وتنبيهات تشغيلية آنية.',
      result: 'تحسين الإنتاجية وخفض استهلاك المياه.',
      bg: '/project_agri.png'
    },
    {
      title: 'مسح جيومكاني لأرض مشروع',
      category: 'المسح الجيومكاني',
      desc: 'إنتاج خرائط دقيقة ونماذج تضاريس تدعم اختيار الموقع والتصميم الهندسي.',
      result: 'تسريع اتخاذ القرار وتوضيح الفرص الميدانية.',
      bg: '/project_geo.png'
    },
    {
      title: 'تطوير مشروع زراعي متكامل',
      category: 'تطوير المشاريع',
      desc: 'دراسة جدوى، تخطيط، وإشراف مبدئي لمشروع يراعي الاستدامة والرؤية الوطنية.',
      result: 'تحويل الفكرة إلى خطة تنفيذية قابلة للقياس.',
      bg: '/project_dev.png'
    },
  ] : [
    {
      title: 'Water Resource Planning',
      category: 'Water Management',
      desc: 'Hydrological study to identify the best exploration points and improve long-term use decisions.',
      result: 'Better planning accuracy and lower operational risk.',
      bg: '/project_water.png'
    },
    {
      title: 'Smart Agriculture System',
      category: 'Smart Agriculture',
      desc: 'Integrated soil and climate sensors with precision irrigation and live operational alerts.',
      result: 'Higher productivity and lower water consumption.',
      bg: '/project_agri.png'
    },
    {
      title: 'Geospatial Site Survey',
      category: 'Geospatial Survey',
      desc: 'Accurate mapping and terrain models to support site selection and engineering design.',
      result: 'Faster decisions and clearer field opportunities.',
      bg: '/project_geo.png'
    },
    {
      title: 'Integrated Project Dev',
      category: 'Project Development',
      desc: 'Feasibility, planning, and initial supervision for a project aligned with sustainability and Vision 2030.',
      result: 'Turning ideas into measurable execution plans.',
      bg: '/project_dev.png'
    },
  ];

  return (
    <>
      {/* 1. Hero Section (Image Background) */}
      <section className="hero" style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', color: '#ffffff', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <img src="/projects_hero_bg.png" alt="Projects Hero" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 100%)' }} />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '140px 0 80px 0' }}>
          <div style={{ textAlign: lang === 'ar' ? 'right' : 'left', width: '100%' }}>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', color: '#ffffff', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase' }}>
              {t.projects}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', maxWidth: '700px', fontWeight: '300' }}>
              {lang === 'ar'
                ? 'هذه الصفحة تعرض نماذج من الأعمال التي تناسب طبيعة دوسور: المياه، الزراعة الذكية، المسح الجيومكاني، وتطوير المشاريع.'
                : 'This page shows representative work that fits Dosur’s focus: water, smart agriculture, geospatial survey, and project development.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Our Methodology Text Section */}
      <section className="section" style={{ background: '#ffffff', padding: '6rem 0 3rem 0' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center' }}>
              <span style={{ color: '#92c26e', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
                {lang === 'ar' ? 'منهجيتنا' : 'Our Methodology'}
              </span>
              <h2 style={{ color: '#000000', fontSize: '2.8rem', fontWeight: '800', marginBottom: '0.75rem', lineHeight: '1.2', letterSpacing: '2px', textTransform: 'uppercase' }}>
                {lang === 'ar' ? 'كيف نحقق النجاح' : 'How We Deliver Success'}
              </h2>
              <div style={{ width: '80px', height: '4px', background: '#92c26e', borderRadius: '2px', margin: '1.5rem auto 0 auto' }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Our Methodology Cards (Glassmorphism over new background) */}
      <section className="section" style={{ position: 'relative', padding: '6rem 0', color: '#ffffff', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <img src="/neom_stats_bg.png" alt="Methodology Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)' }} />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-3" style={{ gap: '2rem' }}>
            <ScrollReveal animation="fade-up" delay={0}>
              <div style={{ background: 'rgba(20, 20, 20, 0.65)', backdropFilter: 'blur(12px)', padding: '3.5rem 2.5rem', border: '1px solid rgba(255,255,255,0.05)', height: '100%', textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem', color: '#92c26e', fontWeight: '800', display: 'block', marginBottom: '1rem' }}>01</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '800', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {lang === 'ar' ? 'الاستكشاف والتخطيط' : 'Discovery & Planning'}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.8', margin: 0, fontWeight: '300' }}>
                  {lang === 'ar' ? 'تحليل متعمق للمتطلبات وتحديد أفضل الاستراتيجيات لتحقيق أهداف المشروع.' : 'In-depth analysis of requirements and mapping the best strategies to achieve project goals.'}
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={100}>
              <div style={{ background: 'rgba(20, 20, 20, 0.65)', backdropFilter: 'blur(12px)', padding: '3.5rem 2.5rem', border: '1px solid rgba(255,255,255,0.05)', height: '100%', textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem', color: '#92c26e', fontWeight: '800', display: 'block', marginBottom: '1rem' }}>02</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '800', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {lang === 'ar' ? 'التنفيذ الدقيق' : 'Precision Execution'}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.8', margin: 0, fontWeight: '300' }}>
                  {lang === 'ar' ? 'استخدام أحدث التقنيات وأفضل الممارسات لضمان جودة ودقة المخرجات.' : 'Leveraging the latest technologies and best practices to ensure high-quality, accurate outputs.'}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div style={{ background: 'rgba(20, 20, 20, 0.65)', backdropFilter: 'blur(12px)', padding: '3.5rem 2.5rem', border: '1px solid rgba(255,255,255,0.05)', height: '100%', textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem', color: '#92c26e', fontWeight: '800', display: 'block', marginBottom: '1rem' }}>03</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: '800', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {lang === 'ar' ? 'نتائج مستدامة' : 'Sustainable Results'}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.8', margin: 0, fontWeight: '300' }}>
                  {lang === 'ar' ? 'تقديم حلول ذات قيمة مضافة طويلة المدى تدعم رؤية الاستدامة.' : 'Delivering long-term, value-add solutions that support a vision of sustainability.'}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects (Visual Portfolio Grid) */}
      <section className="section" style={{ background: '#f8faf6', padding: '8rem 0' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <span style={{ color: '#c29d59', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Our Portfolio</span>
              <h2 style={{ color: '#000000', fontSize: '3rem', fontWeight: '800', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {lang === 'ar' ? 'مشاريعنا المميزة' : 'Featured Projects'}
              </h2>
              <div style={{ width: '80px', height: '4px', background: '#92c26e', borderRadius: '2px', margin: '1rem auto' }} />
            </div>
          </ScrollReveal>

          <div className="grid-4" style={{ gap: '2rem' }}>
            {projects.map((project, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 100}>
                <article style={{ position: 'relative', overflow: 'hidden', height: '450px', cursor: 'pointer', borderRadius: '0' }} className="project-card">
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
                    <img src={project.bg} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} className="project-img" />
                  </div>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)', zIndex: 1, transition: 'background 0.3s ease' }} className="project-overlay" />
                  
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '3rem 2.5rem', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign: lang === 'ar' ? 'right' : 'left' }}>
                    <span style={{ display: 'inline-block', marginBottom: '1rem', fontSize: '0.75rem', fontWeight: 800, color: '#92c26e', textTransform: 'uppercase', letterSpacing: '2px' }}>
                      {project.category}
                    </span>
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#ffffff', fontWeight: 800, lineHeight: '1.3', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.95rem', fontWeight: '300' }}>
                      {project.desc}
                    </p>
                    <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.15)', color: '#ffffff', fontWeight: 600, fontSize: '0.9rem' }}>
                      <span style={{ color: 'rgba(255,255,255,0.5)' }}>{lang === 'ar' ? 'النتيجة: ' : 'Result: '}</span> 
                      <span style={{ color: '#ffffff' }}>{project.result}</span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <style jsx>{`
            .project-card:hover .project-img {
              transform: scale(1.08);
            }
            .project-card:hover .project-overlay {
              background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%);
            }
          `}</style>

        </div>
      </section>

      {/* 4. Flagship Project Spotlight */}
      <section style={{ background: '#ffffff', padding: '8rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch' }}>
            <div style={{ flex: '1 1 50%', minWidth: '300px' }}>
              <ScrollReveal animation={lang === 'ar' ? 'fade-left' : 'fade-right'}>
                <img src="/project_flagship.png" alt="Flagship Project" style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '500px' }} />
              </ScrollReveal>
            </div>
            <div style={{ flex: '1 1 50%', background: '#f8faf6', padding: '5rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: '300px', textAlign: lang === 'ar' ? 'right' : 'left' }}>
              <ScrollReveal animation={lang === 'ar' ? 'fade-right' : 'fade-left'}>
                <span style={{ color: '#c29d59', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
                  {lang === 'ar' ? 'مشروع استراتيجي' : 'Flagship Spotlight'}
                </span>
                <h2 style={{ color: '#000000', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {lang === 'ar' ? 'مبادرة الأحساء للزراعة الذكية' : 'Al-Ahsa Smart Agriculture Initiative'}
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', fontWeight: '300', marginBottom: '2rem' }}>
                  {lang === 'ar' 
                    ? 'مشروع استراتيجي ضخم يهدف إلى تحويل آلاف الهكتارات من الأراضي الصحراوية إلى مزارع ذكية مستدامة باستخدام أحدث تقنيات الري والذكاء الاصطناعي، مما أسهم في توفير 40% من استهلاك المياه.' 
                    : 'A massive strategic project aimed at transforming thousands of hectares of desert land into sustainable smart farms using the latest irrigation technologies and AI, saving 40% of water consumption.'}
                </p>
                <button className="btn btn-primary" style={{ alignSelf: lang === 'ar' ? 'flex-end' : 'flex-start', background: '#000000', color: '#ffffff', border: 'none', borderRadius: '50px', padding: '1rem 2.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer' }}>
                  {lang === 'ar' ? 'عرض دراسة الحالة' : 'View Case Study'}
                </button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trusted Partners */}
      <section style={{ background: '#f8faf6', padding: '6rem 0', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ color: '#000000', fontSize: '2rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {lang === 'ar' ? 'شركاء النجاح' : 'Trusted By Industry Leaders'}
              </h2>
            </div>
            
            {/* Simple Logo Grid Placeholder */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', opacity: 0.6 }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} style={{ width: '120px', height: '60px', background: 'rgba(0,0,0,0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'rgba(0,0,0,0.4)', fontWeight: 'bold' }}>LOGO {i}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Project Impact & Stats */}
      <section style={{ background: '#000000', padding: '6rem 0', color: '#ffffff', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="grid-3" style={{ gap: '3rem', textAlign: 'center' }}>
            <ScrollReveal animation="fade-up" delay={0}>
              <h3 style={{ fontSize: '4.5rem', fontWeight: '800', color: '#92c26e', marginBottom: '0.5rem', fontFamily: 'monospace' }}>50+</h3>
              <p style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.7)', fontWeight: '700' }}>
                {lang === 'ar' ? 'مشروع منجز' : 'Projects Completed'}
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h3 style={{ fontSize: '4.5rem', fontWeight: '800', color: '#92c26e', marginBottom: '0.5rem', fontFamily: 'monospace' }}>10+</h3>
              <p style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.7)', fontWeight: '700' }}>
                {lang === 'ar' ? 'سنوات من الخبرة' : 'Years Experience'}
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <h3 style={{ fontSize: '4.5rem', fontWeight: '800', color: '#92c26e', marginBottom: '0.5rem', fontFamily: 'monospace' }}>100%</h3>
              <p style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.7)', fontWeight: '700' }}>
                {lang === 'ar' ? 'رضا العملاء' : 'Client Satisfaction'}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. Call To Action (Glassmorphism over dark background) */}
      <section style={{ position: 'relative', padding: '8rem 0', color: '#ffffff', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <img src="/project_cta_bg.png" alt="CTA Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)' }} />
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="fade-up">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', background: 'rgba(20, 20, 20, 0.7)', backdropFilter: 'blur(15px)', padding: '5rem 4rem', borderRadius: '0', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h2 style={{ color: '#ffffff', fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2', letterSpacing: '2px', textTransform: 'uppercase' }}>
                {lang === 'ar' ? 'هل أنت مستعد لبدء مشروعك القادم؟' : 'Ready To Start Your Next Project?'}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2.5rem', fontWeight: '300' }}>
                {lang === 'ar' 
                  ? 'دعنا نحول رؤيتك إلى واقع ملموس من خلال خبرتنا العميقة وحلولنا المبتكرة.' 
                  : 'Let us turn your vision into reality with our deep expertise and innovative solutions.'}
              </p>
              <a href="/contact" style={{ display: 'inline-block', background: '#92c26e', color: '#000000', textDecoration: 'none', padding: '1.2rem 3rem', borderRadius: '50px', fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', transition: 'background 0.3s ease' }}>
                {lang === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Today'}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
