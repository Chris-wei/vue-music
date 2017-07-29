<template>
    <div class="focus_wrapper" v-show="isShow">
        <div class="mod_search_record">
            <li class="mod_search_unit" v-for="( item , index ) in recordList" :key="index">
                <a href="javascript:;" class="js_keyword record_main">
                    <span class="icon iocn_clock"></span>
                    <span class="js_keyword record_con">{{ item }}</span>
                    <span class="js_del_record icon icon_close" @click="deleteRecord($event)"></span>
                </a>
            </li>
            <p class="record_handle" v-show="recordList.length">
                <a href="javascript:;" @click="deleteAllRecord">清除搜索记录</a>
            </p>
        </div>
    </div>
</template>

<script type="es6">
    export default{
        data(){
        	return{
                recordList : []
            }
        },
        props : ['isShow'],
        methods : {
        	//删除记录
			deleteRecord : function (e) {
				//获取要删除的元素
                let deleteText = e.srcElement.previousSibling.previousElementSibling.innerHTML;
                //删除该元素
                this.recordList.splice( this.recordList.indexOf( deleteText ) , 1 );
                //刷新历史记录
				this.$store.commit('set_recordList' , { recordList : this.recordList });
			},
			deleteAllRecord : function () {
				this.recordList = [];
				//刷新历史记录
				this.$store.commit('set_recordList' , { recordList : this.recordList });
			}
        },
        beforeMount (){
        	//获取历史记录
            this.recordList = this.$store.getters.get_recordlist ;
        }
    }
</script>

<style scoped>
    .mod_search_record {
        background: #fff;
    }
    .mod_search_unit {
        border-top: 1px solid #ededed;
        padding: 0 15px;
    }
    .record_main {
        position: relative;
        display: block;
        height: 44px;
        line-height: 44px;
    }
    .iocn_clock {
        position: absolute;
        left: 0;
        top: 12px;
        width: 20px;
        height: 20px;
        background: url('../assets/icon_clock.png') no-repeat center center;
        background-size: cover;
        text-indent: -999px;
    }
    .record_con {
        position: absolute;
        left: 40px;
        right: 50px;
        display: block;
        height: 44px;
        line-height: 44px;
        color: #000;
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .icon_close {
        position: absolute;
        right: 0;
        top: 12px;
        width: 20px;
        height: 20px;
    }
    .icon_close:before, .icon_close:after {
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        background: rgba(0,0,0,.6);
        -webkit-transform: rotate(45deg);
    }
    .icon_close:before {
        width: 17px;
        height: 1px;
        top: 8px;
    }
    .icon_close:after {
        width: 1px;
        height: 17px;
        left: 8px;
    }
    .record_handle {
        text-align: center;
        height: 44px;
        line-height: 44px;
    }
    .record_handle a {
        display: inline-block;
        line-height: 44px;
        color: #47c88a;
    }
</style>