import js from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import customRulesPlugin from './eslint-rules/index.js';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        settings: { react: { version: '18.3' } },
        plugins: {
            react,
            'react-hooks': reactHooks,
            prettier,
            'unused-imports': unusedImports,
            'simple-import-sort': simpleImportSort,
            'custom-rules': customRulesPlugin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            ...configPrettier.rules,
            'react/jsx-no-target-blank': 'off',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'prettier/prettier': [
                'error',
                {
                    semi: true,
                    singleQuote: true,
                    tabWidth: 4,
                    trailingComma: 'es5',
                    printWidth: 80,
                    arrowParens: 'avoid',
                    endOfLine: 'lf',
                },
            ],
            'react/prop-types': 'off',
            // Disable base rule as it conflicts with TypeScript version
            'no-unused-vars': 'off',
            // Disable TypeScript unused vars in favor of unused-imports plugin
            '@typescript-eslint/no-unused-vars': 'off',
            // Catch unused imports
            'unused-imports/no-unused-imports': 'error',
            // Catch unused variables (const, let, var)
            'unused-imports/no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            // Sort imports
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            // Custom rule: Remove multiple spaces in className
            'custom-rules/no-multiple-spaces-in-classname': 'error',
        },
    }
);
