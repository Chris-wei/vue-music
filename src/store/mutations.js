//项目中相关mutations

export default {
	//记录历史搜索
	set_recordList( context , payload ){
		context.recordList = payload.recordList;
		window.localStorage.setItem('recordList' , JSON.stringify( payload.recordList ) );
	}
}
