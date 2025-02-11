<template>
  <q-td>
    <q-icon
      :name="active ? 'check' : 'close'"
      :color="active ? 'positive' : 'negative'"
    />
  </q-td>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  props: Object,
  active: Boolean
});
</script>
