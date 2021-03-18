import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Accueil'
  },
  {
    path: '/folder/Accueil',
    component: () => import ('../views/Accueil.vue')
  },
  {
    path: '/folder/Gun',
    component: () => import ('../views/Gun.vue')
  },{
    path: '/Gun/:id',
    component: () => import ('../views/GunDetail.vue')
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
