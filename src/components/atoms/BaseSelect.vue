<template>
  <q-select
    :model-value="selectedOption"
    :options="options"
    :label="label"
    filled
    v-bind="$attrs"
    @update:model-value="$emit('update:modelValue', $event.value)"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { SelectOption } from 'src/types/forms';
import type { QSelectProps } from 'quasar';

const props = defineProps<QSelectProps & {
  modelValue: string;
  options: Array<SelectOption>;
}>();

const selectedOption = computed(() => props.options && props.options.find((option) => option.value === props.modelValue));

defineEmits<{
  (e: 'update:modelValue', value: typeof props["modelValue"]): void;
}>();
</script>
