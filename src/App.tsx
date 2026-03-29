/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
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
  ChefHat,
  ChevronLeft,
  ChevronRight,
  Globe
} from 'lucide-react';
import { getSederSymbols, getMahNishtanah, getSederOrder, getPassoverSongs } from './data';
import { getRecipes } from './data2';

const iconMap: Record<string, React.ElementType> = {
  Leaf,
  Brain,
  Cake,
  Sprout,
  Utensils,
  Egg
};

const translations = {
  he: {
    home: 'ראשי',
    blessings: 'ברכות',
    recipes: 'מתכונים',
    happyPassover: 'חג פסח שמח!',
    whatChanged: 'מה נשתנה הלילה הזה?',
    sederPlate: 'קערת הסדר',
    mahNishtanahTitle: 'מה נשתנה',
    sederOrderTitle: 'סדר פסח',
    passoverSongsTitle: 'שירי חג הפסח',
    holidayRecipes: 'מתכונים לחג',
    holidayBlessings: 'ברכות לחג',
    viewRecipe: 'לצפייה במתכון',
    addBlessing: 'הוסף ברכה',
    close: 'סגור',
    yourName: 'השם שלך',
    yourBlessing: 'הברכה שלך',
    send: 'שלח ברכה',
    ingredients: 'מצרכים',
    instructions: 'אופן ההכנה',
    diff: 'רמת קושי',
    time: 'זמן הכנה',
    leaveBlessing: 'השאירו ברכה חמה לכל אורחי האתר. הברכה שלכם תופיע בשורה הרצה למעלה!',
    tenRecipes: '10 מתכונים מנצחים לשולחן החג (לחצו על מתכון לצפייה)',
    dir: 'rtl',
    appTitle: 'ברכת פסח ממשפחת ישראל',
    next: 'הבא',
    prev: 'הקודם',
    goToRecipe: 'עבור למתכון',
    submitSuccess: 'הברכה נשלחה בהצלחה!',
    submitError: 'אירעה שגיאה בשליחת הברכה.',
    defaultBlessingName: 'משפחת ישראל',
    defaultBlessingMessage: 'חג פסח שמח וכשר לכל בית ישראל!'
  },
  en: {
    home: 'Home',
    blessings: 'Blessings',
    recipes: 'Recipes',
    happyPassover: 'Happy Passover!',
    whatChanged: 'Why is this night different?',
    sederPlate: 'The Seder Plate',
    mahNishtanahTitle: 'Mah Nishtanah (The Four Questions)',
    sederOrderTitle: 'Passover Seder Guide',
    passoverSongsTitle: 'Passover Songs',
    holidayRecipes: 'Holiday Recipes',
    holidayBlessings: 'Holiday Blessings',
    viewRecipe: 'View Recipe',
    addBlessing: 'Add Blessing',
    close: 'Close',
    yourName: 'Your Name',
    yourBlessing: 'Your Blessing',
    send: 'Send Blessing',
    ingredients: 'Ingredients',
    instructions: 'Instructions',
    diff: 'Difficulty',
    time: 'Prep Time',
    leaveBlessing: 'Leave a warm blessing for all site guests. Your blessing will appear in the ticker above!',
    tenRecipes: '10 winning recipes for the holiday table (click to view)',
    dir: 'ltr',
    appTitle: 'Passover Greetings from the Israel Family',
    next: 'Next',
    prev: 'Previous',
    goToRecipe: 'Go to recipe',
    submitSuccess: 'Blessing sent successfully!',
    submitError: 'Error sending blessing.',
    defaultBlessingName: 'The Israel Family',
    defaultBlessingMessage: 'Happy and Kosher Passover to everyone!'
  },
  ru: {
    home: 'Главная',
    blessings: 'Поздравления',
    recipes: 'Рецепты',
    happyPassover: 'Счастливого Песаха!',
    whatChanged: 'Чем отличается эта ночь?',
    sederPlate: 'Кеара (Пасхальное блюдо)',
    mahNishtanahTitle: 'Ма Ништана (Четыре вопроса)',
    sederOrderTitle: 'Порядок проведения Седера',
    passoverSongsTitle: 'Пасхальные песни',
    holidayRecipes: 'Праздничные рецепты',
    holidayBlessings: 'Праздничные поздравления',
    viewRecipe: 'Посмотреть рецепт',
    addBlessing: 'Добавить поздравление',
    close: 'Закрыть',
    yourName: 'Ваше имя',
    yourBlessing: 'Ваше поздравление',
    send: 'Отправить',
    ingredients: 'Ингредиенты',
    instructions: 'Приготовление',
    diff: 'Сложность',
    time: 'Время',
    leaveBlessing: 'Оставьте теплое поздравление для всех гостей сайта. Ваше поздравление появится в бегущей строке выше!',
    tenRecipes: '10 лучших рецептов для праздничного стола (нажмите, чтобы посмотреть)',
    dir: 'ltr',
    appTitle: 'Поздравления с Песахом от семьи Исраэль',
    next: 'Вперед',
    prev: 'Назад',
    goToRecipe: 'Перейти к рецепту',
    submitSuccess: 'Поздравление успешно отправлено!',
    submitError: 'Ошибка отправки поздравления.',
    defaultBlessingName: 'Семья Исраэль',
    defaultBlessingMessage: 'Счастливого и кошерного Песаха всем!'
  },
  fr: {
    home: 'Accueil',
    blessings: 'Bénédictions',
    recipes: 'Recettes',
    happyPassover: 'Joyeuse Pâque !',
    whatChanged: 'Pourquoi cette nuit est-elle différente ?',
    sederPlate: 'Le plat du Séder',
    mahNishtanahTitle: 'Mah Nishtanah (Les Quatre Questions)',
    sederOrderTitle: 'Guide du Séder de Pessa\'h',
    passoverSongsTitle: 'Chansons de Pessa\'h',
    holidayRecipes: 'Recettes de fête',
    holidayBlessings: 'Bénédictions de fête',
    viewRecipe: 'Voir la recette',
    addBlessing: 'Ajouter une bénédiction',
    close: 'Fermer',
    yourName: 'Votre nom',
    yourBlessing: 'Votre bénédiction',
    send: 'Envoyer',
    ingredients: 'Ingrédients',
    instructions: 'Instructions',
    diff: 'Difficulté',
    time: 'Temps',
    leaveBlessing: 'Laissez une bénédiction chaleureuse pour tous les invités du site. Votre bénédiction apparaîtra dans le téléscripteur ci-dessus !',
    tenRecipes: '10 recettes gagnantes pour la table de fête (cliquez pour voir)',
    dir: 'ltr',
    appTitle: 'Vœux de Pâque de la famille Israël',
    next: 'Suivant',
    prev: 'Précédent',
    goToRecipe: 'Aller à la recette',
    submitSuccess: 'Bénédiction envoyée avec succès !',
    submitError: 'Erreur lors de l\'envoi de la bénédiction.',
    defaultBlessingName: 'La famille Israël',
    defaultBlessingMessage: 'Pâque joyeuse et casher à tous !'
  },
  es: {
    home: 'Inicio',
    blessings: 'Bendiciones',
    recipes: 'Recetas',
    happyPassover: '¡Feliz Pésaj!',
    whatChanged: '¿Por qué esta noche es diferente?',
    sederPlate: 'El plato del Séder',
    mahNishtanahTitle: 'Mah Nishtaná (Las Cuatro Preguntas)',
    sederOrderTitle: 'Guía del Séder de Pésaj',
    passoverSongsTitle: 'Canciones de Pésaj',
    holidayRecipes: 'Recetas festivas',
    holidayBlessings: 'Bendiciones festivas',
    viewRecipe: 'Ver receta',
    addBlessing: 'Añadir bendición',
    close: 'Cerrar',
    yourName: 'Tu nombre',
    yourBlessing: 'Tu bendición',
    send: 'Enviar',
    ingredients: 'Ingredientes',
    instructions: 'Instrucciones',
    diff: 'Dificultad',
    time: 'Tiempo',
    leaveBlessing: 'Deja una cálida bendición para todos los invitados del sitio. ¡Tu bendición aparecerá en la marquesina de arriba!',
    tenRecipes: '10 recetas ganadoras para la mesa festiva (haz clic para ver)',
    dir: 'ltr',
    appTitle: 'Saludos de Pésaj de la familia Israel',
    next: 'Siguiente',
    prev: 'Anterior',
    goToRecipe: 'Ir a la receta',
    submitSuccess: '¡Bendición enviada con éxito!',
    submitError: 'Error al enviar la bendición.',
    defaultBlessingName: 'La Familia Israel',
    defaultBlessingMessage: '¡Feliz y Kosher Pascua para todos!'
  }
};

export type Language = keyof typeof translations;

interface Blessing {
  id: string;
  name: string;
  message: string;
}

export interface Recipe {
  title: string;
  desc: string;
  diff: string;
  time: string;
  img: string;
  ingredients: string[];
  instructions: string[];
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [blessings, setBlessings] = useState<Blessing[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [lang, setLang] = useState<Language>('he');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const t = translations[lang];
  const recipes = getRecipes(lang) as Recipe[];
  const sederSymbols = getSederSymbols(lang);
  const mahNishtanah = getMahNishtanah(lang);
  const sederOrder = getSederOrder(lang);
  const passoverSongs = getPassoverSongs(lang);

  useEffect(() => {
    const q = query(collection(db, 'blessings'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newBlessings = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        message: doc.data().message
      }));
      if (newBlessings.length === 0) {
        setBlessings([
          { id: 'default1', name: t.defaultBlessingName, message: t.defaultBlessingMessage },
          { id: 'default2', name: t.defaultBlessingName, message: t.defaultBlessingMessage },
          { id: 'default3', name: t.defaultBlessingName, message: t.defaultBlessingMessage },
          { id: 'default4', name: t.defaultBlessingName, message: t.defaultBlessingMessage }
        ]);
      } else {
        setBlessings(newBlessings);
      }
    }, (error) => {
      console.error('Firestore Error: ', error);
    });

    return () => unsubscribe();
  }, [t.defaultBlessingName, t.defaultBlessingMessage]);

  const submitBlessing = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    try {
      await addDoc(collection(db, 'blessings'), {
        name,
        message,
        createdAt: serverTimestamp()
      });
      setName('');
      setMessage('');
      setActiveTab('home');
      alert(t.submitSuccess);
    } catch (error) {
      console.error('Firestore Error: ', error);
      alert(t.submitError);
    }
  };

  return (
    <div className="min-h-screen pb-24 md:pb-0 relative" dir={t.dir}>
      {/* Recipe Modal */}
      {selectedRecipe && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setSelectedRecipe(null)}
        >
          <div 
            className="bg-[#e8eaf0] rounded-[2rem] p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto neo-raised relative"
            onClick={e => e.stopPropagation()}
            dir={t.dir}
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
                aria-label={t.close}
              >
                <X size={24} />
              </button>
            </div>
            
            <img 
              src={selectedRecipe.img} 
              alt={selectedRecipe.title} 
              className="w-full h-64 object-cover rounded-2xl mb-8 neo-inset" 
            />
            
            <div className={`space-y-8 ${t.dir === 'rtl' ? 'text-right' : 'text-left'}`}>
              <div className="bg-[#e2e4ea] p-6 rounded-2xl neo-inset">
                <h3 className="text-xl font-bold text-[#2e3040] mb-4 flex items-center gap-2">
                  <ChefHat size={24} className="text-[#6366f1]" />
                  {t.ingredients}:
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
                  {t.instructions}:
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
        <div className="w-full bg-[#6366f1] text-white py-2 overflow-hidden relative flex items-center z-50" dir={t.dir}>
          <div className={`whitespace-nowrap w-max flex font-medium ${t.dir === 'rtl' ? 'animate-marquee-rtl' : 'animate-marquee'}`}>
            {blessings.map((b) => (
              <span key={b.id} className="pr-12">✨ {b.name}: {b.message}</span>
            ))}
            {blessings.map((b) => (
              <span key={`dup1-${b.id}`} className="pr-12">✨ {b.name}: {b.message}</span>
            ))}
            {blessings.map((b) => (
              <span key={`dup2-${b.id}`} className="pr-12">✨ {b.name}: {b.message}</span>
            ))}
            {blessings.map((b) => (
              <span key={`dup3-${b.id}`} className="pr-12">✨ {b.name}: {b.message}</span>
            ))}
            {blessings.map((b) => (
              <span key={`dup4-${b.id}`} className="pr-12">✨ {b.name}: {b.message}</span>
            ))}
            {blessings.map((b) => (
              <span key={`dup5-${b.id}`} className="pr-12">✨ {b.name}: {b.message}</span>
            ))}
            {blessings.map((b) => (
              <span key={`dup6-${b.id}`} className="pr-12">✨ {b.name}: {b.message}</span>
            ))}
            {blessings.map((b) => (
              <span key={`dup7-${b.id}`} className="pr-12">✨ {b.name}: {b.message}</span>
            ))}
          </div>
        </div>
      )}

      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-40 bg-[#e8eaf0] neo-raised" dir={t.dir}>
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#6366f1] p-2 rounded-xl active:neo-inset transition-all"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <span className="text-2xl font-semibold text-[#6366f1] tracking-tight font-headline">
              {t.appTitle}
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-2 lg:gap-4 font-medium text-sm lg:text-base">
            <button onClick={() => setActiveTab('home')} className={`px-3 py-2 rounded-xl transition-all ${activeTab === 'home' ? 'text-[#6366f1] neo-inset' : 'text-slate-500 hover:text-[#6366f1]'}`}>
              {t.home}
            </button>
            <a href="#seder-plate" onClick={() => setActiveTab('home')} className="text-slate-500 hover:text-[#6366f1] transition-all px-3 py-2 rounded-xl">
              {t.sederPlate}
            </a>
            <a href="#mah-nishtanah" onClick={() => setActiveTab('home')} className="text-slate-500 hover:text-[#6366f1] transition-all px-3 py-2 rounded-xl">
              {t.mahNishtanahTitle}
            </a>
            <a href="#seder-order" onClick={() => setActiveTab('home')} className="text-slate-500 hover:text-[#6366f1] transition-all px-3 py-2 rounded-xl">
              {t.sederOrderTitle}
            </a>
            <a href="#passover-songs" onClick={() => setActiveTab('home')} className="text-slate-500 hover:text-[#6366f1] transition-all px-3 py-2 rounded-xl">
              {t.passoverSongsTitle}
            </a>
            <a href="#recipes" onClick={() => setActiveTab('home')} className="text-slate-500 hover:text-[#6366f1] transition-all px-3 py-2 rounded-xl">
              {t.holidayRecipes}
            </a>
            <button onClick={() => setActiveTab('blessings')} className={`px-3 py-2 rounded-xl transition-all ${activeTab === 'blessings' ? 'text-[#6366f1] neo-inset' : 'text-slate-500 hover:text-[#6366f1]'}`}>
              {t.blessings}
            </button>
          </nav>
          
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="text-[#6366f1] p-2 rounded-xl active:neo-inset transition-all flex items-center gap-2"
            >
              <Globe size={24} />
              <span className="uppercase font-bold text-sm hidden md:inline">{lang}</span>
            </button>
            {isLangMenuOpen && (
              <div className="absolute top-full mt-2 right-0 bg-[#e8eaf0] neo-raised rounded-xl p-2 flex flex-col gap-2 z-50 min-w-[120px]">
                {(['he', 'en', 'ru', 'fr', 'es'] as Language[]).map((l) => (
                  <button 
                    key={l}
                    onClick={() => { setLang(l); setIsLangMenuOpen(false); }}
                    className={`px-4 py-2 rounded-lg text-sm font-bold uppercase transition-all ${lang === l ? 'text-[#6366f1] neo-inset' : 'text-slate-500 hover:text-[#6366f1]'}`}
                  >
                    {l === 'he' ? 'עברית' : l === 'en' ? 'English' : l === 'ru' ? 'Русский' : l === 'fr' ? 'Français' : 'Español'}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#e8eaf0] neo-raised flex flex-col p-4 gap-2 z-40">
            <button onClick={() => { setActiveTab('home'); setIsMenuOpen(false); }} className={`p-4 rounded-xl font-bold ${t.dir === 'rtl' ? 'text-right' : 'text-left'} ${activeTab === 'home' ? 'text-[#6366f1] neo-inset' : 'text-slate-500'}`}>
              {t.home}
            </button>
            <a href="#seder-plate" onClick={() => { setActiveTab('home'); setIsMenuOpen(false); }} className={`p-4 rounded-xl font-bold ${t.dir === 'rtl' ? 'text-right' : 'text-left'} text-slate-500`}>
              {t.sederPlate}
            </a>
            <a href="#mah-nishtanah" onClick={() => { setActiveTab('home'); setIsMenuOpen(false); }} className={`p-4 rounded-xl font-bold ${t.dir === 'rtl' ? 'text-right' : 'text-left'} text-slate-500`}>
              {t.mahNishtanahTitle}
            </a>
            <a href="#seder-order" onClick={() => { setActiveTab('home'); setIsMenuOpen(false); }} className={`p-4 rounded-xl font-bold ${t.dir === 'rtl' ? 'text-right' : 'text-left'} text-slate-500`}>
              {t.sederOrderTitle}
            </a>
            <a href="#passover-songs" onClick={() => { setActiveTab('home'); setIsMenuOpen(false); }} className={`p-4 rounded-xl font-bold ${t.dir === 'rtl' ? 'text-right' : 'text-left'} text-slate-500`}>
              {t.passoverSongsTitle}
            </a>
            <a href="#recipes" onClick={() => { setActiveTab('home'); setIsMenuOpen(false); }} className={`p-4 rounded-xl font-bold ${t.dir === 'rtl' ? 'text-right' : 'text-left'} text-slate-500`}>
              {t.holidayRecipes}
            </a>
            <button onClick={() => { setActiveTab('blessings'); setIsMenuOpen(false); }} className={`p-4 rounded-xl font-bold ${t.dir === 'rtl' ? 'text-right' : 'text-left'} ${activeTab === 'blessings' ? 'text-[#6366f1] neo-inset' : 'text-slate-500'}`}>
              {t.blessings}
            </button>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-24" dir={t.dir}>
        {activeTab === 'home' ? (
          <>
            {/* Hero Section */}
            <section className="relative flex flex-col md:flex-row items-center gap-12 pt-12">
              <div className={`flex-1 space-y-6 text-center ${t.dir === 'rtl' ? 'md:text-right' : 'md:text-left'}`}>
                <h1 className="text-5xl md:text-7xl font-extrabold text-[#6366f1] tracking-tight leading-tight font-headline">
                  {t.happyPassover.split(' ')[0]}
                  <br />
                  {t.happyPassover.split(' ').slice(1).join(' ')}
                </h1>
                <p className={`text-xl text-[#585a68] max-w-xl leading-relaxed font-medium ${t.dir === 'rtl' ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'}`}>
                  {t.happyPassover}
                </p>
                <div className={`flex flex-wrap gap-4 justify-center ${t.dir === 'rtl' ? 'md:justify-start' : 'md:justify-end'}`}>
                  <button onClick={() => setActiveTab('blessings')} className="px-8 py-4 bg-[#e8eaf0] rounded-2xl neo-raised text-[#6366f1] font-bold text-lg hover:shadow-none active:neo-inset transition-all flex items-center gap-2">
                    <MessageCircleHeart size={20} />
                    {t.addBlessing}
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
            <section id="seder-plate" className="space-y-12 scroll-mt-24">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#2e3040] mb-2 font-headline">{t.sederPlate}</h2>
                <p className="text-[#585a68]">{t.whatChanged}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sederSymbols.map((symbol, idx) => {
                  const Icon = iconMap[symbol.icon];
                  return (
                    <div key={idx} className="flex flex-col items-center text-center p-8 bg-[#e8eaf0] rounded-3xl neo-raised group hover:translate-y-[-4px] transition-transform">
                      <div className="w-20 h-20 rounded-full bg-[#e2e4ea] flex items-center justify-center mb-6 neo-inset group-hover:text-[#6366f1] transition-colors">
                        {Icon && <Icon size={40} strokeWidth={1.5} />}
                      </div>
                      <h3 className="font-bold text-2xl mb-3 text-[#2e3040]">{symbol.title}</h3>
                      <p className="text-[#585a68] leading-relaxed text-sm md:text-base">{symbol.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Mah Nishtanah Section */}
            <section id="mah-nishtanah" className="space-y-12 scroll-mt-24">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#2e3040] mb-2 font-headline">{t.mahNishtanahTitle}</h2>
              </div>
              <div className="bg-[#e8eaf0] rounded-3xl p-8 md:p-12 neo-raised">
                <div className="space-y-6">
                  {mahNishtanah.map((question, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#e2e4ea] flex items-center justify-center flex-shrink-0 neo-inset text-[#6366f1] font-bold text-xl">
                        {idx + 1}
                      </div>
                      <p className="text-[#2e3040] text-lg md:text-xl leading-relaxed pt-1">{question}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Seder Order Section */}
            <section id="seder-order" className="space-y-12 scroll-mt-24">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#2e3040] mb-2 font-headline">{t.sederOrderTitle}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {sederOrder.map((step, idx) => (
                  <div key={idx} className="bg-[#e8eaf0] rounded-2xl p-6 neo-raised text-center flex flex-col items-center hover:scale-[1.02] transition-transform">
                    <div className="w-12 h-12 rounded-full bg-[#e2e4ea] flex items-center justify-center mb-4 neo-inset text-[#6366f1] font-bold">
                      {idx + 1}
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-[#2e3040]">{step.title}</h3>
                    <p className="text-[#585a68] text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Passover Songs Section */}
            <section id="passover-songs" className="space-y-12 scroll-mt-24">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-[#2e3040] mb-2 font-headline">{t.passoverSongsTitle}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {passoverSongs.map((song, idx) => (
                  <div key={idx} className="bg-[#e8eaf0] rounded-2xl p-6 neo-raised hover:scale-[1.02] transition-transform">
                    <h3 className="font-bold text-xl mb-3 text-[#2e3040]">{song.title}</h3>
                    <p className="text-[#585a68] leading-relaxed">{song.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Recipes Section */}
            <section id="recipes" className="space-y-12 scroll-mt-24">
              <div className="flex justify-between items-end">
                <div className={t.dir === 'rtl' ? 'text-right' : 'text-left'}>
                  <h2 className="text-3xl font-bold text-[#2e3040] font-headline">{t.holidayRecipes}</h2>
                  <p className="text-[#585a68]">{t.tenRecipes}</p>
                </div>
              </div>

              {/* Featured Recipe Carousel */}
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden neo-inset mb-12 group">
                <img 
                  src={recipes[currentCarouselIndex].img} 
                  alt={recipes[currentCarouselIndex].title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12 ${t.dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 font-headline">{recipes[currentCarouselIndex].title}</h3>
                  <p className="text-white/90 max-w-2xl text-lg mb-6">{recipes[currentCarouselIndex].desc}</p>
                  <button 
                    onClick={() => setSelectedRecipe(recipes[currentCarouselIndex])}
                    className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-8 py-3 rounded-full font-bold transition-colors w-fit"
                  >
                    {t.viewRecipe}
                  </button>
                </div>
                
                <button 
                  onClick={() => setCurrentCarouselIndex((prev) => (prev === recipes.length - 1 ? 0 : prev + 1))}
                  className={`absolute ${t.dir === 'rtl' ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100`}
                  aria-label={t.next}
                >
                  {t.dir === 'rtl' ? <ChevronLeft size={28} /> : <ChevronRight size={28} />}
                </button>
                <button 
                  onClick={() => setCurrentCarouselIndex((prev) => (prev === 0 ? recipes.length - 1 : prev - 1))}
                  className={`absolute ${t.dir === 'rtl' ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100`}
                  aria-label={t.prev}
                >
                  {t.dir === 'rtl' ? <ChevronRight size={28} /> : <ChevronLeft size={28} />}
                </button>
                
                <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 ${t.dir === 'rtl' ? 'rtl:space-x-reverse' : ''}`}>
                  {recipes.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentCarouselIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentCarouselIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}`}
                      aria-label={`${t.goToRecipe} ${idx + 1}`}
                    />
                  ))}
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
              <h2 className="text-4xl font-extrabold text-[#6366f1] mb-4 font-headline">{t.holidayBlessings}</h2>
              <p className="text-xl text-[#585a68]">{t.leaveBlessing}</p>
            </div>
            <form onSubmit={submitBlessing} className="bg-[#e8eaf0] p-8 md:p-12 rounded-[3rem] neo-raised space-y-8">
              <div>
                <label className="block text-lg font-bold text-[#2e3040] mb-3">{t.yourName}</label>
                <input 
                  required 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  className="w-full bg-[#e8eaf0] neo-inset rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#6366f1] text-lg transition-all" 
                  placeholder={t.yourName + "..."} 
                />
              </div>
              <div>
                <label className="block text-lg font-bold text-[#2e3040] mb-3">{t.yourBlessing}</label>
                <textarea 
                  required 
                  value={message} 
                  onChange={e => setMessage(e.target.value)} 
                  className="w-full bg-[#e8eaf0] neo-inset rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#6366f1] min-h-[150px] text-lg transition-all resize-y" 
                  placeholder={t.happyPassover + "..."}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-[#e8eaf0] rounded-2xl neo-raised text-[#6366f1] font-bold text-xl hover:shadow-none active:neo-inset transition-all flex justify-center items-center gap-3"
              >
                <MessageCircleHeart size={24} />
                {t.send}
              </button>
            </form>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-12 neo-inset bg-[#e8eaf0] mt-12" dir={t.dir}>
        <div className="flex flex-col items-center gap-6 w-full max-w-7xl mx-auto px-6">
          <span className="font-headline font-semibold text-2xl text-[#6366f1]">
            {t.appTitle}
          </span>
          <p className="text-slate-400 text-sm">© 2024. All rights reserved.</p>
        </div>
      </footer>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#e8eaf0] rounded-t-3xl neo-raised" dir={t.dir}>
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center justify-center px-5 py-2 transition-all ${activeTab === 'home' ? 'text-[#6366f1] neo-inset rounded-2xl scale-95' : 'text-slate-500 hover:text-[#7c3aed]'}`}>
          <Sparkles size={24} />
          <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-medium mt-1">{t.home}</span>
        </button>
        <button onClick={() => setActiveTab('blessings')} className={`flex flex-col items-center justify-center px-5 py-2 transition-all ${activeTab === 'blessings' ? 'text-[#6366f1] neo-inset rounded-2xl scale-95' : 'text-slate-500 hover:text-[#7c3aed]'}`}>
          <MessageCircleHeart size={24} />
          <span className="font-['Plus_Jakarta_Sans'] text-[12px] font-medium mt-1">{t.blessings}</span>
        </button>
      </nav>
    </div>
  );
}
