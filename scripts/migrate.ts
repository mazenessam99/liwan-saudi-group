import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'
import ws from 'ws'

import { hotels } from '../src/data/hotels'
import { resorts } from '../src/data/resorts'
import { restaurants } from '../src/data/restaurants'
import { rooms } from '../src/data/rooms'

const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
        realtime: {
            transport: ws as any,
        },
    }
)

async function migrateProperties() {
    const allProperties = [...hotels, ...resorts].map((p) => ({
        slug: p.slug,
        name: p.name,
        brand: p.brand,
        city: p.city,
        type: p.type,
        description: p.description,
        long_description: p.longDescription,
        image: p.image,
        gallery: p.gallery,
        rating: p.rating,
        review_count: p.reviewCount,
        price_per_night: p.pricePerNight,
        currency: p.currency,
        amenities: p.amenities,
        tags: p.tags,
        address: p.address,
        contact: p.contact,
        services: p.services,
        featured: p.featured,
    }))

    const { data, error } = await supabase
        .from('properties')
        .insert(allProperties)
        .select()

    if (error) throw error

    console.log(`تم رفع ${data.length} فندق/منتجع`)

    return data
}

async function migrateReviews(insertedProperties: any[]) {
    const allSourceProperties = [...hotels, ...resorts]

    const reviewRows = allSourceProperties.flatMap((p) => {
        const matched = insertedProperties.find(
            (ip) => ip.slug === p.slug
        )

        return p.reviews.map((r: any) => ({
            property_id: matched.id,
            author_name: r.author,
            author_city: r.city,
            rating: r.rating,
            text: r.text,
            avatar: r.avatar,
        }))
    })

    const { error } = await supabase
        .from('reviews')
        .insert(reviewRows)

    if (error) throw error

    console.log(`تم رفع ${reviewRows.length} تقييم`)
}

async function migrateRooms(insertedProperties: any[]) {
    const roomRows = rooms.map((r) => {
        const sourceHotel = [...hotels, ...resorts].find(
            (h) => h.id === r.hotelId
        )

        const matched = insertedProperties.find(
            (ip) => ip.slug === sourceHotel?.slug
        )

        return {
            property_id: matched.id,
            name: r.name,
            type: r.type,
            description: r.description,
            image: r.image,
            gallery: r.gallery,
            price_per_night: r.pricePerNight,
            size: r.size,
            beds: r.beds,
            guests: r.guests,
            amenities: r.amenities,
        }
    })

    const { error } = await supabase
        .from('rooms')
        .insert(roomRows)

    if (error) throw error

    console.log(`تم رفع ${roomRows.length} غرفة`)
}

async function migrateRestaurants() {
    const restaurantRows = restaurants.map((r) => ({
        slug: r.slug,
        name: r.name,
        cuisine: r.cuisine,
        cuisine_type: r.cuisineType,
        city: r.city,
        image: r.image,
        gallery: r.gallery,
        description: r.description,
        long_description: r.longDescription,
        rating: r.rating,
        review_count: r.reviewCount,
        price_range: r.priceRange,
        hours: r.hours,
        menu: r.menu,
        drinks: r.drinks,
    }))

    const { error } = await supabase
        .from('restaurants')
        .insert(restaurantRows)

    if (error) throw error

    console.log(`تم رفع ${restaurantRows.length} مطعم`)
}

async function run() {
    const insertedProperties = await migrateProperties()

    await migrateReviews(insertedProperties)
    await migrateRooms(insertedProperties)
    await migrateRestaurants()

    console.log('تم الترحيل بنجاح')
}

run().catch((error) => {
    console.error('Migration failed:')
    console.error(error)
    process.exit(1)
})