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
    <div className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="flex items-center">
          <i className={`${skill.icon} mr-2`} style={{ color: skill.color }}></i>
          {skill.name}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="skill-bar h-2 rounded-full transition-all duration-1000"
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
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fas fa-code text-primary mr-3"></i>
              {t('skills.programming')}
            </h3>
            <div className="space-y-4">
              {portfolioData.skills.programming.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fas fa-tools text-primary mr-3"></i>
              {t('skills.frameworks')}
            </h3>
            <div className="space-y-4">
              {portfolioData.skills.frameworks.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Databases & Systems */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <i className="fas fa-database text-primary mr-3"></i>
              {t('skills.databases')}
            </h3>
            <div className="space-y-4">
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
