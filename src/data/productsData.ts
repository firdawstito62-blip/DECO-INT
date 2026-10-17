import { DecorProduct } from '../types';

export const PRODUCTS_DATA: DecorProduct[] = [
  {
    id: 'prod-lampe-gres',
    name: 'Lampe Totem en Grès Chamotté',
    category: 'Luminaires',
    price: 680,
    image: '/src/assets/images/decor_ceramic_lamp_1792234703755.jpg',
    designer: 'Atelier Céramique Vaneau',
    materials: 'Grès chamotté tourné main, abat-jour lin naturel de Flandre',
    inStock: true,
    dimensions: 'H 54 cm · Ø 32 cm · Poids 4.8 kg',
    description: 'Chaque pièce est modelée artisanalement à la main, conférant une silhouette sculpturale asymétrique unique. L’abat-jour conique en pur lin texturé diffuse une lumière dorée chaleureuse (culot E27, variateur d’intensité en laiton sur câble tressé).'
  },
  {
    id: 'prod-table-travertin',
    name: 'Table Basse Monolithe Navona',
    category: 'Mobilier',
    price: 1850,
    image: '/src/assets/images/hero_haussmann_living_1792234702721.jpg',
    designer: 'Studio Vaneau Éditions',
    materials: 'Travertin Navona d’Italie adouci non mastiqué, arêtes biseautées',
    inStock: true,
    dimensions: 'L 130 cm · P 80 cm · H 32 cm',
    description: 'Bloc architectural taillé dans la masse laissant transparaître les cavités géologiques naturelles de la pierre de Tivoli. Traitement hydrofuge minéral invisible mat.'
  },
  {
    id: 'prod-fauteuil-boucle',
    name: 'Fauteuil Lounge Arch',
    category: 'Assises',
    price: 1420,
    image: '/src/assets/images/hero_haussmann_living_1792234702721.jpg',
    designer: 'Pierre & Élise Vaneau',
    materials: 'Structure chêne massif teinté noyer, tissu bouclette laine & alpaga',
    inStock: true,
    dimensions: 'L 78 cm · P 84 cm · H 72 cm · Assise 40 cm',
    description: 'Une assise généreuse pensée comme un cocon enveloppant. L’inclinaison calculée du dossier soulage les lombaires tandis que la laine bouclée offre un confort thermique exceptionnel.'
  },
  {
    id: 'prod-suspension-washi',
    name: 'Suspension Organique Akari Épure',
    category: 'Luminaires',
    price: 490,
    image: '/src/assets/images/project_japandi_suite_1792234703263.jpg',
    designer: 'Collaboration Maître Papetier Gifu',
    materials: 'Papier mûrier washi véritable, tiges de bambou, rosace laiton',
    inStock: true,
    dimensions: 'Ø 65 cm · H 38 cm · Câble réglable jusqu’à 250 cm',
    description: 'Translucidité poétique et légèreté aérienne. Le papier de fibres de mûrier filtre la lumière sans éblouir, créant un halo feutré propice au repos et à la contemplation.'
  },
  {
    id: 'prod-coffret-matières',
    name: 'Coffret Échantillons Matières Studio Vaneau',
    category: 'Échantillons & Nuancier',
    price: 65,
    image: '/src/assets/images/decor_ceramic_lamp_1792234703755.jpg',
    designer: 'Studio Vaneau Matériauthèque',
    materials: '8 échantillons pierre, essences de bois, laiton et étoffes',
    inStock: true,
    dimensions: 'Coffret rigide en toile de lin · 28 x 20 x 6 cm',
    description: 'Recevez chez vous la sélection tactile exclusive de nos projets : carreau de travertin, marbre Calacatta, coupe de chêne fumé, laiton brossé et carrés d’étoffes bouclées et lins lavés. Montant 100% déductible d’un projet d’architecture.'
  },
  {
    id: 'prod-vase-amphore',
    name: 'Amphore Minérale Cendrée',
    category: 'Objets d’Art',
    price: 320,
    image: '/src/assets/images/project_japandi_suite_1792234703263.jpg',
    designer: 'Artisan Céramiste Provence',
    materials: 'Terre cuite réfractaire engobée à la cendre végétale',
    inStock: false,
    dimensions: 'H 38 cm · Ø 24 cm',
    description: 'Pièce décorative singulière d’inspiration néo-archaïque. Finition brute et veloutée aux nuances de gris calcaire et beige sableux.'
  }
];
