export interface Room {
    id: string;
    propertyId: string;
    propertyName: string;

    name: string;
    type: string;
    description: string;

    image: string;
    gallery: string[];

    pricePerNight: number;
    size: number;
    beds: number;
    guests: number;

    amenities: string[];
    isAvailable: boolean;
}