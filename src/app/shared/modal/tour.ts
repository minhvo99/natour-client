export interface Guide {
  name: string;
  email: string;
  photo: string;
  id: string;
}
interface Difficylty {
  easy: string;
  medium: string;
  difficult: string;
}

export interface Tour {
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: Difficylty;
  ratingsQuantity: number;
  ratingsAverage: number;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  startLocation?: any;
  guides?: Guide[];
  id: string;
  createdAt: Date;
  startDates?: Date[];
  secretTour?: boolean;
  location?: any[];
  slug: string;
  durationWeeks?: number;
}

export interface Filters {
  duration: string;
  difficulty: string;
  priceRange: string;
}
