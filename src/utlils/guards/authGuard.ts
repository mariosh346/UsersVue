import type { NavigationGuard } from 'vue-router';
import { useUserStore } from 'src/stores/userStore';

// eslint-disable-next-line max-params
export const requireNoAuth: NavigationGuard = (_to, _from, next) => {

  const userStore = useUserStore();

  if (userStore.uid) {

    next('/');

  } else {

    next();

  }

};
