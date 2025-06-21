import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        React: "readonly",
        ...globals.browser,
        ...globals.es2021
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      quotes: ["error", "double"],
      semi: ["error", "always"],
      camelcase: "error",
      indent: ["error", 4],
      "no-duplicate-imports": "error",
    },
  },
];