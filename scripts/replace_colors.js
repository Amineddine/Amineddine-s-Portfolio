const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /0,\s*229,\s*255/g, to: '94, 234, 212' },
  { from: /255,\s*184,\s*0/g, to: '228, 228, 231' },
  { from: /0,\s*255,\s*136/g, to: '16, 185, 129' },
  { from: /#00E5FF/ig, to: '#5EEAD4' },
  { from: /#FFB800/ig, to: '#E4E4E7' },
  { from: /#00FF88/ig, to: '#10B981' }
];

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    try {
      filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
    } catch (err) {
      if (err.code === 'ENOENT') {
        return filelist;
      } else {
        throw err;
      }
    }
  });
  return filelist;
}

const files = walkSync(path.join(__dirname, '../src'));
let changedFiles = 0;

files.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    replacements.forEach(r => {
      content = content.replace(r.from, r.to);
    });

    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      changedFiles++;
      console.log('Updated', file);
    }
  }
});

console.log('Total files updated:', changedFiles);
