import type { Hotel } from "@/types/hotels";
import { Link } from "react-router-dom";
import { Heart, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

interface HotelCardProps {
    hotel: Hotel;
    id: string;
}

export default function HotelCard({ hotel, id }: HotelCardProps) {

    return (
        <motion.div
            whileHover={{ y: -6 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
            }}
            className="relative bg-card rounded-2xl overflow-hidden border border-border group shado-sm hover:shadow-luxe transition-shadow">
            <Link to={id} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from black/60 via transparent to-transparent" />
                    <button className="absolute top-3 left-3 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur bg-black/40 text-white cursor-pointer hover:bg-gold hover:text-charcoal transition-colors">
                        <Heart className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-3 right-3 flex flex-wrap gap-1">
                        {hotel.tags.map(tag => (
                            <span className="inline-block  bg-gold text-charcoal font-semibold text-[10px] px-2 py-1 rounded-full">{tag}</span>
                        ))}
                    </div>

                </div>
            </Link>


        </motion.div>
    );
}

