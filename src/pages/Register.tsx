import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
    Eye,
    EyeOff,
    Lock,
    Mail,
    Phone,
    User,
    UserPlus,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema, type SignUpFormValues } from '../schemas/auth-schema'

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpFormValues>({
        resolver: zodResolver(signUpSchema),
        mode: "onBlur",
    })

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="container mx-auto px-4 lg:px-8 min-h-[calc(100vh-10rem)] grid lg:grid-cols-2">

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
                        <div>
                            <Label className="mb-2.5">
                                الاسم الأول
                            </Label>

                            <div className="relative">
                                <input
                                    type="text"
                                    {...register('firstName')}
                                    autoComplete="given-name"
                                    className="w-full bg-card border border-border rounded-lg ps-10 py-3 outline-0 focus:border-gold"
                                    placeholder="مازن"
                                />

                                <User className="absolute w-5 h-5 top-1/2 -translate-y-1/2 inset-s-3 text-muted-foreground" />
                            </div>
                            {errors.firstName && <p className="text-red-500 text-sm" role="alert">{errors.firstName.message}</p>}
                        </div>

                        {/* Last Name */}
                        <div>
                            <Label className="mb-2.5">
                                الاسم الأخير
                            </Label>

                            <div className="relative">
                                <input
                                    type="text"
                                    {...register("lastName")}
                                    autoComplete="family-name"
                                    className="w-full bg-card border border-border rounded-lg ps-10 py-3 outline-0 focus:border-gold"
                                    placeholder="محمد"
                                />

                                <User className="absolute w-5 h-5 top-1/2 -translate-y-1/2 inset-s-3 text-muted-foreground" />
                            </div>
                            {errors.lastName && <p className="text-red-500 text-sm" role="alert">{errors.lastName.message}</p>}
                        </div>

                    </div>

                    {/* Phone */}
                    <div>
                        <Label className="mb-2.5">
                            رقم الهاتف
                        </Label>

                        <div className="relative">
                            <input
                                type="tel"
                                {...register("phone")}
                                autoComplete="tel"
                                className="w-full bg-card border border-border rounded-lg ps-10 py-3 outline-0 focus:border-gold"
                                placeholder="+966 5X XXX XXXX"
                            />

                            <Phone className="absolute w-5 h-5 top-1/2 -translate-y-1/2 inset-s-3 text-muted-foreground" />
                        </div>
                        {errors.phone && <p className="text-red-500 text-sm" role="alert">{errors.phone.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <Label className="mb-2.5">
                            البريد الإلكتروني
                        </Label>

                        <div className="relative">
                            <input
                                type="email"
                                {...register("email")}
                                autoComplete="email"
                                className="w-full bg-card border border-border rounded-lg ps-10 py-3 outline-0 focus:border-gold"
                                placeholder="you@example.com"
                            />

                            <Mail className="absolute w-5 h-5 top-1/2 -translate-y-1/2 inset-s-3 text-muted-foreground" />
                        </div>
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <Label className="mb-2.5">
                            كلمة المرور
                        </Label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register("password")}
                                autoComplete="new-password"
                                className="w-full bg-card border border-border rounded-lg ps-10 pe-12 py-3 outline-0 focus:border-gold"
                                placeholder="••••••••"
                            />

                            <Lock className="absolute w-5 h-5 top-1/2 -translate-y-1/2 inset-s-3 text-muted-foreground" />

                            <Button
                                type="button"
                                size="icon"
                                className="absolute top-1/2 -translate-y-1/2 inset-e-3 h-8 w-8 mt-0.5 p-0 bg-transparent hover:bg-transparent text-muted-foreground"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </Button>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm" role="alert">{errors.password.message}</p>}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <Label className="mb-2.5">
                            تأكيد كلمة المرور
                        </Label>

                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                {...register('confirmPassword')}
                                autoComplete="new-password"
                                className="w-full bg-card border border-border rounded-lg ps-10 pe-12 py-3 outline-0 focus:border-gold"
                                placeholder="••••••••"
                            />

                            <Lock className="absolute w-5 h-5 top-1/2 -translate-y-1/2 inset-s-3 text-muted-foreground" />

                            <Button
                                type="button"
                                size="icon"
                                className="absolute top-1/2 -translate-y-1/2 inset-e-3 h-8 w-8 mt-0.5 p-0 bg-transparent hover:bg-transparent text-muted-foreground"
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                            >
                                {showConfirmPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </Button>
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm" role="alert">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <Button
                        className="w-full gradient-gold flex items-center justify-center py-3.5 gap-2 text-charcoal font-bold hover:scale-[1.01] transition disabled:opacity-60"
                        type="submit"  disabled={isSubmitting}
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

                <div className="absolute bottom-4 right-4 z-10 text-white">
                    <h2 className="font-bold text-4xl mb-3">
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