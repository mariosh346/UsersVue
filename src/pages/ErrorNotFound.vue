<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        {{ $t('error_404') }}
      </div>

      <div class="text-h2" style="opacity:.4">
        {{ $t('oops_nothing_here') }}
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        :label="$t('go_home')"
        no-caps
      />
    </div>
  </div>
</template>

<script setup lang="ts">
//
</script>
