import type { User } from 'firebase/auth';
import { defineStore, acceptHMRUpdate } from 'pinia';
import { getUserData } from 'src/utlils/firestore/composables';
import { computed, ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const uid = ref<User["uid"] | null>(null);

  function setUserId(newUid: typeof uid['value']) {
    uid.value = newUid;
  }
  const user = computed(() => uid.value && getUserData(uid.value));
  return { user, setUserId, uid };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
