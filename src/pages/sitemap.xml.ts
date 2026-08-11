import type { APIRoute } from "astro";
import { serviceRoutes } from "../config/site";

export const GET: APIRoute = ({ site, request }) => {
  const base = site?.toString() ?? new URL(request.url).origin + "/";
  const urls = ["", "es/", "en/", "fr/", "de/", "pt/", "it/", ...serviceRoutes.map((path) => path.slice(1)), "aviso-privacidad/", "en/privacy/", "fr/confidentialite/", "de/datenschutz/", "pt/privacidade/", "it/privacy/"];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${new URL(path, base).toString()}</loc><changefreq>monthly</changefreq><priority>${path === "" ? "1.0" : "0.9"}</priority></url>`).join("\n")}
</urlset>`, { headers: { "Content-Type": "application/xml" } });
};
