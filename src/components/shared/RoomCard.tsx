import type { Room } from "@/types/rooms"
import { Bed, Maximize2, Users } from "lucide-react"
import { Link } from "react-router-dom"

interface RoomCardProps {
    room: Room
}
export default function RoomCard({ room }: RoomCardProps) {
    return (
        <Link to={`/rooms/${room.id}`} className="block">
            <div className="bg-background/60 border border-border rounded-xl group hover:border-gold/20 overflow-hidden cursor-pointer">
                <div className="aspect-video overflow-hidden">
                    <img src={room.image} className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-transform" />
                </div>
                <div className="p-4">
                    <span className="text-gold text-sm font-bold">{room.type}</span>
                    <h3 className="font-bold mt-1">{room.name}</h3>
                    <div className="flex items-center gap-3 mt-2">
                        <span className="flex items-center gap-1 text-muted-foreground text-sm"><Maximize2 className="w-3 h-3" /> {room.size}m²</span>
                        <span>·</span>
                        <span className="flex items-center gap-1 text-muted-foreground text-sm"><Bed className="w-3 h-3" /> {room.beds}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1 text-muted-foreground text-sm"><Users className="w-3 h-3" /> {room.guests}</span>
                    </div>
                    <div className="font-bold text-muted-foreground"> <span className="text-gold">{`SAR ${room.pricePerNight}`}</span> <span className="text-sm">/ليلة</span></div>

                </div>
            </div>
        </Link>
    )
}
