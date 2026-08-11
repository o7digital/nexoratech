import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([
    ".astro/**",
    ".next/**",
    "dist/**",
    "node_modules/**",
    "**/*.astro",
    "**/*.ts",
    "**/*.tsx",
  ]),
  js.configs.recommended,
  {
    rules: {
      "no-undef": "off",
    },
  },
]);
