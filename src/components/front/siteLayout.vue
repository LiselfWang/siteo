<template>
<el-container>
    <el-header>
        <el-row>
            <el-col :span="6">
                <h1>LOGO</h1>
            </el-col>
            <el-col :span="18">
            </el-col>
        </el-row>
    </el-header>
    <el-container>
        <el-main>
                <router-view></router-view>
        </el-main>
    </el-container>
</el-container>
</template>
<script>
export default {
    name: "layout",
    components: {
    }
};
</script>
<style scoped>

</style>
