import { portfolioData } from '../data/portfolio-data';
import { useLanguage } from '../hooks/useLanguage';

export const AboutSection = () => {
  const { t } = useLanguage();

  const downloadCV = () => {
    // Create a link to the CV PDF from the attached assets
    const link = document.createElement('a');
    link.href = '/cv-mohamed-ali-chaoui.pdf'; // This would be the uploaded CV
    link.download = 'CV-Mohamed-Ali-Chaoui.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <i className="fas fa-graduation-cap text-primary mr-3"></i>
                {t('about.education')}
              </h3>
              <div className="space-y-3">
                {portfolioData.about.education.map((edu, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium">{edu.degree}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{edu.institution} ({edu.period})</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <i className="fas fa-language text-primary mr-3"></i>
                {t('about.languages')}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {portfolioData.about.languages.map((lang, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl mb-1">{lang.flag}</div>
                    <p className="font-medium">{lang.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{t('about.qualities')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {portfolioData.about.qualities.map((quality, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <i className="fas fa-check-circle text-primary"></i>
                    <span>{quality}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">{t('about.certifications')}</h3>
              {portfolioData.about.certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg">
                  <i className="fas fa-certificate text-accent text-xl"></i>
                  <div>
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.level} - {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{t('about.availability')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('about.availability.text')}
              </p>
              <div className="flex items-center space-x-2 text-accent">
                <i className="fas fa-circle text-xs"></i>
                <span className="font-medium">{t('about.available')}</span>
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={downloadCV}
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-secondary text-white rounded-lg font-medium transition-all duration-200 shadow-lg"
              >
                <i className="fas fa-download mr-2"></i>
                Télécharger mon CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
