<template>
  <q-page class="row items-center justify-evenly">
    <div v-if="uid">
      <user-collections />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import UserCollections from 'src/components/organisms/UserCollections.vue';
import { useUserStore } from 'src/stores/userStore';
import { storeToRefs } from 'pinia';

const { uid } = storeToRefs(useUserStore());

</script>
