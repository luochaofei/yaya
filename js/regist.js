function $(id){
        return document.getElementById(id);
}
window.onload = function(){
    $("mobliePhone").onclick = function(){
        $("mobliePhone").parentNode.style.borderColor = "#f70";
        $("mobliePhone").style.border = "none";
    }
    $("password").onclick = function(){
        $("password").parentNode.style.borderColor = "#f70";
    }
     $("repassword").onclick = function(){
        $("repassword").parentNode.style.borderColor = "#f70";
    }
    $("mobliePhone").onblur = function(){
        //1、定义规则：
        //手机号码的规则，1开头，第二位是（3,4,5,7,8,9），一共十一位纯数字
        var regObj=/^1(3|4|5|7|8|9)\d{9}$/;
        if(regObj.test(this.value)){
            $("mobliePhoneMsg").innerHTML = "";
            $("mobliePhoneMsg").style.display="none";
        }else{
            $("mobliePhoneMsg").style.display="inline-block";
            $("mobliePhoneMsg").innerHTML = "请输入正确的手机号!";
        }
        var oAd = document.getElementById('mobliePhoneMsg');
        setTimeout(function () {
            oAd.style.display = 'none';
        }, 5000);
    }
    //1、定义规则：
    //6位数字
    $("password").onblur = function() {
        var regObj = /[a-zA-Z0-9]{6}$/;
        if(regObj.test(this.value)){
            $("passMsg").innerHTML = "";
            $("passMsg").style.display="none";
        }else{
            $("passMsg").style.display="inline-block";
            $("passMsg").innerHTML = "请输入正确的密码!";
        }
        var oAd = document.getElementById('passMsg');
        setTimeout(function () {
            oAd.style.display = 'none';
        }, 5000);
    }
    $("repassword").onblur=function(){
        if( $("password").value== $("repassword").value){
            $("repassMsg").innerHTML = "";
            $("repassMsg").style.display="none";
        }else{
            $("repassMsg").style.display="inline-block";
            $("repassMsg").innerHTML = "输入密码不一致!";
        }
        var oAd = document.getElementById('repassMsg');
        setTimeout(function () {
            oAd.style.display = 'none';
        }, 5000);
    }
}