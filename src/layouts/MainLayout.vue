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
      :show-if-above="linksList.length > 0"
      bordered
    >
      <q-list v-if="linksList.length > 0">
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
// import { useI18n } from 'vue-i18n';
// const { t } = useI18n();

import EssentialLink, { type EssentialLinkProps } from 'components/EssentialLink.vue';
import UserButtons from 'src/components/mollecules/UserButtons.vue';

const linksList: EssentialLinkProps[] = [
  // {
  //   title: t('docs'),
  //   caption: t('docs_caption'),
  //   icon: 'school',
  //   link: 'https://quasar.dev'
  // },
];

const leftDrawerOpen = ref(false);
function toggleLeftDrawer () {

  leftDrawerOpen.value = !leftDrawerOpen.value;

}
</script>
