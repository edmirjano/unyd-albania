'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-base">UN</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">UN Youth Delegates</h1>
              <p className="text-xs text-gray-600">UNA Albania</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#programi" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              {t('nav.about')}
            </a>
            <a href="#aplikimi" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              {t('nav.application')}
            </a>
            <a href="#sukses" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              {t('nav.success')}
            </a>
            <a href="#pergatitja" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              {t('nav.preparation')}
            </a>
            <a href="#kontakti" className="text-gray-700 hover:text-blue-600 transition-colors text-sm">
              {t('nav.contact')}
            </a>
            
            {/* Language Switcher */}
            <div className="bg-blue-600 rounded-lg p-1">
              <LanguageSwitcher />
            </div>
            
            <a 
              href="https://unaalbania.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              UNA Albania
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a 
                href="#programi" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a 
                href="#aplikimi" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.application')}
              </a>
              <a 
                href="#sukses" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.success')}
              </a>
              <a 
                href="#pergatitja" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.preparation')}
              </a>
              <a 
                href="#kontakti" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
              
              {/* Mobile Language Switcher */}
              <div className="bg-blue-600 rounded-lg p-1 w-fit">
                <LanguageSwitcher />
              </div>
              
              <a 
                href="https://unaalbania.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-sm inline-block w-fit"
              >
                UNA Albania
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 