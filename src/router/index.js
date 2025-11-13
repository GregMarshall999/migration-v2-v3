import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@views/HomeView.vue'
import { useAuthStore } from '@stores/auth.store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { noAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@views/AboutView.vue'),
      meta: { noAuth: true },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@views/ContactView.vue'),
      meta: { noAuth: true },
    }, 
    {
      path: '/login',
      name: 'login',
      component: () => import('@views/LoginView.vue'),
      meta: { noAuth: true, noToken: true },
    }, 
    {
      path: '/register',
      name: 'register',
      component: () => import('@views/RegisterView.vue'),
      meta: { noAuth: true, noToken: true },
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('@views/TodosView.vue')
    }
  ],
})

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore();
  const authenticated = authStore.isAuthenticated;

  if(!to.meta.noAuth && !authenticated) {
    next({ name: 'login' });
  }
  else if(!to.meta.noAuth && authenticated) {
    next();
  }
  else if(to.meta.noToken && authenticated) {
    next({ name: 'home' });
  }
  else {
    next();
  }
})

export default router
