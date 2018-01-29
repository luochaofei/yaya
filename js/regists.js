function $(id){
        return document.getElementById(id);
}
window.onload = function(){
 //    $("#userId").onblur = function(){
	// 	if(check("isUserName",this.value)){
	// 		$("#userMsg").innerHTML = "√";
	// 	}else{
	// 		$("#userMsg").innerHTML = "×";
	// 	}
	// }
    //1、定义规则：
    //6位数字
    $("password").onblur = function() {
        var regObj = /[a-zA-Z0-9]{6}$/;
        if(regObj.test(this.value)){
            $("passMsg").innerHTML = "";
        }else{
            $("passMsg").innerHTML = "请输入正确的密码!";
        }
    }
}