$(function(){
	$(".loI").click(function(){
		$(".saoma").css("display","block")
		$(".loCenter").css("display","none")
	})
	$(".sTi").click(function(){		
		$(".loCenter").css("display","block")
		$(".saoma").css("display","none")		
	})
	$(".Cimg1").mouseenter(function(){
		$(this).stop().animate({left:"20px"})
		$(".Cimg2").stop().show(1000)
	})
	$(".Cimg1").mouseleave(function(){
		$(this).stop().animate({left:"100px"})
		$(".Cimg2").stop().hide(500)
	})
	$(".formR input").each(function(index){
		$(this).focus(function(){
			$(this).parent().find(".judge").css({"display":"none"})
			$(this).parent().find(".uSpan").css({"display":"none"})
			$(".Form").css({"border":"1px solid #000"})
		})
		$(this).blur(function(){
			if($(this).val()!=""){
				$(this).parent().find(".judge").css({"display":"none"})
				$(this).parent().find(".uSpan").css({"display":"none"})
				$(".Form").css({"border":"1px solid #000"})
			}
			if($(this).val()==""){
				$(this).parent().find(".judge").css({"display":"block"})
				$(this).parent().find(".uSpan").css({"display":"block"})
				$(".Form").css({"border":"1px solid red"})
			}else{
				$(this).parent().find(".judge").css({"display":"none"})
				$(this).parent().find(".uSpan").css({"display":"none"})
				$(".Form").css({"border":"1px solid #000"})
			}
		})
	});
	$("#login").click(function(){
		ajaxRequest("post", "PHP1/login.php", true, {
            "user": $("#uname").val(),
            "pwd": $("#pwd").val()
        }, function (data) {
            data=data.replace(/\s+/g,"");
            if(data!="0") {
            	window.location.href = "index.html";
            }else{
                alert("用户名或者密码错误！！！请输入正确的用户名或者密码!!!");
            }
        })
		/*var user = $("#uname").val();
		console.log(user)
		var pwd = $("#pwd").val();
		if($("#check").is(':checked')){
			$.cookie("zhanghao",user,{expires:7,path:"/"});
		};
		$.ajax({
			type: "post",
			url: "php/login.php",
			async: true,
			data: { username: user, password: pwd },
			success: function(data) {
				console.log(data)
				var _data = data;
				console.log(_data[0])
				if(data[0] != "0") {
					window.location.href = "http://localhost/index.html";
				} else {
					alert("用户名或者密码错误！！！请输入正确的用户名或者密码!!!")
				}
			}
		});*/
	 	//alert("sss")
	})
})
