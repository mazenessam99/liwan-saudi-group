import PageBanner from "@/components/shared/PageBanner";

import { optimizeImage } from "@/utils/cloudinary";

import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { getAttractions } from "@/services/attractionService";
import type { Attraction } from "@/types/attractions";
import PropertyLoading from "@/components/shared/PropertyLoading";

export default function Destinations() {
    const [attractions, setAttractions] = useState<Attraction[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [cat, setCat] = useState('الكل');

    useEffect(() => {
        async function loadAttraction() {
            try {
                const data = await getAttractions();
                setAttractions(data);
            }
            catch (error) {
                setError("حدث خطأ أثناء تحميل الواجهات");
            }
            finally {
                setLoading(false)
            }
        }
        loadAttraction()
    }, [])

    if (loading) {
        return (
            <PropertyLoading type="attraction" />
        );
    }

    if (error) {
        return (
            <main className="container mx-auto px-4 py-20 text-center">
                <p className="text-red-500">{error}</p>
            </main>
        );
    }

    const Categories = ['الكل', ...new Set(attractions.map((attraction) => attraction.category))];
    let items = cat === 'الكل' ? attractions : attractions.filter((item) => item.category === cat)


    return (
        <main className="">
            <PageBanner title="وجهاتنا" description="اكتشف 50+ معلماً سياحياً في قلب المملكة" />
            <section className="container mx-auto px-4 lg:px-8 py-20">
                <nav className="flex gap-3 flex-wrap mb-8">
                    {Categories.map((category) => (

                        <button key={category} onClick={() => setCat(category)} className={` px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border cursor-pointer ${cat === category ? "gradient-gold text-charcoal border-gold" : "bg-card border-border hover:border-gold hover:text-gold"} `}>
                            {category}
                        </button>
                    ))}
                </nav>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {items.map((item) => (
                        <div className="border border-border rounded-xl group overflow-hidden cursor-pointer" key={item.id}>
                            <div className="aspect-4/3 overflow-hidden">
                                <img src={optimizeImage(item.image, 800, 600)} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="p-4">
                                <span className="text-gold text-xs mb-1">{item.category}</span>
                                <h3 className="text-semibold text-sm mb-2 line-clamp-1">{item.name}</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed mb-2">{item.description}</p>
                                <span className="text-sm text-muted-foreground flex items-center gap-1">
                                    <MapPin className="w-3 h-3 text-gold" />
                                    {item.city}
                                </span>
                            </div>
                        </div>
                    ))}

                </div>

            </section>
        </main>
    )
}
