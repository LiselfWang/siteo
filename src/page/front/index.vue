<template>
<div>
    <el-row :gutter="10">
        <el-col :span="14">
            <indexNews :newsList="newsList" v-loading="loadingNews"></indexNews>
        </el-col>
        <el-col :span="10">
            <feedback></feedback>
        </el-col>
    </el-row>
</div>
</template>

<script>
import avatar from "../../assets/images/avatar.jpg";
import indexNews from "../../components/front/indexNews.vue";
import feedback from "../../components/front/feedback.vue";
import { get } from "../../util/apiUtil.js";
export default {
    name: "home",
    components:{
        indexNews,
        feedback
    },
    data() {
        return {
            loadingNews:false,
            avatar,
            newsList:[]
        }
    },
    mounted(){
        this.loadingNews = true;
        get("/news/getNewsList").then((response) => {
            this.newsList = response.data.result;
            this.loadingNews = false;
        });
    }
};
</script>

<style lang="scss" scoped>

</style>
