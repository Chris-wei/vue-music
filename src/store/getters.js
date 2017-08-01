//项目中相关getters
export default {
	//获取轮播图列表
	get_piclist(state){
		return state.picList;
	},
	//获取电台列表
	get_radioList(state){
		return state.radioList;
	},
	//获取音乐列表
	get_musiclist(state){
		return state.musicList
	},
	//获取热门搜索
	get_hotKeysObject(state){
		return state.hotKeysObject;
	},
	//获取历史搜索记录
	get_recordlist(state){
		return window.JSON.parse( window.localStorage.getItem('recordList') );
	}
}
