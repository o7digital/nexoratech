import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://nexacore.mx",
  integrations: [react()],
  output: "static",
});
