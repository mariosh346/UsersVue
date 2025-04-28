<template>
  <template v-if="!uid">
    <BaseBtn
      flat
      round
      dense
      icon="account_circle"
      color="accent"
      size="lg"
      data-cy="auth-button"
      @click="$router.push('/auth')"
    />
  </template>
  <div v-else>
    <user-dropdown />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from 'src/stores/userStore';
import BaseBtn from '../atoms/BaseBtn.vue';
import UserDropdown from 'src/components/atoms/UserDropdown.vue';

const { uid } = storeToRefs(useUserStore());
</script>
