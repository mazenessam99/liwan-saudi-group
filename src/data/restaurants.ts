import type { Restaurant } from "@/types/restaurants";

export const restaurants: Restaurant[] = [
    // 1 — Arabian Heritage
    {
        id: "restaurant-1",
        slug: "restaurant-1",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80&sig=0",
        gallery: [
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80&sig=0",
            "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1200&q=80&sig=5",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80&sig=10",
            "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80&sig=15",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80&sig=20"
        ],
        name: "مجلس النخيل",
        cuisine: "مأكولات عربية أصيلة",
        cuisineType: "عربي",
        city: "الرياض",
        description: "ضيافة عربية أصيلة بنكهات الجدّات في مجالس فاخرة.",
        longDescription: "مطعم بطابع تراثي يحتفي بالموائد السعودية الكبرى، مع مفروشات تقليدية وأطباق تُحضَّر يومياً بوصفات عمرها قرون.",
        rating: 4.8, reviewCount: 1842, priceRange: "$$$",
        hours: {
            breakfast: "٦:٠٠ ص - ١٠:٠٠ ص",
            lunch: "١٢:٣٠ م - ٤:٠٠ م",
            dinner: "٧:٠٠ م - ١٢:٠٠ ص",
        },
        menu: [
            {
                category: "الفطور السعودي", items: [
                    { name: "شكشوكة بالكمأة", description: "بيض مع طماطم وكمأة بلدية", price: 75 },
                    { name: "فول مدمس بالسمن البلدي", description: "فول مهروس بالسمن والليمون", price: 45 },
                    { name: "معصوب الموز", description: "حلوى حجازية بالموز والقشطة", price: 60 },
                ]
            },
            {
                category: "المشاوي الملكية", items: [
                    { name: "حاشي مشوي على الفحم", description: "لحم الحاشي الفاخر مع أرز البخاري", price: 295 },
                    { name: "خروف مندي", description: "خروف نجدي طري بطريقة المندي", price: 220 },
                    { name: "كبسة الدجاج", description: "أرز بسمتي وتوابل بلدية", price: 135 },
                ]
            },
            {
                category: "الحلويات النجدية", items: [
                    { name: "قرص عقيلي", description: "قرص بالسمسم والدبس", price: 38 },
                    { name: "كليجا قصيمية", description: "بسكويت بالهيل والقهوة", price: 32 },
                ]
            },
        ],
        drinks: [
            {
                category: "القهوة العربية", items: [
                    { name: "قهوة الزعفران", description: "قهوة عربية بالزعفران والهيل", price: 40 },
                    { name: "قهوة بلون فاتح", description: "النكهة النجدية التقليدية", price: 35 },
                ]
            },
            {
                category: "الشاي والأعشاب", items: [
                    { name: "شاي مرامية", description: "شاي بالمرامية الجبلية", price: 28 },
                    { name: "شاي بدوي", description: "شاي ثقيل بالنعناع", price: 25 },
                ]
            },
        ],
    },
    // 2 — French Fine Dining
    {
        id: "restaurant-2",
        slug: "restaurant-2",
        image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1400&q=80&sig=17",
        gallery: [
            "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1200&q=80&sig=23",
            "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80&sig=28",
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80&sig=33",
            "https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1200&q=80&sig=38",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80&sig=43"
        ],
        name: "ليالي الصحراء",
        cuisine: "مأكولات فرنسية",
        cuisineType: "فرنسي",
        city: "جدة",
        description: "أناقة فرنسية بقائمة موسمية وصلصات تُحضَّر يومياً.",
        longDescription: "تجربة فاين دايننج فرنسية بإشراف شيف باريسي حاصل على نجمة ميشلان، في أجواء حميمة ومضاءة بالشموع.",
        rating: 4.9, reviewCount: 2104, priceRange: "$$$$",
        hours: {
            breakfast: "مغلق",
            lunch: "١:٠٠ م - ٣:٣٠ م",
            dinner: "٧:٣٠ م - ١١:٣٠ م",
        },
        menu: [
            {
                category: "أونتريه", items: [
                    { name: "فوا غرا بصلصة التين", description: "كبد إوز مع تين طازج", price: 285 },
                    { name: "إسكارجو", description: "حلزون بزبدة الثوم والبقدونس", price: 165 },
                    { name: "كاربتشيو الكمأة", description: "شرائح بقر بالكمأة السوداء", price: 195 },
                ]
            },
            {
                category: "أطباق رئيسية", items: [
                    { name: "بط ماجريه بالكرز", description: "صدر بط مع صلصة الكرز", price: 345 },
                    { name: "بوف بورجينيون", description: "لحم بقر مطبوخ ببطء بالنبيذ غير الكحولي", price: 295 },
                ]
            },
            {
                category: "حلويات فرنسية", items: [
                    { name: "كريم بروليه", description: "كريم فانيليا بطبقة كراميل", price: 75 },
                    { name: "سوفليه الشوكولاتة", description: "سوفليه طازج بقلب سائل", price: 85 },
                ]
            },
        ],
        drinks: [
            {
                category: "نبيذ غير كحولي", items: [
                    { name: "شاردونيه فاخر", description: "نبيذ أبيض مزال الكحول", price: 110 },
                    { name: "روزيه بروفنس", description: "وردي منعش", price: 105 },
                ]
            },
            {
                category: "كوكتيلات التوقيع", items: [
                    { name: "باريسيان سبريتز", description: "بقلب الفراولة والريحان", price: 70 },
                ]
            },
        ],
    },
    // 3 — Italian
    {
        id: "restaurant-3",
        slug: "restaurant-3",
        image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1400&q=80&sig=34",
        gallery: [
            "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80&sig=46",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80&sig=51",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80&sig=56",
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80&sig=61",
            "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80&sig=66"
        ],
        name: "اللؤلؤة الذهبية",
        cuisine: "مأكولات إيطالية",
        cuisineType: "إيطالي",
        city: "العلا",
        description: "إيطاليا الحقيقية في قلب العلا بمكونات مستوردة طازجة.",
        longDescription: "ركن إيطالي يقدم البيتزا الناپوليتانية والمعكرونة الطازجة المُحضّرة يدوياً في فرن حطب تقليدي.",
        rating: 4.7, reviewCount: 1567, priceRange: "$$$",
        hours: {
            breakfast: "٨:٠٠ ص - ١١:٠٠ ص",
            lunch: "١٢:٠٠ م - ٣:٠٠ م",
            dinner: "٦:٠٠ م - ١١:٠٠ م",
        },
        menu: [
            {
                category: "أنتيباستي", items: [
                    { name: "بروسكيتا الكمأة", description: "خبز محمص بزيت الكمأة", price: 65 },
                    { name: "كاپريزي", description: "موزاريلا بوفالو مع طماطم وريحان", price: 85 },
                ]
            },
            {
                category: "البيتزا والباستا", items: [
                    { name: "مارغريتا D.O.P", description: "بيتزا ناپوليتانية أصلية", price: 95 },
                    { name: "كاربونارا روماني", description: "سباغيتي مع بانشيتا وبيض", price: 125 },
                    { name: "ريزوتو الفطر البري", description: "أرز كارناولي مع فطر بورتشيني", price: 145 },
                    { name: "لازانيا بولونيز", description: "طبقات معكرونة بصلصة اللحم", price: 135 },
                ]
            },
            {
                category: "دولتشي", items: [
                    { name: "تيراميسو", description: "ماسكاربوني وقهوة وكاكاو", price: 65 },
                    { name: "بانا كوتا", description: "بصوص الفواكه الحمراء", price: 55 },
                ]
            },
        ],
        drinks: [
            {
                category: "قهوة إيطالية", items: [
                    { name: "إسبريسو دوبيو", description: "حبوب أرابيكا محمصة", price: 22 },
                    { name: "أفوغاتو", description: "آيس كريم فانيليا بإسبريسو", price: 45 },
                ]
            },
            {
                category: "مياه إيطالية", items: [
                    { name: "سان بيلليجرينو", description: "مياه فوارة فاخرة", price: 30 },
                ]
            },
        ],
    },
    // 4 — Japanese
    {
        id: "restaurant-4",
        slug: "restaurant-4",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1400&q=80&sig=51",
        gallery: [
            "https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1200&q=80&sig=69",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80&sig=74",
            "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=1200&q=80&sig=79",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80&sig=84",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80&sig=89"
        ],
        name: "سما اليابانية",
        cuisine: "مأكولات يابانية",
        cuisineType: "ياباني",
        city: "أبها",
        description: "سوشي وساشيمي بأيدي شيف من طوكيو.",
        longDescription: "تجربة أوماكاسي فاخرة مع شيف ياباني يقدم أرقى أنواع السمك المستورد طازجاً من سوق توكيو ٤ مرات أسبوعياً.",
        rating: 4.9, reviewCount: 1923, priceRange: "$$$$",
        hours: {
            breakfast: "مغلق",
            lunch: "١٢:٣٠ م - ٢:٣٠ م",
            dinner: "٦:٠٠ م - ١١:٠٠ م",
        },
        menu: [
            {
                category: "ساشيمي", items: [
                    { name: "تونة أوتورو", description: "بطن تونة بلوفين فاخر", price: 220 },
                    { name: "سلمون نرويجي", description: "شرائح سلمون بارد", price: 140 },
                    { name: "هاماشي يلوتيل", description: "شرائح ياباني طازج", price: 165 },
                ]
            },
            {
                category: "سوشي رول", items: [
                    { name: "دراغون رول", description: "أنغيلا مع أفوكادو", price: 145 },
                    { name: "كاليفورنيا رول", description: "كراب وأفوكادو", price: 95 },
                    { name: "رينبو رول", description: "ست أنواع سمك", price: 175 },
                ]
            },
            {
                category: "أطباق ساخنة", items: [
                    { name: "واغيو A5 تيپانياكي", description: "لحم واغيو ياباني فاخر", price: 485 },
                    { name: "تيمبورا روبيان", description: "روبيان مقرمش بصلصة تنتسويو", price: 125 },
                ]
            },
        ],
        drinks: [
            {
                category: "شاي ياباني", items: [
                    { name: "شاي ماتشا احتفالي", description: "شاي أخضر مطحون", price: 55 },
                    { name: "شاي هوجيتشا", description: "شاي محمص دافئ", price: 38 },
                ]
            },
            {
                category: "ساكي غير كحولي", items: [
                    { name: "أمازاكي حلو", description: "مشروب أرز ياباني", price: 65 },
                ]
            },
        ],
    },
    // 5 — Seafood
    {
        id: "restaurant-5",
        slug: "restaurant-5",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80&sig=68",
        gallery: [
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80&sig=92",
            "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80&sig=97",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80&sig=102",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80&sig=107",
            "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1200&q=80&sig=112"
        ],
        name: "نسيم البحر",
        cuisine: "مأكولات بحرية",
        cuisineType: "بحري",
        city: "مكة المكرمة",
        description: "صيد البحر الأحمر اليومي مع منصة عرض مباشرة.",
        longDescription: "إطلالة مباشرة على البحر مع منصة عرض للمأكولات الطازجة يومياً يختار منها الضيوف، تُحضّر بأي طريقة يفضلونها.",
        rating: 4.6, reviewCount: 1340, priceRange: "$$$",
        hours: {
            breakfast: "٧:٠٠ ص - ١٠:٣٠ ص",
            lunch: "١٢:٠٠ م - ٤:٠٠ م",
            dinner: "٦:٣٠ م - ١٢:٠٠ ص",
        },
        menu: [
            {
                category: "صيد اليوم", items: [
                    { name: "هامور مشوي بالأعشاب", description: "هامور كامل بالليمون والبهارات", price: 285 },
                    { name: "ناجل صيادية", description: "أرز بصياد البحر الأحمر", price: 195 },
                    { name: "كركند مشوي", description: "كركند بزبدة الثوم", price: 395 },
                ]
            },
            {
                category: "روبيان وحبار", items: [
                    { name: "روبيان جامبو بالزعتر", description: "روبيان كبير بالزعتر الطازج", price: 175 },
                    { name: "حبار محشي", description: "حبار محشي بالأرز والصنوبر", price: 145 },
                ]
            },
            {
                category: "حلويات بحرية", items: [
                    { name: "محلبية اللوز", description: "كاسترد لبن بالماء الزهر", price: 45 },
                ]
            },
        ],
        drinks: [
            {
                category: "عصائر منعشة", items: [
                    { name: "عصير المانجو الهندي", description: "مانجو طبيعي حلو", price: 38 },
                    { name: "كوكتيل الصياد", description: "أناناس بالنعناع والزنجبيل", price: 48 },
                ]
            },
            {
                category: "ماء البحر النقي", items: [
                    { name: "بريير", description: "مياه غازية فرنسية", price: 32 },
                ]
            },
        ],
    },
    // 6 — Indian
    {
        id: "restaurant-6",
        slug: "restaurant-6",
        image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1400&q=80&sig=85",
        gallery: [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80&sig=115",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80&sig=120",
            "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1200&q=80&sig=125",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80&sig=130",
            "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80&sig=135"
        ],
        name: "بهارات الشرق",
        cuisine: "مأكولات هندية ملكية",
        cuisineType: "هندي",
        city: "المدينة المنورة",
        description: "بهارات الهند الأصيلة بأيدي طهاة من مومباي.",
        longDescription: "مطعم هندي راقٍ يقدم أطباق المهراجا التقليدية في فرن التندوري الحجري، مع تشكيلة واسعة من الكاري والخبز الطازج.",
        rating: 4.7, reviewCount: 1689, priceRange: "$$$",
        hours: {
            breakfast: "مغلق",
            lunch: "١٢:٣٠ م - ٣:٣٠ م",
            dinner: "٧:٠٠ م - ١١:٣٠ م",
        },
        menu: [
            {
                category: "تندوري", items: [
                    { name: "تكا دجاج", description: "دجاج مارينيت بالزبادي والبهارات", price: 95 },
                    { name: "سيكح كباب", description: "كباب لحم بالبهارات الهندية", price: 115 },
                ]
            },
            {
                category: "كاري وبرياني", items: [
                    { name: "بتر تشيكن", description: "دجاج بصلصة الزبدة والطماطم", price: 125 },
                    { name: "حيدر آباد برياني", description: "أرز بسمتي بلحم الخروف", price: 165 },
                    { name: "بالاك بانير", description: "سبانخ مع جبن هندي", price: 95 },
                ]
            },
            {
                category: "حلويات هندية", items: [
                    { name: "غولاب جامون", description: "كرات حليب بشراب الورد", price: 42 },
                    { name: "كولفي بستاشيو", description: "آيس كريم هندي بالفستق", price: 48 },
                ]
            },
        ],
        drinks: [
            {
                category: "لاسي وعصائر", items: [
                    { name: "لاسي بالمانجو", description: "زبادي مع مانجو", price: 35 },
                    { name: "لاسي الورد", description: "زبادي بشراب الورد", price: 32 },
                ]
            },
            {
                category: "شاي مسالا", items: [
                    { name: "شاي ماسالا تقليدي", description: "شاي بالحليب والبهارات", price: 28 },
                ]
            },
        ],
    },
    // 7 — Lebanese
    {
        id: "restaurant-7",
        slug: "restaurant-7",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80&sig=102",
        gallery: [
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80&sig=138",
            "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1200&q=80&sig=143",
            "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80&sig=148",
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80&sig=153",
            "https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1200&q=80&sig=158"
        ],
        name: "بيت بيروت",
        cuisine: "مأكولات لبنانية",
        cuisineType: "لبناني",
        city: "الخبر",
        description: "ميزة لبنانية بأصول جبل لبنان وحديقة خضراء.",
        longDescription: "ركن لبناني حقيقي تحت أشجار النخيل، مع موسيقى عود حية وأكثر من ٣٠ نوعاً من المازة الطازجة.",
        rating: 4.5, reviewCount: 1198, priceRange: "$$",
        hours: {
            breakfast: "٧:٣٠ ص - ١١:٠٠ ص",
            lunch: "١:٠٠ م - ٥:٠٠ م",
            dinner: "٧:٠٠ م - ١:٠٠ ص",
        },
        menu: [
            {
                category: "مازة باردة", items: [
                    { name: "حمص بيروتي", description: "حمص بالطحينة والليمون", price: 38 },
                    { name: "متبل باذنجان", description: "باذنجان مدخن بالطحينة", price: 42 },
                    { name: "تبولة قروية", description: "بقدونس وبرغل وطماطم", price: 45 },
                ]
            },
            {
                category: "مازة ساخنة", items: [
                    { name: "كبة نية", description: "كبة لحم نيء طازجة", price: 85 },
                    { name: "فتوش الجبل", description: "خضار مع خبز محمص", price: 48 },
                ]
            },
            {
                category: "مشاوي لبنانية", items: [
                    { name: "شيش طاووق", description: "دجاج مشوي بالثوم", price: 95 },
                    { name: "لحم مشوي", description: "تشكيلة مشاوي مع أرز", price: 165 },
                ]
            },
            {
                category: "حلويات لبنانية", items: [
                    { name: "كنافة نابلسية", description: "كنافة بالجبن", price: 55 },
                    { name: "بقلاوة بالفستق", description: "بقلاوة طازجة", price: 45 },
                ]
            },
        ],
        drinks: [
            {
                category: "عصائر طازجة", items: [
                    { name: "عصير التوت", description: "توت أحمر طازج", price: 35 },
                    { name: "كوكتيل فواكه", description: "تشكيلة فواكه موسمية", price: 42 },
                ]
            },
            {
                category: "قهوة عربية", items: [
                    { name: "قهوة بيضاء", description: "ماء زهر مع ماء ساخن", price: 25 },
                ]
            },
        ],
    },
    // 8 — International Buffet
    {
        id: "restaurant-8",
        slug: "restaurant-8",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1400&q=80&sig=119",
        gallery: [
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80&sig=161",
            "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80&sig=166",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80&sig=171",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80&sig=176",
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80&sig=181"
        ],
        name: "أمواج جدة",
        cuisine: "بوفيه دولي",
        cuisineType: "عالمي",
        city: "جدة",
        description: "بوفيه ضخم بمحطات حول العالم على البحر.",
        longDescription: "بوفيه عالمي بـ١٢ محطة طبخ مباشر تشمل المطبخ الآسيوي والمتوسطي والمكسيكي، مع إطلالة بانورامية على البحر الأحمر.",
        rating: 4.4, reviewCount: 2890, priceRange: "$$$",
        hours: {
            breakfast: "٦:٣٠ ص - ١٠:٣٠ ص",
            lunch: "١٢:٣٠ م - ٤:٠٠ م",
            dinner: "٦:٣٠ م - ١١:٠٠ م",
        },
        menu: [
            {
                category: "محطة آسيوية", items: [
                    { name: "ووك آسيوي مباشر", description: "نودلز وأرز محضّر أمامك", price: 145 },
                    { name: "ديم سم", description: "تشكيلة ديم سم بخاري", price: 95 },
                ]
            },
            {
                category: "محطة شواء", items: [
                    { name: "ستيك ريبآي", description: "ستيك أمريكي مع صلصات", price: 245 },
                    { name: "تشكيلة مأكولات بحرية", description: "روبيان وأخطبوط وكركند", price: 285 },
                ]
            },
            {
                category: "محطة الحلويات", items: [
                    { name: "تشكيلة كيك عالمية", description: "أكثر من ١٠ أنواع", price: 65 },
                    { name: "نافورة الشوكولاتة", description: "بفواكه طازجة", price: 55 },
                ]
            },
        ],
        drinks: [
            {
                category: "بوفيه مشروبات", items: [
                    { name: "بوفيه عصائر مفتوح", description: "أكثر من ١٥ عصير", price: 75 },
                ]
            },
        ],
    },
    // 9 — Hijazi
    {
        id: "restaurant-9",
        slug: "restaurant-9",
        image: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1400&q=80&sig=136",
        gallery: [
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80&sig=184",
            "https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1200&q=80&sig=189",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80&sig=194",
            "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=1200&q=80&sig=199",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80&sig=204"
        ],
        name: "جوهرة الحجاز",
        cuisine: "مأكولات حجازية",
        cuisineType: "حجازي",
        city: "مكة المكرمة",
        description: "أكلات حجازية بنكهات الحجاج القديمة.",
        longDescription: "مطعم في زقاق تاريخي قرب الحرم، يقدّم الطبخ الحجازي الأصيل بوصفات بيوت مكة العريقة.",
        rating: 4.6, reviewCount: 945, priceRange: "$$",
        hours: {
            breakfast: "٥:٠٠ ص - ٩:٠٠ ص",
            lunch: "١:٠٠ م - ٤:٣٠ م",
            dinner: "٨:٠٠ م - ٢:٠٠ ص",
        },
        menu: [
            {
                category: "الفطور الحجازي", items: [
                    { name: "فول حجازي", description: "فول بزيت الزيتون والكمون", price: 35 },
                    { name: "سحلب بالقشطة", description: "مشروب ساخن بالقرفة والمكسرات", price: 32 },
                ]
            },
            {
                category: "أكلات حجازية", items: [
                    { name: "مطازيز", description: "حساء العجين بالخضار", price: 75 },
                    { name: "صياديّة حجازية", description: "أرز بالسمك والبهارات", price: 145 },
                    { name: "مفطح", description: "خروف على أرز بخاري", price: 195 },
                ]
            },
            {
                category: "حلويات حجازية", items: [
                    { name: "زلابيا", description: "عجين مقلي بشراب السكر", price: 28 },
                    { name: "بسبوسة بالقشطة", description: "سميد بالقشطة الطازجة", price: 38 },
                ]
            },
        ],
        drinks: [
            {
                category: "مشروبات حجازية", items: [
                    { name: "تمر هندي", description: "مشروب تمر هندي بارد", price: 22 },
                    { name: "خروب بارد", description: "مشروب الخروب التقليدي", price: 25 },
                    { name: "سوبيا", description: "مشروب رمضاني تقليدي", price: 28 },
                ]
            },
        ],
    },
    // 10 — Steakhouse
    {
        id: "restaurant-10",
        slug: "restaurant-10",
        image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1400&q=80&sig=153",
        gallery: [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80&sig=207",
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80&sig=212",
            "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80&sig=217",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80&sig=222",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80&sig=227"
        ],
        name: "مرسى الذهب",
        cuisine: "ستيك هاوس فاخر",
        cuisineType: "ستيك",
        city: "نيوم",
        description: "أفضل قطع لحوم العالم على شواية مفتوحة.",
        longDescription: "ستيك هاوس بمنطقة مفتوحة لتعتيق اللحوم، يقدّم واغيو ياباني ولحوم أنغوس أمريكية مع منصة جوبلتس الأسطورية.",
        rating: 4.9, reviewCount: 1432, priceRange: "$$$$",
        hours: {
            breakfast: "مغلق",
            lunch: "١٢:٠٠ م - ٣:٠٠ م",
            dinner: "٦:٠٠ م - ١٢:٠٠ ص",
        },
        menu: [
            {
                category: "ستيكات التوقيع", items: [
                    { name: "واغيو A5 ياباني (٢٠٠غ)", description: "أرقى لحم في العالم", price: 685 },
                    { name: "ريبآي أنغوس (٤٠٠غ)", description: "معتق ٢٨ يوم", price: 385 },
                    { name: "فيليه مينيون (٢٢٠غ)", description: "أكثر قطع اللحم طراوة", price: 345 },
                ]
            },
            {
                category: "أطباق جانبية", items: [
                    { name: "بطاطس بالكمأة", description: "هريس بطاطس بزيت الكمأة", price: 65 },
                    { name: "هليون مشوي", description: "هليون بزبدة الليمون", price: 55 },
                ]
            },
            {
                category: "حلويات", items: [
                    { name: "تشيز كيك نيويوركي", description: "كلاسيكي بصوص التوت", price: 75 },
                ]
            },
        ],
        drinks: [
            {
                category: "موكتيل التوقيع", items: [
                    { name: "غولد راش", description: "زنجبيل وليمون وعسل", price: 65 },
                    { name: "سموكي بالتفاح", description: "تفاح مدخن بإكليل الجبل", price: 70 },
                ]
            },
        ],
    },
    // 11 — Turkish
    {
        id: "restaurant-11",
        slug: "restaurant-11",
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1400&q=80&sig=170",
        gallery: [
            "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=1200&q=80&sig=230",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80&sig=235",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80&sig=240",
            "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1200&q=80&sig=245",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80&sig=250"
        ],
        name: "قصر إسطنبول",
        cuisine: "مطبخ تركي عثماني",
        cuisineType: "تركي",
        city: "المدينة المنورة",
        description: "كباب تركي وقهوة عثمانية أصيلة.",
        longDescription: "تجربة عثمانية كاملة بمشاوي تركية شهيرة وحلويات الباقلاوة الطازجة بفندق على الطراز الأناضولي.",
        rating: 4.5, reviewCount: 1067, priceRange: "$$",
        hours: {
            breakfast: "٧:٠٠ ص - ١١:٠٠ ص",
            lunch: "١٢:٣٠ م - ٤:٠٠ م",
            dinner: "٦:٣٠ م - ١١:٣٠ م",
        },
        menu: [
            {
                category: "فطور تركي", items: [
                    { name: "كهفالتي تركي ملكي", description: "أجبان وزيتون وعسل ومربى", price: 145 },
                    { name: "بوريك بالجبن", description: "عجين مقرمش بالجبن", price: 55 },
                ]
            },
            {
                category: "كباب وأطباق", items: [
                    { name: "أضنة كباب", description: "كباب لحم حار", price: 95 },
                    { name: "إسكندر كباب", description: "كباب مع زبادي وصلصة طماطم", price: 125 },
                    { name: "بيدا تركي", description: "خبز تركي محشي", price: 75 },
                ]
            },
            {
                category: "حلويات تركية", items: [
                    { name: "بقلاوة بالفستق الحلبي", description: "بقلاوة طازجة يومياً", price: 48 },
                    { name: "كنافة بالقشطة", description: "كنافة بقشطة تركية", price: 55 },
                ]
            },
        ],
        drinks: [
            {
                category: "قهوة وشاي تركي", items: [
                    { name: "قهوة تركية عثمانية", description: "قهوة تركية بالهيل", price: 35 },
                    { name: "شاي تركي في الكؤوس", description: "شاي أحمر تركي", price: 22 },
                ]
            },
            {
                category: "أيران", items: [
                    { name: "أيران تركي تقليدي", description: "زبادي مع ملح وماء", price: 18 },
                ]
            },
        ],
    },
    // 12 — Moroccan
    {
        id: "restaurant-12",
        slug: "restaurant-12",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80&sig=187",
        gallery: [
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80&sig=253",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80&sig=258",
            "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1200&q=80&sig=263",
            "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80&sig=268",
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80&sig=273"
        ],
        name: "حدائق مراكش",
        cuisine: "مطبخ مغربي",
        cuisineType: "مغربي",
        city: "الرياض",
        description: "طاجين مغربي وكسكسي بأجواء رياض مراكش.",
        longDescription: "رياض مغربي حقيقي بنافورة وسطية ومصابيح نحاسية، يقدّم الطاجين على الفحم والكسكسي بسبع خضراوات.",
        rating: 4.6, reviewCount: 823, priceRange: "$$$",
        hours: {
            breakfast: "٨:٠٠ ص - ١١:٣٠ ص",
            lunch: "١:٠٠ م - ٤:٠٠ م",
            dinner: "٧:٣٠ م - ١٢:٠٠ ص",
        },
        menu: [
            {
                category: "سلطات مغربية", items: [
                    { name: "سلطة زعلوك", description: "باذنجان مع طماطم", price: 45 },
                    { name: "سلطة طبولة المغرب", description: "فلفل مشوي وطماطم", price: 42 },
                ]
            },
            {
                category: "طاجين", items: [
                    { name: "طاجين دجاج بالليمون", description: "دجاج بالليمون المخلل والزيتون", price: 135 },
                    { name: "طاجين خروف بالبرقوق", description: "خروف مع برقوق ولوز", price: 175 },
                    { name: "كسكسي روي بسبع خضراوات", description: "كسكسي بلحم وسبع خضار", price: 165 },
                ]
            },
            {
                category: "بسطيلة", items: [
                    { name: "بسطيلة الدجاج", description: "فطيرة حلو-حادة بالدجاج واللوز", price: 145 },
                ]
            },
            {
                category: "حلويات مغربية", items: [
                    { name: "قعب الغزال", description: "حلوى مغربية باللوز", price: 38 },
                    { name: "شباكية", description: "بالعسل والسمسم", price: 32 },
                ]
            },
        ],
        drinks: [
            {
                category: "شاي مغربي", items: [
                    { name: "أتاي مغربي بالنعناع", description: "شاي أخضر بالنعناع البلدي", price: 28 },
                ]
            },
            {
                category: "عصائر مغربية", items: [
                    { name: "بناني وأفوكادو", description: "مشروب مغربي شهير", price: 35 },
                ]
            },
        ],
    },
    // 13 — Asian Fusion
    {
        id: "restaurant-13",
        slug: "restaurant-13",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80&sig=204",
        gallery: [
            "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1200&q=80&sig=276",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80&sig=281",
            "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80&sig=286",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80&sig=291",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80&sig=296"
        ],
        name: "روح الصحراء آسيوي",
        cuisine: "آسيوي فيوجن",
        cuisineType: "آسيوي",
        city: "جدة",
        description: "مزج آسيوي عصري بأطباق إبداعية.",
        longDescription: "تجربة معاصرة تمزج تقاليد المطابخ التايلاندية والفيتنامية والصينية في صحون فنية مبتكرة.",
        rating: 4.7, reviewCount: 1421, priceRange: "$$$",
        hours: {
            breakfast: "مغلق",
            lunch: "١٢:٠٠ م - ٣:٠٠ م",
            dinner: "٦:٠٠ م - ١:٠٠ ص",
        },
        menu: [
            {
                category: "بداية آسيوية", items: [
                    { name: "بان كاو فيتنامي", description: "لفائف أرز بخارية", price: 75 },
                    { name: "ساتاي تايلاندي", description: "أسياخ دجاج بصلصة الفول السوداني", price: 85 },
                ]
            },
            {
                category: "أطباق رئيسية", items: [
                    { name: "باد تاي روبيان", description: "نودلز تايلاندي مع روبيان", price: 125 },
                    { name: "فو فيتنامي بقري", description: "حساء نودلز فيتنامي", price: 95 },
                    { name: "بط بكين", description: "بط مقرمش مع خبز رقيق", price: 285 },
                ]
            },
            {
                category: "حلويات آسيوية", items: [
                    { name: "موتشي ماتشا", description: "كرات أرز بشاي ماتشا", price: 55 },
                ]
            },
        ],
        drinks: [
            {
                category: "شاي آسيوي", items: [
                    { name: "شاي ياسمين صيني", description: "شاي ياسمين عطر", price: 32 },
                    { name: "بوبا تي", description: "شاي تايواني بحبيبات التابيوكا", price: 42 },
                ]
            },
            {
                category: "موكتيل آسيوي", items: [
                    { name: "ليتشي مارتيني", description: "ليتشي مع ليمون", price: 58 },
                ]
            },
        ],
    },
    // 14 — Mexican
    {
        id: "restaurant-14",
        slug: "restaurant-14",
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1400&q=80&sig=221",
        gallery: [
            "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80&sig=299",
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80&sig=304",
            "https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=1200&q=80&sig=309",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80&sig=314",
            "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=1200&q=80&sig=319"
        ],
        name: "أزهار اليالاسكا",
        cuisine: "مطبخ مكسيكي",
        cuisineType: "مكسيكي",
        city: "الخبر",
        description: "نكهات المكسيك الحارة بشيف من ميكسيكو سيتي.",
        longDescription: "ركن مكسيكي حيوي بألوان فيستا، يقدّم تاكوس وانتشيلادا وغواكامولي محضّر طازج على الطاولة.",
        rating: 4.4, reviewCount: 678, priceRange: "$$",
        hours: {
            breakfast: "٩:٠٠ ص - ١١:٣٠ ص",
            lunch: "١٢:٠٠ م - ٤:٠٠ م",
            dinner: "٦:٠٠ م - ١:٠٠ ص",
        },
        menu: [
            {
                category: "بدايات مكسيكية", items: [
                    { name: "غواكامولي طازج", description: "أفوكادو يُحضَّر على الطاولة", price: 55 },
                    { name: "ناتشوز سوبريم", description: "بالجبن واللحم والخضار", price: 75 },
                ]
            },
            {
                category: "تاكوس وبوريتو", items: [
                    { name: "تاكوس باستور (٣ قطع)", description: "تاكوس بلحم خنزير بديل", price: 85 },
                    { name: "بوريتو لحم", description: "بوريتو ضخم بالأرز والفاصوليا", price: 95 },
                    { name: "كيساديا الدجاج", description: "تورتيلا بالجبن والدجاج", price: 78 },
                ]
            },
            {
                category: "حلويات مكسيكية", items: [
                    { name: "تشورو بالشوكولاتة", description: "تشورو مقرمش بصوص الشوكولاتة", price: 42 },
                ]
            },
        ],
        drinks: [
            {
                category: "مارغريتا بلا كحول", items: [
                    { name: "مارغريتا الفراولة", description: "فراولة مع ليمون", price: 52 },
                    { name: "مارغريتا كلاسيك", description: "ليمون منعش", price: 45 },
                ]
            },
            {
                category: "مشروبات مكسيكية", items: [
                    { name: "هورتشاتا", description: "مشروب أرز بالقرفة", price: 32 },
                ]
            },
        ],
    },
    // 15 — Vegan
    {
        id: "restaurant-15",
        slug: "restaurant-15",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=80&sig=238",
        gallery: [
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80&sig=322",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80&sig=327",
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80&sig=332",
            "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80&sig=337",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80&sig=342"
        ],
        name: "حديقة الزعفران النباتية",
        cuisine: "مطبخ نباتي عضوي",
        cuisineType: "نباتي",
        city: "الطائف",
        description: "أطباق نباتية إبداعية من مزرعة الطائف العضوية.",
        longDescription: "تجربة نباتية فاخرة بمكونات من مزرعتنا الخاصة في الطائف، تثبت أن النباتي يمكن أن يكون فاخراً.",
        rating: 4.5, reviewCount: 542, priceRange: "$$",
        hours: {
            breakfast: "٧:٠٠ ص - ١١:٠٠ ص",
            lunch: "١٢:٠٠ م - ٣:٣٠ م",
            dinner: "٦:٠٠ م - ١٠:٣٠ م",
        },
        menu: [
            {
                category: "فطور نباتي", items: [
                    { name: "بانكيك الموز والشوفان", description: "بانكيك صحي بشراب القيقب", price: 55 },
                    { name: "أفوكادو توست", description: "خبز حبوب كاملة بالأفوكادو", price: 48 },
                ]
            },
            {
                category: "سلطات وحساء", items: [
                    { name: "بودل كينوا", description: "كينوا مع خضار مشوية", price: 75 },
                    { name: "حساء العدس بالكركم", description: "حساء مغذٍ ومدفئ", price: 42 },
                ]
            },
            {
                category: "أطباق رئيسية", items: [
                    { name: "كاري الخضار التايلاندي", description: "كاري بحليب جوز الهند", price: 85 },
                    { name: "بيرغر العدس", description: "بيرغر نباتي بخبز كينوا", price: 78 },
                ]
            },
            {
                category: "حلويات نباتية", items: [
                    { name: "تشوكوليت موس أفوكادو", description: "موس شوكولاتة نباتي", price: 48 },
                ]
            },
        ],
        drinks: [
            {
                category: "عصائر سوبر فود", items: [
                    { name: "عصير أخضر ديتوكس", description: "سبانخ وكرفس وتفاح", price: 42 },
                    { name: "عصير الشمندر", description: "شمندر مع زنجبيل وليمون", price: 38 },
                ]
            },
            {
                category: "حليب نباتي", items: [
                    { name: "كافيه لاتيه باللوز", description: "قهوة بحليب اللوز", price: 35 },
                ]
            },
        ],
    },
    // 16 — Patisserie
    {
        id: "restaurant-16",
        slug: "restaurant-16",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80&sig=255",
        gallery: [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80&sig=345",
            "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=1200&q=80&sig=350",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80&sig=355",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80&sig=360",
            "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1200&q=80&sig=365"
        ],
        name: "أزهار الياسمين باتيسري",
        cuisine: "حلويات وقهوة",
        cuisineType: "حلويات",
        city: "الرياض",
        description: "حلويات فرنسية وقهوة اختصاص في أجواء أنيقة.",
        longDescription: "ركن متخصص يقدم الكرواسون الباريسي الطازج يومياً وأرقى أنواع القهوة المختصة المحمصة محلياً.",
        rating: 4.7, reviewCount: 1893, priceRange: "$$",
        hours: {
            breakfast: "٦:٠٠ ص - ١١:٣٠ ص",
            lunch: "١٢:٠٠ م - ٤:٠٠ م",
            dinner: "٤:٠٠ م - ١١:٠٠ م",
        },
        menu: [
            {
                category: "معجنات صباحية", items: [
                    { name: "كرواسون بالزبدة", description: "كرواسون فرنسي تقليدي", price: 22 },
                    { name: "بان أو شوكولا", description: "معجنات بالشوكولاتة", price: 25 },
                    { name: "كويني-أمان", description: "حلوى بريتونية بالكراميل", price: 32 },
                ]
            },
            {
                category: "كيكات", items: [
                    { name: "أوبرا", description: "كيك فرنسي بالقهوة والشوكولاتة", price: 65 },
                    { name: "ميلفي بالتوت", description: "ميلفي بالتوت الطازج", price: 55 },
                    { name: "تشيز كيك الفستق", description: "بفستق حلبي", price: 58 },
                ]
            },
            {
                category: "ماكرون", items: [
                    { name: "صندوق ماكرون (٦ قطع)", description: "تشكيلة نكهات فرنسية", price: 95 },
                ]
            },
        ],
        drinks: [
            {
                category: "قهوة مختصة", items: [
                    { name: "في ٦٠ يدوية", description: "قهوة مختصة بطريقة الترشيح", price: 38 },
                    { name: "فلات وايت", description: "كوب صغير بحليب مخملي", price: 28 },
                    { name: "موكا فستق", description: "موكا بنكهة الفستق", price: 35 },
                ]
            },
            {
                category: "شاي مختصة", items: [
                    { name: "إيرل غراي", description: "شاي بالبرغموت", price: 25 },
                ]
            },
        ],
    },
    // 17 — Najdi
    {
        id: "restaurant-17",
        slug: "restaurant-17",
        image: "https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=1400&q=80&sig=272",
        gallery: [
            "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1200&q=80&sig=368",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80&sig=373",
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80&sig=378",
            "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1200&q=80&sig=383",
            "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80&sig=388"
        ],
        name: "أصول نجدية",
        cuisine: "مأكولات نجدية تراثية",
        cuisineType: "نجدي",
        city: "الرياض",
        description: "تراث نجد على موائد طينية وضوء فوانيس.",
        longDescription: "تجربة نجدية أصيلة في بيت طيني مرمم، نأكل على الأرض كما كان الأجداد، مع أمسيات سامري وشاعر.",
        rating: 4.8, reviewCount: 1102, priceRange: "$$",
        hours: {
            breakfast: "٦:٠٠ ص - ٩:٣٠ ص",
            lunch: "١٢:٠٠ م - ٤:٠٠ م",
            dinner: "٧:٣٠ م - ١:٠٠ ص",
        },
        menu: [
            {
                category: "فطور نجدي", items: [
                    { name: "خبز تنور بالسمن", description: "خبز تنور حار مع سمن بلدي", price: 25 },
                    { name: "بيض بالسمن والتمر", description: "إفطار البدو التقليدي", price: 35 },
                ]
            },
            {
                category: "أطباق نجدية", items: [
                    { name: "جريش", description: "حبوب القمح المهروسة باللحم", price: 95 },
                    { name: "قرصان", description: "خبز نجدي مرق الخضار واللحم", price: 115 },
                    { name: "مرقوق", description: "عجين رقيق مع مرق", price: 95 },
                    { name: "حنيذ نجدي", description: "خروف مطبوخ تحت الأرض", price: 245 },
                ]
            },
            {
                category: "حلويات نجدية", items: [
                    { name: "كليجا قصيمية", description: "حلوى نجدية بالهيل", price: 28 },
                    { name: "خبيصة", description: "حلوى بالطحين والسمن والسكر", price: 32 },
                ]
            },
        ],
        drinks: [
            {
                category: "قهوة عربية بلدية", items: [
                    { name: "قهوة شقرا", description: "قهوة بلون فاتح بالهيل والزعفران", price: 35 },
                ]
            },
            {
                category: "تمر مع لقيمات", items: [
                    { name: "تمر سكري بالكريمة", description: "تمر السكري النادر", price: 48 },
                    { name: "لبن رايب بلدي", description: "لبن رايب طازج", price: 22 },
                ]
            },
        ],
    },
    // 18 — Greek
    {
        id: "restaurant-18",
        slug: "restaurant-18",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80&sig=289",
        gallery: [
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80&sig=391",
            "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1200&q=80&sig=396",
            "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80&sig=401",
            "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=1200&q=80&sig=406",
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80&sig=411"
        ],
        name: "ساحل سانتوريني",
        cuisine: "مأكولات يونانية",
        cuisineType: "يوناني",
        city: "نيوم",
        description: "البحر المتوسط في طبق مع نسائم يونانية.",
        longDescription: "ركن يوناني بأجواء سيكلاديك بيضاء وزرقاء، يقدّم أفضل المأكولات اليونانية الأصيلة بزيت زيتون كريتي.",
        rating: 4.6, reviewCount: 873, priceRange: "$$$",
        hours: {
            breakfast: "٨:٠٠ ص - ١١:٠٠ ص",
            lunch: "١٢:٣٠ م - ٤:٠٠ م",
            dinner: "٦:٣٠ م - ١٢:٠٠ ص",
        },
        menu: [
            {
                category: "ميزيدس يونانية", items: [
                    { name: "تزاتزيكي", description: "زبادي بالخيار والثوم", price: 38 },
                    { name: "سلطة يونانية أصلية", description: "بجبن فيتا وزيتون كالاماتا", price: 65 },
                    { name: "دولماديس", description: "ورق عنب محشي", price: 48 },
                ]
            },
            {
                category: "أطباق رئيسية", items: [
                    { name: "موساكا", description: "طبقات باذنجان ولحم", price: 125 },
                    { name: "سوفلاكي خروف", description: "أسياخ خروف بالأعشاب", price: 145 },
                    { name: "أخطبوط مشوي", description: "أخطبوط بزيت الزيتون والليمون", price: 195 },
                ]
            },
            {
                category: "حلويات يونانية", items: [
                    { name: "لوكوماديس", description: "كرات عجين مقلية بالعسل", price: 42 },
                    { name: "غالاكتوبوريكو", description: "كاسترد بعجين الفيلو", price: 48 },
                ]
            },
        ],
        drinks: [
            {
                category: "قهوة يونانية", items: [
                    { name: "قهوة يونانية تقليدية", description: "قهوة ثقيلة في فنجان صغير", price: 28 },
                    { name: "فرابيه يوناني", description: "قهوة باردة مخفوقة", price: 32 },
                ]
            },
            {
                category: "عصائر متوسطية", items: [
                    { name: "عصير الرمان", description: "رمان كريتي", price: 42 },
                ]
            },
        ],
    },
];

export const getRestaurantById = (id: string) => restaurants.find((r) => r.id === id || r.slug === id);