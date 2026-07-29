import { ArrowLeft, Compass, Gem, HeartHandshake, Leaf } from "lucide-react";
import FeatureCard from "../shared/FeatureCard";
import { Link } from "react-router-dom";

export default function WhyNuzulSection() {
    const features = [
        {
            icon: Gem,
            title: "تفرّد أصيل",
            description:
                "كل عقار يحمل هوية فريدة مستوحاة من روح مدينته، وليس مجرد مكان للإقامة.",
        },
        {
            icon: HeartHandshake,
            title: "كرم سعودي",
            description:
                "فريق متخصص يقدم تجربة ضيافة عربية أصيلة تهتم بأدق التفاصيل.",
        },
        {
            icon: Leaf,
            title: "استدامة وعمق",
            description:
                "ندعم الشراكات المحلية ونحافظ على هوية المملكة وتراثها.",
        },
        {
            icon: Compass,
            title: "تجربة مصممة لك",
            description:
                "نساعدك في بناء رحلة متكاملة تناسب احتياجاتك وتطلعاتك.",
        },
    ];

    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-96 h-96 rounded-full top-0 inset-s-0 bg-gold/10 blur-3xl" />
                <div className="absolute w-96 h-96 rounded-full bottom-0 inset-e-0 bg-gold/5 blur-3xl" />

            </div>
            <div className="container mx-auto px-4 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-5 w-full">
                        <span className="
                            inline-block
                            text-md
                            tracking-[0.3em]
                            text-gold
                            font-bold
                            mb-4
                            border
                            border-gold/40
                            px-4
                            py-2
                            rounded-full
                            ">لماذا ليوان
                        </span>
                        <h2 className="mb-4 text-3xl md:text-5xl font-bold leading-relaxed">
                            ضيافة تُصنع بعناية <br />
                            <span className="text-gold">وتُقدَّم بشغف</span>
                        </h2>
                        <p className="text-muted-foreground leading-loose mb-6">
                            في ليوان، نرى أن الإقامة الفاخرة ليست ترفًا عابرًا، بل قصة تُروى بلغة التفاصيل: من عبق القهوة العربية عند الاستقبال، إلى الوسادة المختارة بعناية قبل النوم. نستلهم روحنا من كرم الجزيرة العربية، ونصوغها بمعايير عالمية تليق برؤية 2030.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link to={'/about'} className="inline-flex items-center gap-2 gradient-gold font-semibold text-charcoal px-6 py-3 rounded-full"> قصتنا<ArrowLeft className="w-4 h-4" /> </Link>
                            <Link to={'/contact'} className="inline-flex items-center gap-2 border border-border font-semibold px-6 py-3 rounded-full hover:border-gold transition"> تحدث مع فريقنا </Link>
                        </div>
                    </div>
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {features.map((feature) => (
                            <FeatureCard
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>


            </div>

        </section>
    )
}
