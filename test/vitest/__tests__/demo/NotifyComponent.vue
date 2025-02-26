<template>
  <q-btn @click="onClick">{{ $t('click_me') }}</q-btn>
</template>

<script lang="ts" setup>
import { Notify } from 'quasar';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

function onClick() {
  Notify.create(t('hello_there'));
}
functi

</script>
