"use client";

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MethodologyModal({ isOpen, onClose }: MethodologyModalProps) {
  const { t } = useLanguage();

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>{t.methodologyTitle}</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          {t.methodologyDesc}
        </p>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button className="btn btn-primary" onClick={onClose}>{t.close}</button>
        </div>
      </div>
    </div>
  );
}
