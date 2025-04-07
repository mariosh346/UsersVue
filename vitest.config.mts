import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'happy-dom',
    setupFiles: 'test/vitest/setup-file.js',
    include: [
      // Matches vitest tests in any subfolder of 'src' or into 'test/vitest/__tests__'
      // Matches all files with extension 'js', 'jsx', 'ts' and 'tsx'
      'src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      'test/vitest/__tests__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
  },
  resolve: {
    alias: [{
      find: "src",
      replacement: resolve(__dirname, './src/')
    }]
  },
  plugins: [
    // @ts-expect-error there is an issue to vite compat with vitest
    vue({
      template: { transformAssetUrls },
    }),
    // @ts-expect-error there is an issue to vite compat with vitest
    quasar({
      sassVariables: 'src/css/quasar.variables.scss',
    }),
    tsconfigPaths(),
  ],
});
