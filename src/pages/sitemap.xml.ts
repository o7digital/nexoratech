import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site, request }) => {
  const base = site?.toString() ?? new URL(request.url).origin + "/";
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${base}</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>
</urlset>`, { headers: { "Content-Type": "application/xml" } });
};
