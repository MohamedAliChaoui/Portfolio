import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolio-data';
import { useLanguage } from '../hooks/useLanguage';

export const SkillsSection = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill }: { skill: any }) => (
    <div className="skill-item p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-center mb-3">
        <span className="flex items-center font-medium">
          <i className={`${skill.icon} mr-3 text-2xl`} style={{ color: skill.color }}></i>
          {skill.name}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div 
          className="skill-bar h-3 rounded-full transition-all duration-1000 shadow-sm"
          style={{ 
            backgroundColor: skill.color,
            width: isVisible ? `${skill.level}%` : '0%'
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('skills.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fas fa-code text-primary mr-3"></i>
              {t('skills.programming')}
            </h3>
            <div className="space-y-3">
              {portfolioData.skills.programming.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fas fa-tools text-primary mr-3"></i>
              {t('skills.frameworks')}
            </h3>
            <div className="space-y-3">
              {portfolioData.skills.frameworks.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Databases & Systems */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fas fa-database text-primary mr-3"></i>
              {t('skills.databases')}
            </h3>
            <div className="space-y-3">
              {portfolioData.skills.databases.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
