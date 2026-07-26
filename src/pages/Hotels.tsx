import EmptyState from "@/components/shared/EmptyState";
import HotelCard from "@/components/shared/HotelCard";
import PageBanner from "@/components/shared/PageBanner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { hotels } from "@/data/hotels";
import type { Hotel } from "@/types/hotels";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState, useMemo } from "react";

type SortOption = "featured" | "low-price" | "high-price" | "rating";
export default function Hotels() {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const cities = useMemo(
    () => [...new Set(hotels.map((hotel) => hotel.city))],
    []
  );
  
  //Filter By Search and City
  const filteredHotels : Hotel[] = hotels.filter(hotel => {
    const matchSearch = hotel.name.includes(search);
    const matchCity = selectedCity === "all" || hotel.city === selectedCity
    return matchCity && matchSearch
  })

  // Sorted
  const sortedHotels : Hotel[]=[...filteredHotels].sort((a,b) =>{
    if(sortBy === 'low-price'){
      return a.pricePerNight - b.pricePerNight
    }
    if(sortBy === 'high-price'){
      return b.pricePerNight - a.pricePerNight
    }
    if (sortBy === "rating") {
        return b.rating - a.rating;
    }
    return 0;
  })

  //Clear Filters
  const clearFilters = () => {
    setSearch("");
    setSelectedCity("all");
    setSortBy('featured')

  };
  return (
    <section>
      <PageBanner
        title="فنادقنا الفاخرة"
        description="اكتشف مجموعة من أرقى الفنادق في أجمل وجهات المملكة"
      />

      <div className="container mx-auto px-4 lg:px-8 py-10">

        <div className="bg-card border border-border rounded-2xl p-4 mb-8 grid md:grid-cols-4 gap-3">
          <div className="relative md:col-span-2">
            <Search className="absolute top-1/2 inset-s-4 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 ps-10 pe-3 bg-background border border-border rounded-lg focus:outline-none focus:border-gold/80"
              placeholder="ابحث عن فندق"
            />
          </div>

          <Select dir="rtl" value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="h-12 w-full bg-background border-border rounded-lg px-3 text-sm focus-visible:ring-0">
              <SelectValue placeholder="كل المدن" />
            </SelectTrigger>

            <SelectContent className="bg-card border-border rounded-lg">
              <SelectItem
                value="all"
                className="cursor-pointer rounded-md focus:bg-gold focus:text-charcoal"
              >
                كل المدن
              </SelectItem>
              {cities.map((city) => (
                <SelectItem
                  key={city}
                  value={city}
                  className="cursor-pointer rounded-md focus:bg-gold focus:text-charcoal"
                >
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select dir="rtl" value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
            <SelectTrigger
              
              className="h-12 w-full bg-background border-border rounded-lg px-3 text-sm focus-visible:ring-0"
            >
              <SelectValue placeholder="مميز" />
            </SelectTrigger>

            <SelectContent
              dir="rtl"
              className="bg-card border-border rounded-lg w-(--radix-select-trigger-width)"
            >
              <SelectItem value="featured" className="cursor-pointer rounded-md focus:bg-gold focus:text-charcoal">
                مميز
              </SelectItem>
              <SelectItem value="low-price" className="cursor-pointer rounded-md focus:bg-gold focus:text-charcoal">
                السعر: الأقل أولاً
              </SelectItem>
              <SelectItem value="high-price" className="cursor-pointer rounded-md focus:bg-gold focus:text-charcoal">
                السعر: الأعلى أولاً
              </SelectItem>
              <SelectItem value="rating" className="cursor-pointer rounded-md focus:bg-gold focus:text-charcoal">
                التقييم
              </SelectItem>
            </SelectContent>
          </Select>

        </div>


        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-gold ms-1">{sortedHotels.length} </span>
          نتيجة
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedHotels.length === 0 ? (
            <EmptyState
              title="لا توجد فنادق مطابقة"
              description="جرّب تغيير كلمة البحث أو إزالة بعض الفلاتر للعثور على نتائج"
              actionLabel="مسح كل الفلاتر"
              onAction={clearFilters}
            />
          ) : (
            sortedHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} id={hotel.id} />
            ))
          )}
        </div>

      </div>
    </section>
  );
}