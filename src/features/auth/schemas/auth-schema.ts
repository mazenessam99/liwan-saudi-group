import { z } from 'zod'

export const signUpSchema = z.object({
    firstName: z.string()
        .min(3, "الاسم الأول يجب أن يكون ثلاثة أحرف على الأقل")
        .max(12, "الاسم الأول طويل جدًا"),
    lastName: z.string()
        .min(3, "الاسم الأخير يجب أن يكون ثلاثة أحرف على الأقل")
        .max(12, "الاسم الأخير طويل جدًا"),
    phone: z.string()
        .min(8, "رقم الهاتف غير صحيح")
        .max(15, "رقم الهاتف غير صحيح")
        .regex(/^\+?[0-9\s-]+$/, "رقم الهاتف غير صحيح"),
    email: z.string()
        .min(1, 'البريد الإلكترونى مطلوب')
        .email("البريد الإلكتروني غير صحيح"),
    password: z.string()
        .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل")
        .regex(/[A-Z]/, "يجب أن تحتوي كلمة المرور على حرف كبير")
        .regex(/[a-z]/, "يجب أن تحتوي كلمة المرور على حرف صغير")
        .regex(/[0-9]/, "يجب أن تحتوي كلمة المرور على رقم"),
    confirmPassword: z.string()
        .min(1, "يرجى تأكيد كلمة المرور"),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "كلمتا المرور غير متطابقتين",
        path: ["confirmPassword"],
    })

export const signInSchema=z.object({
    email:z.string()
        .min(1, "البريد الإلكتروني مطلوب")
        .email("البريد الإلكتروني غير صحيح"),
    password:z.string()
        .min(1, "كلمة المرور مطلوبة"),
})
export type SignUpFormValues = z.infer<typeof signUpSchema>
export type SignInFormValues=z.infer<typeof signInSchema>