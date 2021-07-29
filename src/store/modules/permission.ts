import { defineStore } from 'pinia'

import { constantRoutesArr, accending } from "/@/router/index";
// import { getAsyncRoutes } from "/@/api/routes";

export const usePermissionStore = defineStore({
  id: 'pure-permission',
  state: () => ({
    constantRoutes: constantRoutesArr, //静态路由
    wholeRoutes: [] as any[]
  }),
  actions: {
    asyncActionRoutes (routes: any[]) {
      if (this.wholeRoutes.length > 0) return
      this.wholeRoutes = accending(this.constantRoutes.concat(routes)).filter(
        v => v.meta.showLink
      )
    },
    async changeSetting (routes: any[]) {
      await this.asyncActionRoutes(routes)
    }
  }
})

export function usePermissionStoreHook() {
  return usePermissionStore()
}