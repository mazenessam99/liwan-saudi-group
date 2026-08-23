import { Link } from "react-router-dom";

import SectionHeader from "../shared/SectionHeader";
import { optimizeImage } from "@/utils/cloudinary";
import { getAttractions } from "@/services/attractionService";
import type { Attraction } from "@/types/attractions";
import useFetch from "@/hooks/useFetch";
import PropertyLoading from "../shared/PropertyLoading";

export default function DestinationsSection() {

    const {
        data: attractions,
        loading,
        error
    } = useFetch<Attraction[]>(getAttractions);


    const topAttractions = Object.values(
        (attractions ?? []).reduce(
            (acc, attraction) => {
                if (!acc[attraction.city]) {
                    acc[attraction.city] = attraction;
                }
                return acc;
            },
            {} as Record<string, Attraction>
        )
    ).slice(0, 6);

    if (loading) {
        return (
            <PropertyLoading type="attraction" />
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


    return (
        <section className="py-20 bg-muted/40">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionHeader
                    eyebrow="اكتشف المملكة"
                    title="وجهات لا تُنسى"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {topAttractions.map((attraction) => (
                        <Link
                            key={attraction.id}
                            to="/destinations"
                            className="group relative aspect-3/4 rounded-xl overflow-hidden"
                        >
                            <img
                                src={optimizeImage(
                                    attraction.image,
                                    600,
                                    800
                                )}
                                alt={attraction.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                            <div className="absolute bottom-3 inset-x-3 z-20">
                                <span className="text-xs text-gold tracking-wider">
                                    {attraction.category}
                                </span>
                                <p className="text-sm font-bold text-white">
                                    {attraction.city}
                                </p>
                            </div>
                        </Link>

                    ))}
                </div>
            </div>
        </section>
    );
}