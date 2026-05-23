"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Contact() {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '', email: '', companyName: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ firstName: '', lastName: '', phone: '', email: '', companyName: '', message: '' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative', minHeight: '40vh', padding: '140px 0 60px 0', display: 'flex', alignItems: 'center', color: '#ffffff', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <img src="/contact_hero_pattern.png" alt="Contact Pattern" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 100%)' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: lang === 'ar' ? 'right' : 'left', width: '100%' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#ffffff', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>
              {t.contactTitle}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8', fontWeight: '300', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {t.home} - {t.contact}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ background: '#ffffff', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            
            {/* Left Side: Contact Details */}
            <div style={{ paddingRight: '2rem' }}>
              <p style={{ color: '#4a6b4a', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '1rem', textTransform: 'uppercase' }}>
                {t.contactDetailsEyebrow || "// CONTACT DETAILS"}
              </p>
              <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '1.5rem' }}>
                {t.contactSectionTitle || "Contact Us"}
              </h2>
              <p style={{ color: '#666666', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '3rem' }}>
                {t.contactDescription || "Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions."}
              </p>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ marginTop: '0.2rem' }}>
                  <img 
                    src="https://flagcdn.com/w80/sa.png" 
                    alt="Saudi Arabia" 
                    style={{ width: '42px', height: 'auto', borderRadius: '2px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} 
                  />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#000000', marginBottom: '0.5rem' }}>
                    {t.hqOffice || "SAUDI ARABIA - Branch Office"}
                  </h4>
                  <p style={{ color: '#666666', lineHeight: '1.8', fontSize: '1rem', whiteSpace: 'pre-wrap' }}>
                    {t.contactAddress}
                  </p>
                  <p style={{ color: '#666666', lineHeight: '1.8', fontSize: '1rem', marginTop: '0.5rem' }}>
                    {t.contactCrLabel || "Commercial Register"}: <span style={{ color: '#4a6b4a', fontWeight: '600' }}>{t.contactCrNumber}</span>
                  </p>
                  <p style={{ color: '#666666', lineHeight: '1.8', fontSize: '1rem', marginTop: '0.5rem' }}>
                    {t.contactPhoneWa || "Phone & WhatsApp"}: <span style={{ color: '#4a6b4a', fontWeight: '600', direction: 'ltr', display: 'inline-block' }}>{t.contactPhone}</span>
                  </p>
                  <p style={{ color: '#666666', lineHeight: '1.8', fontSize: '1rem' }}>
                    {t.contactEmailLabel || "Email"}: <span style={{ color: '#4a6b4a', fontWeight: '600' }}>{t.contactEmailAddress}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Form Block */}
            <div>
              <div style={{ 
                background: 'rgba(20, 20, 20, 0.95)', 
                backdropFilter: 'blur(20px)',
                padding: '4rem', 
                borderRadius: '0', 
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
              }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {t.readyToGetStarted || "Ready to Get Started?"}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '3rem', fontWeight: '300' }}>
                  {t.formSubtext || "Your email address will not be published. Required fields are marked *"}
                </p>
                
                <div style={{ width: '100%' }}>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    
                    <style jsx>{`
                      .lux-input {
                        width: 100%;
                        padding: 1rem 0;
                        border: none;
                        border-bottom: 1px solid rgba(255,255,255,0.2);
                        outline: none;
                        font-size: 1rem;
                        color: #ffffff;
                        background: transparent;
                        transition: all 0.3s ease;
                        text-align: ${lang === 'ar' ? 'right' : 'left'};
                        direction: ${lang === 'ar' ? 'rtl' : 'ltr'};
                      }
                      .lux-input:focus {
                        border-bottom: 1px solid #92c26e;
                      }
                      .lux-input::placeholder {
                        color: rgba(255,255,255,0.3);
                        text-transform: uppercase;
                        letter-spacing: 1px;
                        font-size: 0.85rem;
                      }
                    `}</style>

                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                      <div style={{ flex: '1 1 45%' }}>
                        <input type="text" className="lux-input" placeholder={`${t.firstName || "First Name"} *`} value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} required />
                      </div>
                      <div style={{ flex: '1 1 45%' }}>
                        <input type="text" className="lux-input" placeholder={`${t.lastName || "Last Name"} *`} value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} required />
                      </div>
                    </div>
                    
                    <div>
                      <input type="tel" className="lux-input" placeholder={`${t.phoneInput || "Phone"} *`} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                    </div>
                    
                    <div>
                      <input type="email" className="lux-input" placeholder={`${t.emailInput || "E-mail"} *`} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                    </div>
                    
                    <div>
                      <input type="text" className="lux-input" placeholder={`${t.companyName || "Company name"} *`} value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} required />
                    </div>
                    
                    <button type="submit" style={{ marginTop: '1rem', width: '100%', padding: '1.2rem', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '50px', fontWeight: '800', cursor: 'pointer', background: '#92c26e', color: '#000000', border: 'none', transition: 'background 0.3s ease' }}>
                      {t.contactSend || "Submit"}
                    </button>
                  </form>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem', paddingLeft: '1rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4a6b4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <div>
                  <h5 style={{ fontSize: '1rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.2rem' }}>
                    {t.ourMailbox || "Our Mailbox:"}
                  </h5>
                  <p style={{ color: '#4a6b4a', fontSize: '0.95rem', fontWeight: '600' }}>{t.contactEmailAddress}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
