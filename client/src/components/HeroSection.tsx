import { portfolioData } from '../data/portfolio-data';
import { useLanguage } from '../hooks/useLanguage';

export const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                {t('hero.greeting')}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {portfolioData.personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                {t('hero.title')}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
                {t('hero.description')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-secondary text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-rocket mr-2"></i>
                {t('hero.cta.projects')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200"
              >
                <i className="fas fa-envelope mr-2"></i>
                {t('hero.cta.contact')}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 transform hover:scale-110">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 transform hover:scale-110">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href={`mailto:${portfolioData.contact.email}`} className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200 transform hover:scale-110">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Professional Photo */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={portfolioData.personalInfo.photo} 
                  alt={portfolioData.personalInfo.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg animate-bounce-slow">
                <i className="fas fa-laptop-code text-white text-2xl"></i>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <i className="fas fa-graduation-cap text-white text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
