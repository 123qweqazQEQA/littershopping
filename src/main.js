import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import vant from 'vant'
import 'vant/lib/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(router).use(store).use(vant).use(ElementPlus).mount('#app')
