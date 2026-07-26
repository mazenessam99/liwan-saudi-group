import PropertyListing from "@/components/shared/PropertyListing";
import { hotels } from "@/data/hotels";
export default function Hotels() {

  return (
    <PropertyListing items={hotels} title="فنادقنا الفاخرة" description="اكتشف أرقى الفنادق" />
  );
  
}