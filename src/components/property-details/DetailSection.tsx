
interface DetailsProps{
    eyebrow:string,
    title:string
}
export default function DetailSection({eyebrow,title}:DetailsProps) {
    return (
        <div className="mb-6">
            <span className="text-gold text-[12px] font-bold block mb-2">{eyebrow}</span>
            <h2 className="font-bold text-2xl md:text-3xl ">{title}</h2>
            <div className="mt-3 h-0.5 w-24 bg-linear-to-r from-gold to-transparent" />
        </div>
    )
}
