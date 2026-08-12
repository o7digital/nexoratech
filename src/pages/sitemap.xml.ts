import type { APIRoute } from "astro";
import { serviceRoutes } from "../config/site";

export const GET: APIRoute = ({ site, request }) => {
  const base = site?.toString() ?? new URL(request.url).origin + "/";
  const homeRoutes = ["", "en/", "fr/", "de/", "pt/", "it/"];
  const privacyRoutes = ["aviso-privacidad/", "en/privacy/", "fr/confidentialite/", "de/datenschutz/", "pt/privacidade/", "it/privacy/"];
  const urls = [...homeRoutes, ...serviceRoutes.map((path) => path.slice(1)), ...privacyRoutes];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => {
    const priority = path === "" ? "1.0" : privacyRoutes.includes(path) ? "0.3" : homeRoutes.includes(path) ? "0.8" : "0.9";
    return `  <url><loc>${new URL(path, base).toString()}</loc><changefreq>monthly</changefreq><priority>${priority}</priority></url>`;
  }).join("\n")}
</urlset>`, { headers: { "Content-Type": "application/xml" } });
};
