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
        methods : {
		    getMusicListData(){
				let _this = this;
				let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg';
				$.ajax({
					url : url ,
					type : 'get' ,
					dataType : 'jsonp' ,
					success : function (data) {
						let topList = data.data.topList;
						_this.Musiclist = topList;
						//缓存数据
                        _this.$store.commit('set_musicList' , { musicList : topList });
					}
				})
            }
        },
		beforeMount : function () {
            if( this.$store.getters.get_musiclist.length ) this.Musiclist = this.$store.getters.get_musiclist;
			else this.getMusicListData();
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

