
export interface HotelReview {
    id: string;
    author: string;
    city: string;
    rating: number;
    text: string;
    date: string;
    avatar: string;
}

export interface HotelService {
    icon: string;
    title: string;
    desc: string;
}

export interface HotelContact {
    phone: string;
    reservationExt: string;
    conciergeExt: string;
    roomServiceExt: string;
    spaExt: string;
    email: string;
    whatsapp: string;
    languages: string;
}

export interface Hotel {
    id: string;
    slug: string;
    name: string;
    brand: string;
    city: string;
    type: "hotel" | "resort" | "apartment";
    description: string;
    longDescription: string;
    image: string;
    gallery: string[];
    rating: number;
    reviewCount: number;
    pricePerNight: number;
    currency: string;
    amenities: string[];
    tags: string[];
    address: string;
    contact: HotelContact;
    services: HotelService[];
    reviews: HotelReview[];
    featured?: boolean;
}