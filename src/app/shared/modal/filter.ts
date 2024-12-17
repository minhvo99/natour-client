export interface Option {
    id: number;
    name: string;
}

export const DIFFICULTY: Option[] = [
    { id: 1, name: 'easy' },
    { id: 2, name: 'medium' },
    { id: 3, name: 'difficult' },
];

export const DURATION: Option[] = [
    { id: 1, name: '1-3 days' },
    { id: 2, name: '4-7 days' },
    { id: 3, name: '8-14 days' },
];

export const PRICE_RANGE: Option[] = [
    { id: 1, name: '$0 - $500' },
    { id: 2, name: '$500 - $1000' },
    { id: 3, name: '$1000 - $1500' },
    { id: 4, name: '$1500+' },
];

export const SORT_BY: Option[] = [
    { id: 1, name: 'Price: Low to High' },
    { id: 2, name: 'Price: High to Low' },
    { id: 3, name: 'Rating: Low to High' },
    { id: 4, name: 'Rating: High to Low' },
];