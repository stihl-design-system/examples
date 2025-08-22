// @ts-nocheck
// Flat ESLint config without Storybook or TanStack presets

import globals from 'globals';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  // Base ESLint recommended rules
  js.configs.recommended,

  // TypeScript + React rules
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        React: true,
        JSX: true,
        NodeListOf: true,
        NodeJS: true,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      '@typescript-eslint': typescriptEslint,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React + TS recommended
      ...react.configs.recommended.rules,
      ...typescriptEslint.configs.recommended.rules,

      // Project customizations
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },

  // Test overrides
  {
    files: ['**/*.test.{ts,tsx}', '**/*.e2e.ts', '**/*.vrt.ts'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Ignores
  {
    ignores: [
      'node_modules',
      'local_modules',
      'dist',
      '__snapshots__',
      'vite.config.ts.timestamp-*.*',
      'e2e-results',
    ],
  },
];
