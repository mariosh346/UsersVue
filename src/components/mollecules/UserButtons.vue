<template>
  <template v-if="!uid">
    <login-button />
    <BaseBtn
      data-cy="auth-button"
      @click="$router.push('/auth')"
    >
      Login with email
    </BaseBtn>
  </template>
  <div v-else>
    <user-dropdown />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import LoginButton from 'src/components/atoms/login/LoginButton.vue';
import { useUserStore } from 'src/stores/userStore';
import BaseBtn from '../atoms/BaseBtn.vue';
import UserDropdown from 'src/components/atoms/UserDropdown.vue';

const { uid } = storeToRefs(useUserStore());
</script>
