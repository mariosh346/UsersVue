<template>
  <q-banner
    v-if="message"
    inline-actions
    class="text-white bg-red"
  >
    {{ message }}
  </q-banner>
</template>

<script setup lang="ts">
defineProps<{
  message?: string;
}>();
</script>
