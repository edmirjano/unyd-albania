'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Import translation files
import enTranslations from '@/locales/en.json';
import sqTranslations from '@/locales/sq.json';

// Types
export type Language = 'en' | 'sq';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  isLoading: boolean;
}

const translations = {
  en: enTranslations,
  sq: sqTranslations,
};

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper function to get nested object value by dot notation
function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

// Language Provider
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('sq'); // Default to Albanian
  const [isLoading, setIsLoading] = useState(true);

  // Initialize language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'sq')) {
      setLanguageState(savedLanguage);
    }
    setIsLoading(false);
  }, []);

  // Update localStorage when language changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function
  const t = (key: string, fallback?: string): string => {
    const translation = getNestedValue(translations[language], key);
    
    if (translation !== undefined) {
      return translation;
    }
    
    // If translation not found, try fallback language (Albanian)
    if (language !== 'sq') {
      const fallbackTranslation = getNestedValue(translations.sq, key);
      if (fallbackTranslation !== undefined) {
        return fallbackTranslation;
      }
    }
    
    // Return fallback text or the key itself
    return fallback || key;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        t, 
        isLoading 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// Hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 