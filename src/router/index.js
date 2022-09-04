import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Help from '../views/Help.vue'
import Form from '../views/Form.vue'
import Signup from '../views/Signup.vue'
import VotingList from '../views/VotingList.vue'
import Check from '../views/Check.vue'
import Poll from '../views/Poll.vue'
import store from '@/store'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,

  },
  {
    path: '/help',
    name: 'Help',
    component: () => import(/* webpackChunkName: "help" */ '../views/Help.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "form" */ '../views/Form.vue'),
    meta: {
      needsUser: true
    }

  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "form" */ '../views/Signup.vue')


  },
  {
    path: '/votinglist',
    name: 'VotingList',
    component: () => import(/* webpackChunkName: "votinglist" */ '../views/VotingList.vue')


  },
  {
    path: '/check',
    name: 'Check',
    component: () => import(/* webpackChunkName: "check" */ '../views/Check.vue')

  },

  {
    path: '/poll',
    name: 'Poll',
    component: () => import(/* webpackChunkName: "poll" */ '../views/Poll.vue')

  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {

  console.log('Stara ruta', from.name, '->', to.name, 'korisnik', store.currentUser)

  const noUser = store.currentUser === null;

  if (noUser && to.meta.needsUser) {
    console.error("NE MOŽE");
  }
  else {
    next();
  }

})


export default router;



