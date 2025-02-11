
<template>
  <q-item v-if="item">
    <q-item-section>
      <q-item-label>
        {{ item.title }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>
<script setup lang="ts">
import { getItem } from 'src/utlils/firestore/composables';
import { defineProps } from 'vue'

const props = defineProps({
  collection: {
    type: String,
    required: true
  }
})

const item = getItem(props.collection);
</script>
