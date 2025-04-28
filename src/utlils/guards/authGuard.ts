import type { NavigationGuard } from 'vue-router';
import { useUserStore } from 'src/stores/userStore';

export const requireNoAuth: NavigationGuard = (_to, _from, next) => {

  const userStore = useUserStore();

  if (userStore.uid) {

    next('/');

  } else {

    next();

  }

};

export const requireAuth: NavigationGuard = (_to, _from, next) => {

  const userStore = useUserStore();

  if (userStore.uid) {

    next();

  } else {

    next('auth');

  }

};
