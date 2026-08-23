import PropertyListing from "@/components/shared/PropertyListing";
import { getProperties } from "@/services/propertyService";
import type { Hotel } from "@/types/hotels";
import PropertyLoading from "@/components/shared/PropertyLoading";
import useFetch from "@/hooks/useFetch";

export default function Resorts() {
    const {data:resorts,loading,error}=useFetch<Hotel[]>( () => getProperties("resort"));

    if (loading) {
        return (
            <PropertyLoading type="resort"/>
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
            items={resorts ?? []}
            title="منتجعاتنا الفاخرة"
            description="اكتشف أرقى المنتجعات"
        />
    );
}