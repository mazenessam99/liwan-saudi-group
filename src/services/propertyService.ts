import type { Hotel } from "@/types/hotels";
import type { Room } from "@/types/rooms";
import { supabase } from "@/lib/supabase";

export async function getProperties(
    type: "hotel" | "resort"
): Promise<Hotel[]> {
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
        brand: property.brand ?? "",
        city: property.city,
        type: property.type,
        description: property.description ?? "",
        longDescription: property.long_description ?? "",
        rooms: [],
        image: property.image ?? "",
        gallery: property.gallery ?? [],
        rating: Number(property.rating ?? 0),
        reviewCount: property.review_count ?? 0,
        pricePerNight: Number(property.price_per_night ?? 0),
        currency: property.currency ?? "SAR",
        amenities: property.amenities ?? [],
        tags: property.tags ?? [],
        address: property.address ?? "",
        contact: property.contact ?? {
            phone: "",
            reservationExt: "",
            conciergeExt: "",
            roomServiceExt: "",
            spaExt: "",
            email: "",
            whatsapp: "",
            languages: "",
        },

        services: property.services ?? [],

        reviews: [],

        featured: property.featured ?? false,
    }));
}

export async function getPropertyById(id: string): Promise<Hotel> {
    const { data: property, error: propertyError } = await supabase
        .from("properties")
        .select("*")
        .eq("id", id)
        .single();
    if (propertyError) {
        throw propertyError;
    }
    const { data: rooms, error: roomsError } = await supabase
        .from("rooms")
        .select("*")
        .eq("property_id", property.id);
    if (roomsError) {
        throw roomsError;
    }

    const formattedRooms: Room[] = (rooms ?? []).map((room) => ({
        id: room.id,
        propertyId: room.property_id,
        propertyName: property.name,
        name: room.name,
        type: room.type ?? "",
        description: room.description ?? "",
        image: room.image ?? "",
        gallery: room.gallery ?? [],
        pricePerNight: Number(room.price_per_night ?? 0),
        size: Number(room.size ?? 0),
        beds: room.beds ?? 0,
        guests: room.guests ?? 0,
        amenities: room.amenities ?? [],
        isAvailable: room.is_available ?? true,
    }));

    const { data: reviews, error: reviewsError } = await supabase
        .from("reviews")
        .select("*")
        .eq("property_id", property.id);

    if (reviewsError) {
        throw reviewsError;
    }

    return {
        id: property.id,
        slug: property.slug,
        name: property.name,
        brand: property.brand ?? "",
        city: property.city,
        type: property.type,
        description: property.description ?? "",
        longDescription: property.long_description ?? "",
        rooms: formattedRooms,
        image: property.image ?? "",
        gallery: property.gallery ?? [],
        rating: Number(property.rating ?? 0),
        reviewCount: property.review_count ?? 0,
        pricePerNight: Number(property.price_per_night ?? 0),
        currency: property.currency ?? "SAR",
        amenities: property.amenities ?? [],
        tags: property.tags ?? [],
        address: property.address ?? "",
        contact: property.contact ?? {
            phone: "",
            reservationExt: "",
            conciergeExt: "",
            roomServiceExt: "",
            spaExt: "",
            email: "",
            whatsapp: "",
            languages: "",
        },

        services: property.services ?? [],
        reviews: (reviews ?? []).map((review) => ({
            id: review.id,
            author: review.author_name,
            city: review.author_city ?? "",
            rating: Number(review.rating ?? 0),
            text: review.text ?? "",
            date: review.created_at ?? "",
            avatar: review.avatar ?? "",
        })),
        featured: property.featured ?? false,
    };
}