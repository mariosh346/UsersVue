<template>
  <main>
    <q-list v-if="userData">
      <user-collection
        v-for="collection in userData.collections"
        :key="collection"
        :collection="collection"
      />
    </q-list>
  </main>
</template>
<script setup lang="ts">
import { useUserStore } from 'src/stores/userStore';
import { getCurrentUserData } from 'src/utlils/firestore/composables';
import UserCollection from 'src/components/organisms/UserCollection.vue';

const userStore = useUserStore();
const userData = getCurrentUserData(userStore?.uid);
</script>
