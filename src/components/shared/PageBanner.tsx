
interface PageBannerProps {
    title: string;
    description?: string;
}
export default function PageBanner({title,description}:PageBannerProps) {
    return (
        <section className="gradient-hero text-white ">
            <div className="container py-20 mx-auto px-4 lg:px-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
                <p className="text-white/80">{description}</p>
            </div>
            
        </section>
    )
}
