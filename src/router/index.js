import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ejemplo1 from '../views/ejemplo1.vue'
import EjemploDNI from '../views/EjemploDNI.vue'
import VistaLogin from '../views/VistaLogin.vue'
import EjercicioTabla from '../views/EjercicioTabla.vue'
import VistaProvincias from '../views/VistaProvincias.vue'
import VistaAvatares from '../views/VistaAvatares.vue'
import Carrito from '../views/Carrito.vue'
import VistaPrueba from '../views/VistaPrueba.vue'
import VistaMLenguaje from '../views/VistaMLenguaje.vue'
import Storage from '../views/Storage.vue'
import TinyMCE from '../views/TinyMCE.vue'
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
  {
    path: '/TinyMCE',
    name: 'eTinyMCE',
    component: TinyMCE
  },
  {
    path: '/VistaMLenguaje',
    name: 'VistaMLenguaje',
    component: VistaMLenguaje
  },
  {
    path: '/VistaAvatares',
    name: 'VistaAvatares',
    component: VistaAvatares
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
  {path: '/VistaProvincias',
  name: 'VistaProvincias',
  component: VistaProvincias
  },
  {
    path: '/Carrito',
    name: 'Carrito',
    component: Carrito
  },
  {
    path: '/VistaPrueba',
    name: 'VistaPrueba',
    component: VistaPrueba
  },
  {
    path: '/Storage',
    name: 'Storage',
    component: Storage
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
