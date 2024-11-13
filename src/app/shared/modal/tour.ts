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
  difficulty: string;
  ratingsQuantity: number;
  ratingsAverage: number;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  startLocation: Location;
  guides: Guide[];
  id: string;
}

export interface Filters {
  duration: string;
  difficulty: string;
  priceRange: string;
}
