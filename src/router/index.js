import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Usuarios from '../views/Usuarios.vue';
import Usuario from '../views/Usuario.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios
  },
  {
    path: '/usuarios/:id',
    name: 'Usuario',
    component: Usuario
  }
  
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
