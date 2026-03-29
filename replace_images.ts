import fs from 'fs';

let content = fs.readFileSync('src/data2.ts', 'utf-8');

const replacements = {
  "'/מצות ביתיות.jpg'": "'/matzah.jpg'",
  "'/קניידלך.jpg'": "'/kneidlach.jpg'",
  "'/לביבות.jpg'": "'/latkes.jpg'",
  "'/חרוסת.jpg'": "'/charoset.jpg'",
  "'/גפילטע פיש.jpg'": "'/gefilte_fish.jpg'",
  "'/מרק עוף צח.jpg'": "'/chicken_soup.jpg'",
  "'/תפוחי אדמה בתנור.jpg'": "'/potatoes.jpg'",
  "'/עוגיות בוטנים.jpg'": "'/peanut_cookies.jpg'",
  "'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80&w=800'": "'/matzah_brei.jpg'",
  "'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=800'": "'/charoset_masortit.jpg'"
};

for (const [oldPath, newPath] of Object.entries(replacements)) {
  content = content.split(oldPath).join(newPath);
}

fs.writeFileSync('src/data2.ts', content);
console.log('Images replaced successfully');
