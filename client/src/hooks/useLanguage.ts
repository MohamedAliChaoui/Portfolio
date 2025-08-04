import { useState, useCallback } from 'react';
import { Language, Translations } from '../types/portfolio';
import { translations } from '../data/portfolio-data';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('fr');

  const toggleLanguage = useCallback(() => {
    setCurrentLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  }, []);

  const t = useCallback((key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[currentLanguage] || key;
  }, [currentLanguage]);

  return {
    currentLanguage,
    toggleLanguage,
    t
  };
};
