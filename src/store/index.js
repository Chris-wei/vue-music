import Vue from 'vue'
import Vuex  from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use( Vuex )

//项目中数据

const state = {
	//轮播图
	picList : [],
	//电台
	radioList : [],
	//排行榜
	musicList :  [],
	//热门搜索
	hotKeysObject : {
		special_key : '',
		hotKeys : []
	},
	//历史记录
	recordList :[

	]
}

export default new Vuex.Store({
	state ,
	getters,
	actions,
	mutations
})