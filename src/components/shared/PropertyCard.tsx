import type { Hotel } from "@/types/hotels";
import { Link } from "react-router-dom";
import { Heart, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

interface HotelCardProps {
    hotel: Hotel;
    id: string;
}

export default function PropertyCard({ hotel, id}: HotelCardProps) {

    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
            }}
            className="relative bg-card rounded-2xl overflow-hidden border border-border group shado-sm hover:shadow-luxe transition-shadow">
            <Link to={`/${hotel.type}/${id}`} className="block">
                <div className="relative aspect-4/3 overflow-hidden">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-linear-to-t from black/60 via transparent to-transparent" />
                    <button onClick={(e) => e.preventDefault()} className="absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur bg-black/40 text-white cursor-pointer hover:bg-gold hover:text-charcoal transition-colors">
                        <Heart className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-3 right-3 flex flex-wrap gap-1">
                        {hotel.tags.map(tag => (
                            <span className="inline-block  bg-gold text-charcoal font-semibold text-[10px] px-2 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>
                </div>
                {/* Content */}
                <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-muted-foreground text-xs inline-flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-gold" />
                            {hotel.city}
                        </span>
                        <span className="text-gold text-xs flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            {hotel.rating}
                            <span className="text-muted-foreground">({hotel.reviewCount})</span>
                        </span>
                    </div>
                    <h3 className="font-bold text-base line-clamp-1 mt-2">{hotel.name}</h3>
                    <p className="text-muted-foreground text-sm min-h-10 line-clamp-2 mt-1 mb-3">{hotel.description}</p>
                    {/* Price + Details */}
                    <div>
                        <span className="text-xs text-muted-foreground mb-1">ابتداءً من</span>
                        <div className="flex items-center justify-between ">
                            {/* Price */}
                            <div className="font-bold text-gold flex items-center gap-1">
                                <span dir="ltr">
                                    {hotel.pricePerNight}
                                </span>
                                <span className="text-xs mt-1">
                                    {hotel.currency} 
                                    <span className="text-muted-foreground ms-1">
                                        / ليلة
                                    </span>
                                </span>
                            </div>
                            {/* Details */}
                            <span
                                className="flex items-center justify-center border border-border rounded-full px-4 py-1 text-gold 
                                    text-xs font-semibold transition-all duration-500 group-hover:bg-gold group-hover:text-charcoal">
                                عرض التفاصيل
                            </span>

                        </div>
                    </div>
                </div>
            </Link>


        </motion.div>
    );
}

