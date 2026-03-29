import fs from 'fs';

let content = fs.readFileSync('src/data2.ts', 'utf-8');
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1558961363-fa8fdf82db35\?auto=format&fit=crop&q=80&w=800/g, '/עוגיות בוטנים.jpg');
fs.writeFileSync('src/data2.ts', content);
