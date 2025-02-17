<template>
  <q-input
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    :label="label"
    :rules="rules"
    filled
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { QInputProps } from 'quasar';

defineProps<QInputProps>();

defineEmits<{
  (e: 'update:modelValue', value: QInputProps["modelValue"]): void;
}>();
</script>
