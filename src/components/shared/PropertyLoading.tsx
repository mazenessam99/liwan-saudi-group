import { Sparkles } from "lucide-react";

type PropertyLoadingProps = {
    type?: "hotel" | "resort" | "attraction" | "rooms" | "restaurant";
};

export default function PropertyLoading({
    type,
}: PropertyLoadingProps) {
    const typeName = {
        hotel: "الفنادق",
        resort: "المنتجعات",
        attraction:"الواجهات",
        rooms:"الغرف",
        restaurant:"المطاعم"
    };

    const title = type ? `جاري تحميل ${typeName[type]}` : "جاري تحميل التفاصيل";

    const description = type ? "نجهز لك أفضل الخيارات" : "نجهز لك تفاصيل إقامتك";

    return (
        <section className="min-h-[60vh] flex items-center justify-center px-6">
            <div className="flex flex-col items-center text-center">

                {/* Loading Visual */}
                <div className="relative mb-8 h-28 w-28">
                    {/* Outer Glow */}
                    <div className="absolute inset-0 rounded-full bg-gold/10  blur-2xl" />
                    {/* Rotating Ring */}
                    <div className="absolute inset-0 rounded-full border border-gold/20" />
                    <div className="absolute inset-1 rounded-full border border-transparent border-t-gold border-r-gold/40 animate-spin" />

                    {/* Inner Circle */}
                    <div className="absolute inset-5 flex items-center justify-center rounded-full bg-background border border-gold/20 shadow-lg shadow-gold/10">
                        <div className="relative">
                            <Sparkles className="h-7 w-7 text-gold animate-pulse" />
                            <span className="absolute -right-2 -top-2 h-2 w-2 rounded-full bg-gold animate-ping" />
                        </div>
                    </div>

                    {/* Orbit Dots */}
                    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-gold" />
                    <span className="absolute bottom-1 left-2 h-1.5 w-1.5 rounded-full bg-gold/60" />
                    <span className="absolute right-1 top-8 h-1.5 w-1.5 rounded-full bg-gold/40" />

                </div>

                {/* Text */}
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                        {title}
                    </h2>

                    <p className="mt-3 text-sm text-muted-foreground">
                        {description}
                    </p>
                </div>

                {/* Progress */}
                <div className="mt-7 h-1 w-40 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-1/3 rounded-full bg-gold animate-loading" />
                </div>

                <p className="mt-4 text-xs text-muted-foreground/70">
                    لحظات ونكون جاهزين <span className="text-gold">✦</span>
                </p>

            </div>
        </section>
    );
}