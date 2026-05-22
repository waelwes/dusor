"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '40vh', padding: '140px 0 60px 0', display: 'flex', alignItems: 'center', background: '#000000', color: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#ffffff', fontWeight: '800' }}>
              {t.contactTitle}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
              {t.home} - {t.contact}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section" style={{ background: '#ffffff', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ 
            background: '#f8faf6', 
            padding: '3.5rem', 
            borderRadius: '24px', 
            border: '1px solid rgba(146, 194, 110, 0.2)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.05)'
          }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label htmlFor="name" style={{ fontWeight: '600', color: '#1a4a1a', marginBottom: '0.8rem', display: 'block' }}>{t.contactName}</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  style={{ borderRadius: '12px', padding: '1.2rem', border: '1px solid rgba(146, 194, 110, 0.3)', background: '#ffffff' }}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '2rem' }}>
                <label htmlFor="email" style={{ fontWeight: '600', color: '#1a4a1a', marginBottom: '0.8rem', display: 'block' }}>{t.contactEmail}</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  style={{ borderRadius: '12px', padding: '1.2rem', border: '1px solid rgba(146, 194, 110, 0.3)', background: '#ffffff' }}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              
              <div className="form-group" style={{ marginBottom: '2.5rem' }}>
                <label htmlFor="message" style={{ fontWeight: '600', color: '#1a4a1a', marginBottom: '0.8rem', display: 'block' }}>{t.contactMessage}</label>
                <textarea
                  id="message"
                  className="form-control"
                  style={{ borderRadius: '12px', padding: '1.2rem', border: '1px solid rgba(146, 194, 110, 0.3)', background: '#ffffff', minHeight: '180px' }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem', borderRadius: '12px', fontWeight: '700' }}>
                {t.contactSend}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
