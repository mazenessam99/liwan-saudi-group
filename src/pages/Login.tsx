
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, LogIn, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Login() {
    const [show, setShow] = useState(false);
    return (
        <div className="container mx-auto px-4 lg:px-8 min-h-[calc(100vh-10rem)] grid lg:grid-cols-2">
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
                <motion.form autoComplete="off" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md space-y-5">
                    <div className="text-center mb-6">
                        <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center font-bold text-charcoal text-2xl mb-3 gradient-gold">ن</div>
                        <h2 className="font-bold text-3xl">تسجيل الدخول</h2>
                        <p className="text-muted-foreground text-sm mt-1">أدخل بياناتك للمتابعة</p>
                    </div>
                    <div>
                        <Label className="mb-2.5">البريد الإلكتروني</Label>
                        <div className="relative">
                            <input type="email" autoComplete="username" className="w-full bg-card  border border-border rounded-lg ps-10 py-3  outline-0 focus:border-gold " placeholder="you@example.com" />
                            <Mail className="absolute w-5 h-5 top-1/2 -translate-y-1/2 inset-s-3  text-muted-foreground" />
                        </div>
                    </div>
                    <div className="mt-8">
                        <Label className="mb-2.5">كلمة المرور</Label>
                        <div className="relative">
                            <input type={show ? "text" : "password"} autoComplete="new-password" className="w-full bg-card border border-border rounded-lg ps-10 py-3 outline-0 focus:border-gold" placeholder="••••••••" />
                            <Lock className="absolute w-5 h-5 top-1/2 -translate-y-1/2 inset-s-3 text-muted-foreground" />
                            <Button type="button" size="icon" className="absolute top-1/2 -translate-y-1/2 inset-e-3 h-8 w-8 mt-0.5 p-0 bg-transparent hover:bg-transparent text-muted-foreground" onClick={() => setShow(!show)}>
                                {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-4 h-4" />}
                            </Button>
                        </div>
                    </div>
                    <Button className="w-full gradient-gold flex items-center justify-center py-3.5 gap-2 text-charcoal font-bold hover:scale-[1.01] transition disabled:opacity-60" type="submit">
                        <LogIn className="w-4 h-4"/> 
                        تسجيل الدخول
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">ليس لديك حساب؟ <Link to={'/register'} className="text-gold font-semibold hover:underline">أنشى حساب</Link></p>

                </motion.form>

            </div>

        </div>
    )
}
