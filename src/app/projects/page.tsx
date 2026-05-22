"use client";

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

export default function ProjectsPage() {
  const { lang } = useLanguage();

  const projects = lang === 'ar' ? [
    {
      title: 'تخطيط موارد مائية لمنطقة زراعية',
      category: 'المياه',
      desc: 'دراسة هيدرولوجية لتحديد أفضل مواقع الاستكشاف وتحسين قرارات الاستخدام طويل المدى.',
      result: 'رفع دقة التخطيط وتقليل المخاطر التشغيلية.'
    },
    {
      title: 'منظومة زراعة ذكية لبيت محمي',
      category: 'الزراعة الذكية',
      desc: 'دمج حساسات التربة والمناخ مع إدارة ري دقيقة وتنبيهات تشغيلية آنية.',
      result: 'تحسين الإنتاجية وخفض استهلاك المياه.'
    },
    {
      title: 'مسح جيومكاني لأرض مشروع',
      category: 'المسح الجيومكاني',
      desc: 'إنتاج خرائط دقيقة ونماذج تضاريس تدعم اختيار الموقع والتصميم الهندسي.',
      result: 'تسريع اتخاذ القرار وتوضيح الفرص الميدانية.'
    },
    {
      title: 'تطوير مشروع زراعي متكامل',
      category: 'تطوير المشاريع',
      desc: 'دراسة جدوى، تخطيط، وإشراف مبدئي لمشروع يراعي الاستدامة والرؤية الوطنية.',
      result: 'تحويل الفكرة إلى خطة تنفيذية قابلة للقياس.'
    },
  ] : [
    {
      title: 'Water Resource Planning for an Agricultural Zone',
      category: 'Water',
      desc: 'Hydrological study to identify the best exploration points and improve long-term use decisions.',
      result: 'Better planning accuracy and lower operational risk.'
    },
    {
      title: 'Smart Agriculture System for a Greenhouse',
      category: 'Smart Agriculture',
      desc: 'Integrated soil and climate sensors with precision irrigation and live operational alerts.',
      result: 'Higher productivity and lower water consumption.'
    },
    {
      title: 'Geospatial Survey for a Project Site',
      category: 'Geospatial Survey',
      desc: 'Accurate mapping and terrain models to support site selection and engineering design.',
      result: 'Faster decisions and clearer field opportunities.'
    },
    {
      title: 'Integrated Agricultural Project Development',
      category: 'Project Development',
      desc: 'Feasibility, planning, and initial supervision for a project aligned with sustainability and Vision 2030.',
      result: 'Turning ideas into measurable execution plans.'
    },
  ];

  return (
    <>
      <section className="hero" style={{ minHeight: '48vh', padding: '140px 0 80px 0', display: 'flex', alignItems: 'center', background: '#000000', color: '#ffffff' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span style={{ display: 'inline-block', padding: '0.45rem 1rem', borderRadius: '999px', background: '#92c26e', color: '#000000', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.5px', marginBottom: '1.2rem' }}>
              {lang === 'ar' ? 'أعمال مختارة' : 'Selected Work'}
            </span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '1rem', color: '#ffffff', fontWeight: '800' }}>
              {lang === 'ar' ? 'مشاريع تعكس خبرتنا' : 'Projects That Reflect Our Expertise'}
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.82)', lineHeight: '1.8', maxWidth: '720px' }}>
              {lang === 'ar'
                ? 'هذه الصفحة تعرض نماذج من الأعمال التي تناسب طبيعة دوسور: المياه، الزراعة الذكية، المسح الجيومكاني، وتطوير المشاريع.'
                : 'This page shows representative work that fits Dosur’s focus: water, smart agriculture, geospatial survey, and project development.'}
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#ffffff', padding: '6rem 0' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                {lang === 'ar' ? 'نماذج مشاريع مناسبة للشركة' : 'Best Page for a Consulting Company'}
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '760px', margin: '0 auto', lineHeight: '1.8' }}>
                {lang === 'ar'
                  ? 'صفحة المشاريع هي أفضل إضافة لأنها تثبت الخبرة وتوضح للعميل ما تستطيع الشركة تقديمه فعليًا.'
                  : 'A projects page is the strongest addition because it proves expertise and shows clients what the company can actually deliver.'}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {projects.map((project, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <article style={{ background: '#f8faf6', border: '1px solid rgba(146, 194, 110, 0.18)', borderRadius: '22px', padding: '2rem', height: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                  <span style={{ display: 'inline-block', marginBottom: '1rem', fontSize: '0.8rem', fontWeight: 800, color: '#1a4a1a', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {project.category}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.9rem', color: '#1a4a1a', fontWeight: 800, lineHeight: '1.35' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.2rem' }}>
                    {project.desc}
                  </p>
                  <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(146, 194, 110, 0.18)', color: '#000000', fontWeight: 600 }}>
                    {project.result}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
