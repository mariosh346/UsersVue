<template>
  <router-view />
</template>

<script setup lang="ts">
import { useUserStore } from './stores/userStore';
import { authStateChanged } from './utlils/firestore/db';

authStateChanged((user) => {
  if (user) {
    useUserStore().setUser(user);
    console.log('User is signed in', user?.uid)
  } else {
    console.log('User is signed out')
    useUserStore().setUser(null);
  }
});
</script>
