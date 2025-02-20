<template>
  <q-page padding class="flex flex-center">
    <q-card class="auth-card">
      <q-tabs v-model="tab" class="text-primary">
        <q-tab name="login" label="Login" />
        <q-tab name="signup" label="Sign up" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <login-form />
        </q-tab-panel>
        <q-tab-panel name="signup">
          <signup-form />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/userStore';
import LoginForm from 'src/components/organisms/auth/LoginForm.vue';
import SignupForm from 'src/components/organisms/auth/SignupForm.vue';
import { watch } from 'fs';

const tab = ref('login');

const router = useRouter();
const userStore = useUserStore();

watchEffect(() => {
  if (userStore.uid) {
    router.push('/');
  }
});
</script>

<style scoped>
.auth-card {
  width: 100%;
  max-width: 400px;
}
</style>
