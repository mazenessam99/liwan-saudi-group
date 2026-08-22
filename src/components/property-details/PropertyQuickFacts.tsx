import { Star } from "lucide-react";


export default function PropertyQuickFacts() {
    return (
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
            
                <div className="bg-card rounded-xl border border-gold/20 px-4 py-3 flex items-center gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gold/20">
                        <Star className="w-4 h-4 text-gold" />
                    </div>

                    <div className="min-w-0 ">
                        <h6 className="text-[10px] uppercase tracking-wider text-muted-foreground">التقييم</h6>
                        <span className="font-bold text-sm truncate">4.2 / 5</span>
                    </div>

                </div>
                <div className="bg-card rounded-xl border border-gold/20 px-4 py-3 flex items-center gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gold/20">
                        <Star className="w-4 h-4 text-gold" />
                    </div>

                    <div className="min-w-0 ">
                        <h6 className="text-[10px] uppercase tracking-wider text-muted-foreground">التقييم</h6>
                        <span className="font-bold text-sm truncate">4.2 / 5</span>
                    </div>

                </div>
                <div className="bg-card rounded-xl border border-gold/20 px-4 py-3 flex items-center gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gold/20">
                        <Star className="w-4 h-4 text-gold" />
                    </div>

                    <div className="min-w-0 ">
                        <h6 className="text-[10px] uppercase tracking-wider text-muted-foreground">التقييم</h6>
                        <span className="font-bold text-sm truncate">4.2 / 5</span>
                    </div>

                </div>
                <div className="bg-card rounded-xl border border-gold/20 px-4 py-3 flex items-center gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-gold/20">
                        <Star className="w-4 h-4 text-gold" />
                    </div>

                    <div className="min-w-0 ">
                        <h6 className="text-[10px] uppercase tracking-wider text-muted-foreground">التقييم</h6>
                        <span className="font-bold text-sm truncate">4.2 / 5</span>
                    </div>

                </div>
            
        </section>
    )
}
