"use client";

import React from 'react';

interface ServiceIconProps {
  index: number;
}

export default function ServiceIcon({ index }: ServiceIconProps) {
  // Modern, clean, minimal custom line-art SVG icons
  switch (index) {
    case 0: // Water Resources Management
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7z" />
          <path d="M12 18a3 3 0 0 0 3-3" strokeDasharray="2 2" />
        </svg>
      );
    case 1: // Smart Agriculture
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22c1.25-6.7 5.85-11.75 12-14" />
          <path d="M12 2C6.15 2 2.65 6.4 2 12.2" />
          <path d="M22 2c-5.85 0-9.35 4.4-10 10.2" />
          <path d="M12 8.5c2 2.5 4 3 8 3.5" />
          <path d="M12 13.5c-2 2.5-4 3-8 3.5" />
        </svg>
      );
    case 2: // Geospatial Survey
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M12 2v20" />
        </svg>
      );
    case 3: // Project Development
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 20H4V4h16v16z" />
          <path d="M12 4v16" />
          <path d="M4 12h16" />
          <path d="M2 2l20 20" strokeDasharray="3 3" />
        </svg>
      );
    case 4: // Supply Chains
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <line x1="12" y1="8" x2="19" y2="16" />
          <line x1="12" y1="8" x2="5" y2="16" />
          <line x1="8" y1="19" x2="16" y2="19" />
        </svg>
      );
    default:
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}
