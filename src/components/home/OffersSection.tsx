import { useEffect, useState } from "react";
import SectionHeader from "../shared/SectionHeader";
import type { Offer } from "@/types/offers";
import { getOffers } from "@/services/offerService";
import PropertyLoading from "../shared/PropertyLoading";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function OffersSection() {
    const [offers,setOffers]=useState<Offer[]>([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    useEffect(()=>{
        async function fetchOffers(){
            try{
                const data=await getOffers();
                setOffers(data)
            }catch(error){
                setError("حدث خطأ أثناء تحميل العروض");
            }
            finally{
                setLoading(false)
            }
        }
        fetchOffers()
    },[])
    if (loading) {
            return (
                <PropertyLoading type="offers"/>
            );
        }
    
        if (error) {
            return (
                <main className="container mx-auto px-4 py-20 text-center">
                    <p className="text-red-500">{error}</p>
                </main>
            );
    }
    return (
        <section className="py-20 gradient-hero text-white">
            <SectionHeader eyebrow="حصرياً" title="عروض استثنائية"/>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {offers.slice(0,3).map((offer)=>(
                        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl overflow-hidden flex flex-col">
                            <div className="aspect-video overflow-hidden">
                                <img src={offer.image} alt={offer.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:cursor-pointer"/>
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <div className="text-gold font-bold text-3xl mb-2">{offer.discount}%</div>
                                <h3 className="font-bold mb-2">{offer.title}</h3>
                                <p className="text-sm text-white/80 line-clamp-3 mb-3 leading-relaxed">{offer.description}</p>
                                <Link to='/offers' className="text-gold text-sm flex items-center gap-2 mt-auto">عرض التفاصيل <ArrowRight className="w-3 h-3"/> </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
