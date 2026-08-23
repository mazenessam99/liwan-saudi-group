
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import RestaurantCard from "../shared/RestaurantCard";
import SectionHeader from "../shared/SectionHeader";
import { getFeaturedRestaurants } from "@/lib/api/restaurants";
import PropertyLoading from "../shared/PropertyLoading";
import type { Restaurant } from "@/types/restaurants";
import useFetch from "@/hooks/useFetch";



export default function RestaurantSection() {
    const {data:restaurants,loading,error}=useFetch<Restaurant[]>(getFeaturedRestaurants);

    if (loading) {
        return (
            <PropertyLoading type="restaurant" />
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
            <SectionHeader
                eyebrow="تجارب طعام"
                title="مطاعم فاخرة"
            />

            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-3">
                {restaurants?.map((restaurant) => (
                    <RestaurantCard
                        restaurant={restaurant}
                        key={restaurant.id}
                    />
                ))}
            </div>

            <div className="mt-8 text-center">
                <Link
                    to="/restaurants"
                    className="inline-flex items-center justify-center gap-3 text-gold font-semibold hover:underline"
                >
                    عرض الكل

                    <ArrowLeft className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}