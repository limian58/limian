<?php
    $user = $_POST["username"];
	$pass = $_POST["password"];
	if($user!="" && $pass!=""){
	    $conn = mysql_connect("","root");
	    mysql_select_db("mysql1");//使用数据库mysql1
	    $sql = "select username from table1 where username = $user";
	    //$sql = "select name,password from table1";//查询数据库中的用户名密码
	    $result = mysql_query($sql);//执行sql语句 
	    $num = mysql_num_rows($result);
	    if ($num>0) {
	   		// 输出每行数据
	   		echo "1";
		}
		else {
			echo "0";
		}          	
    }
?>