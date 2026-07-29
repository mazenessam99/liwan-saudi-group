import StorySection from "@/components/about/StorySection";
import StatsSection from "@/components/about/StatsSection";
import ValuesSection from "@/components/about/ValuesSection";
import OurVisionSection from "@/components/about/OurVisionSection";
import SaudiVision from "@/components/about/SaudiVision";
import InnerHero from "@/components/shared/InnerHero";
import hero from '../assets/hero-about.jpg'
import CTASection from "@/components/about/CTASection";


export default function About() {
    return (
        <main className="">
            <InnerHero image={hero} eyebrow="من نحن" title="ضيافة سعودية بمعايير عالمية" description="ليوان مجموعة سعودية رائدة في الضيافة الفاخرة، نُلهم ضيوفنا برحلات استثنائية تجمع بين أصالة المملكة وروعة الحداثة."/>
            <StorySection/>
            <StatsSection/>
            <ValuesSection/>
            <SaudiVision/>
            <OurVisionSection/>
            <CTASection/>

        </main>
    )
}
