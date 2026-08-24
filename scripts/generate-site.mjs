/**
 * Genera las páginas HTML del sitio (ES / CA / EN).
 * Ejecutar: node scripts/generate-site.mjs
 * No es obligatorio en Netlify: el HTML generado se versiona en el repo.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const site = JSON.parse(fs.readFileSync(path.join(root, "data/site.json"), "utf8"));
const phone = site.phone.e164;
const phoneDisplay = site.phone.display;
const waBar = site.whatsapp.bar.replace("+", "");
const waPistas = site.whatsapp.pistas.replace("+", "");
const ig = site.instagram.url;
const playtomic = site.playtomic;
const maps = site.address.mapsUrl;
const addressLine = `${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.region}`;

const i18n = {
  es: {
    locale: "es",
    htmlLang: "es",
    name: site.name.es,
    nav: {
      home: "Inicio",
      services: "Servicios",
      menu: "Carta",
      blog: "Blog",
      contact: "Contacto",
      openMenu: "Abrir menú",
    },
    hero: {
      title: "Club Deportivo Esports Montesión",
      lead: "Pádel, vóley, bar y eventos en Palma. Reserva pista o mesa en un clic.",
      ctaCourt: "Reservar pista",
      ctaTable: "Reservar mesa",
      ctaMenu: "Ver carta",
    },
    carouselLabel: "Carrusel de imágenes del club",
    servicesTitle: "Servicios",
    servicesLead: "Todo lo que puedes disfrutar en el club.",
    services: {
      bar: {
        title: "Bar",
        text: "Picoteo, cenas, wraps, burgers y más. Ideal después de jugar o para quedar con amigos.",
        cta: "Ver carta",
        more: "Reservar mesa",
      },
      padel: {
        title: "Pádel",
        text: "Reserva tu pista online con Playtomic o llámanos / escríbenos por WhatsApp.",
        cta: "Playtomic",
        more: "WhatsApp pistas",
      },
      voley: {
        title: "Vóley",
        text: "Espacio para entrenar y disfrutar del vóley en un ambiente de club.",
        cta: "Contactar",
      },
      events: {
        title: "Eventos privados",
        text: "Celebraciones, quedadas de empresa o torneos privados. Te ayudamos a organizarlo.",
        cta: "Pedir info",
      },
    },
    homeServicesCta: "Ver todos los servicios",
    blogTitle: "Blog",
    blogLead: "Novedades del club. Publicamos una o dos entradas al mes.",
    blogAll: "Ver blog",
    contactTitle: "Contacto y reservas",
    contactLead: "Elige la vía más rápida según lo que necesites.",
    contact: {
      barTitle: "Reservar mesa (bar)",
      barText: "Llama o escribe por WhatsApp para reservar mesa.",
      courtTitle: "Reservar pista",
      courtText: "Playtomic, WhatsApp o llamada.",
      socialTitle: "Redes",
      socialText: "Síguenos en Instagram para eventos y ambiente del club.",
      call: "Llamar",
      wa: "WhatsApp",
      ig: "Instagram",
      playtomic: "Playtomic",
      address: "Dirección",
    },
    fab: {
      label: "Contactar por WhatsApp",
      table: "Reservar mesa (WhatsApp)",
      court: "Reservar pista (WhatsApp)",
    },
    cookies: {
      text: "Usamos cookies técnicas necesarias y, si las aceptas, cookies de analítica para mejorar la web. Consulta la",
      policy: "política de cookies",
      accept: "Aceptar",
      reject: "Rechazar",
    },
    footer: {
      legal: "Legal",
      notice: "Aviso legal",
      privacy: "Privacidad",
      cookies: "Cookies",
      quick: "Accesos rápidos",
      rights: "Todos los derechos reservados.",
    },
    carta: {
      title: "Carta del bar",
      lead: "Club Deportivo Esports Montesión",
      back: "Volver al bar",
      updated: "Precios orientativos. Pregunta en barra por alérgenos y disponibilidad.",
    },
    blogPage: {
      title: "Blog",
      lead: "Noticias y novedades del club.",
    },
    servicesPage: {
      title: "Servicios",
      lead: "Bar, pádel, vóley y eventos privados.",
    },
    contactPage: {
      title: "Contacto",
      lead: "Estamos en Palma. Reserva mesa o pista con un toque.",
    },
    legal: {
      noticeTitle: "Aviso legal",
      privacyTitle: "Política de privacidad",
      cookiesTitle: "Política de cookies",
    },
    posts: {
      bienvenida: {
        title: "Bienvenida a la web del club",
        body: [
          "Estrenamos la web de Club Deportivo Esports Montesión para que puedas consultar servicios, ver la carta del bar y reservar de forma rápida.",
          "En las próximas semanas iremos publicando novedades, horarios y eventos. Si tienes fotos o ideas para el blog, escríbenos por Instagram o WhatsApp.",
        ],
      },
      "como-reservar-pista": {
        title: "Cómo reservar pista de pádel",
        body: [
          "La forma más cómoda es a través de Playtomic, donde verás disponibilidad en tiempo real.",
          "También puedes escribirnos por WhatsApp o llamarnos al " + phoneDisplay + ". ¡Te esperamos en la pista!",
        ],
      },
    },
  },
  ca: {
    locale: "ca",
    htmlLang: "ca",
    name: site.name.ca,
    nav: {
      home: "Inici",
      services: "Serveis",
      menu: "Carta",
      blog: "Blog",
      contact: "Contacte",
      openMenu: "Obrir menú",
    },
    hero: {
      title: "Club Deportiu Esports Montesión",
      lead: "Pàdel, vòlei, bar i esdeveniments a Palma. Reserva pista o taula amb un clic.",
      ctaCourt: "Reservar pista",
      ctaTable: "Reservar taula",
      ctaMenu: "Veure carta",
    },
    carouselLabel: "Carrusel d'imatges del club",
    servicesTitle: "Serveis",
    servicesLead: "Tot el que pots gaudir al club.",
    services: {
      bar: {
        title: "Bar",
        text: "Pica-pica, sopars, wraps, burgers i més. Ideal després de jugar o per quedar amb amics.",
        cta: "Veure carta",
        more: "Reservar taula",
      },
      padel: {
        title: "Pàdel",
        text: "Reserva la teva pista online amb Playtomic o truca'ns / escriu-nos per WhatsApp.",
        cta: "Playtomic",
        more: "WhatsApp pistes",
      },
      voley: {
        title: "Vòlei",
        text: "Espai per entrenar i gaudir del vòlei en un ambient de club.",
        cta: "Contactar",
      },
      events: {
        title: "Esdeveniments privats",
        text: "Celebracions, trobades d'empresa o tornejos privats. T'ajudem a organitzar-ho.",
        cta: "Demanar info",
      },
    },
    homeServicesCta: "Veure tots els serveis",
    blogTitle: "Blog",
    blogLead: "Novetats del club. Publiquem una o dues entrades al mes.",
    blogAll: "Veure blog",
    contactTitle: "Contacte i reserves",
    contactLead: "Tria la via més ràpida segons el que necessitis.",
    contact: {
      barTitle: "Reservar taula (bar)",
      barText: "Truca o escriu per WhatsApp per reservar taula.",
      courtTitle: "Reservar pista",
      courtText: "Playtomic, WhatsApp o trucada.",
      socialTitle: "Xarxes",
      socialText: "Segueix-nos a Instagram per esdeveniments i ambient del club.",
      call: "Trucar",
      wa: "WhatsApp",
      ig: "Instagram",
      playtomic: "Playtomic",
      address: "Adreça",
    },
    fab: {
      label: "Contactar per WhatsApp",
      table: "Reservar taula (WhatsApp)",
      court: "Reservar pista (WhatsApp)",
    },
    cookies: {
      text: "Fem servir galetes tècniques necessàries i, si les acceptes, galetes d'analítica per millorar la web. Consulta la",
      policy: "política de galetes",
      accept: "Acceptar",
      reject: "Rebutjar",
    },
    footer: {
      legal: "Legal",
      notice: "Avís legal",
      privacy: "Privacitat",
      cookies: "Galetes",
      quick: "Accesos ràpids",
      rights: "Tots els drets reservats.",
    },
    carta: {
      title: "Carta del bar",
      lead: "Club Deportiu Esports Montesión",
      back: "Tornar al bar",
      updated: "Preus orientatius. Pregunta a barra per al·lèrgens i disponibilitat.",
    },
    blogPage: {
      title: "Blog",
      lead: "Notícies i novetats del club.",
    },
    servicesPage: {
      title: "Serveis",
      lead: "Bar, pàdel, vòlei i esdeveniments privats.",
    },
    contactPage: {
      title: "Contacte",
      lead: "Som a Palma. Reserva taula o pista amb un toc.",
    },
    legal: {
      noticeTitle: "Avís legal",
      privacyTitle: "Política de privacitat",
      cookiesTitle: "Política de galetes",
    },
    posts: {
      bienvenida: {
        title: "Benvinguda a la web del club",
        body: [
          "Estrenem la web de Club Deportiu Esports Montesión perquè puguis consultar serveis, veure la carta del bar i reservar de forma ràpida.",
          "Les properes setmanes anirem publicant novetats, horaris i esdeveniments. Si tens fotos o idees per al blog, escriu-nos per Instagram o WhatsApp.",
        ],
      },
      "como-reservar-pista": {
        title: "Com reservar pista de pàdel",
        body: [
          "La manera més còmoda és a través de Playtomic, on veuràs disponibilitat en temps real.",
          "També pots escriure'ns per WhatsApp o trucar-nos al " + phoneDisplay + ". T'esperem a la pista!",
        ],
      },
    },
  },
  en: {
    locale: "en",
    htmlLang: "en",
    name: site.name.en,
    nav: {
      home: "Home",
      services: "Services",
      menu: "Menu",
      blog: "Blog",
      contact: "Contact",
      openMenu: "Open menu",
    },
    hero: {
      title: "Club Deportivo Esports Montesión",
      lead: "Padel, volleyball, bar and events in Palma. Book a court or a table in one tap.",
      ctaCourt: "Book a court",
      ctaTable: "Book a table",
      ctaMenu: "View menu",
    },
    carouselLabel: "Club image carousel",
    servicesTitle: "Services",
    servicesLead: "Everything you can enjoy at the club.",
    services: {
      bar: {
        title: "Bar",
        text: "Snacks, dinners, wraps, burgers and more  perfect after a match or a catch-up with friends.",
        cta: "View menu",
        more: "Book a table",
      },
      padel: {
        title: "Padel",
        text: "Book online with Playtomic, or call / WhatsApp us.",
        cta: "Playtomic",
        more: "Courts WhatsApp",
      },
      voley: {
        title: "Volleyball",
        text: "A club setting to train and enjoy volleyball.",
        cta: "Contact",
      },
      events: {
        title: "Private events",
        text: "Celebrations, company meetups or private tournaments. Well help you organise it.",
        cta: "Ask for info",
      },
    },
    homeServicesCta: "See all services",
    blogTitle: "Blog",
    blogLead: "Club news. We publish one or two posts a month.",
    blogAll: "View blog",
    contactTitle: "Contact & bookings",
    contactLead: "Pick the fastest option for what you need.",
    contact: {
      barTitle: "Book a table (bar)",
      barText: "Call or WhatsApp to reserve a table.",
      courtTitle: "Book a court",
      courtText: "Playtomic, WhatsApp or phone.",
      socialTitle: "Social",
      socialText: "Follow us on Instagram for events and club life.",
      call: "Call",
      wa: "WhatsApp",
      ig: "Instagram",
      playtomic: "Playtomic",
      address: "Address",
    },
    fab: {
      label: "Contact on WhatsApp",
      table: "Book a table (WhatsApp)",
      court: "Book a court (WhatsApp)",
    },
    cookies: {
      text: "We use essential technical cookies and, if you accept, analytics cookies to improve the site. See our",
      policy: "cookie policy",
      accept: "Accept",
      reject: "Reject",
    },
    footer: {
      legal: "Legal",
      notice: "Legal notice",
      privacy: "Privacy",
      cookies: "Cookies",
      quick: "Quick links",
      rights: "All rights reserved.",
    },
    carta: {
      title: "Bar menu",
      lead: "Club Deportivo Esports Montesión",
      back: "Back to bar",
      updated: "Prices may vary. Ask at the bar about allergens and availability.",
    },
    blogPage: {
      title: "Blog",
      lead: "News and updates from the club.",
    },
    servicesPage: {
      title: "Services",
      lead: "Bar, padel, volleyball and private events.",
    },
    contactPage: {
      title: "Contact",
      lead: "Based in Palma. Book a table or court in one tap.",
    },
    legal: {
      noticeTitle: "Legal notice",
      privacyTitle: "Privacy policy",
      cookiesTitle: "Cookie policy",
    },
    posts: {
      bienvenida: {
        title: "Welcome to the club website",
        body: [
          "The Club Deportivo Esports Montesión website is live so you can browse services, check the bar menu and book quickly.",
          "Over the coming weeks well share schedules and events. Got photos or blog ideas? Reach us on Instagram or WhatsApp.",
        ],
      },
      "como-reservar-pista": {
        title: "How to book a padel court",
        body: [
          "The easiest way is Playtomic, where you can see real-time availability.",
          "You can also WhatsApp us or call " + phoneDisplay + ". See you on court!",
        ],
      },
    },
  },
};

function waLink(num, text) {
  return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
}

function head({ lang, title, description, pathSuffix, extra = "" }) {
  const t = i18n[lang];
  const canonical = `/${lang}${pathSuffix}`;
  return `<!DOCTYPE html>
<html lang="${t.htmlLang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="theme-color" content="#00204a">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="es" href="/es${pathSuffix}">
  <link rel="alternate" hreflang="ca" href="/ca${pathSuffix}">
  <link rel="alternate" hreflang="en" href="/en${pathSuffix}">
  <link rel="alternate" hreflang="x-default" href="/es${pathSuffix}">
  <link rel="icon" href="/assets/img/logo.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/main.css">
  ${extra}
</head>`;
}

function header(lang, current) {
  const t = i18n[lang];
  const link = (key, href) =>
    `<a href="/${lang}${href}"${current === key ? ' aria-current="page"' : ""}>${t.nav[key]}</a>`;
  return `
  <a class="skip-link" href="#main">Skip</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="/${lang}/">
        <img src="/assets/img/logo.svg" width="48" height="58" alt="${t.name}">
        <span class="brand-text">
          <strong>C.D.E. Montesión</strong>
          <span>${t.name}</span>
        </span>
      </a>
      <button class="nav-toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="site-nav">${t.nav.openMenu}</button>
      <nav class="nav" id="site-nav" data-nav>
        ${link("home", "/")}
        ${link("services", "/servicios.html")}
        ${link("menu", "/carta.html")}
        ${link("blog", "/blog/")}
        ${link("contact", "/contacto.html")}
        <span class="lang-switch" aria-label="Language">
          <a href="/es${currentPath(current)}" data-lang="es" ${lang === "es" ? 'aria-current="true"' : ""}>ES</a>
          <a href="/ca${currentPath(current)}" data-lang="ca" ${lang === "ca" ? 'aria-current="true"' : ""}>CA</a>
          <a href="/en${currentPath(current)}" data-lang="en" ${lang === "en" ? 'aria-current="true"' : ""}>EN</a>
        </span>
      </nav>
    </div>
  </header>`;
}

function currentPath(current) {
  switch (current) {
    case "home":
      return "/";
    case "services":
      return "/servicios.html";
    case "menu":
      return "/carta.html";
    case "blog":
      return "/blog/";
    case "contact":
      return "/contacto.html";
    case "notice":
      return "/legal/aviso-legal.html";
    case "privacy":
      return "/legal/privacidad.html";
    case "cookies":
      return "/legal/cookies.html";
    default:
      return "/";
  }
}

function footer(lang) {
  const t = i18n[lang];
  return `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <h3>${t.name}</h3>
        <p>${addressLine}</p>
        <p><a href="tel:${phone}">${phoneDisplay}</a></p>
        <p><a href="${ig}" rel="noopener noreferrer" target="_blank">${site.instagram.handle}</a></p>
      </div>
      <div>
        <h3>${t.footer.quick}</h3>
        <ul>
          <li><a href="/${lang}/carta.html">${t.nav.menu}</a></li>
          <li><a href="${playtomic}" rel="noopener noreferrer" target="_blank">Playtomic</a></li>
          <li><a href="/${lang}/contacto.html">${t.nav.contact}</a></li>
          <li><a href="/${lang}/blog/">${t.nav.blog}</a></li>
        </ul>
      </div>
      <div>
        <h3>${t.footer.legal}</h3>
        <ul>
          <li><a href="/${lang}/legal/aviso-legal.html">${t.footer.notice}</a></li>
          <li><a href="/${lang}/legal/privacidad.html">${t.footer.privacy}</a></li>
          <li><a href="/${lang}/legal/cookies.html">${t.footer.cookies}</a></li>
        </ul>
      </div>
    </div>
    <div class="container footer-bottom">
      © ${new Date().getFullYear()} ${t.name}. ${t.footer.rights}
    </div>
  </footer>`;
}

function fab(lang) {
  const t = i18n[lang];
  const tableMsg =
    lang === "ca"
      ? "Hola! Vull reservar taula al bar."
      : lang === "en"
        ? "Hi! Id like to book a table at the bar."
        : "Hola! Quiero reservar mesa en el bar.";
  const courtMsg =
    lang === "ca"
      ? "Hola! Vull reservar pista."
      : lang === "en"
        ? "Hi! Id like to book a court."
        : "Hola! Quiero reservar pista.";
  return `
  <div class="fab-wrap">
    <div class="fab-menu" data-fab-menu>
      <a href="${waLink(waBar, tableMsg)}" target="_blank" rel="noopener noreferrer">${t.fab.table}</a>
      <a href="${waLink(waPistas, courtMsg)}" target="_blank" rel="noopener noreferrer">${t.fab.court}</a>
      <a href="tel:${phone}">${t.contact.call} ${phoneDisplay}</a>
      <a href="${playtomic}" target="_blank" rel="noopener noreferrer">${t.contact.playtomic}</a>
      <a href="${ig}" target="_blank" rel="noopener noreferrer">${t.contact.ig}</a>
    </div>
    <button class="fab" type="button" data-fab aria-expanded="false" aria-label="${t.fab.label}">WA</button>
  </div>`;
}

function cookies(lang) {
  const t = i18n[lang];
  return `
  <div class="cookie-banner" data-cookie-banner role="dialog" aria-live="polite">
    <p>${t.cookies.text} <a href="/${lang}/legal/cookies.html">${t.cookies.policy}</a>.</p>
    <div class="cookie-actions">
      <button class="btn btn-primary" type="button" data-cookie-accept>${t.cookies.accept}</button>
      <button class="btn btn-ghost" type="button" data-cookie-reject>${t.cookies.reject}</button>
    </div>
  </div>`;
}

function scripts(extra = []) {
  const base = [
    '<script src="/assets/js/main.js" defer></script>',
    '<script src="/assets/js/cookies.js" defer></script>',
  ];
  return [...base, ...extra].join("\n  ");
}

function write(rel, content) {
  const full = path.join(root, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
  console.log("wrote", rel);
}

function pageShell(lang, { title, description, pathSuffix, current, body, extraHead = "", extraScripts = [] }) {
  const t = i18n[lang];
  return `${head({ lang, title, description, pathSuffix, extra: extraHead })}
<body>
  ${header(lang, current)}
  <main id="main">
    ${body}
  </main>
  ${footer(lang)}
  ${fab(lang)}
  ${cookies(lang)}
  ${scripts(extraScripts)}
</body>
</html>
`;
}

const eventos = JSON.parse(fs.readFileSync(path.join(root, "data/eventos.json"), "utf8"));

for (const lang of ["es", "ca", "en"]) {
  const t = i18n[lang];

  // HOME
  const slides = eventos.slides
    .map(
      (s, i) => `
        <div class="carousel-slide"${i === 0 ? "" : ""}>
          <img src="${s.image}" alt="${s.alt[lang]}" width="1200" height="675" ${i === 0 ? "" : 'loading="lazy"'}>
          <div class="carousel-caption">${s.caption[lang]}</div>
        </div>`
    )
    .join("");

  write(
    `${lang}/index.html`,
    pageShell(lang, {
      title: `${t.name} | Palma`,
      description: t.hero.lead,
      pathSuffix: "/",
      current: "home",
      body: `
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <h1 class="hero-brand">${t.hero.title}</h1>
          <p>${t.hero.lead}</p>
          <div class="btn-row">
            <a class="btn btn-primary" href="${playtomic}" target="_blank" rel="noopener noreferrer">${t.hero.ctaCourt}</a>
            <a class="btn btn-ghost" href="tel:${phone}">${t.hero.ctaTable}</a>
            <a class="btn btn-soft" href="/${lang}/carta.html">${t.hero.ctaMenu}</a>
          </div>
        </div>
        <div class="carousel" data-carousel aria-label="${t.carouselLabel}">
          <div class="carousel-track" data-carousel-track>${slides}</div>
          <div class="carousel-nav">
            <button type="button" data-carousel-prev aria-label="Previous">&lsaquo;</button>
            <button type="button" data-carousel-next aria-label="Next">&rsaquo;</button>
          </div>
          <div class="carousel-dots" data-carousel-dots></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <h2>${t.servicesTitle}</h2>
          <p>${t.servicesLead}</p>
        </div>
        <div class="cards">
          <article class="card">
            <img src="/assets/img/placeholders/servicio-bar.svg" alt="" loading="lazy" width="800" height="500">
            <div class="card-body">
              <h3>${t.services.bar.title}</h3>
              <p>${t.services.bar.text}</p>
              <a class="btn btn-soft" href="/${lang}/carta.html">${t.services.bar.cta}</a>
            </div>
          </article>
          <article class="card">
            <img src="/assets/img/placeholders/servicio-padel.svg" alt="" loading="lazy" width="800" height="500">
            <div class="card-body">
              <h3>${t.services.padel.title}</h3>
              <p>${t.services.padel.text}</p>
              <a class="btn btn-soft" href="${playtomic}" target="_blank" rel="noopener noreferrer">${t.services.padel.cta}</a>
            </div>
          </article>
          <article class="card">
            <img src="/assets/img/placeholders/servicio-voley.svg" alt="" loading="lazy" width="800" height="500">
            <div class="card-body">
              <h3>${t.services.voley.title}</h3>
              <p>${t.services.voley.text}</p>
              <a class="btn btn-soft" href="/${lang}/contacto.html">${t.services.voley.cta}</a>
            </div>
          </article>
          <article class="card">
            <img src="/assets/img/placeholders/servicio-eventos.svg" alt="" loading="lazy" width="800" height="500">
            <div class="card-body">
              <h3>${t.services.events.title}</h3>
              <p>${t.services.events.text}</p>
              <a class="btn btn-soft" href="/${lang}/contacto.html">${t.services.events.cta}</a>
            </div>
          </article>
        </div>
        <p style="margin-top:1.25rem"><a class="btn btn-ghost" href="/${lang}/servicios.html">${t.homeServicesCta}</a></p>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="cta-strip">
          <div>
            <h2>${t.contactTitle}</h2>
            <p>${t.contactLead}</p>
          </div>
          <div class="btn-row">
            <a class="btn btn-primary" href="${waLink(waBar, lang === "en" ? "Hi! Table reservation" : lang === "ca" ? "Hola! Reserva de taula" : "Hola! Reserva de mesa")}" target="_blank" rel="noopener noreferrer">${t.contact.wa}</a>
            <a class="btn btn-ghost" href="tel:${phone}">${t.contact.call}</a>
            <a class="btn btn-ghost" href="${ig}" target="_blank" rel="noopener noreferrer">${t.contact.ig}</a>
            <a class="btn btn-ghost" href="${playtomic}" target="_blank" rel="noopener noreferrer">${t.contact.playtomic}</a>
          </div>
        </div>
      </div>
    </section>`,
    })
  );

  // SERVICES
  write(
    `${lang}/servicios.html`,
    pageShell(lang, {
      title: `${t.servicesPage.title} | ${t.name}`,
      description: t.servicesPage.lead,
      pathSuffix: "/servicios.html",
      current: "services",
      body: `
    <section class="section">
      <div class="container">
        <div class="section-head">
          <h1>${t.servicesPage.title}</h1>
          <p>${t.servicesPage.lead}</p>
        </div>

        <article class="service-block" id="bar">
          <img src="/assets/img/placeholders/servicio-bar.svg" alt="" loading="lazy" width="800" height="500">
          <div class="service-copy">
            <h2>${t.services.bar.title}</h2>
            <p>${t.services.bar.text}</p>
            <div class="btn-row">
              <a class="btn btn-primary" href="/${lang}/carta.html">${t.services.bar.cta}</a>
              <a class="btn btn-ghost" href="tel:${phone}">${t.services.bar.more}</a>
              <a class="btn btn-soft" href="${waLink(waBar, "Reserva mesa")}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </article>

        <article class="service-block reverse" id="padel">
          <img src="/assets/img/placeholders/servicio-padel.svg" alt="" loading="lazy" width="800" height="500">
          <div class="service-copy">
            <h2>${t.services.padel.title}</h2>
            <p>${t.services.padel.text}</p>
            <div class="btn-row">
              <a class="btn btn-primary" href="${playtomic}" target="_blank" rel="noopener noreferrer">${t.services.padel.cta}</a>
              <a class="btn btn-ghost" href="${waLink(waPistas, "Reserva pista")}" target="_blank" rel="noopener noreferrer">${t.services.padel.more}</a>
              <a class="btn btn-soft" href="tel:${phone}">${t.contact.call}</a>
            </div>
          </div>
        </article>

        <article class="service-block" id="voley">
          <img src="/assets/img/placeholders/servicio-voley.svg" alt="" loading="lazy" width="800" height="500">
          <div class="service-copy">
            <h2>${t.services.voley.title}</h2>
            <p>${t.services.voley.text}</p>
            <div class="btn-row">
              <a class="btn btn-primary" href="/${lang}/contacto.html">${t.services.voley.cta}</a>
            </div>
          </div>
        </article>

        <article class="service-block reverse" id="eventos">
          <img src="/assets/img/placeholders/servicio-eventos.svg" alt="" loading="lazy" width="800" height="500">
          <div class="service-copy">
            <h2>${t.services.events.title}</h2>
            <p>${t.services.events.text}</p>
            <div class="btn-row">
              <a class="btn btn-primary" href="/${lang}/contacto.html">${t.services.events.cta}</a>
              <a class="btn btn-ghost" href="${ig}" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </article>
      </div>
    </section>`,
    })
  );

  // CARTA
  write(
    `${lang}/carta.html`,
    pageShell(lang, {
      title: `${t.carta.title} | ${t.name}`,
      description: t.carta.lead,
      pathSuffix: "/carta.html",
      current: "menu",
      extraHead: "",
      extraScripts: ['<script src="/assets/js/carta.js" defer></script>'],
      body: `
    <section class="section carta-page">
      <div class="container">
        <header class="carta-header">
          <img class="logo-mini" src="/assets/img/logo.svg" alt="" width="72" height="86">
          <h1>${t.carta.title}</h1>
          <p>${t.carta.lead}</p>
          <p class="muted" style="margin-top:0.75rem">${t.carta.updated}</p>
          <p style="margin-top:1rem"><a class="btn btn-soft" href="/${lang}/servicios.html#bar">${t.carta.back}</a></p>
        </header>
        <div data-carta data-lang="${lang}">
          <p class="muted">Cargando carta
</p>
        </div>
      </div>
    </section>`,
    })
  );

  // BLOG INDEX
  write(
    `${lang}/blog/index.html`,
    pageShell(lang, {
      title: `${t.blogPage.title} | ${t.name}`,
      description: t.blogPage.lead,
      pathSuffix: "/blog/",
      current: "blog",
      extraScripts: ['<script src="/assets/js/blog.js" defer></script>'],
      body: `
    <section class="section">
      <div class="container">
        <div class="section-head">
          <h1>${t.blogPage.title}</h1>
          <p>${t.blogPage.lead}</p>
        </div>
        <div class="blog-list" data-blog-list data-lang="${lang}"></div>
      </div>
    </section>`,
    })
  );

  // BLOG POSTS
  for (const slug of ["bienvenida", "como-reservar-pista"]) {
    const post = t.posts[slug];
    const img = slug === "bienvenida" ? "blog-1.svg" : "blog-2.svg";
    const date = slug === "bienvenida" ? "2026-08-01" : "2026-08-15";
    write(
      `${lang}/blog/${slug}.html`,
      pageShell(lang, {
        title: `${post.title} | ${t.name}`,
        description: post.body[0],
        pathSuffix: `/blog/${slug}.html`,
        current: "blog",
        body: `
    <section class="section">
      <div class="container prose">
        <p><a href="/${lang}/blog/">? ${t.blogPage.title}</a></p>
        <img src="/assets/img/placeholders/${img}" alt="" width="800" height="500" style="border-radius:14px;margin:1rem 0">
        <h1>${post.title}</h1>
        <time datetime="${date}">${date}</time>
        ${post.body.map((p) => `<p>${p}</p>`).join("\n        ")}
      </div>
    </section>`,
      })
    );
  }

  // CONTACT
  write(
    `${lang}/contacto.html`,
    pageShell(lang, {
      title: `${t.contactPage.title} | ${t.name}`,
      description: t.contactPage.lead,
      pathSuffix: "/contacto.html",
      current: "contact",
      body: `
    <section class="section">
      <div class="container">
        <div class="section-head">
          <h1>${t.contactPage.title}</h1>
          <p>${t.contactPage.lead}</p>
        </div>
        <div class="contact-grid">
          <article class="contact-card">
            <h3>${t.contact.barTitle}</h3>
            <p>${t.contact.barText}</p>
            <div class="btn-row">
              <a class="btn btn-primary" href="tel:${phone}">${t.contact.call}</a>
              <a class="btn btn-soft" href="${waLink(waBar, "Reserva mesa")}" target="_blank" rel="noopener noreferrer">${t.contact.wa}</a>
            </div>
          </article>
          <article class="contact-card">
            <h3>${t.contact.courtTitle}</h3>
            <p>${t.contact.courtText}</p>
            <div class="btn-row">
              <a class="btn btn-primary" href="${playtomic}" target="_blank" rel="noopener noreferrer">${t.contact.playtomic}</a>
              <a class="btn btn-soft" href="${waLink(waPistas, "Reserva pista")}" target="_blank" rel="noopener noreferrer">${t.contact.wa}</a>
              <a class="btn btn-ghost" href="tel:${phone}">${t.contact.call}</a>
            </div>
          </article>
          <article class="contact-card">
            <h3>${t.contact.socialTitle}</h3>
            <p>${t.contact.socialText}</p>
            <div class="btn-row">
              <a class="btn btn-primary" href="${ig}" target="_blank" rel="noopener noreferrer">${t.contact.ig}</a>
            </div>
          </article>
          <article class="contact-card">
            <h3>${t.contact.address}</h3>
            <p>${addressLine}</p>
            <div class="btn-row">
              <a class="btn btn-soft" href="${maps}" target="_blank" rel="noopener noreferrer">Google Maps</a>
            </div>
          </article>
        </div>
      </div>
    </section>`,
    })
  );

  // LEGAL
  const todoCif =
    lang === "ca"
      ? "Pendent: afegir CIF/NIF de l'entitat quan el tingueu."
      : lang === "en"
        ? "TODO: add the organisation CIF/NIF when available."
        : "Pendiente: añadir el CIF/NIF de la entidad cuando lo tengáis.";
  const todoEmail =
    lang === "ca"
      ? "Pendent: afegir email de contacte corporatiu."
      : lang === "en"
        ? "TODO: add a corporate contact email."
        : "Pendiente: añadir email de contacto corporativo.";

  write(
    `${lang}/legal/aviso-legal.html`,
    pageShell(lang, {
      title: `${t.legal.noticeTitle} | ${t.name}`,
      description: t.legal.noticeTitle,
      pathSuffix: "/legal/aviso-legal.html",
      current: "notice",
      body: `
    <section class="section legal">
      <div class="container prose">
        <h1>${t.legal.noticeTitle}</h1>
        <p class="todo">${todoCif}</p>
        <p class="todo">${todoEmail}</p>
        <p><strong>${t.name}</strong></p>
        <p>${addressLine}</p>
        <p>Tel: <a href="tel:${phone}">${phoneDisplay}</a></p>
        <p>${
          lang === "en"
            ? "This website provides information about the clubs sports and hospitality services."
            : lang === "ca"
              ? "Aquest lloc web ofereix informació sobre els serveis esportius i de restauració del club."
              : "Este sitio web ofrece información sobre los servicios deportivos y de restauración del club."
        }</p>
        <p>${
          lang === "en"
            ? "Intellectual property: the logo, texts and design of this site belong to the club or are used with permission. Unauthorised use is not allowed."
            : lang === "ca"
              ? "Propietat intel·lectual: el logotip, textos i disseny d'aquest lloc pertanyen al club o s'utilitzen amb permís. No se'n permet un ús no autoritzat."
              : "Propiedad intelectual: el logotipo, textos y diseño de este sitio pertenecen al club o se usan con permiso. No se permite su uso no autorizado."
        }</p>
      </div>
    </section>`,
    })
  );

  write(
    `${lang}/legal/privacidad.html`,
    pageShell(lang, {
      title: `${t.legal.privacyTitle} | ${t.name}`,
      description: t.legal.privacyTitle,
      pathSuffix: "/legal/privacidad.html",
      current: "privacy",
      body: `
    <section class="section legal">
      <div class="container prose">
        <h1>${t.legal.privacyTitle}</h1>
        <p class="todo">${todoCif}</p>
        <p class="todo">${todoEmail}</p>
        <p>${
          lang === "en"
            ? "We process personal data only when you contact us (phone, WhatsApp or Instagram) to handle bookings and enquiries, based on your request and our legitimate interest in responding."
            : lang === "ca"
              ? "Tractem dades personals només quan ens contactes (telèfon, WhatsApp o Instagram) per gestionar reserves i consultes, basant-nos en la teva sol·licitud i en el nostre interès legítim a respondre."
              : "Tratamos datos personales solo cuando nos contactas (teléfono, WhatsApp o Instagram) para gestionar reservas y consultas, basándonos en tu solicitud y en nuestro interés legítimo en responder."
        }</p>
        <p>${
          lang === "en"
            ? "You may exercise access, rectification, erasure, objection and other GDPR rights by contacting us through the channels published on this website. You can also lodge a complaint with the Spanish Data Protection Agency (AEPD)."
            : lang === "ca"
              ? "Pots exercir els drets d'accés, rectificació, supressió, oposició i altres drets RGPD contactant-nos pels canals publicats en aquesta web. També pots reclamar davant l'Agència Espanyola de Protecció de Dades (AEPD)."
              : "Puedes ejercer los derechos de acceso, rectificación, supresión, oposición y demás derechos RGPD contactándonos por los canales publicados en esta web. También puedes reclamar ante la Agencia Española de Protección de Datos (AEPD)."
        }</p>
      </div>
    </section>`,
    })
  );

  write(
    `${lang}/legal/cookies.html`,
    pageShell(lang, {
      title: `${t.legal.cookiesTitle} | ${t.name}`,
      description: t.legal.cookiesTitle,
      pathSuffix: "/legal/cookies.html",
      current: "cookies",
      body: `
    <section class="section legal">
      <div class="container prose">
        <h1>${t.legal.cookiesTitle}</h1>
        <p>${
          lang === "en"
            ? "This site uses essential technical cookies needed for language preference and cookie consent storage."
            : lang === "ca"
              ? "Aquest lloc fa servir galetes tècniques essencials per desar la preferència d'idioma i el consentiment de galetes."
              : "Este sitio usa cookies técnicas esenciales para guardar la preferencia de idioma y el consentimiento de cookies."
        }</p>
        <p>${
          lang === "en"
            ? "If you accept analytics cookies in the banner, we may enable measurement tools in the future. Until then, no non-essential tracking cookies are loaded by default."
            : lang === "ca"
              ? "Si acceptes les galetes d'analítica al bàner, en el futur podríem activar eines de mesura. Mentrestant, per defecte no es carreguen galetes de seguiment no essencials."
              : "Si aceptas las cookies de analítica en el banner, en el futuro podríamos activar herramientas de medición. Mientras tanto, por defecto no se cargan cookies de seguimiento no esenciales."
        }</p>
        <p>${
          lang === "en"
            ? "You can change your choice by clearing site data in your browser."
            : lang === "ca"
              ? "Pots canviar la teva elecció esborrant les dades del lloc al navegador."
              : "Puedes cambiar tu elección borrando los datos del sitio en el navegador."
        }</p>
      </div>
    </section>`,
    })
  );
}

// Root redirect + QR carta shortcut + netlify + gitignore
write(
  "index.html",
  `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Club Deportivo Esports Montesión</title>
  <meta name="description" content="Club Deportivo Esports Montesión  pádel, vóley, bar y eventos en Palma.">
  <link rel="icon" href="/assets/img/logo.svg" type="image/svg+xml">
  <script src="/assets/js/lang-redirect.js"></script>
  <noscript><meta http-equiv="refresh" content="0; url=/es/"></noscript>
</head>
<body>
  <p><a href="/es/">Español</a> · <a href="/ca/">Català</a> · <a href="/en/">English</a></p>
</body>
</html>
`
);

write(
  "carta/index.html",
  `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Carta | C.D.E. Montesión</title>
  <meta name="robots" content="noindex">
  <script>
    (function () {
      var supported = ["es", "ca", "en"];
      var stored = null;
      try { stored = localStorage.getItem("montesion-lang"); } catch (e) {}
      var chosen = stored && supported.indexOf(stored) !== -1 ? stored : null;
      if (!chosen) {
        var langs = navigator.languages || [navigator.language || "es"];
        for (var i = 0; i < langs.length; i++) {
          var code = String(langs[i]).toLowerCase().slice(0, 2);
          if (supported.indexOf(code) !== -1) { chosen = code; break; }
        }
      }
      if (!chosen) chosen = "es";
      location.replace("/" + chosen + "/carta.html");
    })();
  </script>
  <noscript><meta http-equiv="refresh" content="0; url=/es/carta.html"></noscript>
</head>
<body>
  <p><a href="/es/carta.html">Carta</a></p>
</body>
</html>
`
);

console.log("Site generated.");
