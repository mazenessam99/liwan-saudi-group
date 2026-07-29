import { Eye, Rocket, Target } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import FeatureCard from "../shared/FeatureCard";

export default function OurVisionSection() {
     const features = [
        {
            id:'1',
            icon: Eye,
            title: "الرؤية",
            description:
                "أن نكون العلامة السعودية الأولى عالمياً في الضيافة الفاخرة بحلول 2030، مرجعاً للأصالة والابتكار.",
        },
        {
            id:'2',
            icon: Target,
            title: " الرسالة",
            description:
                "نخلق تجارب استثنائية تحتفي بإرث المملكة، وتقدّم ضيافة قلبية بمعايير عالمية لا تُنسى.",
        },
        {
            id:'3',
            icon: Rocket,
            title: "الطموح",
            description:
                "التوسع إلى 100 عقار فاخر، وريادة قطاع الضيافة في منطقة الخليج والشرق الأوسط",
        },
        
    ];
    return (
        <section className="bg-muted/30 py-20">
            <SectionHeader eyebrow="رؤيتنا" title="نحو ضيافة تُلهم العالم" subtitle="ثلاث ركائز ترسم مستقبل ليوان وتوجّه كل قرار نتخذه."/>
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-5">
                {features.map(feature=>(
                    <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} key={feature.id}/>
                ))}

            </div>

        </section>
    )
}
