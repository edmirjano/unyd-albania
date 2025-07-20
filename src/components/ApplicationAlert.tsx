'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ApplicationAlert() {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useLanguage();

  if (!isVisible) return null;

  return (
    <section id="aplikimi" className="bg-red-300 text-red-900 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left side: Icon and Content */}
          <div className="flex items-center space-x-4 flex-1 mr-4">
            {/* Alert Icon */}
            <div className="flex-shrink-0">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Alert Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold mb-1">
                {t('alert.title')}
              </h3>
              <p className="text-red-800 text-sm">
                {t('alert.description')}
              </p>
            </div>
          </div>

          {/* Right side: CTA Button and Close Button */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* CTA Button */}
            <button className="bg-red-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-800 transition-colors whitespace-nowrap">
              {t('alert.cta')}
            </button>

            {/* Close Button */}
            <button 
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0 p-2 hover:bg-red-400 rounded-lg transition-colors" 
              aria-label="Close alert"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 