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
      autocomplete="new-password"
      class="q-mt-md"
      :rules="[val => !!val || 'Password is required']"
    />
    <base-input
      v-model="confirmPassword"
      type="password"
      label="Confirm Password"
      autocomplete="new-password"
      class="q-mt-md"
      :rules="[
        val => !!val || 'Password confirmation is required',
        val => val === password || 'Passwords do not match'
      ]"
    />
    <base-btn
      class="q-mt-lg full-width"
      color="primary"
      label="Sign up"
      type="submit"
      :loading="loading"
    />
    <error-banner :message="error" />
  </q-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from 'src/stores/userStore';
import BaseBtn from 'src/components/atoms/BaseBtn.vue';
import BaseInput from 'src/components/atoms/BaseInput.vue';
import ErrorBanner from 'src/components/atoms/ErrorBanner.vue';
import { useAuthFunctions } from 'src/composables/useAuthFunctions';

const userStore = useUserStore();
const { signupWithEmail } = useAuthFunctions();

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const loading = ref(false);
const error = ref('');

const handleSubmit = async () => {
  error.value = '';
  loading.value = true;
  try {
    await signupWithEmail(email.value, password.value);
  } catch (e) {
    error.value = e instanceof Error ? e.code : 'An unknown error occurred';
    console.error(e);
  } finally {
    loading.value = false;
  }
};
</script>
