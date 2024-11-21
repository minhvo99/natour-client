export interface Guide {
  name: string;
  email: string;
  photo: string;
  id: string;
}

export interface Tour {
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string
  ratingsQuantity: number;
  ratingsAverage: number;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  startLocation?: any;
  guides: Guide[];
  id: string;
  createdAt: Date;
  startDates?: any[];
  secretTour?: boolean;
  location?: any[];
  slug: string;
  durationWeeks?: number;
  reviews?: any[];
}

export interface Filters {
  duration: string;
  difficulty: string;
  priceRange: string;
}
