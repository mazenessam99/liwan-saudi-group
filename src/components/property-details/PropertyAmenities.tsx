import type { Hotel } from "@/types/hotels";
import DetailSection from "./DetailSection";
import { Check } from "lucide-react";
import { amenityIcons } from "@/utils/amenityIcons";

interface PropertyAmenitiesProps {
    hotel: Hotel
}

export default function PropertyAmenities({ hotel }: PropertyAmenitiesProps) {

    return (
        <section className="bg-card border border-border rounded-xl p-6 mt-10">
            <DetailSection eyebrow="المرافق" title="المرافق المتاحة" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {hotel?.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity as keyof typeof amenityIcons] ?? Check;
                    return (
                        <div className="flex items-center gap-3 text-sm bg-background/60 border border-border rounded-xl p-2 hover:border-gold hover:shadow-luxe hover:cursor-pointer transition">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold/15">
                                <Icon className="w-5 h-5 text-gold" />
                            </div>
                            <span className="font-medium leading-tight">{amenity}</span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
