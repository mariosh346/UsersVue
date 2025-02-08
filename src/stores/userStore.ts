import type { User } from 'firebase/auth';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { computed, ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);

  function setUser(newUser: typeof user['value']) {
    user.value = newUser;
  }

  const uid = computed(() => user.value?.uid);

  return { user, setUser, uid };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
