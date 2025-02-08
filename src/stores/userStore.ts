import type { User } from 'firebase/auth';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);

  function setUser(newUser: typeof user['value']) {
    user.value = newUser;
  }

  return { user, setUser };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
