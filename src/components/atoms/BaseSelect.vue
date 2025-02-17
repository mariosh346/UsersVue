<template>
  <q-select
    :model-value="selectedOption"
    @update:model-value="$emit('update:modelValue', $event.value)"
    :options="options"
    :label="label"
    filled
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue: string;
  options: Array<{value: string, label: string}>;
  label: string;
}>();

const selectedOption = computed(() => props.options.find((option) => option.value === props.modelValue));

defineEmits<{
  (e: 'update:modelValue', value: any): void;
}>();
</script>
