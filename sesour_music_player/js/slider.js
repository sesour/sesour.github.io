var slide_list;
var slide_list_count;
var slide_current_position = 0;
var interval = 2000;

$(document).ready(function(){	
	setTimeout(slide_next, interval);
});

function slide_next(){
	var i;
    var slides = $(".slide-container div");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    ++slide_current_position;
    if (slide_current_position > slides.length){
		{slide_current_position = 1}
	}
    slides[slide_current_position-1].style.display = "block";
    setTimeout(slide_next, interval);
}

function slide_next_animation_sliding() {
	slide_list = $(".sliding-container ul");
	slide_list_count = slide_list.children().length;
	
	if(slide_list_count>(slide_current_position+1)){
		slide_list.animate({
			left:'-='+665*(slide_current_position+1)+'px'
		});
		++slide_current_position;
	}else{
		slide_list.animate({
			left:'0px'
		});
		slide_current_position = 0;
	}
	
	setTimeout(slide_next_animation_sliding, interval);	
}