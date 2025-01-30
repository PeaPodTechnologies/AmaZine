import globals from 'globals';

import { FlatCompat } from '@eslint/eslintrc';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
// import prettierConfig from './.prettierrc.json' assert { type: 'json' };

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: typescriptEslint.configs['recommended'],
});

console.log('Using eslint.config.mjs');

var eslintConfig = compat.config({
  extends: ['plugin:prettier/recommended', 'next', 'next/typescript'],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {'prettier/prettier': ['error'],},
});

eslintConfig.push({ files: [
  './*.{js,mjs,cjs,ts,jsx,tsx}', 
  './src/*.{js,mjs,cjs,ts,jsx,tsx}',
  './src/**/*.{js,mjs,cjs,ts,jsx,tsx}',
],});

eslintConfig.push({ignores: ['node_modules', '.next', 'out', 'dist', 'build', 'coverage', 'public', 'lib',],});

/** @type {import('eslint').Linter.Config[]} */
export default eslintConfig;