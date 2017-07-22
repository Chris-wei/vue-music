import Vue from 'vue'
import Vuex  from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex )

//项目中数据

const  state = {
	picList : [
		'https://y.gtimg.cn/music/photo_new/T003R720x288M000003saRWL4feDuy.jpg',
		'https://y.gtimg.cn/music/photo_new/T003R720x288M000003EB2tz1o6l3P.jpg',
		'https://y.gtimg.cn/music/photo_new/T003R720x288M000003MsTXn0MKv8Q.jpg',
		'https://y.gtimg.cn/music/photo_new/T003R720x288M000002QbqBv1FVfO2.jpg',
		'https://y.gtimg.cn/music/photo_new/T003R720x288M000004Eta9U22i6L0.jpg'
	],
	radioList : [
		{
			url : 'https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg' ,
			desc : '一人一首招牌歌'
		},
		{
			url : 'https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg' ,
			desc : '热歌'
		}
	]
}

export default new Vuex.Store({
	state ,
	getters,
	actions,
	mutations
})