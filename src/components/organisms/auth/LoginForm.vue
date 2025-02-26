<template>
  <q-form @submit="handleSubmit">
    <base-input
      v-model="email"
      type="email"
      label="Email"
      autocomplete="email"
      :rules="[val => !!val || 'Email is required']"
    />
    <base-input
      v-model="password"
      type="password"
      label="Password"
      autocomplete="current-password"
      class="q-mt-md"
      :rules="[val => !!val || 'Password is required']"
    />
    <base-btn
      class="q-mt-lg full-width"
      label="Login"
      type="submit"
      :loading="loading"
    />
    <error-banner :message="error" />
  </q-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseBtn from 'src/components/atoms/BaseBtn.vue';
import BaseInput from 'src/components/atoms/BaseInput.vue';
import ErrorBanner from 'src/components/atoms/ErrorBanner.vue';
import { useAuthFunctions } from 'src/composables/useAuthFunctions';

const { signinWithEmail } = useAuthFunctions();
const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

const handleSubmit = async () => {
  loading.value = true;
  try {
    await signinWithEmail(email.value, password.value);
  } catch (e) {
    error.value = e instanceof Error ? e.code : 'An unknown error occurred';
  } finally {
    loading.value = false;
  }
};
</script>
