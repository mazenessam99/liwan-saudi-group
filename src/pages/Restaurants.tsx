import PageBanner from "@/components/shared/PageBanner";
import RestaurantCard from "@/components/shared/RestaurantCard";
import EmptyState from "@/components/shared/EmptyState";
import { useListFilters } from "@/hooks/useListFilters";
import { getAllRestaurants } from "@/lib/api/restaurants";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Search, SlidersHorizontal } from "lucide-react";
import PropertyLoading from "@/components/shared/PropertyLoading";
import useFetch from "@/hooks/useFetch";
import type { Restaurant } from "@/types/restaurants";

export default function Restaurants() {
    const {data:restaurants,loading,error}=useFetch<Restaurant[]>(getAllRestaurants);

    const {
        search,
        setSearch,
        selectedCity,
        setSelectedCity,
        cities,
        filtered: filteredRestaurants,
        clearFilters,
    } = useListFilters(restaurants ?? [], {
        getName: (restaurant: any) => restaurant.name,
        getCity: (restaurant: any) => restaurant.city,
    });

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
        <main>
            <PageBanner
                title="مطاعمنا الفاخرة"
                description="اكتشف مجموعة من أرقى المطاعم والوجهات الغذائية التي تقدم تجارب استثنائية في أجمل مدن المملكة"
            />

            <section
                aria-label="قائمة المطاعم"
                className="container mx-auto pt-12 px-4 lg:px-8"
            >
                <form
                    className="bg-card border border-border rounded-2xl p-4 mb-8 grid md:grid-cols-2 gap-3"
                >
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute top-1/2 inset-s-4 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full h-12 ps-10 pe-3 bg-background border border-border rounded-lg focus:outline-none focus:border-gold/80"
                            placeholder="ابحث عن مطعم"
                        />
                    </div>

                    {/* City */}
                    <Select
                        dir="rtl"
                        value={selectedCity}
                        onValueChange={setSelectedCity}
                    >
                        <SelectTrigger className="h-12 w-full bg-background border-border rounded-lg px-3 text-sm focus:ring-0 focus-visible:ring-0">
                            <SelectValue placeholder="كل المدن" />
                        </SelectTrigger>

                        <SelectContent
                            dir="rtl"
                            className="w-(--radix-select-trigger-width) bg-card border-border rounded-lg"
                        >
                            <SelectItem
                                value="all"
                                className="cursor-pointer rounded-md text-sm focus:bg-gold focus:text-charcoal"
                            >
                                كل المدن
                            </SelectItem>

                            {cities.map((city) => (
                                <SelectItem
                                    key={city}
                                    value={city}
                                    className="cursor-pointer rounded-md text-sm focus:bg-gold focus:text-charcoal"
                                >
                                    {city}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </form>

                {/* Results count */}
                <div className="flex items-center gap-2 mb-4 text-sm">
                    <SlidersHorizontal className="w-4 h-4" />

                    <span className="text-gold">
                        {filteredRestaurants.length}
                    </span>

                    نتيجة
                </div>

                {/* Restaurants */}
                <section aria-label="المطاعم">
                    {filteredRestaurants.length === 0 ? (
                        <EmptyState
                            title="لا توجد نتائج مطابقة"
                            description="جرّب تغيير كلمة البحث أو إزالة بعض الفلاتر للعثور على نتائج"
                            actionLabel="مسح كل الفلاتر"
                            onAction={clearFilters}
                        />
                    ) : (
                        <div className="grid md:grid-cols-3 gap-6">
                            {filteredRestaurants.map((restaurant) => (
                                <RestaurantCard
                                    restaurant={restaurant}
                                    key={restaurant.id}
                                />
                            ))}
                        </div>
                    )}
                </section>
            </section>
        </main>
    );
}