import { supabase } from "@/lib/supabase";
import type { Hotel } from "@/types/hotels";

export async function getProperties(type:'hotel'|'resort'): Promise<Hotel[]> {
    const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("type", type);

    if (error) {
        throw error;
    }

    return (data ?? []).map((property) => ({
        id: property.id,
        slug: property.slug,
        name: property.name,
        brand: property.brand,
        city: property.city,
        type: property.type,
        description: property.description,
        longDescription: property.long_description,
        image: property.image,
        gallery: property.gallery ?? [],
        rating: property.rating,
        reviewCount: property.review_count,
        pricePerNight: property.price_per_night,
        currency: property.currency,
        amenities: property.amenities ?? [],
        tags: property.tags ?? [],
        address: property.address,
        contact: property.contact,
        services: property.services ?? [],
        reviews: [],
        featured: property.featured ?? false,
    }));
}

