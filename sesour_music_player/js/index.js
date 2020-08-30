$(document).ready(function(){
	changeWindowSize();
});

$(window).resize(function() {
   changeWindowSize();
});

function changeWindowSize(){
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var documentHeight = $("#content_wrapper").height();
	//alert(windowHeight+" "+documentHeight);
		
	if(windowHeight>=documentHeight){ // PC 본문 높이보다 윈도우 높이가 크면
		$("#content_wrapper").width(windowWidth);
		$("#content_wrapper").height(windowHeight);
	}else{ // Mobile
		$("#content_wrapper").width(windowWidth);
	}
}