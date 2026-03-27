/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
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
  X,
  MessageCircleHeart
} from 'lucide-react';

interface Blessing {
  id: number;
  name: string;
  message: string;
}

const recipes = [
  {
    title: 'מצות ביתיות',
    desc: 'הכינו בעצמכם מצות פריכות וטעימות תוך פחות מ-18 דקות של עבודה.',
    diff: 'קשה',
    time: '25 דקות',
    img: 'https://images.unsplash.com/photo-1617173945092-1c6622e5b651?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'קניידלך',
    desc: 'הסוד לכדורי מצה אווריריים ומושלמים שפשוט נמסים בפה בתוך המרק.',
    diff: 'בינוני',
    time: '45 דקות',
    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'עוגת אגוזים',
    desc: 'קינוח מושלם ונטול חמץ המשלב אגוזי מלך וניחוחות של שוקולד ותפוז.',
    diff: 'קל',
    time: '60 דקות',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'גפילטע פיש',
    desc: 'קציצות דג מסורתיות בטעם מתקתק עם ציר דגים וגזר.',
    diff: 'קשה',
    time: '120 דקות',
    img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'חרוסת מסורתית',
    desc: 'תערובת מתוקה של תפוחים, אגוזים, יין וקינמון.',
    diff: 'קל',
    time: '15 דקות',
    img: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'צלי בקר ביין',
    desc: 'צלי בקר רך בבישול ארוך עם יין אדום, פטריות ובצל.',
    diff: 'בינוני',
    time: '180 דקות',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'מצה בריי',
    desc: 'שברי מצות מטוגנים עם ביצה, מוגש מתוק או מלוח.',
    diff: 'קל',
    time: '10 דקות',
    img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'מרק עוף צח',
    desc: 'מרק עוף זהוב ועשיר בטעמים, התרופה של סבתא.',
    diff: 'קל',
    time: '120 דקות',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'תפוחי אדמה בתנור',
    desc: 'פלחי תפוחי אדמה פריכים מבחוץ ורכים מבפנים עם רוזמרין.',
    diff: 'קל',
    time: '45 דקות',
    img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'עוגיות בוטנים',
    desc: 'עוגיות בוטנים נימוחות ומושלמות לפסח, נמסות בפה.',
    diff: 'קל',
    time: '20 דקות',
    img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800'
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [blessings, setBlessings] = useState<Blessing[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const fetchBlessings = async () => {
    try {
      const res = await fetch('/api/blessings');
      if (res.ok) {
        const data = await res.json();
        setBlessings(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchBlessings();
    const interval = setInterval(fetchBlessings, 5000);
    return () => clearInterval(interval);
  }, []);

  const submitBlessing = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    try {
      const res = await fetch('/api/blessings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message })
      });
      if (res.ok) {
        setName('');
        setMessage('');
        fetchBlessings();
        setActiveTab('home');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0 relative">
      {/* Marquee Blessings */}
      {blessings.length > 0 && (
        <div className="w-full bg-[#6366f1] text-white py-2 overflow-hidden relative flex items-center z-50">
          <div className="whitespace-nowrap animate-marquee flex gap-12 font-medium">
            {blessings.map((b) => (
              <span key={b.id}>✨ {b.name}: {b.message}</span>
            ))}
            {/* Duplicate for seamless loop */}
            {blessings.map((b) => (
              <span key={`dup-${b.id}`}>✨ {b.name}: {b.message}</span>
            ))}
          </div>
        </div>
      )}

      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-40 bg-[#e8eaf0] neo-raised">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#6366f1] p-2 rounded-xl active:neo-inset transition-all"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <span className="text-2xl font-semibold text-[#6366f1] tracking-tight font-headline">
              פסח ממארק ישראל
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <button onClick={() => setActiveTab('home')} className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'home' ? 'text-[#6366f1] neo-inset' : 'text-slate-500 hover:text-[#6366f1]'}`}>
              ראשי
            </button>
            <button onClick={() => setActiveTab('blessings')} className={`px-4 py-2 rounded-xl transition-all ${activeTab === 'blessings' ? 'text-[#6366f1] neo-inset' : 'text-slate-500 hover:text-[#6366f1]'}`}>
              ברכות
            </button>
          </nav>
          <button className="text-[#6366f1] p-2 rounded-xl active:neo-inset transition-all">
            <Settings size={24} />
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#e8eaf0] neo-raised flex flex-col p-4 gap-4 z-40">
            <button onClick={() => { setActiveTab('home'); setIsMenuOpen(false); }} className={`p-4 rounded-xl font-bold text-right ${activeTab === 'home' ? 'text-[#6366f1] neo-inset' : 'text-slate-500'}`}>
              ראשי
            </button>
            <button onClick={() => { setActiveTab('blessings'); setIsMenuOpen(false); }} className={`p-4 rounded-xl font-bold text-right ${activeTab === 'blessings' ? 'text-[#6366f1] neo-inset' : 'text-slate-500'}`}>
              ברכות
            </button>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">
        {activeTab === 'home' ? (
          <>
            {/* Hero Section */}
            <section className="relative flex flex-col md:flex-row items-center gap-12 pt-12">
              <div className="flex-1 space-y-6 text-center md:text-right">
                <h1 className="text-5xl md:text-7xl font-extrabold text-[#6366f1] tracking-tight leading-tight font-headline">
                  חג פסח
                  <br />
                  כשר ושמח
                </h1>
                <p className="text-xl text-[#585a68] max-w-xl md:ml-0 md:mr-auto leading-relaxed font-medium">
                  חג פסח כשר ושמח! אני מאחל לך ולכל בני ביתך חג אביב שמח. שנצא מעבדות לחירות!
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <button onClick={() => setActiveTab('blessings')} className="px-8 py-4 bg-[#e8eaf0] rounded-2xl neo-raised text-[#6366f1] font-bold text-lg hover:shadow-none active:neo-inset transition-all flex items-center gap-2">
                    <MessageCircleHeart size={20} />
                    השאר ברכה
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
                <p className="text-[#585a68]">ששת סמלי החג המונחים במרכז השולחן ומשמעותם</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Symbol 1: Maror */}
                <div className="flex flex-col items-center text-center p-8 bg-[#e8eaf0] rounded-3xl neo-raised group hover:translate-y-[-4px] transition-transform">
                  <div className="w-20 h-20 rounded-full bg-[#e2e4ea] flex items-center justify-center mb-6 neo-inset group-hover:text-[#6366f1] transition-colors">
                    <Leaf size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-[#2e3040]">מרור</h3>
                  <p className="text-[#585a68] leading-relaxed">זכר למרירות ולשעבוד שחוו בני ישראל במצרים. מזכיר לנו את הסבל לפני הגאולה.</p>
                </div>
                {/* Symbol 2: Chazeret */}
                <div className="flex flex-col items-center text-center p-8 bg-[#e8eaf0] rounded-3xl neo-raised group hover:translate-y-[-4px] transition-transform">
                  <div className="w-20 h-20 rounded-full bg-[#e2e4ea] flex items-center justify-center mb-6 neo-inset group-hover:text-[#6366f1] transition-colors">
                    <Brain size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-[#2e3040]">חזרת</h3>
                  <p className="text-[#585a68] leading-relaxed">משמשת כמרור נוסף, מסמלת את קושי העבודה והשעבוד. נאכלת לרוב יחד עם החרוסת.</p>
                </div>
                {/* Symbol 3: Charoset */}
                <div className="flex flex-col items-center text-center p-8 bg-[#e8eaf0] rounded-3xl neo-raised group hover:translate-y-[-4px] transition-transform">
                  <div className="w-20 h-20 rounded-full bg-[#e2e4ea] flex items-center justify-center mb-6 neo-inset group-hover:text-[#6366f1] transition-colors">
                    <Cake size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-[#2e3040]">חרוסת</h3>
                  <p className="text-[#585a68] leading-relaxed">תערובת מתוקה המזכירה בצבעה ובמרקמה את הטיט שבו השתמשו בני ישראל לבניית ערי המסכנות.</p>
                </div>
                {/* Symbol 4: Karpas */}
                <div className="flex flex-col items-center text-center p-8 bg-[#e8eaf0] rounded-3xl neo-raised group hover:translate-y-[-4px] transition-transform">
                  <div className="w-20 h-20 rounded-full bg-[#e2e4ea] flex items-center justify-center mb-6 neo-inset group-hover:text-[#6366f1] transition-colors">
                    <Sprout size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-[#2e3040]">כרפס</h3>
                  <p className="text-[#585a68] leading-relaxed">ירק המסמל את התחדשות האביב. טובלים אותו במי מלח זכר לדמעות שרעו בני ישראל.</p>
                </div>
                {/* Symbol 5: Zeroa */}
                <div className="flex flex-col items-center text-center p-8 bg-[#e8eaf0] rounded-3xl neo-raised group hover:translate-y-[-4px] transition-transform">
                  <div className="w-20 h-20 rounded-full bg-[#e2e4ea] flex items-center justify-center mb-6 neo-inset group-hover:text-[#6366f1] transition-colors">
                    <Utensils size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-[#2e3040]">זרוע</h3>
                  <p className="text-[#585a68] leading-relaxed">חתיכת בשר צלויה, זכר לקרבן הפסח שהיו מקריבים בבית המקדש בליל התקדש החג.</p>
                </div>
                {/* Symbol 6: Beitzah */}
                <div className="flex flex-col items-center text-center p-8 bg-[#e8eaf0] rounded-3xl neo-raised group hover:translate-y-[-4px] transition-transform">
                  <div className="w-20 h-20 rounded-full bg-[#e2e4ea] flex items-center justify-center mb-6 neo-inset group-hover:text-[#6366f1] transition-colors">
                    <Egg size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-[#2e3040]">ביצה</h3>
                  <p className="text-[#585a68] leading-relaxed">זכר לקרבן חגיגה שהוקרב במקדש, ומסמלת גם אבלות על חורבן הבית (כיוון שאין לה פתח).</p>
                </div>
              </div>
            </section>

            {/* Recipes Section */}
            <section className="space-y-12">
              <div className="flex justify-between items-end">
                <div className="text-right">
                  <h2 className="text-3xl font-bold text-[#2e3040] font-headline">מתכונים לחג</h2>
                  <p className="text-[#585a68]">10 מתכונים מנצחים לשולחן החג</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes.map((recipe, idx) => (
                  <article key={idx} className="bg-[#e8eaf0] rounded-[2rem] p-4 neo-raised overflow-hidden flex flex-col">
                    <div className="aspect-video w-full rounded-2xl mb-6 overflow-hidden neo-inset">
                      <img
                        className="w-full h-full object-cover"
                        alt={recipe.title}
                        src={recipe.img}
                      />
                    </div>
                    <div className="px-2 pb-4 space-y-3 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-[#2e3040]">{recipe.title}</h3>
                      <p className="text-sm text-[#585a68] line-clamp-2 flex-1">
                        {recipe.desc}
                      </p>
                      <div className="flex justify-between items-center pt-4 mt-auto">
                        <span className="text-xs font-semibold px-3 py-1 bg-[#e2e4ea] rounded-full neo-inset text-[#6366f1]">
                          {recipe.diff}
                        </span>
                        <span className="text-xs text-[#585a68] flex items-center gap-1">
                          <Clock size={16} /> {recipe.time}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </>
        ) : (
          /* Blessings Tab */
          <section className="max-w-2xl mx-auto space-y-8 pt-12">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-[#6366f1] mb-4 font-headline">ברכות לחג</h2>
              <p className="text-xl text-[#585a68]">השאירו ברכה חמה לכל אורחי האתר. הברכה שלכם תופיע בשורה הרצה למעלה!</p>
            </div>
            <form onSubmit={submitBlessing} className="bg-[#e8eaf0] p-8 md:p-12 rounded-[3rem] neo-raised space-y-8">
              <div>
                <label className="block text-lg font-bold text-[#2e3040] mb-3">שם (חובה)</label>
                <input 
                  required 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  className="w-full bg-[#e8eaf0] neo-inset rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#6366f1] text-lg transition-all" 
                  placeholder="השם שלך..." 
                />
              </div>
              <div>
                <label className="block text-lg font-bold text-[#2e3040] mb-3">ברכה (חובה)</label>
                <textarea 
                  required 
                  value={message} 
                  onChange={e => setMessage(e.target.value)} 
                  className="w-full bg-[#e8eaf0] neo-inset rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#6366f1] min-h-[150px] text-lg transition-all resize-y" 
                  placeholder="חג שמח לכולם..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-[#e8eaf0] rounded-2xl neo-raised text-[#6366f1] font-bold text-xl hover:shadow-none active:neo-inset transition-all flex justify-center items-center gap-3"
              >
                <MessageCircleHeart size={24} />
                שלח ברכה
              </button>
            </form>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-12 neo-inset bg-[#e8eaf0] mt-12">
        <div className="flex flex-col items-center gap-6 w-full max-w-7xl mx-auto px-6">
          <span className="font-headline font-semibold text-2xl text-[#6366f1]">
            פסח ממארק ישראל
          </span>
          <p className="text-slate-400 text-sm">© 2024 חג שמח. כל הזכויות שמורות.</p>
        </div>
      </footer>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#e8eaf0] rounded-t-3xl neo-raised">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center justify-center px-5 py-2 transition-all ${activeTab === 'home' ? 'text-[#6366f1] neo-inset rounded-2xl scale-95' : 'text-slate-500 hover:text-[#7c3aed]'}`}>
          <Sparkles size={24} />
          <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-medium mt-1">ראשי</span>
        </button>
        <button onClick={() => setActiveTab('blessings')} className={`flex flex-col items-center justify-center px-5 py-2 transition-all ${activeTab === 'blessings' ? 'text-[#6366f1] neo-inset rounded-2xl scale-95' : 'text-slate-500 hover:text-[#7c3aed]'}`}>
          <MessageCircleHeart size={24} />
          <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-medium mt-1">ברכות</span>
        </button>
      </nav>
    </div>
  );
}
