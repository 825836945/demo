//创建一个路由器，并暴露出去
import {createRouter,createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import News from  '@/views/News.vue'
import About from '@/views/About.vue'
import Detail from '@/views/Detail.vue'

//创建路由器
const router = createRouter({
    history:createWebHistory(),
    routes:[
    {
      name:"Home",
      path:'/home' ,
      component:Home
    },
     {
      name:'News',
      path:'/news' ,
      component:News,
      children:[
        {
          name:'Xinwen',
          path:'detail/:id/:title/:content?',
          component:Detail,
          //将路由收到的所有params参数作为props传给路由组件
          // props:true

          props(route){
            return route.query
          }
        }
      ]
    },
     {
      name:'About',
      path:'/about' ,
      component:About
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
//暴露出去router
export default router 
