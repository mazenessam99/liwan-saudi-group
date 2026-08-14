import { supabase } from "../supabase";

export async function getAllRestaurants() {
    const { data, error } = await supabase
        .from("restaurants")
        .select("*");

    if (error) {
        throw error;
    }

    return data ?? [];
}

export async function getFeaturedRestaurants() {
    const { data, error } = await supabase
        .from("restaurants")
        .select("*")
        .order("rating", { ascending: false })
        .limit(3);

    if (error) {
        throw error;
    }

    return data ?? [];
}

export async function getRestaurantBySlug(slug: string) {
    const { data, error } = await supabase
        .from("restaurants")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error) {
        throw error;
    }

    return data;
}