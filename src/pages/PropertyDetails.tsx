import PropertyQuickFacts from "@/components/property-details/PropertyQuickFacts";
import PropertyLoading from "@/components/shared/PropertyLoading";
import useFetch from "@/hooks/useFetch";
import { getPropertyById } from "@/services/propertyService";
import type { Hotel } from "@/types/hotels";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import PropertyOverview from "@/components/property-details/PropertyOverview";

export default function PropertyDetails() {
    const { id } = useParams()
    const { data: hotel, loading, error } = useFetch<Hotel>(() => getPropertyById(id!));

    if (loading) {
        return (
            <PropertyLoading type="hotel" />
        );
    }

    if (error) {
        return (
            <main className="container mx-auto px-4 py-20 text-center">
                <p className="text-red-500">
                    {error}
                </p>
            </main>
        );
    }

    if (!hotel) {
        return (
            <NotFound/>
        );
    }

    return (
        <main className="container mx-auto px-4 lg:px-8 mt-6">
            <PropertyQuickFacts hotel={hotel} />
            <PropertyOverview hotel={hotel}/>
        </main>
    )
}
