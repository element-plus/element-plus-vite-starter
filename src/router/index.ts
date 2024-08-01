import { createMemoryHistory, createRouter } from 'vue-router'

import Logos from '../components/Logos.vue'

const routes = [
  {
    path: '/Logos',
    component: Logos,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


export default router;