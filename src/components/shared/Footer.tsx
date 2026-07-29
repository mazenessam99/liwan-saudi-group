import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { footerLinks } from "@/data/links";

export default function Footer() {
    const socials = [
        {
            name: "Facebook",
            icon: FaFacebookF,
        },
        {
            name: "Instagram",
            icon: FaInstagram,
        },
        {
            name: "X",
            icon: FaXTwitter,
        },
        {
            name: "Youtube",
            icon: FaYoutube,
        },
    ];

    return (
        <footer className="mt-20 bg-[#1a1a1f] text-slate-100 dark:bg-[#0f0f12]">
            <div className="container mx-auto px-4 lg:px-8 py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="
                                gradient-gold 
                                w-10 h-10 
                                rounded-full 
                                font-bold 
                                flex items-center justify-center 
                                text-charcoal 
                                text-lg
                            ">
                                ل
                            </div>

                            <div>
                                <div className="font-bold text-gold text-lg leading-tight">
                                    ليوان
                                </div>

                                <div className="text-xs text-slate-300 leading-tight">
                                    مجموعة ليوان السعودية
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-slate-200 leading-relaxed">
                            ليوان مجموعة سعودية رائدة في الضيافة الفاخرة، مستوحاة من رؤية 2030.
                        </p>
                    </div>


                    {/* Links */}
                    <div>
                        <h3 className="font-bold mb-4 text-gold">
                            روابط سريعة
                        </h3>

                        <ul className="space-y-2 text-sm text-slate-200">
                            {
                                footerLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.to}
                                            className="hover:text-gold transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>


                    {/* Contact */}
                    <div>
                        <h3 className="font-bold mb-4 text-gold">
                            تواصل معنا
                        </h3>

                        <ul className="space-y-3 text-sm text-slate-200">

                            <li className="
                                flex items-start gap-2 
                                hover:text-gold 
                                transition-colors
                            ">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />

                                حي السفارات، الرياض، المملكة العربية السعودية
                            </li>


                            <li className="
                                flex items-center gap-2 
                                hover:text-gold 
                                transition-colors
                            ">
                                <Phone className="w-4 h-4 shrink-0 text-gold" />

                                <span dir="ltr">
                                    +966 11 123 4567
                                </span>
                            </li>


                            <li className="
                                flex items-center gap-2 
                                hover:text-gold 
                                transition-colors
                            ">
                                <Mail className="w-4 h-4 shrink-0 text-gold" />

                                hello@liwan.sa
                            </li>

                        </ul>


                        {/* Social */}
                        <div className="flex gap-2 mt-4">

                            {
                                socials.map(({ name, icon: Icon }) => (
                                    <a
                                        key={name}
                                        href="#"
                                        aria-label={name}
                                        onClick={(e) => e.preventDefault()}
                                        className="
                                            w-9 h-9 
                                            border border-gold/30 
                                            rounded-full 
                                            text-slate-300 
                                            flex items-center justify-center 
                                            hover:bg-gold 
                                            hover:text-charcoal 
                                            transition-colors 
                                            duration-300
                                        "
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))
                            }

                        </div>

                    </div>



                    {/* Newsletter */}
                    <div>

                        <h3 className="mb-4 font-bold text-gold">
                            اشترك في النشرة البريدية
                        </h3>


                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex flex-col gap-2"
                        >

                            <label
                                htmlFor="email"
                                className="sr-only"
                            >
                                البريد الإلكتروني
                            </label>


                            <input
                                id="email"
                                type="email"
                                placeholder="بريدك الإلكتروني"
                                className="
                                    w-full 
                                    bg-white/10 
                                    px-3 py-2 
                                    border border-gold/30  
                                    text-white 
                                    text-sm 
                                    rounded-md 
                                    focus:outline-0 
                                    focus:border-gold 
                                    placeholder:text-slate-300
                                "
                            />


                            <Button
                                className="
                                    gradient-gold 
                                    text-charcoal 
                                    font-bold 
                                    text-center 
                                    hover:opacity-90 
                                    transition
                                "
                                type="submit"
                            >
                                اشترك
                            </Button>


                        </form>

                    </div>

                </div>


                <div className="
                    mt-12 
                    pt-12 
                    sm:pt-8 
                    border-t 
                    border-white/10  
                    text-center 
                    text-xs 
                    text-slate-300
                ">
                    جميع الحقوق محفوظة © ليوان 2026
                </div>

            </div>
        </footer>
    );
}