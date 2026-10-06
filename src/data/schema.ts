import { site } from './site';
import { servicios } from './servicios';

const abs = (path: string) => new URL(path, site.url).toString();

export const optician = () => ({
  '@context': 'https://schema.org',
  '@type': 'Optician',
  name: site.name,
  image: abs('/logo.png'),
  telephone: site.phoneIntl,
  url: abs('/'),
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address,
    addressLocality: 'Villa Elisa',
    addressRegion: 'Central',
    postalCode: '111504',
    addressCountry: 'PY',
  },
  hasMap: site.maps,
  priceRange: `${site.framesFrom}+`,
  areaServed: ['Villa Elisa', 'Ñemby', 'San Antonio', 'Lambaré', 'Asunción', 'Paraguay'],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '13:00' },
  ],
  sameAs: [site.instagram, site.facebook],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Anteojos recetados' } },
    ...servicios.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.nombre, url: abs(`/${s.slug}/`) } })),
  ],
});

export const faqPage = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const breadcrumb = (nombre: string, slug: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: abs('/') },
    { '@type': 'ListItem', position: 2, name: nombre, item: abs(`/${slug}/`) },
  ],
});

export const service = (nombre: string, description: string, slug: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: nombre,
  description,
  url: abs(`/${slug}/`),
  areaServed: 'Paraguay',
  provider: { '@type': 'Optician', name: site.name, url: abs('/') },
});
