<?php
/**
 * Created by PhpStorm.
 * User: Evil
 * Date: 2017/3/22
 * Time: 下午3:38
 */


/*
create database UserCenter DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
use UserCenter;
create table personal
(
    ID int(11) not null auto_increment,
    p_account char(50) not null comment '账号',
    p_secret char(128) not null comment '密码',
    p_mobile char(11) not null default '' comment '手机号',
    primary key (ID)
)engine=myisam;
*/



    function doPost(){
        if($_SESSION["user"]==null) {
            if ($_POST["user"] != null && isset($_POST["user"]) && $_POST["pwd"] != null && isset($_POST["pwd"])) {
                $conn = new mysqli("127.0.0.1", "root", "", "UserCenter");
                mysqli_query($conn,"set character set 'utf8'");//读库
                mysqli_query($conn,'set names utf8');//写库
                $rs = $conn->query("select * from personal where p_account='".$_POST["user"]."' and p_secret='".$_POST["pwd"]."';");
                while ($row = $rs->fetch_assoc()) {
                    $_SESSION["user"] = $row["p_account"];
                }
                $rs->close();
                $conn->close();
            }
        }
        echo $_SESSION["user"];
    }
    doPost();
?>



