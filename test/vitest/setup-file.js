import { createI18n } from 'vue-i18n';
import { config } from '@vue/test-utils';

// This file will be run before each test file

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: { en: {} }
});

config.global.plugins = [i18n];
