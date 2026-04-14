// ╔══════════════════════════════════════════════════════════════════════╗
// ║  FitSofra — Kapsamlı Türk Mutfağı Tarif Veritabanı                ║
// ║  100+ tarif · 13 kategori · Makro değerleri · Adım adım tarifler  ║
// ║  Değerler: 1 porsiyon başına                                       ║
// ╚══════════════════════════════════════════════════════════════════════╝
window.TURKISH_RECIPES_DB = [

// ═══════════════════════════════════════════
// ══  KLASİK TÜRK YEMEKLERİ               ══
// ═══════════════════════════════════════════
{
  id:"r_iskender",name:"İskender Kebap",cat:"klasik",
  emoji:"🥩",cal:520,prot:35,carb:35,fat:26,serv:"1 porsiyon",time:40,
  tags:["et","proteinli","kebap"],
  ingredients:[
    {item:"Dana döner eti",amount:"150g"},
    {item:"Pide ekmeği",amount:"1 adet"},
    {item:"Yoğurt",amount:"100g"},
    {item:"Tereyağı",amount:"1 yk"},
    {item:"Domates sosu",amount:"3 yk"},
    {item:"Sivri biber",amount:"2 adet"}
  ],
  steps:[
    "Pide ekmeğini küçük kareler halinde kesin ve tabağa dizin.",
    "Domates sosunu pidelerin üzerine gezdirin.",
    "Döner etini pidelerin üzerine yerleştirin.",
    "Yoğurdu yanına koyun.",
    "Tereyağını küçük bir tavada eritip hafif kızarana kadar ısıtın.",
    "Erimiş tereyağını etin üzerine gezdirerek servis edin."
  ]
},
{
  id:"r_hunkar",name:"Hünkar Beğendi",cat:"klasik",
  emoji:"🥩",cal:400,prot:25,carb:20,fat:25,serv:"1 porsiyon",time:60,
  tags:["et","geleneksel","proteinli"],
  ingredients:[
    {item:"Kuzu kuşbaşı",amount:"200g"},
    {item:"Patlıcan",amount:"3 adet"},
    {item:"Domates",amount:"2 adet"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Tereyağı",amount:"2 yk"},
    {item:"Un",amount:"1 yk"},
    {item:"Süt",amount:"1 su bardağı"},
    {item:"Kaşar rendesi",amount:"50g"}
  ],
  steps:[
    "Kuzu etini küçük küpler halinde doğrayın. Soğan ile birlikte kavurun.",
    "Domates rendesi ekleyip kısık ateşte yumuşayana kadar pişirin.",
    "Patlıcanları közleyin, kabuklarını soyun ve ezin.",
    "Ayrı bir tencerede tereyağında unu kavurun, sütü ekleyin.",
    "Közlenmiş patlıcanları beşamel sosa ekleyip karıştırın, kaşar rendesi ekleyin.",
    "Patlıcan püresini tabağa yayın, üzerine eti koyarak servis edin."
  ]
},
{
  id:"r_karniyarik",name:"Karnıyarık",cat:"klasik",
  emoji:"🍆",cal:180,prot:8,carb:12,fat:12,serv:"1 porsiyon",time:50,
  tags:["sebze","et","geleneksel"],
  ingredients:[
    {item:"Patlıcan",amount:"2 adet"},
    {item:"Kıyma",amount:"100g"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Domates",amount:"2 adet"},
    {item:"Biber",amount:"2 adet"},
    {item:"Sarımsak",amount:"2 diş"},
    {item:"Zeytinyağı",amount:"2 yk"},
    {item:"Maydanoz",amount:"1 demet"}
  ],
  steps:[
    "Patlıcanları alacalı soyup tuzlu suda bekletin.",
    "Kızgın yağda patlıcanları kızartın veya fırında pişirin.",
    "Kıymayı soğanla birlikte kavurun.",
    "Doğranmış domates ve biberleri ekleyip pişirin.",
    "Patlıcanları ortadan yarıp iç harcı doldurun.",
    "Fırın kabına dizin, domates dilimi koyup 180°C'de 20 dk pişirin."
  ]
},
{
  id:"r_imam_bayildi",name:"İmam Bayıldı",cat:"klasik",
  emoji:"🍆",cal:120,prot:3,carb:10,fat:8,serv:"1 porsiyon",time:50,
  tags:["sebze","zeytinyagli","vejetaryen","saglikli"],
  ingredients:[
    {item:"Patlıcan",amount:"2 adet"},
    {item:"Soğan",amount:"2 adet"},
    {item:"Domates",amount:"2 adet"},
    {item:"Sarımsak",amount:"3 diş"},
    {item:"Zeytinyağı",amount:"3 yk"},
    {item:"Maydanoz",amount:"1 demet"}
  ],
  steps:[
    "Patlıcanları alacalı soyup tuzlu suda bekletin.",
    "Soğanları ince ince doğrayıp zeytinyağında kavurun.",
    "Domates ve sarımsak ekleyip 5 dk pişirin.",
    "Patlıcanları ortadan yarın, iç harcı doldurun.",
    "Tencereye dizin, üzerine su ve zeytinyağı gezdirin.",
    "Kısık ateşte 30 dk pişirip soğuk servis edin."
  ]
},
{
  id:"r_etli_nohut",name:"Etli Nohut",cat:"klasik",
  emoji:"🍲",cal:250,prot:18,carb:25,fat:9,serv:"1 porsiyon",time:45,
  tags:["baklagil","et","proteinli","geleneksel"],
  ingredients:[
    {item:"Nohut (haşlanmış)",amount:"200g"},
    {item:"Dana kuşbaşı",amount:"100g"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Domates salçası",amount:"1 yk"},
    {item:"Biber salçası",amount:"1 çk"},
    {item:"Tereyağı",amount:"1 yk"},
    {item:"Tuz, karabiber",amount:""}
  ],
  steps:[
    "Eti küçük küpler halinde doğrayın, tereyağında kavurun.",
    "Doğranmış soğanı ekleyip pembeleşene kadar soteleyin.",
    "Salçaları ekleyip 2 dk kavurun.",
    "Haşlanmış nohutları ve sıcak suyu ekleyin.",
    "Kısık ateşte et yumuşayana kadar (30 dk) pişirin.",
    "Pilavla birlikte servis edin."
  ]
},
{
  id:"r_etli_kuru_fasulye",name:"Etli Kuru Fasulye",cat:"klasik",
  emoji:"🍲",cal:230,prot:16,carb:24,fat:8,serv:"1 porsiyon",time:50,
  tags:["baklagil","et","proteinli","geleneksel"],
  ingredients:[
    {item:"Kuru fasulye (haşlanmış)",amount:"200g"},
    {item:"Dana kuşbaşı",amount:"100g"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Domates salçası",amount:"1 yk"},
    {item:"Biber salçası",amount:"1 çk"},
    {item:"Sivri biber",amount:"2 adet"},
    {item:"Sıvı yağ",amount:"2 yk"}
  ],
  steps:[
    "Eti yağda kavurun, doğranmış soğanı ekleyin.",
    "Salçaları ilave edip 2 dk kavurun.",
    "Haşlanmış fasulyeleri ve sıcak suyu ekleyin.",
    "Biberleri bütün olarak tencerenin üstüne koyun.",
    "Kısık ateşte 35-40 dk pişirin.",
    "Pilav ve turşuyla servis edin."
  ]
},
{
  id:"r_yaprak_sarma",name:"Yaprak Sarma (Zeytinyağlı)",cat:"klasik",
  emoji:"🌿",cal:120,prot:2,carb:15,fat:6,serv:"5 adet",time:60,
  tags:["zeytinyagli","vejetaryen","meze"],
  ingredients:[
    {item:"Asma yaprağı",amount:"40 adet"},
    {item:"Pirinç",amount:"1 su bardağı"},
    {item:"Soğan",amount:"2 adet"},
    {item:"Domates salçası",amount:"1 yk"},
    {item:"Zeytinyağı",amount:"4 yk"},
    {item:"Nane, karabiber",amount:""},
    {item:"Limon suyu",amount:"1 adet"},
    {item:"Çam fıstığı",amount:"2 yk"},
    {item:"Kuşüzümü",amount:"2 yk"}
  ],
  steps:[
    "Pirinci yıkayıp 30 dk ılık suda bekletin.",
    "Soğanları ince doğrayıp zeytinyağında kavurun.",
    "Pirinci, salçayı, baharatları, çam fıstığı ve kuşüzümünü ekleyin.",
    "Asma yapraklarını açın, 1 çk harç koyup sıkıca sarın.",
    "Tencereye sıkıca dizin, üzerine limon suyu ve su ekleyin.",
    "Kısık ateşte 45 dk pişirip soğuk servis edin."
  ]
},
{
  id:"r_manti",name:"Kayseri Mantısı",cat:"klasik",
  emoji:"🥟",cal:380,prot:18,carb:42,fat:15,serv:"1 porsiyon",time:90,
  tags:["hamur","et","geleneksel"],
  ingredients:[
    {item:"Un",amount:"2 su bardağı"},
    {item:"Yumurta",amount:"1 adet"},
    {item:"Kıyma",amount:"150g"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Yoğurt",amount:"200g"},
    {item:"Sarımsak",amount:"2 diş"},
    {item:"Tereyağı",amount:"2 yk"},
    {item:"Pul biber",amount:"1 çk"}
  ],
  steps:[
    "Un, yumurta, tuz ve suyla hamur yoğurun, 30 dk dinlendirin.",
    "Kıymayı soğan, tuz, karabiberle karıştırarak iç harç yapın.",
    "Hamuru ince açıp 2cm kareler kesin.",
    "Her kareye az harç koyup kenarları birleştirerek kapatın.",
    "Kaynayan tuzlu suda 15-20 dk haşlayın.",
    "Sarımsaklı yoğurt ve pul biberli tereyağı ile servis edin."
  ]
},
{
  id:"r_mercimek_kofte",name:"Mercimek Köftesi",cat:"klasik",
  emoji:"🟠",cal:45,prot:2,carb:7,fat:1,serv:"1 adet",time:30,
  tags:["vegan","vejetaryen","saglikli","meze","pratik"],
  ingredients:[
    {item:"Kırmızı mercimek",amount:"1 su bardağı"},
    {item:"İnce bulgur",amount:"1 su bardağı"},
    {item:"Soğan",amount:"2 adet"},
    {item:"Domates salçası",amount:"2 yk"},
    {item:"Zeytinyağı",amount:"3 yk"},
    {item:"Maydanoz, yeşil soğan",amount:"1 demet"},
    {item:"Pul biber, kimyon",amount:""}
  ],
  steps:[
    "Mercimeği bol suda haşlayın (pişince suyu süzün).",
    "Sıcak mercimeğin üzerine bulguru ekleyin, kapağını kapatıp 15 dk bekletin.",
    "Soğanları yağda kavurup salçayı ekleyin.",
    "Hepsini birleştirip yoğurun, baharatları ekleyin.",
    "Yeşillikleri ince doğrayıp karıştırın.",
    "Köfte şekli verin, marul yaprakları üzerinde limonla servis edin."
  ]
},

// ═══════════════════════════════════════════
// ══  ÇORBALAR                             ══
// ═══════════════════════════════════════════
{
  id:"r_mercimek_corbasi",name:"Mercimek Çorbası",cat:"corba",
  emoji:"🍲",cal:56,prot:4,carb:9,fat:1,serv:"1 kase",time:30,
  tags:["vegan","vejetaryen","saglikli","pratik"],
  ingredients:[
    {item:"Kırmızı mercimek",amount:"1 su bardağı"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Havuç",amount:"1 adet"},
    {item:"Patates",amount:"1 adet"},
    {item:"Domates salçası",amount:"1 yk"},
    {item:"Zeytinyağı",amount:"1 yk"},
    {item:"Tuz, karabiber, kimyon",amount:""},
    {item:"Limon",amount:"1 adet"}
  ],
  steps:[
    "Soğanı doğrayıp zeytinyağında kavurun.",
    "Havuç ve patatesi küp küp doğrayıp ekleyin.",
    "Salçayı ilave edip 1 dk kavurun.",
    "Yıkanmış mercimeği ve 4 bardak suyu ekleyin.",
    "Kaynayınca kısık ateşte 20 dk pişirin.",
    "Blenderdan geçirin, tuz ve baharatlarla tatlandırıp limonla servis edin."
  ]
},
{
  id:"r_ezogelin",name:"Ezogelin Çorbası",cat:"corba",
  emoji:"🍲",cal:68,prot:3,carb:11,fat:2,serv:"1 kase",time:35,
  tags:["vejetaryen","saglikli","geleneksel"],
  ingredients:[
    {item:"Kırmızı mercimek",amount:"1 su bardağı"},
    {item:"Bulgur",amount:"2 yk"},
    {item:"Pirinç",amount:"2 yk"},
    {item:"Domates salçası",amount:"1 yk"},
    {item:"Biber salçası",amount:"1 yk"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Tereyağı",amount:"1 yk"},
    {item:"Nane, pul biber",amount:""}
  ],
  steps:[
    "Soğanı tereyağında kavurun, salçaları ekleyin.",
    "Mercimek, bulgur ve pirinci ekleyin.",
    "6 bardak sıcak su ilave edin.",
    "Kaynayınca kısık ateşte 25 dk pişirin.",
    "Üzerine naneli pul biberli tereyağı gezdirip servis edin."
  ]
},
{
  id:"r_yayla",name:"Yayla Çorbası",cat:"corba",
  emoji:"🍲",cal:65,prot:3,carb:7,fat:3,serv:"1 kase",time:25,
  tags:["vejetaryen","saglikli","geleneksel"],
  ingredients:[
    {item:"Yoğurt",amount:"1 su bardağı"},
    {item:"Pirinç",amount:"3 yk"},
    {item:"Yumurta",amount:"1 adet"},
    {item:"Un",amount:"1 yk"},
    {item:"Tereyağı",amount:"1 yk"},
    {item:"Nane (kuru)",amount:"1 çk"},
    {item:"Tuz",amount:""}
  ],
  steps:[
    "Pirinci yıkayıp 4 bardak suda haşlayın.",
    "Yoğurt, yumurta ve unu çırparak terbiye yapın.",
    "Terbiyeyi kaynayan pirince azar azar ekleyip sürekli karıştırın.",
    "Kısık ateşte 10 dk pişirin (kaynatmayın).",
    "Tereyağında naneyi kavurup çorbanın üzerine gezdirin."
  ]
},
{
  id:"r_tarhana",name:"Tarhana Çorbası",cat:"corba",
  emoji:"🍲",cal:72,prot:3,carb:12,fat:2,serv:"1 kase",time:20,
  tags:["vejetaryen","geleneksel","pratik"],
  ingredients:[
    {item:"Tarhana",amount:"3 yk"},
    {item:"Su",amount:"3 su bardağı"},
    {item:"Tereyağı",amount:"1 yk"},
    {item:"Tuz",amount:""},
    {item:"Pul biber (isteğe bağlı)",amount:""}
  ],
  steps:[
    "Tarhanayı soğuk suda eritin (topaklanmadan).",
    "Tencereye alıp orta ateşte karıştırarak kaynatın.",
    "Kıvam alınca kısık ateşte 10 dk pişirin.",
    "Tereyağını tavada eritip üzerine gezdirerek servis edin."
  ]
},
{
  id:"r_iskembe",name:"İşkembe Çorbası",cat:"corba",
  emoji:"🍲",cal:72,prot:6,carb:4,fat:4,serv:"1 kase",time:120,
  tags:["et","geleneksel","proteinli"],
  ingredients:[
    {item:"İşkembe",amount:"500g"},
    {item:"Un",amount:"2 yk"},
    {item:"Tereyağı",amount:"2 yk"},
    {item:"Yumurta sarısı",amount:"1 adet"},
    {item:"Limon suyu",amount:"2 yk"},
    {item:"Sarımsak",amount:"3 diş"},
    {item:"Sirke",amount:""}
  ],
  steps:[
    "İşkembeyi iyice temizleyip haşlayın (en az 2 saat).",
    "Haşlanan işkembeyi ince şeritler halinde kesin.",
    "Tereyağında unu kavurup haşlama suyunu azar azar ekleyin.",
    "İşkembe şeritlerini tencereye alıp 15 dk pişirin.",
    "Yumurta sarısı ve limon suyuyla terbiye yapıp ekleyin.",
    "Sarımsaklı sirkeli sosla servis edin."
  ]
},
{
  id:"r_dugun_corbasi",name:"Düğün Çorbası",cat:"corba",
  emoji:"🍲",cal:85,prot:5,carb:8,fat:4,serv:"1 kase",time:40,
  tags:["et","geleneksel"],
  ingredients:[
    {item:"Kuzu eti (kemikli)",amount:"300g"},
    {item:"Yumurta",amount:"1 adet"},
    {item:"Limon suyu",amount:"2 yk"},
    {item:"Un",amount:"1 yk"},
    {item:"Tereyağı",amount:"2 yk"},
    {item:"Pul biber",amount:"1 çk"}
  ],
  steps:[
    "Eti haşlayıp suyunu süzün, eti kemiklerinden ayırın.",
    "Et suyuna eti geri koyup kaynatın.",
    "Yumurta, limon suyu ve unu çırparak terbiye yapın.",
    "Terbiyeyi çorbaya azar azar ekleyin, karıştırın.",
    "Tereyağında pul biberi kavurup üzerine gezdirin."
  ]
},
{
  id:"r_beyran",name:"Beyran Çorbası",cat:"corba",
  emoji:"🍲",cal:110,prot:9,carb:6,fat:6,serv:"1 kase",time:180,
  tags:["et","proteinli","geleneksel","antep"],
  ingredients:[
    {item:"Kuzu eti (kemikli)",amount:"500g"},
    {item:"Pirinç",amount:"1 çay bardağı"},
    {item:"Sarımsak",amount:"4 diş"},
    {item:"Tereyağı",amount:"2 yk"},
    {item:"Pul biber, karabiber",amount:""},
    {item:"Tuz",amount:""}
  ],
  steps:[
    "Kuzu etini gece öncesinden haşlamaya başlayın (kemiklerden ayrılana kadar).",
    "Eti kemiklerinden ayırıp didikleyin.",
    "Pirinci yıkayıp et suyuna ekleyin.",
    "Tereyağında sarımsak ve pul biberi kavurun.",
    "Hepsini birleştirip 15 dk daha pişirin.",
    "Sıcak servis edin."
  ]
},

// ═══════════════════════════════════════════
// ══  FIT & SAĞLIKLI                       ══
// ═══════════════════════════════════════════
{
  id:"r_fit_tavuk_izgara",name:"Izgara Tavuk Göğsü",cat:"fit",
  emoji:"🍗",cal:180,prot:32,carb:2,fat:5,serv:"1 porsiyon (150g)",time:20,
  tags:["proteinli","saglikli","fit","pratik"],
  ingredients:[
    {item:"Tavuk göğsü",amount:"150g"},
    {item:"Zeytinyağı",amount:"1 çk"},
    {item:"Limon suyu",amount:"1 yk"},
    {item:"Sarımsak tozu",amount:"1 çk"},
    {item:"Kekik, karabiber, tuz",amount:""}
  ],
  steps:[
    "Tavuk göğsünü baharatlar ve limon suyuyla marine edin (en az 15 dk).",
    "Izgarayı ısıtın, hafif yağlayın.",
    "Her iki yüzünü 5-6 dk pişirin.",
    "Salata veya sebze ile servis edin."
  ]
},
{
  id:"r_fit_yulaf_kase",name:"Protein Yulaf Kasesi",cat:"fit",
  emoji:"🥣",cal:350,prot:28,carb:40,fat:8,serv:"1 kase",time:10,
  tags:["proteinli","saglikli","fit","kahvalti","pratik"],
  ingredients:[
    {item:"Yulaf ezmesi",amount:"50g"},
    {item:"Protein tozu",amount:"1 ölçek"},
    {item:"Süt (yarım yağlı)",amount:"200ml"},
    {item:"Muz",amount:"yarım"},
    {item:"Badem",amount:"5 adet"},
    {item:"Tarçın",amount:"1 çk"},
    {item:"Bal",amount:"1 çk"}
  ],
  steps:[
    "Yulafı sütle karıştırıp mikrodalgada 2 dk pişirin (veya ocakta).",
    "Protein tozunu ekleyip iyice karıştırın.",
    "Üzerine dilimlenmiş muz, badem ve bal ekleyin.",
    "Tarçın serpip servis edin."
  ]
},
{
  id:"r_fit_ton_salata",name:"Ton Balıklı Salata",cat:"fit",
  emoji:"🥗",cal:220,prot:30,carb:8,fat:8,serv:"1 porsiyon",time:10,
  tags:["proteinli","saglikli","fit","pratik"],
  ingredients:[
    {item:"Ton balığı (konserve)",amount:"1 kutu (160g)"},
    {item:"Marul",amount:"4-5 yaprak"},
    {item:"Domates",amount:"1 adet"},
    {item:"Salatalık",amount:"1 adet"},
    {item:"Mısır",amount:"2 yk"},
    {item:"Zeytinyağı",amount:"1 çk"},
    {item:"Limon suyu",amount:"1 yk"}
  ],
  steps:[
    "Sebzeleri yıkayıp doğrayın.",
    "Ton balığının suyunu süzüp parçalayın.",
    "Hepsini karıştırın.",
    "Zeytinyağı ve limon sosuyla servis edin."
  ]
},
{
  id:"r_fit_omlet",name:"Sebzeli Protein Omlet",cat:"fit",
  emoji:"🍳",cal:200,prot:22,carb:5,fat:10,serv:"1 porsiyon",time:10,
  tags:["proteinli","saglikli","fit","kahvalti","pratik"],
  ingredients:[
    {item:"Yumurta",amount:"2 adet"},
    {item:"Yumurta akı",amount:"2 adet"},
    {item:"Ispanak",amount:"1 avuç"},
    {item:"Domates",amount:"yarım"},
    {item:"Mantar",amount:"3 adet"},
    {item:"Zeytinyağı",amount:"1 çk"},
    {item:"Tuz, karabiber",amount:""}
  ],
  steps:[
    "Sebzeleri doğrayıp zeytinyağında soteleyin.",
    "Yumurta ve akları çırpıp üzerine dökün.",
    "Kısık ateşte pişirip ikiye katlayın.",
    "Tabağa alıp servis edin."
  ]
},
{
  id:"r_fit_bulgur_pilavı",name:"Sebzeli Bulgur Pilavı",cat:"fit",
  emoji:"🍚",cal:140,prot:5,carb:25,fat:3,serv:"1 porsiyon",time:25,
  tags:["saglikli","vejetaryen","fit"],
  ingredients:[
    {item:"Bulgur",amount:"1 su bardağı"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Domates",amount:"1 adet"},
    {item:"Biber",amount:"1 adet"},
    {item:"Zeytinyağı",amount:"1 yk"},
    {item:"Domates salçası",amount:"1 çk"},
    {item:"Tuz",amount:""}
  ],
  steps:[
    "Soğanı zeytinyağında kavurun.",
    "Doğranmış domates ve biberi ekleyin.",
    "Salçayı ekleyip karıştırın.",
    "Bulguru ekleyip 1.5 bardak sıcak su ilave edin.",
    "Kaynayınca kısık ateşte 15 dk pişirip dinlendirin."
  ]
},
{
  id:"r_fit_tavuk_salata",name:"Tavuklu Sezar Salata",cat:"fit",
  emoji:"🥗",cal:280,prot:28,carb:10,fat:14,serv:"1 porsiyon",time:20,
  tags:["proteinli","saglikli","fit"],
  ingredients:[
    {item:"Tavuk göğsü (ızgara)",amount:"120g"},
    {item:"Marul",amount:"1 bağ"},
    {item:"Parmesan",amount:"20g"},
    {item:"Kruton",amount:"30g"},
    {item:"Zeytinyağı",amount:"1 yk"},
    {item:"Limon suyu",amount:"1 yk"},
    {item:"Yoğurt (suzme)",amount:"1 yk"}
  ],
  steps:[
    "Tavuğu ızgara yapıp dilimleyin.",
    "Marulları yıkayıp parçalayın.",
    "Yoğurt, zeytinyağı, limon ile sos hazırlayın.",
    "Hepsini birleştirip parmesan ve kruton ekleyin."
  ]
},
{
  id:"r_fit_smoothie_bowl",name:"Protein Smoothie Bowl",cat:"fit",
  emoji:"🥣",cal:300,prot:25,carb:35,fat:6,serv:"1 kase",time:5,
  tags:["proteinli","saglikli","fit","kahvalti","pratik"],
  ingredients:[
    {item:"Dondurulmuş muz",amount:"1 adet"},
    {item:"Protein tozu",amount:"1 ölçek"},
    {item:"Süt",amount:"100ml"},
    {item:"Yulaf",amount:"2 yk"},
    {item:"Çilek",amount:"5 adet"},
    {item:"Chia tohumu",amount:"1 çk"}
  ],
  steps:[
    "Muz, protein tozu ve sütü blenderda karıştırın.",
    "Kaseye dökün.",
    "Üzerine çilek, yulaf ve chia tohumu serpiştirin."
  ]
},

// ═══════════════════════════════════════════
// ══  PRATİK YEMEKLER                     ══
// ═══════════════════════════════════════════
{
  id:"r_menemen",name:"Menemen",cat:"pratik",
  emoji:"🍳",cal:140,prot:8,carb:6,fat:10,serv:"1 porsiyon",time:15,
  tags:["vejetaryen","kahvalti","pratik"],
  ingredients:[
    {item:"Yumurta",amount:"2 adet"},
    {item:"Domates",amount:"2 adet"},
    {item:"Biber (sivri)",amount:"2 adet"},
    {item:"Zeytinyağı",amount:"1 yk"},
    {item:"Tuz, karabiber",amount:""},
    {item:"Pul biber (isteğe bağlı)",amount:""}
  ],
  steps:[
    "Biberleri doğrayıp zeytinyağında kavurun.",
    "Doğranmış domatesleri ekleyip suyunu salana kadar pişirin.",
    "Yumurtaları kırıp hafifçe karıştırın.",
    "Pişince hemen ocaktan alıp ekmekle servis edin."
  ]
},
{
  id:"r_sigara_boregi",name:"Sigara Böreği",cat:"pratik",
  emoji:"🥧",cal:90,prot:3,carb:8,fat:5,serv:"1 adet",time:25,
  tags:["hamur","atistirmalik","pratik"],
  ingredients:[
    {item:"Yufka",amount:"2 adet"},
    {item:"Beyaz peynir",amount:"200g"},
    {item:"Maydanoz",amount:"1 demet"},
    {item:"Yumurta",amount:"1 adet"},
    {item:"Kızartma yağı",amount:""}
  ],
  steps:[
    "Peyniri ezin, maydanoz ve yumurtayla karıştırın.",
    "Yufkaları üçgen dilimler halinde kesin.",
    "Her dilimin geniş kenarına harç koyup puro gibi sarın.",
    "Kenarları suyla yapıştırın.",
    "Kızgın yağda altın rengi olana kadar kızartın.",
    "Kağıt havluyla fazla yağını alıp servis edin."
  ]
},
{
  id:"r_coban_salata",name:"Çoban Salatası",cat:"pratik",
  emoji:"🥗",cal:60,prot:2,carb:8,fat:3,serv:"1 porsiyon",time:10,
  tags:["vegan","vejetaryen","saglikli","pratik"],
  ingredients:[
    {item:"Domates",amount:"2 adet"},
    {item:"Salatalık",amount:"1 adet"},
    {item:"Biber (sivri)",amount:"2 adet"},
    {item:"Soğan",amount:"yarım"},
    {item:"Maydanoz",amount:"yarım demet"},
    {item:"Zeytinyağı",amount:"1 yk"},
    {item:"Limon suyu",amount:"1 yk"},
    {item:"Tuz",amount:""}
  ],
  steps:[
    "Tüm sebzeleri küçük küpler halinde doğrayın.",
    "Maydanozu ince ince kıyın.",
    "Hepsini karıştırın.",
    "Zeytinyağı, limon suyu ve tuzla tatlandırıp servis edin."
  ]
},
{
  id:"r_patates_kizartma",name:"Fırında Patates",cat:"pratik",
  emoji:"🥔",cal:160,prot:3,carb:22,fat:7,serv:"1 porsiyon",time:35,
  tags:["vejetaryen","pratik"],
  ingredients:[
    {item:"Patates",amount:"2 orta"},
    {item:"Zeytinyağı",amount:"1 yk"},
    {item:"Kekik, pul biber",amount:""},
    {item:"Tuz",amount:""}
  ],
  steps:[
    "Patatesleri yıkayıp dilimleyin.",
    "Zeytinyağı ve baharatlarla harmanlayın.",
    "Fırın tepsisine yayın.",
    "200°C önceden ısıtılmış fırında 25-30 dk pişirin."
  ]
},
{
  id:"r_makarna_soslu",name:"Domates Soslu Makarna",cat:"pratik",
  emoji:"🍝",cal:180,prot:6,carb:30,fat:4,serv:"1 porsiyon",time:20,
  tags:["vejetaryen","pratik"],
  ingredients:[
    {item:"Makarna",amount:"80g"},
    {item:"Domates",amount:"3 adet"},
    {item:"Sarımsak",amount:"2 diş"},
    {item:"Zeytinyağı",amount:"1 yk"},
    {item:"Fesleğen",amount:"3-4 yaprak"},
    {item:"Tuz, karabiber",amount:""}
  ],
  steps:[
    "Makarnayı tuzlu suda al dente haşlayın.",
    "Sarımsağı zeytinyağında kavurun.",
    "Rendelenmiş domatesleri ekleyip 10 dk pişirin.",
    "Haşlanan makarnayı sosa ekleyip karıştırın.",
    "Fesleğen yapraklarıyla servis edin."
  ]
},
{
  id:"r_yumurta_haslama",name:"Sahanda Yumurta",cat:"pratik",
  emoji:"🍳",cal:196,prot:14,carb:1,fat:15,serv:"2 yumurta",time:5,
  tags:["kahvalti","proteinli","pratik"],
  ingredients:[
    {item:"Yumurta",amount:"2 adet"},
    {item:"Tereyağı",amount:"1 çk"},
    {item:"Tuz, karabiber",amount:""},
    {item:"Pul biber (isteğe bağlı)",amount:""}
  ],
  steps:[
    "Tavada tereyağını eritin.",
    "Yumurtaları kırın.",
    "Kısık ateşte beyazlar pişene kadar bekleyin.",
    "Tuz ve karabiber serpip servis edin."
  ]
},

// ═══════════════════════════════════════════
// ══  SEBZE TARİFLERİ                     ══
// ═══════════════════════════════════════════
{
  id:"r_biber_dolma",name:"Biber Dolma (Etli)",cat:"sebze",
  emoji:"🫑",cal:185,prot:10,carb:17,fat:9,serv:"2 adet",time:60,
  tags:["sebze","et","geleneksel"],
  ingredients:[
    {item:"Dolmalık biber",amount:"6 adet"},
    {item:"Kıyma",amount:"200g"},
    {item:"Pirinç",amount:"yarım bardak"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Domates",amount:"2 adet"},
    {item:"Maydanoz",amount:"yarım demet"},
    {item:"Domates salçası",amount:"1 yk"},
    {item:"Tuz, karabiber, pul biber",amount:""}
  ],
  steps:[
    "Pirinci yıkayıp 20 dk ılık suda bekletin.",
    "Kıymayı soğan, domates rendesi, maydanoz ve baharatlarla karıştırın.",
    "Pirinci süzüp harca ekleyin.",
    "Biberlerin içini temizleyin, harcı doldurun (üstte boşluk bırakın).",
    "Tencereye dizin, salçalı su ekleyin.",
    "Kısık ateşte 40-45 dk pişirin."
  ]
},
{
  id:"r_patlican_musakka",name:"Patlıcan Musakka",cat:"sebze",
  emoji:"🍆",cal:200,prot:10,carb:14,fat:12,serv:"1 porsiyon",time:50,
  tags:["sebze","et","geleneksel"],
  ingredients:[
    {item:"Patlıcan",amount:"3 adet"},
    {item:"Kıyma",amount:"150g"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Domates",amount:"2 adet"},
    {item:"Biber",amount:"2 adet"},
    {item:"Zeytinyağı",amount:"2 yk"},
    {item:"Domates salçası",amount:"1 yk"}
  ],
  steps:[
    "Patlıcanları küp doğrayıp tuzlu suda bekletin.",
    "Kıymayı soğanla kavurun.",
    "Patlıcanları süzüp yağda hafif kızartın.",
    "Hepsini karıştırıp tencereye alın.",
    "Domates ve salçayı ekleyin, 25 dk pişirin."
  ]
},
{
  id:"r_zeytinyagli_fasulye",name:"Zeytinyağlı Taze Fasulye",cat:"sebze",
  emoji:"🫛",cal:90,prot:3,carb:10,fat:4,serv:"1 porsiyon",time:35,
  tags:["sebze","zeytinyagli","vejetaryen","saglikli","vegan"],
  ingredients:[
    {item:"Taze fasulye",amount:"500g"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Domates",amount:"2 adet"},
    {item:"Zeytinyağı",amount:"3 yk"},
    {item:"Tuz, şeker",amount:""}
  ],
  steps:[
    "Fasulyelerin ipliğini çekip 3-4cm uzunluğunda kırın.",
    "Soğanları zeytinyağında kavurun.",
    "Domates rendesini ekleyin.",
    "Fasulyeleri ekleyip yarısını geçecek kadar su koyun.",
    "Kısık ateşte 30 dk pişirip soğuk servis edin."
  ]
},
{
  id:"r_ispanak_yemegi",name:"Ispanaklı Yumurta",cat:"sebze",
  emoji:"🥬",cal:140,prot:10,carb:4,fat:9,serv:"1 porsiyon",time:20,
  tags:["sebze","saglikli","proteinli"],
  ingredients:[
    {item:"Ispanak",amount:"300g"},
    {item:"Yumurta",amount:"2 adet"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Tereyağı",amount:"1 yk"},
    {item:"Tuz, karabiber",amount:""}
  ],
  steps:[
    "Ispanakları yıkayıp doğrayın.",
    "Soğanı tereyağında kavurun.",
    "Ispanakları ekleyip suyunu salana kadar pişirin.",
    "Yumurtaları kırıp karıştırın, 3-4 dk daha pişirin."
  ]
},
{
  id:"r_mantar_sote",name:"Mantar Sote",cat:"sebze",
  emoji:"🍄",cal:80,prot:4,carb:5,fat:5,serv:"1 porsiyon",time:15,
  tags:["sebze","vejetaryen","saglikli","pratik"],
  ingredients:[
    {item:"Mantar",amount:"300g"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Biber",amount:"1 adet"},
    {item:"Tereyağı",amount:"1 yk"},
    {item:"Sarımsak",amount:"2 diş"},
    {item:"Tuz, karabiber, kekik",amount:""}
  ],
  steps:[
    "Mantarları dilimleyin.",
    "Soğan ve sarımsağı tereyağında kavurun.",
    "Mantarları ekleyip suyunu salana kadar pişirin.",
    "Biberleri ekleyip baharatlayın, 5 dk daha pişirin."
  ]
},

// ═══════════════════════════════════════════
// ══  TATLILAR                             ══
// ═══════════════════════════════════════════
{
  id:"r_sutlac",name:"Fırın Sütlaç",cat:"tatli",
  emoji:"🍮",cal:180,prot:5,carb:28,fat:5,serv:"1 kase",time:50,
  tags:["tatli","geleneksel","vejetaryen"],
  ingredients:[
    {item:"Pirinç",amount:"yarım bardak"},
    {item:"Süt",amount:"1 litre"},
    {item:"Şeker",amount:"yarım bardak"},
    {item:"Nişasta",amount:"2 yk"},
    {item:"Vanilya",amount:"1 çk"},
    {item:"Yumurta sarısı",amount:"1 adet"}
  ],
  steps:[
    "Pirinci yıkayıp haşlayın (pirinç yumuşayana kadar).",
    "Sütü ekleyip kaynatın.",
    "Şeker ve nişastayı ekleyip kıvam alana kadar karıştırın.",
    "Yumurta sarısını azar azar ekleyin.",
    "Güveç kaplara bölün.",
    "200°C fırında üzeri kızarana kadar pişirin."
  ]
},
{
  id:"r_kabak_tatlisi",name:"Kabak Tatlısı",cat:"tatli",
  emoji:"🎃",cal:160,prot:1,carb:35,fat:2,serv:"1 porsiyon",time:50,
  tags:["tatli","geleneksel","vejetaryen"],
  ingredients:[
    {item:"Bal kabağı",amount:"500g"},
    {item:"Şeker",amount:"1 su bardağı"},
    {item:"Ceviz",amount:"50g"},
    {item:"Tahin",amount:"2 yk"},
    {item:"Kaymak",amount:"isteğe bağlı"}
  ],
  steps:[
    "Kabağı büyük dilimler halinde kesin.",
    "Tepsiye dizin, üzerine şekeri serpin.",
    "6-8 saat (veya gece boyu) bekletin.",
    "200°C fırında 40-50 dk pişirin.",
    "Soğuyunca ceviz ve tahinle servis edin."
  ]
},
{
  id:"r_asure",name:"Aşure",cat:"tatli",
  emoji:"🍲",cal:200,prot:4,carb:40,fat:3,serv:"1 kase",time:60,
  tags:["tatli","geleneksel","vegan"],
  ingredients:[
    {item:"Buğday",amount:"yarım bardak"},
    {item:"Nohut (haşlanmış)",amount:"yarım bardak"},
    {item:"Kuru fasulye (haşlanmış)",amount:"yarım bardak"},
    {item:"Pirinç",amount:"3 yk"},
    {item:"Kuru kayısı",amount:"5 adet"},
    {item:"Kuru incir",amount:"3 adet"},
    {item:"Kuru üzüm",amount:"3 yk"},
    {item:"Şeker",amount:"1 bardak"},
    {item:"Ceviz, nar",amount:"süsleme için"}
  ],
  steps:[
    "Buğdayı önceden 12 saat bekletip haşlayın.",
    "Pirinci yıkayıp ekleyin.",
    "Haşlanmış baklagilleri ekleyin.",
    "Kuru meyveleri küçük doğrayıp ilave edin.",
    "Şekeri ekleyip 20 dk daha pişirin.",
    "Kaselere bölüp soğutun, nar ve cevizle süsleyin."
  ]
},
{
  id:"r_sekerpare",name:"Şekerpare",cat:"tatli",
  emoji:"🍯",cal:180,prot:3,carb:28,fat:7,serv:"1 adet",time:40,
  tags:["tatli","geleneksel"],
  ingredients:[
    {item:"Un",amount:"2 su bardağı"},
    {item:"Tereyağı (oda sıcaklığı)",amount:"100g"},
    {item:"İrmik",amount:"yarım bardak"},
    {item:"Yumurta",amount:"1 adet"},
    {item:"Kabartma tozu",amount:"1 çk"},
    {item:"Şeker (şerbet için)",amount:"2 bardak"},
    {item:"Su (şerbet için)",amount:"2 bardak"},
    {item:"Limon suyu",amount:"yarım limon"}
  ],
  steps:[
    "Şerbeti hazırlayın: şeker ve suyu kaynatın, limon sıkıp soğumaya bırakın.",
    "Tereyağı, yumurta, irmik, un ve kabartma tozunu yoğurun.",
    "Ceviz büyüklüğünde toplar yapıp tepsiye dizin.",
    "Ortalarına bademle bastırın.",
    "170°C fırında 20-25 dk hafif kızarana kadar pişirin.",
    "Soğuk şerbeti sıcak tatlıya dökün, 1 saat bekletin."
  ]
},
{
  id:"r_revani",name:"Revani",cat:"tatli",
  emoji:"🍰",cal:200,prot:3,carb:32,fat:7,serv:"1 dilim",time:40,
  tags:["tatli","geleneksel"],
  ingredients:[
    {item:"İrmik",amount:"1 su bardağı"},
    {item:"Un",amount:"1 su bardağı"},
    {item:"Şeker",amount:"1 su bardağı"},
    {item:"Yumurta",amount:"3 adet"},
    {item:"Yoğurt",amount:"1 su bardağı"},
    {item:"Kabartma tozu",amount:"1 paket"},
    {item:"Şeker (şerbet)",amount:"2 bardak"},
    {item:"Su (şerbet)",amount:"2 bardak"},
    {item:"Limon suyu",amount:"yarım limon"}
  ],
  steps:[
    "Şerbeti kaynatıp soğumaya bırakın.",
    "Yumurta ve şekeri çırpın.",
    "Yoğurt, irmik, un ve kabartma tozunu ekleyin.",
    "Yağlanmış tepsiye dökün, üzerini düzeltin.",
    "180°C fırında 25-30 dk pişirin.",
    "Soğuk şerbeti sıcak tatlıya dökün, 2 saat bekletin."
  ]
},

// ═══════════════════════════════════════════
// ══  VEGAN & VEJETARYEN                   ══
// ═══════════════════════════════════════════
{
  id:"r_kisir",name:"Kısır",cat:"vegan",
  emoji:"🌾",cal:160,prot:4,carb:22,fat:6,serv:"1 porsiyon",time:20,
  tags:["vegan","vejetaryen","saglikli","meze"],
  ingredients:[
    {item:"İnce bulgur",amount:"1 su bardağı"},
    {item:"Domates salçası",amount:"2 yk"},
    {item:"Biber salçası",amount:"1 yk"},
    {item:"Nar ekşisi",amount:"2 yk"},
    {item:"Zeytinyağı",amount:"3 yk"},
    {item:"Limon suyu",amount:"1 adet"},
    {item:"Maydanoz, yeşil soğan",amount:"1 demet"},
    {item:"Domates, salatalık",amount:"birer adet"}
  ],
  steps:[
    "Bulgura kaynar su dökün (iki parmak üstünü geçecek kadar), kapağını kapatıp 15 dk bekletin.",
    "Salçaları, nar ekşisi, zeytinyağı ve limon suyunu ekleyip karıştırın.",
    "Doğranmış sebze ve yeşillikleri ekleyin.",
    "İyice harmanlayıp soğuk servis edin."
  ]
},
{
  id:"r_humus",name:"Humus",cat:"vegan",
  emoji:"🫘",cal:166,prot:8,carb:14,fat:10,serv:"100g",time:15,
  tags:["vegan","vejetaryen","saglikli","meze","proteinli"],
  ingredients:[
    {item:"Nohut (haşlanmış)",amount:"400g"},
    {item:"Tahin",amount:"3 yk"},
    {item:"Limon suyu",amount:"2 yk"},
    {item:"Sarımsak",amount:"2 diş"},
    {item:"Zeytinyağı",amount:"2 yk"},
    {item:"Kimyon",amount:"1 çk"},
    {item:"Tuz",amount:""}
  ],
  steps:[
    "Haşlanmış nohutları blenderda püre yapın.",
    "Tahin, limon suyu, sarımsak ve baharatları ekleyin.",
    "Pürüzsüz olana kadar çekin (gerekirse nohut suyu ekleyin).",
    "Tabağa yayıp zeytinyağı gezdirerek servis edin."
  ]
},
{
  id:"r_falafel",name:"Falafel",cat:"vegan",
  emoji:"🫘",cal:57,prot:3,carb:5,fat:3,serv:"1 adet",time:30,
  tags:["vegan","vejetaryen","saglikli","proteinli"],
  ingredients:[
    {item:"Nohut (ıslatılmış, çiğ)",amount:"200g"},
    {item:"Soğan",amount:"yarım"},
    {item:"Sarımsak",amount:"2 diş"},
    {item:"Maydanoz",amount:"1 demet"},
    {item:"Kimyon",amount:"1 çk"},
    {item:"Pul biber",amount:"1 çk"},
    {item:"Kabartma tozu",amount:"yarım çk"},
    {item:"Tuz",amount:""}
  ],
  steps:[
    "Nohutları önceden 12 saat ıslatın (haşlamayın!).",
    "Tüm malzemeleri mutfak robotundan geçirin.",
    "Köfte şekli verin.",
    "Kızgın yağda altın rengi olana kadar kızartın (veya fırında 200°C'de 20 dk)."
  ]
},
{
  id:"r_saksuka",name:"Şakşuka",cat:"vegan",
  emoji:"🍅",cal:100,prot:3,carb:8,fat:6,serv:"1 porsiyon",time:25,
  tags:["vegan","vejetaryen","saglikli","meze"],
  ingredients:[
    {item:"Patlıcan",amount:"2 adet"},
    {item:"Kabak",amount:"1 adet"},
    {item:"Biber",amount:"2 adet"},
    {item:"Domates",amount:"3 adet"},
    {item:"Sarımsak",amount:"2 diş"},
    {item:"Zeytinyağı",amount:"2 yk"},
    {item:"Tuz, karabiber",amount:""}
  ],
  steps:[
    "Patlıcan ve kabağı küp küp doğrayın, tuzlu suda bekletin.",
    "Zeytinyağında sarımsağı kavurun.",
    "Süzülmüş patlıcan ve kabağı ekleyip kavurun.",
    "Doğranmış biber ve domatesi ekleyin.",
    "Kısık ateşte 15 dk pişirip soğuk servis edin."
  ]
},

// ═══════════════════════════════════════════
// ══  TOST & DÜRÜM                        ══
// ═══════════════════════════════════════════
{
  id:"r_kasarli_tost",name:"Kaşarlı Tost",cat:"sandvic",
  emoji:"🥪",cal:280,prot:12,carb:28,fat:14,serv:"1 adet",time:10,
  tags:["pratik","kahvalti"],
  ingredients:[
    {item:"Tost ekmeği",amount:"2 dilim"},
    {item:"Kaşar peynir",amount:"50g"},
    {item:"Tereyağı",amount:"1 çk"}
  ],
  steps:[
    "Ekmek dilimlerinin arasına kaşarı koyun.",
    "Tost makinesinde veya tavada her iki yüzü kızarana kadar pişirin."
  ]
},
{
  id:"r_karışık_tost",name:"Karışık Tost",cat:"sandvic",
  emoji:"🥪",cal:340,prot:16,carb:28,fat:18,serv:"1 adet",time:10,
  tags:["pratik","et"],
  ingredients:[
    {item:"Tost ekmeği",amount:"2 dilim"},
    {item:"Kaşar peynir",amount:"40g"},
    {item:"Sucuk/salam",amount:"3 dilim"},
    {item:"Domates",amount:"2 dilim"},
    {item:"Tereyağı",amount:"1 çk"}
  ],
  steps:[
    "Malzemeleri ekmeklerin arasına dizin.",
    "Tost makinesinde kızarana kadar pişirin.",
    "Çapraz kesip servis edin."
  ]
},
{
  id:"r_tavuk_durum",name:"Tavuk Dürüm",cat:"sandvic",
  emoji:"🌯",cal:380,prot:22,carb:35,fat:16,serv:"1 adet",time:20,
  tags:["pratik","et","proteinli"],
  ingredients:[
    {item:"Tavuk göğsü",amount:"120g"},
    {item:"Lavaş",amount:"1 adet"},
    {item:"Marul, domates",amount:""},
    {item:"Soğan",amount:"yarım"},
    {item:"Mayonez veya yoğurt sos",amount:"1 yk"},
    {item:"Tuz, baharat",amount:""}
  ],
  steps:[
    "Tavuğu baharatlayıp ızgarada veya tavada pişirin.",
    "Şeritler halinde dilimleyin.",
    "Lavaşa sebzeleri ve tavuğu dizin.",
    "Sos ekleyip sıkıca sarın."
  ]
},
{
  id:"r_cigkofte_durum",name:"Çiğ Köfte Dürüm",cat:"sandvic",
  emoji:"🌯",cal:250,prot:8,carb:38,fat:7,serv:"1 adet",time:5,
  tags:["vegan","pratik"],
  ingredients:[
    {item:"Çiğ köfte",amount:"100g"},
    {item:"Lavaş",amount:"1 adet"},
    {item:"Marul",amount:"2-3 yaprak"},
    {item:"Domates",amount:"2 dilim"},
    {item:"Nar ekşisi",amount:"1 yk"},
    {item:"Limon",amount:"yarım"}
  ],
  steps:[
    "Lavaşın üzerine marul yapraklarını serin.",
    "Çiğ köfteyi yayın.",
    "Domates, nar ekşisi ve limon sıkın.",
    "Sıkıca sarıp servis edin."
  ]
},

// ═══════════════════════════════════════════
// ══  SALATALAR                            ══
// ═══════════════════════════════════════════
{
  id:"r_gavurdagi",name:"Gavurdağı Salatası",cat:"salata",
  emoji:"🥗",cal:90,prot:2,carb:8,fat:6,serv:"1 porsiyon",time:10,
  tags:["vegan","saglikli","meze","antep"],
  ingredients:[
    {item:"Domates",amount:"2 adet"},
    {item:"Salatalık",amount:"1 adet"},
    {item:"Ceviz",amount:"30g"},
    {item:"Nar ekşisi",amount:"2 yk"},
    {item:"Zeytinyağı",amount:"1 yk"},
    {item:"Biber",amount:"1 adet"},
    {item:"Maydanoz",amount:"yarım demet"},
    {item:"Sumak",amount:"1 çk"}
  ],
  steps:[
    "Domates ve salatalığı küp doğrayın.",
    "Cevizi kırıp ekleyin.",
    "Nar ekşisi, zeytinyağı ve sumakla sosunu hazırlayın.",
    "Hepsini karıştırıp maydanozla servis edin."
  ]
},
{
  id:"r_piyaz",name:"Piyaz",cat:"salata",
  emoji:"🫘",cal:130,prot:6,carb:16,fat:5,serv:"1 porsiyon",time:15,
  tags:["vejetaryen","saglikli","meze","antalya"],
  ingredients:[
    {item:"Kuru fasulye (haşlanmış)",amount:"200g"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Domates",amount:"1 adet"},
    {item:"Yumurta (haşlanmış)",amount:"1 adet"},
    {item:"Maydanoz",amount:"yarım demet"},
    {item:"Tahin",amount:"1 yk"},
    {item:"Limon suyu",amount:"2 yk"},
    {item:"Zeytinyağı",amount:"1 yk"}
  ],
  steps:[
    "Haşlanmış fasulyeleri bir kaba alın.",
    "Soğanı ince halka, domatesi küp doğrayın.",
    "Yumurtayı dilimleyin.",
    "Tahin, limon suyu ve zeytinyağıyla sos yapın.",
    "Hepsini harmanlayıp servis edin."
  ]
},
{
  id:"r_roka_salata",name:"Roka Salatası",cat:"salata",
  emoji:"🥗",cal:70,prot:3,carb:5,fat:4,serv:"1 porsiyon",time:5,
  tags:["vejetaryen","saglikli","pratik"],
  ingredients:[
    {item:"Roka",amount:"1 demet"},
    {item:"Parmesan",amount:"20g"},
    {item:"Ceviz",amount:"15g"},
    {item:"Zeytinyağı",amount:"1 yk"},
    {item:"Limon suyu",amount:"1 yk"},
    {item:"Nar ekşisi",amount:"1 çk"}
  ],
  steps:[
    "Rokayı yıkayıp tabağa serin.",
    "Parmesan rendesi ve ceviz serpip sosuyla servis edin."
  ]
},

// ═══════════════════════════════════════════
// ══  HAMUR İŞİ                           ══
// ═══════════════════════════════════════════
{
  id:"r_su_boregi",name:"Su Böreği",cat:"hamur",
  emoji:"🥧",cal:240,prot:8,carb:22,fat:13,serv:"1 dilim",time:60,
  tags:["hamur","geleneksel","vejetaryen"],
  ingredients:[
    {item:"Yufka",amount:"6 adet"},
    {item:"Beyaz peynir",amount:"300g"},
    {item:"Yumurta",amount:"3 adet"},
    {item:"Süt",amount:"1 bardak"},
    {item:"Sıvı yağ",amount:"yarım bardak"},
    {item:"Maydanoz",amount:"1 demet"},
    {item:"Tuz",amount:""}
  ],
  steps:[
    "Peyniri ezin, 1 yumurta ve maydanozla karıştırın.",
    "Kaynayan tuzlu suya yufkaları birer birer daldırıp hemen çıkarın.",
    "Yağlanmış tepsiye 2 yufka serin, peynir harcı yayın.",
    "Bu işlemi 3 kat yapın, en üste 2 yufka koyun.",
    "Yumurta, süt ve yağ karışımını üzerine gezdirin.",
    "180°C fırında 30-35 dk üzeri kızarana kadar pişirin."
  ]
},
{
  id:"r_gozleme",name:"Gözleme (Peynirli)",cat:"hamur",
  emoji:"🫓",cal:250,prot:10,carb:30,fat:10,serv:"1 adet",time:30,
  tags:["hamur","geleneksel","vejetaryen"],
  ingredients:[
    {item:"Un",amount:"2 su bardağı"},
    {item:"Su",amount:"yarım bardak"},
    {item:"Tuz",amount:"1 çk"},
    {item:"Beyaz peynir",amount:"150g"},
    {item:"Maydanoz",amount:"1 demet"},
    {item:"Tereyağı",amount:"eritme için"}
  ],
  steps:[
    "Un, su ve tuzla yumuşak hamur yoğurun, 20 dk dinlendirin.",
    "Peynir ve maydanozu karıştırın.",
    "Hamurdan bezeler alıp ince açın.",
    "Ortasına harç koyup kapatın.",
    "Sacda veya tavada her iki yüzü kızarana kadar pişirin.",
    "Tereyağı sürerek servis edin."
  ]
},
{
  id:"r_kiymali_pide",name:"Kıymalı Pide",cat:"hamur",
  emoji:"🫓",cal:280,prot:13,carb:30,fat:12,serv:"1 dilim",time:40,
  tags:["hamur","et","geleneksel"],
  ingredients:[
    {item:"Un",amount:"3 su bardağı"},
    {item:"Maya",amount:"1 paket"},
    {item:"Süt",amount:"yarım bardak"},
    {item:"Şeker",amount:"1 çk"},
    {item:"Kıyma",amount:"300g"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Domates",amount:"1 adet"},
    {item:"Biber",amount:"2 adet"},
    {item:"Tuz, karabiber",amount:""}
  ],
  steps:[
    "Ilık sütte mayayı ve şekeri eritin.",
    "Un ve tuzla yumuşak hamur yoğurup 40 dk mayalandırın.",
    "Kıyma, doğranmış soğan, domates ve biberi karıştırın.",
    "Hamuru oval açıp iç harcı yayın, kenarları kıvırın.",
    "230°C fırında 15-18 dk pişirin.",
    "Tereyağı sürerek sıcak servis edin."
  ]
},
{
  id:"r_lahmacun",name:"Lahmacun",cat:"hamur",
  emoji:"🫓",cal:210,prot:9,carb:28,fat:7,serv:"1 adet",time:35,
  tags:["hamur","et","geleneksel","pratik"],
  ingredients:[
    {item:"Un",amount:"2 su bardağı"},
    {item:"Maya",amount:"yarım paket"},
    {item:"Kıyma",amount:"200g"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Domates",amount:"1 adet"},
    {item:"Biber",amount:"2 adet"},
    {item:"Salça",amount:"1 yk"},
    {item:"Maydanoz",amount:"1 demet"},
    {item:"Limon",amount:"servis için"}
  ],
  steps:[
    "Hamuru yoğurup 30 dk mayalandırın.",
    "Kıyma, doğranmış sebze ve salçayı karıştırıp iç harç yapın.",
    "Hamurdan bezeler alıp çok ince açın.",
    "Üzerine ince bir tabaka harç yayın.",
    "250°C fırında 8-10 dk pişirin.",
    "Maydanoz ve limonla sararak servis edin."
  ]
},

// ═══════════════════════════════════════════
// ══  MEZELER                              ══
// ═══════════════════════════════════════════
{
  id:"r_haydari",name:"Haydari",cat:"meze",
  emoji:"🥒",cal:95,prot:5,carb:4,fat:7,serv:"100g",time:10,
  tags:["vejetaryen","meze","saglikli"],
  ingredients:[
    {item:"Süzme yoğurt",amount:"500g"},
    {item:"Beyaz peynir",amount:"100g"},
    {item:"Sarımsak",amount:"2 diş"},
    {item:"Dereotu",amount:"yarım demet"},
    {item:"Nane (kuru)",amount:"1 çk"},
    {item:"Zeytinyağı",amount:"1 yk"}
  ],
  steps:[
    "Yoğurdu süzün (veya süzme yoğurt kullanın).",
    "Peyniri ezin, sarımsağı rendeleyin.",
    "Dereotunu ince kıyın.",
    "Hepsini karıştırın, zeytinyağı gezdirip servis edin."
  ]
},
{
  id:"r_babaganus",name:"Babaganuş",cat:"meze",
  emoji:"🍆",cal:88,prot:2,carb:6,fat:6,serv:"100g",time:25,
  tags:["vegan","meze","saglikli"],
  ingredients:[
    {item:"Patlıcan",amount:"3 adet"},
    {item:"Tahin",amount:"2 yk"},
    {item:"Limon suyu",amount:"2 yk"},
    {item:"Sarımsak",amount:"2 diş"},
    {item:"Zeytinyağı",amount:"1 yk"},
    {item:"Tuz, kimyon",amount:""}
  ],
  steps:[
    "Patlıcanları közleyin (ocakta veya fırında).",
    "Kabuklarını soyup ezin.",
    "Tahin, limon, sarımsak ve baharatları ekleyin.",
    "İyice karıştırıp zeytinyağı gezdirerek servis edin."
  ]
},
{
  id:"r_acili_ezme",name:"Acılı Ezme",cat:"meze",
  emoji:"🌶️",cal:60,prot:2,carb:8,fat:2,serv:"100g",time:10,
  tags:["vegan","meze","pratik","antep"],
  ingredients:[
    {item:"Domates",amount:"3 adet"},
    {item:"Biber (sivri)",amount:"3 adet"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Maydanoz",amount:"1 demet"},
    {item:"Biber salçası",amount:"1 yk"},
    {item:"Nar ekşisi",amount:"1 yk"},
    {item:"Zeytinyağı",amount:"1 yk"},
    {item:"Pul biber",amount:"1 çk"},
    {item:"İsot",amount:"1 çk"}
  ],
  steps:[
    "Tüm sebzeleri çok ince kıyın (zırh ile).",
    "Salça, nar ekşisi, zeytinyağı ve baharatları ekleyin.",
    "İyice karıştırıp 10 dk dinlendirin.",
    "Ekmek veya lavaşla servis edin."
  ]
},
{
  id:"r_atom",name:"Atom (Antep Ezmesi)",cat:"meze",
  emoji:"🌶️",cal:70,prot:2,carb:5,fat:5,serv:"100g",time:10,
  tags:["vejetaryen","meze","antep"],
  ingredients:[
    {item:"Ceviz",amount:"100g"},
    {item:"Biber salçası",amount:"2 yk"},
    {item:"Domates salçası",amount:"1 yk"},
    {item:"Sarımsak",amount:"3 diş"},
    {item:"Zeytinyağı",amount:"2 yk"},
    {item:"Pul biber",amount:"1 yk"},
    {item:"Tuz, kimyon",amount:""}
  ],
  steps:[
    "Cevizi havanda veya robottan geçirin.",
    "Salçalar, sarımsak ve baharatları ekleyin.",
    "Zeytinyağıyla harmanlayıp macun kıvamında karıştırın.",
    "Ekmekle servis edin."
  ]
},
{
  id:"r_topik",name:"Topik",cat:"meze",
  emoji:"🫘",cal:120,prot:4,carb:14,fat:5,serv:"1 porsiyon",time:40,
  tags:["vegan","meze","geleneksel"],
  ingredients:[
    {item:"Nohut (haşlanmış)",amount:"200g"},
    {item:"Patates (haşlanmış)",amount:"2 adet"},
    {item:"Soğan",amount:"2 adet"},
    {item:"Tahin",amount:"2 yk"},
    {item:"Kuşüzümü",amount:"2 yk"},
    {item:"Çam fıstığı",amount:"2 yk"},
    {item:"Tarçın, kimyon",amount:""},
    {item:"Tuz",amount:""}
  ],
  steps:[
    "Nohut ve patatesi ezin, karıştırarak hamur kıvamında yoğurun.",
    "Soğanları kavurup kuşüzümü ve çam fıstığı ekleyin.",
    "Nohut hamurunu avucunuzda yassılaştırın, iç harcı koyup kapatın.",
    "Rulo şekli verip dilimleyerek servis edin."
  ]
},

// ═══════════════════════════════════════════
// ══  EK KLASİK TARİFLER                  ══
// ═══════════════════════════════════════════
{
  id:"r_ali_nazik",name:"Ali Nazik",cat:"klasik",
  emoji:"🥩",cal:380,prot:28,carb:12,fat:24,serv:"1 porsiyon",time:40,
  tags:["et","proteinli","kebap","antep"],
  ingredients:[
    {item:"Kuzu kuşbaşı",amount:"200g"},
    {item:"Patlıcan",amount:"3 adet"},
    {item:"Yoğurt",amount:"200g"},
    {item:"Sarımsak",amount:"3 diş"},
    {item:"Tereyağı",amount:"1 yk"},
    {item:"Tuz, pul biber",amount:""}
  ],
  steps:[
    "Patlıcanları közleyip kabuklarını soyun, ezin.",
    "Yoğurt ve sarımsakla karıştırın.",
    "Eti tereyağında kavurup pişirin.",
    "Patlıcanlı yoğurdu tabağa yayın, eti üzerine koyup servis edin."
  ]
},
{
  id:"r_cerkez_tavugu",name:"Çerkez Tavuğu",cat:"klasik",
  emoji:"🍗",cal:280,prot:20,carb:8,fat:19,serv:"1 porsiyon",time:40,
  tags:["et","geleneksel","soğuk"],
  ingredients:[
    {item:"Tavuk göğsü",amount:"300g"},
    {item:"Ceviz",amount:"150g"},
    {item:"Bayat ekmek",amount:"2 dilim"},
    {item:"Sarımsak",amount:"2 diş"},
    {item:"Ceviz yağı",amount:"1 yk"},
    {item:"Pul biber",amount:""},
    {item:"Tuz",amount:""}
  ],
  steps:[
    "Tavuğu haşlayıp didikleyin, suyunu ayırın.",
    "Ceviz, ıslak ekmek ve sarımsağı blenderda çekin.",
    "Tavuk suyuyla açarak sos kıvamına getirin.",
    "Tavuğu tabağa yayın, ceviz sosunu gezdirin.",
    "Ceviz yağında pul biberi ısıtıp üzerine dökün."
  ]
},
{
  id:"r_tas_kebabi",name:"Tas Kebabı",cat:"klasik",
  emoji:"🥩",cal:320,prot:25,carb:10,fat:20,serv:"1 porsiyon",time:60,
  tags:["et","geleneksel","proteinli"],
  ingredients:[
    {item:"Dana kuşbaşı",amount:"250g"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Domates",amount:"2 adet"},
    {item:"Biber",amount:"2 adet"},
    {item:"Tereyağı",amount:"1 yk"},
    {item:"Domates salçası",amount:"1 yk"},
    {item:"Tuz, karabiber",amount:""}
  ],
  steps:[
    "Eti tereyağında kavurun, soğanı ekleyin.",
    "Salçayı ekleyip kavurun.",
    "Sıcak su ekleyin, kapağı kapalı kısık ateşte 40 dk pişirin.",
    "Domates ve biberleri ekleyip 15 dk daha pişirin.",
    "Pilavla servis edin."
  ]
},
{
  id:"r_kuzu_tandir",name:"Kuzu Tandır",cat:"klasik",
  emoji:"🥩",cal:380,prot:30,carb:5,fat:27,serv:"1 porsiyon",time:180,
  tags:["et","proteinli","geleneksel"],
  ingredients:[
    {item:"Kuzu eti (kemikli)",amount:"500g"},
    {item:"Soğan",amount:"2 adet"},
    {item:"Sarımsak",amount:"4 diş"},
    {item:"Defne yaprağı",amount:"2 adet"},
    {item:"Kekik",amount:"1 yk"},
    {item:"Tuz, karabiber",amount:""},
    {item:"Su",amount:"1 bardak"}
  ],
  steps:[
    "Kuzu etini büyük parçalar halinde tepsiye koyun.",
    "Soğan ve sarımsağı ekleyin.",
    "Baharatları ve suyu ilave edin.",
    "Aluminyum folyo ile sıkıca kapatın.",
    "150°C fırında 3 saat pişirin.",
    "Kemiklerinden ayrılacak kıvamda olmalı."
  ]
},
{
  id:"r_pilav_ustu_kuru",name:"Pilav Üstü Kuru Fasulye",cat:"klasik",
  emoji:"🍲",cal:360,prot:19,carb:48,fat:10,serv:"1 porsiyon",time:50,
  tags:["baklagil","et","geleneksel"],
  ingredients:[
    {item:"Kuru fasulye (haşlanmış)",amount:"200g"},
    {item:"Dana kuşbaşı",amount:"80g"},
    {item:"Domates salçası",amount:"1 yk"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Pirinç",amount:"1 bardak"},
    {item:"Tereyağı",amount:"1 yk"},
    {item:"Tuz, karabiber, pul biber",amount:""}
  ],
  steps:[
    "Eti kavurup soğan ve salçayı ekleyin.",
    "Haşlanmış fasulyeleri ve su ekleyip 30 dk pişirin.",
    "Pilav yapın: pirinci yağda kavurup su ekleyin, pişirip dinlendirin.",
    "Pilavı tabağa alıp üzerine kuru fasulye dökün.",
    "Turşu ve soğanla servis edin."
  ]
},
{
  id:"r_icki_kofte",name:"İçli Köfte",cat:"klasik",
  emoji:"🥩",cal:160,prot:8,carb:18,fat:6,serv:"1 adet",time:60,
  tags:["et","geleneksel","antep"],
  ingredients:[
    {item:"İnce bulgur",amount:"2 bardak"},
    {item:"İrmik",amount:"yarım bardak"},
    {item:"Kıyma",amount:"200g"},
    {item:"Soğan",amount:"2 adet"},
    {item:"Ceviz",amount:"50g"},
    {item:"Domates salçası",amount:"1 yk"},
    {item:"Tuz, pul biber, kimyon",amount:""}
  ],
  steps:[
    "Dış harcı yapın: Bulgur, irmik ve sıcak su ile yoğurup köfte hamuru hazırlayın.",
    "İç harcı yapın: Kıymayı soğanla kavurup ceviz, salça ve baharatları ekleyin.",
    "Hamurdan ceviz büyüklüğünde parça alıp parmakla oyun, iç harç koyun, kapatın.",
    "Kaynayan yağda altın rengi olana kadar kızartın."
  ]
},
{
  id:"r_et_sote",name:"Et Sote",cat:"klasik",
  emoji:"🥘",cal:280,prot:24,carb:10,fat:16,serv:"1 porsiyon",time:45,
  tags:["et","proteinli","geleneksel"],
  ingredients:[
    {item:"Dana kuşbaşı",amount:"200g"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Biber",amount:"2 adet"},
    {item:"Domates",amount:"2 adet"},
    {item:"Tereyağı",amount:"1 yk"},
    {item:"Domates salçası",amount:"1 çk"},
    {item:"Tuz, karabiber",amount:""}
  ],
  steps:[
    "Eti tereyağında kavurun.",
    "Soğanı ekleyip pembeleşene kadar soteleyin.",
    "Salçayı ekleyin, sıcak su ilave edip 30 dk pişirin.",
    "Doğranmış biber ve domatesi ekleyip 10 dk daha pişirin.",
    "Pilavla servis edin."
  ]
},
{
  id:"r_bezelye",name:"Etli Bezelye",cat:"klasik",
  emoji:"🟢",cal:180,prot:12,carb:14,fat:8,serv:"1 porsiyon",time:35,
  tags:["sebze","et","geleneksel"],
  ingredients:[
    {item:"Bezelye",amount:"300g"},
    {item:"Dana kuşbaşı",amount:"150g"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Havuç",amount:"1 adet"},
    {item:"Patates",amount:"1 adet"},
    {item:"Domates salçası",amount:"1 yk"},
    {item:"Tereyağı",amount:"1 yk"}
  ],
  steps:[
    "Eti kavurup soğanı ekleyin.",
    "Salçayı ilave edip sıcak su ekleyin.",
    "15 dk pişirdikten sonra küp doğranmış havuç ve patatesi ekleyin.",
    "5 dk sonra bezelyeleri ekleyip tüm sebzeler yumuşayana kadar pişirin."
  ]
},
{
  id:"r_sac_kavurma",name:"Sac Kavurma",cat:"klasik",
  emoji:"🥘",cal:340,prot:25,carb:8,fat:23,serv:"1 porsiyon",time:30,
  tags:["et","proteinli","geleneksel"],
  ingredients:[
    {item:"Kuzu kuşbaşı",amount:"250g"},
    {item:"Domates",amount:"2 adet"},
    {item:"Biber",amount:"3 adet"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Kuyruk yağı veya tereyağı",amount:"1 yk"},
    {item:"Tuz, karabiber, pul biber",amount:""}
  ],
  steps:[
    "Sacı (veya geniş tavayı) kızdırın.",
    "Eti yağda suyunu çekene kadar kavurun.",
    "Soğanları ekleyip kavurun.",
    "Domates ve biberleri ilave edip 5 dk daha pişirin.",
    "Ekmek veya lavaşla sıcak servis edin."
  ]
},
{
  id:"r_arnavut_cigeri",name:"Arnavut Ciğeri",cat:"klasik",
  emoji:"🥩",cal:250,prot:22,carb:10,fat:14,serv:"1 porsiyon",time:20,
  tags:["et","proteinli","geleneksel"],
  ingredients:[
    {item:"Dana ciğer",amount:"250g"},
    {item:"Un",amount:"3 yk"},
    {item:"Soğan",amount:"1 büyük"},
    {item:"Sivri biber",amount:"3 adet"},
    {item:"Kızartma yağı",amount:""},
    {item:"Sumak, pul biber",amount:""},
    {item:"Tuz",amount:""}
  ],
  steps:[
    "Ciğeri küçük küpler halinde doğrayın.",
    "Unla kaplayın.",
    "Kızgın yağda çıtır kızarıncaya kadar pişirin.",
    "Soğanı ince halka doğrayıp sumak ve pul biberle karıştırın.",
    "Ciğeri soğan salatası ve biberlerle servis edin."
  ]
},
{
  id:"r_kofte_izgara",name:"Izgara Köfte",cat:"klasik",
  emoji:"🥩",cal:90,prot:9,carb:2,fat:5,serv:"1 adet",time:25,
  tags:["et","proteinli","pratik"],
  ingredients:[
    {item:"Dana kıyma",amount:"500g"},
    {item:"Soğan (rendelenmiş)",amount:"1 adet"},
    {item:"Ekmek içi",amount:"1 dilim"},
    {item:"Yumurta",amount:"1 adet"},
    {item:"Maydanoz",amount:"yarım demet"},
    {item:"Kimyon, karabiber, tuz",amount:""},
    {item:"Pul biber",amount:"1 çk"}
  ],
  steps:[
    "Kıyma, rendelenmiş soğan, ıslak ekmek içi ve yumurtayı yoğurun.",
    "Baharatları ve maydanozu ekleyin.",
    "10 dk buzdolabında dinlendirin.",
    "Köfte şekli verip ızgarada veya tavada pişirin."
  ]
},
{
  id:"r_tantuni",name:"Tantuni",cat:"klasik",
  emoji:"🌯",cal:380,prot:25,carb:30,fat:18,serv:"1 porsiyon",time:15,
  tags:["et","proteinli","pratik","mersin"],
  ingredients:[
    {item:"Dana eti (ince dilimlenmiş)",amount:"200g"},
    {item:"Lavaş",amount:"2 adet"},
    {item:"Domates",amount:"1 adet"},
    {item:"Soğan",amount:"1 adet"},
    {item:"Maydanoz",amount:"yarım demet"},
    {item:"Sıvı yağ",amount:"2 yk"},
    {item:"Pul biber, tuz, kimyon",amount:""}
  ],
  steps:[
    "Eti çok ince doğrayın.",
    "Sac tavada bolca yağda kavurun.",
    "Doğranmış soğan, domates ve maydanozu ekleyin.",
    "Baharatlayıp lavaşa sararak servis edin."
  ]
},

// ═══════════════════════════════════════════
// ══  FIT EK TARİFLER                     ══
// ═══════════════════════════════════════════
{
  id:"r_fit_kinoa_salata",name:"Kinoalı Salata",cat:"fit",
  emoji:"🥗",cal:210,prot:8,carb:28,fat:8,serv:"1 porsiyon",time:20,
  tags:["saglikli","fit","vejetaryen"],
  ingredients:[
    {item:"Kinoa",amount:"yarım bardak"},
    {item:"Roka",amount:"1 avuç"},
    {item:"Domates",amount:"1 adet"},
    {item:"Salatalık",amount:"1 adet"},
    {item:"Avokado",amount:"yarım"},
    {item:"Limon suyu",amount:"1 yk"},
    {item:"Zeytinyağı",amount:"1 yk"}
  ],
  steps:[
    "Kinoayı haşlayıp soğutun.",
    "Sebzeleri doğrayıp kinoayla karıştırın.",
    "Limon ve zeytinyağı sosuyla servis edin."
  ]
},
{
  id:"r_fit_balik",name:"Fırında Somon",cat:"fit",
  emoji:"🐟",cal:250,prot:28,carb:5,fat:14,serv:"1 porsiyon",time:25,
  tags:["proteinli","saglikli","fit"],
  ingredients:[
    {item:"Somon fileto",amount:"180g"},
    {item:"Limon",amount:"yarım"},
    {item:"Zeytinyağı",amount:"1 çk"},
    {item:"Dereotu",amount:"2 dal"},
    {item:"Tuz, karabiber",amount:""},
    {item:"Sarımsak",amount:"1 diş"}
  ],
  steps:[
    "Somonu baharatlayıp limon suyu gezdirin.",
    "Fırın kağıdına koyun, dereotu ve sarımsak ekleyin.",
    "200°C fırında 15-18 dk pişirin.",
    "Sebze garnisi ile servis edin."
  ]
},
{
  id:"r_fit_chia_puding",name:"Chia Puding",cat:"fit",
  emoji:"🥣",cal:180,prot:8,carb:20,fat:8,serv:"1 kase",time:5,
  tags:["saglikli","fit","vejetaryen","kahvalti"],
  ingredients:[
    {item:"Chia tohumu",amount:"3 yk"},
    {item:"Süt (badem veya normal)",amount:"200ml"},
    {item:"Bal",amount:"1 çk"},
    {item:"Meyve (çilek, muz vb.)",amount:""},
    {item:"Granola",amount:"1 yk"}
  ],
  steps:[
    "Chia tohumunu süt ve balla karıştırın.",
    "Buzdolabında en az 4 saat (tercihen gece boyu) bekletin.",
    "Üzerine meyve ve granola ekleyip servis edin."
  ]
},
{
  id:"r_fit_yumurta_muffin",name:"Sebzeli Yumurta Muffin",cat:"fit",
  emoji:"🧁",cal:70,prot:6,carb:2,fat:4,serv:"1 adet",time:25,
  tags:["proteinli","saglikli","fit","pratik","kahvalti"],
  ingredients:[
    {item:"Yumurta",amount:"6 adet"},
    {item:"Ispanak",amount:"1 avuç"},
    {item:"Domates",amount:"1 adet"},
    {item:"Biber",amount:"1 adet"},
    {item:"Peynir",amount:"50g"},
    {item:"Tuz, karabiber",amount:""}
  ],
  steps:[
    "Yumurtaları çırpın, doğranmış sebzeleri ve peyniri ekleyin.",
    "Muffin kalıplarına paylaştırın.",
    "180°C fırında 18-20 dk pişirin.",
    "5 günlük meal prep yapılabilir."
  ]
}
];

// ══════════════════════════════════════════════════════════════════
//  TARİF FOTOĞRAFLARI — Wikimedia Commons lisanslı görseller
//  ID → img URL eşleştirmesi (enrichment pattern)
// ══════════════════════════════════════════════════════════════════
(function(){
  var RECIPE_PHOTOS={
    "r_iskender":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/%C4%B0skender_kebap.jpg/640px-%C4%B0skender_kebap.jpg",
    "r_hunkar":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/H%C3%BCnk%C3%A2rbegendi.jpg/640px-H%C3%BCnk%C3%A2rbegendi.jpg",
    "r_karniyarik":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Karn%C4%B1yar%C4%B1k.jpg/640px-Karn%C4%B1yar%C4%B1k.jpg",
    "r_imam_bayildi":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Imam_bayildi.jpg/640px-Imam_bayildi.jpg",
    "r_etli_nohut":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Etli_nohut.jpg/640px-Etli_nohut.jpg",
    "r_etli_kuru_fasulye":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Kuru_fasulye.jpg/640px-Kuru_fasulye.jpg",
    "r_yaprak_sarma":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sarma_%28leaf_rolls%29.jpg/640px-Sarma_%28leaf_rolls%29.jpg",
    "r_manti":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Mant%C4%B1.jpg/640px-Mant%C4%B1.jpg",
    "r_mercimek_kofte":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Mercimek_k%C3%B6ftesi.jpg/640px-Mercimek_k%C3%B6ftesi.jpg",
    "r_mercimek_corbasi":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Mercimek_%C3%87orbas%C4%B1.jpg/640px-Mercimek_%C3%87orbas%C4%B1.jpg",
    "r_ezogelin":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Ezogelin_soup.jpg/640px-Ezogelin_soup.jpg",
    "r_yayla":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Yayla_%C3%A7orbas%C4%B1.jpg/640px-Yayla_%C3%A7orbas%C4%B1.jpg",
    "r_tarhana":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Tarhana_soup.jpg/640px-Tarhana_soup.jpg",
    "r_iskembe":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Iskembe_corbasi.jpg/640px-Iskembe_corbasi.jpg",
    "r_dugun_corbasi":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/D%C3%BC%C4%9F%C3%BCn_%C3%A7orbas%C4%B1.jpg/640px-D%C3%BC%C4%9F%C3%BCn_%C3%A7orbas%C4%B1.jpg",
    "r_beyran":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Beyran_%C3%87orbas%C4%B1.jpg/640px-Beyran_%C3%87orbas%C4%B1.jpg",
    "r_fit_tavuk_izgara":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Grilled_chicken_breast.jpg/640px-Grilled_chicken_breast.jpg",
    "r_fit_ton_salata":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Salad_Nicoise.jpg/640px-Salad_Nicoise.jpg",
    "r_fit_bulgur_pilavı":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bulgur_pilav%C4%B1.jpg/640px-Bulgur_pilav%C4%B1.jpg",
    "r_menemen":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Menemen.jpg/640px-Menemen.jpg",
    "r_sigara_boregi":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Sigara_b%C3%B6re%C4%9Fi.jpg/640px-Sigara_b%C3%B6re%C4%9Fi.jpg",
    "r_coban_salata":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/%C3%87oban_salatas%C4%B1.jpg/640px-%C3%87oban_salatas%C4%B1.jpg",
    "r_makarna_soslu":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Pasta-with-tomato-sauce.jpg/640px-Pasta-with-tomato-sauce.jpg",
    "r_biber_dolma":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Biber_dolmas%C4%B1.jpg/640px-Biber_dolmas%C4%B1.jpg",
    "r_patlican_musakka":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Musakka.jpg/640px-Musakka.jpg",
    "r_zeytinyagli_fasulye":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Zeytinya%C4%9Fl%C4%B1_taze_fasulye.jpg/640px-Zeytinya%C4%9Fl%C4%B1_taze_fasulye.jpg",
    "r_ispanak_yemegi":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Ispanak_yumurta.jpg/640px-Ispanak_yumurta.jpg",
    "r_mantar_sote":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Mantar_sote.jpg/640px-Mantar_sote.jpg",
    "r_sutlac":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/F%C4%B1r%C4%B1n_S%C3%BCtla%C3%A7.jpg/640px-F%C4%B1r%C4%B1n_S%C3%BCtla%C3%A7.jpg",
    "r_kabak_tatlisi":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kabak_tatl%C4%B1s%C4%B1.jpg/640px-Kabak_tatl%C4%B1s%C4%B1.jpg",
    "r_asure":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/A%C5%9Fure.jpg/640px-A%C5%9Fure.jpg",
    "r_sekerpare":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/%C5%9Eekerpare.jpg/640px-%C5%9Eekerpare.jpg",
    "r_revani":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Revani.jpg/640px-Revani.jpg",
    "r_kisir":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/K%C4%B1s%C4%B1r.jpg/640px-K%C4%B1s%C4%B1r.jpg",
    "r_humus":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hummus_from_The_Nile.jpg/640px-Hummus_from_The_Nile.jpg",
    "r_falafel":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Falafel_balls.jpg/640px-Falafel_balls.jpg",
    "r_saksuka":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Shakshuka_by_Calliopejen1.jpg/640px-Shakshuka_by_Calliopejen1.jpg",
    "r_kasarli_tost":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Grilled-Cheese-Sandwich.jpg/640px-Grilled-Cheese-Sandwich.jpg",
    "r_tavuk_durum":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Durum_chicken.jpg/640px-Durum_chicken.jpg",
    "r_cigkofte_durum":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/%C3%87i%C4%9Fk%C3%B6fte_d%C3%BCr%C3%BCm.jpg/640px-%C3%87i%C4%9Fk%C3%B6fte_d%C3%BCr%C3%BCm.jpg",
    "r_gavurdagi":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Gavurda%C4%9F%C4%B1_salatas%C4%B1.jpg/640px-Gavurda%C4%9F%C4%B1_salatas%C4%B1.jpg",
    "r_piyaz":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Piyaz.jpg/640px-Piyaz.jpg",
    "r_su_boregi":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Su_b%C3%B6re%C4%9Fi.jpg/640px-Su_b%C3%B6re%C4%9Fi.jpg",
    "r_gozleme":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/G%C3%B6zleme.jpg/640px-G%C3%B6zleme.jpg",
    "r_kiymali_pide":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Turkish_Pide.jpg/640px-Turkish_Pide.jpg",
    "r_lahmacun":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Lahmacun.jpg/640px-Lahmacun.jpg",
    "r_haydari":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Haydari.jpg/640px-Haydari.jpg",
    "r_babaganus":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Baba_ghanoush.jpg/640px-Baba_ghanoush.jpg",
    "r_acili_ezme":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Ac%C4%B1l%C4%B1_ezme.jpg/640px-Ac%C4%B1l%C4%B1_ezme.jpg",
    "r_atom":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Ezme.jpg/640px-Ezme.jpg",
    "r_topik":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Topik.jpg/640px-Topik.jpg",
    "r_ali_nazik":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Ali_Nazik.jpg/640px-Ali_Nazik.jpg",
    "r_cerkez_tavugu":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/%C3%87erkez_tavugu.jpg/640px-%C3%87erkez_tavugu.jpg",
    "r_tas_kebabi":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Tas_kebab%C4%B1.jpg/640px-Tas_kebab%C4%B1.jpg",
    "r_kuzu_tandir":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Lamb_tandir.jpg/640px-Lamb_tandir.jpg",
    "r_pilav_ustu_kuru":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Kuru_fasulye.jpg/640px-Kuru_fasulye.jpg",
    "r_icki_kofte":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/I%C3%A7li_k%C3%B6fte.jpg/640px-I%C3%A7li_k%C3%B6fte.jpg",
    "r_et_sote":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Et_sote.jpg/640px-Et_sote.jpg",
    "r_bezelye":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Etli_bezelye.jpg/640px-Etli_bezelye.jpg",
    "r_sac_kavurma":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Kavurma.jpg/640px-Kavurma.jpg",
    "r_arnavut_cigeri":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Arnavut_ci%C4%9Feri.jpg/640px-Arnavut_ci%C4%9Feri.jpg",
    "r_kofte_izgara":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Turkish_k%C3%B6fte.jpg/640px-Turkish_k%C3%B6fte.jpg",
    "r_tantuni":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tantuni.jpg/640px-Tantuni.jpg",
    "r_fit_kinoa_salata":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Quinoa_salad.jpg/640px-Quinoa_salad.jpg",
    "r_fit_balik":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Salmon_with_lemon.jpg/640px-Salmon_with_lemon.jpg",
    "r_fit_chia_puding":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Chia_seed_pudding.jpg/640px-Chia_seed_pudding.jpg",
    "r_fit_yumurta_muffin":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Egg_muffins.jpg/640px-Egg_muffins.jpg",
    "r_fit_yulaf_kase":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Oatmeal_with_fruits.jpg/640px-Oatmeal_with_fruits.jpg",
    "r_fit_omlet":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Omelette_with_vegetables.jpg/640px-Omelette_with_vegetables.jpg",
    "r_fit_tavuk_salata":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Caesar_salad_%281%29.jpg/640px-Caesar_salad_%281%29.jpg",
    "r_fit_smoothie_bowl":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Smoothie_bowl.jpg/640px-Smoothie_bowl.jpg",
    "r_patates_kizartma":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/F%C4%B1r%C4%B1nda_patates.jpg/640px-F%C4%B1r%C4%B1nda_patates.jpg",
    "r_yumurta_haslama":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sahanda_yumurta.jpg/640px-Sahanda_yumurta.jpg",
    "r_roka_salata":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rocket_salad.jpg/640px-Rocket_salad.jpg",
    "r_karışık_tost":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Grilled-Cheese-Sandwich.jpg/640px-Grilled-Cheese-Sandwich.jpg"
  };

  window.TURKISH_RECIPES_DB.forEach(function(r){
    if(!r.img&&RECIPE_PHOTOS[r.id]){
      r.img=RECIPE_PHOTOS[r.id];
    }
  });
})();
