import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    align?: "start" | "center";
    action?: ReactNode;
    theme?: "light" | "dark";
}
export default function SectionHeader({
    eyebrow,
    title,
    subtitle,
    align = "center",
    action,
    theme = "light",
}: Props) {
    return (
        <div
            className={`flex flex-col gap-3 mb-11 ${
                align === "center"
                    ? "items-center text-center"
                    : "items-start text-start"
            }`}
        >
            {eyebrow && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-base tracking-[0.3em] text-gold font-bold"
                >
                    {eyebrow}
                </motion.p>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl px-4 md:text-4xl font-bold"
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`mx-auto w-full max-w-2xl px-4 leading-loose md:px-0 md:text-base md:leading-8 ${
                        theme === "dark"
                            ? "text-white/85"
                            : "text-muted-foreground"
                    }`}
                >
                    {subtitle}
                </motion.p>
            )}

            {action && <div className="mt-2">{action}</div>}
        </div>
    );
}
