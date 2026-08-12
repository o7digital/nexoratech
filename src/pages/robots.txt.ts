import type { APIRoute } from "astro";
import { SITE_IS_FINAL, SITE_URL } from "../config/site";

export const GET: APIRoute = () => new Response(
  SITE_IS_FINAL
    ? `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
    : "User-agent: *\nDisallow: /\n",
  { headers: { "Content-Type": "text/plain; charset=utf-8" } },
);
