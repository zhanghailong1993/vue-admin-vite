import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from "../utils/progress"
import homeRouter from './modules/home'
import flowChartRouter from './modules/flowchart'
import errorRouter from "./modules/error"
// import { usePermissionStore } from "/@/store/modules/permission"
import { getAsyncRoutes } from "/@/api/routes"

const constantRoutes: Array<any> = [
  homeRouter,
  flowChartRouter,
  errorRouter
]

// 按照路由中meta下的rank等级升序来排序路由
export const accending = (arr: any[]) => {
  return arr.sort((a: any, b: any) => {
    return a?.meta?.rank - b?.meta?.rank
  })
}

export const initRouter = () => {
  return new Promise(resolve => {
    getAsyncRoutes({
      name: 'test'
    }).then((res) => {
      debugger
      // usePermissionStore().changeSetting(info);
    })
  })
}

// 将所有静态路由导出
export const constantRoutesArr = accending(constantRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

router.beforeEach((to, _from, next) => {
  NProgress.start()
  // if (usePermissionStoreHook().wholeRoutes.length === 0) {
  //   debugger
  //   initRouter()
  // }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;