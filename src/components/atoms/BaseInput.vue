<template>
  <q-input
    :model-value="modelValue"
    :label="label"
    :rules="rules"
    :type="type"
    filled
    v-bind="$attrs"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>

<script setup lang="ts">
import type { QInputProps } from 'quasar';

defineProps<Omit<QInputProps, "onUpdate:modelValue">>();

defineEmits<{
  (e: 'update:modelValue', value: QInputProps["modelValue"]): void;
}>();
</script>
