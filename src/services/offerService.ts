import type { Offer } from "@/types/offers";
import { supabase } from "@/lib/supabase";

export async function getOffers(): Promise<Offer[]> {
    const { data, error } = await supabase
        .from("offers")
        .select("*");

    if (error) {
        throw error;
    }

    return (data ?? []).map((offer) => ({
        id: offer.id,
        title: offer.title,
        description: offer.description ?? "",
        discount: Number(offer.discount ?? 0),
        validUntil: offer.valid_until ?? "",
        image: offer.image ?? "",
        code: offer.code,
    }));
}