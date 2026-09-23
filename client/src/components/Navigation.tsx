import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { useLanguage } from '../hooks/useLanguage';
import { Menu, X, Sun, Moon, FileDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="relative">
              <img src="/favicon.svg" alt="Logo MAC" className="w-10 h-10 rounded-xl shadow-md hover:scale-105 transition-transform" />
            </div>
            <div className="hidden sm:block">
              <h3 className="font-semibold text-gray-900 dark:text-white">Mohamed Ali Chaoui</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('nav.role')}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-primary transition-colors duration-200 capitalize"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Direct CV Download button */}
            <a
              href="/cv-mohamed-ali-chaoui.pdf"
              download="CV-Mohamed-Ali-Chaoui.pdf"
              className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white dark:bg-primary/20 dark:hover:bg-primary dark:text-primary dark:hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
              title="Télécharger mon CV (PDF)"
            >
              <FileDown className="w-4 h-4 mr-1.5" />
              <span>CV (PDF)</span>
            </a>

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
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-primary" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 hover:text-primary transition-colors duration-200 capitalize"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
              <a
                href="/cv-mohamed-ali-chaoui.pdf"
                download="CV-Mohamed-Ali-Chaoui.pdf"
                className="flex items-center justify-center w-full py-2.5 mt-3 bg-primary text-white rounded-lg text-sm font-medium transition-colors"
              >
                <FileDown className="w-4 h-4 mr-2" />
                {t('projects.cv.download')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
