<template>
    <div class="mod_search_result" v-show="isShow">
        <h3 class="result_tit">热门搜索</h3>
        <div class="result_tags">
            <a :href="hotKeysObject['special_url']" class="tag_s tag_hot" @click="search($event)" > {{ hotKeysObject['special_key'] }}</a>
            <a v-for=" ( item , index ) in hotKeysObject['hotKeys'] " href="javascript:;" class="tag_s"
               :data-n="item['n']" :key="index" @click="search($event)" v-if="index < 7 "> {{ item['k'] }} </a>
        </div>
    </div>
</template>

<script type="es6">
    export default{
    	props : ['isShow'],
        data(){
    		return{
				hotKeysObject : {
					special_key : '',
					hotKeys : []
                },
				recordList : []
            }
        },
        methods :{
        	getHotKyesObject : function () {
				let _this = this;
				let url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg';
				$.ajax({
					url : url ,
					type : 'GET' ,
					dataType : 'jsonp' ,
					success : function (data) {
						_this.hotKeysObject = {
							special_key : data.data.special_key ,
							hotKeys : data.data.hotkey ,
                            special_url : data.data.special_url
                        }
                        //缓存数据
                        _this.$store.commit('set_hotKeysObject' , { hotKeysObject : _this.hotKeysObject })
					}
				})
			},
			search : function (event) {
				//点击每个热门搜索词
                let currentText = event.srcElement.innerHTML;
                //将当前的记录下来
                if( !this.recordList.includes( currentText ) ) this.recordList.push( currentText );
                this.$store.commit('set_recordList' , { recordList : this.recordList });

                window.location.reload();
			}
        },
        beforeMount(){
           if( this.$store.getters.get_hotKeysObject.special_key ) this.hotKeysObject = this.$store.getters.get_hotKeysObject;
           else this.getHotKyesObject();
        }
    }
</script>

<style scoped>
    .mod_search_result {
        font-size: 1.17em;
        background: #fff;
        padding: 15px 15px 10px 15px;
    }
    .mod_search_result .result_tit {
        color: rgba(0,0,0,.6);
        font-weight: bold;
        margin-bottom: 8px;
    }
    .mod_search_result .result_tags {
        font-size: 0;
    }
    .mod_search_result .tag_s {
        display: inline-block;
        font-size: 14px;
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        color: #000;
        border: 1px solid rgba(0,0,0,.6);
        border-radius: 99px;
        word-break: keep-all;
        margin-bottom: 10px;
        margin-right: 14px;
    }
    .mod_search_result .tag_hot {
        color: #fc4524;
        border-color: #fc4524;
    }
</style>