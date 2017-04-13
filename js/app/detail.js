$(function(){
	var str = location.search;
	console.log(str)
	var _str = str.split("=")
	var attr = _str[1]
	//console.log(attr)
	$.getJSON("datail.json").done(function(data){
		//console.log(data)
		var _data = data[attr]
		var html = template("detailMB",_data)
		$(".listView").append(html)
		$(".addBtn").click(function(){
			if($.cookie("cart")){
				var obj = JSON.parse($.cookie("cart"))
			}else{
				var obj = {}
			}
			obj[attr] = ++obj[attr]||1
			//console.log(obj)
			var objToStr = JSON.stringify(obj)
			//console.log(obj)
			//console.log($.cookie("cart"))
			$.cookie("cart",objToStr,{"expires":7,"path":"/"})
		})
		$(".midView").mouseenter(function(){
			$(".smaView").show();
			$(".bigView").show();
			$(document).mousemove(function(e){
				e=e || window.event
				//console.log($(".midView").offset().top)
				//console.log($(window).scrollTop())
				var left = e.clientX - $(".midImg").offset().left - $(".smaView").width()/2;
				var top = e.clientY - $(".midImg").offset().top - $(".smaView").height()/2+$(window).scrollTop();
				if(left<0){left=0}
				if(top<0){top=0}
				if(left+$(".smaView").width()>=$(".midImg").width()){
					left=$(".midImg").width()- $(".smaView").width()
				}
				if(top+$(".smaView").height()>=$(".midImg").height()){
					top=$(".midImg").height() - $(".smaView").height()
				}
				$(".smaView").css({"left":left+"px","top":top+"px"})
				var _left = $(".smaView").position().left*$(".bigImg").width()/$(".midImg").width();
				var _top = $(".smaView").position().top*$(".bigImg").height()/$(".midImg").height();
				$(".bigImg").css({"left":-_left+"px","top":-_top+"px"})
			})
		})
		$(".midView").mouseleave(function(){
			$(".smaView").hide();
			$(".bigView").hide();
		})
		$(".datail-ul01 li").mouseover(function(){
			$(this).css({"border":"1px solid red"}).siblings().css({"border":"1px solid #fff"})
			$(".midImg").attr('src',$(this).find('img').attr('src')) 
			$(".bigImg").attr('src',$(this).find('img').attr('src')) 
		})
		$(".teSmallImg").mouseover(function(){
			$(this).css({"border":"1px solid red"}).siblings().css({"border":"1px solid #fff"})
			$(".midImg").attr('src',$(this).attr('src')) 
			$(".bigImg").attr('src',$(this).attr('src'))
		});
		
		//抛物线
		var offset = $("#end").offset()
		$(".listView").on("click",".addBtn01",function(e){
			e=e || window.event
			var addcar = $(this)
			var img = $(this).parents(".datail-right").siblings(".datail-left").find(".midImg").attr("src")
			var flyer = $('<img class="u-flyer" src="'+img+'">');
			flyer.fly({
				start : {
					left:e.clientX,
					top :e.clientY
				},
				end : {
					left:offset.left,
					top:offset.top,
					width:0,
					height:0
				},
				onEnd: function(){
					$("#msg").show().animate({width: '350'}, 200).fadeOut(3000);
					addcar.css("cursor","default").removeClass('orange').unbind('click');
					this.destory();
				}
			})
		})
	})
})
