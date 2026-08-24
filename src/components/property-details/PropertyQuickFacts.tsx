
import type { Hotel } from "@/types/hotels";
import { BadgeCheck, MapPin, Sparkles, Star } from "lucide-react";

interface PropertyProps {
    hotel: Hotel;
}

export default function PropertyQuickFacts({ hotel }: PropertyProps) {
    const facts = [
        {
            title: "التقييم",
            value: hotel.rating,
            icon: Star,
        },
        {
            title: "المدينة",
            value: hotel.city,
            icon: MapPin,
        },
        {
            title: "المرافق",
            value: `+${hotel.amenities.length}`,
            icon: Sparkles,
        },
        {
            title: "التصنيف",
            value: hotel.tags?.[Math.floor(Math.random()* hotel.tags.length)],
            icon: BadgeCheck,
        },
    ]
    return (
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {facts.map((fact) => {
                const Icon = fact.icon;
                return (
                    <div key={fact.title} className="bg-card rounded-xl border border-gold/20 px-4 py-3 flex items-center gap-3">
                        <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gold/20">
                            <Icon className="w-4 h-4 text-gold" />
                        </div>

                        <div className="min-w-0 ">
                            <h6 className="text-[10px] tracking-wider text-muted-foreground">{fact.title}</h6>
                            <span className="font-bold text-sm truncate">{fact.value}</span>
                        </div>

                    </div>
                )
            } )}

        </section>

)}