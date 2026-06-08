import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // one-off maintenance node scripts, not part of the app bundle
    "scripts/**",
  ]),
  {
    rules: {
      // App Router loads fonts via <link> in the root layout <head> on purpose;
      // the pages/_document rule does not apply here.
      "@next/next/no-page-custom-font": "off",
    },
  },
]);

export default eslintConfig;
