<template>
    <div class="loading_box" v-if="isLoading">
        <img src="https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/loading.gif?max_age=2592000" alt="">
        <p>页面正在努力加载中<span>...</span></p>
    </div>
</template>

<script>
    export default{
    	props : ['isLoading']
    }
</script>

<style scoped>
    .loading_box {
        position: fixed;
        width: 100%;
        top:84px;
        height: 100%;
        background: #f4f4f4;
        z-index: 999;
    }
    .loading_box img {
        display: block;
        width: 100px;
        height: 100px;
        margin: 60px auto 50px;
        color: #ccc;
    }
    .loading_box p{
        text-align: center;
    }
    .loading_box p span {
        display: inline-block;
        width: 20px;
        overflow: hidden;
        vertical-align: middle;
    }
</style>