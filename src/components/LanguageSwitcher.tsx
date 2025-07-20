'use client';

import { useLanguage, Language } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    {
      code: 'sq' as Language,
      name: 'Shqip',
      flag: '🇦🇱'
    },
    {
      code: 'en' as Language,
      name: 'English', 
      flag: '🇺🇸'
    }
  ];

  return (
    <div className="relative">
      <div className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-lg p-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`
              flex items-center space-x-1 px-2 py-1 rounded transition-colors text-sm
              ${language === lang.code 
                ? 'bg-white text-blue-600 font-medium' 
                : 'text-white hover:bg-white hover:bg-opacity-20'
              }
            `}
            aria-label={`Switch to ${lang.name}`}
          >
            <span className="text-sm">{lang.flag}</span>
            <span className="hidden sm:inline text-xs">{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
} 