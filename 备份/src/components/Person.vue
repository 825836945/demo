<template>
    <div class="person">
        <h2>姓名:{{ Student.name }} , 家地址是{{ Student.adress }}</h2>
        <h2>年龄：{{ age }}</h2>
        <!-- <h2>地址：{{ adress }}</h2> -->
        <button @click="change">修改信息</button>
        <button @click=" changeAge">修改年龄123</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>
<!-- <script lang="ts">
    export default {
        name:'Person',  //定义组件名  可安装插件代替
        // 安装：npm i vite-plugin-vue-setup-extend -D 
        // 然后vite.config.ts中引入 调用
      } 
</script> -->
<script lang="ts" setup name="Person1">
    import {ref,reactive,toRefs} from 'vue'; 
    // import {type PersonInter} from '@/types'

  // 第一种写法：仅接收
// const props = defineProps(['list'])
  
  // 第二种写法：接收 + 限制类型
// defineProps<{list:Persons}>()
  
  // 第三种写法：接收 + 限制类型 + 指定默认值 + 限制必要性
// let props = withDefaults(defineProps<{list?:Persons}>(),{
//      list:()=>[{id:'asdasg01',name:'小猪佩奇',age:18}]
//   })



    let Student = reactive({name:'张三',adress:'北京'})
    // let {name,adress} = toRefs(Student); 解构将一个响应式对象中的每一个属性，转换为ref对象。并且改变解构的值，也会影响到原响应式对象的值。

    let age = ref(18);
    let tel = '138888888888'
   


    function change(){
        Object.assign(Student,{name:'李四',adress:'山东'})
        //ref 的可以整体改 Student.value = {name:'李四',adress:'山东'}
    }
    function changeAge(){
        age.value+=1;
        console.log(age.value);
                
    }
    function showTel(){
        alert(tel)
    }

</script>
<style>
    .person {
        background: pink;
        /* height: 100px; */
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>