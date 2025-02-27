import type { User } from 'firebase/auth';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { computed, ref } from 'vue';

export const useUserStore = defineStore('user', () => {

  const user = ref<User | null>(null);
  const uid = computed(() => user.value?.uid);

  function setUser(newUser: User | null) {

    user.value = newUser;
  
  }
  return { user, setUser, uid };

});

if (import.meta.hot) {

  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));

}
