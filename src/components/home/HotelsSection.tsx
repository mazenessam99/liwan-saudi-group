import { getHotels } from "@/services/propertyService";
import type { Hotel } from "@/types/hotels";
import SectionHeader from "../shared/SectionHeader";
import PropertyCard from "../shared/PropertyCard";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function HotelsSection() {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        async function fetchHotels() {
            try {
                const data = await getHotels();
                setHotels(data);
            } catch (error) {
                console.error(error);
                setError("حدث خطأ أثناء تحميل الفنادق");
            } finally {
                setLoading(false);
            }
        }

        fetchHotels();
    }, []);

    if (loading) {
        return (
            <main className="container mx-auto px-4 py-20 text-center">
                جاري تحميل الفنادق...
            </main>
        );
    }

    if (error) {
        return (
            <main className="container mx-auto px-4 py-20 text-center">
                <p className="text-red-500">{error}</p>
            </main>
        );
    }

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
                        <ArrowLeft className="w-4 h-4" />
                    </Link>
                </div>
            </div>


        </section>
    )
}
