
import type { Attraction } from "@/types/attractions";
import { supabase } from "@/lib/supabase";

export async function getAttractions(): Promise<Attraction[]> {
    const {data,error}=await supabase
    .from('attractions')
    .select('*')
    if(error){
        throw error;
    }
    return data ?? [];
}