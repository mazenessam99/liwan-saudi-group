import type { Hotel } from "@/types/hotels";
import DetailSection from "./DetailSection";
import { serviceIcons } from "@/utils/serviceIcons";

interface PropertyServicesProps {
    hotel: Hotel
}

export default function PropertyServices({ hotel }: PropertyServicesProps) {
    return (
        <section className="bg-card border border-border rounded-xl p-6 mt-6">
            <DetailSection eyebrow="خدمات استثنائية" title="خدمة تفوق التوقعات" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {hotel.services.map((service) => {
                        const Icon =serviceIcons[service.icon as keyof typeof serviceIcons];
                        return (
                            <div className="relative bg-background/60 flex gap-4 p-5 border border-border rounded-xl cursor-pointer hover:border-gold/80 hover:shadow-luxe transition-all overflow-hidden">
                                <div className="flex items-center justify-center shrink-0 w-10 h-10 rounded-xl gradient-gold">
                                    <Icon className="w-5 h-5"/>
                                </div>
                                <div>
                                    <h6 className="font-bold">{service.title}</h6>
                                    <p className="text-muted-foreground leading-relaxed  text-sm md:text-[16px] mt-2">{service.desc}</p>
                                </div>
                            </div>
                        )

                    })}
                
            </div>
        </section>
    )
}
