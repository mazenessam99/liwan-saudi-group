import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LogIn, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema, type SignInFormValues } from '../schemas/auth-schema'
import { signInUser } from "../services/auth.service";
import toast from "react-hot-toast";
import { getReadableAuthError } from "../utils/auth-errors";
import FormField from "@/components/shared/FormField";
import PasswordField from "@/components/shared/PasswordField";

export default function Login() {

    const {register,handleSubmit, formState: { errors, isSubmitting },reset}=useForm<SignInFormValues>({
        resolver:zodResolver(signInSchema),
        mode:'onBlur'
    })
    const navigate=useNavigate()

    const onSubmit =async (values: SignInFormValues) => {
        const {error} =await signInUser(values)
        if(error){
            toast.error(getReadableAuthError(error.message));
            return;
        }
        reset(),
        toast.success("تم تسجيل الدخول بنجاح 🎉");
        setTimeout(() => {
            navigate('/')
        }, 1000);
    };
    return (
        <div className="md:mt-8 min-h-[calc(100vh-10rem)] grid lg:grid-cols-2">
            {/*login_image */}
            <div className="hidden lg:block relative overflow-hidden group">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <img
                        src="https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=1600&q=80"
                        alt="login_page"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                <div className="absolute bottom-4 right-4 z-10 text-white">
                    <h2 className="font-bold text-4xl mb-3">
                        أهلاً بك في ليوان
                    </h2>

                    <p className="text-white/85 max-w-md transition-colors duration-500 hover:text-gold">
                        ضيافة سعودية فاخرة بانتظارك. سجّل دخولك لمتابعة حجوزاتك والمفضلة.
                    </p>
                </div>
            </div>

            {/* Login Form */}
            <div className="flex items-center justify-center p-6 md:p-12">
                <motion.form onSubmit={handleSubmit(onSubmit)} autoComplete="off" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md space-y-5">
                    <div className="text-center mb-6">
                        <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center font-bold text-charcoal text-2xl mb-3 gradient-gold">ل</div>
                        <h2 className="font-bold text-3xl">تسجيل الدخول</h2>
                        <p className="text-muted-foreground text-sm mt-1">أدخل بياناتك للمتابعة</p>
                    </div>
                    
                    <FormField label="البريد الإلكتروني" type='email' placeholder="you@example.com" registration={register("email")} error={errors.email?.message} icon={Mail} autoComplete="username"/>
                    
                    <PasswordField label="كلمة المرور" registration={register('password')} error={errors.password?.message} autoComplete="current-password"/>
                    
                    <Button className="w-full gradient-gold flex items-center justify-center py-3.5 gap-2 text-charcoal font-bold hover:scale-[1.01] transition disabled:opacity-60" type="submit" disabled={isSubmitting}>
                        <LogIn className="w-4 h-4"/> 
                        {isSubmitting ? 'ﺟﺎري الدخول...' : 'تسجيل الدخول '}
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">ليس لديك حساب؟ <Link to={'/register'} className="text-gold font-semibold hover:underline">أنشى حساب</Link></p>

                </motion.form>

            </div>

        </div>
    )
}
