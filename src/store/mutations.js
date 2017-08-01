//项目中相关mutations

export default {
	//缓存轮播图数据
	set_picList ( context , payload ){
		context.picList = payload.picList;
	},
	//缓存电台数据
	set_radioList ( context , payload ){
		context.radioList = payload.radioList;
	},
	//缓存音乐排行
	set_musicList ( context , payload ){
		context.musicList = payload.musicList;
	},
	set_hotKeysObject( context , payload ){
		context.hotKeysObject = payload.hotKeysObject;
	},
	//记录历史搜索
	set_recordList( context , payload ){
		context.recordList = payload.recordList;
		window.localStorage.removeItem('recordList');
		window.localStorage.setItem('recordList' , JSON.stringify( payload.recordList ) );
	}
}
