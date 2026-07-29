import CTASection from "@/components/home/CTASection";
import DestinationsSection from "@/components/home/DestinationsSection";
import { FAQSection } from "@/components/home/FAQSection";
import HotelsSection from "@/components/home/HotelsSection";
import PartnersSection from "@/components/home/PartnersSection";
import RestaurantSection from "@/components/home/RestaurantSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyLiwanSection from "@/components/home/WhyLiwanSection";

export default function Home() {
    return (
        <main className="">
            <HotelsSection/>
            <DestinationsSection/>
            <RestaurantSection/>
            <TestimonialsSection/>
            <WhyLiwanSection/>
            <FAQSection/>
            <PartnersSection/>
            <CTASection/>
        </main>
    )
}
