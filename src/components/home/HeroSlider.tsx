import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import suiteImage from "../../assets/slider-suite.jpg";
import resortImage from "../../assets/slider-resort.jpg";
import diningImage from "../../assets/slider-dining.jpg";

const slides = [
    {
        image: suiteImage,
        to: "/hotels",
        label: "إقامة بإحساس مختلف",
        title: "فنادق ليوان السعودية",
        description:
            "مساحات رحبة، وتفاصيل أنيقة، وأجواء تمنحك راحة تستحقها. اكتشف إقامتك القادمة بروح الضيافة السعودية.",
        cta: "اكتشف الفنادق",
        alt: "جناح فندقي أنيق بإطلالة على المدينة",
    },
    {
        image: resortImage,
        to: "/resorts",
        label: "على إيقاع الهدوء",
        title: "منتجعات ليوان",
        description:
            "حين يلتقي صفاء البحر براحة الإقامة، تبدأ لحظات تستحق أن تتمهّل فيها. اختر وجهتك واترك مساحة للهدوء.",
        cta: "اكتشف المنتجعات",
        alt: "منتجع ساحلي مع مسبح وإطلالة بحرية",
    },
    {
        image: diningImage,
        to: "/restaurants",
        label: "للذوق حكاية",
        title: "مطاعم ليوان",
        description:
            "أجواء دافئة، وطاولات تجمع من تحب، وتجارب طعام تستحق الاكتشاف. اختر المكان المناسب للحظاتك الجميلة.",
        cta: "اكتشف المطاعم",
        alt: "مطعم راقٍ بأقواس عربية وطاولات أنيقة",
    },
];

export default function HeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animationKey, setAnimationKey] = useState(0);

    const goToSlide = (index: number) => {
        setActiveIndex(index);
        setAnimationKey((key) => key + 1);
    };

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % slides.length);
            setAnimationKey((key) => key + 1);
        }, 5000);

        return () => window.clearInterval(interval);
    }, []);

    const slide = slides[activeIndex];

    return (
        <section
            dir="rtl"
            className="relative w-full overflow-hidden bg-[#102b25]"
        >
            <div className="relative flex min-h-130 w-full items-center overflow-hidden sm:min-h-150 lg:min-h-170">
                {slides.map((item, index) => (
                    <div
                        key={item.to}
                        aria-hidden={index !== activeIndex}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeIndex
                                ? "z-0 opacity-100"
                                : "pointer-events-none z-0 opacity-0"
                            }`}
                    >
                        <img
                            src={item.image}
                            alt={item.alt}
                            className={`h-full w-full object-cover object-center ${index === activeIndex ? "hero-image-active" : ""
                                }`}
                            draggable={false}
                        />
                    </div>
                ))}

                <div className="absolute inset-0 z-1 bg-linear-to-l from-[#071c17]/90 via-[#071c17]/60 to-[#071c17]/10" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
                    <div
                        key={animationKey}
                        className="max-w-3xl text-right text-white"
                    >
                        <span
                            className="hero-badge mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm"
                        >
                            {slide.label}
                        </span>

                        <h1 className="hero-title mb-6 text-3xl font-bold leading-tight sm:text-5xl lg:text-7xl">
                            {slide.title}
                        </h1>

                        <p className="hero-description mb-8 max-w-xl text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
                            {slide.description}
                        </p>

                        <Link
                            to={slide.to}
                            className="hero-cta inline-flex items-center justify-center rounded-lg bg-[#c5a46d] px-7 py-3.5 font-semibold text-[#102b25] transition-colors duration-300 hover:bg-[#d7bb89]"
                        >
                            {slide.cta}
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">

                    <div className="flex items-center gap-2">
                        {slides.map((item, index) => (
                            <button
                                key={item.to}
                                type="button"
                                onClick={() => goToSlide(index)}
                                aria-label={`الانتقال إلى الشريحة ${index + 1}`}
                                aria-current={activeIndex === index ? "true" : undefined}
                                className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index
                                        ? "w-8 bg-[#c5a46d]"
                                        : "w-2.5 bg-white/60 hover:bg-white"
                                    }`}
                            />
                        ))}
                    </div>

                </div>
            </div>

            <style>{`
        .hero-badge {
          animation: badgeEnter 600ms ease-out 100ms both;
        }

        .hero-title {
          animation: titleEnter 800ms cubic-bezier(0.2, 0.7, 0.2, 1) 180ms both;
        }

        .hero-description {
          animation: descriptionEnter 800ms ease-out 380ms both;
        }

        .hero-cta {
          animation: buttonEnter 700ms cubic-bezier(0.2, 0.7, 0.2, 1) 550ms both;
        }

        .hero-image-active {
          animation: imageZoom 6s ease-out both;
        }

        @keyframes badgeEnter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes titleEnter {
          from {
            opacity: 0;
            transform: translateY(35px);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes descriptionEnter {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonEnter {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes imageZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-badge,
          .hero-title,
          .hero-description,
          .hero-cta,
          .hero-image-active {
            animation: none;
          }
        }
      `}</style>
        </section>
    );
}
