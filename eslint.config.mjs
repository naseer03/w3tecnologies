import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // The site's CSS was written against plain <img> markup; next/image would change layout.
      "@next/next/no-img-element": "off",
      // Pages link with plain <a> so each route only loads its own stylesheet (see components/layout/SiteHeader.tsx).
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts", "public/**"]),
]);
