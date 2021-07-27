import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useElementPlus } from './plugins/element-plus';

// 导入公共样式
import "./style/index.scss";
// 导入字体图标
import "./assets/iconfont/iconfont.js";
import "./assets/iconfont/iconfont.css";

const app = createApp(App)

useElementPlus(app)

app.use(router)

app.mount('#app')
