import { createApp } from 'vue';
import App from './App.vue';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';
import { setupStore } from '/@/store';
async function bootstrap() {
  const app = createApp(App);

  // Configure store
  setupStore(app);

  // Configure routing
  setupRouter(app);

  // router-guard
  setupRouterGuard(router);

  app.mount('#app', true);
}

void bootstrap();
