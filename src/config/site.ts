const productionUrl = "https://www.iatera.com.mx";

const normalizeUrl = (value: string) => value.trim().replace(/\/$/, "");
const configuredUrl = typeof process !== "undefined" ? process.env.PUBLIC_SITE_URL : undefined;

export const SITE_URL = normalizeUrl(configuredUrl || productionUrl);
export const SITE_IS_FINAL = SITE_URL === productionUrl;

export const site = {
  name: "IATERA",
  legalName: "IATERA",
  baseline: "Infraestructura tecnológica empresarial",
  description: "Soporte TI, infraestructura y ciberseguridad para empresas en Lindavista, CDMX, México.",
  url: SITE_URL,
  locale: "es_MX",
  areaServed: ["Lindavista, Ciudad de México", "Ciudad de México", "Estado de México", "México"],
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
