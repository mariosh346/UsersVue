<template>
  <q-btn
    :icon="icon"
    :loading="loading"
    :label="label"
    :type="type"
    :color="color"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  />
</template>

<script setup lang="ts">
import type { QBtnProps } from 'quasar';

defineProps<QBtnProps>();

defineEmits<{
  (e: 'click', event: Event): void;
}>();
</script>
