
import PropertyListing from "@/components/shared/PropertyListing";
import { resorts } from "@/data/resorts";


export default function Resorts() {
    return (
            <PropertyListing items={resorts} title="منتجعاتنا الفاخرة" description="ملاذات استثنائية في أجمل سواحل وجبال المملكة" />
    )
}
