// Publica el sitio: compila con Astro y sube el resultado a la rama `main`,
// que es la que sirve GitHub Pages (opticamiranda.com.py).
//
// Usa como destino el clon de `main` en ../optica-miranda.
// Uso: npm run deploy -- "mensaje del commit"
import { execSync } from 'node:child_process';
import { cpSync, existsSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const target = resolve(root, '../optica-miranda');
const dist = join(root, 'dist');
const msg = process.argv[2] || 'Publicar sitio';

const run = (cmd, cwd = root) => execSync(cmd, { cwd, stdio: 'inherit' });
const out = (cmd, cwd) => execSync(cmd, { cwd, encoding: 'utf8' }).trim();

if (!existsSync(join(target, '.git'))) throw new Error(`No encuentro el clon de main en ${target}`);
if (out('git branch --show-current', target) !== 'main') throw new Error('El clon destino no está en la rama main');

run('git pull --ff-only origin main', target);
run('npm run build');

// Reemplaza todo el contenido publicado (menos .git) por el build nuevo.
for (const f of readdirSync(target)) if (f !== '.git') rmSync(join(target, f), { recursive: true, force: true });
cpSync(dist, target, { recursive: true });
// Sin esto, Jekyll de GitHub Pages ignora la carpeta _astro (CSS e imágenes).
writeFileSync(join(target, '.nojekyll'), '');

run('git add -A', target);
if (!out('git status --porcelain', target)) {
  console.log('Nada para publicar: el sitio ya está al día.');
} else {
  const src = out('git rev-parse --short HEAD', root);
  run(`git commit -q -m "${msg.replace(/"/g, '\\"')}" -m "Build de fuente@${src}"`, target);
  run('git push origin main', target);
  console.log('Publicado. GitHub Pages tarda ~1 minuto en actualizarse.');
}
