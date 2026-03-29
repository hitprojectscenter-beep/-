import { Language } from './App';

export const getRecipes = (lang: Language) => {
  const recipes = {
    he: [
      {
        title: 'מצות ביתיות',
        desc: 'הכינו בעצמכם מצות פריכות וטעימות תוך פחות מ-18 דקות של עבודה.',
        diff: 'קשה',
        time: '25 דקות',
        img: '/מצות ביתיות.jpg',
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
        img: '/קניידלך.jpg',
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
        img: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80&w=800',
        ingredients: [
          '6 ביצים מופרדות לחלבונים וחלמונים',
          '1.5 כוסות סוכר',
          '2 כוסות אגוזי מלך טחונים דק',
          '3 כפות קמח מצה',
          'קליפה מגורדת מתפוז אחד'
        ],
        instructions: [
          'מחממים תנור ל-170 מעלות ומשמנים תבנית אפייה.',
          'מקציפים את החלבונים עם חצי מכמות הסוכר לקצף יציב.',
          'בקערה נפרדת, מקציפים את החלמונים עם יתרת הסוכר עד לקבלת תערובת תפוחה ובהירה.',
          'מקפלים את תערובת החלמונים לקצף החלבונים בעדינות.',
          'מוסיפים את האגוזים, קמח המצה וקליפת התפוז ומקפלים עד לאיחוד.',
          'יוצקים לתבנית ואופים כ-40-45 דקות עד שקיסם יוצא יבש.'
        ]
      },
      {
        title: 'לביבות',
        desc: 'לביבות תפוחי אדמה פריכות וזהובות, קלאסיקה שתמיד כיף לאכול.',
        diff: 'קל',
        time: '30 דקות',
        img: '/לביבות.jpg',
        ingredients: [
          '4 תפוחי אדמה גדולים, קלופים',
          '1 בצל גדול',
          '2 ביצים',
          '3 כפות קמח מצה',
          'מלח ופלפל שחור',
          'שמן לטיגון'
        ],
        instructions: [
          'מגרדים את תפוחי האדמה והבצל בפומפייה גסה.',
          'סוחטים היטב את התערובת מנוזלים ומעבירים לקערה.',
          'מוסיפים את הביצים, קמח המצה, מלח ופלפל ומערבבים היטב.',
          'מחממים שמן במחבת רחבה.',
          'יוצרים לביבות מהתערובת ומטגנים משני הצדדים עד להזהבה ופריכות.',
          'מוציאים לנייר סופג ומגישים חם.'
        ]
      },
      {
        title: 'חרוסת',
        desc: 'הממרח המתוק והסמלי של קערת הסדר, בגרסה עשירה ומלאת טעמים.',
        diff: 'קל',
        time: '15 דקות',
        img: '/חרוסת.jpg',
        ingredients: [
          '1 כוס אגוזי מלך קצוצים דק',
          '1 כוס תמרים מגולענים וקצוצים (או ממרח תמרים)',
          '1 תפוח עץ מגורד',
          '1/2 כוס יין אדום מתוק',
          '1 כפית קינמון'
        ],
        instructions: [
          'מכניסים את כל המרכיבים למעבד מזון.',
          'טוחנים בפולסים קצרים עד לקבלת תערובת אחידה אך עם מעט מרקם (לא חלקה לגמרי).',
          'טועמים ומתקנים תיבול (אפשר להוסיף עוד יין או קינמון לפי הטעם).',
          'מעבירים לקערת הגשה ושומרים במקרר עד להגשה.'
        ]
      },
      {
        title: 'גפילטע פיש',
        desc: 'קציצות דג מסורתיות ברוטב מתקתק, מנה ראשונה קלאסית לשולחן החג.',
        diff: 'קשה',
        time: '120 דקות',
        img: '/גפילטע פיש.jpg',
        ingredients: [
          '1 ק"ג דג קרפיון טחון',
          '2 בצלים גדולים (1 מגורד, 1 פרוס לרוטב)',
          '2 גזרים פרוסים',
          '3 ביצים',
          '1/2 כוס קמח מצה',
          'מלח, פלפל שחור וסוכר לפי הטעם'
        ],
        instructions: [
          'מערבבים את הדג הטחון עם הבצל המגורד, הביצים, קמח המצה והתבלינים. מניחים במקרר לחצי שעה.',
          'בסיר רחב, מסדרים את פרוסות הבצל והגזר, מוסיפים מים, מלח, פלפל וסוכר ומביאים לרתיחה.',
          'יוצרים קציצות מתערובת הדג ומכניסים בעדינות לסיר המבעבע.',
          'מבשלים על אש נמוכה כשעה וחצי.',
          'מצננים ומגישים קר, רצוי עם חזרת (כרין) בצד.'
        ]
      },
      {
        title: 'צלי בקר',
        desc: 'מנה עיקרית חגיגית ומרשימה, בשר רך שנימוח בפה ברוטב עשיר.',
        diff: 'בינוני',
        time: '180 דקות',
        img: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=800',
        ingredients: [
          '1.5 ק"ג בשר בקר לצלי (מספר 5 או 6)',
          '2 בצלים גדולים קצוצים',
          '3 גזרים חתוכים גס',
          '2 כוסות יין אדום יבש',
          '3 כוסות ציר בקר או מים',
          'עלי דפנה, פלפל אנגלי, מלח ופלפל'
        ],
        instructions: [
          'מחממים שמן בסיר כבד וצורבים את נתח הבשר מכל הכיוונים עד להשחמה. מוציאים לצלחת.',
          'באותו סיר, מטגנים את הבצל והגזר עד להזהבה.',
          'מחזירים את הבשר לסיר, מוסיפים את היין, הציר והתבלינים ומביאים לרתיחה.',
          'מנמיכים את האש, מכסים ומבשלים כשעתיים וחצי עד שלוש שעות, עד שהבשר רך מאוד.',
          'מוציאים את הבשר, פורסים ומגישים עם הרוטב.'
        ]
      },
      {
        title: 'מרק עוף צח',
        desc: 'מרק עוף זהוב וצלול, "הפניצילין היהודי", מושלם עם קניידלך.',
        diff: 'קל',
        time: '120 דקות',
        img: '/מרק עוף צח.jpg',
        ingredients: [
          '1 עוף שלם מחולק (או חלקי עוף עם עצם)',
          '3 גזרים',
          '2 בצלים',
          '2 קישואים',
          'שורש סלרי ושורש פטרוזיליה',
          'צרור שמיר ופטרוזיליה',
          'מלח ופלפל שחור שלם'
        ],
        instructions: [
          'מכניסים את העוף לסיר גדול ומכסים במים קרים. מביאים לרתיחה ומקפים את הקצף שנוצר.',
          'מוסיפים את כל הירקות (שלמים או חתוכים גס) והתבלינים.',
          'מבשלים על אש נמוכה מאוד (ביעבוע עדין) כשעתיים.',
          'מסננים את המרק (אפשר לשמור את הגזרים והעוף להגשה) ומגישים חם.'
        ]
      },
      {
        title: 'תפוחי אדמה בתנור',
        desc: 'תוספת קלאסית ואהובה, תפוחי אדמה פריכים מבחוץ ורכים מבפנים.',
        diff: 'קל',
        time: '60 דקות',
        img: '/תפוחי אדמה בתנור.jpg',
        ingredients: [
          '1 ק"ג תפוחי אדמה קטנים או חתוכים לקוביות',
          '1/4 כוס שמן זית',
          '3 שיני שום כתושות',
          '1 כף פפריקה מתוקה',
          'מלח גס ופלפל שחור',
          'ענפי רוזמרין או טימין (אופציונלי)'
        ],
        instructions: [
          'מחממים תנור ל-200 מעלות.',
          'בקערה גדולה, מערבבים את תפוחי האדמה עם שמן הזית והתבלינים עד לציפוי אחיד.',
          'משטחים את תפוחי האדמה בתבנית אפייה בשכבה אחת.',
          'אופים כ-45-50 דקות עד שתפוחי האדמה זהובים ופריכים, תוך כדי ערבוב פעם אחת באמצע האפייה.'
        ]
      },
      {
        title: 'עוגיות בוטנים',
        desc: 'עוגיות בוטנים נימוחות ומושלמות לפסח, נמסות בפה.',
        diff: 'קל',
        time: '20 דקות',
        img: '/עוגיות בוטנים.jpg',
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
    ],
    en: [
      {
        title: 'Homemade Matzah',
        desc: 'Make your own crispy and delicious matzah in less than 18 minutes of work.',
        diff: 'Hard',
        time: '25 mins',
        img: '/מצות ביתיות.jpg',
        ingredients: [
          '2 cups wheat flour (kept in a dry, cool place)',
          '1/2 cup cold water',
          'Pinch of salt'
        ],
        instructions: [
          'Preheat oven to maximum heat (250°C/480°F) with a baking sheet inside.',
          'Mix flour and water in a bowl and quickly knead into a uniform dough.',
          'Divide the dough into small balls and roll each ball into a very thin sheet.',
          'Pierce the sheets with a fork to prevent rising.',
          'Bake in the hot oven for 2-3 minutes until lightly golden. Note: The entire process must be completed within 18 minutes!'
        ]
      },
      {
        title: 'Kneidlach (Matzah Balls)',
        desc: 'The secret to perfect, fluffy matzah balls that simply melt in your mouth in the soup.',
        diff: 'Medium',
        time: '45 mins',
        img: '/קניידלך.jpg',
        ingredients: [
          '1 cup matzah meal',
          '2 large eggs',
          '2 tbsp oil',
          '1/2 cup boiling water',
          'Salt and black pepper to taste'
        ],
        instructions: [
          'In a bowl, mix the matzah meal with salt and pepper.',
          'Add the oil and boiling water and mix well into a uniform mixture.',
          'Add the eggs and mix again. Cover the bowl and refrigerate for 30 minutes to set.',
          'Boil a pot with salted water or chicken soup.',
          'Form small balls with wet hands and cook in the pot for about 10 minutes until they float and are soft.'
        ]
      },
      {
        title: 'Walnut Cake',
        desc: 'A perfect, chametz-free dessert combining walnuts with aromas of chocolate and orange.',
        diff: 'Easy',
        time: '60 mins',
        img: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80&w=800',
        ingredients: [
          '6 eggs, separated into whites and yolks',
          '1.5 cups sugar',
          '2 cups finely ground walnuts',
          '3 tbsp matzah meal',
          'Grated zest of one orange'
        ],
        instructions: [
          'Preheat oven to 170°C (340°F) and grease a baking pan.',
          'Whip the egg whites with half the sugar to stiff peaks.',
          'In a separate bowl, whip the egg yolks with the remaining sugar until pale and fluffy.',
          'Gently fold the yolk mixture into the egg whites.',
          'Add the walnuts, matzah meal, and orange zest and fold until combined.',
          'Pour into the pan and bake for about 40-45 minutes until a toothpick comes out dry.'
        ]
      },
      {
        title: 'Latkes',
        desc: 'Crispy and golden potato pancakes, a classic that is always fun to eat.',
        diff: 'Easy',
        time: '30 mins',
        img: '/לביבות.jpg',
        ingredients: [
          '4 large potatoes, peeled',
          '1 large onion',
          '2 eggs',
          '3 tbsp matzah meal',
          'Salt and black pepper',
          'Oil for frying'
        ],
        instructions: [
          'Grate the potatoes and onion on a coarse grater.',
          'Squeeze the mixture well to remove liquids and transfer to a bowl.',
          'Add the eggs, matzah meal, salt, and pepper and mix well.',
          'Heat oil in a wide pan.',
          'Form patties from the mixture and fry on both sides until golden and crispy.',
          'Remove to paper towels and serve hot.'
        ]
      },
      {
        title: 'Charoset',
        desc: 'The sweet and symbolic spread of the Seder plate, in a rich and flavorful version.',
        diff: 'Easy',
        time: '15 mins',
        img: '/חרוסת.jpg',
        ingredients: [
          '1 cup finely chopped walnuts',
          '1 cup pitted and chopped dates (or date spread)',
          '1 grated apple',
          '1/2 cup sweet red wine',
          '1 tsp cinnamon'
        ],
        instructions: [
          'Put all ingredients in a food processor.',
          'Pulse until a uniform mixture is obtained but with some texture (not completely smooth).',
          'Taste and adjust seasoning (you can add more wine or cinnamon to taste).',
          'Transfer to a serving bowl and keep in the refrigerator until serving.'
        ]
      },
      {
        title: 'Gefilte Fish',
        desc: 'Traditional fish patties in a sweet sauce, a classic appetizer for the holiday table.',
        diff: 'Hard',
        time: '120 mins',
        img: '/גפילטע פיש.jpg',
        ingredients: [
          '1 kg ground carp fish',
          '2 large onions (1 grated, 1 sliced for sauce)',
          '2 sliced carrots',
          '3 eggs',
          '1/2 cup matzah meal',
          'Salt, black pepper, and sugar to taste'
        ],
        instructions: [
          'Mix the ground fish with the grated onion, eggs, matzah meal, and spices. Refrigerate for half an hour.',
          'In a wide pot, arrange the sliced onion and carrots, add water, salt, pepper, and sugar and bring to a boil.',
          'Form patties from the fish mixture and gently place in the bubbling pot.',
          'Cook on low heat for about an hour and a half.',
          'Cool and serve cold, preferably with horseradish (chrein) on the side.'
        ]
      },
      {
        title: 'Roast Beef',
        desc: 'A festive and impressive main course, tender meat that melts in your mouth in a rich sauce.',
        diff: 'Medium',
        time: '180 mins',
        img: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=800',
        ingredients: [
          '1.5 kg beef roast (number 5 or 6)',
          '2 large onions, chopped',
          '3 carrots, roughly chopped',
          '2 cups dry red wine',
          '3 cups beef broth or water',
          'Bay leaves, allspice, salt, and pepper'
        ],
        instructions: [
          'Heat oil in a heavy pot and sear the meat on all sides until browned. Remove to a plate.',
          'In the same pot, fry the onion and carrots until golden.',
          'Return the meat to the pot, add the wine, broth, and spices and bring to a boil.',
          'Lower the heat, cover, and cook for about two and a half to three hours, until the meat is very tender.',
          'Remove the meat, slice, and serve with the sauce.'
        ]
      },
      {
        title: 'Clear Chicken Soup',
        desc: 'Golden and clear chicken soup, "Jewish penicillin", perfect with kneidlach.',
        diff: 'Easy',
        time: '120 mins',
        img: '/מרק עוף צח.jpg',
        ingredients: [
          '1 whole chicken, cut up (or chicken parts with bone)',
          '3 carrots',
          '2 onions',
          '2 zucchinis',
          'Celery root and parsley root',
          'Bunch of dill and parsley',
          'Salt and whole black peppercorns'
        ],
        instructions: [
          'Put the chicken in a large pot and cover with cold water. Bring to a boil and skim off the foam that forms.',
          'Add all the vegetables (whole or roughly chopped) and spices.',
          'Cook on very low heat (gentle simmer) for about two hours.',
          'Strain the soup (you can keep the carrots and chicken for serving) and serve hot.'
        ]
      },
      {
        title: 'Roasted Potatoes',
        desc: 'A classic and beloved side dish, potatoes crispy on the outside and soft on the inside.',
        diff: 'Easy',
        time: '60 mins',
        img: '/תפוחי אדמה בתנור.jpg',
        ingredients: [
          '1 kg small potatoes or diced potatoes',
          '1/4 cup olive oil',
          '3 crushed garlic cloves',
          '1 tbsp sweet paprika',
          'Coarse salt and black pepper',
          'Rosemary or thyme sprigs (optional)'
        ],
        instructions: [
          'Preheat oven to 200°C (400°F).',
          'In a large bowl, mix the potatoes with olive oil and spices until evenly coated.',
          'Spread the potatoes in a baking pan in a single layer.',
          'Bake for about 45-50 minutes until the potatoes are golden and crispy, stirring once halfway through baking.'
        ]
      },
      {
        title: 'Peanut Cookies',
        desc: 'Soft and perfect peanut cookies for Passover, melting in your mouth.',
        diff: 'Easy',
        time: '20 mins',
        img: '/עוגיות בוטנים.jpg',
        ingredients: [
          '3 cups roasted peanuts (unsalted) and finely ground',
          '1 cup sugar',
          '2 eggs',
          '1 tsp high-quality vanilla extract',
          'Powdered sugar for coating'
        ],
        instructions: [
          'Preheat oven to 170°C (340°F) and line a baking pan with parchment paper.',
          'In a bowl, mix the ground peanuts with the sugar.',
          'Add the eggs and vanilla extract and knead with your hands until a uniform and slightly sticky dough is formed.',
          'Slightly wet your hands and form small balls from the dough (walnut size).',
          'Generously roll each ball in powdered sugar and place in the pan with spaces between them.',
          'Bake for about 12-15 minutes until the cookies crack. Remove from the oven while they are still soft (they will harden as they cool).'
        ]
      }
    ],
    ru: [
      {
        title: 'Домашняя маца',
        desc: 'Приготовьте хрустящую и вкусную мацу менее чем за 18 минут работы.',
        diff: 'Сложно',
        time: '25 мин',
        img: '/מצות ביתיות.jpg',
        ingredients: [
          '2 стакана пшеничной муки (хранить в сухом прохладном месте)',
          '1/2 стакана холодной воды',
          'Щепотка соли'
        ],
        instructions: [
          'Разогрейте духовку до максимума (250°C) с противнем внутри.',
          'Смешайте муку и воду в миске и быстро замесите однородное тесто.',
          'Разделите тесто на маленькие шарики и раскатайте каждый в очень тонкий лист.',
          'Наколите листы вилкой, чтобы они не поднялись.',
          'Выпекайте в горячей духовке 2-3 минуты до легкого золотистого цвета. Внимание: весь процесс должен занять не более 18 минут!'
        ]
      },
      {
        title: 'Кнейдлах',
        desc: 'Секрет идеальных, воздушных шариков из мацы, которые просто тают во рту в супе.',
        diff: 'Средне',
        time: '45 мин',
        img: '/קניידלך.jpg',
        ingredients: [
          '1 стакан мацовой муки',
          '2 крупных яйца',
          '2 ст. л. масла',
          '1/2 стакана кипятка',
          'Соль и черный перец по вкусу'
        ],
        instructions: [
          'В миске смешайте мацовую муку с солью и перцем.',
          'Добавьте масло и кипяток и хорошо перемешайте до однородности.',
          'Добавьте яйца и снова перемешайте. Накройте миску и уберите в холодильник на 30 минут.',
          'Вскипятите кастрюлю с подсоленной водой или куриным бульоном.',
          'Влажными руками сформируйте маленькие шарики и варите в кастрюле около 10 минут, пока они не всплывут и не станут мягкими.'
        ]
      },
      {
        title: 'Ореховый торт',
        desc: 'Идеальный десерт без хамеца, сочетающий грецкие орехи с ароматами шоколада и апельсина.',
        diff: 'Легко',
        time: '60 мин',
        img: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80&w=800',
        ingredients: [
          '6 яиц, разделить на белки и желтки',
          '1.5 стакана сахара',
          '2 стакана мелко молотых грецких орехов',
          '3 ст. л. мацовой муки',
          'Тертая цедра одного апельсина'
        ],
        instructions: [
          'Разогрейте духовку до 170°C и смажьте форму для выпечки.',
          'Взбейте белки с половиной сахара до крепких пиков.',
          'В отдельной миске взбейте желтки с оставшимся сахаром до светлой и пышной массы.',
          'Аккуратно вмешайте желтковую массу во взбитые белки.',
          'Добавьте орехи, мацовую муку и цедру апельсина и перемешайте до объединения.',
          'Вылейте в форму и выпекайте около 40-45 минут, пока зубочистка не будет выходить сухой.'
        ]
      },
      {
        title: 'Латкес',
        desc: 'Хрустящие золотистые картофельные оладьи, классика, которую всегда приятно есть.',
        diff: 'Легко',
        time: '30 мин',
        img: '/לביבות.jpg',
        ingredients: [
          '4 крупные картофелины, очищенные',
          '1 крупная луковица',
          '2 яйца',
          '3 ст. л. мацовой муки',
          'Соль и черный перец',
          'Масло для жарки'
        ],
        instructions: [
          'Натрите картофель и лук на крупной терке.',
          'Хорошо отожмите смесь от жидкости и переложите в миску.',
          'Добавьте яйца, мацовую муку, соль и перец и хорошо перемешайте.',
          'Разогрейте масло в широкой сковороде.',
          'Сформируйте оладьи из смеси и жарьте с обеих сторон до золотистого цвета и хрустящей корочки.',
          'Выложите на бумажные полотенца и подавайте горячими.'
        ]
      },
      {
        title: 'Харосет',
        desc: 'Сладкая и символичная паста для кеары, в богатой и ароматной версии.',
        diff: 'Легко',
        time: '15 мин',
        img: '/חרוסת.jpg',
        ingredients: [
          '1 стакан мелко нарезанных грецких орехов',
          '1 стакан фиников без косточек, нарезанных (или финиковой пасты)',
          '1 тертое яблоко',
          '1/2 стакана сладкого красного вина',
          '1 ч. л. корицы'
        ],
        instructions: [
          'Поместите все ингредиенты в кухонный комбайн.',
          'Измельчайте короткими импульсами до получения однородной смеси, но с некоторой текстурой (не полностью гладкой).',
          'Попробуйте и отрегулируйте приправы (можно добавить больше вина или корицы по вкусу).',
          'Переложите в сервировочную миску и храните в холодильнике до подачи.'
        ]
      },
      {
        title: 'Гефилте фиш',
        desc: 'Традиционные рыбные котлеты в сладковатом соусе, классическая закуска для праздничного стола.',
        diff: 'Сложно',
        time: '120 мин',
        img: '/גפילטע פיש.jpg',
        ingredients: [
          '1 кг фарша из карпа',
          '2 крупные луковицы (1 тертая, 1 нарезанная для соуса)',
          '2 нарезанные моркови',
          '3 яйца',
          '1/2 стакана мацовой муки',
          'Соль, черный перец и сахар по вкусу'
        ],
        instructions: [
          'Смешайте рыбный фарш с тертым луком, яйцами, мацовой мукой и специями. Уберите в холодильник на полчаса.',
          'В широкой кастрюле выложите нарезанный лук и морковь, добавьте воду, соль, перец и сахар и доведите до кипения.',
          'Сформируйте котлеты из рыбной смеси и аккуратно опустите в кипящую кастрюлю.',
          'Варите на слабом огне около полутора часов.',
          'Остудите и подавайте холодными, желательно с хреном на гарнир.'
        ]
      },
      {
        title: 'Жаркое из говядины',
        desc: 'Праздничное и впечатляющее основное блюдо, нежное мясо, тающее во рту в насыщенном соусе.',
        diff: 'Средне',
        time: '180 мин',
        img: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=800',
        ingredients: [
          '1.5 кг говядины для жаркого (номер 5 или 6)',
          '2 крупные луковицы, нарезанные',
          '3 моркови, крупно нарезанные',
          '2 стакана сухого красного вина',
          '3 стакана говяжьего бульона или воды',
          'Лавровый лист, душистый перец, соль и перец'
        ],
        instructions: [
          'Разогрейте масло в тяжелой кастрюле и обжарьте мясо со всех сторон до румяной корочки. Переложите на тарелку.',
          'В той же кастрюле обжарьте лук и морковь до золотистого цвета.',
          'Верните мясо в кастрюлю, добавьте вино, бульон и специи и доведите до кипения.',
          'Убавьте огонь, накройте крышкой и тушите около двух с половиной - трех часов, пока мясо не станет очень мягким.',
          'Достаньте мясо, нарежьте и подавайте с соусом.'
        ]
      },
      {
        title: 'Прозрачный куриный бульон',
        desc: 'Золотистый и прозрачный куриный бульон, "еврейский пенициллин", идеально подходит с кнейдлах.',
        diff: 'Легко',
        time: '120 мин',
        img: '/מרק עוף צח.jpg',
        ingredients: [
          '1 целая курица, разрезанная на части (или куриные части с костями)',
          '3 моркови',
          '2 луковицы',
          '2 кабачка',
          'Корень сельдерея и корень петрушки',
          'Пучок укропа и петрушки',
          'Соль и цельный черный перец'
        ],
        instructions: [
          'Положите курицу в большую кастрюлю и залейте холодной водой. Доведите до кипения и снимите образовавшуюся пену.',
          'Добавьте все овощи (целиком или крупно нарезанные) и специи.',
          'Варите на очень слабом огне (легкое кипение) около двух часов.',
          'Процедите бульон (можно оставить морковь и курицу для подачи) и подавайте горячим.'
        ]
      },
      {
        title: 'Запеченный картофель',
        desc: 'Классический и любимый гарнир, картофель хрустящий снаружи и мягкий внутри.',
        diff: 'Легко',
        time: '60 мин',
        img: '/תפוחי אדמה בתנור.jpg',
        ingredients: [
          '1 кг мелкого картофеля или нарезанного кубиками',
          '1/4 стакана оливкового масла',
          '3 измельченных зубчика чеснока',
          '1 ст. л. сладкой паприки',
          'Крупная соль и черный перец',
          'Веточки розмарина или тимьяна (по желанию)'
        ],
        instructions: [
          'Разогрейте духовку до 200°C.',
          'В большой миске смешайте картофель с оливковым маслом и специями до равномерного покрытия.',
          'Разложите картофель на противне в один слой.',
          'Запекайте около 45-50 минут, пока картофель не станет золотистым и хрустящим, один раз перемешав в середине запекания.'
        ]
      },
      {
        title: 'Арахисовое печенье',
        desc: 'Мягкое и идеальное арахисовое печенье для Песаха, тающее во рту.',
        diff: 'Легко',
        time: '20 мин',
        img: '/עוגיות בוטנים.jpg',
        ingredients: [
          '3 стакана жареного арахиса (без соли) и мелко молотого',
          '1 стакан сахара',
          '2 яйца',
          '1 ч. л. качественного экстракта ванили',
          'Сахарная пудра для обсыпки'
        ],
        instructions: [
          'Разогрейте духовку до 170°C и застелите противень пергаментной бумагой.',
          'В миске смешайте молотый арахис с сахаром.',
          'Добавьте яйца и экстракт ванили и вымешивайте руками до получения однородного и слегка липкого теста.',
          'Слегка смочите руки и сформируйте из теста маленькие шарики (размером с грецкий орех).',
          'Щедро обваляйте каждый шарик в сахарной пудре и выложите на противень на расстоянии друг от друга.',
          'Выпекайте около 12-15 минут, пока печенье не потрескается. Достаньте из духовки, пока оно еще мягкое (оно затвердеет при остывании).'
        ]
      }
    ],
    fr: [
      {
        title: 'Matsa maison',
        desc: 'Préparez votre propre matsa croustillante et délicieuse en moins de 18 minutes de travail.',
        diff: 'Difficile',
        time: '25 min',
        img: '/מצות ביתיות.jpg',
        ingredients: [
          '2 tasses de farine de blé (conservée dans un endroit sec et frais)',
          '1/2 tasse d\'eau froide',
          'Pincée de sel'
        ],
        instructions: [
          'Préchauffez le four à la chaleur maximale (250°C) avec une plaque à pâtisserie à l\'intérieur.',
          'Mélangez la farine et l\'eau dans un bol et pétrissez rapidement pour obtenir une pâte uniforme.',
          'Divisez la pâte en petites boules et étalez chaque boule en une feuille très fine.',
          'Piquez les feuilles avec une fourchette pour éviter qu\'elles ne gonflent.',
          'Faites cuire dans le four chaud pendant 2-3 minutes jusqu\'à ce qu\'elles soient légèrement dorées. Attention : tout le processus doit être terminé en 18 minutes !'
        ]
      },
      {
        title: 'Kneidlach (Boulettes de Matsa)',
        desc: 'Le secret de boulettes de matsa parfaites et moelleuses qui fondent simplement dans la bouche dans la soupe.',
        diff: 'Moyen',
        time: '45 min',
        img: '/קניידלך.jpg',
        ingredients: [
          '1 tasse de farine de matsa',
          '2 gros œufs',
          '2 c. à soupe d\'huile',
          '1/2 tasse d\'eau bouillante',
          'Sel et poivre noir au goût'
        ],
        instructions: [
          'Dans un bol, mélangez la farine de matsa avec le sel et le poivre.',
          'Ajoutez l\'huile et l\'eau bouillante et mélangez bien pour obtenir un mélange uniforme.',
          'Ajoutez les œufs et mélangez à nouveau. Couvrez le bol et réfrigérez pendant 30 minutes pour figer.',
          'Faites bouillir une casserole avec de l\'eau salée ou de la soupe au poulet.',
          'Formez de petites boules avec les mains mouillées et faites cuire dans la casserole pendant environ 10 minutes jusqu\'à ce qu\'elles flottent et soient tendres.'
        ]
      },
      {
        title: 'Gâteau aux noix',
        desc: 'Un dessert parfait sans hamets combinant des noix avec des arômes de chocolat et d\'orange.',
        diff: 'Facile',
        time: '60 min',
        img: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80&w=800',
        ingredients: [
          '6 œufs, séparés en blancs et jaunes',
          '1,5 tasse de sucre',
          '2 tasses de noix finement moulues',
          '3 c. à soupe de farine de matsa',
          'Zeste râpé d\'une orange'
        ],
        instructions: [
          'Préchauffez le four à 170°C et graissez un moule à gâteau.',
          'Battez les blancs d\'œufs avec la moitié du sucre en neige ferme.',
          'Dans un autre bol, battez les jaunes d\'œufs avec le reste du sucre jusqu\'à ce qu\'ils soient pâles et mousseux.',
          'Incorporez délicatement le mélange de jaunes d\'œufs aux blancs d\'œufs.',
          'Ajoutez les noix, la farine de matsa et le zeste d\'orange et incorporez jusqu\'à ce que le tout soit combiné.',
          'Versez dans le moule et faites cuire pendant environ 40-45 minutes jusqu\'à ce qu\'un cure-dent en ressorte sec.'
        ]
      },
      {
        title: 'Latkes',
        desc: 'Galettes de pommes de terre croustillantes et dorées, un classique toujours agréable à manger.',
        diff: 'Facile',
        time: '30 min',
        img: '/לביבות.jpg',
        ingredients: [
          '4 grosses pommes de terre, épluchées',
          '1 gros oignon',
          '2 œufs',
          '3 c. à soupe de farine de matsa',
          'Sel et poivre noir',
          'Huile pour friture'
        ],
        instructions: [
          'Râpez les pommes de terre et l\'oignon sur une râpe grossière.',
          'Pressez bien le mélange pour en extraire les liquides et transférez dans un bol.',
          'Ajoutez les œufs, la farine de matsa, le sel et le poivre et mélangez bien.',
          'Faites chauffer l\'huile dans une grande poêle.',
          'Formez des galettes avec le mélange et faites frire des deux côtés jusqu\'à ce qu\'elles soient dorées et croustillantes.',
          'Retirez sur du papier absorbant et servez chaud.'
        ]
      },
      {
        title: 'Harosset',
        desc: 'La pâte douce et symbolique du plat du Séder, dans une version riche et savoureuse.',
        diff: 'Facile',
        time: '15 min',
        img: '/חרוסת.jpg',
        ingredients: [
          '1 tasse de noix finement hachées',
          '1 tasse de dattes dénoyautées et hachées (ou pâte de dattes)',
          '1 pomme râpée',
          '1/2 tasse de vin rouge doux',
          '1 c. à café de cannelle'
        ],
        instructions: [
          'Mettez tous les ingrédients dans un robot culinaire.',
          'Mélangez par impulsions jusqu\'à obtenir un mélange uniforme mais avec un peu de texture (pas complètement lisse).',
          'Goûtez et ajustez l\'assaisonnement (vous pouvez ajouter plus de vin ou de cannelle selon votre goût).',
          'Transférez dans un bol de service et conservez au réfrigérateur jusqu\'au moment de servir.'
        ]
      },
      {
        title: 'Gefilte Fish',
        desc: 'Boulettes de poisson traditionnelles dans une sauce douce, une entrée classique pour la table de fête.',
        diff: 'Difficile',
        time: '120 min',
        img: '/גפילטע פיש.jpg',
        ingredients: [
          '1 kg de carpe hachée',
          '2 gros oignons (1 râpé, 1 tranché pour la sauce)',
          '2 carottes tranchées',
          '3 œufs',
          '1/2 tasse de farine de matsa',
          'Sel, poivre noir et sucre au goût'
        ],
        instructions: [
          'Mélangez le poisson haché avec l\'oignon râpé, les œufs, la farine de matsa et les épices. Réfrigérez pendant une demi-heure.',
          'Dans une grande casserole, disposez l\'oignon tranché et les carottes, ajoutez de l\'eau, du sel, du poivre et du sucre et portez à ébullition.',
          'Formez des boulettes avec le mélange de poisson et placez-les délicatement dans la casserole bouillonnante.',
          'Faites cuire à feu doux pendant environ une heure et demie.',
          'Laissez refroidir et servez froid, de préférence avec du raifort (chrein) à côté.'
        ]
      },
      {
        title: 'Rôti de bœuf',
        desc: 'Un plat principal festif et impressionnant, une viande tendre qui fond dans la bouche dans une sauce riche.',
        diff: 'Moyen',
        time: '180 min',
        img: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=800',
        ingredients: [
          '1,5 kg de rôti de bœuf (numéro 5 ou 6)',
          '2 gros oignons, hachés',
          '3 carottes, hachées grossièrement',
          '2 tasses de vin rouge sec',
          '3 tasses de bouillon de bœuf ou d\'eau',
          'Feuilles de laurier, piment de la Jamaïque, sel et poivre'
        ],
        instructions: [
          'Faites chauffer l\'huile dans une cocotte en fonte et saisissez la viande de tous les côtés jusqu\'à ce qu\'elle soit dorée. Retirez dans une assiette.',
          'Dans la même cocotte, faites revenir l\'oignon et les carottes jusqu\'à ce qu\'ils soient dorés.',
          'Remettez la viande dans la cocotte, ajoutez le vin, le bouillon et les épices et portez à ébullition.',
          'Baissez le feu, couvrez et laissez mijoter pendant environ deux heures et demie à trois heures, jusqu\'à ce que la viande soit très tendre.',
          'Retirez la viande, tranchez-la et servez avec la sauce.'
        ]
      },
      {
        title: 'Soupe de poulet claire',
        desc: 'Soupe de poulet dorée et claire, la "pénicilline juive", parfaite avec des kneidlach.',
        diff: 'Facile',
        time: '120 min',
        img: '/מרק עוף צח.jpg',
        ingredients: [
          '1 poulet entier, coupé en morceaux (ou morceaux de poulet avec os)',
          '3 carottes',
          '2 oignons',
          '2 courgettes',
          'Racine de céleri et racine de persil',
          'Botte d\'aneth et de persil',
          'Sel et grains de poivre noir entiers'
        ],
        instructions: [
          'Mettez le poulet dans une grande casserole et couvrez d\'eau froide. Portez à ébullition et écumez la mousse qui se forme.',
          'Ajoutez tous les légumes (entiers ou hachés grossièrement) et les épices.',
          'Faites cuire à feu très doux (frémissement léger) pendant environ deux heures.',
          'Filtrez la soupe (vous pouvez garder les carottes et le poulet pour le service) et servez chaud.'
        ]
      },
      {
        title: 'Pommes de terre rôties',
        desc: 'Un plat d\'accompagnement classique et apprécié, des pommes de terre croustillantes à l\'extérieur et moelleuses à l\'intérieur.',
        diff: 'Facile',
        time: '60 min',
        img: '/תפוחי אדמה בתנור.jpg',
        ingredients: [
          '1 kg de petites pommes de terre ou de pommes de terre en dés',
          '1/4 tasse d\'huile d\'olive',
          '3 gousses d\'ail écrasées',
          '1 c. à soupe de paprika doux',
          'Gros sel et poivre noir',
          'Brins de romarin ou de thym (facultatif)'
        ],
        instructions: [
          'Préchauffez le four à 200°C.',
          'Dans un grand bol, mélangez les pommes de terre avec l\'huile d\'olive et les épices jusqu\'à ce qu\'elles soient uniformément enrobées.',
          'Étalez les pommes de terre sur une plaque à pâtisserie en une seule couche.',
          'Faites cuire pendant environ 45-50 minutes jusqu\'à ce que les pommes de terre soient dorées et croustillantes, en remuant une fois à mi-cuisson.'
        ]
      },
      {
        title: 'Biscuits aux cacahuètes',
        desc: 'Biscuits aux cacahuètes moelleux et parfaits pour la Pâque, fondant dans la bouche.',
        diff: 'Facile',
        time: '20 min',
        img: '/עוגיות בוטנים.jpg',
        ingredients: [
          '3 tasses de cacahuètes grillées (non salées) et finement moulues',
          '1 tasse de sucre',
          '2 œufs',
          '1 c. à café d\'extrait de vanille de haute qualité',
          'Sucre glace pour l\'enrobage'
        ],
        instructions: [
          'Préchauffez le four à 170°C et tapissez une plaque à pâtisserie de papier sulfurisé.',
          'Dans un bol, mélangez les cacahuètes moulues avec le sucre.',
          'Ajoutez les œufs et l\'extrait de vanille et pétrissez avec vos mains jusqu\'à obtenir une pâte uniforme et légèrement collante.',
          'Mouillez légèrement vos mains et formez de petites boules avec la pâte (de la taille d\'une noix).',
          'Roulez généreusement chaque boule dans le sucre glace et placez-les sur la plaque en les espaçant.',
          'Faites cuire pendant environ 12-15 minutes jusqu\'à ce que les biscuits se fissurent. Retirez du four pendant qu\'ils sont encore mous (ils durciront en refroidissant).'
        ]
      }
    ],
    es: [
      {
        title: 'Matzá casera',
        desc: 'Prepara tu propia matzá crujiente y deliciosa en menos de 18 minutos de trabajo.',
        diff: 'Difícil',
        time: '25 min',
        img: '/מצות ביתיות.jpg',
        ingredients: [
          '2 tazas de harina de trigo (guardada en un lugar seco y fresco)',
          '1/2 taza de agua fría',
          'Pizca de sal'
        ],
        instructions: [
          'Precalienta el horno a la temperatura máxima (250°C) con una bandeja para hornear adentro.',
          'Mezcla la harina y el agua en un bol y amasa rápidamente hasta obtener una masa uniforme.',
          'Divide la masa en bolitas y estira cada bolita hasta formar una lámina muy fina.',
          'Perfora las láminas con un tenedor para evitar que suban.',
          'Hornea en el horno caliente durante 2-3 minutos hasta que estén ligeramente doradas. Nota: ¡Todo el proceso debe completarse en 18 minutos!'
        ]
      },
      {
        title: 'Kneidlach (Bolas de Matzá)',
        desc: 'El secreto para unas bolas de matzá perfectas y esponjosas que simplemente se deshacen en la boca en la sopa.',
        diff: 'Medio',
        time: '45 min',
        img: '/קניידלך.jpg',
        ingredients: [
          '1 taza de harina de matzá',
          '2 huevos grandes',
          '2 cucharadas de aceite',
          '1/2 taza de agua hirviendo',
          'Sal y pimienta negra al gusto'
        ],
        instructions: [
          'En un bol, mezcla la harina de matzá con la sal y la pimienta.',
          'Agrega el aceite y el agua hirviendo y mezcla bien hasta obtener una mezcla uniforme.',
          'Agrega los huevos y mezcla nuevamente. Cubre el bol y refrigera por 30 minutos para que cuaje.',
          'Hierve una olla con agua salada o sopa de pollo.',
          'Forma bolitas con las manos mojadas y cocina en la olla durante unos 10 minutos hasta que floten y estén suaves.'
        ]
      },
      {
        title: 'Pastel de nueces',
        desc: 'Un postre perfecto sin jametz que combina nueces con aromas de chocolate y naranja.',
        diff: 'Fácil',
        time: '60 min',
        img: 'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80&w=800',
        ingredients: [
          '6 huevos, separados en claras y yemas',
          '1.5 tazas de azúcar',
          '2 tazas de nueces finamente molidas',
          '3 cucharadas de harina de matzá',
          'Ralladura de una naranja'
        ],
        instructions: [
          'Precalienta el horno a 170°C y engrasa un molde para hornear.',
          'Bate las claras de huevo con la mitad del azúcar a punto de nieve.',
          'En un bol aparte, bate las yemas de huevo con el azúcar restante hasta que estén pálidas y esponjosas.',
          'Incorpora suavemente la mezcla de yemas a las claras de huevo.',
          'Agrega las nueces, la harina de matzá y la ralladura de naranja y mezcla hasta que se combinen.',
          'Vierte en el molde y hornea durante unos 40-45 minutos hasta que un palillo salga limpio.'
        ]
      },
      {
        title: 'Latkes',
        desc: 'Tortitas de patata crujientes y doradas, un clásico que siempre es un placer comer.',
        diff: 'Fácil',
        time: '30 min',
        img: '/לביבות.jpg',
        ingredients: [
          '4 patatas grandes, peladas',
          '1 cebolla grande',
          '2 huevos',
          '3 cucharadas de harina de matzá',
          'Sal y pimienta negra',
          'Aceite para freír'
        ],
        instructions: [
          'Ralla las patatas y la cebolla en un rallador grueso.',
          'Exprime bien la mezcla para eliminar los líquidos y transfiérela a un bol.',
          'Agrega los huevos, la harina de matzá, la sal y la pimienta y mezcla bien.',
          'Calienta aceite en una sartén ancha.',
          'Forma tortitas con la mezcla y fríe por ambos lados hasta que estén doradas y crujientes.',
          'Retira a toallas de papel y sirve caliente.'
        ]
      },
      {
        title: 'Jaróset',
        desc: 'La pasta dulce y simbólica del plato del Séder, en una versión rica y sabrosa.',
        diff: 'Fácil',
        time: '15 min',
        img: '/חרוסת.jpg',
        ingredients: [
          '1 taza de nueces finamente picadas',
          '1 taza de dátiles deshuesados y picados (o pasta de dátiles)',
          '1 manzana rallada',
          '1/2 taza de vino tinto dulce',
          '1 cucharadita de canela'
        ],
        instructions: [
          'Pon todos los ingredientes en un procesador de alimentos.',
          'Pulsa hasta obtener una mezcla uniforme pero con algo de textura (no completamente suave).',
          'Prueba y ajusta la sazón (puedes agregar más vino o canela al gusto).',
          'Transfiere a un bol para servir y guarda en el refrigerador hasta el momento de servir.'
        ]
      },
      {
        title: 'Gefilte Fish',
        desc: 'Tortitas de pescado tradicionales en salsa dulce, un aperitivo clásico para la mesa festiva.',
        diff: 'Difícil',
        time: '120 min',
        img: '/גפילטע פיש.jpg',
        ingredients: [
          '1 kg de carpa molida',
          '2 cebollas grandes (1 rallada, 1 en rodajas para la salsa)',
          '2 zanahorias en rodajas',
          '3 huevos',
          '1/2 taza de harina de matzá',
          'Sal, pimienta negra y azúcar al gusto'
        ],
        instructions: [
          'Mezcla el pescado molido con la cebolla rallada, los huevos, la harina de matzá y las especias. Refrigera por media hora.',
          'En una olla ancha, acomoda la cebolla en rodajas y las zanahorias, agrega agua, sal, pimienta y azúcar y lleva a ebullición.',
          'Forma tortitas con la mezcla de pescado y colócalas suavemente en la olla burbujeante.',
          'Cocina a fuego lento durante aproximadamente una hora y media.',
          'Deja enfriar y sirve frío, preferiblemente con rábano picante (jrein) al lado.'
        ]
      },
      {
        title: 'Asado de ternera',
        desc: 'Un plato principal festivo e impresionante, carne tierna que se deshace en la boca en una rica salsa.',
        diff: 'Medio',
        time: '180 min',
        img: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=800',
        ingredients: [
          '1.5 kg de asado de ternera (número 5 o 6)',
          '2 cebollas grandes, picadas',
          '3 zanahorias, picadas en trozos grandes',
          '2 tazas de vino tinto seco',
          '3 tazas de caldo de res o agua',
          'Hojas de laurel, pimienta de Jamaica, sal y pimienta'
        ],
        instructions: [
          'Calienta aceite en una olla pesada y sella la carne por todos lados hasta que se dore. Retira a un plato.',
          'En la misma olla, fríe la cebolla y las zanahorias hasta que estén doradas.',
          'Regresa la carne a la olla, agrega el vino, el caldo y las especias y lleva a ebullición.',
          'Baja el fuego, tapa y cocina a fuego lento durante unas dos horas y media a tres horas, hasta que la carne esté muy tierna.',
          'Retira la carne, córtala en rodajas y sirve con la salsa.'
        ]
      },
      {
        title: 'Sopa de pollo clara',
        desc: 'Sopa de pollo dorada y clara, "penicilina judía", perfecta con kneidlach.',
        diff: 'Fácil',
        time: '120 min',
        img: '/מרק עוף צח.jpg',
        ingredients: [
          '1 pollo entero, cortado en trozos (o partes de pollo con hueso)',
          '3 zanahorias',
          '2 cebollas',
          '2 calabacines',
          'Raíz de apio y raíz de perejil',
          'Manojo de eneldo y perejil',
          'Sal y granos de pimienta negra enteros'
        ],
        instructions: [
          'Pon el pollo en una olla grande y cúbrelo con agua fría. Lleva a ebullición y quita la espuma que se forma.',
          'Agrega todas las verduras (enteras o picadas en trozos grandes) y las especias.',
          'Cocina a fuego muy lento (hervor suave) durante unas dos horas.',
          'Cuela la sopa (puedes guardar las zanahorias y el pollo para servir) y sirve caliente.'
        ]
      },
      {
        title: 'Patatas asadas',
        desc: 'Una guarnición clásica y querida, patatas crujientes por fuera y suaves por dentro.',
        diff: 'Fácil',
        time: '60 min',
        img: '/תפוחי אדמה בתנור.jpg',
        ingredients: [
          '1 kg de patatas pequeñas o patatas en cubitos',
          '1/4 taza de aceite de oliva',
          '3 dientes de ajo machacados',
          '1 cucharada de pimentón dulce',
          'Sal gruesa y pimienta negra',
          'Ramitas de romero o tomillo (opcional)'
        ],
        instructions: [
          'Precalienta el horno a 200°C.',
          'En un bol grande, mezcla las patatas con aceite de oliva y especias hasta que estén cubiertas uniformemente.',
          'Extiende las patatas en una bandeja para hornear en una sola capa.',
          'Hornea durante unos 45-50 minutos hasta que las patatas estén doradas y crujientes, revolviendo una vez a la mitad del horneado.'
        ]
      },
      {
        title: 'Galletas de cacahuete',
        desc: 'Galletas de cacahuete suaves y perfectas para Pésaj, que se deshacen en la boca.',
        diff: 'Fácil',
        time: '20 min',
        img: '/עוגיות בוטנים.jpg',
        ingredients: [
          '3 tazas de cacahuetes tostados (sin sal) y finamente molidos',
          '1 taza de azúcar',
          '2 huevos',
          '1 cucharadita de extracto de vainilla de alta calidad',
          'Azúcar en polvo para cubrir'
        ],
        instructions: [
          'Precalienta el horno a 170°C y forra una bandeja para hornear con papel pergamino.',
          'En un bol, mezcla los cacahuetes molidos con el azúcar.',
          'Agrega los huevos y el extracto de vainilla y amasa con las manos hasta obtener una masa uniforme y ligeramente pegajosa.',
          'Mójate un poco las manos y forma bolitas con la masa (del tamaño de una nuez).',
          'Pasa generosamente cada bolita por azúcar en polvo y colócalas en la bandeja con espacios entre ellas.',
          'Hornea durante unos 12-15 minutos hasta que las galletas se agrieten. Retira del horno mientras aún estén suaves (se endurecerán al enfriarse).'
        ]
      }
    ]
  };

  return recipes[lang];
};
