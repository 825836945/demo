//引入createApp 用于创建应用
import { createApp } from 'vue'
//引入 App根组件
import App from './App.vue'
// 引入路由器
import router from './router'

//创建一个应用
const app  = createApp(App)
//使用路由器
app.use(router)
app.mount('#app')