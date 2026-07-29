import { hotels } from "@/data/hotels";
import SectionHeader from "../shared/SectionHeader";
import PropertyCard from "../shared/PropertyCard";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function HotelsSection() {

    return (
        <section className="py-20">
            <SectionHeader eyebrow="اختيارات ليوان" title="فنادق مميزة" subtitle="اكتشف نخبة من أرقى فنادقنا في أجمل الوجهات السعودية" />
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {hotels.slice(0, 6).map((hotel) => (
                        <PropertyCard hotel={hotel} id={hotel.id} key={hotel.id} />
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <Link to='/hotels' className="inline-flex items-center justify-center gap-3 text-gold font-semibold hover:underline">
                        عرض الكل
                        <ArrowLeft className="w-4 h-4"/>
                    </Link>
                </div>
            </div>


        </section>
    )
}
