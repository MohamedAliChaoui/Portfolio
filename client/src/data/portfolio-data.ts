import { PortfolioData, Translations, LanguageInfo } from '../types/portfolio';
import profilePhoto from '@assets/photo_profil.jpg';
import voyageurCommerceThumbnail from '@assets/voyageur_commerce_thumbnail.png';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Mohamed Ali Chaoui",
    title: {
      fr: "Étudiant en Master Intelligence Artificielle | Ex-Fullstack Dev",
      en: "Master's Student in Artificial Intelligence | Ex-Fullstack Dev"
    },
    description: {
      fr: "Passionné par l'Intelligence Artificielle et l'Ingénierie Logicielle. Je combine une solide expertise Fullstack avec des compétences avancées en Machine Learning, Deep Learning et Algorithmique.",
      en: "Passionate about Artificial Intelligence and Software Engineering. I combine strong Fullstack expertise with advanced skills in Machine Learning, Deep Learning and Algorithms."
    },
    photo: profilePhoto
  },
  about: {
    description: {
      fr: "Étudiant en Master Informatique (spécialité Intelligence Artificielle) à l'Université de Bordeaux, je fais converger mon solide background en développement Fullstack vers l'Intelligence Artificielle. Mon parcours a débuté par une formation rigoureuse en ingénierie logicielle, où j'ai maîtrisé les architectures complexes (Vue.js, Spring Boot, PostgreSQL). Aujourd'hui, je mets cette discipline au service de la conception de systèmes intelligents, des modèles d'apprentissage automatique à la résolution algorithmique complexe.",
      en: "Master's student in Computer Science (Artificial Intelligence specialization) at the University of Bordeaux, I bring together my strong Fullstack development background with Artificial Intelligence. My journey began with rigorous software engineering training, where I mastered complex architectures (Vue.js, Spring Boot, PostgreSQL). Today, I channel this discipline into designing intelligent systems, from machine learning models to complex algorithmic problem solving."
    },
    qualities: [
      { fr: "Rigueur Scientifique", en: "Scientific Rigor" },
      { fr: "Résolution de problèmes", en: "Problem Solving" },
      { fr: "Travail d'équipe", en: "Teamwork" },
      { fr: "Curiosité Technique", en: "Technical Curiosity" },
      { fr: "Adaptabilité", en: "Adaptability" },
      { fr: "Autonomie", en: "Autonomy" }
    ],
    experiences: [
      {
        position: { fr: "Stagiaire Serious Games - Projet CAP IA", en: "Serious Games Intern - CAP IA Project" },
        company: "Inria",
        period: { fr: "Mai 2026 - Juillet 2026", en: "May 2026 - July 2026" },
        description: {
          fr: `Contribution au projet CAP IA de l'Université de Bordeaux visant à renforcer l'attractivité des formations en intelligence artificielle. Développement de serious games axés sur l'optimisation mathématique et l'intelligence artificielle.

Missions :
- Développement sur le jeu "Le Voyageur de Commerce Intersidéral".
- Réécriture de l'application serveur de Java (Spring Boot) vers Python (Flask).
- Optimisation des fonctionnalités existantes et intégration d'améliorations logicielles.

Technologies : Python, Java, Flask, Spring Boot, IA, HTML, JavaScript, Tailwind CSS`,
          en: `Contribution to the CAP IA project at the University of Bordeaux aimed at strengthening the attractiveness of AI programs. Development of serious games focused on mathematical optimization and artificial intelligence.

Missions:
- Development on the "Interstellar Traveling Salesperson" game.
- Rewrite of the server application from Java (Spring Boot) to Python (Flask).
- Optimization of existing features and integration of software improvements.

Technologies: Python, Java, Flask, Spring Boot, AI, HTML, JavaScript, Tailwind CSS`
        }
      },
      {
        position: { fr: "Equipier de commerce", en: "Sales Associate" },
        company: "AUCHAN",
        period: { fr: "Août 2024 - Présent", en: "August 2024 - Present" },
        description: {
          fr: "Accueil client, conseil personnalisé, gestion des stocks et mise en rayon efficace dans un environnement dynamique.",
          en: "Customer reception, personalized advice, stock management and efficient shelving in a dynamic environment."
        }
      },
      {
        position: { fr: "Expert en inventaire", en: "Inventory Expert" },
        company: "RGIS",
        period: { fr: "Novembre 2021 - Juin 2024", en: "November 2021 - June 2024" },
        description: {
          fr: "Réalisation d'inventaires précis pour professionnels, utilisation d'outils de comptage électroniques et respect des délais.",
          en: "Precise inventory execution for professionals, use of electronic counting tools and adherence to deadlines."
        }
      }
    ],
    education: [
      {
        degree: { fr: "Master - Informatique (IA)", en: "Master - Computer Science (AI)" },
        institution: { fr: "Université de Bordeaux", en: "University of Bordeaux" },
        period: { fr: "Septembre 2025 – Septembre 2027", en: "September 2025 – September 2027" },
        description: {
          fr: "• Modèles & Apprentissage : Réseaux neuronaux avancés, apprentissage par renforcement (RL), Machine & Deep Learning.\n• Raisonnement & Éthique : Représentation des connaissances, IA explicable (XAI), IA durable.\n• Méthodologie : Analyse d'articles scientifiques, séminaires de recherche, vision par ordinateur et complexité algorithmique.",
          en: "• Models & Learning: Advanced Neural Networks, Reinforcement Learning (RL), Machine & Deep Learning.\n• Reasoning & Ethics: Knowledge Representation, Explainable AI (XAI), Sustainable AI.\n• Methodology: Scientific papers analysis, research seminars, computer vision and algorithmic complexity."
        }
      },
      {
        degree: { fr: "Licence 3 - Informatique", en: "Bachelor 3 - Computer Science" },
        institution: { fr: "Université de Bordeaux", en: "University of Bordeaux" },
        period: { fr: "Septembre 2024 – Juin 2025", en: "September 2024 – June 2025" }
      },
      {
        degree: { fr: "Licence 1 et 2 - Informatique", en: "Bachelor 1 & 2 - Computer Science" },
        institution: { fr: "Université d'Avignon", en: "University of Avignon" },
        period: { fr: "Septembre 2020 – Juin 2024", en: "September 2020 – June 2024" }
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
      { name: "Python (IA & Algorithmique)", level: 95, icon: "devicon-python-plain colored", color: "#3776ab" },
      { name: "C/C++", level: 90, icon: "devicon-cplusplus-plain colored", color: "#00599c" },
      { name: "Java", level: 90, icon: "devicon-java-plain colored", color: "#f89820" },
      { name: "SQL", level: 85, icon: "fas fa-database", color: "#e34f26" },
      { name: "JavaScript/TS", level: 80, icon: "devicon-typescript-plain colored", color: "#007acc" },
      { name: "OCaml", level: 75, icon: "fas fa-code", color: "#ec6813" }
    ],
    frameworks: [
      { name: "PyTorch", level: 85, icon: "devicon-pytorch-original colored", color: "#ee4c2c" },
      { name: "Transformers / Hugging Face", level: 80, icon: "fas fa-robot", color: "#ffd21e" },
      { name: "Gymnasium / RL (Renforcement)", level: 80, icon: "fas fa-gamepad", color: "#10b981" },
      { name: "Keras / Deep Learning", level: 80, icon: "devicon-keras-plain colored", color: "#d00000" },
      { name: "IA Explicable (XAI / SHAP)", level: 75, icon: "fas fa-lightbulb", color: "#8b5cf6" },
      { name: "Scikit-learn", level: 85, icon: "devicon-scikitlearn-plain colored", color: "#f7931e" },
      { name: "Pandas/NumPy", level: 85, icon: "devicon-pandas-plain colored", color: "#150458" },
      { name: "Spring Boot", level: 85, icon: "devicon-spring-plain colored", color: "#6db33f" },
      { name: "Flask", level: 80, icon: "devicon-flask-original colored", color: "#333333" },
      { name: "Vue.js", level: 80, icon: "devicon-vuejs-plain colored", color: "#4fc08d" },
      { name: "Tailwind CSS", level: 85, icon: "devicon-tailwindcss-plain colored", color: "#38bdf8" }
    ],
    databases: [
      { name: "PostgreSQL (+pgvector)", level: 85, icon: "devicon-postgresql-plain colored", color: "#336791" },
      { name: "MySQL", level: 90, icon: "devicon-mysql-plain colored", color: "#4479a1" },
      { name: "Git/GitLab CI", level: 85, icon: "devicon-git-plain colored", color: "#f05032" },
      { name: "Docker", level: 75, icon: "devicon-docker-plain colored", color: "#2496ed" },
      { name: "Linux", level: 80, icon: "devicon-linux-plain colored", color: "#fcc624" }
    ]
  },
  projects: [
    {
      id: "p_voyageur_commerce",
      title: { fr: "Le Voyageur de Commerce Intersidéral", en: "The Interstellar Traveling Salesperson" },
      year: "2026",
      description: {
        fr: "Serious game développé dans le cadre du projet CAP IA pour renforcer l'attractivité des formations en IA. Réécriture complète du backend de Java (Spring Boot) vers Python (Flask), et intégration de fonctionnalités et d'améliorations logicielles.",
        en: "Serious game developed for the CAP IA project to boost the appeal of AI programs. Complete backend rewrite from Java (Spring Boot) to Python (Flask), and integration of features and software improvements."
      },
      technologies: ["Python", "Flask", "Java", "Spring Boot", "HTML", "JavaScript", "Tailwind CSS"],
      image: voyageurCommerceThumbnail,
      icon: "fas fa-space-shuttle",
      demoUrl: "https://campus-ia.u-bordeaux.fr/voyageur-de-commerce/"
    },
    {
      id: "p_amazons_game",
      title: { fr: "Jeu des Amazones (IA & Réseau)", en: "Game of the Amazons (AI & Network)" },
      year: "2026",
      description: {
        fr: "Moteur de jeu complet avec IA hybride (Minimax/αβ + MCTS/Keras) et architecture client-serveur asynchrone.",
        en: "Full game engine with hybrid AI (Minimax/αβ + MCTS/Keras) and asynchronous client-server architecture."
      },
      technologies: ["Python", "PyGObject", "Keras", "asyncio"],
      image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-chess-board"
    },
    {
      id: "p_algo_sat",
      title: { fr: "Solveur Algorithmique (SAT)", en: "Algorithmic Solver (SAT)" },
      year: "2025",
      description: { fr: "Conception d'un solveur en C pour le problème NP-complet 'TUNNEL'. Réduction polynomiale vers SAT et optimisation de la gestion mémoire.", en: "Design of a C solver for the NP-complete 'TUNNEL' problem. Polynomial reduction to SAT and memory management optimization." },
      technologies: ["C", "Algorithmique", "Complexité"],
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-brain"
    },
    {
      id: "p_engine_mvc",
      title: { fr: "Moteur de Jeu & Architecture", en: "Game Engine & Architecture" },
      year: "2025",
      description: { fr: "Développement d'un moteur de jeu RPG en Java avec une architecture MVC stricte et Design Patterns (Observer, Strategy).", en: "Development of an RPG game engine in Java with strict MVC architecture and Design Patterns (Observer, Strategy)." },
      technologies: ["Java", "Swing", "Design Patterns"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-gamepad"
    },
    {
      id: "p_img_search",
      title: { fr: "Recherche d'Images Distribuée", en: "Distributed Image Search" },
      year: "2023",
      description: { fr: "Système de recherche d'images par similarité utilisant pgvector pour l'indexation vectorielle. Architecture micro-services.", en: "Image similarity search system using pgvector for vector indexing. Micro-services architecture." },
      technologies: ["PostgreSQL", "pgvector", "Spring Boot", "Vue.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-search",
      demoUrl: "https://similarity-pic.vercel.app/"
    },
    {
      id: "p_monitoring",
      title: { fr: "Plate-forme de Monitoring", en: "Monitoring Platform" },
      year: "2023",
      description: { fr: "Outil de surveillance serveur et alerting automatique développé en Python et Bash.", en: "Server monitoring and automatic alerting tool developed in Python and Bash." },
      technologies: ["Python", "Bash", "System Admin"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-chart-line"
    }
  ],
  contact: {
    email: "ali.chaoui.123@gmail.com",
    phone: "06 51 61 56 86",
    location: "Bordeaux, France (Permis B)",
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
  'nav.role': { fr: 'Étudiant en Master Intelligence Artificielle', en: 'Master\'s Student in Artificial Intelligence' },

  // Hero Section
  'hero.greeting': { fr: 'Bonjour, je suis', en: 'Hello, I\'m' },
  'hero.badge': { fr: 'Recherche de stage de fin d\'études (6 mois dès Mars 2027) · Mobile France', en: 'Seeking 6-Month Final-Year Internship (From March 2027) · Mobile across France' },
  'hero.title': { fr: 'Étudiant Master Intelligence Artificielle', en: 'Master\'s Student in Artificial Intelligence' },
  'hero.description': { fr: 'Passionné par l\'Intelligence Artificielle et l\'Ingénierie Logicielle. Je combine une solide expertise Fullstack avec des compétences avancées en Machine Learning, Deep Learning et Algorithmique pour résoudre des problèmes complexes.', en: 'Passionate about Artificial Intelligence and Software Engineering. I combine strong Fullstack expertise with advanced skills in Machine Learning, Deep Learning and Algorithms to solve complex problems.' },
  'hero.cta.projects': { fr: 'Voir mes projets', en: 'View Projects' },
  'hero.cta.contact': { fr: 'Me contacter', en: 'Contact Me' },

  // About Section
  'about.title': { fr: 'À propos de moi', en: 'About Me' },
  'about.subtitle': { fr: 'Du développement Fullstack vers l\'Intelligence Artificielle', en: 'From Fullstack Development to Artificial Intelligence' },
  'about.description': { fr: 'Étudiant en Master Informatique (spécialité Intelligence Artificielle) à l\'Université de Bordeaux, je fais converger mon solide background en développement Fullstack vers l\'Intelligence Artificielle. Mon parcours a débuté par une formation rigoureuse en ingénierie logicielle, où j\'ai maîtrisé les architectures complexes (Vue.js, Spring Boot, PostgreSQL). Aujourd\'hui, je mets cette discipline au service de la conception de systèmes intelligents, des modèles d\'apprentissage automatique à la résolution algorithmique complexe.', en: 'Master\'s student in Computer Science (Artificial Intelligence specialization) at the University of Bordeaux, I bring together my strong Fullstack development background with Artificial Intelligence. My journey began with rigorous software engineering training, where I mastered complex architectures (Vue.js, Spring Boot, PostgreSQL). Today, I channel this discipline into designing intelligent systems, from machine learning models to complex algorithmic problem solving.' },
  'about.experiences': { fr: 'Expériences professionnelles', en: 'Professional Experience' },
  'about.education': { fr: 'Parcours académique', en: 'Academic Background' },
  'about.languages': { fr: 'Langues', en: 'Languages' },
  'about.qualities': { fr: 'Mes qualités', en: 'My Qualities' },
  'about.certifications': { fr: 'Certifications', en: 'Certifications' },
  'about.availability': { fr: 'Disponibilité', en: 'Availability' },
  'about.availability.text': { fr: 'Je suis à la recherche d\'un stage de fin d\'études de 6 mois en Intelligence Artificielle (Machine Learning, Deep Learning, Reinforcement Learning, Agents IA & Ingénierie Logicielle) à partir de mars 2027. Mobile dans toute la France.', en: 'I am looking for a 6-month final-year internship in Artificial Intelligence (Machine Learning, Deep Learning, Reinforcement Learning, AI Agents & Software Engineering) starting March 2027. Mobile across France.' },
  'about.available': { fr: 'Stage de fin d\'études - 6 mois (Dès Mars 2027)', en: 'Final-year Internship - 6 months (From March 2027)' },

  // Skills Section
  'skills.title': { fr: 'Compétences Techniques', en: 'Technical Skills' },
  'skills.subtitle': { fr: 'Une expertise hybride entre Génie Logiciel et Intelligence Artificielle', en: 'Hybrid expertise between Software Engineering and Artificial Intelligence' },
  'skills.programming': { fr: 'Langages', en: 'Languages' },
  'skills.frameworks': { fr: 'Frameworks IA & Web', en: 'AI & Web Frameworks' },
  'skills.databases': { fr: 'Data & Infra', en: 'Data & Infra' },

  // Projects Section
  'projects.title': { fr: 'Projets Réalisés', en: 'Realized Projects' },
  'projects.subtitle': { fr: 'Sélection de projets alliant algorithmique avancée et développement web', en: 'Selection of projects combining advanced algorithms and web development' },
  'projects.github': { fr: 'GitHub', en: 'GitHub' },
  'projects.demo': { fr: 'Demo', en: 'Demo' },
  'projects.cv.title': { fr: 'Téléchargez mon CV complet', en: 'Download my complete CV' },
  'projects.cv.description': { fr: 'Retrouvez le détail de mon parcours académique et professionnel', en: 'Find details of my academic and professional background' },
  'projects.cv.download': { fr: 'Télécharger le CV (PDF)', en: 'Download CV (PDF)' },

  // Contact Section
  'contact.title': { fr: 'Contactez-moi', en: 'Contact Me' },
  'contact.subtitle': { fr: 'Ouvert aux opportunités en Intelligence Artificielle et Génie Logiciel', en: 'Open to opportunities in Artificial Intelligence and Software Engineering' },
  'contact.info': { fr: 'Informations de contact', en: 'Contact Information' },
  'contact.form.name': { fr: 'Nom complet', en: 'Full Name' },
  'contact.form.email': { fr: 'Email', en: 'Email' },
  'contact.form.subject': { fr: 'Sujet', en: 'Subject' },
  'contact.form.message': { fr: 'Message', en: 'Message' },
  'contact.form.placeholder': { fr: 'Votre message...', en: 'Your message...' },
  'contact.form.send': { fr: 'Envoyer', en: 'Send' },

  // Footer
  'footer.description': { fr: 'Étudiant en Master Intelligence Artificielle passionné par le Machine Learning, le Deep Learning et le Génie Logiciel.', en: 'Master\'s AI student passionate about Machine Learning, Deep Learning and Software Engineering.' },
  'footer.navigation': { fr: 'Navigation', en: 'Navigation' },
  'footer.contact': { fr: 'Contact', en: 'Contact' },
  'footer.rights': { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  'footer.made': { fr: 'Conçu avec React & Tailwind', en: 'Made with React & Tailwind' }
};
