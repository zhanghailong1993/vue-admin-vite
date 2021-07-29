import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import * as Sentry from '@sentry/browser'
// import * as Integrations from '@sentry/integrations'
import { useElementPlus } from './plugins/element-plus';
import { setupStore } from '/@/store'

// 导入公共样式
import "./style/index.scss";
// 导入字体图标
import "./assets/iconfont/iconfont.js";
import "./assets/iconfont/iconfont.css";
import 'font-awesome/css/font-awesome.css';

const app = createApp(App)

// Sentry.init({
//   dsn: 'http://3b56a85b2dc14b7fb3270cfa2c965ec6@192.168.55.173:9000/2',
//   integrations: [new Integrations.Vue({app, attachProps: true})],
// });

useElementPlus(app)
setupStore(app)
app.use(router)

app.mount('#app')
