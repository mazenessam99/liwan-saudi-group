import { supabase } from '../supabase'
export async function getAllProperties(type?: 'hotel' | 'resort') {
    let query = supabase.from('properties').select('*')
    if (type) query = query.eq('type', type)
    const { data, error } = await query
    if (error) throw error
    return data
}
export async function getPropertyBySlug(slug: string) {
    const { data, error } = await supabase
        .from('properties')
        .select('*, rooms(*), reviews(*)')
        .eq('slug', slug)
        .single()
    if (error) throw error
    return data
}