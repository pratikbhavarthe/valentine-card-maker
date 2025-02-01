import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Define __filename and __dirname to handle ES Module paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set up compatibility with ESLint configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend the base ESLint configurations from Next.js
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Disable all rules
  {
    rules: {
      // Disable all rules
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react/jsx-uses-react': 'off', // Optional: Disable React-specific rules
      // Other rules you want to disable globally can be added here...
    },
  },

  // Optionally disable the core Next.js rules entirely
  // This is useful if you want to entirely turn off Next.js-related linting:
  // compat.extends("next"), // Uncomment if you don't want any Next.js linting
];

export default eslintConfig;
