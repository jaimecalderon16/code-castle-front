import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import { AuthenticationStore } from '@/stores/AuthentiacationStore'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    meta: { requiresAuth: true },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/user',
    name: 'user',
    meta: { requiresAuth: true },
    component: () => import('../views/user.vue')
  },
  {
    path: '/app',
    name: 'app',
    meta: { requiresAuth: true },
    component: () => import('../views/App.vue')
  },
  {
    path: '/Videogames',
    name: 'VideoGames',
    meta: { requiresAuth: true },
    component: () => import('../views/VideoGames.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const authenticationStore = AuthenticationStore();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Verifica si el usuario está autenticado
    if (!authenticationStore.isAuthenticated) {
      // Si no está autenticado, redirige a la página de inicio de sesión
      next({ name: 'login' })
    } else {
      // Si está autenticado, permite el acceso
      next()
    }
  } else {
    // Si la ruta no requiere autenticación, permite el acceso
    next()
  }
})

export default router
