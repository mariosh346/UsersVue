<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>{{ $t('users_app') }}</q-toolbar-title>
        <UserButtons />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>
          {{ $t('essential_links') }}
        </q-item-label>
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';
import UserButtons from 'src/components/mollecules/UserButtons.vue';

const linksList: EssentialLinkProps[] = [
  {
    title: t('docs'),
    caption: t('docs_caption'),
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: t('github'),
    caption: t('github_caption'),
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: t('discord_chat_channel'),
    caption: t('discord_chat_caption'),
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: t('forum'),
    caption: t('forum_caption'),
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: t('twitter'),
    caption: t('twitter_caption'),
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: t('facebook'),
    caption: t('facebook_caption'),
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: t('quasar_awesome'),
    caption: t('quasar_awesome_caption'),
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

const leftDrawerOpen = ref(false);
function toggleLeftDrawer () {

  leftDrawerOpen.value = !leftDrawerOpen.value;

}
</script>
