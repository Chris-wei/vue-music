<template>
    <!--排行榜-->
    <div class="mod_topic">
        <ul>
            <li class="topic_item" v-for="( item , key ) in Musiclist" :key="key" :data-id="item.id">
                <div class="topic_main">
                    <a href="javascript:;" class="topic_media">
                        <img :src="item.picUrl">
                        <span class="listen_count"><i class="icon icon_listen"></i>{{ item.listenCount | listenNum }}</span>
                    </a>
                    <div class="topic_info">
                        <div class="topic_cont">
                            <h3 class="topic_tit">{{ item.topTitle }}</h3>
                            <p v-for="( items , index ) in item.songList " :key="index">
                                {{ index + 1 }}
                                <span class="text_name">{{ items.songname }}</span>- {{ items.singername }}
                            </p>
                        </div>
                        <i class="topic_arrow"></i>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="es6">
    export default{
    	data(){
    		return{

            }
        },
		filters : {
    		//收听人数过滤器
			listenNum : function ( val ) {
				return ( val / 10000 ).toFixed(1) + '万';
			}
		},
        props : ['Musiclist']
    }
</script>

<style>
    .mod_topic{
        margin: 10px;
    }
    .mod_topic li {
        margin-bottom: 10px;
        overflow: hidden;
    }
    .mod_topic li .topic_main {
        display: -webkit-box;
        background: #fff;
    }
    .mod_topic li .topic_media {
        position: relative;
        width: 100px;
        height: 100px;
        display: block;
    }
    .mod_topic li .topic_media::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100px;
        background: rgba(0,0,0,0.3);
        z-index: 1;
    }
    .mod_topic li .topic_media img {
        display: block;
        width: 100px;
        height: 100px;
    }
    .mod_topic li .topic_media .listen_count {
        position: absolute;
        display: block;
        left: 5px;
        bottom: 7px;
        line-height: 12px;
        color: #fff;
        opacity: .6;
        font-size: 9px;
        z-index: 10;
    }
    .mod_topic li .topic_media .icon_listen {
        display: block;
        float: left;
        width: 10px;
        height: 10px;
        margin-right: 3px;
        z-index: 10;
        background: url("../assets/icon_listen.png") no-repeat center center;
        background-size: cover;
    }
    .mod_topic li .topic_info {
        position: relative;
        -webkit-box-flex: 1;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
    }
    .mod_topic li .topic_cont {
        -webkit-box-flex: 1;
        margin: 0 10px 0 15px;
    }
    .mod_topic li .topic_tit {
        font-size: 16px;
        color: #000;
        font-weight: normal;
        margin-bottom: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .mod_topic li .topic_cont p {
        font-size: 14px;
        color: rgba(0,0,0,.5);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .mod_topic li .topic_cont .text_name {
        color: #000;
        margin-left: 8px;
        margin-right: 5px;
        font-size: 14px;
    }
    .mod_topic li .topic_arrow {
        position: absolute;
        right: 10px;
        top: 50%;
        margin-top: -4px;
        width: 6px;
        height: 6px;
        border-right: 1px solid #b2b2b2;
        border-bottom: 1px solid #b2b2b2;
        -webkit-transform: rotate(-45deg);
    }
</style>
