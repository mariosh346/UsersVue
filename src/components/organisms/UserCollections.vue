<template>
  <main>
    <q-list v-if="userData">
      {{ userData }}
      <!-- <user-collection
        v-for="collection in userData.collections"
        :key="collection"
        :collection="collection"
      /> -->
    </q-list>
    <NewUserCollection />
  </main>
</template>
<script setup lang="ts">
import { useUserStore } from 'src/stores/userStore';
import { getUserItems, } from 'src/utlils/firestore/composables';
import NewUserCollection from './NewUserCollection.vue';

const userStore = useUserStore();
const userData = getUserItems(userStore.uid);
</script>
