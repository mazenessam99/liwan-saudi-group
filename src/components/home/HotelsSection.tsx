import { hotels } from "@/data/hotels";
import SectionHeader from "../shared/SectionHeader";
import HotelCard from "../shared/HotelCard";

export default function HotelsSection() {

    return (
        <section className="py-20">
            <SectionHeader eyebrow="اختيارات نُزُل" title="فنادق مميزة" subtitle="اكتشف نخبة من أرقى فنادقنا في أجمل الوجهات السعودية" />
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-3 gap-4">
                    {hotels.slice(0, 6).map((hotel) => (
                        <HotelCard hotel={hotel} id={hotel.id} key={hotel.id} />
                    ))}
                </div>
            </div>


        </section>
    )
}
