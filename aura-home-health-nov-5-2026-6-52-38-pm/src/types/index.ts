export type Language = 'en' | 'es';

export interface ServiceItem {
  id: string;
  name: string;
  acronym?: string;
  description: string;
  features: string[];
}

export interface InsuranceItem {
  id: string;
  name: string;
  category: 'ltc' | 'skilled';
  notes?: string;
}

export interface CoverageCounty {
  county: string;
  description: string;
  cities: string[];
}
