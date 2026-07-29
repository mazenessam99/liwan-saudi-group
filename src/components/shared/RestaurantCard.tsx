import type { Restaurant } from "@/types/restaurants";
import { optimizeImage } from "@/utils/cloudinary";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface RestaurantCardProps {
    restaurant:Restaurant
}


export default function RestaurantCard({restaurant}:RestaurantCardProps) {
    return (
        <div className="relative border border-border rounded-2xl bg-card group hover:shadow-luxe overflow-hidden">
            <Link to={`/restaurant/${restaurant.id}`}>
            <div className="relative aspect-4/3 overflow-hidden">
                <img src={optimizeImage(restaurant.image,800,600) } alt={restaurant.name} className=" w-full h-full object-cover group-hover:scale-105 duration-500 transition-transform" />

            </div>
            <div className="p-5">
                <span className="block text-sm text-gold mb-2">{restaurant.cuisine}</span>
                <h3 className="font-semibold text-lg mb-2">{restaurant.name}</h3>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {restaurant.city}
                    </span>
                    <span className="text-gold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        {restaurant.rating}
                    </span>
                </div>
            </div>
            </Link>
            
        </div>
    )
}
