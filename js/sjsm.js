$(".filterList .filterList_R .brandSpan a").hover(function(){
	$(".filterList .filterList_R .brandSpan a em").css("display","block");
	$(".filterList .filterList_R .brandSpan a i").css("display","block");
	// $(".three_news ul:first").css("display","block");
	// $(".three_news ul:last").css("display","none");
});
$(".three_news .title a:last").hover(function(){
	$(".three_news .title a:first").removeClass("on");
	$(this).addClass("on");
	$(".three_news ul:first").css("display","none");
	$(".three_news ul:last").css("display","block");
});