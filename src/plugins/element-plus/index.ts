import { App } from 'vue';

import {
  ElButton,
  ElSelect,
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElAffix,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElScrollbar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElCard,
  ElSkeleton
} from 'element-plus';

// 如果要使用.scss样式文件，则需要引入base.scss文件
import 'element-plus/packages/theme-chalk/src/base.scss';

const components = [
  ElButton,
  ElSelect,
  ElAffix,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElScrollbar,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElCard,
  ElSkeleton
];

const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification
];

export function useElementPlus (app: App) {
  components.forEach(component => {
    app.component(component.name, component)
  })
  
  plugins.forEach(plugin => {
    app.use(plugin)
  })
}

