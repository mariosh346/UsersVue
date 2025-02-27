import js from '@eslint/js';
import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import pluginQuasar from '@quasar/app-vite/eslint';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';

export default defineConfigWithVueTs([

  ...pluginQuasar.configs.recommended(),
  js.configs.recommended,
  ...pluginVue.configs[ 'flat/recommended' ],

  // {
  //   files: ['**/*.ts', '**/*.vue'],
  //   rules: {
  //     '@typescript-eslint/consistent-type-imports': [
  //       'error',
  //       { prefer: 'type-imports' }
  //     ],
  //   }
  // },
  //vueTsConfigs.recommendedTypeChecked,

  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.browser,
        ...globals.node, // SSR, Electron, config files
        process: 'readonly', // process.env.*
        ga: 'readonly', // Google Analytics
        cordova: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly', // BEX related
        browser: 'readonly' // BEX related
      }
    },

    // add your custom rules here
    rules: {
      'prefer-promise-reject-errors': 'off',

      // allow debugger during development only
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'arrow-parens': 0,
      'space-before-function-paren': 0,
      'keyword-spacing': [
        'warn'
      ],
      'max-params': ['warn', 2],
      // 'eslint-comments/no-use': ['warn', { allow: [] }],
      curly: 'error',
      'max-len': ['warn', { code: 120 }],
      'padded-blocks': [
        'warn'
      ],
      'space-in-parens': [
        'warn'
      ],
      'generator-star-spacing': 0,
      'no-shadow-restricted-names': 0,
      semi: [
        'error',
        'always'
      ],
      'no-loop-func': [
        'error'
      ],
      'one-var': 0,
      indent: [
        'error',
        2,
        { SwitchCase: 1 }
      ],

      'standard/no-callback-literal': 0,
      'no-unused-vars': 0,

      // 'vue/max-attributes-per-line': [
      //   'error',
      //   {
      //     singleline: {
      //       max: 1,
      //       allowFirstLine: true
      //     },
      //     multiline: {
      //       max: 1,
      //       allowFirstLine: false
      //     }
      //   }
      // ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForInStatement',
          message: 'for...in loops are not allowed. Use for...of with Object Entries instead'
        },
        {
          selector: 'TSEnumDeclaration > TSEnumMember > Literal',
          message: 'String Enums are not allowed. Use an Object or a string union type instead.'
        }
      ],
      // '@typescript-eslint/ban-ts-comment': 'warn',
      // '@typescript-eslint/no-non-null-assertion': 'error',
      // '@typescript-eslint/no-explicit-any': 'warn',
      // '@typescript-eslint/consistent-type-assertions': [
      //   'error', { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' }
      // ],
      'no-unneeded-ternary': 'error',
      // 'import/no-unused-modules': 'error',
      camelcase: 0,
    }
  },
  {
    files: [ 'src-pwa/custom-service-worker.ts' ],
    languageOptions: {
      globals: {
        ...globals.serviceworker
      }
    }
  }
]);
