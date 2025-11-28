export type LocalizedContent = string | { fr: string; en: string };

export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface Project {
  id: string;
  title: LocalizedContent;
  year: string;
  description: LocalizedContent;
  technologies: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Education {
  degree: LocalizedContent;
  institution: LocalizedContent;
  period: LocalizedContent;
  location?: string;
}

export interface LanguageInfo {
  name: LocalizedContent;
  level: LocalizedContent;
  flag?: string;
}

export interface Certification {
  name: LocalizedContent;
  issuer: string;
  date: string;
  level?: LocalizedContent;
}

export interface Experience {
  position: LocalizedContent;
  company: string;
  period: LocalizedContent;
  description: LocalizedContent;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: LocalizedContent;
    description: LocalizedContent;
    photo: string;
  };
  about: {
    description: LocalizedContent;
    qualities: LocalizedContent[];
    experiences: Experience[];
    education: Education[];
    languages: LanguageInfo[];
    certifications: Certification[];
  };
  skills: {
    programming: Skill[];
    frameworks: Skill[];
    databases: Skill[];
  };
  projects: Project[];
  contact: ContactInfo;
}

export type Language = 'fr' | 'en';

export interface Translations {
  [key: string]: {
    fr: string;
    en: string;
  };
}
