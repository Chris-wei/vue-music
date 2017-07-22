<template>
    <div class="ul-container">
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(item , key ) in picList" :key="key">
                <img :src=" item " alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default{
		data(){
            return{

            }
        },
        props : ['picList']
    }
</script>

<style scoped>
    .ul-container{
        height: 150px;
        margin-bottom: 14px;
    }
    .ul-container img{
        display: block;
        width: 100%;
        margin: 0 auto;
        height: 100%;
    }
</style>