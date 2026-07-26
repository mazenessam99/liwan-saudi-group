import { motion } from "framer-motion";
interface HeroProps {
    image: string;
    eyebrow: string;
    title: string;
    description: string;

}

export default function InnerHero({ image, eyebrow, title, description }: HeroProps) {
    return (
        <section className="relative h-[70vh] min-h-95 flex items-center overflow-hidden">
            <img src={image} className='absolute inset-0 w-full h-full  object-cover' alt='aboutHero' />
            <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/40' />
            <div className="container mx-auto px-4 lg:px-8 relative z-10 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="inline-block font-bold text-xs text-gold px-4 py-2 rounded-full tracking-tight border border-gold/40 mb-4">{eyebrow}</span>
                    <h1 className="text-4xl md:text-6xl max-w-3xl mb-4 font-bold leading-tight">{title}</h1>
                    <p className="text-white/85 text-xl sm:text-2xl md:text-lg max-w-2xl leading-relaxed">{description}</p>
                </motion.div>
            </div>

        </section>
    )
}
