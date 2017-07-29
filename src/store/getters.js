//项目中相关getters
export default {
	//获取音乐列表
	get_musiclist(state){
		return state.musicList
	},
	//获取热门搜索
	get_hotkeys(state){
		return state.hotKeys;
	},
	//获取历史搜索记录
	get_recordlist(state){
		return window.JSON.parse( window.localStorage.getItem('recordList') );
	}
}
