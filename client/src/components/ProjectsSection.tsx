import { portfolioData } from '../data/portfolio-data';
import { useLanguage } from '../hooks/useLanguage';

export const ProjectsSection = () => {
  const { t } = useLanguage();

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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <div 
              key={project.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {project.year}
                  </span>
                  <i className={`${project.icon} text-primary text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
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
                <div className="flex space-x-3">
                  <a 
                    href={project.githubUrl || "#"} 
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary hover:bg-secondary text-white text-sm rounded-lg transition-colors duration-200"
                  >
                    <i className="fab fa-github mr-2"></i>
                    {t('projects.github')}
                  </a>
                  <a 
                    href={project.demoUrl || "#"} 
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white text-sm rounded-lg transition-colors duration-200"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    {t('projects.demo')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CV Download Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl inline-block shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">{t('projects.cv.title')}</h3>
            <p className="text-blue-100 mb-6">{t('projects.cv.description')}</p>
            <button 
              onClick={downloadCV}
              className="inline-flex items-center px-8 py-4 bg-white text-primary hover:bg-gray-100 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-download mr-3 text-xl"></i>
              {t('projects.cv.download')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
