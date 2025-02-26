<template>
  <base-btn
    flat
    unelevated
    color="secondary"
    @click="handleSignout"
  >
    {{ $t('Αποσυνδεση') }}
  </base-btn>
</template>
<script setup lang="ts">
import { useUserStore } from 'src/stores/userStore';
import { signout } from 'src/utlils/firestore/db';
import BaseBtn from 'src/components/atoms/BaseBtn.vue';

const handleSignout = () => {
  signout().then(() => {
    useUserStore().setUser(null);
  }).catch((error) => {
    console.error('Failed signout', error);
  });
}
</script>
