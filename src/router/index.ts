import { createWebHistory, createRouter } from 'vue-router'
import Homepage from '../views/Buyer/Homepage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    // redirect: '/home',
    component: Homepage,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/Login.vue")
  },
  {
    path: '/register',
    name: 'register',
    component: () => import("../views/Register.vue")
  },
  {
    path: '/goodsDetail', 
    name: 'goodsDetail',
    component: () => import("../views/Details/GoodsDetail.vue")
  },
  {
    path: '/shopDetail',
    name: 'shopDetail',
    component: ()=>import("../views/Details/ShopDetail.vue")
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import("../views/Buyer/SearchResult.vue")
  },
  {
    path:'/cart',
    name:'cart',
    component:()=> import("../views/Buyer/Cart.vue")
  },
  {
    path:'/address',
    name:'address',
    component:()=>import("../views/Buyer/Address.vue")
  }
];

const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})


export default router;