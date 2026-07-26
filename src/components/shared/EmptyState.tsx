
import { SearchX } from "lucide-react";

interface EmptyStateProps {
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
}

export default function EmptyState({
    title,
    description,
    actionLabel,
    onAction,
}: EmptyStateProps) {
    return (
        <div className="col-span-full flex flex-col items-center justify-center text-center py-20 px-4">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <SearchX className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">{description}</p>
            {actionLabel && onAction && (
                <button
                    onClick={onAction}
                    className="px-5 py-2.5 bg-gold text-charcoal text-sm font-medium rounded-lg hover:opacity-90 transition cursor-pointer"
                >
                    {actionLabel}
                </button>
            )}
        </div>
    );
}