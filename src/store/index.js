import Vue from 'vue'
import Vuex  from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex )

//项目中数据

const  state = {
	//轮播图
	picList : [
		'https://y.gtimg.cn/music/photo_new/T003R720x288M000003saRWL4feDuy.jpg',
		'https://y.gtimg.cn/music/photo_new/T003R720x288M000003EB2tz1o6l3P.jpg',
		'https://y.gtimg.cn/music/photo_new/T003R720x288M000003MsTXn0MKv8Q.jpg',
		'https://y.gtimg.cn/music/photo_new/T003R720x288M000002QbqBv1FVfO2.jpg',
		'https://y.gtimg.cn/music/photo_new/T003R720x288M000004Eta9U22i6L0.jpg'
	],
	//电台
	radioList : [
		{
			url : 'https://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg' ,
			desc : '一人一首招牌歌'
		},
		{
			url : 'https://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg' ,
			desc : '热歌'
		}
	],
	//排行榜
	musicList :  [
		{
			"id":4,
			"listenCount":19300000,
			"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_203377767.jpg",
			"songList":[
				{
					"singername":"张震岳/MC HotDog",
					"songname":"差不多先生 (Live)"
				},
				{
					"singername":"薛明媛/朱贺",
					"songname":"非酋"
				},
				{
					"singername":"川&虎",
					"songname":"我要你 (Live)"
				}
			],
			"topTitle":"巅峰榜·流行指数",
			"type":0
		},
		{
			"id":26,
			"listenCount":19900000,
			"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_202773258.jpg",
			"songList":[
				{
					"singername":"岑宁儿",
					"songname":"追光者"
				},
				{
					"singername":"叶炫清",
					"songname":"九张机"
				},
				{
					"singername":"Alan Walker/Iselin Solheim",
					"songname":"Faded"
				}
			],
			"topTitle":"巅峰榜·热歌",
			"type":0
		},
		{
			"id":27,
			"listenCount":15400000,
			"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_27_300_203359526.jpg",
			"songList":[
				{
					"singername":"那英",
					"songname":"三生三世十里桃花"
				},
				{
					"singername":"G.E.M. 邓紫棋",
					"songname":"爱你A.I.N.Y.2017"
				},
				{
					"singername":"孙子涵",
					"songname":"长安城外的夜"
				}
			],
			"topTitle":"巅峰榜·新歌",
			"type":0
		},
		{
			"id":25,
			"listenCount":9700000,
			"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_25_300_203376837.jpg",
			"songList":[
				{
					"singername":"川&虎",
					"songname":"我要你 (Live)"
				},
				{
					"singername":"菲林&乐洋",
					"songname":"告白气球 (Live)"
				},
				{
					"singername":"于梓贝",
					"songname":"模特 (Live)"
				}
			],
			"topTitle":"巅峰榜·中国新歌声",
			"type":0
		},
		{
			"id":28,
			"listenCount":14655360,
			"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_28_300_203002354.jpg",
			"songList":[
				{
					"singername":"夏洛菲/汤川",
					"songname":"死在江南烟雨中"
				},
				{
					"singername":"杨清柠/王乐乐",
					"songname":"我们"
				},
				{
					"singername":"孙晨",
					"songname":"拜托"
				}
			],
			"topTitle":"巅峰榜·网络歌曲",
			"type":0
		},
		{
			"id":5,
			"listenCount":7573700,
			"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_5_300_203015893.jpg",
			"songList":[
				{
					"singername":"叶炫清",
					"songname":"九张机"
				},
				{
					"singername":"叶炫清",
					"songname":"风一样的我"
				},
				{
					"singername":"金润吉",
					"songname":"学到老爱到老"
				}
			],
			"topTitle":"巅峰榜·内地",
			"type":0
		},
		{
			"id":6,
			"listenCount":3746080,
			"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_6_300_203241465.jpg",
			"songList":[
				{
					"singername":"蔡健雅",
					"songname":"紫"
				},
				{
					"singername":"潘玮柏",
					"songname":"Coming Home"
				},
				{
					"singername":"岑宁儿",
					"songname":"追光者"
				}
			],
			"topTitle":"巅峰榜·港台",
			"type":0
		},
		{
			"id":3,
			"listenCount":11586840,
			"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_3_300_203238813.jpg",
			"songList":[
				{
					"singername":"Selena Gomez/Gucci Mane",
					"songname":"Fetish"
				},
				{
					"singername":"Coldplay",
					"songname":"A L I E N S"
				},
				{
					"singername":"Coldplay/Big Sean",
					"songname":"Miracles (Someone Special)"
				}
			],
			"topTitle":"巅峰榜·欧美",
			"type":0
		},
		{
			"id":16,
			"listenCount":6589200,
			"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_16_300_203157552.jpg",
			"songList":[
				{
					"singername":"원 (郑帝元)",
					"songname":"heyahe (해야해)"
				},
				{
					"singername":"린 (LYn)/챈슬러 (Chancellor)",
					"songname":"On&On"
				},
				{
					"singername":"지코 (Zico)/G.Soul (지소울)",
					"songname":"ANTI (안티)"
				}
			],
			"topTitle":"巅峰榜·韩国",
			"type":0
		},
		{
			"id":17,
			"listenCount":1678560,
			"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_17_300_203107972.jpg",
			"songList":[
				{
					"singername":"中島美嘉 (なかしま みか)",
					"songname":"电光石火之间"
				},
				{
					"singername":"Mondo Grosso/Bird (北山有紀)",
					"songname":"TIME"
				},
				{
					"singername":"End of the World (世界の終わり)",
					"songname":"One More Night"
				}
			],
			"topTitle":"巅峰榜·日本",
			"type":0
		},
		{
			"id":201,
			"listenCount":309372,
			"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/20150127163830.jpg",
			"songList":[
				{
					"singername":"鹿晗",
					"songname":"零界点（On fire）"
				},
				{
					"singername":"TFBOYS",
					"songname":"加油！AMIGO (《我们的少年时代》电视剧片头曲)"
				},
				{
					"singername":"那英",
					"songname":"三生三世十里桃花 (《三生三世十里桃花》电影主题曲)"
				}
			],
			"topTitle":"巅峰榜·MV",
			"type":0
		},
		{
			"id":32,
			"listenCount":4541160,
			"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_32_300_102877697.jpg",
			"songList":[
				{
					"singername":"戴荃",
					"songname":"悟空 (Live)"
				},
				{
					"singername":"王极",
					"songname":"要不要做我女朋友"
				},
				{
					"singername":"南征北战",
					"songname":"我的天空"
				}
			],
			"topTitle":"巅峰榜·音乐人",
			"type":0
		},
		{
			"id":36,
			"listenCount":3215160,
			"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_36_300_200732018.jpg",
			"songList":[
				{
					"singername":"胡赟兆",
					"songname":"啷个哩个啷"
				},
				{
					"singername":"胡慧",
					"songname":"分手快乐"
				},
				{
					"singername":"苏悦宁",
					"songname":"红色高跟鞋"
				}
			],
			"topTitle":"巅峰榜·K歌金曲",
			"type":0
		}
	]
}

export default new Vuex.Store({
	state ,
	getters,
	actions,
	mutations
})