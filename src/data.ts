import { Language } from './App';

export const getSederSymbols = (lang: Language) => {
  const symbols = {
    he: [
      {
        icon: 'Leaf',
        title: 'מרור',
        desc: 'מסמל את המרירות והסבל שחוו בני ישראל בשעבוד מצרים. נהוג להשתמש בחסה או בשורש חזרת מגורד. אכילת המרור מזכירה לנו שגם ברגעי חירות, עלינו לזכור את טעם העבדות כדי להעריך את החופש. הטעם המר והחריף מעורר דמעות, ממש כפי שדמעו אבותינו תחת עול המצרים. זוהי תזכורת היסטורית ומוסרית חזקה לדורות.'
      },
      {
        icon: 'Brain',
        title: 'חזרת',
        desc: 'משמשת כמרור נוסף ונאכלת יחד עם המרור הראשון או בכריכת "כורך" עם מצה וחרוסת. לרוב מדובר בשורש חריף או עלי חסה מרירים. החזרת מסמלת את קושי העבודה והשעבוד שהלכו והחמירו עם הזמן. השילוב שלה עם החרוסת המתוקה מסמל את התקווה והאמונה גם בזמנים הקשים ביותר.'
      },
      {
        icon: 'Cake',
        title: 'חרוסת',
        desc: 'תערובת מתוקה של תפוחים, אגוזים, תמרים, יין וקינמון. צבעה ומרקמה מזכירים את הטיט שבו השתמשו בני ישראל לבניית ערי המסכנות במצרים. למרות משמעותה הקשורה לעבדות, טעמה מתוק ומסמל את התקווה והגאולה. נהוג לטבול בה את המרור כדי להמתיק מעט את טעם הסבל. כל עדה מכינה את החרוסת לפי מסורת ייחודית משלה.'
      },
      {
        icon: 'Sprout',
        title: 'כרפס',
        desc: 'ירק (לרוב תפוח אדמה, סלרי או פטרוזיליה) המסמל את התחדשות האביב והתקווה. בתחילת הסדר טובלים את הכרפס במי מלח ואוכלים אותו. מי המלח מסמלים את הדמעות שרעו בני ישראל בעבודת הפרך. אכילת הכרפס נועדה גם לעורר את סקרנותם של הילדים כדי שישאלו "מה נשתנה".'
      },
      {
        icon: 'Utensils',
        title: 'זרוע',
        desc: 'חתיכת בשר צלויה עם עצם, לרוב זרוע של כבש או כנף עוף. הזרוע משמשת זכר לקרבן הפסח שהיו מקריבים בבית המקדש בירושלים בליל התקדש החג. היא מסמלת גם את "הזרוע הנטויה" שבה הוציא אלוהים את בני ישראל ממצרים. את הזרוע לא אוכלים במהלך הסדר, אלא היא נשארת על הקערה כסמל בלבד.'
      },
      {
        icon: 'Egg',
        title: 'ביצה',
        desc: 'ביצה קשה וצלויה, זכר לקרבן חגיגה שהוקרב בבית המקדש. הביצה מסמלת גם אבלות על חורבן בית המקדש, כיוון שאין לה פתח (כמו לאבל שאין לו מילים). בנוסף, הביצה מסמלת את מעגל החיים, ההמשכיות והתקווה לעתיד טוב יותר. בניגוד למאכלים אחרים שמתרככים בבישול, הביצה מתקשה, מה שמסמל את עמידותו של עם ישראל מול קשיים.'
      }
    ],
    en: [
      {
        icon: 'Leaf',
        title: 'Maror',
        desc: 'Symbolizes the bitterness and suffering experienced by the Israelites in Egyptian slavery. It is customary to use lettuce or grated horseradish root. Eating the Maror reminds us that even in moments of freedom, we must remember the taste of slavery to appreciate freedom. The bitter and sharp taste evokes tears, just as our ancestors wept under the Egyptian yoke. This is a strong historical and moral reminder for generations.'
      },
      {
        icon: 'Brain',
        title: 'Chazeret',
        desc: 'Serves as an additional bitter herb and is eaten together with the first Maror or in the "Korech" sandwich with matzah and charoset. It is usually a sharp root or bitter lettuce leaves. The Chazeret symbolizes the hardship of labor and slavery that worsened over time. Its combination with the sweet charoset symbolizes hope and faith even in the hardest times.'
      },
      {
        icon: 'Cake',
        title: 'Charoset',
        desc: 'A sweet mixture of apples, nuts, dates, wine, and cinnamon. Its color and texture resemble the mortar used by the Israelites to build the store cities in Egypt. Despite its meaning related to slavery, its taste is sweet and symbolizes hope and redemption. It is customary to dip the Maror in it to slightly sweeten the taste of suffering. Each community prepares charoset according to its own unique tradition.'
      },
      {
        icon: 'Sprout',
        title: 'Karpas',
        desc: 'A vegetable (usually potato, celery, or parsley) symbolizing the renewal of spring and hope. At the beginning of the Seder, the Karpas is dipped in salt water and eaten. The salt water symbolizes the tears shed by the Israelites in hard labor. Eating the Karpas is also intended to arouse the curiosity of the children so they will ask "Mah Nishtanah" (Why is this night different).'
      },
      {
        icon: 'Utensils',
        title: 'Zeroa',
        desc: 'A roasted piece of meat with a bone, usually a lamb shank or chicken wing. The Zeroa serves as a reminder of the Passover sacrifice offered in the Temple in Jerusalem on the eve of the holiday. It also symbolizes the "outstretched arm" with which God brought the Israelites out of Egypt. The Zeroa is not eaten during the Seder, but remains on the plate as a symbol only.'
      },
      {
        icon: 'Egg',
        title: 'Beitzah',
        desc: 'A hard-boiled and roasted egg, a reminder of the festival sacrifice offered in the Temple. The egg also symbolizes mourning for the destruction of the Temple, as it has no opening (like a mourner who has no words). In addition, the egg symbolizes the circle of life, continuity, and hope for a better future. Unlike other foods that soften during cooking, the egg hardens, symbolizing the resilience of the people of Israel in the face of difficulties.'
      }
    ],
    ru: [
      {
        icon: 'Leaf',
        title: 'Марор',
        desc: 'Символизирует горечь и страдания, пережитые израильтянами в египетском рабстве. Принято использовать салат или тертый корень хрена. Поедание марора напоминает нам, что даже в моменты свободы мы должны помнить вкус рабства, чтобы ценить свободу. Горький и острый вкус вызывает слезы, так же как наши предки плакали под египетским игом. Это сильное историческое и моральное напоминание для поколений.'
      },
      {
        icon: 'Brain',
        title: 'Хазерет',
        desc: 'Служит дополнительной горькой зеленью и съедается вместе с первым марором или в сэндвиче "Корех" с мацой и харосетом. Обычно это острый корень или горькие листья салата. Хазерет символизирует тяжесть труда и рабства, которые со временем ухудшались. Его сочетание со сладким харосетом символизирует надежду и веру даже в самые трудные времена.'
      },
      {
        icon: 'Cake',
        title: 'Харосет',
        desc: 'Сладкая смесь яблок, орехов, фиников, вина и корицы. Ее цвет и текстура напоминают раствор, использовавшийся израильтянами для строительства городов-складов в Египте. Несмотря на значение, связанное с рабством, ее вкус сладок и символизирует надежду и искупление. Принято обмакивать в нее марор, чтобы слегка подсластить вкус страданий. Каждая община готовит харосет по своей уникальной традиции.'
      },
      {
        icon: 'Sprout',
        title: 'Карпас',
        desc: 'Овощ (обычно картофель, сельдерей или петрушка), символизирующий обновление весны и надежду. В начале седера карпас обмакивают в соленую воду и съедают. Соленая вода символизирует слезы, пролитые израильтянами на тяжелых работах. Поедание карпаса также призвано пробудить любопытство детей, чтобы они спросили "Ма ништана" (Чем отличается эта ночь).'
      },
      {
        icon: 'Utensils',
        title: 'Зроа',
        desc: 'Жареный кусок мяса с костью, обычно баранья рулька или куриное крылышко. Зроа служит напоминанием о пасхальной жертве, приносимой в Храме в Иерусалиме накануне праздника. Она также символизирует "простертую руку", которой Бог вывел израильтян из Египта. Зроа не едят во время седера, она остается на тарелке только как символ.'
      },
      {
        icon: 'Egg',
        title: 'Бейца',
        desc: 'Сваренное вкрутую и обжаренное яйцо, напоминание о праздничной жертве, приносимой в Храме. Яйцо также символизирует траур по разрушению Храма, так как у него нет отверстия (как у скорбящего, у которого нет слов). Кроме того, яйцо символизирует круг жизни, преемственность и надежду на лучшее будущее. В отличие от других продуктов, которые размягчаются при варке, яйцо твердеет, символизируя стойкость народа Израиля перед лицом трудностей.'
      }
    ],
    fr: [
      {
        icon: 'Leaf',
        title: 'Maror',
        desc: 'Symbolise l\'amertume et la souffrance vécues par les Israélites lors de l\'esclavage en Égypte. Il est de coutume d\'utiliser de la laitue ou de la racine de raifort râpée. Manger le Maror nous rappelle que même dans les moments de liberté, nous devons nous souvenir du goût de l\'esclavage pour apprécier la liberté. Le goût amer et piquant évoque des larmes, tout comme nos ancêtres ont pleuré sous le joug égyptien. C\'est un rappel historique et moral fort pour les générations.'
      },
      {
        icon: 'Brain',
        title: 'Hazéret',
        desc: 'Sert d\'herbe amère supplémentaire et est mangé avec le premier Maror ou dans le sandwich "Korech" avec de la matsa et du harosset. C\'est généralement une racine piquante ou des feuilles de laitue amères. Le Hazéret symbolise la dureté du travail et de l\'esclavage qui s\'est aggravée avec le temps. Sa combinaison avec le harosset doux symbolise l\'espoir et la foi même dans les moments les plus difficiles.'
      },
      {
        icon: 'Cake',
        title: 'Harosset',
        desc: 'Un mélange sucré de pommes, de noix, de dattes, de vin et de cannelle. Sa couleur et sa texture rappellent le mortier utilisé par les Israélites pour construire les villes-entrepôts en Égypte. Malgré sa signification liée à l\'esclavage, son goût est doux et symbolise l\'espoir et la rédemption. Il est de coutume d\'y tremper le Maror pour adoucir légèrement le goût de la souffrance. Chaque communauté prépare le harosset selon sa propre tradition unique.'
      },
      {
        icon: 'Sprout',
        title: 'Karpas',
        desc: 'Un légume (généralement de la pomme de terre, du céleri ou du persil) symbolisant le renouveau du printemps et l\'espoir. Au début du Séder, le Karpas est trempé dans de l\'eau salée et mangé. L\'eau salée symbolise les larmes versées par les Israélites lors des travaux forcés. Manger le Karpas vise également à éveiller la curiosité des enfants afin qu\'ils demandent "Mah Nishtanah" (Pourquoi cette nuit est-elle différente).'
      },
      {
        icon: 'Utensils',
        title: 'Zéroa',
        desc: 'Un morceau de viande rôti avec un os, généralement un jarret d\'agneau ou une aile de poulet. Le Zéroa sert de rappel du sacrifice de la Pâque offert dans le Temple de Jérusalem à la veille de la fête. Il symbolise également le "bras étendu" avec lequel Dieu a fait sortir les Israélites d\'Égypte. Le Zéroa n\'est pas mangé pendant le Séder, mais reste sur le plat uniquement comme symbole.'
      },
      {
        icon: 'Egg',
        title: 'Beitsa',
        desc: 'Un œuf dur et rôti, rappel du sacrifice de fête offert dans le Temple. L\'œuf symbolise également le deuil de la destruction du Temple, car il n\'a pas d\'ouverture (comme une personne en deuil qui n\'a pas de mots). De plus, l\'œuf symbolise le cycle de la vie, la continuité et l\'espoir d\'un avenir meilleur. Contrairement à d\'autres aliments qui ramollissent à la cuisson, l\'œuf durcit, symbolisant la résilience du peuple d\'Israël face aux difficultés.'
      }
    ],
    es: [
      {
        icon: 'Leaf',
        title: 'Maror',
        desc: 'Simboliza la amargura y el sufrimiento experimentados por los israelitas en la esclavitud egipcia. Es costumbre usar lechuga o raíz de rábano picante rallada. Comer el Maror nos recuerda que incluso en momentos de libertad, debemos recordar el sabor de la esclavitud para apreciar la libertad. El sabor amargo y fuerte evoca lágrimas, al igual que nuestros antepasados lloraron bajo el yugo egipcio. Este es un fuerte recordatorio histórico y moral para las generaciones.'
      },
      {
        icon: 'Brain',
        title: 'Jazéret',
        desc: 'Sirve como una hierba amarga adicional y se come junto con el primer Maror o en el sándwich "Korech" con matzá y jaróset. Por lo general, es una raíz fuerte o hojas de lechuga amargas. El Jazéret simboliza la dureza del trabajo y la esclavitud que empeoró con el tiempo. Su combinación con el dulce jaróset simboliza la esperanza y la fe incluso en los momentos más difíciles.'
      },
      {
        icon: 'Cake',
        title: 'Jaróset',
        desc: 'Una mezcla dulce de manzanas, nueces, dátiles, vino y canela. Su color y textura se asemejan al mortero utilizado por los israelitas para construir las ciudades de almacenamiento en Egipto. A pesar de su significado relacionado con la esclavitud, su sabor es dulce y simboliza la esperanza y la redención. Es costumbre mojar el Maror en él para endulzar ligeramente el sabor del sufrimiento. Cada comunidad prepara el jaróset según su propia tradición única.'
      },
      {
        icon: 'Sprout',
        title: 'Karpás',
        desc: 'Una verdura (generalmente papa, apio o perejil) que simboliza la renovación de la primavera y la esperanza. Al comienzo del Séder, el Karpás se sumerge en agua salada y se come. El agua salada simboliza las lágrimas derramadas por los israelitas en trabajos forzados. Comer el Karpás también tiene la intención de despertar la curiosidad de los niños para que pregunten "Mah Nishtaná" (¿Por qué esta noche es diferente?).'
      },
      {
        icon: 'Utensils',
        title: 'Zeroa',
        desc: 'Un trozo de carne asada con hueso, generalmente un hueso de cordero o un ala de pollo. El Zeroa sirve como recordatorio del sacrificio de Pésaj ofrecido en el Templo de Jerusalén en la víspera de la festividad. También simboliza el "brazo extendido" con el que Dios sacó a los israelitas de Egipto. El Zeroa no se come durante el Séder, sino que permanece en el plato solo como símbolo.'
      },
      {
        icon: 'Egg',
        title: 'Beitzá',
        desc: 'Un huevo duro y asado, un recordatorio del sacrificio del festival ofrecido en el Templo. El huevo también simboliza el duelo por la destrucción del Templo, ya que no tiene apertura (como un doliente que no tiene palabras). Además, el huevo simboliza el círculo de la vida, la continuidad y la esperanza de un futuro mejor. A diferencia de otros alimentos que se ablandan durante la cocción, el huevo se endurece, simbolizando la resistencia del pueblo de Israel frente a las dificultades.'
      }
    ]
  };

  return symbols[lang];
};

export const getMahNishtanah = (lang: Language) => {
  const questions = {
    he: [
      'שבכל הלילות אנו אוכלים חמץ ומצה, הלילה הזה כולו מצה.',
      'שבכל הלילות אנו אוכלים שאר ירקות, הלילה הזה מרור.',
      'שבכל הלילות אין אנו מטבילין אפילו פעם אחת, הלילה הזה שתי פעמים.',
      'שבכל הלילות אנו אוכלים בין יושבין ובין מסובין, הלילה הזה כולנו מסובין.'
    ],
    en: [
      'On all other nights we eat either leavened bread or matzah, but on this night we eat only matzah.',
      'On all other nights we eat all kinds of vegetables, but on this night we eat bitter herbs.',
      'On all other nights we do not dip even once, but on this night we dip twice.',
      'On all other nights we eat either sitting upright or reclining, but on this night we all recline.'
    ],
    ru: [
      'В остальные ночи мы едим хамец и мацу, а в эту ночь — только мацу.',
      'В остальные ночи мы едим разную зелень, а в эту ночь — горькую зелень (марор).',
      'В остальные ночи мы не обмакиваем еду ни разу, а в эту ночь — дважды.',
      'В остальные ночи мы едим и сидя, и облокотившись, а в эту ночь — все облокотившись.'
    ],
    fr: [
      'Toutes les autres nuits, nous mangeons du pain levé ou de la matsa, mais cette nuit, nous ne mangeons que de la matsa.',
      'Toutes les autres nuits, nous mangeons toutes sortes de légumes, mais cette nuit, nous mangeons des herbes amères.',
      'Toutes les autres nuits, nous ne trempons même pas une fois, mais cette nuit, nous trempons deux fois.',
      'Toutes les autres nuits, nous mangeons assis ou accoudés, mais cette nuit, nous sommes tous accoudés.'
    ],
    es: [
      'En todas las demás noches comemos pan con levadura o matzá, pero en esta noche solo comemos matzá.',
      'En todas las demás noches comemos todo tipo de verduras, pero en esta noche comemos hierbas amargas.',
      'En todas las demás noches no remojamos ni una sola vez, pero en esta noche remojamos dos veces.',
      'En todas las demás noches comemos sentados o reclinados, pero en esta noche todos nos reclinamos.'
    ]
  };
  return questions[lang];
};

export const getPassoverSongs = (lang: Language) => {
  const songs = {
    he: [
      { title: 'אחד מי יודע', desc: 'פיוט מסורתי המושר בסוף ליל הסדר, המונה את המספרים מאחד עד שלושה עשר ומקשר כל אחד מהם למושג ביהדות.' },
      { title: 'חד גדיא', desc: 'שיר עממי בארמית ובעברית, המושר בסיום ההגדה. השיר מתאר שרשרת אירועים שמתחילה בגדי קטן ומסתיימת בהתערבות אלוהית.' },
      { title: 'עבדים היינו', desc: 'פיוט קצר המושר בתחילת ההגדה, המזכיר לנו את עברנו כעבדים במצרים ואת הגאולה.' },
      { title: 'והיא שעמדה', desc: 'פיוט המדגיש את ההבטחה האלוהית לעם ישראל, שעמדה לאבותינו ולנו בכל הדורות מול הקמים עלינו לכלותנו.' }
    ],
    en: [
      { title: 'Echad Mi Yodea (Who Knows One?)', desc: 'A traditional song sung at the end of the Seder, counting from one to thirteen and associating each number with a Jewish concept.' },
      { title: 'Chad Gadya (One Little Goat)', desc: 'A folk song in Aramaic and Hebrew, sung at the end of the Haggadah. It describes a chain of events starting with a little goat and ending with divine intervention.' },
      { title: 'Avadim Hayinu (We Were Slaves)', desc: 'A short song sung at the beginning of the Haggadah, reminding us of our past as slaves in Egypt and our redemption.' },
      { title: 'Vehi Sheamda (And This is What Kept Our Fathers)', desc: 'A song emphasizing the divine promise to the Jewish people, which has sustained our ancestors and us throughout the generations against those who rise up to destroy us.' }
    ],
    ru: [
      { title: 'Эхад Ми Йодеа (Кто знает один?)', desc: 'Традиционная песня, исполняемая в конце седера, в которой счет идет от одного до тринадцати, и каждое число связывается с еврейским понятием.' },
      { title: 'Хад Гадья (Один козленок)', desc: 'Народная песня на арамейском и иврите, исполняемая в конце Агады. В ней описывается цепь событий, начинающаяся с маленького козленка и заканчивающаяся божественным вмешательством.' },
      { title: 'Авадим Айину (Мы были рабами)', desc: 'Короткая песня, исполняемая в начале Агады, напоминающая нам о нашем прошлом как рабов в Египте и о нашем искуплении.' },
      { title: 'Вэи Шеамда (И это то, что поддерживало наших отцов)', desc: 'Песня, подчеркивающая божественное обещание еврейскому народу, которое поддерживало наших предков и нас на протяжении всех поколений против тех, кто восстает, чтобы уничтожить нас.' }
    ],
    fr: [
      { title: 'Echad Mi Yodea (Qui connaît un ?)', desc: 'Une chanson traditionnelle chantée à la fin du Séder, comptant de un à treize et associant chaque nombre à un concept juif.' },
      { title: 'Chad Gadya (Un petit chevreau)', desc: 'Une chanson folklorique en araméen et en hébreu, chantée à la fin de la Haggadah. Elle décrit une chaîne d\'événements commençant par un petit chevreau et se terminant par une intervention divine.' },
      { title: 'Avadim Hayinu (Nous étions esclaves)', desc: 'Une courte chanson chantée au début de la Haggadah, nous rappelant notre passé d\'esclaves en Égypte et notre rédemption.' },
      { title: 'Vehi Sheamda (Et c\'est ce qui a soutenu nos pères)', desc: 'Une chanson soulignant la promesse divine au peuple juif, qui a soutenu nos ancêtres et nous à travers les générations contre ceux qui se lèvent pour nous détruire.' }
    ],
    es: [
      { title: 'Ejad Mi Yodea (¿Quién sabe uno?)', desc: 'Una canción tradicional cantada al final del Séder, que cuenta del uno al trece y asocia cada número con un concepto judío.' },
      { title: 'Jad Gadiá (Un cabrito)', desc: 'Una canción folclórica en arameo y hebreo, cantada al final de la Hagadá. Describe una cadena de eventos que comienza con un cabrito y termina con la intervención divina.' },
      { title: 'Avadim Hayinu (Fuimos esclavos)', desc: 'Una canción corta cantada al principio de la Hagadá, que nos recuerda nuestro pasado como esclavos en Egipto y nuestra redención.' },
      { title: 'Vehí Sheamdá (Y esto es lo que sostuvo a nuestros padres)', desc: 'Una canción que enfatiza la promesa divina al pueblo judío, que ha sostenido a nuestros antepasados y a nosotros a lo largo de las generaciones contra aquellos que se levantan para destruirnos.' }
    ]
  };
  return songs[lang];
};

export const getSederOrder = (lang: Language) => {
  const order = {
    he: [
      { title: 'קדש', desc: 'קידוש על כוס יין ראשונה.' },
      { title: 'ורחץ', desc: 'נטילת ידיים ללא ברכה.' },
      { title: 'כרפס', desc: 'אכילת ירק טבול במי מלח.' },
      { title: 'יחץ', desc: 'חציית המצה האמצעית ושמירת החצי הגדול לאפיקומן.' },
      { title: 'מגיד', desc: 'קריאת ההגדה וסיפור יציאת מצרים.' },
      { title: 'רחצה', desc: 'נטילת ידיים עם ברכה.' },
      { title: 'מוציא', desc: 'ברכת "המוציא לחם מן הארץ" על המצות.' },
      { title: 'מצה', desc: 'ברכת "על אכילת מצה" ואכילת מצה.' },
      { title: 'מרור', desc: 'אכילת מרור טבול בחרוסת.' },
      { title: 'כורך', desc: 'אכילת כריך של מצה ומרור (זכר להלל).' },
      { title: 'שולחן עורך', desc: 'סעודת החג.' },
      { title: 'צפון', desc: 'אכילת האפיקומן.' },
      { title: 'ברך', desc: 'ברכת המזון וכוס יין שלישית.' },
      { title: 'הלל', desc: 'קריאת פרקי הלל וכוס יין רביעית.' },
      { title: 'נרצה', desc: 'סיום הסדר ושירת פיוטים (אחד מי יודע, חד גדיא).' }
    ],
    en: [
      { title: 'Kadesh', desc: 'Reciting Kiddush over the first cup of wine.' },
      { title: 'Urchatz', desc: 'Washing hands without a blessing.' },
      { title: 'Karpas', desc: 'Eating a vegetable dipped in salt water.' },
      { title: 'Yachatz', desc: 'Breaking the middle matzah and saving the larger half for the Afikoman.' },
      { title: 'Maggid', desc: 'Reading the Haggadah and telling the story of the Exodus.' },
      { title: 'Rachtzah', desc: 'Washing hands with a blessing.' },
      { title: 'Motzi', desc: 'Reciting the "Hamotzi" blessing over the matzah.' },
      { title: 'Matzah', desc: 'Reciting the blessing for eating matzah and eating it.' },
      { title: 'Maror', desc: 'Eating bitter herbs dipped in charoset.' },
      { title: 'Korech', desc: 'Eating a sandwich of matzah and bitter herbs (Hillel sandwich).' },
      { title: 'Shulchan Oreich', desc: 'The festive meal.' },
      { title: 'Tzafun', desc: 'Eating the Afikoman.' },
      { title: 'Bareich', desc: 'Grace after meals and the third cup of wine.' },
      { title: 'Hallel', desc: 'Reciting songs of praise and the fourth cup of wine.' },
      { title: 'Nirtzah', desc: 'Conclusion of the Seder and singing traditional songs.' }
    ],
    ru: [
      { title: 'Кадеш', desc: 'Кидуш над первым бокалом вина.' },
      { title: 'Урхац', desc: 'Омовение рук без благословения.' },
      { title: 'Карпас', desc: 'Поедание овоща, обмакнутого в соленую воду.' },
      { title: 'Яхац', desc: 'Разламывание средней мацы и сохранение большей половины для афикомана.' },
      { title: 'Магид', desc: 'Чтение Агады и рассказ об Исходе из Египта.' },
      { title: 'Рахца', desc: 'Омовение рук с благословением.' },
      { title: 'Моци', desc: 'Благословение "Амоци лехем мин аарец" на мацу.' },
      { title: 'Маца', desc: 'Благословение на поедание мацы и ее поедание.' },
      { title: 'Марор', desc: 'Поедание горькой зелени, обмакнутой в харосет.' },
      { title: 'Корех', desc: 'Поедание сэндвича из мацы и марора (сэндвич Гиллеля).' },
      { title: 'Шульхан Орех', desc: 'Праздничная трапеза.' },
      { title: 'Цафун', desc: 'Поедание афикомана.' },
      { title: 'Барех', desc: 'Благословение после еды и третий бокал вина.' },
      { title: 'Алель', desc: 'Чтение хвалебных псалмов и четвертый бокал вина.' },
      { title: 'Нирца', desc: 'Завершение седера и пение традиционных песен.' }
    ],
    fr: [
      { title: 'Kadech', desc: 'Récitation du Kiddouch sur la première coupe de vin.' },
      { title: 'Our\'hats', desc: 'Lavage des mains sans bénédiction.' },
      { title: 'Karpas', desc: 'Consommation d\'un légume trempé dans de l\'eau salée.' },
      { title: 'Ya\'hats', desc: 'Briser la matsa du milieu et garder la plus grande moitié pour l\'Afikoman.' },
      { title: 'Maguid', desc: 'Lecture de la Haggadah et récit de la sortie d\'Égypte.' },
      { title: 'Ra\'htsa', desc: 'Lavage des mains avec bénédiction.' },
      { title: 'Motsi', desc: 'Bénédiction "Hamotsi" sur la matsa.' },
      { title: 'Matsa', desc: 'Bénédiction pour la consommation de la matsa et sa consommation.' },
      { title: 'Maror', desc: 'Consommation d\'herbes amères trempées dans le harosset.' },
      { title: 'Korech', desc: 'Consommation d\'un sandwich de matsa et d\'herbes amères (sandwich de Hillel).' },
      { title: 'Choul\'han Orech', desc: 'Le repas de fête.' },
      { title: 'Tsafoun', desc: 'Consommation de l\'Afikoman.' },
      { title: 'Barech', desc: 'Action de grâces après le repas et troisième coupe de vin.' },
      { title: 'Hallel', desc: 'Récitation de psaumes de louange et quatrième coupe de vin.' },
      { title: 'Nirtsa', desc: 'Conclusion du Séder et chant de chansons traditionnelles.' }
    ],
    es: [
      { title: 'Kadesh', desc: 'Recitación del Kidush sobre la primera copa de vino.' },
      { title: 'Urjatz', desc: 'Lavado de manos sin bendición.' },
      { title: 'Karpás', desc: 'Comer una verdura sumergida en agua salada.' },
      { title: 'Yajatz', desc: 'Romper la matzá del medio y guardar la mitad más grande para el Afikomán.' },
      { title: 'Maguid', desc: 'Lectura de la Hagadá y relato del Éxodo de Egipto.' },
      { title: 'Rajtzá', desc: 'Lavado de manos con bendición.' },
      { title: 'Motzí', desc: 'Bendición "Hamotzí" sobre la matzá.' },
      { title: 'Matzá', desc: 'Bendición por comer matzá y comerla.' },
      { title: 'Maror', desc: 'Comer hierbas amargas sumergidas en jaróset.' },
      { title: 'Korej', desc: 'Comer un sándwich de matzá y hierbas amargas (sándwich de Hillel).' },
      { title: 'Shulján Orej', desc: 'La comida festiva.' },
      { title: 'Tzafún', desc: 'Comer el Afikomán.' },
      { title: 'Barej', desc: 'Bendición después de las comidas y tercera copa de vino.' },
      { title: 'Halel', desc: 'Recitación de salmos de alabanza y cuarta copa de vino.' },
      { title: 'Nirtzá', desc: 'Conclusión del Séder y canto de canciones tradicionales.' }
    ]
  };
  return order[lang];
};
