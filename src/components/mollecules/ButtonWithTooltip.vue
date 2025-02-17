<template>
  <base-btn
    color="primary"
    data-cy="button"
  >
    {{ buttonText }}

    <q-tooltip
      v-model="showTooltip"
      data-cy="tooltip"
      class="bg-red"
      :offset="[10, 10]"
    >
      {{ tooltipText }}
    </q-tooltip>
  </base-btn>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import BaseBtn from './atoms/BaseBtn.vue';
const showTooltip = ref(true);
defineProps<{
  buttonText: string;
  tooltipText: string;
}>();
</script>
