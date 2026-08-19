import { useEffect, useState } from "react";
import PropertyListing from "@/components/shared/PropertyListing";
import { getProperties } from "@/services/propertyService";
import type { Hotel } from "@/types/hotels";
import { HotelIcon } from "lucide-react";

export default function Resorts() {
    const [resorts, setResorts] = useState<Hotel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchResorts() {
            try {
                const data = await getProperties('resort');
                setResorts(data);
            } catch (error) {
                console.error(error);
                setError("حدث خطأ أثناء تحميل المنتجعات");
            } finally {
                setLoading(false);
            }
        }

        fetchResorts();
    }, []);

    if (loading) {
        return (
            <main className="container mx-auto px-4 py-20 flex items-center justify-center gap-3 text-center">
                <HotelIcon className="text-gold"/>
                <p className="text-bold text-2xl">جارى <span className="text-gold">تحميل </span>المنتجعات </p>
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
        <PropertyListing
            items={resorts}
            title="منتجعاتنا الفاخرة"
            description="اكتشف أرقى المنتجعات"
        />
    );
}