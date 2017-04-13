<?php
//注册验证
	$user = $_POST["username"];
	$pass = $_POST["passWord"];
	if($user!=""&&$pass!=""){
		$conn = mysql_connect("","root");//连接数据库
		mysql_select_db("mysql1");//使用数据库user
		$sql = "select username from table1 where username = $user";
		//查询数据库中是name中的$user [==];
		$result = mysql_query($sql);//获取sql返回的$sql（查询内容中的）中的数据
		$num = mysql_num_rows($result);//判读结果集数量
		if($num>0){
			//查看用户是否存在
			echo "1";
		}
		else{
			//如果没有插入数据
			$sql_insert = "insert into table1(username,password) values ($user,$pass)";
			$res_insert = mysql_query($sql_insert);//查询数据是否已经成功插入
			if($res_insert){
				echo "0";
			}
			else{
				echo "系统繁忙，请稍后！";
			}
		}
	}
?>