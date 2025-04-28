<script setup lang="ts">
import { ref } from 'vue';
import { useAuthFunctions } from 'src/composables/useAuthFunctions';
import BaseBtn from '../BaseBtn.vue';

const { signinPopup } = useAuthFunctions();
const error = ref<unknown>(null);

async function signinRedirect() {

  try {

    await signinPopup();

  } catch (e: unknown) {

    error.value = e;
    console.error('Signin error:', e);

  }

}
</script>

<template>
  <BaseBtn
    icon="login"
    @click="signinRedirect()"
  >
    {{ $t('SignIn with Google') }}
  </BaseBtn>
</template>
