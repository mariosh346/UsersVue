<template>
  <q-form @submit="onSubmit" class="q-gutter-md">
    <base-input v-model="email"
    :label="$t('email')" type="email" :rules="[val => !!val || $t('email_required')]" />

    <div class="row justify-between q-mt-md">
      <base-btn :label="$t('reset_password')" type="submit" color="primary" class="q-mt-lg full-width" />
      <base-btn :label="$t('back_to_login')"
      color="primary" flat @click="$emit('back')" class="q-mt-lg full-width" />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Notify, useQuasar } from 'quasar';
import { useAuthFunctions } from 'src/composables/useAuthFunctions';
import { useI18n } from 'vue-i18n';
import BaseBtn from 'src/components/atoms/BaseBtn.vue';
import BaseInput from 'src/components/atoms/BaseInput.vue';

const { t } = useI18n();
const { forgotPassword } = useAuthFunctions();

const email = ref('');

defineEmits(['back']);

const onSubmit = async () => {
  try {
    await forgotPassword(email.value);
    Notify.create({
      type: 'positive',
      message: t('reset_email_sent')
    });
    email.value = '';
  } catch (error) {
    Notify.create({
      type: 'negative',
      message: t('reset_email_failed')
    });
  }
};
</script>
