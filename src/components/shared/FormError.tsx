type FormErrorProps = {
    message?: string;
};

export function FormError({ message }: FormErrorProps) {
    if (!message) return null;

    return (
        <div
            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-red-500/15 bg-red-500/5 px-4 py-2.5 text-center"
            role="alert"
        >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-xs font-bold text-red-500">
                !
            </span>

            <p className="text-xs font-medium text-red-500">
                {message}
            </p>
        </div>
    );
}