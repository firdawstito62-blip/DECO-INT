export interface Project {
  id: string;
  title: string;
  category: 'salon' | 'suite' | 'cuisine' | 'complet';
  categoryLabel: string;
  location: string;
  surface: number; // in m²
  year: string;
  image: string;
  beforeImage?: string;
  tagline: string;
  description: string;
  materials: string[];
  keyHighlights: string[];
  completionWeeks: number;
}

export interface DecorProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  designer: string;
  materials: string;
  inStock: boolean;
  dimensions: string;
  description: string;
}

export interface CartItem {
  product: DecorProduct;
  quantity: number;
  selectedFinish?: string;
}

export interface StylePalette {
  id: string;
  name: string;
  roomName: string;
  atmosphere: string;
  description: string;
  colors: {
    name: string;
    hex: string;
    description: string;
  }[];
  materials: {
    name: string;
    texture: string;
    description: string;
  }[];
  lightingTip: string;
  sampleItems: string[];
}

export interface ProjectEstimate {
  roomType: string;
  surface: number;
  style: string;
  scope: 'conseil' | 'mobilier' | 'cle_en_main';
  customWoodwork: boolean;
  artCuration: boolean;
  architecturalLighting: boolean;
  highEndAppliances: boolean;
  designFees: number;
  renovationFees: number;
  furnishingFees: number;
  totalEstimated: number;
  durationWeeks: { min: number; max: number };
}

export interface ConsultationRequest {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  projectType: string;
  surface: string;
  budgetRange: string;
  selectedDate?: string;
  notes: string;
}
