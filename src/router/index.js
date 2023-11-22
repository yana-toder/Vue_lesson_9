import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsList from '../views/ProductsList.vue'
import ProductsCategory from '../views/ProductsCategory.vue'
import PaymentRules from '../views/PaymentRules.vue'
import ContactsPage from '../views/ContactsPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsList,
  },
  {
    path: '/category:categoryId',
    name: 'category',
    component: ProductsCategory,
  },
  {
    path: '/payment',
    name: 'payment',
    component: PaymentRules,
  },

  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsPage,
  },
  //  {
  //    path: '/about',
  //    name: 'about',
  //    // route level code-splitting
  //    // this generates a separate chunk (about.[hash].js) for this route
  //    // which is lazy-loaded when the route is visited.
  //    component: () =>
  //      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  //  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
