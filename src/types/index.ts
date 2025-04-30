export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string[];
  date: string;
  featured: boolean;
  imageUrl: string;
  headline: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export type Theme = 'light' | 'dark';
