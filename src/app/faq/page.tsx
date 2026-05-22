"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';

export default function FaqPage() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = lang === 'ar' ? [
    {
      question: 'ما أفضل صفحة للشركة بعد الخدمات؟',
      answer: 'أفضل إضافة هي صفحة المشاريع لأن العميل يريد رؤية أعمال حقيقية، ثم FAQ لتقليل الأسئلة المتكررة وزيادة الثقة.'
    },
    {
      question: 'هل نحتاج صفحة فريق العمل؟',
      answer: 'نعم إذا كان الفريق يمثل قوة الشركة. صفحة الفريق مناسبة لاحقًا، لكن المشاريع والFAQ أكثر تأثيرًا الآن.'
    },
    {
      question: 'هل نحتاج صفحة قطاعات أو حلول؟',
      answer: 'إذا أردت توسيع الهيكل، صفحة القطاعات مفيدة جدًا، خصوصًا للمياه والزراعة والمسح الجيومكاني.'
    },
    {
      question: 'هل يجب إضافة صفحة تواصل منفصلة؟',
      answer: 'صفحة التواصل موجودة بالفعل، ويمكن تطويرها لاحقًا بنموذج أقوى ومعلومات أوضح.'
    },
  ] : [
    {
      question: 'What is the best page to add after services?',
      answer: 'The best addition is a projects page because clients want to see real work first, then an FAQ page to reduce repeated questions and build trust.'
    },
    {
      question: 'Do we need a team page?',
      answer: 'Yes, if your team is a strong selling point. It is useful later, but projects and FAQ have more impact right now.'
    },
    {
      question: 'Should we add an industries or solutions page?',
      answer: 'If you want to expand the site structure, a solutions page is very useful, especially for water, agriculture, and geospatial work.'
    },
    {
      question: 'Do we need a separate contact page?',
      answer: 'You already have a contact page, and it can be improved later with a stronger form and clearer contact details.'
    },
  ];

  return (
    <>
      <section className="hero" style={{ minHeight: '48vh', padding: '140px 0 80px 0', display: 'flex', alignItems: 'center', background: '#000000', color: '#ffffff' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <span style={{ display: 'inline-block', padding: '0.45rem 1rem', borderRadius: '999px', background: '#92c26e', color: '#000000', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.5px', marginBottom: '1.2rem' }}>
              {lang === 'ar' ? 'أسئلة شائعة' : 'FAQ'}
            </span>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '1rem', color: '#ffffff', fontWeight: '800' }}>
              {lang === 'ar' ? 'الأسئلة التي تساعد العميل على الفهم بسرعة' : 'Questions That Help Clients Understand Fast'}
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.82)', lineHeight: '1.8', maxWidth: '720px' }}>
              {lang === 'ar'
                ? 'هذه الصفحة مناسبة جدًا لشركة استشارية لأنها تختصر التوضيح، وتجيب عن الاعتراضات، وتسرّع قرار التواصل.'
                : 'This page is ideal for a consulting company because it shortens explanations, answers objections, and speeds up contact decisions.'}
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#ffffff', padding: '6rem 0' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                {lang === 'ar' ? 'أجوبة مختصرة وواضحة' : 'Short, Clear Answers'}
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '760px', margin: '0 auto', lineHeight: '1.8' }}>
                {lang === 'ar'
                  ? 'FAQ تكمل صفحة المشاريع لأنها تعطي العميل الثقة قبل أن يرسل الاستفسار.'
                  : 'FAQ complements the projects page by giving clients confidence before they reach out.'}
              </p>
            </div>
          </ScrollReveal>

          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {faqs.map((faq, index) => {
              const open = openIndex === index;

              return (
                <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                  <div style={{ border: '1px solid rgba(146, 194, 110, 0.2)', borderRadius: '18px', overflow: 'hidden', background: '#f8faf6' }}>
                    <button
                      onClick={() => setOpenIndex(open ? null : index)}
                      style={{ width: '100%', textAlign: lang === 'ar' ? 'right' : 'left', background: 'transparent', border: 'none', padding: '1.2rem 1.4rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'inherit' }}
                    >
                      <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1a4a1a', lineHeight: '1.5' }}>{faq.question}</span>
                      <span style={{ fontSize: '1.4rem', fontWeight: 300, color: '#92c26e', lineHeight: 1 }}>{open ? '−' : '+'}</span>
                    </button>
                    {open && (
                      <div style={{ padding: '0 1.4rem 1.3rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        {faq.answer}
                      </div>
                    )}
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
