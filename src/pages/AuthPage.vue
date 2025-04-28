<template>
  <q-page
    padding
    class="flex flex-center"
  >
    <q-card class="auth-card">
      <q-tabs
        v-if="!showForgotPassword"
        v-model="tab"
        class="text-primary"
      >
        <q-tab
          name="login"
          :label="$t('login')"
        />
        <q-tab
          name="signup"
          :label="$t('sign_up')"
        />
      </q-tabs>

      <q-card-section v-if="showForgotPassword">
        <div class="text-h6">
          {{ $t('forgot_password') }}
        </div>
      </q-card-section>

      <q-tab-panels
        v-if="!showForgotPassword"
        v-model="tab"
        animated
      >
        <q-tab-panel name="login">
          <login-form />
          <div class="text-center q-mt-md">
            <BaseBtn
              flat
              color="primary"
              :label="$t('forgot_password_question')"
              @click="showForgotPassword = true"
            />
          </div>
          <LoginButton class="q-mt-md full-width" />
        </q-tab-panel>
        <q-tab-panel name="signup">
          <signup-form />
        </q-tab-panel>
      </q-tab-panels>

      <q-card-section v-else>
        <forgot-password-form @back="showForgotPassword = false" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from 'src/stores/userStore';
import LoginForm from 'src/components/organisms/auth/LoginForm.vue';
import SignupForm from 'src/components/organisms/auth/SignupForm.vue';
import ForgotPasswordForm from 'src/components/organisms/auth/ForgotPasswordForm.vue';
import BaseBtn from 'src/components/atoms/BaseBtn.vue';
import LoginButton from 'src/components/atoms/login/LoginButton.vue';

const tab = ref('login');
const showForgotPassword = ref(false);

const router = useRouter();
const userStore = useUserStore();

watchEffect(() => {

  if (userStore.uid) {

    void router.push('/');
  }

});
</script>

<style scoped>
.auth-card {
  width: 100%;
  max-width: 500px;
}
</style>
