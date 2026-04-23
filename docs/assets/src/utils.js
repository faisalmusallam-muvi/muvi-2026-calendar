// muvi 2026 — movies data, genre/experience constants, and i18n strings
// Each movie: { ar, en, genre, date (YYYY-MM-DD), pick (bool), tmdbId, overview, runtime, rating, exp[] }

const TMDB_IMG = 'https://image.tmdb.org/t/p/w500';
const TMDB_BG  = 'https://image.tmdb.org/t/p/w1280';

window.MUVI_MOVIES_2026 = [
  // JANUARY — يناير
  { month: 0, ar: "28 Years Later: The Bone Temple", en: "28 Years Later: The Bone Temple", genre: "horror", date: "2026-01-15", pick: true,
    tmdbId: 1272837, exp: ['imax', 'screenx', '4dx'],
    overview: "الجزء الثاني من الثلاثية التي تتبّع عالماً ما بعد تفشي الفيروس بعد 28 عاماً.", runtime: 115, rating: "R" },
  { month: 0, ar: "دورايمون", en: "Doraemon: Nobita's Art World Tales", genre: "animation", date: "2026-01-08",
    tmdbId: 1277309, overview: "مغامرة جديدة للقط الروبوت دورايمون وصديقه نوبيتا في عالم الفن.", runtime: 104, rating: "PG" },
  { month: 0, ar: "Primate", en: "Primate", genre: "thriller", date: "2026-01-22",
    overview: "تشويق نفسي يدور حول تجارب طبية سرية.", runtime: 108, rating: "R" },
  { month: 0, ar: "Mercy", en: "Mercy", genre: "drama", date: "2026-01-22",
    overview: "دراما تدور حول رحمة، محاكمة، وسؤال أخلاقي صعب.", runtime: 118, rating: "PG-13" },
  { month: 0, ar: "Return to Silent Hill", en: "Return to Silent Hill", genre: "horror", date: "2026-01-29",
    tmdbId: 680493, exp: ['4dx'],
    overview: "عودة إلى المدينة الضبابية الأكثر رعباً في تاريخ ألعاب الفيديو.", runtime: 125, rating: "R" },
  { month: 0, ar: "Send Help", en: "Send Help", genre: "thriller", date: "2026-01-29",
    overview: "رعب نفسي يدور حول شخصين عالقين على جزيرة نائية.", runtime: 96, rating: "R" },

  // FEBRUARY — فبراير
  { month: 1, ar: "Cold Storage", en: "Cold Storage", genre: "action", date: "2026-02-05",
    overview: "تشويق علمي — كائن مجمّد من الماضي يعود للحياة.", runtime: 110, rating: "PG-13" },
  { month: 1, ar: "Scream 7", en: "Scream 7", genre: "horror", date: "2026-02-12", pick: true,
    tmdbId: 1159559, exp: ['4dx', 'screenx'],
    overview: "عودة Ghostface — سيدني بريسكوت تواجه قاتلاً جديداً.", runtime: 118, rating: "R" },
  { month: 1, ar: "Crime 101", en: "Crime 101", genre: "thriller", date: "2026-02-19",
    tmdbId: 1171145, overview: "تحقيق جرائم مبني على رواية دون وينسلو.", runtime: 122, rating: "R" },
  { month: 1, ar: "Wuthering Heights", en: "Wuthering Heights", genre: "drama", date: "2026-02-19",
    tmdbId: 1316092, exp: ['suites', 'dolby'],
    overview: "اقتباس جديد لرواية إميلي برونتي الكلاسيكية — قصة حب قاتلة على المروج الإنجليزية.", runtime: 130, rating: "PG-13" },
  { month: 1, ar: "Good Luck, Have Fun, Don't Die", en: "Good Luck, Have Fun, Don't Die", genre: "scifi", date: "2026-02-26",
    overview: "خيال علمي ملحمي من المخرج جوردن فاخت-فيتالي.", runtime: 128, rating: "R" },

  // MARCH — مارس
  { month: 2, ar: "فرقة الموت", en: "Death Squad", genre: "saudi", date: "2026-03-05",
    overview: "فيلم أكشن سعودي عن فرقة عمليات خاصة.", runtime: 110, rating: "PG-13" },
  { month: 2, ar: "أسد", en: "Aseed", genre: "saudi", date: "2026-03-12",
    noPoster: true, overview: "دراما سعودية عن صعود وسقوط بطل شعبي.", runtime: 115, rating: "PG-13" },
  { month: 2, ar: "ابن العسل", en: "Son of Honey", genre: "saudi", date: "2026-03-19",
    overview: "قصة عائلية سعودية مؤثرة عن الجذور والانتماء.", runtime: 108, rating: "PG" },
  { month: 2, ar: "Hoppers", en: "Hoppers", genre: "animation", date: "2026-03-19",
    tmdbId: 1327819, exp: ['imax', 'dolby'],
    overview: "فيلم أنيميشن من بيكسار — بطلته فتاة تنتقل وعيها إلى جسم قندس روبوتي.", runtime: 98, rating: "PG" },
  { month: 2, ar: "شباب البومب 3", en: "Shabab Al Bomb 3", genre: "saudi", date: "2026-03-26", pick: true,
    overview: "الجزء الثالث من المسلسل الكوميدي السعودي الأيقوني — عودة الشباب إلى السينما.", runtime: 120, rating: "PG-13" },
  { month: 2, ar: "Project Hail Mary", en: "Project Hail Mary", genre: "scifi", date: "2026-03-26",
    tmdbId: 687163, exp: ['imax', 'dolby'],
    overview: "اقتباس لرواية آندي واير — رائد فضاء يستيقظ ليجد نفسه وحيداً في مهمة لإنقاذ الأرض.", runtime: 135, rating: "PG-13" },

  // APRIL — أبريل
  { month: 3, ar: "Super Mario Galaxy", en: "The Super Mario Galaxy Movie", genre: "animation", date: "2026-04-03", pick: true,
    tmdbId: 1226863, exp: ['imax', '4dx'],
    overview: "ماريو ولويجي ينطلقان في مغامرة كونية جديدة عبر المجرة.", runtime: 95, rating: "PG" },
  { month: 3, ar: "Michael", en: "Michael", genre: "drama", date: "2026-04-10",
    tmdbId: 936075, exp: ['dolby', 'suites'],
    overview: "سيرة ذاتية لملك البوب مايكل جاكسون.", runtime: 140, rating: "PG-13" },
  { month: 3, ar: "The Devil Wears Prada 2", en: "The Devil Wears Prada 2", genre: "comedy", date: "2026-04-17",
    tmdbId: 1314481, overview: "عودة ميراندا بريستلي بعد عقدين من الفيلم الأصلي.", runtime: 110, rating: "PG-13" },
  { month: 3, ar: "The Goat", en: "The Goat", genre: "drama", date: "2026-04-24",
    overview: "دراما رياضية عن أعظم لاعب في التاريخ.", runtime: 120, rating: "PG-13" },

  // MAY — مايو
  { month: 4, ar: "Mortal Kombat 2", en: "Mortal Kombat 2", genre: "action", date: "2026-05-07",
    exp: ['screenx', '4dx'],
    overview: "الجزء الثاني من فيلم القتال الأيقوني — عوالم جديدة ومعارك أضخم.", runtime: 115, rating: "R" },
  { month: 4, ar: "Star Wars: The Mandalorian and Grogu", en: "The Mandalorian and Grogu", genre: "scifi", date: "2026-05-22", pick: true,
    tmdbId: 1228710, exp: ['imax', 'dolby', '4dx'],
    overview: "أول فيلم سينمائي لسلسلة The Mandalorian — ماندو وغروغو في مغامرة جديدة.", runtime: 130, rating: "PG" },
  { month: 4, ar: "The Sheep Detectives", en: "The Sheep Detectives", genre: "animation", date: "2026-05-08",
    tmdbId: 1301421, overview: "ثلاثة خراف يحلّون جريمة قتل في قرية إيرلندية — تحقيق كوميدي مثير بأصوات هيو جاكمان وإيما تومبسون.", runtime: 96, rating: "PG" },

  // JUNE — يونيو
  { month: 5, ar: "Scary Movie 6", en: "Scary Movie 6", genre: "comedy", date: "2026-06-12",
    overview: "الجزء السادس من سلسلة المحاكاة الكوميدية الشهيرة.", runtime: 92, rating: "PG-13" },
  { month: 5, ar: "Supergirl", en: "Supergirl: Woman of Tomorrow", genre: "action", date: "2026-06-26",
    tmdbId: 1081003, exp: ['imax', 'screenx'],
    overview: "كارا زور-إل تنطلق في مغامرة عبر المجرات.", runtime: 128, rating: "PG-13" },
  { month: 5, ar: "Disclosure Day", en: "Disclosure Day", genre: "thriller", date: "2026-06-12",
    overview: "إثارة سياسية — يوم يُكشف فيه كل شيء.", runtime: 115, rating: "R" },
  { month: 5, ar: "Toy Story 5", en: "Toy Story 5", genre: "animation", date: "2026-06-19", pick: true,
    tmdbId: 1084244, exp: ['imax', 'dolby', '4dx'],
    overview: "ودي، باز، وكل اللعب عادوا — هذه المرة ضد تحدٍ تقني جديد.", runtime: 102, rating: "G" },
  { month: 5, ar: "Master of the Universe", en: "Masters of the Universe", genre: "action", date: "2026-06-05",
    tmdbId: 454639, exp: ['imax', 'screenx', '4dx'],
    overview: "هي-مان وأبطال Eternia في فيلم لايف آكشن جديد.", runtime: 125, rating: "PG-13" },

  // JULY — يوليو
  { month: 6, ar: "Minions 3", en: "Minions 3", genre: "animation", date: "2026-07-01",
    overview: "الجزء الثالث من مغامرات المنيونز الصفراء.", runtime: 92, rating: "PG" },
  { month: 6, ar: "Moana", en: "Moana (Live Action)", genre: "animation", date: "2026-07-10",
    tmdbId: 1108427, exp: ['imax'],
    overview: "النسخة الحية من فيلم ديزني الكلاسيكي — موانا تعود إلى المحيط.", runtime: 118, rating: "PG" },
  { month: 6, ar: "The Odyssey", en: "The Odyssey", genre: "drama", date: "2026-07-17", pick: true,
    tmdbId: 1368337, exp: ['imax', 'dolby', 'screenx'],
    overview: "ملحمة كريستوفر نولان — رحلة أوديسيوس من طروادة إلى الوطن.", runtime: 165, rating: "PG-13" },
  { month: 6, ar: "Spider-Man: Brand New Day", en: "Spider-Man: Brand New Day", genre: "action", date: "2026-07-24",
    tmdbId: 969681, exp: ['imax', 'screenx', '4dx', 'dolby'],
    overview: "الرجل العنكبوت في فصل جديد تماماً.", runtime: 135, rating: "PG-13" },
  { month: 6, ar: "Evil Dead Burn", en: "Evil Dead Burn", genre: "horror", date: "2026-07-31",
    overview: "الجزء الجديد من سلسلة Evil Dead — الشياطين تحترق.", runtime: 100, rating: "R" },

  // AUGUST — أغسطس
  { month: 7, ar: "The End of Oak Street", en: "The End of Oak Street", genre: "thriller", date: "2026-08-13",
    overview: "إثارة نفسية من وارنر براذرز عن أسرار شارع قديم.", runtime: 108, rating: "R" },
  { month: 7, ar: "The Dog Stars", en: "The Dog Stars", genre: "scifi", date: "2026-08-27",
    overview: "ملحمة ما بعد الكارثة من المخرج ريدلي سكوت — آخر البشر يبحثون عن أمل.", runtime: 120, rating: "PG-13" },
  { month: 7, ar: "Insidious 6", en: "Insidious: 6", genre: "horror", date: "2026-08-07",
    exp: ['4dx'],
    overview: "عودة عائلة Lambert إلى العالم الآخر.", runtime: 108, rating: "PG-13" },
  { month: 7, ar: "Mutiny", en: "Mutiny", genre: "action", date: "2026-08-14",
    overview: "أكشن بحري عن تمرد على سفينة قرصنة.", runtime: 118, rating: "R" },
  { month: 7, ar: "Coyote vs. ACME", en: "Coyote vs. Acme", genre: "animation", date: "2026-08-21", pick: true,
    tmdbId: 1204680, exp: ['imax'],
    overview: "الذئب القيوط يقاضي شركة ACME بعد سلسلة من الحوادث.", runtime: 98, rating: "PG" },

  // SEPTEMBER — سبتمبر
  { month: 8, ar: "How to Rob a Bank", en: "How to Rob a Bank", genre: "comedy", date: "2026-09-03",
    overview: "كوميديا سطو خفيفة من Amazon MGM Studios.", runtime: 100, rating: "PG-13" },
  { month: 8, ar: "In the Heart of the Beast", en: "In the Heart of the Beast", genre: "action", date: "2026-09-25",
    overview: "براد بيت في مغامرة أكشن ضخمة من باراماونت.", runtime: 128, rating: "R" },
  { month: 8, ar: "Forgotten Island", en: "Forgotten Island", genre: "thriller", date: "2026-09-04",
    overview: "إثارة على جزيرة مهجورة تخفي أسرار كثيرة.", runtime: 112, rating: "PG-13" },
  { month: 8, ar: "Resident Evil", en: "Resident Evil", genre: "horror", date: "2026-09-18", pick: true,
    exp: ['screenx', '4dx'],
    overview: "إعادة تشغيل سلسلة Resident Evil — شركة أمبريلا تعود.", runtime: 130, rating: "R" },
  { month: 8, ar: "Clayface", en: "Clayface", genre: "horror", date: "2026-09-11",
    tmdbId: 1400940, overview: "قصة الشرير الأيقوني Clayface من عالم DC.", runtime: 115, rating: "R" },

  // OCTOBER — أكتوبر
  { month: 9, ar: "Other Mommy", en: "Other Mommy", genre: "horror", date: "2026-10-08",
    overview: "رعب نفسي من Universal — طفل يكتشف أن أمه ليست من يدّعي.", runtime: 105, rating: "R" },
  { month: 9, ar: "Whalefall", en: "Whalefall", genre: "thriller", date: "2026-10-15",
    overview: "إثارة من ديزني — غوّاص يُبتلع بالخطأ ويقاتل للنجاة.", runtime: 112, rating: "PG-13" },
  { month: 9, ar: "Street Fighter", en: "Street Fighter", genre: "action", date: "2026-10-16", pick: true,
    tmdbId: 1153576, exp: ['screenx', '4dx', 'imax'],
    overview: "اقتباس لايف آكشن للعبة القتال الأيقونية.", runtime: 120, rating: "PG-13" },
  { month: 9, ar: "Digger", en: "Digger", genre: "drama", date: "2026-10-02",
    overview: "دراما مؤثرة عن عمال المناجم.", runtime: 118, rating: "PG-13" },
  { month: 9, ar: "The Social Reckoning", en: "The Social Reckoning", genre: "drama", date: "2026-10-09",
    overview: "فيلم عن الجانب المظلم لوسائل التواصل الاجتماعي.", runtime: 125, rating: "R" },
  { month: 9, ar: "Remain", en: "Remain", genre: "thriller", date: "2026-10-23",
    overview: "إثارة نفسية مقتبسة عن رواية نيكولاس سباركس.", runtime: 110, rating: "PG-13" },

  // NOVEMBER — نوفمبر
  { month: 10, ar: "Wild Horse Nine", en: "Wild Horse Nine", genre: "comedy", date: "2026-11-05",
    overview: "كوميديا سوداء من المخرج مارتن مكدونا — عملاء CIA في مغامرة فوضوية.", runtime: 110, rating: "R" },
  { month: 10, ar: "I Play Rocky", en: "I Play Rocky", genre: "drama", date: "2026-11-12",
    overview: "حكاية الروكي الحقيقي — درامية عن سيلفستر ستالون ونجاح صنعه بإرادته.", runtime: 118, rating: "PG-13" },
  { month: 10, ar: "Ebenezer Scrooge", en: "Ebenezer Scrooge", genre: "drama", date: "2026-11-12",
    overview: "جوني ديب في دور سكروج — تحويل أدبي حديث لقصة ديكنز الكلاسيكية.", runtime: 120, rating: "PG-13" },
  { month: 10, ar: "Meet the Parents 4", en: "Meet the Parents: A Little Fokking in the House", genre: "comedy", date: "2026-11-06",
    overview: "عودة غريغ فوكر وعائلته في مغامرة كوميدية جديدة.", runtime: 108, rating: "PG-13" },
  { month: 10, ar: "Hexed", en: "Hexed", genre: "horror", date: "2026-11-13",
    overview: "رعب عن لعنة قديمة تطارد عائلة.", runtime: 102, rating: "R" },
  { month: 10, ar: "The Cat in the Hat", en: "The Cat in the Hat", genre: "animation", date: "2026-11-20", pick: true,
    tmdbId: 1074313, overview: "قطة الدكتور سوس الشهيرة في نسخة أنيميشن جديدة.", runtime: 92, rating: "G" },
  { month: 10, ar: "The Hunger Games", en: "The Hunger Games: Sunrise on the Reaping", genre: "action", date: "2026-11-20",
    tmdbId: 1300968, exp: ['imax', 'dolby'],
    overview: "ألعاب الجوع — قصة هايمتش أبرناثي قبل كاتنيس بعقود.", runtime: 140, rating: "PG-13" },

  // DECEMBER — ديسمبر
  { month: 11, ar: "Violent Night 2", en: "Violent Night 2", genre: "action", date: "2026-12-03",
    exp: ['4dx'],
    overview: "بابا نويل العنيف يعود — أكشن كوميدي ملحمي لعيد الميلاد.", runtime: 105, rating: "R" },
  { month: 11, ar: "Dune 3", en: "Dune: Part Three", genre: "scifi", date: "2026-12-18",
    tmdbId: 1935783, exp: ['imax', 'dolby', 'screenx'],
    overview: "الجزء الثالث من ملحمة ديون — بول أتريديس إمبراطور الكون.", runtime: 170, rating: "PG-13" },
  { month: 11, ar: "Jumanji 3", en: "Jumanji 3", genre: "comedy", date: "2026-12-11",
    overview: "عودة الأبطال إلى العالم الأكثر خطورة في ألعاب الفيديو.", runtime: 118, rating: "PG-13" },
  { month: 11, ar: "Avengers: Doomsday", en: "Avengers: Doomsday", genre: "action", date: "2026-12-18", pick: true,
    tmdbId: 1003596, exp: ['imax', 'screenx', '4dx', 'dolby'],
    overview: "المنتقمون يواجهون أخطر تهديد في تاريخ MCU — دكتور دووم.", runtime: 160, rating: "PG-13" },
];

window.MUVI_MONTHS_AR = [
  "يناير","فبراير","مارس","أبريل","مايو","يونيو",
  "يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"
];
window.MUVI_MONTHS_EN = [
  "JAN","FEB","MAR","APR","MAY","JUN",
  "JUL","AUG","SEP","OCT","NOV","DEC"
];
window.MUVI_MONTHS_EN_FULL = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

window.MUVI_GENRES = {
  horror:    { ar: "رعب",       en: "Horror",    color: "#e0004d" },
  action:    { ar: "أكشن",      en: "Action",    color: "#ffa300" },
  drama:     { ar: "دراما",     en: "Drama",     color: "#60a5fa" },
  comedy:    { ar: "كوميدي",    en: "Comedy",    color: "#009a44" },
  animation: { ar: "أنيميشن",   en: "Animation", color: "#05c3de" },
  scifi:     { ar: "خيال علمي", en: "Sci-Fi",    color: "#a78bfa" },
  thriller:  { ar: "إثارة",     en: "Thriller",  color: "#fb923c" },
  saudi:     { ar: "سعودي",     en: "Saudi",     color: "#22c55e" },
};

window.MUVI_EXPERIENCES = {
  imax:    { ar: "IMAX",    en: "IMAX",    color: "#ffa300" },
  screenx: { ar: "ScreenX", en: "ScreenX", color: "#05c3de" },
  '4dx':   { ar: "4DX",     en: "4DX",     color: "#e0004d" },
  dolby:   { ar: "Dolby",   en: "Dolby",   color: "#a78bfa" },
  suites:  { ar: "Suites",  en: "Suites",  color: "#22c55e" },
};

window.MUVI_I18N = {
  ar: {
    nav_calendar:  "التقويم",
    nav_picks:     "اختيارات Cinemap",
    nav_book:      "احجز تذكرة",
    hero_eyebrow:  "تقويم Cinemap السينمائي",
    hero_line1:    "أهم أفلام",
    hero_sub:      "سنة كاملة من الإثارة والأكشن والكوميديا والرعب — استكشف القائمة الكاملة، واحفظ تذكيرك لكل فيلم.",
    hero_cta:      "استكشف التقويم",
    hero_trailer:  "شاهد العرض الترويجي",
    stat_films:    "فيلم",
    stat_months:   "شهر",
    stat_picks:    "اختيارات Cinemap",
    stat_saudi:    "إنتاج سعودي",
    picks_eyebrow: "12 اختيار من Cinemap",
    picks_title:   "الأفلام التي",
    picks_accent:  "لا تفوّت",
    picks_sub:     "واحد لكل شهر — اختياراتنا الكبرى لسنة 2026",
    now_booking:   "NOW BOOKING",
    cal_eyebrow:   "السنة كاملة · شهرًا بشهر",
    cal_title:     "تقويم",
    cal_title_accent: "2026",
    cal_sub:       "اضغط على أي فيلم لعرض التفاصيل",
    remind:        "ذكّرني",
    reminded:      "✓ تم الحفظ",
    watch_trailer: "شاهد الإعلان",
    hide_trailer:  "إغلاق الإعلان",
    release_date:  "تاريخ العرض",
    countdown:     "العد التنازلي",
    genre_lbl:     "التصنيف",
    orig_title:    "العنوان الأصلي",
    duration:      "المدة",
    age_rating:    "التصنيف العمري",
    days:          "يوم",
    min:           "دقيقة",
    add_calendar:  "أضف للتقويم",
    google_cal:    "Google Calendar",
    apple_cal:     "Apple / iCal",
    outlook_cal:   "Outlook",
    cast:          "أبرز الممثلين",
    close:         "إغلاق",
    film:          "فيلم",
    films_pl:      "أفلام",
    all:           "الكل",
    filter_genre:  "التصنيف",
    filter_exp:    "التجربة",
    no_results:    "لا توجد نتائج لهذا الشهر",
    days_label:    "يوم",
    of:            "من",
    footer_tag:    "عش الفرق · Live the Difference",
    footer_dates:  "جميع التواريخ قابلة للتغيير",
    footer_cal:    "التقويم",
    footer_all:    "جميع الأشهر",
    footer_picks:  "اختيارات Cinemap",
    footer_remind: "تذكيراتي",
    footer_book:   "الحجز",
    footer_halls:  "الصالات",
    footer_shows:  "العروض",
    footer_pkg:    "الباقات",
    footer_about:  "من نحن",
    footer_jobs:   "الوظائف",
    footer_contact:"تواصل معنا",
    released:      "تم الإصدار",
  },
  en: {
    nav_calendar:  "Calendar",
    nav_picks:     "Cinemap Picks",
    nav_book:      "Book Tickets",
    hero_eyebrow:  "Cinemap Cinema Calendar",
    hero_line1:    "Best Films of",
    hero_sub:      "A full year of action, thrills, comedy and horror. Explore the full lineup and set reminders for every film.",
    hero_cta:      "Explore Calendar",
    hero_trailer:  "Watch Sizzle Reel",
    stat_films:    "films",
    stat_months:   "months",
    stat_picks:    "Cinemap picks",
    stat_saudi:    "Saudi productions",
    picks_eyebrow: "12 Cinemap Picks",
    picks_title:   "Films You",
    picks_accent:  "Can't Miss",
    picks_sub:     "One per month — our biggest picks for 2026",
    now_booking:   "NOW BOOKING",
    cal_eyebrow:   "Full Year · Month by Month",
    cal_title:     "Calendar",
    cal_title_accent: "2026",
    cal_sub:       "Tap any film to see full details",
    remind:        "Remind Me",
    reminded:      "✓ Saved",
    watch_trailer: "Watch Trailer",
    hide_trailer:  "Close Trailer",
    release_date:  "Release Date",
    countdown:     "Countdown",
    genre_lbl:     "Genre",
    orig_title:    "Original Title",
    duration:      "Runtime",
    age_rating:    "Rating",
    days:          "days",
    min:           "min",
    add_calendar:  "Add to Calendar",
    google_cal:    "Google Calendar",
    apple_cal:     "Apple / iCal",
    outlook_cal:   "Outlook",
    cast:          "Top Cast",
    close:         "Close",
    film:          "film",
    films_pl:      "films",
    all:           "All",
    filter_genre:  "Genre",
    filter_exp:    "Experience",
    no_results:    "No films match this month",
    days_label:    "days",
    of:            "of",
    footer_tag:    "Live the Difference · عش الفرق",
    footer_dates:  "All dates subject to change",
    footer_cal:    "Calendar",
    footer_all:    "All Months",
    footer_picks:  "Cinemap Picks",
    footer_remind: "My Reminders",
    footer_book:   "Booking",
    footer_halls:  "Cinemas",
    footer_shows:  "Showtimes",
    footer_pkg:    "Packages",
    footer_about:  "About",
    footer_jobs:   "Careers",
    footer_contact:"Contact",
    released:      "Released",
  }
};

// ---------- Utilities ----------
window.fmtDateAr = function(iso) {
  const d = new Date(iso);
  return `${d.getDate()} ${window.MUVI_MONTHS_AR[d.getMonth()]}`;
};
window.fmtDate = function(iso, lang) {
  const d = new Date(iso);
  const day = d.getDate();
  if (lang === 'en') {
    const m = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${m[d.getMonth()]} ${day}`;
  }
  return `${day} ${window.MUVI_MONTHS_AR[d.getMonth()]}`;
};
window.daysUntil = function(iso) {
  return Math.ceil((new Date(iso) - new Date()) / 86400000);
};
