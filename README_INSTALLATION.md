# Portfolio de Mohamed Ali Chaoui - Instructions d'installation

## Prérequis

Avant d'installer le projet, assurez-vous d'avoir installé :

1. **Node.js** (version 18 ou supérieure)
   - Téléchargez depuis : https://nodejs.org/
   - Vérifiez l'installation : `node --version`

2. **npm** (inclus avec Node.js)
   - Vérifiez l'installation : `npm --version`

## Installation

1. **Installer les dépendances**
   ```bash
   npm install
   ```
   *Note : Cela installera toutes les librairies nécessaires, y compris `cross-env` pour la compatibilité Windows.*

2. **Lancer le projet en mode développement**
   ```bash
   npm run dev
   ```
   *Le serveur démarrera sur le port 5000.*

4. **Ouvrir dans le navigateur**
   - Ouvrez http://localhost:5000 dans votre navigateur
   - Le site se rechargera automatiquement quand vous modifiez les fichiers

## Structure du projet

```
workspace/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Composants React
│   │   ├── data/          # Données du portfolio
│   │   ├── hooks/         # Hooks personnalisés
│   │   └── types/         # Types TypeScript
│   └── public/            # Fichiers statiques (CV, images)
├── server/                # Backend Express
└── shared/               # Types partagés
```

## Personnalisation

### Modifier les informations personnelles
Éditez le fichier `client/src/data/portfolio-data.ts` pour mettre à jour :
- Informations personnelles
- Compétences
- Projets
- Expériences

### Remplacer la photo de profil
Remplacez le fichier dans `attached_assets/photo cv_1754311161081.png`

### Mettre à jour le CV
Remplacez le fichier `client/public/cv-mohamed-ali-chaoui.pdf`

## Configuration EmailJS (optionnel)

Pour activer le formulaire de contact :

1. Créez un compte sur https://www.emailjs.com/
2. Configurez un service email
3. Créez un template
4. Modifiez les paramètres dans `client/src/components/ContactSection.tsx` :
   - `serviceId`
   - `templateId`  
   - `publicKey`

## Déploiement

### Construction pour la production
```bash
npm run build
```

### Lancement en production
```bash
npm start
```

## Commandes utiles

- `npm run dev` - Mode développement
- `npm run build` - Construction pour production
- `npm start` - Lancement en production
- `npm run type-check` - Vérification des types TypeScript

## Langues supportées

Le portfolio supporte le français et l'anglais. Le changement de langue se fait via le bouton dans la navigation.

## Support

Pour toute question ou problème :
- Email : ali.chaoui.123@gmail.com
- GitHub : https://github.com/MohamedAliChaoui
- LinkedIn : https://www.linkedin.com/in/mohamed-ali-chaoui-25151b196

## Technologies utilisées

- **Frontend** : React, TypeScript, Tailwind CSS, Vite
- **Backend** : Express.js, TypeScript
- **Base de données** : PostgreSQL (avec Drizzle ORM pour les versions avancées)
- **UI Components** : shadcn/ui, Radix UI
- **Icons** : Font Awesome, Devicons, Lucide React
- **Email** : EmailJS
- **Animations** : Framer Motion, CSS Transitions

---

**Note** : Ce portfolio a été développé avec une architecture moderne et responsive. Il fonctionne sur tous les navigateurs récents et s'adapte automatiquement aux différentes tailles d'écran.