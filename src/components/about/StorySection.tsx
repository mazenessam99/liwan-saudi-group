
import AboutImg from '../../assets/about-img.avif'
export default function StorySection() {
    return (
        <section className="container mx-auto px-4 lg:px-8 py-20  grid lg:grid-cols-2 gap-12 items-center">
            
                <div className="relative">
                    <img src={AboutImg} alt='aboutImg' className='rounded-3xl aspect-4/3 w-full object-cover shadow-luxe'/>
                    <div className='absolute px-6 py-4 -bottom-6 -inset-e-6 bg-card border border-border rounded-2xl hidden md:block'>
                        <div className='text-gold font-bold text-2xl'>2018</div>
                        <div className='text-xs text-muted-foreground'>بداية الرحلة</div>
                    </div>
                </div>
                <div>
                    <span className='text-gold text-md uppercase tracking-[0.3em] font-bold'>قصتنا</span>
                    <h2 className='text-3xl md:text-4xl font-bold mt-2 mb-8'>من حلم <span className='text-gold'> سعودي</span> إلى علامة عالمية</h2>
                    <p className='text-muted-foreground mb-4 leading-loose'>تأسست ليوان برؤية واضحة: تقديم ضيافة سعودية أصيلة بمعايير عالمية. منذ انطلاقتنا في عام 2018، نسعى لإبراز جمال المملكة الفريد، من صحاريها الذهبية إلى سواحلها الفيروزية وجبالها الخضراء.</p>
                    <p className='text-muted-foreground leading-loose'>اليوم، نملك أكثر من 40 عقاراً فاخراً في 20 وجهة، ونخدم آلاف الضيوف من حول العالم بشغف لا يهدأ نحو الكمال.</p>
                </div>

        </section>
    )
}
