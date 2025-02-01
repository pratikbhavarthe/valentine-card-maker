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

  // Add custom rules to override defaults
  {
    rules: {
      // Disable the empty object type rule for interfaces
      '@typescript-eslint/no-empty-object-type': 'off',
      
      // Allow unused variables with warning level (useful for unused variables in props, etc.)
      '@typescript-eslint/no-unused-vars': [
        'warn', 
        { 
          argsIgnorePattern: '^_',  // Allow variables starting with an underscore to avoid warnings
        }
      ],

      // Optional: If you want to enforce the rule but ignore certain variables:
      // '@typescript-eslint/no-unused-vars': 'warn', 
      // 'react/jsx-uses-react': 'off', // For React 17 and later, no longer needed for JSX
      // Other custom rules can go here...
    },
  },
];

export default eslintConfig;
