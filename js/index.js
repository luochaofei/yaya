var arr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg",];
var ord = 0;//代表当前图片的序号，从0开始。
var myTimer = null;

function initUI(){
	$("#banner li:first").css({"backgroundColor":"#4FB99F"});
}

function initEvent(){
	$("#banner").mouseenter(function (){
		stopPlay();
	});

	$("#banner").mouseleave(function(){
		autoPlay();
	});

	$("#banner li").click(function (){
		goImg($("#banner li").index(this));
	});

	$("#leftArrow").click(function(){
		let transord = ord-1;
		transord = transord<0?arr.length-1:transord;
		goImg(transord);
	});

	$("#rightArrow").click(function(){
		let transord = ord+1;
		transord = transord>arr.length-1?0:transord;
		goImg(transord);
	});
}

//1、自动播放
function autoPlay(){
	myTimer = setInterval(function(){
		//一、改变数据
		//1、记录当前序号（淡出的图片序号）
		let outOrd = ord;
		//2、改变要显示的图片的序号（淡出图片序号加一）
		ord++
		if(ord>arr.length-1){
			ord=0;
		}
		//二、改变外观
		let $img = $("#banner img");
		//1、淡入淡出效果
		//让一张(outOrd)淡出 当前消失
		$img.eq(outOrd).animate({"opacity":0},2000);
		//让一张(ord)淡入下一张图片显示
		$img.eq(ord).animate({"opacity":1},2000);
		//2、改变按钮的颜色
		$("#banner li").eq(ord).css({"backgroundColor":"#4FB99F"}).siblings().css({"backgroundColor":"#fff"});
	},3000);
}

//2、停止播放
function stopPlay(){
	window.clearInterval(myTimer);
}

//3、跳转到指定的图片
function goImg(transOrd){
	//一、改变数据
	//1、记录当前序号（淡出的图片序号）
	let outOrd = ord;
	//2、改变要显示的图片的序号（传入的图片序号）
	ord=transOrd;
	if(ord>arr.length-1){
		ord=0;
	}
	//二、改变外观
	let $img = $("#banner img");
	//1、淡入淡出效果
	//让一张(outOrd)淡出当前消失
	$img.eq(outOrd).animate({"opacity":0},2000);
	//让一张(ord)淡入下一张图片显示
	$img.eq(ord).animate({"opacity":1},2000);
	//2、改变按钮的颜色
	$("#banner li").eq(ord).css({"backgroundColor":"#4FB99F"}).siblings().css({"background":"#fff"});
}

$(function(){
	//1、初始化界面
	initUI();
	//2、绑定事件
	initEvent();
	//3、自动播放
	autoPlay();

	$(".three_news .title a:first").hover(function(){
		$(".three_news .title a:last").removeClass("on");
		$(this).addClass("on");
		$(".three_news ul:first").css("display","block");
		$(".three_news ul:last").css("display","none");
	});
	$(".three_news .title a:last").hover(function(){
		$(".three_news .title a:first").removeClass("on");
		$(this).addClass("on");
		$(".three_news ul:first").css("display","none");
		$(".three_news ul:last").css("display","block");
	});
});

$(".tag ul li:first").click(function(){
		$(".tag ul li:last").removeClass("on");
		$(this).addClass("on");
		$(".userLogin:first").css("display","block");
		$(".userLogin:last").css("display","none");
	});
	$(".tag ul li:last").click(function(){
		$(".tag ul li:first").removeClass("on");
		$(this).addClass("on");
		$(".userLogin:first").css("display","none");
		$(".userLogin:last").css("display","block");
	});

//顶部悬浮


// 无缝滚动
