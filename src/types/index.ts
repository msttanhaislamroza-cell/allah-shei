export interface PerfumeNotes {
  top: string[];
  heart: string[];
  base: string[];
}

export type PerfumeCollection =
  | 'All'
  | 'Oud Collection'
  | 'Fresh Collection'
  | 'Evening Collection'
  | 'Signature Collection';

export interface Perfume {
  id: string;
  name: string;
  nameAr: string;
  subName?: string;
  collection: 'Oud Collection' | 'Fresh Collection' | 'Evening Collection' | 'Signature Collection';
  collectionAr: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  volume: string;
  concentration: 'Extrait de Parfum' | 'Eau de Parfum' | 'Parfum';
  image: string;
  description: string;
  descriptionAr: string;
  notes: PerfumeNotes;
  accords: string[];
  longevity: string;
  sillage: string;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  inStock: boolean;
  badge?: string;
}

export interface CartItem {
  perfume: Perfume;
  quantity: number;
  selectedVolume: string;
  engravingText?: string;
}

export interface CustomerReview {
  id: string;
  perfumeId: string;
  perfumeName: string;
  author: string;
  authorAr?: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export type CurrencyCode = 'USD' | 'AED' | 'SAR' | 'GBP' | 'EUR';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number; // multiplier from USD
}
