<template>
    <div class="content_container">
        <Musiclist :Musiclist="Musiclist"></Musiclist>
        <p class="topic_more">
            <a href="javascript:;">去客户端发现更多好音乐 &gt;</a>
        </p>
    </div>
</template>

<script type="es6">
    //引入音乐列表组件
	import Musiclist from './Musiclist.vue'

    export default{
		data(){
			return{
                Musiclist : ''
            }
        },
        components : {
			Musiclist
        },
		beforeMount : function () {
            this.Musiclist = this.$store.getters.get_musiclist;
		}
    }
</script>

<style scoped>
    .topic_more {
        margin: 10px;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    .topic_more a {
        display: inline-block;
        padding: 0 10px;
        font-size: 14px;
        color: rgba(0,0,0,.6);
    }
</style>

