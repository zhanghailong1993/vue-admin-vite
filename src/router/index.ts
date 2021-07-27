import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from "../utils/progress"
import homeRouter from './modules/home'

const constantRoutes: Array<any> = [
  homeRouter
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

router.beforeEach((to, _from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;