<template>
  <main>
    <q-list v-if="userData">
      <user-collection
        v-for="collection in userData.collections"
        :key="collection"
        :collection="collection"
      />
    </q-list>
    <NewUserCollection />
  </main>
</template>
<script setup lang="ts">
import { useUserStore } from 'src/stores/userStore';
import { getUserData } from 'src/utlils/firestore/composables';
import UserCollection from 'src/components/organisms/UserCollection.vue';
import NewUserCollection from './NewUserCollection.vue';

const userStore = useUserStore();
const userData = getUserData(userStore?.uid);
</script>
