<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink> -->
                 <RouterLink
                  :to="{
                    name:'Xinwen',
                    params:{
                        id:news.id,
                        title: news.title,
                        content: news.content
                    }
                  }"
                 >
                  {{ news.title }}
                 </RouterLink>
            </li>
        </ul>
        <!-- 样式区 -->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>
<script lang="ts" setup name="News">
    import { reactive } from 'vue';
    import { RouterView ,RouterLink} from 'vue-router';

    const newsList = reactive([
    {id:'01',title:'历史房价是',content:'西蓝花'},
    {id:'02',title:'沙发上',content:'水电费'},
    {id:'03',title:'示范岗',content:'呼呼呼'},
    {id:'04',title:'规定更好的',content:'速度'},
    ])
</script>
<style scoped>
    .news {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        height: 100%;
    }
    .news ul {
        margin-top: 30px;
        /* list-style: none; */
        padding-left: 10px;
    }
    .news li::marker{
        color: #64967e;
    }
    .news li>a {
        font-size: 18px;
        line-height: 40px;
        text-decoration: none;
        color: #64967e;
        text-shadow: 0 0 1px rgb(0,84,0);
    }
    .news-content {
        width: 70%;
        height: 90%;
        border: 1px solid;
        margin-top: 20px;
        border-radius: 10px;
    }
</style>