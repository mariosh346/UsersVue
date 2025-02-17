<template>
  <login-button v-if="!uid" />
  <div v-else>
    <logout-button />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import LoginButton from 'src/components/atoms/login/LoginButton.vue';
import LogoutButton from 'src/components/atoms/login/LogoutButton.vue';
import { useUserStore } from 'src/stores/userStore';

const { uid } = storeToRefs(useUserStore());
</script>
