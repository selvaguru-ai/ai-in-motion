import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist', {recursive:true});
for (const file of ['index.html','styles.css','lessons.js','app.js']) await copyFile(file, `dist/${file}`);
console.log('Built 14 visual lessons into dist/');
