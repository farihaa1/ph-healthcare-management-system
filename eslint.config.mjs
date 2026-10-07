import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Ignore compiled files
  {
    ignores: ["dist/**", "node_modules/**"],
  },

  // JavaScript files
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node,
    },
  },

  // TypeScript files
  ...tseslint.configs.recommended,
]);
