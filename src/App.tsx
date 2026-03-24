/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Menu,
  Settings,
  Leaf,
  Brain,
  Cake,
  Sprout,
  Utensils,
  Egg,
  ChevronLeft,
  Clock,
  ScrollText,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-50 bg-[#e8eaf0] neo-raised">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button className="text-[#6366f1] p-2 rounded-xl active:neo-inset transition-all">
              <Menu size={24} />
            </button>
            <span className="text-2xl font-semibold text-[#6366f1] tracking-tight font-headline">
              פסח משי
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a className="text-[#6366f1] px-4 py-2 rounded-xl neo-inset" href="#">
              ראשי
            </a>
            <a className="text-slate-500 hover:text-[#6366f1] transition-colors" href="#">
              הסדר
            </a>
            <a className="text-slate-500 hover:text-[#6366f1] transition-colors" href="#">
              מתכונים
            </a>
            <a className="text-slate-500 hover:text-[#6366f1] transition-colors" href="#">
              הגדה
            </a>
          </nav>
          <button className="text-[#6366f1] p-2 rounded-xl active:neo-inset transition-all">
            <Settings size={24} />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center gap-12 pt-12">
          <div className="flex-1 space-y-6 text-center md:text-right">
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#6366f1] tracking-tight leading-tight font-headline">
              חג פסח
              <br />
              כשר ושמח
            </h1>
            <p className="text-xl text-[#585a68] max-w-xl md:ml-0 md:mr-auto leading-relaxed">
              ברוכים הבאים לחווית הפסח הדיגיטלית שלכם. גלו מתכונים מסורתיים, קראו בהגדה והתכוננו
              לליל הסדר בסטייל מודרני ונעים.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="px-8 py-4 bg-[#e8eaf0] rounded-2xl neo-raised text-[#6366f1] font-bold text-lg hover:shadow-none active:neo-inset transition-all">
                לצפייה בהגדה
              </button>
              <button className="px-8 py-4 bg-[#e8eaf0] rounded-2xl text-[#585a68] font-medium text-lg hover:text-[#6366f1] transition-colors">
                מתכוני החג
              </button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg aspect-square rounded-[3rem] neo-raised overflow-hidden p-8">
            <div className="w-full h-full rounded-[2rem] bg-[#e2e4ea] neo-inset relative overflow-hidden">
              <img
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                alt="שולחן חג פסח אלגנטי"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCypEkoaP4C0-zfUZQsIrDUUwkR9w-QBv9t_WLPukoN67t9GDV2RlSIiG4dZ1g8pWzUDcU2vE1FmVJ6g9euNWYbgT29DJxkv6Fn7_nLkFoa0_0NYsUktloWPOBFiCbi5r6TWCvMSUYH5slnrwkz1iYnDAERKhseRPbEOoQjwhErJFjaNFLPUnhQmPEsrlJCa1l9fmw_LEyYSZ_Zbcofl-1oDcjK5Et2f9xr-BZ5WnTffpof4FeiPAbG09ygr10FPJWo8M-vfYBPScQ"
              />
            </div>
          </div>
        </section>

        {/* Seder Plate Visual Section */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2e3040] mb-2 font-headline">קערת הסדר</h2>
            <p className="text-[#585a68]">ששת סמלי החג המונחים במרכז השולחן</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Symbol 1: Maror */}
            <div className="flex flex-col items-center p-6 bg-[#e8eaf0] rounded-3xl neo-raised group hover:translate-y-[-4px] transition-transform">
              <div className="w-16 h-16 rounded-full bg-[#e2e4ea] flex items-center justify-center mb-4 neo-inset group-hover:text-[#6366f1] transition-colors">
                <Leaf size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg">מרור</h3>
              <span className="text-sm text-[#585a68]">זיכרון למרירות</span>
            </div>
            {/* Symbol 2: Chazeret */}
            <div className="flex flex-col items-center p-6 bg-[#e8eaf0] rounded-3xl neo-raised group hover:translate-y-[-4px] transition-transform">
              <div className="w-16 h-16 rounded-full bg-[#e2e4ea] flex items-center justify-center mb-4 neo-inset group-hover:text-[#6366f1] transition-colors">
                <Brain size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg">חזרת</h3>
              <span className="text-sm text-[#585a68]">עלי מרור נוספים</span>
            </div>
            {/* Symbol 3: Charoset */}
            <div className="flex flex-col items-center p-6 bg-[#e8eaf0] rounded-3xl neo-raised group hover:translate-y-[-4px] transition-transform">
              <div className="w-16 h-16 rounded-full bg-[#e2e4ea] flex items-center justify-center mb-4 neo-inset group-hover:text-[#6366f1] transition-colors">
                <Cake size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg">חרוסת</h3>
              <span className="text-sm text-[#585a68]">זכר לטיט</span>
            </div>
            {/* Symbol 4: Karpas */}
            <div className="flex flex-col items-center p-6 bg-[#e8eaf0] rounded-3xl neo-raised group hover:translate-y-[-4px] transition-transform">
              <div className="w-16 h-16 rounded-full bg-[#e2e4ea] flex items-center justify-center mb-4 neo-inset group-hover:text-[#6366f1] transition-colors">
                <Sprout size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg">כרפס</h3>
              <span className="text-sm text-[#585a68]">ירק המסמל פריחה</span>
            </div>
            {/* Symbol 5: Zeroa */}
            <div className="flex flex-col items-center p-6 bg-[#e8eaf0] rounded-3xl neo-raised group hover:translate-y-[-4px] transition-transform">
              <div className="w-16 h-16 rounded-full bg-[#e2e4ea] flex items-center justify-center mb-4 neo-inset group-hover:text-[#6366f1] transition-colors">
                <Utensils size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg">זרוע</h3>
              <span className="text-sm text-[#585a68]">זכר לקרבן פסח</span>
            </div>
            {/* Symbol 6: Beitzah */}
            <div className="flex flex-col items-center p-6 bg-[#e8eaf0] rounded-3xl neo-raised group hover:translate-y-[-4px] transition-transform">
              <div className="w-16 h-16 rounded-full bg-[#e2e4ea] flex items-center justify-center mb-4 neo-inset group-hover:text-[#6366f1] transition-colors">
                <Egg size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg">ביצה</h3>
              <span className="text-sm text-[#585a68]">זכר לקרבן חגיגה</span>
            </div>
          </div>
        </section>

        {/* Recipes Section */}
        <section className="space-y-12">
          <div className="flex justify-between items-end">
            <div className="text-right">
              <h2 className="text-3xl font-bold text-[#2e3040] font-headline">מתכונים לחג</h2>
              <p className="text-[#585a68]">הטעמים הקלאסיים של פסח בשדרוג מודרני</p>
            </div>
            <button className="text-[#6366f1] font-bold flex items-center gap-2 hover:underline">
              כל המתכונים
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Recipe Card 1 */}
            <article className="bg-[#e8eaf0] rounded-[2rem] p-4 neo-raised overflow-hidden">
              <div className="aspect-video w-full rounded-2xl mb-6 overflow-hidden neo-inset">
                <img
                  className="w-full h-full object-cover"
                  alt="מצות פריכות בעבודת יד"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIlaPA40pQ4viyuISBDEnuD04zQh27-SqDozIsauc601cvZ4Fr-uPQjh14bNI4Z2mW6GaytPq3XM90hNH9iaKBNUQ77flqGsatrzZenNNDm_s5iYKXZSB9ehAFmeROwv4pgQw5PdTeeOuOeKolSWxxMUERjNUjIyHPmiCdusbj6ndBQquZW5E54UkGYVNE0RPq1LTl74uHhI2jRvTICUsSGqHI8mpWK-dma8BPOJ3rwlVELrr8Wso41OCrzYhj8sNSjveFyw9bd8Q"
                />
              </div>
              <div className="px-2 pb-4 space-y-3">
                <h3 className="text-xl font-bold text-[#2e3040]">מצות ביתיות</h3>
                <p className="text-sm text-[#585a68] line-clamp-2">
                  הכינו בעצמכם מצות פריכות וטעימות תוך פחות מ-18 דקות של עבודה.
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs font-semibold px-3 py-1 bg-[#e2e4ea] rounded-full neo-inset text-[#6366f1]">
                    קשה
                  </span>
                  <span className="text-xs text-[#585a68] flex items-center gap-1">
                    <Clock size={16} /> 25 דקות
                  </span>
                </div>
              </div>
            </article>
            {/* Recipe Card 2 */}
            <article className="bg-[#e8eaf0] rounded-[2rem] p-4 neo-raised overflow-hidden">
              <div className="aspect-video w-full rounded-2xl mb-6 overflow-hidden neo-inset">
                <img
                  className="w-full h-full object-cover"
                  alt="מרק קניידלך מסורתי"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH4--84jLqKyE99vdzo9tQ2FrAKQ6qCN58WepqFv7S2Ju9cTTqzMV_hJoIJDQg9elW0VoRR2tfwDEbB-1yMm58yf5FfuHqviRgGgBr32S215fmYGdGpYJCXC3xgcjLvjsu3OkBsBFweRJSdFNaew4a5DcbXcCjLwS_VjHDHgpAb4wNuhy79tOvCQD5Ywk3-lQzc5QzfJI9b3wyZv_TSsdNG5yNIadRp6jGQ9jt7GGFgjmD8d_PRVA74hSvHyZ7dPvbpsX1RxLjrEs"
                />
              </div>
              <div className="px-2 pb-4 space-y-3">
                <h3 className="text-xl font-bold text-[#2e3040]">קניידלך</h3>
                <p className="text-sm text-[#585a68] line-clamp-2">
                  הסוד לכדורי מצה אווריריים ומושלמים שפשוט נמסים בפה בתוך המרק.
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs font-semibold px-3 py-1 bg-[#e2e4ea] rounded-full neo-inset text-[#6366f1]">
                    בינוני
                  </span>
                  <span className="text-xs text-[#585a68] flex items-center gap-1">
                    <Clock size={16} /> 45 דקות
                  </span>
                </div>
              </div>
            </article>
            {/* Recipe Card 3 */}
            <article className="bg-[#e8eaf0] rounded-[2rem] p-4 neo-raised overflow-hidden">
              <div className="aspect-video w-full rounded-2xl mb-6 overflow-hidden neo-inset">
                <img
                  className="w-full h-full object-cover"
                  alt="עוגת אגוזים עשירה ללא קמח"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAirFInYwCk5U8GAjrawGKma7m1_DEJE9KwNrHm7rS41Zey-nYJ2a_Jj-zOJMFrOXERs1S_fPr2Qfe0g0OSi_BCRkCozY0KhKEDSrWd70HdSWuVHeepQA3raZvKEFiwOuJNnjv6VHmQUgGG1dxqCOsqsqiOO1XRd3zIk351YexX8Axp8z-dtOchaClF4KiWKajPTqHp7Ec-mQZP1O-uhqHqFbMD-L2hwR1Rzy6lVcTX7TpE8Wc23TD5vk6qANRP5fa6cqmjRkWoc0s"
                />
              </div>
              <div className="px-2 pb-4 space-y-3">
                <h3 className="text-xl font-bold text-[#2e3040]">עוגת אגוזים</h3>
                <p className="text-sm text-[#585a68] line-clamp-2">
                  קינוח מושלם ונטול חמץ המשלב אגוזי מלך וניחוחות של שוקולד ותפוז.
                </p>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs font-semibold px-3 py-1 bg-[#e2e4ea] rounded-full neo-inset text-[#6366f1]">
                    קל
                  </span>
                  <span className="text-xs text-[#585a68] flex items-center gap-1">
                    <Clock size={16} /> 60 דקות
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Haggadah Snippet Section */}
        <section className="max-w-4xl mx-auto space-y-8 pb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2e3040] mb-2 font-headline">מתוך ההגדה</h2>
            <div className="w-16 h-1 bg-[#6366f1] mx-auto rounded-full"></div>
          </div>
          <div className="bg-[#e8eaf0] rounded-[3rem] p-8 md:p-12 neo-raised text-center relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -top-12 -right-12 opacity-5 pointer-events-none text-[#2e3040]">
              <ScrollText size={280} strokeWidth={1} />
            </div>
            <h3 className="text-4xl font-extrabold text-[#6366f1] mb-12 font-headline relative z-10">
              מה נשתנה?
            </h3>
            <div className="space-y-8 text-xl md:text-2xl text-[#2e3040] leading-loose font-medium relative z-10">
              <p>מַה נִּשְׁתַּנָּה הַלַּיְלָה הַזֶּה מִכָּל הַלֵּילוֹת?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right px-2 md:px-12">
                <div className="p-6 rounded-2xl neo-inset">
                  <p className="text-lg opacity-60 mb-2">.1</p>
                  <p>שֶׁבְּכָל הַלֵּילוֹת אָנוּ אוֹכְלִין חָמֵץ וּמַצָּה, הַלַּיְלָה הַזֶּה כֻּלּוֹ מַצָּה.</p>
                </div>
                <div className="p-6 rounded-2xl neo-inset">
                  <p className="text-lg opacity-60 mb-2">.2</p>
                  <p>שֶׁבְּכָל הַלֵּילוֹת אָנוּ אוֹכְלִין שְׁאָר יְרָקוֹת, הַלַּיְלָה הַזֶּה מָרוֹר.</p>
                </div>
                <div className="p-6 rounded-2xl neo-inset">
                  <p className="text-lg opacity-60 mb-2">.3</p>
                  <p>
                    שֶׁבְּכָל הַלֵּילוֹת אֵין אָנוּ מַטְבִּילִין אֲפִילוּ פַּעַם אֶחָת, הַלַּיְלָה הַזֶּה שְׁתֵּי
                    פְעָמִים.
                  </p>
                </div>
                <div className="p-6 rounded-2xl neo-inset">
                  <p className="text-lg opacity-60 mb-2">.4</p>
                  <p>
                    שֶׁבְּכָל הַלֵּילוֹת אָנוּ אוֹכְלִין בֵּין יוֹשְׁבִין וּבֵין מְסֻבִּין, הַלַּיְלָה הַזֶּה כֻּלָּנוּ
                    מְסֻבִּין.
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-12 px-10 py-3 rounded-full neo-raised text-[#6366f1] font-bold hover:shadow-none active:neo-inset transition-all flex items-center gap-2 mx-auto relative z-10">
              <BookOpen size={20} />
              קראו את ההגדה המלאה
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 neo-inset bg-[#e8eaf0] mt-12">
        <div className="flex flex-col items-center gap-6 w-full max-w-7xl mx-auto px-6">
          <span className="font-headline font-semibold text-2xl text-[#6366f1]">
            פסח משי
          </span>
          <div className="flex flex-wrap justify-center gap-8 font-['Plus_Jakarta_Sans'] text-sm">
            <a className="text-slate-500 hover:text-[#6366f1] transition-colors" href="#">
              מסורת
            </a>
            <a className="text-slate-500 hover:text-[#6366f1] transition-colors" href="#">
              קהילה
            </a>
            <a className="text-slate-500 hover:text-[#6366f1] transition-colors" href="#">
              פרטיות
            </a>
          </div>
          <p className="text-slate-400 text-xs">© 2024 חג שמח. כל הזכויות שמורות.</p>
        </div>
      </footer>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#e8eaf0] rounded-t-3xl neo-raised">
        <button className="flex flex-col items-center justify-center text-[#6366f1] neo-inset rounded-2xl px-5 py-2 scale-95 duration-200">
          <Sparkles size={24} />
          <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-medium mt-1">ראשי</span>
        </button>
        <button className="flex flex-col items-center justify-center text-slate-500 px-5 py-2 hover:text-[#7c3aed] transition-colors">
          <Utensils size={24} />
          <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-medium mt-1">הסדר</span>
        </button>
        <button className="flex flex-col items-center justify-center text-slate-500 px-5 py-2 hover:text-[#7c3aed] transition-colors">
          <BookOpen size={24} />
          <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-medium mt-1">מתכונים</span>
        </button>
        <button className="flex flex-col items-center justify-center text-slate-500 px-5 py-2 hover:text-[#7c3aed] transition-colors">
          <ScrollText size={24} />
          <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-medium mt-1">הגדה</span>
        </button>
      </nav>
    </div>
  );
}
