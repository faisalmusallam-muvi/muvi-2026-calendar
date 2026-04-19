// muvi 2026 — movies extracted from the social media calendar references
// Each movie: { ar, en, genre, date (YYYY-MM-DD), pick (bool), tmdbId, poster, backdrop, overview, runtime, rating, director, cast }
// Poster/backdrop URLs use TMDB's public CDN (image.tmdb.org). Fallback handled at render.

const TMDB_IMG = 'https://image.tmdb.org/t/p/w500';
const TMDB_BG  = 'https://image.tmdb.org/t/p/w1280';

window.MUVI_MOVIES_2026 = [
  // JANUARY — يناير
  { month: 0, ar: "28 Years Later: The Bone Temple", en: "28 Years Later: The Bone Temple", genre: "horror", date: "2026-01-15", pick: true,
    tmdbId: 1272837,
    overview: "الجزء الثاني من الثلاثية التي تتبّع عالماً ما بعد تفشي الفيروس بعد 28 عاماً.", runtime: 115, rating: "R" },
  { month: 0, ar: "دورايمون", en: "Doraemon: Nobita's Art World Tales", genre: "animation", date: "2026-01-08",
    tmdbId: 1277309, overview: "مغامرة جديدة للقط الروبوت دورايمون وصديقه نوبيتا في عالم الفن.", runtime: 104, rating: "PG" },
  { month: 0, ar: "Primate", en: "Primate", genre: "thriller", date: "2026-01-22",
    overview: "تشويق نفسي يدور حول تجارب طبية سرية.", runtime: 108, rating: "R" },
  { month: 0, ar: "Mercy", en: "Mercy", genre: "drama", date: "2026-01-22",
    overview: "دراما تدور حول رحمة، محاكمة، وسؤال أخلاقي صعب.", runtime: 118, rating: "PG-13" },
  { month: 0, ar: "Return to Silent Hill", en: "Return to Silent Hill", genre: "horror", date: "2026-01-29",
    tmdbId: 680493, overview: "عودة إلى المدينة الضبابية الأكثر رعباً في تاريخ ألعاب الفيديو.", runtime: 125, rating: "R" },
  { month: 0, ar: "Send Help", en: "Send Help", genre: "thriller", date: "2026-01-29",
    overview: "رعب نفسي يدور حول شخصين عالقين على جزيرة نائية.", runtime: 96, rating: "R" },

  // FEBRUARY — فبراير
  { month: 1, ar: "Cold Storage", en: "Cold Storage", genre: "action", date: "2026-02-05",
    overview: "تشويق علمي — كائن مجمّد من الماضي يعود للحياة.", runtime: 110, rating: "PG-13" },
  { month: 1, ar: "Scream 7", en: "Scream 7", genre: "horror", date: "2026-02-12", pick: true,
    tmdbId: 1159559, overview: "عودة Ghostface — سيدني بريسكوت تواجه قاتلاً جديداً.", runtime: 118, rating: "R" },
  { month: 1, ar: "Crime 101", en: "Crime 101", genre: "thriller", date: "2026-02-19",
    tmdbId: 1171145, overview: "تحقيق جرائم مبني على رواية دون وينسلو.", runtime: 122, rating: "R" },
  { month: 1, ar: "Wuthering Heights", en: "Wuthering Heights", genre: "drama", date: "2026-02-19",
    tmdbId: 1316092, overview: "اقتباس جديد لرواية إميلي برونتي الكلاسيكية — قصة حب قاتلة على المروج الإنجليزية.", runtime: 130, rating: "PG-13" },
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
    tmdbId: 1327819, overview: "فيلم أنيميشن من بيكسار — بطلته فتاة تنتقل وعيها إلى جسم قندس روبوتي.", runtime: 98, rating: "PG" },
  { month: 2, ar: "شباب البومب 3", en: "Shabab Al Bomb 3", genre: "saudi", date: "2026-03-26", pick: true,
    overview: "الجزء الثالث من المسلسل الكوميدي السعودي الأيقوني — عودة الشباب إلى السينما.", runtime: 120, rating: "PG-13" },
  { month: 2, ar: "Project Hail Mary", en: "Project Hail Mary", genre: "scifi", date: "2026-03-26",
    tmdbId: 687163, overview: "اقتباس لرواية آندي واير — رائد فضاء يستيقظ ليجد نفسه وحيداً في مهمة لإنقاذ الأرض.", runtime: 135, rating: "PG-13" },

  // APRIL — أبريل
  { month: 3, ar: "Super Mario Galaxy", en: "The Super Mario Galaxy Movie", genre: "animation", date: "2026-04-03", pick: true,
    tmdbId: 1226863, overview: "ماريو ولويجي ينطلقان في مغامرة كونية جديدة عبر المجرة.", runtime: 95, rating: "PG" },
  { month: 3, ar: "Michael", en: "Michael", genre: "drama", date: "2026-04-10",
    tmdbId: 936075, overview: "سيرة ذاتية لملك البوب مايكل جاكسون.", runtime: 140, rating: "PG-13" },
  { month: 3, ar: "The Devil Wears Prada 2", en: "The Devil Wears Prada 2", genre: "comedy", date: "2026-04-17",
    tmdbId: 1314481, overview: "عودة ميراندا بريستلي بعد عقدين من الفيلم الأصلي.", runtime: 110, rating: "PG-13" },
  { month: 3, ar: "The Goat", en: "The Goat", genre: "drama", date: "2026-04-24",
    overview: "دراما رياضية عن أعظم لاعب في التاريخ.", runtime: 120, rating: "PG-13" },

  // MAY — مايو
  { month: 4, ar: "Star Wars: The Mandalorian and Grogu", en: "The Mandalorian and Grogu", genre: "scifi", date: "2026-05-22", pick: true,
    tmdbId: 1228710, overview: "أول فيلم سينمائي لسلسلة The Mandalorian — ماندو وغروغو في مغامرة جديدة.", runtime: 130, rating: "PG" },
  { month: 4, ar: "The Sheep Detectives", en: "The Sheep Detectives", genre: "animation", date: "2026-05-08",
    tmdbId: 1301421, overview: "ثلاثة خراف يحلّون جريمة قتل في قرية إيرلندية — تحقيق كوميدي مثير بأصوات هيو جاكمان وإيما تومبسون.", runtime: 96, rating: "PG" },

  // JUNE — يونيو
  { month: 5, ar: "Supergirl", en: "Supergirl: Woman of Tomorrow", genre: "action", date: "2026-06-26",
    tmdbId: 1081003, overview: "كارا زور-إل تنطلق في مغامرة عبر المجرات.", runtime: 128, rating: "PG-13" },
  { month: 5, ar: "Disclosure Day", en: "Disclosure Day", genre: "thriller", date: "2026-06-12",
    overview: "إثارة سياسية — يوم يُكشف فيه كل شيء.", runtime: 115, rating: "R" },
  { month: 5, ar: "Toy Story 5", en: "Toy Story 5", genre: "animation", date: "2026-06-19", pick: true,
    tmdbId: 1084244, overview: "ودي، باز، وكل اللعب عادوا — هذه المرة ضد تحدٍ تقني جديد.", runtime: 102, rating: "G" },
  { month: 5, ar: "Master of the Universe", en: "Masters of the Universe", genre: "action", date: "2026-06-05",
    tmdbId: 454639, overview: "هي-مان وأبطال Eternia في فيلم لايف آكشن جديد.", runtime: 125, rating: "PG-13" },

  // JULY — يوليو
  { month: 6, ar: "Minions 3", en: "Minions 3", genre: "animation", date: "2026-07-01",
    overview: "الجزء الثالث من مغامرات المنيونز الصفراء.", runtime: 92, rating: "PG" },
  { month: 6, ar: "Moana", en: "Moana (Live Action)", genre: "animation", date: "2026-07-10",
    tmdbId: 1108427, overview: "النسخة الحية من فيلم ديزني الكلاسيكي — موانا تعود إلى المحيط.", runtime: 118, rating: "PG" },
  { month: 6, ar: "The Odyssey", en: "The Odyssey", genre: "drama", date: "2026-07-17", pick: true,
    tmdbId: 1368337, overview: "ملحمة كريستوفر نولان — رحلة أوديسيوس من طروادة إلى الوطن.", runtime: 165, rating: "PG-13" },
  { month: 6, ar: "Spider-Man: Brand New Day", en: "Spider-Man: Brand New Day", genre: "action", date: "2026-07-24",
    tmdbId: 969681, overview: "الرجل العنكبوت في فصل جديد تماماً.", runtime: 135, rating: "PG-13" },
  { month: 6, ar: "Evil Dead Burn", en: "Evil Dead Burn", genre: "horror", date: "2026-07-31",
    overview: "الجزء الجديد من سلسلة Evil Dead — الشياطين تحترق.", runtime: 100, rating: "R" },

  // AUGUST — أغسطس
  { month: 7, ar: "Insidious 6", en: "Insidious: 6", genre: "horror", date: "2026-08-07",
    overview: "عودة عائلة Lambert إلى العالم الآخر.", runtime: 108, rating: "PG-13" },
  { month: 7, ar: "Mutiny", en: "Mutiny", genre: "action", date: "2026-08-14",
    overview: "أكشن بحري عن تمرد على سفينة قرصنة.", runtime: 118, rating: "R" },
  { month: 7, ar: "Coyote vs. ACME", en: "Coyote vs. Acme", genre: "animation", date: "2026-08-21", pick: true,
    tmdbId: 1204680, overview: "الذئب القيوط يقاضي شركة ACME بعد سلسلة من الحوادث.", runtime: 98, rating: "PG" },

  // SEPTEMBER — سبتمبر
  { month: 8, ar: "Forgotten Island", en: "Forgotten Island", genre: "thriller", date: "2026-09-04",
    overview: "إثارة على جزيرة مهجورة تخفي أسرار كثيرة.", runtime: 112, rating: "PG-13" },
  { month: 8, ar: "Resident Evil", en: "Resident Evil", genre: "horror", date: "2026-09-18", pick: true,
    overview: "إعادة تشغيل سلسلة Resident Evil — شركة أمبريلا تعود.", runtime: 130, rating: "R" },
  { month: 8, ar: "Clayface", en: "Clayface", genre: "horror", date: "2026-09-11",
    tmdbId: 1400940, overview: "قصة الشرير الأيقوني Clayface من عالم DC.", runtime: 115, rating: "R" },

  // OCTOBER — أكتوبر
  { month: 9, ar: "Street Fighter", en: "Street Fighter", genre: "action", date: "2026-10-16", pick: true,
    tmdbId: 1153576, overview: "اقتباس لايف آكشن للعبة القتال الأيقونية.", runtime: 120, rating: "PG-13" },
  { month: 9, ar: "Digger", en: "Digger", genre: "drama", date: "2026-10-02",
    overview: "دراما مؤثرة عن عمال المناجم.", runtime: 118, rating: "PG-13" },
  { month: 9, ar: "The Social Reckoning", en: "The Social Reckoning", genre: "drama", date: "2026-10-09",
    overview: "فيلم عن الجانب المظلم لوسائل التواصل الاجتماعي.", runtime: 125, rating: "R" },
  { month: 9, ar: "Remain", en: "Remain", genre: "thriller", date: "2026-10-23",
    overview: "إثارة نفسية مقتبسة عن رواية نيكولاس سباركس.", runtime: 110, rating: "PG-13" },

  // NOVEMBER — نوفمبر
  { month: 10, ar: "Meet the Parents 4", en: "Meet the Parents: A Little Fokking in the House", genre: "comedy", date: "2026-11-06",
    overview: "عودة غريغ فوكر وعائلته في مغامرة كوميدية جديدة.", runtime: 108, rating: "PG-13" },
  { month: 10, ar: "Hexed", en: "Hexed", genre: "horror", date: "2026-11-13",
    overview: "رعب عن لعنة قديمة تطارد عائلة.", runtime: 102, rating: "R" },
  { month: 10, ar: "The Cat in the Hat", en: "The Cat in the Hat", genre: "animation", date: "2026-11-20", pick: true,
    tmdbId: 1074313, overview: "قطة الدكتور سوس الشهيرة في نسخة أنيميشن جديدة.", runtime: 92, rating: "G" },
  { month: 10, ar: "The Hunger Games", en: "The Hunger Games: Sunrise on the Reaping", genre: "action", date: "2026-11-20",
    tmdbId: 1300968, overview: "ألعاب الجوع — قصة هايمتش أبرناثي قبل كاتنيس بعقود.", runtime: 140, rating: "PG-13" },

  // DECEMBER — ديسمبر
  { month: 11, ar: "Dune 3", en: "Dune: Part Three", genre: "scifi", date: "2026-12-18",
    tmdbId: 1935783, overview: "الجزء الثالث من ملحمة ديون — بول أتريديس إمبراطور الكون.", runtime: 170, rating: "PG-13" },
  { month: 11, ar: "Jumanji 3", en: "Jumanji 3", genre: "comedy", date: "2026-12-11",
    overview: "عودة الأبطال إلى العالم الأكثر خطورة في ألعاب الفيديو.", runtime: 118, rating: "PG-13" },
  { month: 11, ar: "Avengers: Doomsday", en: "Avengers: Doomsday", genre: "action", date: "2026-12-18", pick: true,
    tmdbId: 1003596, overview: "المنتقمون يواجهون أخطر تهديد في تاريخ MCU — دكتور دووم.", runtime: 160, rating: "PG-13" },
];

window.MUVI_MONTHS_AR = [
  "يناير","فبراير","مارس","أبريل","مايو","يونيو",
  "يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"
];
window.MUVI_MONTHS_EN = [
  "JAN","FEB","MAR","APR","MAY","JUN",
  "JUL","AUG","SEP","OCT","NOV","DEC"
];

window.MUVI_GENRES = {
  horror:    { ar: "رعب",      color: "#e0004d" },
  action:    { ar: "أكشن",     color: "#ffa300" },
  drama:     { ar: "دراما",    color: "#004b87" },
  comedy:    { ar: "كوميدي",   color: "#009a44" },
  animation: { ar: "أنيميشن",  color: "#05c3de" },
  scifi:     { ar: "خيال علمي", color: "#772583" },
  thriller:  { ar: "إثارة",    color: "#ffa300" },
  saudi:     { ar: "سعودي",    color: "#009a44" },
};

