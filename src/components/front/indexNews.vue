<template>
    <el-card shadow="hover" class="card">
        <div slot="header">
            <span>新闻</span>
        </div>
        <ul>
            <li :key="news.id" v-for="news in newsList">{{news.title}}</li>
        </ul>
    </el-card>
</template>
<script>
export default {
    name: "indexNews",
    props:["newsList"]
};
</script>
<style scoped>

</style>
