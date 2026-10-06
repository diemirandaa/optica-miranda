import type { APIRoute } from 'astro';
import { servicios } from '../data/servicios';
import { site } from '../data/site';

export const GET: APIRoute = () => {
  const hoy = new Date().toISOString().slice(0, 10);
  const urls = [
    { loc: '/', freq: 'weekly', prio: '1.0' },
    ...servicios.map((s) => ({ loc: `/${s.slug}/`, freq: 'monthly', prio: '0.8' })),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${site.url}${u.loc}</loc><lastmod>${hoy}</lastmod><changefreq>${u.freq}</changefreq><priority>${u.prio}</priority></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
