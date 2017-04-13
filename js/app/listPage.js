$(function(){
	var datas=[]
	var pageSize=25;
	$.get("js/json/pageSize.json",function(data){
		//console.log(data)
		datas=data
		var pageCount = Math.ceil(datas.length/pageSize);
		addData(1)
		$('.page-footer').createPage({
			pageCount: pageCount,
			current: 1,
			backFn: function(page) {
				addData(page)
			}
		});
	})
	function addData(page){
		var iNum = (page-1)*25
		var html="";
		for(var i=0;i<25;i++){
			if(!datas[i+iNum]){
				//当为空时终止
				break;
			}
			html+=template("list01",datas[i+iNum])
		}
		$('.listcontainers').html(html);
	}	
})
