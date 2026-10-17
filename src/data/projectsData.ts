import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'vaneau-haussmann',
    title: 'Appartement Vaneau',
    category: 'salon',
    categoryLabel: 'Salon & Réception',
    location: 'Paris 7ème, Saint-Germain-des-Prés',
    surface: 145,
    year: '2025',
    image: '/src/assets/images/hero_haussmann_living_1792234702721.jpg',
    beforeImage: '/src/assets/images/hero_haussmann_living_1792234702721.jpg', // Used with high contrast desaturated architectural filter in before/after component
    tagline: 'Renaissance haussmannienne aux lignes organiques et teintes crayeuses',
    description: 'Rénovation intégrale d’un appartement du XIXe siècle. Préservation méticuleuse des moulures en plâtre à la feuille, du parquet en point de Hongrie et restauration du manteau de cheminée en marbre de Carrare. Intégration d’un canapé sculptural courbe sur mesure en bouclette d’alpaga et d’une table basse monolithe en marbre taillé.',
    materials: ['Marbre de Carrare', 'Chêne de Hongrie', 'Laine bouclée naturelle', 'Laiton brossé patiné', 'Chaux fine veloutée'],
    keyHighlights: [
      'Hauteur sous plafond de 3,60 m sublimée par un lustre suspendu en verre soufflé',
      'Menuiseries invisibles intégrées dans les cimaises pour dissimuler les rangements',
      'Double exposition traversante avec voilages de lin lavé sur mesure',
      'Cheminée d’époque remise aux normes avec foyer éthanol sécurisé'
    ],
    completionWeeks: 16
  },
  {
    id: 'suite-japandi-chartrons',
    title: 'Suite Parenthèse',
    category: 'suite',
    categoryLabel: 'Suite Parentale & Dressing',
    location: 'Bordeaux, Quartier des Chartrons',
    surface: 42,
    year: '2025',
    image: '/src/assets/images/project_japandi_suite_1792234703263.jpg',
    tagline: 'Écrin minimaliste et tactile inspiré de la sérénité japonaise',
    description: 'Transformation d’un ancien atelier de négoce viticole en suite parentale silencieuse. Les murs sont enduits d’un badigeon de chaux minérale texturée aux reflets doux du soleil couchant. Le lit flottant sur mesure en chêne clair massif intègre des chevets sculptés sans fixations apparentes.',
    materials: ['Chêne clair de Bourgogne', 'Badigeon à la chaux artisanale', 'Papier washi japonais', 'Lin lavé brut', 'Laine de Nouvelle-Zélande'],
    keyHighlights: [
      'Tête de lit sur mesure avec éclairage rétro-éclairé 2400K graduable',
      'Suspension organique en papier d’art diffusant une clarté feutrée',
      'Dressing dissimulé derrière des panneaux à claire-voie en chêne ajouré',
      'Sol en béton lissé couplé à un tapis en fibres végétales nouées main'
    ],
    completionWeeks: 9
  },
  {
    id: 'cuisine-monolithe-geneve',
    title: 'Cuisine Calacatta & Noyer',
    category: 'cuisine',
    categoryLabel: 'Cuisine & Salle à Manger',
    location: 'Genève, Cologny',
    surface: 68,
    year: '2026',
    image: '/src/assets/images/project_kitchen_marble_1792234704210.jpg',
    tagline: 'Îlot architectural monumental et noyer américain cannelé',
    description: 'Conception d’un espace culinaire et de réception ouvert sur un jardin paysager. L’îlot central est usiné dans un bloc massif de marbre Calacatta doré aux veines continues en livre-ouvert. Les linéaires d’ébénisterie en noyer flûté intègrent électroménager et vaisselier rétro-éclairé.',
    materials: ['Marbre Calacatta Gold', 'Noyer d’Amérique flûté', 'Acier noirci brossé', 'Verre fumé trempé', 'Béton ciré architectural'],
    keyHighlights: [
      'Îlot d’un seul tenant de 3,80 m avec table de cuisson induction invisible sous la pierre',
      'Éclairage architectural scénarisé avec rails magnétiques et suspensions laiton',
      'Cave à vin intégrée sous régulation hygrométrique pour 180 flacons',
      'Baies vitrées atelier en acier brut ouvrant à galandage sur la terrasse'
    ],
    completionWeeks: 12
  },
  {
    id: 'hotel-particulier-marais',
    title: 'Hôtel Particulier Turenne',
    category: 'complet',
    categoryLabel: 'Rénovation Complète',
    location: 'Paris 3ème, Le Marais',
    surface: 260,
    year: '2025',
    image: '/src/assets/images/hero_haussmann_living_1792234702721.jpg',
    tagline: 'Élégance minérale et mise en scène d’une collection d’art contemporain',
    description: 'Réhabilitation complète d’une demeure historique du XVIIe siècle en triplex familial. Dialogue permanent entre poutres maîtresses patinées d’origine, enduits à la cire et mobilier de designers italiens et scandinaves.',
    materials: ['Pierre de Bourgogne adoucie', 'Plâtre ciré vénitien', 'Chêne fumé', 'Cuir sellier cognac', 'Verre strié'],
    keyHighlights: [
      'Escalier suspendu en acier sculptural créant un puits de jour naturel',
      'Système domotique complet Lutron scénarisant 6 ambiances lumineuses',
      'Bibliothèque double hauteur en ébène avec échelle sur rail en laiton massif',
      'Espace bien-être privatif avec hammam en zellige émaillé artisanal'
    ],
    completionWeeks: 28
  }
];
