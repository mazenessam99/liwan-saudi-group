import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    User,
    UserPlus,
} from "lucide-react";

import toast from "react-hot-toast";
import { Link,useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema, type SignUpFormValues } from '../schemas/auth-schema'
import { signUpUser } from "../services/auth.service";
import { getReadableAuthError } from "../utils/auth-errors";

import FormField from "@/components/shared/FormField";
import PasswordField from "@/components/shared/PasswordField";

export default function SignUp() {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<SignUpFormValues>({
        resolver: zodResolver(signUpSchema),
        mode: "onBlur",
    })
    const navigate=useNavigate()

    const onSubmit = async (values: SignUpFormValues) => {
        const {error} = await signUpUser(values)
        if (error) {
            toast.error(getReadableAuthError(error.message));
            return;
        }
        reset();
        toast.success("تم إنشاء الحساب بنجاح 🎉");
        setTimeout(() => {
            navigate('/login')
        },2000);
    };

    return (
        <div className="mt-4 min-h-[calc(100vh-10rem)] grid lg:grid-cols-2">

            {/* Sign Up Form */}
            <div className="flex items-center justify-center p-6 md:p-12">
                <motion.form
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md space-y-5"
                >

                    {/* Header */}
                    <div className="text-center mb-6">
                        <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center font-bold text-charcoal text-2xl mb-3 gradient-gold">
                            ل
                        </div>

                        <h2 className="font-bold text-3xl">
                            إنشاء حساب
                        </h2>

                        <p className="text-muted-foreground text-sm mt-1">
                            أنشئ حسابك واستمتع بتجربة ليوان
                        </p>
                    </div>

                    {/* First & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* First Name */}
                        <FormField label=" الإسم الأول" type='text' placeholder="مازن" registration={register("email")} error={errors.email?.message} icon={User} autoComplete="username"/>
                        {/* Last Name */}
                        <FormField label="الإسم الأخير " type='text' placeholder="محمد" registration={register("email")} error={errors.email?.message} icon={User} autoComplete="username"/>
                    </div>

                    {/* Phone */}
                        <FormField label="رقم الهاتف" type='tel' placeholder="+966 5X XXX XXXX" registration={register("phone")} error={errors.phone?.message} icon={Phone} autoComplete="username"/>
                    {/* Email */}
                        <FormField label="البريد الإلكتروني" type='email' placeholder="you@example.com" registration={register("email")} error={errors.email?.message} icon={Mail} autoComplete="username"/>
                    {/* Password */}
                        <PasswordField label="كلمة المرور" registration={register('password')} error={errors.password?.message} autoComplete="current-password"/>
                    {/* Confirm Password */}
                        <PasswordField label="تأكيد كلمة المرور" registration={register('confirmPassword')} error={errors.confirmPassword?.message} autoComplete="new-password"/>
                    
                    {/* Submit */}
                    <Button
                        className="w-full gradient-gold flex items-center justify-center py-3.5 gap-2 text-charcoal font-bold hover:scale-[1.01] transition disabled:opacity-60"
                        type="submit" disabled={isSubmitting}
                    >
                        <UserPlus className="w-4 h-4" />
                        {isSubmitting ? 'ﺟﺎري اﻟﺘﺴﺠﻴﻞ...' : 'إﻧﺸﺎء ﺣﺴﺎب'}
                    </Button>

                    {/* Login Link */}
                    <p className="text-sm text-center text-muted-foreground">
                        لديك حساب بالفعل؟{" "}
                        <Link
                            to="/login"
                            className="text-gold font-semibold hover:underline"
                        >
                            تسجيل الدخول
                        </Link>
                    </p>

                </motion.form>
            </div>

            {/* Sign Up Image */}
            <div className="hidden lg:block relative overflow-hidden group">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    <img
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80"
                        alt="signup_page"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
                    <h2 className="font-bold text-5xl mb-7">
                        انضم إلى ليوان
                    </h2>

                    <p className="text-white/85 max-w-md transition-colors duration-500 hover:text-gold">
                        أنشئ حسابك واستمتع بتجربة ضيافة سعودية فاخرة،
                        واحفظ حجوزاتك وأماكنك المفضلة.
                    </p>
                </div>
            </div>

        </div>
    );
}