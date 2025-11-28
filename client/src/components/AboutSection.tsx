import { portfolioData } from '../data/portfolio-data';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Languages, CheckCircle, Award, Download, Circle } from 'lucide-react';

export const AboutSection = () => {
  const { t, resolveLanguage } = useLanguage();

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-mohamed-ali-chaoui.pdf';
    link.download = 'CV-Mohamed-Ali-Chaoui.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {resolveLanguage(portfolioData.about.description)}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Briefcase className="text-primary mr-3 w-6 h-6" />
                Expériences professionnelles
              </h3>
              <div className="space-y-3">
                {portfolioData.about.experiences.map((exp, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium">{resolveLanguage(exp.position)}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{resolveLanguage(exp.period)}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{resolveLanguage(exp.description)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <GraduationCap className="text-primary mr-3 w-6 h-6" />
                {t('about.education')}
              </h3>
              <div className="space-y-3">
                {portfolioData.about.education.map((edu, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium">{resolveLanguage(edu.degree)}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{resolveLanguage(edu.institution)} ({resolveLanguage(edu.period)})</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Languages className="text-primary mr-3 w-6 h-6" />
                {t('about.languages')}
              </h3>
              <div className="space-y-3">
                {portfolioData.about.languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white dark:bg-gray-700 rounded-lg">
                    <p className="font-medium text-lg">{resolveLanguage(lang.name)}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full">{resolveLanguage(lang.level)}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{t('about.qualities')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {portfolioData.about.qualities.map((quality, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                    <span>{resolveLanguage(quality)}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">{t('about.certifications')}</h3>
              {portfolioData.about.certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg">
                  <Award className="text-accent text-xl w-6 h-6 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">{resolveLanguage(cert.name)}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {resolveLanguage(cert.level!)} - {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{t('about.availability')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('about.availability.text')}
              </p>
              <div className="flex items-center space-x-2 text-accent">
                <Circle className="w-3 h-3 fill-current" />
                <span className="font-medium">{t('about.available')}</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <button
                onClick={downloadCV}
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-secondary text-white rounded-lg font-medium transition-all duration-200 shadow-lg transform hover:scale-105"
              >
                <Download className="mr-2 w-5 h-5" />
                {t('projects.cv.download')}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
