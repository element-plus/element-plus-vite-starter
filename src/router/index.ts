import { createRouter, createWebHistory } from 'vue-router'
import AnalyseViewOld from '~/views/AnalyseViewOld.vue'
import AnalyseView from '~/views/AnalyseView.vue'
import WelcomeView from '~/views/WelcomeView.vue'
import PlaceholderView from '~/views/PlaceholderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomeView
    },
    {
      path: '/quick-analysis-old',
      name: '/quick-analysis-old',
      component: AnalyseViewOld
    },
    {
      path: '/experiment-reports',
      name: 'experiment-reports',
      component: PlaceholderView
    },
    {
      path: '/quick-analysis',
      name: 'quick-analysis',
      component: PlaceholderView
    },
    {
      path: '/quick-analysis-demo',
      name: 'quick-analysis-demo',
      component: AnalyseView
    },
    {
      path: '/experiment-calculator',
      name: 'experiment-calculator',
      component: PlaceholderView
    },
    {
      path: '/metrics-and-segments',
      name: 'metrics-and-segments',
      component: PlaceholderView
    },
    {
      path: '/settings',
      name: 'settings',
      component: PlaceholderView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('~/jviews/AboutView.vue')
    // }
  ]
})

export default router
