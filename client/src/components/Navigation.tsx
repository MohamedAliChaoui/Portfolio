import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { useLanguage } from '../hooks/useLanguage';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { currentLanguage, toggleLanguage, t } = useLanguage();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo MAC */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* Custom MAC Logo */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">MAC</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                <i className="fas fa-code text-white text-xs"></i>
              </div>
            </div>
            <div className="hidden sm:block">
              <h3 className="font-semibold text-gray-900 dark:text-white">Mohamed Ali Chaoui</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="hover:text-primary transition-colors duration-200"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-primary transition-colors duration-200"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="hover:text-primary transition-colors duration-200"
            >
              {t('nav.skills')}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="hover:text-primary transition-colors duration-200"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-primary transition-colors duration-200"
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {currentLanguage === 'fr' ? 'EN' : 'FR'}
            </button>
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <i className={`fas ${theme === 'dark' ? 'fa-sun text-yellow-400' : 'fa-moon text-gray-600'}`}></i>
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2 space-y-2">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 hover:text-primary transition-colors duration-200"
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 hover:text-primary transition-colors duration-200"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left py-2 hover:text-primary transition-colors duration-200"
            >
              {t('nav.skills')}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left py-2 hover:text-primary transition-colors duration-200"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 hover:text-primary transition-colors duration-200"
            >
              {t('nav.contact')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
