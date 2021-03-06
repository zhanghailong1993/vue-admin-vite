import { App } from 'vue';
import reBreadCrumb from "./src/index.vue";

const ReBreadCrumb = Object.assign(reBreadCrumb , {
  install (app: App) {
    app.component(reBreadCrumb.name, reBreadCrumb)
  }
})

export default ReBreadCrumb