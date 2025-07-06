import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [".next/**/*", "node_modules/**/*"],
    rules: {
      "react/no-unescaped-entities": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@next/next/no-img-element": "error",
      "@next/next/no-page-custom-font": "warn",
      "@next/next/google-font-display": "warn",
      // Disable other strict rules that might cause issues
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-wrapper-object-types": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@next/next/no-assign-module-variable": "off",
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
];

export default eslintConfig;
