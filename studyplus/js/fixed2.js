$(document).ready(function(){
	$(window).scroll(function() {
		if($(this).scrollTop() >= 230) {
			$('.header__navbar').addClass('header__navbar--fixed');
		}

		else{
			$('.header__navbar').removeClass('header__navbar--fixed');
		}
	});
});