import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/pages/NotFound.vue'
import Topics from '@/components/Topics.vue'
import Examples from '@/components/Examples.vue'
import Example from '@/components/Example.vue'

const routes = [
  { path: '/', redirect: '/topics', props: true },
  {
    path: '/topics',
    component: Topics,
    children: [
      { path: '/topics/:topic', component: Examples, props: true },
      { path: '/examples/:id', component: Example, props: true },
    ],
  },
  {
    path: '/search',
    component: () => import('@/pages/Search.vue'),
  },
  { path: '/:notFound(.*)', component: NotFound },
]

export default createRouter({
  routes,
  history: createWebHistory(),
})
