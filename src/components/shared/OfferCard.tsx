import type { Offer } from "@/types/offers"
import { Copy, Tag } from "lucide-react";
import { toast } from "react-hot-toast";

interface offerCardProps {
    offer: Offer
}

export default function OfferCard({ offer }: offerCardProps) {
    const handleCopyCode = () => {
        navigator.clipboard.writeText(offer.code);
        toast.success("تم نسخ الكود");
    };
    return (
        <div className="bg-card backdrop-blur border border-border rounded-2xl overflow-hidden flex flex-col">
            
            <div className="aspect-video overflow-hidden relative">
                <img src={offer.image} alt={offer.title} className="w-full h-full transition-transform duration-500 hover:scale-105 hover:cursor-pointer" />
                <div className="absolute top-3 inset-e-3 h-16 w-16 rounded-full font-bold gradient-gold text-charcoal flex flex-col items-center justify-center">
                    <div className="text-[16px]">{offer.discount}%</div>
                    <div className="text-[10px]">Off</div>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold mb-2">{offer.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-3 leading-relaxed">{offer.description}</p>
                <div className="mt-auto flex items-center justify-between text-xs">
                    <span className="text-muted-foreground"> حتى {offer.validUntil}</span>
                    <button
                        onClick={handleCopyCode}
                        className="flex items-center gap-1 bg-gold/15 text-gold font-bold px-3 py-1.5 rounded-full hover:bg-gold hover:text-charcoal hover:cursor-pointer transition">
                        <Tag className="w-3 h-3" />
                        {offer.code}
                        <Copy className="w-3 h-3" />
                    </button>
                </div>
            </div>

        </div>
    )
}
