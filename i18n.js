/* ===================================================================
   Placid Grove · i18n
   Sistema de traducción ES/EN con localStorage
   =================================================================== */

const TRANSLATIONS = {
  es: {
    /* ===== NAV (compartido en todas las páginas) ===== */
    'nav.inicio': 'Inicio',
    'nav.concepto': 'Concepto',
    'nav.producto': 'Producto',
    'nav.inversion': 'Inversión',
    'nav.estrategia': 'Estrategia',
    'nav.galeria': 'Galería',
    'nav.cta': 'Expresar Interés',

    /* ===== FOOTER (compartido) ===== */
    'footer.concepto': 'Concepto',
    'footer.producto': 'Producto',
    'footer.inversion': 'Inversión',
    'footer.contacto': 'Contacto',
    'footer.estrategia': 'Estrategia',
    'footer.meta1': 'BKS-2026-PLG-001 · Mayo 2026',
    'footer.meta2': 'Brickstackers Intelligence · Mesa de Capital',
    'footer.meta2b': 'Brickstackers Intelligence',
    'footer.meta3': 'Lake Placid, FL 33852',

    /* ===== INDEX · HERO ===== */
    'idx.hero.eyebrow': 'Memorando de Inversión · BKS-2026-PLG-001',
    'idx.hero.sub': 'Tu pedacito de naturaleza en Florida.',
    'idx.hero.location': 'Lake Placid, Highlands County · Florida · 134 Acres',
    'idx.hero.stat1.val': '~27%',
    'idx.hero.stat1.lbl': 'IRR Cash · 30 meses',
    'idx.hero.stat2.val': '$900K',
    'idx.hero.stat2.lbl': 'Zona B Equity · 5 años',
    'idx.hero.stat3.val': '$1.8M',
    'idx.hero.stat3.lbl': 'Capital Buscado',
    'idx.hero.stat4.val': '134',
    'idx.hero.stat4.lbl': 'Acres',
    'idx.hero.btn.oferta': 'Ver la Oferta →',
    'idx.hero.btn.galeria': 'Ver Galería',

    /* ===== INDEX · MANIFESTO ===== */
    'idx.manifesto.label': 'El Concepto',
    'idx.manifesto.title': 'Un campo de golf cerrado,<br><em>reimaginado</em> como comunidad de bienestar',
    'idx.manifesto.body1': 'Placid Lakes Country Club cerró operaciones en abril de 2025. Lo que queda son 134 acres de canopy de robles maduros, lagunas naturales, un restaurante en operación con licencia de licor, e infraestructura aprovechable que en una tierra baldía costaría millones.',
    'idx.manifesto.body2': 'Placid Grove es la conversión de este activo dormido en una comunidad agro-residencial de naturaleza — donde las familias son dueñas de tierra real, las cabañas generan ingresos reales, y el paisaje mismo se convierte en el estilo de vida.',
    'idx.manifesto.quote': '"El suelo es un commodity. La escasez real está en la experiencia, el diseño y la capacidad de crear pertenencia."',
    'idx.manifesto.tag': 'Lake Placid, Florida · 134 Acres · Disponible',

    /* ===== INDEX · TRENDS ===== */
    'idx.trends.label': 'El Momento',
    'idx.trends.title': 'Dos megatendencias<br>que <em>confluyen</em>',
    'idx.trends.intro': 'El agroturismo y el wellness travel son la reconfiguración permanente de cómo las personas quieren vivir y vacacionar. Placid Grove está en la intersección exacta de ambas, más el anhelo cultural latino de tener su propia tierra.',
    'idx.trends.c1.tag': 'Agroturismo',
    'idx.trends.c1.title': 'El campo vuelve a ser destino',
    'idx.trends.c1.body': 'La demanda de experiencias rurales auténticas, gastronomía de origen y contacto directo con la naturaleza está transformando el turismo. El farm-to-table dejó de ser concepto y se convirtió en el estilo de vida más aspiracional de la década.',
    'idx.trends.c1.stat.val': '$81.2B',
    'idx.trends.c1.stat.lbl': 'Mercado global 2025 · CAGR 10.76% hasta 2034',
    'idx.trends.c2.tag': 'Wellness Travel',
    'idx.trends.c2.title': 'El lujo es naturaleza y balance',
    'idx.trends.c2.body': 'El turismo de wellness superó $1.15 billones en 2025 y crece al 12.4% anual. La pandemia aceleró la búsqueda de destinos que ofrezcan desconexión real, aire libre y alimentos genuinos. El retiro rural desplazó al spa urbano como aspiración premium.',
    'idx.trends.c2.stat.val': '12.4%',
    'idx.trends.c2.stat.lbl': 'CAGR wellness tourism 2025–2033 · $2.9T proyectado',
    'idx.trends.c3.tag': 'La Finquita',
    'idx.trends.c3.title': 'El anhelo latino que no se olvida',
    'idx.trends.c3.body': 'Para los más de 62 millones de hispanos en Estados Unidos, la finca de fin de semana no es un lujo abstracto — es una necesidad cultural profunda. Florida concentra una de las comunidades latinas más grandes del país, con más de 5.9 millones de personas.',
    'idx.trends.c3.stat.val': '5.9M',
    'idx.trends.c3.stat.lbl': 'Población hispana/latina en Florida · 26.8% del estado',

    /* ===== INDEX · FINQUITA ===== */
    'idx.finq.label': 'Para el Latino en Florida',
    'idx.finq.title': 'La <em>finquita</em><br>que siempre soñaste',
    'idx.finq.body': 'No importa si eras de Bogotá, Medellín, Caracas, Ciudad de México o San José. La casa de campo a las afueras, ese lugar donde el tiempo corre diferente — es el lujo más genuino de nuestra cultura. Placid Grove nació exactamente para eso.',
    'idx.finq.i1': '<strong>Tu pedacito de tierra en Florida</strong> — con escritura real, lote propio, cabaña que se paga sola',
    'idx.finq.i2': '<strong>Escape de la rutina urbana</strong> — a 2.5 horas de 12 millones de personas pero en otro mundo completamente',
    'idx.finq.i3': '<strong>Punto de encuentro familiar</strong> — deportes, naturaleza, huerta, senderos, restaurante. Todo en un solo lugar',
    'idx.finq.i4': '<strong>La alcancía familiar</strong> — tierra en Florida que aprecia 10.87% anual y genera renta cuando no la usas',
    'idx.finq.i5': '<strong>Farm-to-table real</strong> — huertas que son jardines comestibles, árboles frutales, aves, lagunas. Naturaleza como experiencia, no como decoración',

    /* ===== INDEX · NEXT CTA ===== */
    'idx.next.title': '¿Por qué <em>Lake Placid</em> y esta propiedad?',
    'idx.next.body': 'El gap de precio · La posición estratégica · Lo que confirmó Zoning',
    'idx.next.btn': 'Explorar el Concepto →'
  },

  en: {
    /* ===== NAV ===== */
    'nav.inicio': 'Home',
    'nav.concepto': 'Concept',
    'nav.producto': 'Product',
    'nav.inversion': 'Investment',
    'nav.estrategia': 'Strategy',
    'nav.galeria': 'Gallery',
    'nav.cta': 'Express Interest',

    /* ===== FOOTER ===== */
    'footer.concepto': 'Concept',
    'footer.producto': 'Product',
    'footer.inversion': 'Investment',
    'footer.contacto': 'Contact',
    'footer.estrategia': 'Strategy',
    'footer.meta1': 'BKS-2026-PLG-001 · May 2026',
    'footer.meta2': 'Brickstackers Intelligence · Capital Desk',
    'footer.meta2b': 'Brickstackers Intelligence',
    'footer.meta3': 'Lake Placid, FL 33852',

    /* ===== INDEX · HERO ===== */
    'idx.hero.eyebrow': 'Investment Memorandum · BKS-2026-PLG-001',
    'idx.hero.sub': 'Your piece of nature in Florida.',
    'idx.hero.location': 'Lake Placid, Highlands County · Florida · 134 Acres',
    'idx.hero.stat1.val': '~27%',
    'idx.hero.stat1.lbl': 'Cash IRR · 30 months',
    'idx.hero.stat2.val': '$900K',
    'idx.hero.stat2.lbl': 'Zone B Equity · 5 years',
    'idx.hero.stat3.val': '$1.8M',
    'idx.hero.stat3.lbl': 'Capital Raise',
    'idx.hero.stat4.val': '134',
    'idx.hero.stat4.lbl': 'Acres',
    'idx.hero.btn.oferta': 'See the Offer →',
    'idx.hero.btn.galeria': 'View Gallery',

    /* ===== INDEX · MANIFESTO ===== */
    'idx.manifesto.label': 'The Concept',
    'idx.manifesto.title': 'A closed golf course,<br><em>reimagined</em> as a wellness community',
    'idx.manifesto.body1': 'Placid Lakes Country Club ceased operations in April 2025. What remains are 134 acres of mature oak canopy, natural lagoons, an operating restaurant with a liquor license, and infrastructure that would cost millions to build from scratch on raw land.',
    'idx.manifesto.body2': 'Placid Grove is the conversion of this dormant asset into a nature-driven agro-residential community — where families own real land, the cabins generate real income, and the landscape itself becomes the lifestyle.',
    'idx.manifesto.quote': '"Land is a commodity. The real scarcity lies in experience, design, and the ability to create belonging."',
    'idx.manifesto.tag': 'Lake Placid, Florida · 134 Acres · Available',

    /* ===== INDEX · TRENDS ===== */
    'idx.trends.label': 'The Moment',
    'idx.trends.title': 'Two megatrends<br>that <em>converge</em>',
    'idx.trends.intro': 'Agritourism and wellness travel are the permanent reconfiguration of how people want to live and vacation. Placid Grove sits exactly at the intersection of both — plus the Latino cultural longing for one\'s own piece of land.',
    'idx.trends.c1.tag': 'Agritourism',
    'idx.trends.c1.title': 'The countryside becomes a destination again',
    'idx.trends.c1.body': 'Demand for authentic rural experiences, farm-sourced gastronomy and direct contact with nature is reshaping tourism. Farm-to-table is no longer a concept — it became the most aspirational lifestyle of the decade.',
    'idx.trends.c1.stat.val': '$81.2B',
    'idx.trends.c1.stat.lbl': 'Global market 2025 · 10.76% CAGR through 2034',
    'idx.trends.c2.tag': 'Wellness Travel',
    'idx.trends.c2.title': 'Luxury is nature and balance',
    'idx.trends.c2.body': 'Wellness tourism surpassed $1.15 trillion in 2025 and grows at 12.4% annually. The pandemic accelerated the search for destinations that offer real disconnection, fresh air and genuine food. The rural retreat displaced the urban spa as the premium aspiration.',
    'idx.trends.c2.stat.val': '12.4%',
    'idx.trends.c2.stat.lbl': 'Wellness tourism CAGR 2025–2033 · $2.9T projected',
    'idx.trends.c3.tag': 'The Finquita',
    'idx.trends.c3.title': 'The Latino longing that doesn\'t fade',
    'idx.trends.c3.body': 'For the more than 62 million Hispanics in the United States, the weekend countryside home is not an abstract luxury — it\'s a deep cultural need. Florida holds one of the largest Latino communities in the country, with over 5.9 million people.',
    'idx.trends.c3.stat.val': '5.9M',
    'idx.trends.c3.stat.lbl': 'Hispanic/Latino population in Florida · 26.8% of the state',

    /* ===== INDEX · FINQUITA ===== */
    'idx.finq.label': 'For the Latino in Florida',
    'idx.finq.title': 'The <em>finquita</em><br>you always dreamed of',
    'idx.finq.body': 'It doesn\'t matter if you\'re from Bogotá, Medellín, Caracas, Mexico City or San José. The country house on the outskirts — that place where time runs differently — is the most genuine luxury of our culture. Placid Grove was born precisely for that.',
    'idx.finq.i1': '<strong>Your piece of land in Florida</strong> — real deed, your own lot, a cabin that pays for itself',
    'idx.finq.i2': '<strong>An escape from the urban routine</strong> — 2.5 hours from 12 million people, yet a completely different world',
    'idx.finq.i3': '<strong>A family gathering ground</strong> — sports, nature, gardens, trails, restaurant. All in one place',
    'idx.finq.i4': '<strong>The family piggy bank</strong> — Florida land that appreciates 10.87% annually and generates rent when you\'re not using it',
    'idx.finq.i5': '<strong>Real farm-to-table</strong> — edible gardens, fruit trees, birds, lagoons. Nature as experience, not decoration',

    /* ===== INDEX · NEXT CTA ===== */
    'idx.next.title': 'Why <em>Lake Placid</em> and this property?',
    'idx.next.body': 'The price gap · The strategic position · What Zoning confirmed',
    'idx.next.btn': 'Explore the Concept →'
  }
};

/* ===================================================================
   Engine
   =================================================================== */

function setLang(lang) {
  if (lang !== 'es' && lang !== 'en') lang = 'es';
  document.documentElement.lang = lang;

  // Reemplazar contenido de elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = TRANSLATIONS[lang]?.[key];
    if (val !== undefined) el.innerHTML = val;
  });

  // Reemplazar atributos (alt, placeholder, etc.) con data-i18n-attr="attrName" data-i18n-key="key"
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const attrName = el.dataset.i18nAttr;
    const key = el.dataset.i18nKey;
    const val = TRANSLATIONS[lang]?.[key];
    if (val !== undefined && attrName) el.setAttribute(attrName, val);
  });

  // Actualizar texto del toggle button
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = lang === 'es' ? 'EN' : 'ES';
    btn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
  });

  localStorage.setItem('placidLang', lang);
}

function toggleLang() {
  const current = localStorage.getItem('placidLang') || 'es';
  setLang(current === 'es' ? 'en' : 'es');
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('placidLang') || 'es';
  setLang(saved);
});
