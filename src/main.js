import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "element-plus/theme-chalk/index.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "./utils/mock.js"
import axios from 'axios'

const app=createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)
//elementUI的icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

//全局配置axios
app.config.globalProperties.$http=axios;

app.mount('#app')
