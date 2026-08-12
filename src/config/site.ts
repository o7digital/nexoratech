const developmentUrl = "https://infrasegura-one.vercel.app";

const normalizeUrl = (value: string) => value.trim().replace(/\/$/, "");
const configuredUrl = typeof process !== "undefined" ? process.env.PUBLIC_SITE_URL : undefined;

// PUBLIC_SITE_URL becomes the single switch when the final domain is known.
// Until then, builds intentionally keep the stable development URL.
export const SITE_URL = normalizeUrl(configuredUrl || developmentUrl);
export const SITE_IS_FINAL = Boolean(configuredUrl);

export const site = {
  name: "IATERA",
  legalName: "IATERA",
  baseline: "Infraestructura tecnológica empresarial",
  description: "Soporte TI, infraestructura y ciberseguridad para empresas en México.",
  url: SITE_URL,
  locale: "es_MX",
  areaServed: ["Ciudad de México", "Estado de México", "México"],
  address: {
    country: "MX",
    region: "Ciudad de México",
  },
  contact: {
    form: "/#contacto",
    support: "/#contacto",
    privacy: "/aviso-privacidad/",
  },
  social: [] as string[],
} as const;

export const languageRoutes = {
  "es-MX": "/",
  en: "/en/",
  fr: "/fr/",
  de: "/de/",
  pt: "/pt/",
  it: "/it/",
} as const;

export const privacyLanguageRoutes = {
  "es-MX": "/aviso-privacidad/",
  en: "/en/privacy/",
  fr: "/fr/confidentialite/",
  de: "/de/datenschutz/",
  pt: "/pt/privacidade/",
  it: "/it/privacy/",
} as const;

export const serviceRoutes = [
  "/soporte-tecnico-empresas/",
  "/auditoria-ciberseguridad-nist/",
  "/administracion-servidores/",
  "/mantenimiento-equipos/",
  "/equipos-componentes/",
  "/desarrollo-web-empresarial/",
  "/seo-mexico/",
] as const;
