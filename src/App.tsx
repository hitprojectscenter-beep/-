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
  Clock,
  ScrollText,
  BookOpen,
  Sparkles,
  X,
  MessageCircleHeart,
  ChefHat
} from 'lucide-react';

interface Blessing {
  id: number;
  name: string;
  message: string;
}

interface Recipe {
  title: string;
  desc: string;
  diff: string;
  time: string;
  img: string;
  ingredients: string[];
  instructions: string[];
}

const recipes: Recipe[] = [
  {
    title: 'מצות ביתיות',
    desc: 'הכינו בעצמכם מצות פריכות וטעימות תוך פחות מ-18 דקות של עבודה.',
    diff: 'קשה',
    time: '25 דקות',
    img: 'https://images.unsplash.com/photo-1617173945092-1c6622e5b651?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '2 כוסות קמח חיטה (שמור במקום יבש וקריר)',
      '1/2 כוס מים קרים',
      'קורט מלח'
    ],
    instructions: [
      'מחממים תנור לחום המקסימלי (250 מעלות) עם תבנית אפייה בפנים.',
      'מערבבים את הקמח והמים בקערה ולשים במהירות לבצק אחיד.',
      'מחלקים את הבצק לכדורים קטנים ומרדדים כל כדור לעלה דק מאוד.',
      'מחוררים את העלים בעזרת מזלג כדי למנוע תפיחה.',
      'אופים בתנור החם במשך 2-3 דקות עד להזהבה קלה. שימו לב: כל התהליך חייב להסתיים תוך 18 דקות!'
    ]
  },
  {
    title: 'קניידלך',
    desc: 'הסוד לכדורי מצה אווריריים ומושלמים שפשוט נמסים בפה בתוך המרק.',
    diff: 'בינוני',
    time: '45 דקות',
    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 כוס קמח מצה',
      '2 ביצים גדולות',
      '2 כפות שמן',
      '1/2 כוס מים רותחים',
      'מלח ופלפל שחור לפי הטעם'
    ],
    instructions: [
      'בקערה, מערבבים את קמח המצה עם המלח והפלפל.',
      'מוסיפים את השמן והמים הרותחים ומערבבים היטב לתערובת אחידה.',
      'מוסיפים את הביצים ומערבבים שוב. מכסים את הקערה ומעבירים למקרר ל-30 דקות להתייצבות.',
      'מרתיחים סיר עם מי מלח או מרק עוף.',
      'יוצרים כדורים קטנים בידיים רטובות ומבשלים בסיר כ-10 דקות עד שהם צפים ורכים.'
    ]
  },
  {
    title: 'עוגת אגוזים',
    desc: 'קינוח מושלם ונטול חמץ המשלב אגוזי מלך וניחוחות של שוקולד ותפוז.',
    diff: 'קל',
    time: '60 דקות',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '6 ביצים מופרדות לחלבונים וחלמונים',
      '1.5 כוסות סוכר',
      '2 כוסות אגוזי מלך טחונים דק',
      '3 כפות קמח מצה',
      'קליפה מגורדת מתפוז אחד'
    ],
    instructions: [
      'מחממים תנור ל-170 מעלות ומשמנים תבנית אפייה.',
      'מקציפים את החלבונים עם חצי כמות הסוכר עד לקבלת קצף יציב ומבריק.',
      'בקערה נפרדת, מקציפים את החלמונים עם שאר הסוכר עד לקבלת תערובת תפוחה ובהירה.',
      'מקפלים את האגוזים, קמח המצה וקליפת התפוז לתערובת החלמונים.',
      'מקפלים בעדינות את קצף החלבונים לתערובת האגוזים, יוצקים לתבנית ואופים כ-45 דקות.'
    ]
  },
  {
    title: 'גפילטע פיש',
    desc: 'קציצות דג מסורתיות בטעם מתקתק עם ציר דגים וגזר.',
    diff: 'קשה',
    time: '120 דקות',
    img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 ק"ג קרפיון טחון (ללא אדרות)',
      '2 בצלים גדולים',
      '2 ביצים',
      '3 כפות קמח מצה',
      '2 גזרים פרוסים',
      'מלח, פלפל שחור וסוכר לפי הטעם'
    ],
    instructions: [
      'טוחנים בצל אחד דק ומערבבים בקערה עם הדג הטחון, הביצים, קמח המצה, מלח, פלפל ומעט סוכר.',
      'מכינים את הציר: בסיר רחב מרתיחים מים עם הבצל השני (חתוך לרבעים), פרוסות הגזר, מלח, פלפל וסוכר.',
      'יוצרים קציצות אובליות מתערובת הדג בעזרת ידיים רטובות.',
      'מכניסים את הקציצות בעדינות לציר הרותח, מנמיכים את האש ומכסים את הסיר.',
      'מבשלים על אש נמוכה כשעתיים. מקררים היטב ומגישים עם פרוסת גזר וחזרת.'
    ]
  },
  {
    title: 'חרוסת מסורתית',
    desc: 'תערובת מתוקה של תפוחים, אגוזים, יין וקינמון.',
    diff: 'קל',
    time: '15 דקות',
    img: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '2 תפוחים ירוקים או אדומים',
      '1 כוס אגוזי מלך קצוצים דק',
      '1/2 כוס יין אדום מתוק (תירוש או יין פטישים)',
      '1 כפית קינמון טחון',
      '2 כפות סילאן או דבש'
    ],
    instructions: [
      'קולפים את התפוחים ומגרדים אותם בפומפייה דקה לתוך קערה.',
      'מוסיפים לקערה את אגוזי המלך הקצוצים.',
      'מתבלים בקינמון, סילאן (או דבש) ומוזגים את היין האדום.',
      'מערבבים היטב את כל המרכיבים עד לקבלת עיסה אחידה במרקם המזכיר טיט.',
      'שומרים בכלי אטום במקרר עד להגשה בליל הסדר.'
    ]
  },
  {
    title: 'צלי בקר ביין',
    desc: 'צלי בקר רך בבישול ארוך עם יין אדום, פטריות ובצל.',
    diff: 'בינוני',
    time: '180 דקות',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1.5 ק"ג בקר לצלי (נתח מספר 5 - צלי כתף)',
      '2 בצלים גדולים קצוצים',
      '2 כוסות יין אדום יבש',
      '2 כוסות ציר בקר או מים',
      '4 שיני שום שלמות',
      'עלי דפנה, פלפל אנגלי, מלח ופלפל שחור'
    ],
    instructions: [
      'בסיר כבד וגדול, מחממים שמן וצורבים את נתח הבשר מכל הכיוונים עד להשחמה. מוציאים לצלחת.',
      'באותו סיר, מטגנים את הבצלים והשום עד להזהבה.',
      'מחזירים את הבשר לסיר, מוסיפים את היין האדום, הציר והתבלינים ומביאים לרתיחה.',
      'מנמיכים את האש למינימום, מכסים ומבשלים כ-3 שעות עד שהבשר רך מאוד (אפשר גם בתנור ב-150 מעלות).',
      'מקררים את הבשר לחלוטין (רצוי לילה במקרר), פורסים לפרוסות יפות ומחממים שוב בתוך הרוטב לפני ההגשה.'
    ]
  },
  {
    title: 'מצה בריי',
    desc: 'שברי מצות מטוגנים עם ביצה, מוגש מתוק או מלוח.',
    diff: 'קל',
    time: '10 דקות',
    img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '3 מצות',
      '2 ביצים',
      '1/4 כוס חלב או מים',
      'חמאה או שמן לטיגון',
      'לגרסה מלוחה: מלח ופלפל',
      'לגרסה מתוקה: סוכר וקינמון'
    ],
    instructions: [
      'שוברים את המצות לחתיכות קטנות לתוך קערה, יוצקים מעל מים חמים ומשרים לדקה.',
      'מסננים וסוחטים היטב את המצות מהמים.',
      'בקערה נפרדת, טורפים את הביצים עם החלב והתבלינים (לפי הגרסה שבחרתם).',
      'מוסיפים את המצות הסחוטות לתערובת הביצים ומערבבים.',
      'מחממים חמאה או שמן במחבת, יוצקים את התערובת ומטגנים כחביתה שלמה או כמקושקשת עד להזהבה משני הצדדים.'
    ]
  },
  {
    title: 'מרק עוף צח',
    desc: 'מרק עוף זהוב ועשיר בטעמים, התרופה של סבתא.',
    diff: 'קל',
    time: '120 דקות',
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 עוף שלם מחולק (או כרעיים וכנפיים)',
      '4 גזרים קלופים',
      '2 קישואים',
      '1 בצל גדול שלם (קלוף)',
      'שורש סלרי ושורש פטרוזיליה',
      'צרור שמיר ופטרוזיליה',
      'מלח ופלפל שחור שלם'
    ],
    instructions: [
      'מניחים את חלקי העוף בסיר גדול, מכסים בשפע מים ומביאים לרתיחה.',
      'מקפים (מסירים) את הקצף האפור שמצטבר למעלה בעזרת כף מחוררת.',
      'מוסיפים לסיר את כל הירקות (שלמים או חתוכים גס), השורשים ועשבי התיבול.',
      'מתבלים במלח וגרגרי פלפל שחור, מנמיכים את האש ומכסים חלקית.',
      'מבשלים על אש קטנה כשעתיים. מסננים את המרק לקבלת נוזל צח, או מגישים עם הירקות והעוף.'
    ]
  },
  {
    title: 'תפוחי אדמה בתנור',
    desc: 'פלחי תפוחי אדמה פריכים מבחוץ ורכים מבפנים עם רוזמרין.',
    diff: 'קל',
    time: '45 דקות',
    img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '1 ק"ג תפוחי אדמה קטנים (רצוי מזן ראטה או באטר)',
      '4 כפות שמן זית איכותי',
      '3 שיני שום כתושות',
      '2 ענפי רוזמרין טרי',
      'מלח גס ופלפל שחור גרוס'
    ],
    instructions: [
      'מחממים תנור ל-200 מעלות. שוטפים היטב את תפוחי האדמה וחוצים אותם (אין צורך לקלוף).',
      'מבשלים את תפוחי האדמה בסיר עם מים רותחים ומומלחים כ-10 דקות, עד שהם מתחילים להתרכך אך עדיין יציבים. מסננים היטב.',
      'בקערה גדולה, מערבבים את תפוחי האדמה החמים עם שמן זית, שום, עלי רוזמרין, מלח ופלפל.',
      'מפזרים את תפוחי האדמה בתבנית אפייה בשכבה אחת (רצוי כשהצד החתוך כלפי מטה).',
      'אופים כ-30-40 דקות עד שתפוחי האדמה פריכים וזהובים מאוד.'
    ]
  },
  {
    title: 'עוגיות בוטנים',
    desc: 'עוגיות בוטנים נימוחות ומושלמות לפסח, נמסות בפה.',
    diff: 'קל',
    time: '20 דקות',
    img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800',
    ingredients: [
      '3 כוסות בוטנים קלויים (ללא מלח) וטחונים דק',
      '1 כוס סוכר',
      '2 ביצים',
      '1 כפית תמצית וניל איכותית',
      'אבקת סוכר לציפוי'
    ],
    instructions: [
      'מחממים תנור ל-170 מעלות ומרפדים תבנית בנייר אפייה.',
      'בקערה, מערבבים את הבוטנים הטחונים עם הסוכר.',
      'מוסיפים את הביצים ותמצית הווניל ולשים בעזרת הידיים עד לקבלת בצק אחיד ודביק מעט.',
      'מרטיבים מעט את הידיים ויוצרים מהבצק כדורים קטנים (בגודל אגוז מלך).',
      'מגלגלים כל כדור בנדיבות באבקת סוכר ומניחים בתבנית במרווחים.',
      'אופים כ-12-15 דקות עד שהעוגיות נסדקות. מוציאים מהתנור כשהן עדיין רכות (הן יתקשו בצינון).'
    ]
  }
];

const sederSymbols = [
  {
    icon: Leaf,
    title: 'מרור',
    desc: 'מסמל את המרירות והסבל שחוו בני ישראל בשעבוד מצרים. נהוג להשתמש בחסה או בשורש חזרת מגורד. אכילת המרור מזכירה לנו שגם ברגעי חירות, עלינו לזכור את טעם העבדות כדי להעריך את החופש. הטעם המר והחריף מעורר דמעות, ממש כפי שדמעו אבותינו תחת עול המצרים. זוהי תזכורת היסטורית ומוסרית חזקה לדורות.'
  },
  {
    icon: Brain,
    title: 'חזרת',
    desc: 'משמשת כמרור נוסף ונאכלת יחד עם המרור הראשון או בכריכת "כורך" עם מצה וחרוסת. לרוב מדובר בשורש חריף או עלי חסה מרירים. החזרת מסמלת את קושי העבודה והשעבוד שהלכו והחמירו עם הזמן. השילוב שלה עם החרוסת המתוקה מסמל את התקווה והאמונה גם בזמנים הקשים ביותר.'
  },
  {
    icon: Cake,
    title: 'חרוסת',
    desc: 'תערובת מתוקה של תפוחים, אגוזים, תמרים, יין וקינמון. צבעה ומרקמה מזכירים את הטיט שבו השתמשו בני ישראל לבניית ערי המסכנות במצרים. למרות משמעותה הקשורה לעבדות, טעמה מתוק ומסמל את התקווה והגאולה. נהוג לטבול בה את המרור כדי להמתיק מעט את טעם הסבל. כל עדה מכינה את החרוסת לפי מסורת ייחודית משלה.'
  },
  {
    icon: Sprout,
    title: 'כרפס',
    desc: 'ירק (לרוב תפוח אדמה, סלרי או פטרוזיליה) המסמל את התחדשות האביב והתקווה. בתחילת הסדר טובלים את הכרפס במי מלח ואוכלים אותו. מי המלח מסמלים את הדמעות שרעו בני ישראל בעבודת הפרך. אכילת הכרפס נועדה גם לעורר את סקרנותם של הילדים כדי שישאלו "מה נשתנה".'
  },
  {
    icon: Utensils,
    title: 'זרוע',
    desc: 'חתיכת בשר צלויה עם עצם, לרוב זרוע של כבש או כנף עוף. הזרוע משמשת זכר לקרבן הפסח שהיו מקריבים בבית המקדש בירושלים בליל התקדש החג. היא מסמלת גם את "הזרוע הנטויה" שבה הוציא אלוהים את בני ישראל ממצרים. את הזרוע לא אוכלים במהלך הסדר, אלא היא נשארת על הקערה כסמל בלבד.'
  },
  {
    icon: Egg,
    title: 'ביצה',
    desc: 'ביצה קשה וצלויה, זכר לקרבן חגיגה שהוקרב בבית המקדש. הביצה מסמלת גם אבלות על חורבן בית המקדש, כיוון שאין לה פתח (כמו לאבל שאין לו מילים). בנוסף, הביצה מסמלת את מעגל החיים, ההמשכיות והתקווה לעתיד טוב יותר. בניגוד למאכלים אחרים שמתרככים בבישול, הביצה מתקשה, מה שמסמל את עמידותו של עם ישראל מול קשיים.'
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [blessings, setBlessings] = useState<Blessing[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

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
      {/* Recipe Modal */}
      {selectedRecipe && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setSelectedRecipe(null)}
        >
          <div 
            className="bg-[#e8eaf0] rounded-[2rem] p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto neo-raised relative"
            onClick={e => e.stopPropagation()}
            dir="rtl"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-[#6366f1] font-headline mb-2">{selectedRecipe.title}</h2>
                <div className="flex items-center gap-4 text-sm text-[#585a68]">
                  <span className="flex items-center gap-1"><Clock size={16} /> {selectedRecipe.time}</span>
                  <span className="px-2 py-1 bg-[#e2e4ea] rounded-md neo-inset font-medium">{selectedRecipe.diff}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedRecipe(null)} 
                className="p-2 rounded-full bg-[#e2e4ea] neo-inset text-[#585a68] hover:text-[#2e3040] transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <img 
              src={selectedRecipe.img} 
              alt={selectedRecipe.title} 
              className="w-full h-64 object-cover rounded-2xl mb-8 neo-inset" 
            />
            
            <div className="space-y-8 text-right">
              <div className="bg-[#e2e4ea] p-6 rounded-2xl neo-inset">
                <h3 className="text-xl font-bold text-[#2e3040] mb-4 flex items-center gap-2">
                  <ChefHat size={24} className="text-[#6366f1]" />
                  מצרכים:
                </h3>
                <ul className="list-disc list-inside space-y-2 text-[#585a68] font-medium">
                  {selectedRecipe.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#2e3040] mb-4 flex items-center gap-2">
                  <ScrollText size={24} className="text-[#6366f1]" />
                  אופן ההכנה:
                </h3>
                <ol className="list-decimal list-inside space-y-4 text-[#585a68] leading-relaxed font-medium">
                  {selectedRecipe.instructions.map((inst, i) => (
                    <li key={i} className="pl-2">{inst}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Marquee Blessings */}
      {blessings.length > 0 && (
        <div className="w-full bg-[#6366f1] text-white py-2 overflow-hidden relative flex items-center z-50" dir="rtl">
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
      <header className="w-full top-0 sticky z-40 bg-[#e8eaf0] neo-raised" dir="rtl">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#6366f1] p-2 rounded-xl active:neo-inset transition-all"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <span className="text-2xl font-semibold text-[#6366f1] tracking-tight font-headline">
              ברכת פסח ממשפחת ישראל
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

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-24" dir="rtl">
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
                  חג פסח כשר ושמח! אנו מאחלים לכם ולכל בני ביתכם חג אביב שמח. שנצא מעבדות לחירות!
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <button onClick={() => setActiveTab('blessings')} className="px-8 py-4 bg-[#e8eaf0] rounded-2xl neo-raised text-[#6366f1] font-bold text-lg hover:shadow-none active:neo-inset transition-all flex items-center gap-2">
                    <MessageCircleHeart size={20} />
                    השאירו ברכה
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full max-w-lg aspect-square rounded-[3rem] neo-raised overflow-hidden p-8 mx-auto">
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
                {sederSymbols.map((symbol, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center p-8 bg-[#e8eaf0] rounded-3xl neo-raised group hover:translate-y-[-4px] transition-transform">
                    <div className="w-20 h-20 rounded-full bg-[#e2e4ea] flex items-center justify-center mb-6 neo-inset group-hover:text-[#6366f1] transition-colors">
                      <symbol.icon size={40} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-2xl mb-3 text-[#2e3040]">{symbol.title}</h3>
                    <p className="text-[#585a68] leading-relaxed text-sm md:text-base">{symbol.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Recipes Section */}
            <section className="space-y-12">
              <div className="flex justify-between items-end">
                <div className="text-right">
                  <h2 className="text-3xl font-bold text-[#2e3040] font-headline">מתכונים לחג</h2>
                  <p className="text-[#585a68]">10 מתכונים מנצחים לשולחן החג (לחצו על מתכון לצפייה)</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes.map((recipe, idx) => (
                  <article 
                    key={idx} 
                    onClick={() => setSelectedRecipe(recipe)}
                    className="bg-[#e8eaf0] rounded-[2rem] p-4 neo-raised overflow-hidden flex flex-col cursor-pointer hover:scale-[1.02] transition-transform"
                  >
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
      <footer className="w-full py-12 neo-inset bg-[#e8eaf0] mt-12" dir="rtl">
        <div className="flex flex-col items-center gap-6 w-full max-w-7xl mx-auto px-6">
          <span className="font-headline font-semibold text-2xl text-[#6366f1]">
            ברכת פסח ממשפחת ישראל
          </span>
          <p className="text-slate-400 text-sm">© 2024 חג שמח. כל הזכויות שמורות.</p>
        </div>
      </footer>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#e8eaf0] rounded-t-3xl neo-raised" dir="rtl">
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
