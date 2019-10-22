import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Grupos from './views/Grupos.vue'
import AddGrupo from './views/AddGrupo.vue'
import EditGrupo from './views/EditGrupo.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/grupos',
      name: 'grupos',
      component: Grupos
    },
    {
      path: '/addGrupos',
      name: 'addgrupos',
      component: AddGrupo
    },
    {
      path: '/editGrupo',
      name: 'editgrupo',
      component: EditGrupo
    },
  ]
})
