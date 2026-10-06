import type { ImageMetadata } from 'astro';

import sol from '../assets/fotos/sol-proteccion-uv.jpg';
import solManejar from '../assets/fotos/sol-manejar-polarizado.jpg';
import contacto from '../assets/fotos/contacto-colocacion.jpg';
import contactoCuidados from '../assets/fotos/contacto-cuidados.jpg';
import multifocales from '../assets/fotos/multifocales-lectura.jpg';
import filtroAzul from '../assets/fotos/filtro-azul-pantalla.jpg';
import antirreflejoReflejos from '../assets/fotos/antirreflejo-reflejos.jpg';
import antirreflejoNoche from '../assets/fotos/antirreflejo-manejo-noche.jpg';
import ultraDelgados from '../assets/fotos/ultra-delgados-borde.jpg';
import reparacion from '../assets/fotos/reparacion-anteojos.jpg';

export interface Seccion {
  titulo: string;
  texto?: string;
  items?: { titulo: string; texto: string }[];
  img?: ImageMetadata;
  imgAlt?: string;
  caption?: string;
}

export interface Servicio {
  slug: string;
  /** Nombre corto para tarjetas y menús */
  nombre: string;
  /** Bajada corta para la tarjeta de la home */
  resumen: string;
  /** Foto de la tarjeta (home y "otros servicios") */
  tarjeta: ImageMetadata | null;
  title: string;
  description: string;
  h1: string;
  lede: string;
  hero: ImageMetadata;
  heroAlt: string;
  secciones: Seccion[];
  faqs: { q: string; a: string }[];
}

// Orden = orden en el mosaico de la home.
export const servicios: Servicio[] = [
  {
    slug: 'lentes-de-sol',
    nombre: 'Lentes de sol',
    resumen: 'Todos con protección UV.',
    tarjeta: sol,
    title: 'Lentes de sol en Villa Elisa | Óptica Miranda',
    description: 'Lentes de sol con protección UV en Villa Elisa y envíos a todo Paraguay. Modelos nuevos cada semana. Consultá precios y stock por WhatsApp.',
    h1: 'Lentes de sol en Villa Elisa, con envío a todo Paraguay',
    lede: 'Modelos nuevos cada semana, con protección UV para cuidar tus ojos del sol paraguayo. Elegí en Instagram, consultá por WhatsApp y te lo mandamos a tu casa.',
    hero: sol,
    heroAlt: 'Mujer con lentes de sol bajo el sol entre hojas de palmera',
    secciones: [
      {
        titulo: 'Por qué usar lentes de sol con protección UV',
        texto: 'En Paraguay el índice UV es alto casi todo el año. Unos lentes de sol con filtro UV protegen los ojos de la radiación que, con el tiempo, puede dañar la córnea y el cristalino. No alcanza con que el cristal sea oscuro: lo importante es el filtro. Todos los lentes de sol que vendemos tienen protección UV.',
      },
      {
        titulo: 'Lentes de sol con tu graduación',
        texto: 'Si usás anteojos recetados, también podés tener lentes de sol con tu graduación, así no tenés que elegir entre ver bien y estar cómodo al sol. Mandanos tu receta por WhatsApp y te decimos qué opciones tenemos para tu caso.',
      },
      {
        titulo: 'Cómo elegir el modelo',
        texto: 'Para manejar conviene un cristal polarizado, que corta el reflejo del asfalto y del parabrisas. Para el día a día, un tono gris o marrón es el más natural. Para la forma, seguí la misma regla que con los armazones: caras redondas con modelos más rectos, caras cuadradas con modelos redondeados. Si tenés dudas, mandanos una foto y te ayudamos a elegir.',
        img: solManejar,
        imgAlt: 'Conductor con lentes de sol dentro de un auto, con luz de sol',
      },
    ],
    faqs: [
      { q: '¿Tienen lentes de sol baratos?', a: 'Sí, tenemos modelos para distintos presupuestos. Escribinos por WhatsApp y te pasamos los precios de los modelos disponibles esa semana.' },
      { q: '¿Hacen envíos de lentes de sol a todo Paraguay?', a: 'Sí, enviamos a cualquier ciudad del país. Coordinamos el pago y el envío por WhatsApp.' },
    ],
  },
  {
    slug: 'lentes-de-contacto',
    nombre: 'Lentes de contacto',
    resumen: 'También tóricos, para astigmatismo.',
    tarjeta: contacto,
    title: 'Lentes de contacto en Villa Elisa | Óptica Miranda',
    description: 'Lentes de contacto blandas, tóricas para astigmatismo y descartables en Villa Elisa. Envíos a todo Paraguay. Consultá por WhatsApp con tu receta.',
    h1: 'Lentes de contacto en Villa Elisa y envíos a todo Paraguay',
    lede: 'Blandas, tóricas y descartables de las principales marcas. Mandanos tu receta por WhatsApp y te confirmamos precio y stock.',
    hero: contacto,
    heroAlt: 'Mujer colocándose una lente de contacto con la punta del dedo',
    secciones: [
      {
        titulo: 'Qué tipos de lentes de contacto tenemos',
        texto: 'Lentes blandas para miopía e hipermetropía, lentes tóricas para quienes tienen astigmatismo, y descartables de reemplazo diario, quincenal o mensual. Cada tipo tiene su forma de uso y de limpieza; te explicamos cuál conviene según tu rutina.',
      },
      {
        titulo: '¿Necesito receta?',
        texto: 'Sí. La graduación de las lentes de contacto no es la misma que la de los anteojos, porque la lente va apoyada sobre el ojo. Por eso te pedimos una receta específica para lentes de contacto. Si todavía no la tenés, te orientamos para conseguirla.',
      },
      {
        titulo: 'Cuidados básicos',
        texto: 'Lavate las manos antes de ponerlas o sacarlas, usá siempre solución nueva y no duermas con ellas salvo que sean de uso prolongado. Respetá el tiempo de reemplazo: una lente mensual no se usa dos meses.',
        img: contactoCuidados,
        imgAlt: 'Estuche para lentes de contacto, solución y lentes en su blíster',
      },
    ],
    faqs: [
      { q: '¿Tienen lentes de contacto para astigmatismo?', a: 'Sí, trabajamos con lentes tóricas, que son las indicadas para astigmatismo.' },
      { q: '¿Puedo pedir mis lentes de contacto por WhatsApp?', a: 'Sí. Mandanos una foto de tu receta y te confirmamos precio, stock y envío.' },
    ],
  },
  {
    slug: 'lentes-multifocales',
    nombre: 'Multifocales',
    resumen: 'Lejos, intermedio y cerca en un cristal.',
    tarjeta: multifocales,
    title: 'Lentes multifocales y bifocales | Óptica Miranda',
    description: 'Lentes multifocales y bifocales para presbicia en Villa Elisa. Ves de cerca y de lejos con un solo anteojo. Asesoramiento por WhatsApp y envíos a todo Paraguay.',
    h1: 'Lentes multifocales y bifocales para ver bien de cerca y de lejos',
    lede: 'Si después de los 40 empezaste a alejar el celular para leer, probablemente sea presbicia. Con un solo anteojo podés ver de cerca, a media distancia y de lejos.',
    hero: multifocales,
    heroAlt: 'Hombre mayor con anteojos leyendo un libro',
    secciones: [
      {
        titulo: 'Multifocales vs. bifocales',
        texto: 'Los bifocales tienen dos zonas, una para lejos y otra para cerca, separadas por una línea visible. Los multifocales (también llamados progresivos) pasan de lejos a cerca de forma gradual, sin línea, y además corrigen la distancia intermedia, como la pantalla de la compu. Por eso suelen ser más cómodos.',
      },
      {
        titulo: 'Cuánto tarda la adaptación',
        texto: 'La mayoría de las personas se adapta a los multifocales en pocos días. Al principio hay que aprender a mover un poco la cabeza en lugar de solo los ojos. Te explicamos cómo usarlos cuando los retirás.',
      },
      {
        titulo: 'Cristales recomendados',
        texto: 'Para multifocales recomendamos sumar tratamiento antirreflejo y, si la graduación es alta, cristales ultra delgados, que son más livianos y estéticos.',
      },
    ],
    faqs: [
      { q: '¿Necesito receta para multifocales?', a: 'Sí, necesitás una receta vigente que indique la graduación de lejos y la adición para cerca.' },
      { q: '¿Puedo usar mi armazón actual?', a: 'Depende del tamaño del armazón: los multifocales necesitan cierta altura de cristal. Mandanos una foto y te decimos si sirve.' },
    ],
  },
  {
    slug: 'anteojos-filtro-luz-azul',
    nombre: 'Filtro de luz azul',
    resumen: 'Para muchas horas de pantalla.',
    tarjeta: filtroAzul,
    title: 'Anteojos con filtro de luz azul | Óptica Miranda',
    description: 'Anteojos con filtro de luz azul para compu y celular, con o sin graduación. Óptica en Villa Elisa con envíos a todo Paraguay. Consultá por WhatsApp.',
    h1: 'Anteojos con filtro de luz azul (blue light), con o sin aumento',
    lede: 'Para quienes pasan muchas horas frente a la compu o el celular. Los armamos con tu graduación o sin aumento, y te los enviamos a todo Paraguay.',
    hero: filtroAzul,
    heroAlt: 'Mujer con anteojos trabajando frente a una pantalla',
    secciones: [
      {
        titulo: '¿Qué hace el filtro de luz azul?',
        texto: 'Es un tratamiento del cristal que reduce parte de la luz azul que emiten las pantallas y disminuye los reflejos. Mucha gente siente más comodidad en jornadas largas frente a la compu, sobre todo combinado con el tratamiento antirreflejo.',
      },
      {
        titulo: '¿Lo puedo usar sin graduación?',
        texto: 'Sí. Si ves bien pero trabajás muchas horas con pantallas, podés usar anteojos con filtro azul sin aumento. Si ya usás anteojos, lo agregamos a tus cristales con tu receta.',
      },
      {
        titulo: 'Consejos para cuidar tu vista frente a la pantalla',
        texto: 'Aplicá la regla 20-20-20: cada 20 minutos mirá algo a unos 6 metros durante 20 segundos. Ubicá la pantalla un poco por debajo de la línea de los ojos y acordate de parpadear. Si al final del día sentís los ojos cansados o te duele la cabeza, puede ser momento de revisar tu graduación.',
      },
    ],
    faqs: [
      { q: '¿El filtro azul sirve para el celular?', a: 'Sí, funciona con cualquier pantalla: compu, celular, tablet o tele.' },
      { q: '¿Puedo agregar filtro azul a mis anteojos actuales?', a: 'El filtro va en el cristal, así que hay que hacer cristales nuevos. Si tu armazón está en buen estado, podés conservarlo y cambiar solo los cristales.' },
    ],
  },
  {
    slug: 'reparacion-de-anteojos',
    nombre: 'Reparación de anteojos',
    resumen: 'Arreglamos anteojos de cualquier óptica. Listos en 24 horas.',
    tarjeta: null,
    title: 'Reparación de anteojos en Villa Elisa | Óptica Miranda',
    description: 'Reparación de anteojos y lentes en Villa Elisa: ajustes, soldadura, cambio de plaquetas y tornillos. Listo en 24 horas.',
    h1: 'Reparación de anteojos en Villa Elisa',
    lede: 'Ajustes, soldadura, cambio de plaquetas, tornillos y accesorios. Lo dejás en el local y en 24 horas lo tenés listo.',
    hero: reparacion,
    heroAlt: 'Anteojos con tornillos y piezas de repuesto para reparar',
    secciones: [
      {
        titulo: 'Qué reparamos',
        texto: 'Anteojos torcidos o flojos, patillas sueltas, plaquetas gastadas, tornillos perdidos y armazones de metal que necesitan soldadura. También ajustamos el armazón para que no se te resbale ni te apriete detrás de las orejas.',
      },
      {
        titulo: '¿Conviene reparar o cambiar?',
        texto: 'Si el armazón está bien y solo falla una pieza, casi siempre conviene repararlo. Si el armazón está muy dañado, podés elegir uno nuevo y, según el caso, aprovechar tus cristales. Traelo y te lo revisamos sin cargo.',
      },
      {
        titulo: 'Cómo llegar',
        texto: 'Estamos en 1° de Mayo casi 8 de Diciembre, Villa Elisa. Atendemos de lunes a viernes de 8:00 a 18:30 y sábados de 8:00 a 13:00.',
      },
    ],
    faqs: [
      { q: '¿Cuánto tarda la reparación?', a: 'La reparación está lista en 24 horas. Te avisamos por WhatsApp cuando podés pasar a retirarlo.' },
      { q: '¿Reparan anteojos que no compré en Óptica Miranda?', a: 'Sí, reparamos anteojos de cualquier óptica.' },
    ],
  },
  {
    slug: 'tratamiento-antirreflejo',
    nombre: 'Antirreflejo',
    resumen: 'Menos reflejos al manejar de noche.',
    tarjeta: antirreflejoNoche,
    title: 'Tratamiento antirreflejo para anteojos | Óptica Miranda',
    description: 'Cristales con antirreflejo en Villa Elisa: menos reflejos de pantallas y de las luces al manejar de noche, y en las fotos se ven tus ojos. Envíos a todo Paraguay.',
    h1: 'Tratamiento antirreflejo para anteojos',
    lede: 'Menos destellos al manejar de noche, menos brillo de pantallas y anteojos que no se ven blancos en las fotos. Lo agregamos a tus cristales recetados.',
    hero: antirreflejoReflejos,
    heroAlt: 'Primer plano de una persona con anteojos y luces reflejadas en el cristal',
    secciones: [
      {
        titulo: '¿Qué es el tratamiento antirreflejo?',
        texto: 'Es un conjunto de capas muy finas que se aplican sobre el cristal. Un cristal sin tratamiento refleja parte de la luz que le llega: esa luz rebota hacia afuera y hacia vos, y aparece como destellos y reflejos. Con antirreflejo, esa luz atraviesa el cristal y llega a tu ojo.',
      },
      {
        titulo: 'Dónde lo vas a notar',
        items: [
          { titulo: 'Manejando de noche', texto: 'Menos destellos y halos con las luces de los autos y de la calle.' },
          { titulo: 'Frente a pantallas', texto: 'Menos brillo molesto de la compu, el celular y la tele.' },
          { titulo: 'En fotos y videollamadas', texto: 'Se ven tus ojos, no un reflejo blanco sobre el cristal.' },
          { titulo: 'En el día a día', texto: 'El cristal se ve más transparente, casi como si no estuviera.' },
        ],
        img: antirreflejoNoche,
        imgAlt: 'Vista desde el asiento del conductor de noche, con luces de la calle y de otros autos',
        caption: 'De noche, las luces de los autos y de la calle son las que más reflejos generan en el cristal.',
      },
      {
        titulo: '¿Se combina con otros cristales?',
        texto: 'Sí. Se puede sumar a cristales con filtro de luz azul, multifocales y ultra delgados. En los ultra delgados es especialmente recomendable, porque esos materiales reflejan más luz que un cristal común.',
      },
      {
        titulo: 'Cómo cuidarlo',
        texto: 'Limpiá los cristales con agua y un poco de jabón neutro, o con un líquido para anteojos, y secalos con un paño de microfibra. Evitá el papel, la remera y los productos con alcohol fuerte.',
      },
    ],
    faqs: [
      { q: '¿Le puedo agregar antirreflejo a mis anteojos actuales?', a: 'El antirreflejo va en el cristal, así que hay que hacer cristales nuevos. Si tu armazón está en buen estado, podés conservarlo y cambiar solo los cristales.' },
      { q: '¿Por qué el cristal con antirreflejo tiene un reflejo verdoso?', a: 'Es normal: es el color que dejan las capas del tratamiento. Es muy suave y no afecta cómo ves.' },
      { q: '¿El antirreflejo sirve si no uso pantallas?', a: 'Sí. Además de las pantallas, reduce los reflejos de cualquier luz, como los faros de los autos de noche o las luces de interiores, y hace que el cristal se vea más transparente.' },
    ],
  },
  {
    slug: 'cristales-ultra-delgados',
    nombre: 'Ultra delgados',
    resumen: 'Cristales finos para graduaciones altas.',
    tarjeta: ultraDelgados,
    title: 'Cristales ultra delgados para graduaciones altas | Óptica Miranda',
    description: 'Cristales ultra delgados en Villa Elisa: más finos y livianos para graduaciones altas, sin el borde grueso. Consultá por WhatsApp con tu receta.',
    h1: 'Cristales ultra delgados para graduaciones altas',
    lede: 'Si tu graduación es alta, el cristal común queda grueso y pesado. Los ultra delgados logran la misma graduación con menos espesor y menos peso.',
    hero: ultraDelgados,
    heroAlt: 'Primer plano de unos anteojos sobre una mesa donde se ve el borde del cristal',
    secciones: [
      {
        titulo: '¿Cómo logran ser más finos?',
        texto: 'Están hechos con un material de alto índice, que desvía más la luz que un cristal común. Por eso necesitan menos curvatura para lograr la misma graduación, y eso se traduce en menos espesor y menos peso.',
      },
      {
        titulo: '¿Desde qué graduación conviene?',
        texto: 'La diferencia se nota sobre todo en graduaciones altas. Con graduaciones bajas, un cristal común suele quedar bien. Mandanos tu receta por WhatsApp y te decimos si en tu caso vale la pena.',
      },
      {
        titulo: 'Ventajas',
        items: [
          { titulo: 'Bordes más finos', texto: 'El cristal no sobresale tanto del armazón.' },
          { titulo: 'Más livianos', texto: 'No te marcan la nariz ni se te resbalan durante el día.' },
          { titulo: 'Más armazones posibles', texto: 'Podés elegir modelos finos de metal o al aire que con un cristal grueso no quedan bien.' },
          { titulo: 'Más estéticos', texto: 'El anteojo se ve más prolijo, sin el borde grueso a la vista.' },
        ],
      },
      {
        titulo: 'El armazón también ayuda',
        texto: 'Con graduaciones altas, un armazón de tamaño moderado y bien centrado a tus ojos ayuda a que el cristal quede más fino. Al elegir, te asesoramos para que el resultado sea liviano y prolijo.',
      },
    ],
    faqs: [
      { q: '¿Cuánto cuestan los cristales ultra delgados?', a: 'El precio depende de tu receta y del tipo de cristal; escribinos por WhatsApp y te pasamos el presupuesto.' },
      { q: '¿Los puedo poner en mi armazón actual?', a: 'Sí, si tu armazón está en buen estado. Te lo revisamos antes de confirmar.' },
      { q: '¿Conviene sumarles antirreflejo?', a: 'Sí, es lo más recomendable: los materiales de alto índice reflejan más luz que un cristal común, y el antirreflejo lo compensa.' },
    ],
  },
];
