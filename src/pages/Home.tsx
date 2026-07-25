import CTASection from "@/components/home/CTASection";
import DestinationsSection from "@/components/home/DestinationsSection";
import { FAQSection } from "@/components/home/FAQSection";
import HotelsSection from "@/components/home/HotelsSection";
import PartnersSection from "@/components/home/PartnersSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyNuzulSection from "@/components/home/WhyNuzulSection";

export default function Home() {
    return (
        <main className="">
            <HotelsSection/>
            <DestinationsSection/>
            <TestimonialsSection/>
            <WhyNuzulSection/>
            <FAQSection/>
            <PartnersSection/>
            <CTASection/>
        </main>
    )
}
