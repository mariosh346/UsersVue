<template>
  <base-btn
    flat
    unelevated
    color="secondary"
    @click="handleSignout"
  >
    {{ $t('Logout') }}
  </base-btn>
</template>

<script setup lang="ts">
import { useUserStore } from 'src/stores/userStore';
import { useAuthFunctions } from 'src/composables/useAuthFunctions';
import BaseBtn from 'src/components/atoms/BaseBtn.vue';

const { signout } = useAuthFunctions();

const handleSignout = () => {

  signout()
    .then(() => {

      useUserStore().setUser(null);

    })
    .catch((error) => {

      console.error('Failed signout', error);

    });

};
</script>
