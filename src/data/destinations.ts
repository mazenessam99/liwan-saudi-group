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
        image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/09/03163245/Diriyah.jpg",
    },
    {
        id: "attraction-2",
        name: "قصر المصمك",
        city: "الرياض",
        category: "تراث",
        description: "قلعة تاريخية شهيرة في قلب الرياض القديمة، شاهدة على أحداث توحيد المملكة.",
        image: "https://www.urtrips.com/wp-content/uploads/2018/07/masmak-fort-riyadh-1.jpg",
    },
    {
        id: "attraction-3",
        name: "المتحف الوطني السعودي",
        city: "الرياض",
        category: "ثقافة",
        description: "متحف ضخم يروي تاريخ الجزيرة العربية من العصور القديمة وحتى اليوم.",
        image: "https://static.srpcdigital.com/styles/1037xauto/public/2024-12/891495_0.jpeg.webp",
    },
    {
        id: "attraction-4",
        name: "حديقة الملك عبدالله",
        city: "الرياض",
        category: "ترفيه",
        description: "من أكبر الحدائق العامة في الرياض، مساحات خضراء واسعة ونوافير مياه.",
        image: "https://white-ar.com/wp-content/uploads/2021/01/%D8%AD%D8%AF%D9%8A%D9%82%D8%A9-%D8%A7%D9%84%D9%85%D9%84%D9%83-%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87-%D8%A8%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6.png",
    },
    {
        id: "attraction-5",
        name: "بوليفارد رياض سيتي",
        city: "الرياض",
        category: "ترفيه",
        description: "وجهة ترفيهية حديثة تضم فعاليات ومطاعم ومحال تجارية على مدار العام.",
        image: "https://www.aleqt.com/sites/default/files/rbitem/2022/10/19/2020741-1769524521.jpg",
    },
    {
        id: "attraction-6",
        name: "حافة العالم",
        city: "الرياض",
        category: "مغامرة",
        description: "منحدرات صخرية مذهلة في جبال طويق، وجهة محببة لعشاق المشي والتصوير.",
        image: "https://static.arrajol.com/styles/693x433/public/2018/09/19/275121-%D8%AD%D8%A7%D9%81%D8%A9-%20%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-%20%D8%B7%D8%A8%D9%8A%D8%B9%D8%A9%20%D8%A3%D9%82%D8%B1%D8%A8%20%D8%A5%D9%84%D9%89%20%D8%A7%D9%84%D8%AE%D9%8A%D8%A7%D9%84%20%D8%A7%D9%84%D8%B0%D9%8A%20%D9%8A%D9%85%D8%AA%D8%AF%20%D8%A7%D9%84%D9%86%D8%B8%D8%B1%20%D9%81%D9%8A%D9%87%20%D8%A5%D9%84%D9%89%20%D9%85%D8%A7%20%D9%84%D8%A7%20%D9%86%D9%87%D8%A7%D9%8A%D8%A9.jpg",
    },

    // جدة
    {
        id: "attraction-7",
        name: "كورنيش جدة",
        city: "جدة",
        category: "ترفيه",
        description: "واجهة بحرية ممتدة على ساحل البحر الأحمر بمطاعمها ومقاهيها وإطلالاتها الرائعة.",
        image: "https://todotriplist.com/wp-content/uploads/2025/11/Jeddah-Corniche-at-Night.jpg",
    },
    {
        id: "attraction-8",
        name: "نافورة الملك فهد",
        city: "جدة",
        category: "ترفيه",
        description: "أطول نافورة مياه في العالم، معلم بارز على كورنيش جدة.",
        image: "https://tse3.mm.bing.net/th/id/OIP.vZRYPtYghQDO0hCWyrqhIAHaEc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
        id: "attraction-9",
        name: "البلد (جدة التاريخية)",
        city: "جدة",
        category: "تراث",
        description: "الحي التاريخي بمبانيه التراثية ذات الرواشين الخشبية، مسجل في اليونسكو.",
        image: "https://murshdk.com/Place/e39e79b871e3482fadebbf8654fa3142.webp",
    },
    {
        id: "attraction-10",
        name: "جزيرة بياضة",
        city: "جدة",
        category: "ترفيه",
        description: "جزيرة ترفيهية على شاطئ جدة، تجمع بين الأنشطة البحرية والمطاعم.",
        image: "https://tse4.mm.bing.net/th/id/OIP.-jJ1d2o1Z2gYVyN9J7rQMQHaC9?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },

    // العلا
    {
        id: "attraction-11",
        name: "الحِجر (مدائن صالح)",
        city: "العلا",
        category: "تراث",
        description: "أول موقع سعودي مسجل في اليونسكو، مقابر منحوتة في الصخر تعود لحضارة الأنباط.",
        image: "https://64.media.tumblr.com/effe4332f38c1bd146d029df193c7c23/e430f87c0a8d83cd-25/s1280x1920/0a6bc32b6a117be626c758d184fbdcb05abedae8.jpg",
    },
    {
        id: "attraction-12",
        name: "جبل الفيل",
        city: "العلا",
        category: "طبيعة",
        description: "تكوين صخري طبيعي يشبه شكل الفيل، من أبرز معالم العلا الطبيعية.",
        image: "https://auhm.org/wp-content/uploads/2025/10/87514-1536x960.jpg",
    },
    {
        id: "attraction-13",
        name: "مرايا",
        city: "العلا",
        category: "ثقافة",
        description: "أكبر مبنى مرآة في العالم، وجهة ثقافية وفنية وسط الصحراء.",
        image: "https://tse4.mm.bing.net/th/id/OIP.BoICxbwngkvDGJ2HKnMCvgHaEP?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
        id: "attraction-14",
        name: "واحة العلا القديمة",
        city: "العلا",
        category: "طبيعة",
        description: "واحة نخيل ممتدة تحيط بالبلدة القديمة، مثال حي على الزراعة التقليدية في المنطقة.",
        image: "https://portalcdn.spa.gov.sa/backend/original/202211/26de3788749dc0df92d913839938d01a.jpeg",
    },
 
    // أبها
    {
        id: "attraction-15",
        name: "جبل السودة",
        city: "أبها",
        category: "مغامرة",
        description: "أعلى قمة في السعودية، تلفريك ومناظر خلابة ومناخ معتدل صيفًا.",
        image: "https://blog.bayut.sa/uploads/2025/07/%D9%85%D8%B4%D8%B1%D9%88%D8%B9_%D9%82%D9%85%D9%85_%D8%A7%D9%84%D8%B3%D9%88%D8%AF%D8%A9AR02072025-1.jpg",
    },
    {
        id: "attraction-16",
        name: "وادي أبها",
        city: "أبها",
        category: "طبيعة",
        description: "وادٍ جبلي أخضر يوفر مسارات مشي وسط الطبيعة الجبلية لعسير.",
        image: "https://pbs.twimg.com/media/Fx9VGvXWABEmcCF.jpg",
    },
    {
        id: "attraction-17",
        name: "قرية رجال ألمع",
        city: "أبها",
        category: "تراث",
        description: "قرية تراثية شهيرة بمبانيها الحجرية الملونة وفنون القط العسيري.",
        image: "https://www.propertyfinder.sa/blog/wp-content/uploads/2022/04/1626186787065463100.jpeg",
    },
 
    // الطائف
    {
        id: "attraction-18",
        name: "الهدا",
        city: "الطائف",
        category: "طبيعة",
        description: "منطقة جبلية مطلة على مكة المكرمة، مشهورة بأجوائها المعتدلة وقرودها.",
        image: "https://tse3.mm.bing.net/th/id/OIP.ud0ffb1s3Bc_sWT0gZvmFgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
        id: "attraction-19",
        name: "منتزهات الورد",
        city: "الطائف",
        category: "ترفيه",
        description: "مزارع ومنتزهات الورد الطائفي الشهير، خصوصًا في موسم القطاف.",
        image: "https://tse2.mm.bing.net/th/id/OIP.BHUjjjHNW0mqHKXwhwH-DQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
        id: "attraction-20",
        name: "تلفريك الهدا",
        city: "الطائف",
        category: "مغامرة",
        description: "رحلة تلفريك عبر الجبال بين الطائف ومكة المكرمة بإطلالات بانورامية.",
        image: "https://ar.timeoutriyadh.com/cloud/artimeoutriyadh/2024/08/05/STAI0047_286-1024x768.jpg",
    },
 
    // تبوك
    {
        id: "attraction-21",
        name: "شاطئ رأس الشيخ حميد",
        city: "تبوك",
        category: "طبيعة",
        description: "شاطئ نقي على خليج العقبة بمياه فيروزية وشعاب مرجانية.",
        image: "https://tse3.mm.bing.net/th/id/OIP.--o6w6vkCfRDXS_uau7TDAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
        id: "attraction-22",
        name: "جبل اللوز",
        city: "تبوك",
        category: "مغامرة",
        description: "أعلى قمم تبوك، تشهد تساقط الثلوج في الشتاء، وجهة مميزة لهواة التخييم.",
        image: "https://static.srpcdigital.com/styles/1037xauto/public/2022/12/25/107405.jpg",
    },
    {
        id: "attraction-23",
        name: "حسمى",
        city: "تبوك",
        category: "طبيعة",
        description: "منطقة صحراوية بتكوينات صخرية رملية شبيهة بمناظر المريخ.",
        image: "https://www.aleqt.com/sites/default/files/rbitem/2022/05/18/1914176-1111819169.jpeg",
    },
];
