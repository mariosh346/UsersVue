<template>
  <base-btn @click="signout">
    SignOut
  </base-btn>
</template>
<script setup lang="ts">
import { signOut } from 'firebase/auth';
import { useUserStore } from 'src/stores/userStore';
import { authFire } from 'src/utlils/firestore/db';
import BaseBtn from 'src/components/atoms/BaseBtn.vue';

const signout = () => {
  signOut(authFire).then(() => {
    useUserStore().setUser(null);
  }).catch((error) => {
    console.error('Failed signout', error);
  });
}
</script>
