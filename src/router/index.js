import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ejemplo1 from '../views/ejemplo1.vue'
import EjemploDNI from '../views/EjemploDNI.vue'
import VistaLogin from '../views/VistaLogin.vue'
import EjercicioTabla from '../views/EjercicioTabla.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ejemplo1',
    name: 'ejemplo1',
    component: ejemplo1
  },
    
  { path: '/EjemploDNI',
    name: 'EjemploDNI',
    component:EjemploDNI 
  },
  {
    path: '/VistaLogin',
    name: 'VistaLogin',
    component: VistaLogin
  },
  {
    path: '/EjercicioTabla',
    name: 'EjercicioTabla',
    component: EjercicioTabla
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
