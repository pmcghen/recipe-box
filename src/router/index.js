import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About.vue'
import RecipeDetail from '@/views/RecipeDetail.vue'
import NotFound from '@/views/NotFound.vue'
import SignUp from '@/views/SignUp.vue'
import LogIn from '@/views/LogIn.vue'
import Search from '@/views/Search.vue'
import Profile from '@/views/Profile.vue'
import AddRecipe from '@/views/AddRecipe.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/add-recipe',
    name: 'AddRecipe',
    component: AddRecipe,
    meta: { requiresAuth: true },
    props: true
  },
  {
    path: '/recipe/:slug',
    name: 'recipe-detail',
    component: RecipeDetail,
    props: true
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'log-in',
    component: LogIn
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  // {
  //   path: '*',
  //   redirect: '/404'
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('authenticatedUser');

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/');
  } else {
    next();
  }

});

export default router
