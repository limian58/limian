$(function(){
	$(".listView").on("click",".addBtn01",function(){
		var ids = $(this).attr("data")
		//var coo = $.cookie('tmpJSON.img')
		//console.log(coo)
		//var obj[ids] = obj[ids]++ || 1
		//console.log($(this).parents(".datail-right").siblings(".datail-left").find(".midImg").attr("src"))
		console.log(ids)
		var tmpJSON = {
			"tit":$(this).siblings(".datail-right-top").find("p").eq(0).text(),
			"price":$(this).siblings(".datail-right-top").find('a').html(),
			"img":$(this).parents(".datail-right").siblings(".datail-left").find(".midImg").attr("src"),
			"sou":""
		}
		var tmpStr = JSON.stringify(tmpJSON)
		//console.log(tmpJSON.img)
		$.cookie('tmpJSON.img,tmpStr',{"expires":7,path:"/"})
	});
	
	console.log($.cookie())
	var LIST = ""
	for(var i in $.cookie()){
		//console.log(i)
		var tmpJSON1 = JSON.parse($.cookie(i))
		//console.log(tmpJSON1)
		//console.log(tmpJSON1.tit)
		if(tmpJSON1.tit!=undefined){
			LIST+="<li>"+
				"<span><input type='checkbox' class='_checked'/></span>"+
				"<span><img class='cartImgSm' src=" +tmpJSON1.img+" alt='' /></span>"+
				"<span>"+tmpJSON1.tit+"</span>"+
				"<span class='Pri'>"+tmpJSON1.price+"</span>"+
				"<span>"+
					"<div class='jia'>"+
						"<div class='jia1'>+</div>"+
						"<input class='show1' type='text' value='1'>"+
						"<div class='jian1'>-</div>"+
					"</div>"+
				"</span>"+
				"<span class='xiaoji'>"+tmpJSON1.price+"</span>"+
				"<span><b class='removeLi'>删除</b>/_/<b>收藏</b></span>"+
			"</li>"
		}
	}
	$(".detailMin").html(LIST);

	$(".show1").keyup(function(){
		alert("sss")
	})
	
	
	//默认选中
	$("input").prop("checked",true)
	$("._all").click(function(){
		console.log($(this).prop("checked"))
		if($(this).prop("checked")){
			$("._checked").prop("checked",true)
			$("._all").prop("checked",true)
			PriceChange()
		}else{
			$("._checked").prop("checked",false)
			$("._all").prop("checked",false)
			PriceChange()
		}
	})
	//下部复选框console.log($("._checked:checked"))$("._checked").length
	$("._checked").click(function(){
		console.log($("._checked:checked").length)
		console.log($("._checked").length)
		if($("._checked:checked").length==$("._checked").length){
			$("._all").prop("checked",true)
		}else{
			$("._all").prop("checked",false)
		}
		PriceChange()
	})
	

	$(".jia1").click(function(){
		var Price = $(this).parents("span").siblings(".Pri").text().slice(1);
		$(this).siblings(".show1").val(parseInt($(this).siblings(".show1").val())+1)
		$(this).parents("span").siblings(".xiaoji").text("￥"+ Price*parseInt($(this).siblings(".show1").val()))
		PriceChange()
	});
	$(".jian1").click(function(){
		var Price = $(this).parents("span").siblings(".Pri").text().slice(1);
		if(parseInt($(this).siblings(".show1").val())<=1){
			$(this).siblings(".show1").val(1)
		}else{
			$(this).siblings(".show1").val(parseInt($(this).siblings(".show1").val())-1)
		}
		$(this).parents("span").siblings(".xiaoji").text("￥"+ Price*parseInt($(this).siblings(".show1").val()))
		PriceChange()
	})
	PriceChange()
	//价格封装函数
	function PriceChange(){
		var PRICE = 0
		//console.log($("._checked").length)
		for(var i=0;i<$("._checked").length;i++){
			if($("._checked").eq(i).prop("checked")){
				PRICE += parseFloat($(".xiaoji").eq(i).text().slice(1))
			}
			//console.log(PRICE.toFixed(2))
		}
		return $(".zongjia").text(PRICE.toFixed(2))
	}
	//console.log($(".xiaoji").eq(0).text().slice(1))
	//console.log($("._checked").prop("checked"))
	$(".removeLi").click(function(){
		//var t = $(this).parents("span").siblings().find("img").attr("src") 
		if(confirm("确定要删除此商品么")){
			var imgSrc = $(this).parents("span").siblings().find("img").attr("src") 
			//var i = $(this).parents("span").siblings().find("img").attr("src").slice(0,$(this).parents("span").siblings().find("img").attr("src").length-1) 
			//console.log(imgSrc,i)
			$.cookie(imgSrc,"",{expires:-1,path:'/'})
			//console.log($(this).parents("li"))
			$(this).parents("li").remove()
			PriceChange();
		}
	})

	/*$("body").on("click",".listAdd",function(){
			var listJSON = {
				"listPrice":$(this).parents(".listJiaru").siblings().find(".listPrice").text(),
				"listTitle":$(this).parents().siblings(".listTit").text(),
				"listImg":$(this).parents(".list-Li").find("a").find("img").attr("src")
			}
			var listJSON = JSON.stringify(listJSON)
			$.cookie(listJSON.listImg,listJSON,{"expires":7,path:"/"})
		});
		console.log($.cookie(listJSON.listImg))*/
})