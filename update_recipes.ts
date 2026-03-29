import fs from 'fs';

let content = fs.readFileSync('src/data2.ts', 'utf-8');

// Hebrew
content = content.replace(/title: 'עוגת אגוזים',/g, "title: 'מצה בריי',");
content = content.replace(/desc: 'קינוח מושלם ונטול חמץ המשלב אגוזי מלך וניחוחות של שוקולד ותפוז.',/g, "desc: 'מצה בריי קלאסית וטעימה, ארוחת בוקר מושלמת לימי הפסח.',");

content = content.replace(/title: 'צלי בקר',/g, "title: 'חרוסת מסורתית',");
content = content.replace(/desc: 'מנה עיקרית חגיגית ומרשימה, בשר רך שנימוח בפה ברוטב עשיר.',/g, "desc: 'חרוסת מסורתית עשירה בטעמים, תוספת מתוקה וסמלית לשולחן הסדר.',");

// English
content = content.replace(/title: 'Walnut Cake',/g, "title: 'Matzah Brei',");
content = content.replace(/desc: 'A perfect, chametz-free dessert combining walnuts with aromas of chocolate and orange.',/g, "desc: 'Classic and delicious Matzah Brei, a perfect breakfast for Passover days.',");

content = content.replace(/title: 'Roast Beef',/g, "title: 'Traditional Charoset',");
content = content.replace(/desc: 'A festive and impressive main course, tender meat that melts in your mouth in a rich sauce.',/g, "desc: 'Traditional Charoset rich in flavors, a sweet and symbolic addition to the Seder table.',");

// Russian
content = content.replace(/title: 'Ореховый торт',/g, "title: 'Маца Брай',");
content = content.replace(/desc: 'Идеальный десерт без хамеца, сочетающий грецкие орехи с ароматами шоколада и апельсина.',/g, "desc: 'Классическая и вкусная Маца Брай, идеальный завтрак на дни Песаха.',");

content = content.replace(/title: 'Жаркое из говядины',/g, "title: 'Традиционный Харосет',");
content = content.replace(/desc: 'Праздничное и впечатляющее основное блюдо, нежное мясо, тающее во рту в насыщенном соусе.',/g, "desc: 'Традиционный Харосет с богатым вкусом, сладкое и символичное дополнение к столу Седера.',");

// French
content = content.replace(/title: 'Gâteau aux noix',/g, "title: 'Matza Brei',");
content = content.replace(/desc: 'Un dessert parfait sans hamets combinant des noix avec des arômes de chocolat et d\\'orange.',/g, "desc: 'Matza Brei classique et délicieuse, un petit-déjeuner parfait pour les jours de Pessa\\'h.',");

content = content.replace(/title: 'Rôti de bœuf',/g, "title: 'Harosset Traditionnelle',");
content = content.replace(/desc: 'Un plat principal festif et impressionnant, une viande tendre qui fond dans la bouche dans une sauce riche.',/g, "desc: 'Harosset traditionnelle riche en saveurs, un ajout doux et symbolique à la table du Séder.',");

// Spanish
content = content.replace(/title: 'Pastel de nueces',/g, "title: 'Matzá Brei',");
content = content.replace(/desc: 'Un postre perfecto sin jametz que combina nueces con aromas de chocolate y naranja.',/g, "desc: 'Matzá Brei clásica y deliciosa, un desayuno perfecto para los días de Pésaj.',");

content = content.replace(/title: 'Asado de ternera',/g, "title: 'Jaróset Tradicional',");
content = content.replace(/desc: 'Un plato principal festivo e impresionante, carne tierna que se deshace en la boca en una rica salsa.',/g, "desc: 'Jaróset tradicional rico en sabores, una adición dulce y simbólica a la mesa del Séder.',");

fs.writeFileSync('src/data2.ts', content);
console.log('Recipes updated successfully');
