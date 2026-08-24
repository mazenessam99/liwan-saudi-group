import type { Hotel } from "@/types/hotels"
import DetailSection from "./DetailSection"

interface PropertyProps{
    hotel:Hotel
}
export default function PropertyOverview({hotel}:PropertyProps) {
    return (
        <section className="bg-card border border-border rounded-xl p-6 mt-10">
            <DetailSection eyebrow='نظرة عامة' title="عن العقار"/>
            <p className="text-muted-foreground md:text-[19px] leading-loose mt-3 md:line-clamp-2">{hotel.longDescription}</p>
        </section>
    )
}
