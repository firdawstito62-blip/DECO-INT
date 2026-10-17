import { StylePalette } from '../types';

export const STYLES_DATA: Record<string, StylePalette> = {
  'haussmannien-moderne': {
    id: 'haussmannien-moderne',
    name: 'Haussmannien Contemporain',
    roomName: 'Salon & Pièce de Réception',
    atmosphere: 'Prestigieux, aéré, contraste entre stucs anciens et lignes sculpturales',
    description: 'Une réinterprétation audacieuse des volumes parisiens classiques : le blanc craie des murs met en valeur les boiseries et rosaces, tandis que des pièces de mobilier aux rondeurs enveloppantes et des touches de laiton doré réchauffent l’espace sans l’alourdir.',
    colors: [
      { name: 'Blanc Craie Moulure', hex: '#F9F8F5', description: 'Base neutre lumineuse mat pour boiseries et plafonds' },
      { name: 'Noyer Fumé Profond', hex: '#3E3228', description: 'Pour les consoles, bibliothèques et détails graphiques' },
      { name: 'Laiton Brossé Chaleureux', hex: '#C2A374', description: 'Luminaires, poignées ciselées et inserts métalliques' },
      { name: 'Gris Carrare Veiné', hex: '#D8D8D6', description: 'Plateaux de marbre, manteaux de cheminée et piétements' },
      { name: 'Laine Écru Naturel', hex: '#ECE6DC', description: 'Tissus d’assise en bouclette et tapis d’Orient délavé' }
    ],
    materials: [
      { name: 'Parquet Point de Hongrie', texture: 'Chêne de France huilé mat', description: 'Disposition chevron à 45° pour agrandir la perspective' },
      { name: 'Marbre de Carrare ou Calacatta', texture: 'Finition adoucie soyeuse', description: 'Table basse monolithe et inserts de cheminée' },
      { name: 'Laiton Massif Mat', texture: 'Micro-brossé non verni', description: 'Accastillage discret qui se patinera avec le temps' },
      { name: 'Lin Belge Lourd', texture: 'Tissage dense 420g/m²', description: 'Rideaux pleine hauteur trainant légèrement au sol' }
    ],
    lightingTip: 'Privilégier un éclairage d’ambiance à 2700K indirect orienté vers le plafond pour souligner les moulures, combiné à des lampes à poser basses à abat-jour tissu pour les soirées feutrées.',
    sampleItems: ['Canapé courbe en bouclette d’alpaga', 'Miroir doré vintage trumeau', 'Table basse marbre de Carrare', 'Suspension mobile en laiton']
  },
  'japandi-serenite': {
    id: 'japandi-serenite',
    name: 'Japandi & Wabi-Sabi',
    roomName: 'Suite Parentale & Repos',
    atmosphere: 'Introspectif, tactile, zénithal, harmonie entre bois clairs et chaux brute',
    description: 'La fusion de l’épure scandinave et de l’éloge de l’imperfection japonaise. Des lignes basses, des matières organiques brutes non traitées chimiquement et une absence délibérée d’encombrement pour apaiser le regard.',
    colors: [
      { name: 'Badigeon Chaux Sable', hex: '#EDE8DF', description: 'Enduit mural à effet texturé diffusant la lumière' },
      { name: 'Chêne Blanchi Brut', hex: '#D3C3A8', description: 'Ossature de lit plateforme, chevets et claustras' },
      { name: 'Vert Calcaire Pâle', hex: '#9E9D89', description: 'Coussins de lit, céramiques et touches végétales' },
      { name: 'Anthracite Cendre', hex: '#373836', description: 'Pieds de lampes, calligraphies et détails charbonnés' },
      { name: 'Papier Washi Écru', hex: '#FAF5EC', description: 'Suspension volumétrique légère et abat-jours' }
    ],
    materials: [
      { name: 'Chêne Massif sans Nœuds', texture: 'Ponçage fin savonné', description: 'Mobilier bas ancré dans le sol favorisant la quiétude' },
      { name: 'Enduit à la Chaux Aérienne', texture: 'Application à la taloche d’éponge', description: 'Murs vivants qui respirent et jouent avec les ombres' },
      { name: 'Lin Lavé d’Adoucissage', texture: 'Froissé naturel doux', description: 'Housses de couette et rideaux tamisants' },
      { name: 'Tapis en Jute et Laine Tressée', texture: 'Fibres épaisses non teintées', description: 'Isolation thermique et acoustique naturelle sous les pieds' }
    ],
    lightingTip: 'Source lumineuse unique volumineuse au centre en papier washi diffusant une lueur à 2200K–2400K, accompagnée de deux micro-liseuses encastrées à faisceau étroit.',
    sampleItems: ['Lit plateforme tatami en chêne', 'Suspension papier de riz XXL', 'Vase céramique asymétrique', 'Banquette basse d’appoint']
  },
  'mediterraneen-mineral': {
    id: 'mediterraneen-mineral',
    name: 'Méditerranéen Minéral',
    roomName: 'Espace de Vie & Cuisine',
    atmosphere: 'Chaleur solaire, courbes sculpturales douces, matières de terre et de pierre',
    description: 'Inspiré des bastides d’architecte du sud et des îles des Cyclades : niches murales façonnées à la main, banquettes maçonnées garnies d’étoffes en lin et travertin chaleureux.',
    colors: [
      { name: 'Terre Cuite d’Aubagne', hex: '#BD6D4D', description: 'Touches de poterie, coussins et carreaux de sol anciens' },
      { name: 'Blanc Chaux de Majorque', hex: '#FDFBF7', description: 'Murs et niches arrondies captant chaque rayon de soleil' },
      { name: 'Travertin Doré Nuancé', hex: '#D4C5A9', description: 'Sol unifié intérieur-extérieur et plans de travail' },
      { name: 'Vert Olive Sauvage', hex: '#717558', description: 'Banquettes, céramiques et feuillages d’olivier' },
      { name: 'Bois d’Olivier & Noyer', hex: '#583F2B', description: 'Planches de présentation, poignées et assises' }
    ],
    materials: [
      { name: 'Travertin Romain Poreux', texture: 'Non rebouché, brossé mat', description: 'Dallage au toucher minéral doux pour marcher pieds nus' },
      { name: 'Zelliges Émaillés à la Main', texture: 'Surfaces irrégulières miroitantes', description: 'Crédences de cuisine et douches reflétant l’eau et le jour' },
      { name: 'Enduit à la Chaux Grassouillette', texture: 'Angles arrondis adoucis sans arêtes vives', description: 'Niches décoratives éclairées par le bas' },
      { name: 'Fer Forgé Martelé Noir', texture: 'Finition cirée mate', description: 'Garde-corps légers et piètements de table d’extérieur' }
    ],
    lightingTip: 'Dissimuler des rubans LED chauds derrière les niches maçonnées pour faire jaillir la lumière du relief même de la matière.',
    sampleItems: ['Banquette d’angle maçonnée', 'Grande table en travertin adouci', 'Pichets en terre vernissée', 'Chaises paillées provençales']
  },
  'minimalisme-chaud': {
    id: 'minimalisme-chaud',
    name: 'Minimalisme Chaud & Contemporain',
    roomName: 'Bureau & Bibliothèque',
    atmosphere: 'Précis, feutré, lignes architecturales pures et matériaux ultra-pérennes',
    description: 'La rigueur des lignes contemporaines sublimée par la chaleur sensorielle des bois nobles et des cuirs selliers. Des agencements sur mesure du sol au plafond qui dissimulent tout désordre technique.',
    colors: [
      { name: 'Noyer Américain Râpé', hex: '#4B382A', description: 'Ebénisterie sur mesure, panneaux acoustiques' },
      { name: 'Cuir Cognac Patiné', hex: '#9E5B2E', description: 'Fauteuil de travail et sous-main artisanal' },
      { name: 'Béton Gris Perle', hex: '#CEC8BE', description: 'Sols continus sans joint et volumes de bureaux' },
      { name: 'Bronze Métallisé Anodisé', hex: '#776551', description: 'Profilés de bibliothèque, rails magnétiques' },
      { name: 'Blanc Feutré Coton', hex: '#F4F2EC', description: 'Plafonds absorbants et stores vénitiens textiles' }
    ],
    materials: [
      { name: 'Panneaux de Noyer Aligné', texture: 'Placage de fil teinté sans reflet', description: 'Rangements invisibles avec ouvertures push-to-open' },
      { name: 'Cuir Pleine Fleur Véritable', texture: 'Toucher tannage végétal grainé', description: 'Assises de lecture ergonomiques et détails de prises de main' },
      { name: 'Béton Ciré Minéral Continu', texture: 'Vernis bi-composant invisible', description: 'Continuité visuelle d’une pièce à l’autre' },
      { name: 'Acier Ciselé Microbillé', texture: 'Finition bronze sombre', description: 'Étagères ultra-fines de 4mm supportant de beaux livres' }
    ],
    lightingTip: 'Éclairage de précision directionnel avec optiques anti-éblouissement (UGR < 19) associé à une liseuse mobile télescopique.',
    sampleItems: ['Bureau suspendu en noyer', 'Fauteuil Lounge Eames en cuir cognac', 'Lampe de table Tizio ou Flos', 'Tapis géométrique laine feutrée']
  }
};
