<template>
  <router-view />
</template>

<script setup lang="ts">
import { onAuthStateChanged } from 'firebase/auth';
import { useUserStore } from './stores/userStore';
import { authFire } from './utlils/firestore/db';

onAuthStateChanged(authFire, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    useUserStore().setUserId(user?.uid);
    console.log('User is signed in', user?.uid)
    // ...
  } else {
    console.log('User is signed out')
    // User is signed out
    // ...
  }
});
</script>
