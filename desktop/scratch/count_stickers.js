const fs = require('fs');
const path = require('path');

const dirs = [
  'C:/Users/keilu/OneDrive/Desktop/keilu/stickers/empresa',
  'C:/Users/keilu/OneDrive/Desktop/keilu/stickers/acciones empresas'
];

dirs.forEach(base => {
  if (!fs.existsSync(base)) return;
  fs.readdirSync(base).forEach(sub => {
    const subPath = path.join(base, sub);
    if (fs.statSync(subPath).isDirectory()) {
      const files = fs.readdirSync(subPath).filter(f => f.endsWith('.gif') || f.endsWith('.png') || f.endsWith('.jpg'));
      console.log(`${path.basename(base)}/${sub}: ${files.length} files`);
    }
  });
});
