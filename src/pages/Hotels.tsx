import { useEffect, useState } from "react";
import PropertyListing from "@/components/shared/PropertyListing";
import { getProperties } from "@/services/propertyService";
import type { Hotel } from "@/types/hotels";

export default function Hotels() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchHotels() {
      try {
        const data = await getProperties('hotel');
        setHotels(data);
      } catch (error) {
        console.error(error);
        setError("حدث خطأ أثناء تحميل الفنادق");
      } finally {
        setLoading(false);
      }
    }

    fetchHotels();
  }, []);

  if (loading) {
    return (
      <main className="container mx-auto px-4 py-20 text-center">
        جاري تحميل الفنادق...
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
      items={hotels}
      title="فنادقنا الفاخرة"
      description="اكتشف أرقى الفنادق"
    />
  );
}