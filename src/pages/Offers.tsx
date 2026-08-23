import OfferCard from "@/components/shared/OfferCard";
import PageBanner from "@/components/shared/PageBanner";
import PropertyLoading from "@/components/shared/PropertyLoading";
import useFetch from "@/hooks/useFetch";
import { getOffers } from "@/services/offerService";
import type { Offer } from "@/types/offers";


export default function Offers() {
    const {data:offers,loading,error}=useFetch<Offer[]>(getOffers);
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
                    {offers?.map((offer)=>(
                        <OfferCard offer={offer}/>
                    ))}
                </div>
            </section>
        </main>
    )
}
