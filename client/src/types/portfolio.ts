export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
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
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location?: string;
}

export interface LanguageInfo {
  name: string;
  level: string;
  flag: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  level?: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    description: string;
    photo: string;
  };
  about: {
    description: string;
    qualities: string[];
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
