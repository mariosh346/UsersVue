<template>
  <router-view />
</template>

<script setup lang="ts">
import { useUserStore } from './stores/userStore';
import { useAuthFunctions } from 'src/composables/useAuthFunctions';

const { authStateChanged } = useAuthFunctions();
const userStore = useUserStore();

authStateChanged((user) => {

  if (user) {

    userStore.setUser(user);
    console.log('User is signed in', user.uid);
  
  } else {

    console.log('User is signed out');
    userStore.setUser(null);
  
  }

});
</script>
