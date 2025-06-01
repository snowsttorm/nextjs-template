/* eslint-env node */
module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es2022: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./tsconfig.json'],
      tsconfigRootDir: __dirname,
    },
    extends: [
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'plugin:tailwindcss/recommended',
      'prettier',
    ],
    plugins: [
      '@typescript-eslint',
      'tailwindcss',
      'import',
    ],
    rules: {
      'tailwindcss/classnames-order': 'off',
      'tailwindcss/no-custom-classnames': 'off',
      'tailwindcss/enforces-negative': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
  
      'react/no-unescaped-entities': 'off',
      '@next/next/no-html-link-for-pages': 'off',
  
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
  
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          '@typescript-eslint/no-explicit-any': 'warn',
          '@typescript-eslint/ban-ts-comment': [
            'error',
            { 'ts-ignore': 'allow-with-description' },
          ],
        },
      },
      {
        files: ['**/app/**/*.{ts,tsx}', '**/*.server.{ts,tsx}'],
        rules: {
          'react-hooks/rules-of-hooks': 'off',
          'react/prop-types': 'off',
        },
      },
    ],
    settings: {
      next: {
        rootDir: __dirname,
      },
      tailwindcss: {

        cssFiles: ['**/*.css'],
        callees: ['cn', 'cva', 'tw'],
        classRegex: '^(class|className)$',
      },
    },
  };