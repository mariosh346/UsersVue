<template>
  <main>
    <q-list v-if="userData">
      <q-item
        v-for="collection in userData.collections"
        :key="collection.id"
      >
        <q-item-section>
          <q-item-label>
            {{ collection.title }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from 'src/stores/userStore';
import { getCurrentUserData } from 'src/utlils/firestore/composables';

const userStore = useUserStore();
const userData = getCurrentUserData(userStore?.uid);
</script>
