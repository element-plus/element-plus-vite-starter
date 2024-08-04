import { createMemoryHistory, createRouter } from 'vue-router'


const routes = [
  {
    path: '/',
    component:()=>import("../views/Login.vue")
  },
  {
    path: '/login',
    component: ()=>import("../views/Login.vue")
  },
  {
    path: '/register',
    component: ()=>import("../views/Register.vue")
  }
  
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router;