import type { Hotel } from "@/types/hotels"
import DetailSection from "./DetailSection"
import { Calendar } from "../ui/calendar"
import { Users } from "lucide-react"
import toast from "react-hot-toast"

interface PropertyBookingProps {
    hotel: Hotel
} 

export default function PropertyBooking({hotel}:PropertyBookingProps) {
    return (
        <section className="bg-card rounded-xl container mx-auto p-6 mt-4 border border-border ">
            <DetailSection eyebrow="الحجز" title="احجز إقامتك"/>
            <div className="flex flex-col lg:flex-row lg:items-end gap-6">
                <div className="shrink-0">
                    <div className="text-xs text-muted-foreground mb-1">ابتداءً من</div>
                    <div className="text-4xl font-bold text-gold leading-none"> <span className="text-base">SAR</span>{hotel.pricePerNight}</div>
                    <div className="text-xs text-muted-foreground mt-1">/ ليلة</div>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="border border-border rounded-xl bg-background/60 px-3 py-2">
                        <input type="date" className="bg-transparent outline-none text-sm w-full"/>
                    </div>
                    <div className="border border-border rounded-xl bg-background/60 px-3 py-2">
                        <input type="date" className="bg-transparent outline-none text-sm w-full"/>
                    </div>
                    <div className="flex items-center gap-2 border border-border rounded-xl bg-background/60 px-3 py-2">
                        <Users className="w-4 h-4 text-gold"/>
                        <input type="number" defaultValue={2} min={1} className="flex-1 bg-transparent outline-none text-sm w-full"/>
                    </div>
                </div>
                <button onClick={() => toast.success("تم استلام طلب الحجز")} className="gradient-gold text-charcoal font-bold px-10 py-3.5 rounded-2xl hover:opacity-90 transition shrink-0 cursor-pointer">
                        احجز الآن
                </button>

            </div>

        </section>
    )
}
