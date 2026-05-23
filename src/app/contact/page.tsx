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
      <section className="hero" style={{ minHeight: '40vh', padding: '140px 0 60px 0', display: 'flex', alignItems: 'center', background: '#92c26e', color: '#000000' }}>
        <div className="container">
          <div style={{ textAlign: lang === 'ar' ? 'right' : 'left', width: '100%' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#1a1a1a', fontWeight: '800' }}>
              {t.contactTitle}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(26,26,26,0.8)', lineHeight: '1.8', fontWeight: '500' }}>
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
                  <p style={{ color: '#666666', lineHeight: '1.8', fontSize: '1rem' }}>
                    {t.contactAddress}
                  </p>
                  <p style={{ color: '#666666', lineHeight: '1.8', fontSize: '1rem', marginTop: '0.5rem' }}>
                    {t.contactPhoneWa || "Phone & WhatsApp"}: <span style={{ color: '#4a6b4a', fontWeight: '600' }}>{t.contactPhone}</span>
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
                background: '#000000', 
                padding: '3rem', 
                borderRadius: '8px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.5rem' }}>
                  {t.readyToGetStarted || "Ready to Get Started?"}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
                  {t.formSubtext || "Your email address will not be published. Required fields are marked *"}
                </p>
                
                <div style={{ background: '#ffffff', borderRadius: '8px', padding: '2rem' }}>
                  <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <input
                        type="text"
                        placeholder={`${t.firstName || "First Name"} *`}
                        style={{ width: '100%', padding: '1rem 0', border: 'none', borderBottom: '1px solid #e0e0e0', outline: 'none', fontSize: '1rem', color: '#333333', background: 'transparent' }}
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div style={{ marginBottom: '1.5rem' }}>
                      <input
                        type="text"
                        placeholder={`${t.lastName || "Last Name"} *`}
                        style={{ width: '100%', padding: '1rem 0', border: 'none', borderBottom: '1px solid #e0e0e0', outline: 'none', fontSize: '1rem', color: '#333333', background: 'transparent' }}
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div style={{ marginBottom: '1.5rem' }}>
                      <input
                        type="tel"
                        placeholder={`${t.phoneInput || "Phone"} *`}
                        style={{ width: '100%', padding: '1rem 0', border: 'none', borderBottom: '1px solid #e0e0e0', outline: 'none', fontSize: '1rem', color: '#333333', background: 'transparent' }}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div style={{ marginBottom: '1.5rem' }}>
                      <input
                        type="email"
                        placeholder={`${t.emailInput || "E-mail"} *`}
                        style={{ width: '100%', padding: '1rem 0', border: 'none', borderBottom: '1px solid #e0e0e0', outline: 'none', fontSize: '1rem', color: '#333333', background: 'transparent' }}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div style={{ marginBottom: '2.5rem' }}>
                      <input
                        type="text"
                        placeholder={`${t.companyName || "Company name"} *`}
                        style={{ width: '100%', padding: '1rem 0', border: 'none', borderBottom: '1px solid #e0e0e0', outline: 'none', fontSize: '1rem', color: '#333333', background: 'transparent' }}
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        required
                      />
                    </div>
                    
                    <button type="submit" style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem', borderRadius: '4px', fontWeight: '700', cursor: 'pointer', background: '#92c26e', color: '#1a1a1a', border: 'none' }}>
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
