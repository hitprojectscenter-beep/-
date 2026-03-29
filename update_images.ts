import fs from 'fs';

let data = fs.readFileSync('src/data2.ts', 'utf-8');

const replacements = {
  'https://images.unsplash.com/photo-1615486171448-4fb3d3f720ba?auto=format&fit=crop&q=80&w=800': '/מצות ביתיות.jpg',
  'https://images.unsplash.com/photo-1548943487-a2e4f43b4850?auto=format&fit=crop&q=80&w=800': '/קניידלך.jpg',
  'https://images.unsplash.com/photo-1604423043492-4138ce6dc59b?auto=format&fit=crop&q=80&w=800': '/לביבות.jpg',
  'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&q=80&w=800': '/חרוסת.jpg',
  'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800': '/גפילטע פיש.jpg',
  'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800': '/מרק עוף צח.jpg',
  'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=800': '/תפוחי אדמה בתנור.jpg'
};

for (const [oldUrl, newUrl] of Object.entries(replacements)) {
  data = data.split(oldUrl).join(newUrl);
}

fs.writeFileSync('src/data2.ts', data);
console.log('Images replaced successfully.');
