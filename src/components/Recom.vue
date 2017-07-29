<template>
    <div class="content_wrapper">
        <!--轮播图-->
        <keep-alive><Uiswiper :picList="picList" ></Uiswiper></keep-alive>
        <!--电台-->
        <keep-alive><Radiostation :radioList="radioList"></Radiostation></keep-alive>
        <!--热门歌单-->
        <div class="mod_twocol_list mod_twocol_list_special">
            <h2 class="list_title">热门歌单</h2>
            <p class="list_more"><a href="javascript:;">去客户端发现更多好音乐 &gt;</a></p>
        </div>
        <!--底部-->
        <footer class="mod_footer">
            <div class="version_tab">
                <a data-tjname="go_pc" href="http://y.qq.com/?ADTAG=myqq&nomobile=1#type=index">查看电脑版网页</a>
            </div>
            <div class="footer_logo">QQ音乐</div>
            <p class="copyright">Copyright © 1998 - <span>2016</span> Tencent. All Rights Reserved.</p>
            <p class="copyright">联系电话：0755-86013388 QQ群：55209235</p>
        </footer>
    </div>
</template>

<script>
	//引入轮播图组件
	import Uiswiper from './Uiswiper.vue'
    //引入电台组件
    import Radiostation from './Radiostation.vue'
    export default{
		data(){
			return{
				picList : [],
				radioList : []
            }
        },
        components : {
			Uiswiper ,
			Radiostation
        },
		beforeMount : function () {
			//获取首页数据
            let _this = this;
			let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=867746469&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1501295290725';
			$.ajax({
				url: url,
				type: 'GET',
				dataType: 'jsonp',
				success: function ( res ) {
					let data = res.data;
                    _this.picList = data.slider;
                    _this.radioList = data.radioList;
				}
			})
		}
    }
</script>

<style scoped>
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
    .mod_twocol_list .list_more {
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    .mod_twocol_list .list_more a {
        display: inline-block;
        padding: 0 10px;
        font-size: 14px;
        color: rgba(0,0,0,.6);
    }
    .mod_footer {
        padding: 15px 0;
        margin-bottom: 10px;
    }
    .mod_footer .version_tab {
        text-align: center;
        margin-bottom: 16px;
    }
    .mod_footer .version_tab a {
        position: relative;
        display: inline-block;
        padding: 0 15px;
        font-size: 14px;
        height: 14px;
        line-height: 14px;
        color: #000;
    }
    .mod_footer .footer_logo {
        display: block;
        width: 82px;
        height: 24px;
        margin: 0 auto 10px;
        background-image: url('https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo_footer.png');
        background-repeat: no-repeat;
        background-size: cover;
        text-indent: -9999px;
    }
    .mod_footer .copyright {
        font-size: 10px;
        text-align: center;
        color: rgba(0,0,0,.5);
    }
</style>