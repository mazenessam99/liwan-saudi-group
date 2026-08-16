import type { UseFormRegisterReturn } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import { FormError } from "./FormError";
import { Eye, EyeOff, Lock } from "lucide-react";
import { Button } from "../ui/button";




interface PasswordFieldProps {
    label: string;
    placeholder?: string;
    registration: UseFormRegisterReturn;
    error?: string;
    autoComplete?: string;
}

export default function PasswordField({label,placeholder= "••••••••",registration,error,autoComplete}:PasswordFieldProps) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="space-y-2">
            <Label>{label}</Label>
            <div className="relative">
                <Input type={showPassword ? "text" : "password"} placeholder={placeholder} {...registration} autoComplete={autoComplete}   className={`
                        ps-10 py-5 bg-card
                        ${error ? "border-red-500 focus-visible:ring-red-500" : ""}
                    `}/>
                    <Lock className="absolute inset-s-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"/>
                    <Button type="button" variant={'ghost'} size={'icon'} onClick={()=>setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 inset-e-3 h-8 w-8 mt-0.5 p-0  hover:bg-transparent text-muted-foreground hover:text-gold">
                            {showPassword ? <EyeOff className="h-4 w-4"/>:<Eye className="h-4 w-4"/>}
                    </Button>
            </div>
            <FormError message={error}/>
        </div>
    )
}

