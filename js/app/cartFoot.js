$(function(){
	//下边的浏览历史
	$.getJSON("carthos.json").done(function(data){
		//console.log(data)
		var html=""
		html=template("cartHos",data)
		$(".chong2").html(html)
		
		$(".CTop div").mouseenter(function(){
			var index = $(this).index();
			$(this).css({"background":"#fff","color":"red"}).siblings().css({"background":"#f9f9f9","color":"#000"})
			//$(".CTop div").eq(0).css({"background":"#fff","color":"red"})
			//console.log(index)
			//console.log($(".chong2").find(".Chang_ul1"))
			$(".chong2").find(".Chang_ul1").eq(index).show().siblings().hide()
		})
	})
	
	//footer
	$.getJSON("well.json").done(function(data){
		var g = ""
		g = template("footBottom1",data)
		$(".foot_ul").html(g)
		var footerLeft = ""
		footerLeft = template("footer_left",data)
		$(".footer_left").html(footerLeft)
		var footer_right = ""
		footer_right = template("footer_right",data)
		$(".footer_right").html(footer_right)
	})
	$(".rsItemName").hover(function(){
		$(this).find(".ShoW").css("display","block")
	},function(){
		$(this).find(".ShoW").css("display","none")
	})
	
	$(".backTop-i").click(function(){
		$("body,html").stop().animate({scrollTop:0},1000)
		
	});
})
