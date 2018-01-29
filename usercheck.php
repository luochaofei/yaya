<?php
    header("content-type:text/html;charset=utf-8");
    $userId=$_GET['username'];
    $con=mysql_connect("localhost","root","root");
    if(!$con){
        echo "-1";
    }else{
        mysql_select_db("yaya",$con);
        $sqlStr="select * from vip where username='".$username."'";
        $result=mysql_query($sqlStr,$con);
        mysql_close($con);
        if(mysql_num_rows($result)==1){
            echo "1";
        }else{
            echo "0";
        }
    }
?>