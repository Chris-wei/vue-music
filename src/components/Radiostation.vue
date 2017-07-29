<template>
    <div class="mod_twocol_list mod_twocol_list_normal">
        <h2 class="list_title">电台</h2>
        <ul class="list_container">
            <li v-for=" ( item , index ) in radioList" :key="index" class="js_play_radio">
                <a class="list_main" href="javascript:;">
                    <div class="list_media">
                        <img class="list_pic" :src="item.picUrl" alt="">
                        <span class="icon icon_play"></span>
                    </div>
                    <div class="list_info">
                        <h3 class="list_tit tit_two_row">{{ item.Ftitle }}</h3>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
    	data(){
    		return{

            }
        },
        props : ['radioList']
    }
</script>

<style scoped>
    .mod_twocol_list_normal {
        margin-bottom: 7px;
    }
    .mod_twocol_list {
        margin-left: 10px;
        margin-right: 10px;
    }
    .mod_twocol_list .list_title {
        font-size: 16px;
        color: #000;
        margin-bottom: 11px;
        font-weight: normal;
    }
    .mod_twocol_list .list_container {
        overflow: hidden;
        margin-right: -8px;
    }
    .mod_twocol_list li {
        float: left;
        width: 50%;
        -webkit-box-sizing: border-box;
        padding-right: 8px;
        margin-bottom: 10px;
        overflow: hidden;
    }
    .mod_twocol_list li .list_main {
        display: block;
        background: #fff;
    }
    .mod_twocol_list li .list_media {
        position: relative;
        margin-bottom: 5px;
    }
    .mod_twocol_list li .list_media::before {
        content: "";
        display: block;
        padding-top: 100%;
    }
    .mod_twocol_list li .list_media img {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        z-index: 1;
    }
    .mod_twocol_list li .list_pic {
        display: block;
        width: 100%;
    }

    .list_media img {
        display: block;
        width: 100%;
    }
    img {
        color: #ccc;
    }
    .mod_twocol_list li .list_media .icon_play {
        position: absolute;
        display: block;
        z-index: 10;
        height: 24px;
        bottom: 5px;
        right: 5px;
        width: 24px;
        background-position: 0 0;
        background-image: url('https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/list_sprite.png');
        background-repeat: no-repeat;
        background-size: 24px 60px;
    }
    .mod_twocol_list li .list_info {
        padding: 0 7px 5px;
        color: #000;
    }
    .mod_twocol_list_normal li .list_tit {
        height: 36px;
        line-height: 18px;
        white-space: normal;
        word-wrap: break-word;
    }
    .mod_twocol_list li .list_tit {
        font-size: 14px;
    }
    .mod_twocol_list li .list_tit {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: normal;
        font-size: 12px;
    }
    .mod_twocol_list li .list_tit {
        font-size: 14px;
    }
</style>