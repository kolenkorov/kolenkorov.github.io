$(document).ready(function(){
	$(window).scroll(function() {
		if($(this).scrollTop() >= 65 && ($(window).width() >= 851 || $(window).resize() >=850)) {
			$('.main-header').addClass('main-header--fixed');
		}

		else{
			$('.main-header').removeClass('main-header--fixed');
		}

		if($(window).width() <= 850 || $(window).resize() <= 850){
			$('.main-header').addClass('main-header--fixed');
		}
	});
});