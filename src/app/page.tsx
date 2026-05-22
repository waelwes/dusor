"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import MethodologyModal from '@/components/MethodologyModal';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
export default function Home() {
  const { t, lang } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <>
      <section className="hero hero-video-section" style={{ minHeight: '100vh', padding: '0', display: 'flex', alignItems: 'flex-end', position: 'relative', overflow: 'hidden' }}>
        {/* Video Background */}
        <VideoSequence />

        {/* Dark overlay — stronger at bottom for text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.75) 100%)',
          zIndex: 1,
        }} />

        {/* Hero Content — bottom aligned like NEOM */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%', paddingBottom: '5rem', paddingLeft: '4%', paddingRight: '4%', display: 'flex', justifyContent: 'flex-start' }}>
          <ScrollReveal animation="fade-up" delay={100} style={{ maxWidth: '600px', width: '100%' }}>
            <div style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.2', marginBottom: '0.8rem', color: '#ffffff', fontWeight: '800' }}>
                {t.heroTitle}
              </h1>
              <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', lineHeight: '1.7' }}>
                {t.heroSubtitle}
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <Link href="/services" className="btn" style={{ background: '#ffffff', color: '#000000', fontWeight: '700', padding: '0.75rem 2rem', fontSize: '0.9rem', borderRadius: '4px' }}>
                  {lang === 'ar' ? 'اكتشف المزيد' : 'Explore More'}
                </Link>
                <button className="btn" onClick={() => setIsModalOpen(true)} style={{ background: 'transparent', color: '#ffffff', border: '1.5px solid rgba(255,255,255,0.8)', fontWeight: '600', padding: '0.75rem 2rem', fontSize: '0.9rem', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'inherit' }}>
                  {t.methodology}
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* scroll indicator removed */}
      </section>

      {/* Video sequence component defined below to play satellite then hero */}


      {/* Brand Green Highlight Banner - 2 Column Split Layout */}
      <section style={{ background: '#92c26e', color: '#000000', padding: '4.5rem 0', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
            {/* Column 1: Localized Content */}
            <ScrollReveal animation="fade-right">
            <div style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}>
              <div style={{ display: 'inline-flex', padding: '0.4rem 1.2rem', background: '#000000', color: '#ffffff', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1.5rem', letterSpacing: '0.5px' }}>
                {lang === 'ar' ? 'رؤية 2030 والاستدامة' : 'Vision 2030 & Sustainability'}
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.3', marginBottom: '1.5rem', color: '#000000' }}>
                {lang === 'ar' ? 'شريككم الاستراتيجي لدعم الأمن المائي والغذائي' : 'Your Strategic Partner for Water & Food Security'}
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.9, marginBottom: '2rem', color: '#000000' }}>
                {lang === 'ar' 
                  ? 'تعمل شركة دوسور المحدودة على تمكين التحول نحو التنمية المستدامة والزراعة الذكية في المملكة العربية السعودية. نوفر أحدث تقنيات الذكاء الاصطناعي والمسح الجيومكاني لدعم استكشاف المياه الجوفية وحماية مصادر المياه وإثراء المشاريع الاستثمارية المبتكرة.' 
                  : 'Dosur Limited is dedicated to enabling the transition towards sustainable development and smart agriculture in the Kingdom of Saudi Arabia. We provide cutting-edge AI and geospatial technologies to support groundwater exploration, protect water resources, and enrich innovative investment projects.'}
              </p>
              <div>
                <Link href="/about" className="btn" style={{ background: '#000000', color: '#ffffff', border: 'none', padding: '0.75rem 2rem', fontWeight: '600', transition: 'all 0.3s' }}>
                  {lang === 'ar' ? 'اقرأ المزيد عن مبادئنا' : 'Read More About Us'}
                </Link>
              </div>
            </div>
            </ScrollReveal>

            {/* Column 2: Highlight Image (Aerial Smart Fields) */}
            <ScrollReveal animation="fade-left" delay={150}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src="/highlights_aerial.png" 
                alt="Dosur Smart Agriculture Highlights" 
                style={{ 
                  width: '100%', 
                  maxWidth: '480px',
                  height: 'auto', 
                  display: 'block',
                  objectFit: 'cover',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
                }} 
              />
            </div>
            </ScrollReveal>
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
            {/* Card 1: Expertise */}
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

            {/* Card 2: Vision 2030 & Sustainability */}
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

            {/* Card 3: AI Solutions */}
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

            {/* Card 4: Precision GIS */}
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

      {/* Our Services Section */}
      <section className="section" style={{ background: '#ffffff', padding: '6rem 0 4rem 0' }}>
        <div style={{ width: '100%' }}>
          <ScrollReveal animation="fade-up">
          <div style={{ textAlign: 'center', marginBottom: '6rem', padding: '0 2rem' }}>
            <h2 className="text-gradient" style={{ fontSize: '2.8rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '0' }}>{t.servicesTitle}</h2>
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
                    <h3 style={{ color: '#1a4a1a', fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.2rem', lineHeight: '1.3', textTransform: 'uppercase' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', margin: '0 0 2rem 0' }}>
                      {item.desc}
                    </p>
                    <div>
                      <button style={{ background: '#1a1a1a', color: '#ffffff', border: 'none', padding: '0.8rem 2rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '1px', cursor: 'pointer', textTransform: 'uppercase' }}>
                        {lang === 'ar' ? 'اقرأ المزيد' : 'LEARN MORE'}
                      </button>
                    </div>
                  </div>
                </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical & Engineering Sectors — edge-to-edge style */}
      <section className="section" style={{ background: '#f0f7ea', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '4rem 0 5rem 0' }}>
        <div style={{ width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 2rem' }}>
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0' }}>
              {lang === 'ar' ? 'مجالات تفوقنا التقني والهندسي' : 'Our Technical & Engineering Sectors'}
            </h2>
            <div style={{ width: '80px', height: '4px', background: '#92c26e', borderRadius: '2px', margin: '1rem auto 1.5rem auto' }} />
          </div>
          <div className="grid-5-responsive">
            {[
              { img: '/tech_hydrology.png', label: lang === 'ar' ? 'هيدرولوجيا' : 'Hydrology', title: lang === 'ar' ? 'دراسات المياه الجوفية' : 'Water Exploration' },
              { img: '/tech_agriculture.png', label: lang === 'ar' ? 'زراعة ذكية' : 'Smart Agriculture', title: lang === 'ar' ? 'تمكين الأمن الغذائي' : 'Food Security Systems' },
              { img: '/tech_gis.png', label: lang === 'ar' ? 'نظم معلومات' : 'Geospatial', title: lang === 'ar' ? 'المسح الجيومكاني المتقدم' : 'GIS & Terrain Mapping' },
              { img: '/tech_sensing.png', label: lang === 'ar' ? 'استشعار عن بعد' : 'Sensing', title: lang === 'ar' ? 'مراقبة هيدرولوجية ذكية' : 'Satellite Analytics' },
              { img: '/tech_ai.png', label: lang === 'ar' ? 'ذكاء اصطناعي' : 'AI Systems', title: lang === 'ar' ? 'نمذجة رقمية متطورة' : 'Numerical Modeling' },
            ].map((s, i) => (
              <div key={i} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1/1', background: '#f5f5f5' }}>
                <img src={s.img} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div style={{ position: 'absolute', bottom: '-2px', left: '-2px', right: '-2px', background: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1.2rem 1.5rem 1.3rem', textAlign: 'start', clipPath: lang === 'ar' ? 'polygon(60px 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, calc(100% - 60px) 0, 100% 100%, 0 100%)' }}>
                  <span style={{ color: '#2d6a1f', fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.3rem' }}>{s.label}</span>
                  <h4 style={{ color: '#1a4a1a', fontSize: '0.98rem', fontWeight: '800', margin: 0, lineHeight: '1.4' }}>{s.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us — Accordion Section */}
      <section className="section" style={{ background: '#1a4a1a', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(26,74,26,0.96) 0%, rgba(26,74,26,0.88) 100%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
          <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '90%',
            right: '0.5%',
            width: '360px',
            height: '360px',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            boxShadow: 'none',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          <img
            src="/logo/icon.png"
            alt=""
            aria-hidden="true"
            style={{ width: '78%', height: '78%', objectFit: 'contain', opacity: 0.08 }}
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
            {/* Left: Title */}
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.3', marginBottom: '0', color: '#ffffff' }}>
                {lang === 'ar' ? 'لماذا نحن الخيار الأمثل؟' : 'Why We Are The Right Choice'}
              </h2>
              <div style={{ width: '80px', height: '4px', background: '#92c26e', borderRadius: '2px', marginBottom: '1.5rem', marginLeft: lang === 'ar' ? 'auto' : '0', marginRight: lang === 'ar' ? '0' : 'auto', marginTop: '1rem' }} />
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: '1.7', fontWeight: '500' }}>
                {lang === 'ar'
                  ? 'نقدم حلولاً متكاملة تجمع بين الخبرة الوطنية والتقنيات الحديثة لتحقيق أهداف التنمية المستدامة، بدءًا من التحليل الاستراتيجي والنمذجة الرقمية وصولاً إلى التنفيذ الميداني والمراقبة لضمان استدامة الموارد وتحقيق أثر اقتصادي واجتماعي ملموس. نوفر دراسات جدوى وتصاميم تنفيذية، ندمج أنظمة إنترنت الأشياء والذكاء الاصطناعي للمراقبة والتحكم، ونعمل على تحسين سلاسل الإمداد لتقليل الهدر وزيادة الكفاءة. كما نوفّر خدمات ما بعد التنفيذ من متابعة ميدانية، تقييم أثر بيئي واجتماعي، وتدريب الفرق المحلية لنقل المعرفة والتشغيل المستدام.'
                  : 'We deliver integrated solutions combining national expertise with cutting-edge technology to drive sustainable development, from strategic analysis and digital modeling to field implementation and monitoring that ensure resource sustainability and measurable economic and social impact. We provide feasibility studies and detailed execution designs, integrate IoT and AI systems for monitoring and control, optimize supply chains to reduce waste and increase efficiency, and offer post-delivery services including field follow-up, environmental and social impact assessments, and local team training to transfer knowledge and ensure sustainable operations.'}
              </p>
            </div>

            {/* Right: Accordion */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {(lang === 'ar' ? [
                { title: 'خبرة وطنية بمعايير دولية', desc: 'فريقنا من المهندسين والمستشارين السعوديين المؤهلين بأحدث المعارف الدولية في إدارة الموارد المائية والزراعة الذكية.' },
                { title: 'تقنيات ذكاء اصطناعي متقدمة', desc: 'نستخدم أحدث تقنيات الذكاء الاصطناعي والنمذجة الرقمية لتقديم تحليلات دقيقة ودعم اتخاذ القرارات الاستراتيجية.' },
                { title: 'التزام بالاستدامة البيئية', desc: 'نضع الاستدامة في صميم كل مشروع، مع التركيز على ترشيد استهلاك المياه وتحسين كفاءة الموارد الطبيعية.' },
                { title: 'دعم مستهدفات رؤية 2030', desc: 'حلولنا متوافقة مع مستهدفات رؤية المملكة 2030 في تحقيق الأمن الغذائي والمائي وتنويع مصادر الاقتصاد.' },
                { title: 'شراكات استراتيجية موثوقة', desc: 'نبني علاقات طويلة الأمد مع عملائنا عبر الشفافية والنتائج القابلة للقياس والدعم المستمر بعد تسليم المشروع.' },
              ] : [
                { title: 'National Expertise, Global Standards', desc: 'Our team of Saudi engineers and consultants brings cutting-edge international knowledge in water resource management and smart agriculture.' },
                { title: 'Advanced AI & Digital Modeling', desc: 'We leverage the latest AI technologies and numerical modeling to deliver precise analytics and support strategic decision-making.' },
                { title: 'Commitment to Environmental Sustainability', desc: 'Sustainability is at the core of every project, focusing on water conservation and improving natural resource efficiency.' },
                { title: 'Supporting Vision 2030 Goals', desc: 'Our solutions align with Saudi Vision 2030 targets for food and water security and economic diversification.' },
                { title: 'Trusted Strategic Partnerships', desc: 'We build long-term client relationships through transparency, measurable results, and continuous post-project support.' },
              ]).map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                  style={{
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: openAccordion === idx ? 'none' : '1px solid rgba(146, 194, 110, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.1rem 1.5rem',
                    background: '#ffffff',
                    transition: 'background 0.3s ease'
                  }}>
                    <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: '700', color: '#1a4a1a' }}>
                      {item.title}
                    </h4>
                    <span style={{ fontSize: '1.4rem', fontWeight: '300', color: openAccordion === idx ? '#92c26e' : '#1a4a1a', lineHeight: 1 }}>
                      {openAccordion === idx ? '−' : '+'}
                    </span>
                  </div>
                  {openAccordion === idx && (
                    <div style={{ padding: '1rem 1.5rem 1.3rem', background: '#ffffff' }}>
                      <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7', fontWeight: '500' }}>
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="section" style={{ background: '#f0f7ea', padding: '6rem 0' }}>
        <div style={{ width: '100%', maxWidth: '1800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.3', marginBottom: '0' }}>
              {lang === 'ar' ? 'آراء عملائنا' : 'Customer Testimonials'}
            </h2>
            <div style={{ width: '80px', height: '4px', background: '#92c26e', borderRadius: '2px', margin: '1rem auto 1.5rem auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              {lang === 'ar' ? 'ما يقوله شركاؤنا عن تجربتهم معنا' : 'What our partners say about working with us'}
            </p>
          </div>

          <div className="grid-5-responsive" style={{ gap: '1rem' }}>
            {(lang === 'ar' ? [
              { quote: 'قدّمت دوسر حلولاً مبتكرة لإدارة المياه الجوفية، وحققنا وفراً ملموساً تجاوز 35%.', name: 'م. فهد العتيبي', role: 'مدير مشاريع زراعية' },
              { quote: 'تميّزت دوسر بالدقة العالية في المسح الجيومكاني لمشروعنا. الفريق محترف جداً.', name: 'م. سارة الغامدي', role: 'مهندسة بيئية' },
              { quote: 'استفدنا من تقنيات الاستشعار عن بعد مما ساعدنا على اتخاذ قرارات دقيقة.', name: 'م. خالد الدوسري', role: 'مدير عمليات' },
              { quote: 'استشاراتهم الاستراتيجية كانت حجر الأساس في نجاح مشاريعنا بأعلى المعايير.', name: 'د. عبدالله الرشيد', role: 'رئيس تنفيذي' },
              { quote: 'أحدثت أنظمة الري الذكية فرقاً شاسعاً. الحصول على التقنيات مع دعم فني مستمر.', name: 'م. نورة السبيعي', role: 'مهندسة زراعية' },
            ] : [
              { quote: 'DOSUR delivered innovative groundwater solutions. We achieved over 35% water savings.', name: 'Eng. Fahad Al-Otaibi', role: 'Projects Manager' },
              { quote: 'DOSUR stood out with exceptional precision in surveying. Their team is professional.', name: 'Eng. Sara Al-Ghamdi', role: 'Environmental Eng' },
              { quote: 'We leveraged their remote sensing tech enabling highly accurate decision-making.', name: 'Eng. Khaled Al-Dosari', role: 'Operations Manager' },
              { quote: 'Their strategic consulting was the cornerstone of our successful project expansion.', name: 'Dr. Abdullah Al-Rasheed', role: 'Chief Investment Officer' },
              { quote: 'Smart irrigation systems made a massive difference. Cutting-edge tech with support.', name: 'Eng. Noura Al-Subaie', role: 'Agricultural Engineer' },
            ]).map((t, idx) => (
              <div key={idx} style={{
                background: '#ffffff',
                padding: '1.2rem',
                border: '1px solid rgba(146, 194, 110, 0.15)',
                boxShadow: '0 8px 24px rgba(146, 194, 110, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(146,194,110,0.12)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(146,194,110,0.06)'; }}
              >
                {/* Quote mark */}
                <span style={{ fontSize: '2.5rem', lineHeight: 1, color: '#92c26e', fontFamily: 'Georgia, serif', marginBottom: '-0.5rem' }}>"</span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6', margin: 0, flexGrow: 1 }}>
                  {t.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid rgba(146,194,110,0.12)', paddingTop: '1rem' }}>
                  {/* Avatar circle */}
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #2d6a1f, #92c26e)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.85rem' }}>{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: '700', fontSize: '0.85rem', color: '#1a4a1a' }}>{t.name}</p>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="section" style={{ background: '#ffffff', padding: '6rem 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div className="quick-contact-grid" style={{ 
            display: 'flex', 
            flexDirection: lang === 'ar' ? 'row-reverse' : 'row', 
            gap: '4rem', 
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            
            {/* Text (Visually Left) */}
            <div style={{ flex: '1 1 50%', textAlign: lang === 'ar' ? 'right' : 'left' }}>
              <h2 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>
                {lang === 'ar' ? 'هل أنت مستعد لبدء مشروعك؟' : 'Ready to start your project?'}
              </h2>
              <div style={{ width: '60px', height: '4px', background: '#92c26e', borderRadius: '2px', marginBottom: '1.5rem', marginLeft: lang === 'ar' ? 'auto' : '0', marginRight: lang === 'ar' ? '0' : 'auto' }} />
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                {lang === 'ar' 
                  ? 'تواصل معنا الآن للحصول على استشارة فنية مخصصة من نخبة المهندسين والخبراء لضمان نجاح مشروعك بأعلى المعايير العالمية.' 
                  : 'Contact us today for a specialized technical consultation with our top engineers and experts to ensure your project succeeds with global standards.'}
              </p>
            </div>

            {/* Form (Visually Right) */}
            <div style={{ flex: '1 1 50%', background: '#f5f7f4', padding: '2.5rem', borderRadius: '0', border: '1px solid rgba(146, 194, 110, 0.2)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <form 
                onSubmit={(e) => { e.preventDefault(); alert(lang === 'ar' ? 'تم استلام رسالتك!' : 'Message received!'); }}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.2rem', 
                }}
              >
                <input 
                  type="text" 
                  placeholder={lang === 'ar' ? 'الاسم الكريم' : 'Your Name'} 
                  required
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    borderRadius: '0',
                    border: '1px solid rgba(146, 194, 110, 0.3)',
                    background: '#ffffff',
                    color: '#1a4a1a',
                    outline: 'none',
                    fontFamily: 'inherit',
                    fontSize: '1rem'
                  }}
                  onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 3px rgba(146, 194, 110, 0.2)')}
                  onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
                />
                <input 
                  type="text" 
                  placeholder={lang === 'ar' ? 'رقم الجوال أو الإيميل' : 'Phone or Email'} 
                  required
                  style={{
                    width: '100%',
                    padding: '1rem 1.5rem',
                    borderRadius: '0',
                    border: '1px solid rgba(146, 194, 110, 0.3)',
                    background: '#ffffff',
                    color: '#1a4a1a',
                    outline: 'none',
                    fontFamily: 'inherit',
                    fontSize: '1rem'
                  }}
                  onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 3px rgba(146, 194, 110, 0.2)')}
                  onBlur={(e) => (e.currentTarget.style.boxShadow = 'none')}
                />
                <button 
                  type="submit" 
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '50px',
                    border: 'none',
                    background: '#1a4a1a',
                    color: '#ffffff',
                    fontWeight: '800',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    marginTop: '0.5rem'
                  }}
                  onMouseEnter={(e) => { (e.currentTarget.style.background = '#92c26e'); (e.currentTarget.style.color = '#000000'); (e.currentTarget.style.transform = 'translateY(-2px)'); }}
                  onMouseLeave={(e) => { (e.currentTarget.style.background = '#1a4a1a'); (e.currentTarget.style.color = '#ffffff'); (e.currentTarget.style.transform = 'translateY(0)'); }}
                >
                  {lang === 'ar' ? 'أرسل الطلب' : 'Submit'}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <MethodologyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

function VideoSequence() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const preloadRef = useRef<HTMLVideoElement | null>(null);
  const [phase, setPhase] = useState<number>(0); // 0: hero, 1: satellite
  const sources = [
    '/hero-video.mp4',
    '/satellite.mp4',
    '/farming.mp4',
  ];
  const [durations, setDurations] = useState<number[]>([0, 0, 0]);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const pendingSeek = useRef<number | null>(null);


  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const newSrc = sources[phase] || sources[0];
    // do not auto-loop; control switching explicitly
    v.loop = false;
    // if src changed, set it, load and play to guarantee switch
    try {
      const currentHas = v.currentSrc ? v.currentSrc.includes(newSrc) : false;
      if (!currentHas) {
        v.pause();
        const hadSrc = !!v.currentSrc;
        // if switching from an already-playing source, remove poster
        if (hadSrc) {
          try { v.removeAttribute('poster'); } catch (e) {}
        }
        v.src = newSrc;
        v.load();
        v.play().catch(() => {});
      }
    } catch (e) {
      // ignore play/load errors
    }
    try {
      const nextIndex = (phase + 1) % sources.length;
      if (!preloadRef.current) {
        const pre = document.createElement('video');
        pre.preload = 'auto';
        pre.muted = true;
        pre.playsInline = true;
        pre.style.display = 'none';
        document.body.appendChild(pre);
        preloadRef.current = pre;
      }
      preloadRef.current.preload = 'auto';
      preloadRef.current.src = sources[nextIndex];
      preloadRef.current.load();
    } catch (e) {
      // ignore
    }
  }, [phase]);

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v) return;
    const d = isFinite(v.duration) ? v.duration : 0;
    setDurations(prev => {
      const next = [...prev];
      next[phase] = d;
      return next;
    });
    if (pendingSeek.current != null && d > 0) {
      v.currentTime = pendingSeek.current * d;
      pendingSeek.current = null;
    }
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v) return;
    setCurrentTime(v.currentTime || 0);
  };

  const bars = [
    { id: 0, label: 'hero' },
    { id: 1, label: 'satellite' },
    { id: 2, label: 'farming' },
  ];

  const onBarClick = (e: React.MouseEvent, i: number) => {
    const el = e.currentTarget as HTMLDivElement;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = Math.min(Math.max(x / rect.width, 0), 1);
    if (i !== phase) {
      // switch phase and seek when metadata loads
      pendingSeek.current = ratio;
      setPhase(i);
    } else {
      const v = videoRef.current;
      const d = durations[i] || (v ? v.duration : 0) || 0;
      if (v && d > 0) v.currentTime = ratio * d;
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        preload="metadata"
        playsInline
        onEnded={() => {
          // advance to next video in sequence
          setPhase((p) => (p + 1) % sources.length);
        }}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          willChange: 'opacity, transform',
          transform: 'translateZ(0)',
          backgroundColor: '#0b0f0b',
        }}
        // `src` is set programmatically in useEffect to avoid aggressive preloading
      />


      {/* Two thin glassy progress bars in one row (clickable) */}
      <div className="video-bars-container" style={{ position: 'absolute', bottom: '5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 60, width: '86%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '0.3rem', alignItems: 'flex-start', justifyContent: 'space-between', maxWidth: '1400px' }}>
        {bars.map((b, i) => {
          const d = durations[i] || 0;
          const progress = d > 0 ? (phase > i ? 100 : phase === i ? Math.min(100, (currentTime / d) * 100) : 0) : 0;
          return (
            <div key={b.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '4px', flex: '0 0 30%', minWidth: '120px' }}>
              <div role="button" aria-label={`video-progress-${b.label}`} onClick={(e) => onBarClick(e, i)}
                style={{ height: '6px', borderRadius: '0px', background: 'rgba(0,0,0,0.22)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', boxShadow: 'none', overflow: 'hidden', cursor: 'pointer', display: 'block' }}>
                <div style={{ position: 'relative', width: `${progress}%`, transition: 'width 200ms linear', height: '100%', background: 'transparent' }}>
                  <div style={{ position: 'absolute', inset: 0, background: phase === i ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.06)' }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`@keyframes loader-slide { 0% { transform: translateX(-100%); } 50% { transform: translateX(20%); } 100% { transform: translateX(120%); } } @keyframes scroll-line-horizontal { 0% { transform: translateX(-100%); } 50% { transform: translateX(10%); } 100% { transform: translateX(120%); } }
        /* Mobile: move bars down slightly */
        @media (max-width: 600px) {
          .video-bars-container { bottom: 2rem !important; gap: 0.15rem !important; width: 94% !important; }
          .video-bars-container > div { gap: 3px !important; min-width: 90px !important; flex: 0 0 30% !important; }
          .video-bars-container [aria-label^="video-progress-"] { height: 6px !important; }
        }
        /* Desktop: make the progress lines thinner and reduce gaps */
        @media (min-width: 900px) {
          .video-bars-container { width: 70% !important; justify-content: center !important; gap: 1rem !important; }
          .video-bars-container > div { flex: 0 0 30% !important; min-width: 100px !important; max-width: 34% !important; }
          .video-bars-container [aria-label^="video-progress-"] { height: 4px !important; }
          .video-bars-container [aria-label^="video-progress-"] > div { height: 100% !important; }
        }
      `}</style>
    </>
  );
}
