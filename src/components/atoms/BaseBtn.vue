<template>
  <q-btn
    :icon="icon"
    :loading="loading"
    :label="label"
    :type="type"
    :flat="flat"
    :round="round"
    :unelevated="unelevated"
    :color="color || 'primary'"
    :size="size"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot />
  </q-btn>
</template>

<script setup lang="ts">
import type { QBtnProps } from 'quasar';

defineProps<QBtnProps>();

defineEmits<{
  (e: 'click', event: Event): void;
}>();
</script>
