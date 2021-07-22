import type { Router } from 'vue-router';
import { createStateGuard } from './stateGuard';

// Don't change the order of creation
export function setupRouterGuard(router: Router) {
  createStateGuard(router);
}
