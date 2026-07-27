export interface MenuItem {
    name: string;
    description: string;
    price: number;
}
export interface MenuCategory {
    category: string;
    items: MenuItem[];
}
export interface Restaurant {
    id: string;
    slug: string;
    name: string;
    cuisine: string;
    cuisineType: string;
    city: string;
    description: string;
    longDescription: string;
    image: string;
    gallery: string[];
    rating: number;
    reviewCount: number;
    priceRange: string;
    hours: {
        breakfast: string;
        lunch: string;
        dinner: string;
    };
    menu: MenuCategory[];
    drinks: MenuCategory[];
}