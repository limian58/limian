$(function(){
	var index=1
	var timer=""
	$(".bannerNav div").eq(0).css({"background":"red","opacity":"0.5"})
	clearInterval(timer)
	 timer = setInterval(change,2000)
	$(".bigUl li").eq(1).show();
	function change(){
		if(index>7){
			index=0
		}
		//console.log(index)
		$(".bigUl li").eq(index).fadeIn().siblings().fadeOut()
		$(".bannerNav div").eq(index).css({"background":"red","opacity":"0.5"}).siblings().css({"background":"#000","opacity":"0.5"})
		//console.log(index)
		index++
		
	}
	$(".bannerNav div").click(function(){
	    index = $(this).index()
		change()
		clearInterval(timer)
		timer = setInterval(change,2000)
	})
	
	/*选项卡*/
	$.getJSON("js/json/data.json").done(function(data){
		//console.log(data)
		var html =""
		html=template("test",data)
		$(".Goods-Ul").html(html)
	})
	$.getJSON("js/json/data.json").done(function(data){
		//console.log(data)
		var html =""
		html=template("test01",data)
		$(".show").html(html)
	})
	
	$(".Goods-Ul").on("mouseenter","li",function(){
		$(this).css({"border-top":"1px solid red","background":"#fff"}).siblings().css({"border-top":"1px solid #fff","background":"#f9f9f9"})
		$(this).find("a").css("color","red")//.siblings().find("a").css({"color":"#fff"})
		var index=$(this).index();
		console.log(index)
		$(".show-n").eq(index).show().siblings().hide()
	})
	$(".Goods-Ul").on("mouseleave","li",function(){
		//$(this).css({"border-top":"1px solid #999","background":"#f9f9f9"})
		$(this).find("a").css("color","#000")
	})
	
	$(".Goods-right-Ul li").mouseenter(function(){
		$(this).css({"border-top":"1px solid red","background":"#fff"})
		$(this).find("a").css("color","red")
		var index=$(this).index();
		console.log(index)
		$(".n_0").find(".jj").eq(index).show().siblings().hide()
	})
	$(".Goods-right-Ul").on("mouseleave","li",function(){
		$(this).css({"border-top":"1px solid #999","background":"#f9f9f9"}).siblings().css({"border-top":"1px solid #fff","background":"#fff"})
		$(this).find("a").css("color","#000")
	})
	 
	 var k=1;
	 var ti=""
	 var flag=true;
	 clearInterval(ti)
	 $(".lunbo-Ul li").css({left:-$(".lunbo-Ul li").eq(0).width()})
	 ti = setInterval(fn,2000)
	 $(".lunbo-Nav-1 div").eq(0).css({"background":"red"})
	function fn(){			
		
		if(k==4){
				k=1
				$(".lunbo-Ul").css({"left":0}) 
				//$(".lunbo-Ul li").css({left:-$(".lunbo-Ul li").eq(0).width()})
			}
		
		$(".lunbo-Ul").stop().animate({left:-$(".lunbo-Ul li").eq(0).width()*k},600,function(){
			
		})
		$(".lunbo-Nav-1 div").eq(k>=3?0:k).css({"background":"red"}).siblings().css({"background":"#DB7093"})
		//console.log(k)
		k++
		
	}
	$(".lunbo-Nav-1 div").click(function(){		
		var k = $(this).index()+1;
		clearInterval(ti)
		fn()
		ti = setInterval(fn,2000)
	})
	
	var lunbo1=1;
	var timess = setInterval(fnn,2000);
	function fnn(){
		lunbo1++
		if(lunbo1==4){
			lunbo1=1;
			$(".lunbo1-Ul").css({left:0})
		}
		$(".lunbo1-Ul").stop().animate({left:-$(".lunbo-Ul1 li").eq(0).width()*lunbo1},600);
		
	}
	
	
	
	
	
	
	
	
	
	$.getJSON("new_json_list.json").done(function(data){
		console.log(data)
		var html=""
		html = template("raceList1",data)
		$(".receBoxs").html(html)
	})
	
	
	
	
	
	
	
	
	$(".rightNavBox").on("click","span",function(){
		var index = $(this).index();
		$(this).css({"background":"red"}).siblings().css({"background":"#cccccc"})
		//console.log($(".receBoxs").find("raceList").width())
		$(".receBoxs").stop().animate({left:-index*$(".receBoxs").find(".raceList").eq(0).width()})
	})
	
	
	/*左右切换*/
	$(".raceLeft").click(function(){
		//console.log($(".receBoxs").position().left)
		if($(".receBoxs").position().left>=0){
			$(".receBoxs").css({left:-3300})
		}
		$(".receBoxs").stop().animate({
			"left":"+=1100"
		})
	})
	$(".raceRight").click(function(){
		console.log($(".receBoxs").position().left)
		if($(".receBoxs").position().left<=-2200){
			$(".receBoxs").css({left:0})
		}
		$(".receBoxs").stop().animate({
			"left":"-=1100"
		})
	})
	
	
	
	
	$.getJSON("Floor1.json").done(function(data){
		
		var html=""
		html = template("Floor-center",data)
		$(".Floor-center").html(html)
	})
	
	//楼层下面的选项卡
	$("body").on("mouseenter",".spa",function(){
		index = $(this).index();
		//console.log(index)
		$(this).css({"background":"red"}).siblings().css({"background":"#fff"})
		$(".Floor_img").eq(index).show().siblings("div").hide()
	})
	$("body").on("mouseenter",".spa2",function(){
		index = $(this).index();
		//console.log(index)
		$(".Floor_img2").eq(index).show().siblings("div").hide()
	})
	
	//楼层的轮播图	
	var floor1 = 0	
	var l = setInterval(floo,2000)
	function floo(){
		floor1++	
		$(".smallUl").find("em").eq(floor1>=3?0:floor1).css({"background":"red"}).siblings().css({"background":"#fff"})
		//console.log(floor1)
		$("#Floor1_ul").stop().animate({left:-floor1*210},600,function(){
			if(floor1>=3){
				floor1=0
				$("#Floor1_ul").css({left:0})
			}
		})
	};
	//楼层轮播图下面的Nav
	$("body").on("mouseenter","em",function(){
		
	})
	
	
	var floor2 = 0	
	var l2 = setInterval(floo2,2000)
	function floo2(){
		floor2++	
		$("#Floor2_Ul").stop().animate({left:-floor2*210},600,function(){
			if(floor2>=3){
				floor2=0
				$("#Floor2_Ul").css({left:0})
			}
		})
	};
	
	var floor3 = 0	
	var l3 = setInterval(floo3,2000)
	function floo3(){
		floor3++		
		$("#Floor3_Ul").stop().animate({left:-floor3*210},600,function(){
			if(floor3>=3){
				floor3=0
				$("#Floor3_Ul").css({left:0})
			}
		})
	}
	
	var floor4 = 0	
	var l4 = setInterval(floo4,2000)
	function floo4(){
		floor4++		
		$("#Floor4_Ul").stop().animate({left:-floor4*210},600,function(){
			if(floor4>=3){
				floor4=0
				$("#Floor4_Ul").css({left:0})
			}
		})
	}
	
	var floor5 = 0	
	var l5 = setInterval(floo5,2000)
	function floo5(){
		floor5++		
		$("#Floor5_Ul").stop().animate({left:-floor5*210},600,function(){
			if(floor5>=3){
				floor5=0
				$("#Floor5_Ul").css({left:0})
			}
		})
	}
	
	
	
	$(window).scroll(function(){
		var curTop = $(this).scrollTop()
		if(curTop>1300){
			$(".fixDiv").fadeIn(1000)
		}else{
			$(".fixDiv").fadeOut(1000)
		}
		$(".Floor-center .floor1").each(function(){
			var _index = $(this).index();
			//console.log(index)
			var _curTop = $(this).offset().top + $(this).height()/2
			var _Top = $(window).scrollTop();
			//console.log(_Top+"----"+_curTop)
			if(_curTop>_Top){
				$(".fixDiv").eq(_index).find("span").addClass("active")
				$(".fixDiv").eq(_index).siblings().find("span").removeClass("active")
				return false;				
			}
		})
	})
	$(".fixDiv div").click(function(){
		var index = $(this).index();
		var Top = $(".Floor-center .floor1").eq(index).offset().top;
		$("body,html").stop().animate({scrollTop:Top},700)
	})
	$(".floorBack").click(function(){
		
		$("body,html").stop().animate({scrollTop:0},1000)
	})
	
	
	
	/*hover楼层侧边栏*/
	var arr = ["白酒馆","葡萄酒馆","洋酒馆","养生","食品"]
	var arr1 = ["1F","2F","3F","4F","5F"]
	$(".fixDiv").find("div").hover(function(){
		var index = $(this).index()
		$(this).find("span").css({"display":"none"})
		$(this).find("a:nth-of-type(1)").text(arr[index])
		$(this).find("a:nth-of-type(2)").css("display","none")
		$(this).find("a:nth-of-type(1)").css({"display":"block"})
		.stop().animate({"width":"100px"},500)
	},function(){
		$(this).find("a:nth-of-type(2)").css("display","block")
		$(this).find("a:nth-of-type(1)").css({"display":"none"})
		.stop().animate({"width":"30px"},500)
		$(this).find("span").css({"display":"block"})
	})
	
	
	$.getJSON("brand.json").done(function(data){
		//console.log(data)
		var html = ""
		html = template("brande",data);
		$(".overfl").html(html);
	})
	
	$(".brand_ul").on("mouseenter","li",function(){
		$(this).css("color","red")
		var index = $(this).index()
		//console.log(index)
		$("body").find(".overfl").stop().animate({left:-index*1100})
		$(".titleSlider").stop().animate({left:index*90})
	})
	
	$(".brand_ul").on("mouseleave","li",function(){
		$(this).css("color","#000")
		var index = $(this).index()		
	})	
	$("body").on("mouseenter",".Img01",function(){
		$(this).stop().animate({left:-100},500)		
	})	
	$("body").on("mouseleave",".Img01",function(){
		$(this).stop().animate({left:0},500)		
	})
	
	$.getJSON("well.json").done(function(data){
		//console.log(data)
		var t = ""
		t = template("well",data)
		$(".well").html(t)
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
	
	
	$.getJSON("arc.json").done(function(data){
		//console.log(data)
		var html=""
		html = template("arc",data)
		$(".arc-div").html(html)
		var html0 = ""
		html0 = template("dvv",data)
		$(".arc_d").html(html0)
		$("#arc-div li").each(function(index){
			//console.log(index)
			//console.log(this)
			$(this).hover(function(){
				$(".arcB").eq(index).show().siblings(".arcB").hide()
				$(".arc_d").show()
			},function(){
				//alert("ssss")
				$(".arc_d").mouseleave(function(){
					//$("this").eq(index).hide()
					$(".arc_d").hide()
				})
			})
		})
	})
})

