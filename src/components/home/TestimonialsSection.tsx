import { avatarColors, testimonials } from "@/data/testimonials";
import SectionHeader from "../shared/SectionHeader";
import { getInitials } from "@/utils/getInitials";
import RatingStars from "../shared/RatingStars";


export default function TestimonialsSection() {
    return (
        <section className="py-20">
            <SectionHeader eyebrow="الآراء" title="آراء ضيوفنا" subtitle="تجارب حقيقية من عملائنا الكرام" />
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {testimonials.slice(2, 5).map((testimonial, index) => (
                    <div className="bg-card border border-border rounded-2xl px-4 py-6" key={index}>
                        <RatingStars rating={testimonial.rating} />
                        <h3 className="text-sm text-muted-foreground leading-relaxed mt-3">"{testimonial.text} "</h3>
                        <div className="flex items-center gap-2 mt-3">
                            <span
                                aria-hidden="true"
                                className="w-10 h-10 rounded-full text-sm text-white font-bold flex items-center justify-center border border-white/20 shadow-md"
                                style={{
                                    backgroundColor: `#${avatarColors[index % avatarColors.length]}`,
                                }}
                            >
                                {getInitials(testimonial.name)}
                            </span>
                            <div className="flex flex-col gap-0 ">
                                <h4 className="text-sm font-semibold">{testimonial.name}</h4>
                                <span className="inline-block text-xs text-muted-foreground">{testimonial.city}</span>
                            </div>

                        </div>


                    </div>
                ))}

            </div>

        </section>
    )
}
