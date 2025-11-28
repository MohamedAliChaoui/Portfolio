import React, { createContext, useState, useCallback, ReactNode } from 'react';
import { Language, LocalizedContent } from '../types/portfolio';
import { translations } from '../data/portfolio-data';

interface LanguageContextType {
    currentLanguage: Language;
    toggleLanguage: () => void;
    t: (key: string) => string;
    resolveLanguage: (content: LocalizedContent) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
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

    const resolveLanguage = useCallback((content: LocalizedContent): string => {
        if (typeof content === 'string') {
            return content;
        }
        return content[currentLanguage];
    }, [currentLanguage]);

    return (
        <LanguageContext.Provider value={{ currentLanguage, toggleLanguage, t, resolveLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
