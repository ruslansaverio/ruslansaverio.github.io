// параллакс эффект
$(window).scroll(function(){
	$('.screenOne').css({'top': -$(window).scrollTop()/3});
});
// параллакс эффект выше

$(document).ready(function(){
	$(".line3, .upArrow").on("click","a", function (event) {

		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;		

		$('body,html').animate({scrollTop: top}, 1000);
	});
});

$(document).ready(function(){
	$("p.extend").hide();
	$("a.click").click(function(e){
			$(e.target).parent().children("p.extend").slideToggle(400);
	});
});

// Скрипт скрытия элементов
window.onscroll = function myImgHide() {
	document.getElementById('myEdgeHide').style.display = (window.pageYOffset < '1200' ? 'block' : 'block');
	document.getElementById('myEdgeHide').style.display = (window.pageYOffset > '1200' ? 'block' : 'none');
	document.getElementById('screen1').style.display = (window.pageYOffset < '1200' ? 'block' : 'none');
	document.getElementById('up').style.display = (window.pageYOffset < '500' ? 'block' : 'block');
	document.getElementById('up').style.display = (window.pageYOffset > '500' ? 'block' : 'none');
};
// Скрипт скрытия элементов выше