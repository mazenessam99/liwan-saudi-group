import { Link } from "react-router-dom";
import RestaurantCard from "../shared/RestaurantCard";
import SectionHeader from "../shared/SectionHeader";
import { ArrowLeft } from "lucide-react";
import { restaurants } from "@/data/restaurants";


export default function RestaurantSection() {
    
    
    return (
        <section className="py-20">

            <SectionHeader eyebrow="تجارب طعام" title="مطاعم فاخرة"/>
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-3 gap-3">
                {restaurants.slice(0,3).map(restaurant=>(
                    <RestaurantCard restaurant={restaurant} key={restaurant.id}/>
                ))}

            </div>
            <div className="mt-8 text-center">
                    <Link to='/restaurants' className="inline-flex items-center justify-center gap-3 text-gold font-semibold hover:underline">
                        عرض الكل
                        <ArrowLeft className="w-4 h-4"/>
                    </Link>
                </div>

        </section>
    )
}
