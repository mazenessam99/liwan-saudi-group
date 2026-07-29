export interface Attraction {
    id: string;
    name: string;
    city: string;
    category: string;
    description: string;
    image: string;
}

export const attractions: Attraction[] = [
    // الرياض
    {
        id: "attraction-1",
        name: "حي الطريف بالدرعية",
        city: "الرياض",
        category: "تراث",
        description: "حي تاريخي مبني بالطين، وموقع مسجل في اليونسكو، يحكي قصة تأسيس الدولة السعودية الأولى.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303809/destinations/destinations/attraction-1/main.jpg",
    },
    {
        id: "attraction-2",
        name: "قصر المصمك",
        city: "الرياض",
        category: "تراث",
        description: "قلعة تاريخية شهيرة في قلب الرياض القديمة، شاهدة على أحداث توحيد المملكة.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303810/destinations/destinations/attraction-2/main.jpg",
    },
    {
        id: "attraction-3",
        name: "المتحف الوطني السعودي",
        city: "الرياض",
        category: "ثقافة",
        description: "متحف ضخم يروي تاريخ الجزيرة العربية من العصور القديمة وحتى اليوم.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303811/destinations/destinations/attraction-3/main.webp",
    },
    {
        id: "attraction-4",
        name: "حديقة الملك عبدالله",
        city: "الرياض",
        category: "ترفيه",
        description: "من أكبر الحدائق العامة في الرياض، مساحات خضراء واسعة ونوافير مياه.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303813/destinations/destinations/attraction-4/main.png",
    },
    {
        id: "attraction-5",
        name: "بوليفارد رياض سيتي",
        city: "الرياض",
        category: "ترفيه",
        description: "وجهة ترفيهية حديثة تضم فعاليات ومطاعم ومحال تجارية على مدار العام.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303815/destinations/destinations/attraction-5/main.jpg",
    },
    {
        id: "attraction-6",
        name: "حافة العالم",
        city: "الرياض",
        category: "مغامرة",
        description: "منحدرات صخرية مذهلة في جبال طويق، وجهة محببة لعشاق المشي والتصوير.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303816/destinations/destinations/attraction-6/main.jpg",
    },

    // جدة
    {
        id: "attraction-7",
        name: "كورنيش جدة",
        city: "جدة",
        category: "ترفيه",
        description: "واجهة بحرية ممتدة على ساحل البحر الأحمر بمطاعمها ومقاهيها وإطلالاتها الرائعة.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303827/destinations/destinations/attraction-7/main.jpg",
    },
    {
        id: "attraction-8",
        name: "نافورة الملك فهد",
        city: "جدة",
        category: "ترفيه",
        description: "أطول نافورة مياه في العالم، معلم بارز على كورنيش جدة.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303827/destinations/destinations/attraction-8/main.webp",
    },
    {
        id: "attraction-9",
        name: "البلد (جدة التاريخية)",
        city: "جدة",
        category: "تراث",
        description: "الحي التاريخي بمبانيه التراثية ذات الرواشين الخشبية، مسجل في اليونسكو.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303828/destinations/destinations/attraction-9/main.webp",
    },
    {
        id: "attraction-10",
        name: "جزيرة بياضة",
        city: "جدة",
        category: "ترفيه",
        description: "جزيرة ترفيهية على شاطئ جدة، تجمع بين الأنشطة البحرية والمطاعم.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303829/destinations/destinations/attraction-10/main.webp",
    },

    // العلا
    {
        id: "attraction-11",
        name: "الحِجر (مدائن صالح)",
        city: "العلا",
        category: "تراث",
        description: "أول موقع سعودي مسجل في اليونسكو، مقابر منحوتة في الصخر تعود لحضارة الأنباط.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303830/destinations/destinations/attraction-11/main.jpg",
    },
    {
        id: "attraction-12",
        name: "جبل الفيل",
        city: "العلا",
        category: "طبيعة",
        description: "تكوين صخري طبيعي يشبه شكل الفيل، من أبرز معالم العلا الطبيعية.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303831/destinations/destinations/attraction-12/main.jpg",
    },
    {
        id: "attraction-13",
        name: "مرايا",
        city: "العلا",
        category: "ثقافة",
        description: "أكبر مبنى مرآة في العالم، وجهة ثقافية وفنية وسط الصحراء.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303831/destinations/destinations/attraction-13/main.webp",
    },
    {
        id: "attraction-14",
        name: "واحة العلا القديمة",
        city: "العلا",
        category: "طبيعة",
        description: "واحة نخيل ممتدة تحيط بالبلدة القديمة، مثال حي على الزراعة التقليدية في المنطقة.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303833/destinations/destinations/attraction-14/main.jpg",
    },
 
    // أبها
    {
        id: "attraction-15",
        name: "جبل السودة",
        city: "أبها",
        category: "مغامرة",
        description: "أعلى قمة في السعودية، تلفريك ومناظر خلابة ومناخ معتدل صيفًا.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303835/destinations/destinations/attraction-15/main.jpg",
    },
    {
        id: "attraction-16",
        name: "وادي أبها",
        city: "أبها",
        category: "طبيعة",
        description: "وادٍ جبلي أخضر يوفر مسارات مشي وسط الطبيعة الجبلية لعسير.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303836/destinations/destinations/attraction-16/main.jpg",
    },
    {
        id: "attraction-17",
        name: "قرية رجال ألمع",
        city: "أبها",
        category: "تراث",
        description: "قرية تراثية شهيرة بمبانيها الحجرية الملونة وفنون القط العسيري.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303836/destinations/destinations/attraction-17/main.jpg",
    },
 
    // الطائف
    {
        id: "attraction-18",
        name: "الهدا",
        city: "الطائف",
        category: "طبيعة",
        description: "منطقة جبلية مطلة على مكة المكرمة، مشهورة بأجوائها المعتدلة وقرودها.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303837/destinations/destinations/attraction-18/main.webp",
    },
    {
        id: "attraction-19",
        name: "منتزهات الورد",
        city: "الطائف",
        category: "ترفيه",
        description: "مزارع ومنتزهات الورد الطائفي الشهير، خصوصًا في موسم القطاف.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303838/destinations/destinations/attraction-19/main.webp",
    },
    {
        id: "attraction-20",
        name: "تلفريك الهدا",
        city: "الطائف",
        category: "مغامرة",
        description: "رحلة تلفريك عبر الجبال بين الطائف ومكة المكرمة بإطلالات بانورامية.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303839/destinations/destinations/attraction-20/main.jpg",
    },
 
    // تبوك
    {
        id: "attraction-21",
        name: "شاطئ رأس الشيخ حميد",
        city: "تبوك",
        category: "طبيعة",
        description: "شاطئ نقي على خليج العقبة بمياه فيروزية وشعاب مرجانية.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303839/destinations/destinations/attraction-21/main.webp",
    },
    {
        id: "attraction-22",
        name: "جبل اللوز",
        city: "تبوك",
        category: "مغامرة",
        description: "أعلى قمم تبوك، تشهد تساقط الثلوج في الشتاء، وجهة مميزة لهواة التخييم.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303841/destinations/destinations/attraction-22/main.jpg",
    },
    {
        id: "attraction-23",
        name: "حسمى",
        city: "تبوك",
        category: "طبيعة",
        description: "منطقة صحراوية بتكوينات صخرية رملية شبيهة بمناظر المريخ.",
        image: "https://res.cloudinary.com/yq5z2av7/image/upload/v1785303842/destinations/destinations/attraction-23/main.jpg",
    },
];
