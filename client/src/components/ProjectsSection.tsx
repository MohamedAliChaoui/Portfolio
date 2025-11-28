import { portfolioData } from '../data/portfolio-data';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Download } from 'lucide-react';

export const ProjectsSection = () => {
  const { t, resolveLanguage } = useLanguage();

  const getTechColor = (tech: string) => {
    const colorMap: { [key: string]: string } = {
      'Java': 'bg-orange-100 text-orange-800',
      'Spring Boot': 'bg-green-100 text-green-800',
      'PostgreSQL': 'bg-blue-100 text-blue-800',
      'Vue.js': 'bg-green-100 text-green-800',
      'PHP': 'bg-purple-100 text-purple-800',
      'PDO': 'bg-blue-100 text-blue-800',
      'MySQL': 'bg-blue-100 text-blue-800',
      'Bash': 'bg-gray-100 text-gray-800',
      'Python': 'bg-blue-100 text-blue-800',
      'HTML': 'bg-orange-100 text-orange-800',
      'CSS': 'bg-blue-100 text-blue-800',
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'C++': 'bg-blue-100 text-blue-800',
      'C': 'bg-blue-100 text-blue-800',
      'GitLab CI/CD': 'bg-orange-100 text-orange-800'
    };
    return colorMap[tech] || 'bg-gray-100 text-gray-800';
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-mohamed-ali-chaoui.pdf';
    link.download = 'CV-Mohamed-Ali-Chaoui.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={resolveLanguage(project.title)}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {project.year}
                  </span>
                  <i className={`${project.icon} text-primary text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{resolveLanguage(project.title)}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {resolveLanguage(project.description)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs rounded ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={project.githubUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary hover:bg-secondary text-white text-sm rounded-lg transition-colors duration-200 min-h-[40px]"
                  >
                    <Github className="mr-2 w-4 h-4" />
                    {t('projects.github')}
                  </a>
                  <a
                    href={project.demoUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white text-sm rounded-lg transition-colors duration-200 min-h-[40px]"
                  >
                    <ExternalLink className="mr-2 w-4 h-4" />
                    {t('projects.demo')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CV Download Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl inline-block shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">{t('projects.cv.title')}</h3>
            <p className="text-blue-100 mb-6">{t('projects.cv.description')}</p>
            <button
              onClick={downloadCV}
              className="inline-flex items-center px-8 py-4 bg-white text-primary hover:bg-gray-100 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Download className="mr-3 w-5 h-5" />
              {t('projects.cv.download')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
