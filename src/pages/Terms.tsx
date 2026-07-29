import PolicyPage from "@/components/shared/PolicyPage";

export default function Terms() {
    return (
        <PolicyPage 
            title="الشروط والأحكام"
            intro="باستخدامك لموقع ليوان، فإنك توافق على الالتزام بالشروط والأحكام التالية."
            sections={[
                {
                    title:'الحجوزات',
                    content:'جميع الحجوزات تخضع لتوفر الغرف وقد تتطلب الدفع المسبق.'
                },
                {
                    title:'الإلغاء والاسترداد',
                    content:'تختلف سياسة الإلغاء حسب نوع الباقة والعقار، يُرجى مراجعة شروط الحجز.'
                },
                {
                    title:'المسؤولية',
                    content:'ليوان غير مسؤولة عن أي ضرر غير مباشر ناتج عن استخدام الموقع.'
                }
            ]}
        
        />
    )
}
