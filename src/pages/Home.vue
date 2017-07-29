<template>
  <div class="wrapper">
      <Topheader></Topheader>
      <div class="mod_nav">
          <a v-for="items in navList" href="javascript:;" :data-nav="items['type']" @click="toggle($event)" :class="{ active : active == items['type'] }">{{items['text']}}</a>
      </div>
      <!--页面子路由-->
      <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script type="es6">
    //引入头部
    import Topheader from '@/components/Topheader'
    //引入推荐模块
    export default {
        name: 'hello',
        data () {
          return {
              active : '',
              navList : [
                  { type : 'recom' , text: '推荐' } ,
                  { type : 'toplist' , text : '排行榜' } ,
                  { type : 'search' , text : '搜索' }
              ]
          }
        },
        components : {
			Topheader
        },
		methods : {
        	//菜单栏切换
			toggle : function (e) {
				this.active = e.srcElement.dataset.nav;
				this.$router.push( '/' + this.active );
				this.toggleBackgroundColor();
			},
            toggleBackgroundColor : function () {
				//search页面背景为白色
				let body = document.getElementsByTagName('body')[0];
				if( this.active == 'search' ) body.style.backgroundColor = '#fff';
				else body.style.backgroundColor = '#f4f4f4';
			}
		},
        beforeMount : function () {
        	//获取当前的菜单栏
            this.active = this.$route.path.replace('/','');
			this.toggleBackgroundColor();
		}
    }
</script>

<style scoped>
    .mod_nav {
        display: -webkit-box;
        background: #fff;
    }
    .mod_nav a{
        -webkit-box-flex: 1;
        position: relative;
        display: block;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        text-align: center;
        font-size: 16px;
        color: rgba(0,0,0,.6);
        -webkit-box-sizing: border-box;
    }
    .mod_nav a.active{
        color: #31c27c;
    }
    .mod_nav a.active:after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: #31c27c;
    }
</style>
