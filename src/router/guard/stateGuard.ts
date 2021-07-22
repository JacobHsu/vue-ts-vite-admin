import type { Router } from 'vue-router';
import { useAppStore } from '/@/store/modules/app';

import { PageEnum } from '/@/enums/pageEnum';

export function createStateGuard(router: Router) {
  router.afterEach((to) => {
    const appStore = useAppStore();

    // Just enter the login page and clear the authentication information
    if (to.path === PageEnum.BASE_LOGIN) {
      appStore.resetAllState();
    }
  });
}
