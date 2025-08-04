import { PortfolioData, Translations } from '../types/portfolio';
import profilePhoto from '@assets/photo cv_1754311161081.png';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Mohamed Ali Chaoui",
    title: "Étudiant en Master Informatique à Bordeaux",
    description: "Curieux, rigoureux et passionné par les technologies. Développeur full-stack en devenir avec une solide base en informatique.",
    photo: profilePhoto
  },
  about: {
    description: "Titulaire d'une licence en informatique, je poursuis actuellement mes études en première année de master à l'Université de Bordeaux. Curieux, adaptable et motivé par les défis intellectuels, j'apprécie particulièrement le travail en équipe. Je suis pleinement engagé dans l'approfondissement de mes compétences et prêt à relever de nouveaux projets ambitieux.",
    qualities: ["Curieux", "Adaptable", "Motivé", "Équipe", "Organisé", "Communicatif"],
    education: [
      {
        degree: "Master 1 Informatique",
        institution: "Université de Bordeaux",
        period: "2024-2025"
      },
      {
        degree: "Licence Informatique",
        institution: "Université d'Avignon",
        period: "2020-2024"
      },
      {
        degree: "Baccalauréat Sciences Physiques",
        institution: "Fès, Maroc",
        period: "2019-2020"
      }
    ],
    languages: [
      { name: "Français", level: "Avancé", flag: "🇫🇷" },
      { name: "Anglais", level: "Courant", flag: "🇬🇧" },
      { name: "Arabe", level: "Maternel", flag: "🇲🇦" }
    ],
    certifications: [
      {
        name: "Linguaskill - Cambridge",
        issuer: "Cambridge Assessment English",
        date: "Décembre 2024",
        level: "Niveau B1 (CEFR)"
      }
    ]
  },
  skills: {
    programming: [
      { name: "Java", level: 90, icon: "fab fa-java", color: "#f89820" },
      { name: "Python", level: 85, icon: "fab fa-python", color: "#3776ab" },
      { name: "JavaScript", level: 80, icon: "fab fa-js-square", color: "#f7df1e" },
      { name: "PHP", level: 75, icon: "fab fa-php", color: "#777bb4" },
      { name: "C/C++", level: 80, icon: "fas fa-copyright", color: "#00599c" }
    ],
    frameworks: [
      { name: "Vue.js", level: 85, icon: "fab fa-vuejs", color: "#4fc08d" },
      { name: "Spring Boot", level: 80, icon: "fas fa-leaf", color: "#6db33f" },
      { name: "Git", level: 90, icon: "fab fa-git-alt", color: "#f05032" },
      { name: "Shell scripting", level: 75, icon: "fas fa-terminal", color: "#4eaa25" },
      { name: "Vite", level: 80, icon: "fas fa-bolt", color: "#ffd62e" }
    ],
    databases: [
      { name: "MySQL", level: 85, icon: "fas fa-database", color: "#4479a1" },
      { name: "PostgreSQL", level: 80, icon: "fas fa-elephant", color: "#336791" },
      { name: "Linux", level: 75, icon: "fab fa-linux", color: "#fcc624" },
      { name: "Réseaux TCP/IP", level: 70, icon: "fas fa-network-wired", color: "#28a745" },
      { name: "Windows Server", level: 65, icon: "fab fa-windows", color: "#0078d4" }
    ]
  },
  projects: [
    {
      id: "1",
      title: "Application client-serveur de recherche d'images",
      year: "2023",
      description: "Système de recherche d'images par similarité avec API REST, indexation pgvector et interface Vue.js.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Vue.js", "GitLab CI/CD"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-server"
    },
    {
      id: "2",
      title: "myBike – Site de gestion de commandes",
      year: "2023",
      description: "Site web pour un magasin de cyclisme avec système de gestion des commandes et des droits d'accès.",
      technologies: ["PHP", "PDO", "MySQL"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-bicycle"
    },
    {
      id: "3",
      title: "Plateforme de monitoring de serveurs",
      year: "2023",
      description: "Système de surveillance de serveurs et gestion des alertes développé en collaboration avec le C.E.R.T.",
      technologies: ["Bash", "Python"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-chart-line"
    },
    {
      id: "4",
      title: "Blog interactif",
      year: "2022",
      description: "Site web permettant aux utilisateurs de rechercher, publier et commenter des articles de blog.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-blog"
    },
    {
      id: "5",
      title: "Démineur en C++ et Python",
      year: "2020-2022",
      description: "Implémentation du jeu classique Démineur en appliquant les principes de la programmation orientée objet.",
      technologies: ["C++", "Python"],
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-gamepad"
    },
    {
      id: "6",
      title: "Compression et décompression de fichiers",
      year: "2021",
      description: "Implémentation d'un algorithme permettant la compression et la décompression réversible de fichiers texte.",
      technologies: ["C"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-file-archive"
    }
  ],
  contact: {
    email: "ali.chaoui.123@gmail.com",
    phone: "06 51 61 56 86",
    location: "Bordeaux, France",
    linkedin: "Mohamed Ali Chaoui"
  }
};

export const translations: Translations = {
  // Navigation
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.about': { fr: 'À propos', en: 'About' },
  'nav.skills': { fr: 'Compétences', en: 'Skills' },
  'nav.projects': { fr: 'Projets', en: 'Projects' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  
  // Hero Section
  'hero.greeting': { fr: '👋 Bonjour, je suis', en: '👋 Hello, I\'m' },
  'hero.title': { fr: 'Étudiant en Master Informatique à Bordeaux', en: 'Master\'s Computer Science Student in Bordeaux' },
  'hero.description': { fr: 'Curieux, rigoureux et passionné par les technologies. Développeur full-stack en devenir avec une solide base en informatique.', en: 'Curious, rigorous and passionate about technology. Aspiring full-stack developer with a solid foundation in computer science.' },
  'hero.cta.projects': { fr: 'Voir mes projets', en: 'View Projects' },
  'hero.cta.contact': { fr: 'Me contacter', en: 'Contact Me' },
  
  // About Section
  'about.title': { fr: 'À propos de moi', en: 'About Me' },
  'about.subtitle': { fr: 'Découvrez mon parcours et mes motivations dans le domaine de l\'informatique', en: 'Discover my journey and motivations in computer science' },
  'about.education': { fr: 'Parcours académique', en: 'Academic Background' },
  'about.languages': { fr: 'Langues', en: 'Languages' },
  'about.qualities': { fr: 'Mes qualités personnelles', en: 'My Personal Qualities' },
  'about.certifications': { fr: 'Certifications', en: 'Certifications' },
  'about.availability': { fr: 'Disponibilité', en: 'Availability' },
  'about.availability.text': { fr: 'Je suis actuellement à la recherche d\'opportunités de stage et d\'emploi dans le domaine du développement logiciel.', en: 'I am currently looking for internship and job opportunities in software development.' },
  'about.available': { fr: 'Disponible pour de nouveaux projets', en: 'Available for new projects' },
  
  // Skills Section
  'skills.title': { fr: 'Compétences techniques', en: 'Technical Skills' },
  'skills.subtitle': { fr: 'Un aperçu de mes connaissances et outils de développement', en: 'An overview of my knowledge and development tools' },
  'skills.programming': { fr: 'Langages', en: 'Languages' },
  'skills.frameworks': { fr: 'Frameworks & Outils', en: 'Frameworks & Tools' },
  'skills.databases': { fr: 'Bases de données & Systèmes', en: 'Databases & Systems' },
  
  // Projects Section
  'projects.title': { fr: 'Projets académiques', en: 'Academic Projects' },
  'projects.subtitle': { fr: 'Découvrez quelques-uns de mes projets réalisés durant mon cursus universitaire', en: 'Discover some of my projects completed during my university studies' },
  'projects.github': { fr: 'GitHub', en: 'GitHub' },
  'projects.demo': { fr: 'Demo', en: 'Demo' },
  'projects.cv.title': { fr: 'Téléchargez mon CV complet', en: 'Download my complete CV' },
  'projects.cv.description': { fr: 'Découvrez l\'ensemble de mon parcours, mes expériences et mes réalisations', en: 'Discover my complete journey, experiences and achievements' },
  'projects.cv.download': { fr: 'Télécharger le CV (PDF)', en: 'Download CV (PDF)' },
  
  // Contact Section
  'contact.title': { fr: 'Contactez-moi', en: 'Contact Me' },
  'contact.subtitle': { fr: 'N\'hésitez pas à me contacter pour discuter d\'opportunités ou de projets', en: 'Feel free to contact me to discuss opportunities or projects' },
  'contact.info': { fr: 'Informations de contact', en: 'Contact Information' },
  'contact.form.name': { fr: 'Nom complet', en: 'Full Name' },
  'contact.form.email': { fr: 'Email', en: 'Email' },
  'contact.form.subject': { fr: 'Sujet', en: 'Subject' },
  'contact.form.message': { fr: 'Message', en: 'Message' },
  'contact.form.placeholder': { fr: 'Décrivez votre projet ou votre demande...', en: 'Describe your project or request...' },
  'contact.form.send': { fr: 'Envoyer le message', en: 'Send Message' },
  
  // Footer
  'footer.description': { fr: 'Étudiant en Master Informatique passionné par le développement full-stack et les nouvelles technologies.', en: 'Master\'s Computer Science student passionate about full-stack development and new technologies.' },
  'footer.navigation': { fr: 'Navigation', en: 'Navigation' },
  'footer.contact': { fr: 'Contact', en: 'Contact' },
  'footer.rights': { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  'footer.made': { fr: 'Conçu avec ❤️ et React', en: 'Made with ❤️ and React' }
};
