import fs from 'fs';

const file = 'src/data2.ts';
let content = fs.readFileSync(file, 'utf8');

const replacements = {
  "'/מצה.jpg'": "'https://images.unsplash.com/photo-1615486171448-4fb3d3f720ba?auto=format&fit=crop&q=80&w=800'",
  "'/קניידלך.jpg'": "'https://images.unsplash.com/photo-1548943487-a2e4f43b4850?auto=format&fit=crop&q=80&w=800'",
  "'/עוגת אגוזים.jpg'": "'https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80&w=800'",
  "'/לביבות.jpg'": "'https://images.unsplash.com/photo-1604423043492-4138ce6dc59b?auto=format&fit=crop&q=80&w=800'",
  "'/חרוסת.jpg'": "'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=800'",
  "'/גפילטע פיש.jpg'": "'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800'",
  "'/צלי בקר.jpg'": "'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=800'",
  "'/מרק עוף.jpg'": "'https://images.unsplash.com/photo-1604152135912-00a028e033d5?auto=format&fit=crop&q=80&w=800'",
  "'/בטטה בתנור.jpg'": "'https://images.unsplash.com/photo-1615486171197-4fb3d3f720ba?auto=format&fit=crop&q=80&w=800'",
  "'/עוגיות בוטנים.jpg'": "'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800'"
};

for (const [key, value] of Object.entries(replacements)) {
  content = content.split(key).join(value);
}

fs.writeFileSync(file, content);
console.log('Images replaced successfully.');
