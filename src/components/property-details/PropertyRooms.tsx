import type { Hotel } from "@/types/hotels"
import DetailSection from "./DetailSection"
import RoomCard from "../shared/RoomCard"

interface PropertyRoomsProps {
    hotel: Hotel
} 

export default function PropertyRooms({hotel}:PropertyRoomsProps) {
    return (
        <section className="bg-card border border-border rounded-xl p-6 mt-6">
            <DetailSection eyebrow="الإقامة" title="الغرف المتاحة"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {hotel.rooms.map((room)=>(
                    <RoomCard room={room}/>
                ))}

            </div>
        </section>
    )
}
