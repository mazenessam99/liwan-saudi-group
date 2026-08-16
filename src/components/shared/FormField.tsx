import type { LucideIcon } from "lucide-react";
import { Label } from "../ui/label"
import type { UseFormRegisterReturn } from "react-hook-form";
import { FormError } from "./FormError";
import { Input } from "../ui/input";

interface FormFieldProps{
    label:string,
    placeholder?: string;
    type?: string;
    registration: UseFormRegisterReturn;
    error?: string;
    icon?: LucideIcon;
    autoComplete?: string;

}



export default function FormField({label,placeholder,type,registration,error,icon:Icon,autoComplete}:FormFieldProps) {
    return (
        <div className="space-y-2">
            <Label>{label}</Label>
                <div className="relative">
                    <Input 
                        type={type} 
                        placeholder={placeholder}
                        {...registration} 
                        autoComplete={autoComplete}
                        className={`bg-card py-5 ${Icon ? "ps-10" : ""} ${error ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                        />
                        {Icon&&(
                            <Icon className="absolute start-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"/>
                        )}
                </div>
                <FormError message={error}/>
        </div>
    )
}
