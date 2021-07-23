import { createApp } from 'vue';
import App from './App.vue';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';
import { setupStore } from '/@/store';
import { setupI18n } from '/@/locales/setupI18n';

async function bootstrap() {
  const app = createApp(App);

  // Configure store
  setupStore(app);

  // Configure routing
  setupRouter(app);

  // Multilingual configuration
  await setupI18n(app);

  // router-guard
  setupRouterGuard(router);

  // Mount when the route is ready
  // https://next.router.vuejs.org/api/#isready
  await router.isReady();

  app.mount('#app', true);
}

void bootstrap();
