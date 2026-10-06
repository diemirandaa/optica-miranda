# Óptica Miranda: sitio web

Código fuente de [opticamiranda.com.py](https://opticamiranda.com.py), hecho con Astro + Tailwind v4.

- `src/data/site.ts`: teléfono, dirección, horarios, redes, precio de armazones.
- `src/data/servicios.ts`: textos e imágenes de las 7 páginas de servicio (una entrada por página).
- `src/pages/[slug].astro`: molde único de las páginas de servicio.
- `src/pages/index.astro`: home.

## Comandos

- `npm run dev`: servidor local en http://localhost:4321
- `npm run build`: compila a `dist/`
- `npm run deploy -- "mensaje"`: compila y publica en la rama `main` (GitHub Pages).

## Ramas

- `fuente`: este código.
- `main`: el sitio compilado que sirve GitHub Pages. No se edita a mano; lo escribe `npm run deploy`.
- `sitio-anterior`: el sitio HTML previo al rediseño (respaldo).

## Nota sobre Windows

En la PC de desarrollo, Windows Application Control bloquea el compilador nativo de Astro.
Por eso los scripts cargan `.env.wasi` (fuerza la versión WebAssembly) y `.npmrc` usa `force=true`
para que npm acepte instalar ese paquete.
