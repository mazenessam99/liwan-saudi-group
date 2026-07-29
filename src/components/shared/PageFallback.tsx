import { motion } from "framer-motion";

export default function PageFallback() {
    return (
        <div 
            className="
            min-h-screen 
            bg-background 
            flex items-center justify-center
            relative overflow-hidden
            "
        >
            {/* Background Glow */}
            <div
                className="
                absolute inset-0 
                bg-linear-to-br 
                from-gold/10 
                via-transparent 
                to-palm/10
                "
            />

            <div className="relative z-10 flex flex-col items-center gap-6">

                {/* Logo */}
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="
                    w-20 h-20
                    rounded-full
                    gradient-gold
                    flex items-center justify-center
                    text-charcoal
                    text-4xl
                    font-bold
                    shadow-luxe
                    "
                >
                    ل
                </motion.div>


                {/* Brand */}
                <div className="text-center">
                    <h1 className="text-2xl font-bold">
                        ليوان
                    </h1>

                    <p className="text-sm text-muted-foreground mt-1">
                        مجموعة ليوان السعودية
                    </p>
                </div>


                {/* Loader */}
                <div className="flex gap-2 mt-4">
                    {[1,2,3].map((item)=>(
                        <motion.span
                            key={item}
                            animate={{
                                y:[0,-8,0]
                            }}
                            transition={{
                                duration:0.8,
                                repeat:Infinity,
                                delay:item * 0.15
                            }}
                            className="
                            w-2.5 h-2.5
                            rounded-full
                            bg-gold
                            "
                        />
                    ))}
                </div>


                <p className="
                    text-xs 
                    text-muted-foreground
                    mt-2
                ">
                    جاري تجهيز تجربتك الفاخرة...
                </p>

            </div>
        </div>
    )
}