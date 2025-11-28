import { PortfolioData, Translations, LanguageInfo } from '../types/portfolio';
import profilePhoto from '@assets/photo cv_1754311161081.jpeg';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Mohamed Ali Chaoui",
    title: {
      fr: "Étudiant en Master Informatique à Bordeaux",
      en: "Master's Computer Science Student in Bordeaux"
    },
    description: {
      fr: "Curieux, rigoureux et passionné par les technologies. Développeur full-stack en devenir avec une solide base en informatique.",
      en: "Curious, rigorous and passionate about technology. Aspiring full-stack developer with a solid foundation in computer science."
    },
    photo: profilePhoto
  },
  about: {
    description: {
      fr: "Titulaire d'une licence en informatique, je poursuis actuellement mes études en première année de master à l'Université de Bordeaux. Curieux, adaptable et motivé par les défis intellectuels, j'apprécie particulièrement le travail en équipe. Soucieux de développer mon expertise, je suis pleinement engagé dans l'approfondissement de mes compétences et prêt à relever de nouveaux projets ambitieux.",
      en: "Holder of a Bachelor's degree in Computer Science, I am currently pursuing my Master's degree at the University of Bordeaux. Curious, adaptable and motivated by intellectual challenges, I enjoy teamwork. I am fully committed to deepening my skills and ready to take on ambitious new projects."
    },
    qualities: [
      { fr: "Communication", en: "Communication" },
      { fr: "Esprit d'équipe", en: "Teamwork" },
      { fr: "Organisation", en: "Organization" },
      { fr: "Gestion des tâches", en: "Task Management" },
      { fr: "Adaptabilité", en: "Adaptability" },
      { fr: "Motivation", en: "Motivation" }
    ],
    experiences: [
      {
        position: { fr: "Equipier de commerce", en: "Sales Associate" },
        company: "AUCHAN",
        period: { fr: "Août 2024 - Présent", en: "August 2024 - Present" },
        description: { fr: "Accueil client, gestion des stocks et support commercial", en: "Customer service, stock management and commercial support" }
      },
      {
        position: { fr: "Expert en inventaire", en: "Inventory Expert" },
        company: "RGIS",
        period: { fr: "Novembre 2021 - Juin 2024", en: "November 2021 - June 2024" },
        description: { fr: "Réalisation d'inventaires précis et gestion des données", en: "Precise inventory execution and data management" }
      }
    ],
    education: [
      {
        degree: { fr: "Master 1 - Université de Bordeaux", en: "Master 1 - University of Bordeaux" },
        institution: { fr: "Informatique", en: "Computer Science" },
        period: { fr: "Septembre 2025 – Juin 2026", en: "September 2025 – June 2026" }
      },
      {
        degree: { fr: "Licence 3 - Université de Bordeaux", en: "Bachelor 3 - University of Bordeaux" },
        institution: { fr: "Informatique", en: "Computer Science" },
        period: { fr: "Septembre 2024 – Juin 2025", en: "September 2024 – June 2025" }
      },
      {
        degree: { fr: "Licence 1 et 2 - Université d'Avignon", en: "Bachelor 1 & 2 - University of Avignon" },
        institution: { fr: "Informatique", en: "Computer Science" },
        period: { fr: "Septembre 2020 – Juin 2024", en: "September 2020 – June 2024" }
      },
      {
        degree: { fr: "Baccalauréat Science Physique et Chimie", en: "Baccalaureate Physics and Chemistry" },
        institution: "Fès, Maroc",
        period: { fr: "Septembre 2019 – Juin 2020", en: "September 2019 – June 2020" }
      }
    ],
    languages: [
      { name: { fr: "FRANÇAIS", en: "FRENCH" }, level: { fr: "Avancé", en: "Advanced" } },
      { name: { fr: "ANGLAIS", en: "ENGLISH" }, level: { fr: "Courant", en: "Fluent" } },
      { name: { fr: "ARABE", en: "ARABIC" }, level: { fr: "Langue maternelle", en: "Native" } }
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
      { name: "C/C++", level: 90, icon: "devicon-cplusplus-plain colored", color: "#00599c" },
      { name: "Java", level: 90, icon: "devicon-java-plain colored", color: "#f89820" },
      { name: "PHP", level: 85, icon: "devicon-php-plain colored", color: "#777bb4" },
      { name: "Python", level: 85, icon: "devicon-python-plain colored", color: "#3776ab" },
      { name: "OCaml", level: 80, icon: "fas fa-code", color: "#ec6813" },
      { name: "JavaScript", level: 80, icon: "devicon-javascript-plain colored", color: "#f7df1e" },
      { name: "HTML/CSS", level: 85, icon: "devicon-html5-plain colored", color: "#e34f26" },
      { name: "Julia", level: 70, icon: "fas fa-calculator", color: "#9558b2" },
      { name: "Coq", level: 65, icon: "fas fa-cogs", color: "#d2691e" }
    ],
    frameworks: [
      { name: "Spring Boot", level: 85, icon: "devicon-spring-plain colored", color: "#6db33f" },
      { name: "Vue.js", level: 85, icon: "devicon-vuejs-plain colored", color: "#4fc08d" },
      { name: "Vite", level: 80, icon: "fas fa-bolt", color: "#ffd62e" },
      { name: "Shell scripting", level: 75, icon: "devicon-bash-plain colored", color: "#4eaa25" },
      { name: "jQuery", level: 70, icon: "devicon-jquery-plain colored", color: "#0769ad" }
    ],
    databases: [
      { name: "MySQL", level: 90, icon: "devicon-mysql-plain colored", color: "#4479a1" },
      { name: "PostgreSQL", level: 85, icon: "devicon-postgresql-plain colored", color: "#336791" },
      { name: "PL/SQL", level: 80, icon: "fas fa-database", color: "#ff6600" },
      { name: "Linux/Ubuntu Server", level: 80, icon: "devicon-linux-plain colored", color: "#fcc624" },
      { name: "Windows Server", level: 75, icon: "devicon-windows8-original colored", color: "#0078d4" },
      { name: "VMware", level: 70, icon: "fas fa-server", color: "#607078" },
      { name: "Cisco (VLAN, Routing)", level: 75, icon: "fas fa-network-wired", color: "#1ba0d7" }
    ]
  },
  projects: [
    {
      id: "1",
      title: { fr: "Application client-serveur", en: "Client-Server Application" },
      year: "2023",
      description: { fr: "Développement d'un système client-serveur de recherche d'images par similarité, avec API REST, indexation pgvector, interface Vue.js et CI/CD GitLab.", en: "Development of a client-server system for image similarity search, with REST API, pgvector indexing, Vue.js interface and GitLab CI/CD." },
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Vue.js", "GitLab CI/CD"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-server"
    },
    {
      id: "2",
      title: { fr: "Création d'un site web (myBike)", en: "Website Creation (myBike)" },
      year: "2023",
      description: { fr: "Développement d'un site de gestion de commandes pour un magasin de cyclisme.", en: "Development of an order management website for a cycling shop." },
      technologies: ["PHP", "PDO"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-bicycle"
    },
    {
      id: "3",
      title: { fr: "Plate-forme de Monitoring", en: "Monitoring Platform" },
      year: "2023",
      description: { fr: "Surveillance de serveurs et gestion des alertes en lien avec le C.E.R.T., via Bash et Python.", en: "Server monitoring and alert management in connection with C.E.R.T., via Bash and Python." },
      technologies: ["Bash", "Python"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-chart-line"
    },
    {
      id: "4",
      title: { fr: "Création d'un site web (Blog)", en: "Website Creation (Blog)" },
      year: "2022",
      description: { fr: "Développement d'un site interactif permettant aux utilisateurs de rechercher, publier et commenter des articles.", en: "Development of an interactive site allowing users to search, publish and comment on articles." },
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-blog"
    },
    {
      id: "5",
      title: { fr: "Démineur en C++", en: "Minesweeper in C++" },
      year: "2020/2022",
      description: { fr: "Développement du jeu en Python et en C++ en appliquant la programmation orientée objet.", en: "Development of the game in Python and C++ applying object-oriented programming." },
      technologies: ["C++", "Python"],
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-gamepad"
    },
    {
      id: "6",
      title: { fr: "Compression et décompression de Fichiers", en: "File Compression and Decompression" },
      year: "2021",
      description: { fr: "Implémentation d'un algorithme permettant la compression et la réversibilité des fichiers texte.", en: "Implementation of an algorithm allowing compression and reversibility of text files." },
      technologies: ["C"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-file-archive"
    }
  ],
  contact: {
    email: "ali.chaoui.123@gmail.com",
    phone: "06 51 61 56 86",
    location: "Bordeaux, France",
    linkedin: "https://www.linkedin.com/in/mohamed-ali-chaoui-25151b196",
    github: "https://github.com/MohamedAliChaoui"
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
  'about.description': { fr: 'Titulaire d\'une licence en informatique, je poursuis actuellement mes études en première année de master à l\'Université de Bordeaux. Curieux, adaptable et motivé par les défis intellectuels, j\'apprécie particulièrement le travail en équipe. Je suis pleinement engagé dans l\'approfondissement de mes compétences et prêt à relever de nouveaux projets ambitieux.', en: 'Holder of a Bachelor\'s degree in Computer Science, I am currently pursuing my Master\'s degree at the University of Bordeaux. Curious, adaptable and motivated by intellectual challenges, I enjoy teamwork. I am fully committed to deepening my skills and ready to take on ambitious new projects.' },
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
