import type { Hotel } from "@/types/hotels";

import PageBanner from "./PageBanner";
import PropertyCard from "./PropertyCard";
import EmptyState from "./EmptyState";
import { useListFilters } from "@/hooks/useListFilters";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";

interface Props {
    items: Hotel[];
    title: string;
    description: string;
}

const sortFns = {
    "low-price": (a: Hotel, b: Hotel) => a.pricePerNight - b.pricePerNight,
    "high-price": (a: Hotel, b: Hotel) => b.pricePerNight - a.pricePerNight,
    "rating": (a: Hotel, b: Hotel) => b.rating - a.rating,
    "featured": (a: Hotel, b: Hotel) => Number(b.featured) - Number(a.featured),
};


export default function PropertyListing({
    items,
    title,
    description
}: Props) {
    const {
        search,
        setSearch,
        selectedCity,
        setSelectedCity,
        cities,
        sortBy,
        setSortBy,
        filtered: sorted,
        clearFilters,
    } = useListFilters(items, {
        getName: (item: Hotel) => item.name,
        getCity: (item: Hotel) => item.city,
        sortFns,
        defaultSort: "featured",
    });

    return (
        <main>
            <PageBanner
                title={title}
                description={description}
            />
            <section aria-label="property filters" className="container mx-auto px-4 lg:px-8 py-10">
                <form className="bg-card border border-border rounded-2xl p-4 mb-8 grid md:grid-cols-4 gap-3">

                    {/* Search */}
                    <div className="relative md:col-span-2">
                        <Search className="absolute top-1/2 inset-s-4 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full h-12 ps-10 pe-3 bg-background border border-border rounded-lg focus:outline-none focus:border-gold/80"
                            placeholder="ابحث عن فندق"
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

                    {/* Sort */}
                    <Select
                        dir="rtl"
                        value={sortBy}
                        onValueChange={(value) => setSortBy(value)}
                    >

                        <SelectTrigger className="h-12 w-full bg-background border-border rounded-lg px-3 text-sm focus:ring-0 focus-visible:ring-0">
                            <SelectValue placeholder="مميز" />
                        </SelectTrigger>

                        <SelectContent
                            dir="rtl"
                            className="w-(--radix-select-trigger-width) bg-card border-border rounded-lg"
                        >

                            <SelectItem
                                value="featured"
                                className="cursor-pointer rounded-md text-sm focus:bg-gold focus:text-charcoal"
                            >
                                مميز
                            </SelectItem>

                            <SelectItem
                                value="low-price"
                                className="cursor-pointer rounded-md text-sm focus:bg-gold focus:text-charcoal"
                            >
                                السعر: الأقل أولاً
                            </SelectItem>

                            <SelectItem
                                value="high-price"
                                className="cursor-pointer rounded-md text-sm focus:bg-gold focus:text-charcoal"
                            >
                                السعر: الأعلى أولاً
                            </SelectItem>

                            <SelectItem
                                value="rating"
                                className="cursor-pointer rounded-md text-sm focus:bg-gold focus:text-charcoal"
                            >
                                التقييم
                            </SelectItem>
                        </SelectContent>

                    </Select>

                </form>

                <div className="flex items-center gap-2 mb-4 text-sm">
                    <SlidersHorizontal className="w-4 h-4" />
                    <span className="text-gold">{sorted.length}</span>
                    نتيجة
                </div>
                <section aria-label="properties">
                    {
                        sorted.length === 0 ?
                            <EmptyState
                                title="لا توجد نتائج مطابقة"
                                description="جرّب تغيير كلمة البحث أو إزالة بعض الفلاتر للعثور على نتائج"
                                actionLabel="مسح كل الفلاتر"
                                onAction={clearFilters}
                            />
                            :
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {
                                    sorted.map(item => (
                                        <PropertyCard
                                            key={item.id}
                                            hotel={item}
                                            id={item.id}
                                        />
                                    ))
                                }
                            </div>
                    }
                </section>

            </section>
        </main>

    )
}