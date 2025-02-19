<template>
  <template v-if="!uid">
    <login-button />
    <BaseBtn @click="$router.push('/auth')">
      Login with email
    </BaseBtn>
  </template>
  <div v-else>
    <logout-button />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import LoginButton from 'src/components/atoms/login/LoginButton.vue';
import LogoutButton from 'src/components/atoms/login/LogoutButton.vue';
import { useUserStore } from 'src/stores/userStore';
import BaseBtn from '../atoms/BaseBtn.vue';

const { uid } = storeToRefs(useUserStore());
</script>
