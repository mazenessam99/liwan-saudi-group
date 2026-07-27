
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import FAQAccordion from "@/components/shared/FAQAccordion";
import {  useState } from "react";
import PageBanner from "@/components/shared/PageBanner";

export default function FAQ() {
    const [cat, setCat] = useState("الكل");
    const [search,setSearch]=useState("")
    const Categories=['الكل','الحجز','الإقامة','الخدمات','الدفع']
    return (
        <main className="">
            <PageBanner title="الأسئلة الشائعة" description="إجابات على أكثر الأسئلة شيوعاً"/>
            <section className="container mx-auto py-6 px-4 lg:px-8 max-w-4xl">

                <form className="relative mb-6">
                    <Search  className="absolute top-1/2 -translate-y-1/2 inset-s-3 w-4 h-4 text-muted-foreground"/>
                    <Input 
                        className="w-full ps-10 pe-4 py-5.5 bg-card
                        placeholder:text-[16px]" 
                        placeholder="ابحث عن سؤال..."
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        
                    />
                </form>
                <nav className="flex gap-3 flex-wrap mb-8">
                {Categories.map((category)=>(

                    <button key={category} onClick={()=>setCat(category)} className={` px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border cursor-pointer ${cat === category ? "gradient-gold text-charcoal border-gold" : "bg-card border-border hover:border-gold hover:text-gold"} `}>
                        {category}
                    </button>
                ))} 
                </nav>
                <section aria-label="الأسئلة الشائعة">
                    <FAQAccordion category={cat} search={search}/>
                </section>
            </section>

        </main>
    )
}