import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BaseSearch from "@/components/BaseSearch.vue";
import WatchExample from '@/components/WatchExample.vue'
import TeleportExample from '@/components/TeleportExample.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/composition',
    component: WatchExample,
  },
  {
    path: '/search',
    component: BaseSearch,
  },
  {
    path: '/teleport',
    component: TeleportExample,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
