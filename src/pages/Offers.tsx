import OfferCard from "@/components/shared/OfferCard";
import PageBanner from "@/components/shared/PageBanner";
import PropertyLoading from "@/components/shared/PropertyLoading";
import { getOffers } from "@/services/offerService";
import type { Offer } from "@/types/offers";
import { useEffect, useState } from "react";


export default function Offers() {
    const [offers, setOffers] = useState<Offer[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        async function fetchHotels() {
            try {
                const data = await getOffers();
                await new Promise((resolve) => setTimeout(resolve, 1100));
                setOffers(data);
            } catch (error) {
                console.error(error);
                setError("حدث خطأ أثناء تحميل العروض");
            } finally {
                setLoading(false);
            }
        }

        fetchHotels();
    }, []);

    if (loading) {
        return (
            <PropertyLoading type="offers" />
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
        <main className="">
            <PageBanner title="العروض الحصرية" description="أكثر من 30 عرضاً استثنائياً لإقامة لا تُنسى" />
            <section className="container px-4 mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {offers.map((offer)=>(
                        <OfferCard offer={offer}/>
                    ))}
                </div>
            </section>
        </main>
    )
}
