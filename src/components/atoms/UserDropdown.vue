<template>
  <q-btn-dropdown
    rounded
    flat
    unelevated
  >
    <template #default>
      <q-item v-close-popup>
        <q-item-section>
          <logout-button />
        </q-item-section>
      </q-item>
    </template>
    <template #label>
      <q-avatar
        v-if="user"
        color="accent"
        alt="user photo"
      >
        <q-img
          v-if="user.photoURL"
          :src="user.photoURL"
        />
        <div
          v-else-if="userLetter"
          class="text-white"
        >
          {{ userLetter }}
        </div>
      </q-avatar>
    </template>
  </q-btn-dropdown>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from 'src/stores/userStore';
import LogoutButton from 'src/components/atoms/login/LogoutButton.vue';
import { computed } from 'vue';

const { user } = storeToRefs(useUserStore());
const userLetter = computed(() => (
  user.value?.displayName || user.value?.email
)?.[0]?.toUpperCase());
</script>
