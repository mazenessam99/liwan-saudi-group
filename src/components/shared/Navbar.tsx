import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import { useEffect, useState } from "react";
import { Globe, Heart, LogIn, Menu, X } from "lucide-react";
import { navLinks } from "@/data/links";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`
            fixed top-0 right-0 left-0 z-50 py-2 
            transition-all duration-300
            ${scrolled
                    ? "glass border-b border-border shadow-sm"
                    : "bg-transparent"
                }
            `}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="
                    flex items-center justify-between 
                    h-16 lg:h-20
                ">
                    {/* Logo */}
                    <Link
                        className="flex items-center gap-3"
                        to="/"
                    >
                        <div
                            className="
                        gradient-gold w-10 h-10 
                        rounded-full font-bold 
                        flex items-center justify-center 
                        text-charcoal text-lg
                        "
                        >
                            ل
                        </div>
                        <div>
                            <div className="font-bold text-lg leading-tight">
                                ليوان
                            </div>
                            <div className="text-[10px] text-muted-foreground">
                                مجموعة ليوان السعودية
                            </div>
                        </div>
                    </Link>
                    {/* Desktop Menu */}
                    <nav className="
                    hidden lg:flex items-center gap-1
                    ">
                        {
                            navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end={link.to === "/"}
                                    className={({ isActive }) =>
                                        `
                                px-3 py-2 rounded-md text-sm 
                                font-medium transition-colors
                                ${isActive
                                            ? "text-gold"
                                            : "text-foreground hover:text-gold"
                                        }
                                `
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))
                        }
                    </nav>
                    {/* Actions */}
                    <div className="flex items-center gap-1">
                        <button
                            aria-label="تغيير اللغة"
                            className="
                        hidden sm:flex items-center gap-1 
                        px-3 py-2 rounded-md 
                        hover:bg-muted text-sm
                        "
                        >
                            <Globe className="w-4 h-4" />
                            AR
                        </button>
                        <ModeToggle />
                        <Link
                            aria-label="المفضلة"
                            to="/favorites"
                            className="
                        relative p-2 rounded-md 
                        hover:bg-muted
                        "
                        >
                            <Heart className="w-5 h-5" />
                            <span
                                className="
                            absolute -top-1 -right-1 
                            bg-gold text-charcoal 
                            text-[10px] font-bold 
                            rounded-full w-5 h-5 
                            flex items-center justify-center
                            "
                            >
                                2
                            </span>
                        </Link>
                        <Link
                            to="/login"
                            className="
                        hidden sm:inline-flex 
                        gradient-gold 
                        items-center gap-1.5 
                        px-3 py-2 
                        text-charcoal text-sm 
                        rounded-md font-bold
                        "
                        >
                            <LogIn className="w-4 h-4" />
                            دخول
                        </Link>
                        {/* Mobile Button */}
                        <button
                            type="button"
                            aria-label={openMenu ? "إغلاق القائمة" : "فتح القائمة"}
                            aria-expanded={openMenu}
                            onClick={() => setOpenMenu(!openMenu)}
                            className="
                        lg:hidden p-2 rounded-md 
                        hover:bg-muted
                        "
                        >
                            {
                                openMenu
                                    ? <X />
                                    : <Menu />
                            }
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {
                    openMenu && (

                        <div
                            className="
                        lg:hidden mt-3 
                        bg-background 
                        border border-border
                        rounded-xl
                        p-4
                        shadow-lg
                        "
                        >

                            <nav className="flex flex-col gap-2">
                                {
                                    navLinks.map((link) => (
                                        <NavLink
                                            key={link.to}
                                            to={link.to}
                                            onClick={() => setOpenMenu(false)}
                                            className={({ isActive }) =>
                                                `
                                        px-3 py-2 rounded-md
                                        ${isActive
                                                    ? "text-gold bg-muted"
                                                    : "hover:bg-muted"
                                                }
                                        `
                                            }
                                        >
                                            {link.label}

                                        </NavLink>
                                    ))
                                }
                                <Link
                                    to="/login"
                                    onClick={() => setOpenMenu(false)}
                                    className="
                                flex items-center justify-center gap-2
                                gradient-gold
                                text-charcoal
                                rounded-md
                                py-2
                                font-bold
                                "
                                >
                                    <LogIn className="w-4 h-4" />
                                    دخول
                                </Link>
                            </nav>
                        </div>
                    )
                }
            </div>
        </header>
    )
}