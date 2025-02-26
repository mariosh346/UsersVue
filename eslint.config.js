import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import pluginQuasar from '@quasar/app-vite/eslint'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs(
  {
    overrides: [
      {
        files: ['**/*.ts', '**/*.vue'],
        rules: {
          '@typescript-eslint/consistent-type-imports': [
            'error',
            { prefer: 'type-imports' }
          ],
        }
      }
    ],
    extends: [
      js.configs.recommended,
      ...pluginQuasar.configs.recommended(),
      ...pluginVue.configs[ 'flat/recommended' ],
      ...vueTsConfigs.recommendedTypeChecked,
    ],
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
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
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
)
