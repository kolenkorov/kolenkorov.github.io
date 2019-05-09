$(function(){
	let height = $('#home .container').height();
	$(window).scroll(function() {
		if($(this).scrollTop() >= 25) {
		$('#home .container').addClass('fixed');
		$('#home .content').css('padding-top', height);
		$('.logo_1').css('display', 'none');
		$('.logo_2').css('display', 'block');
	}
		else{
		$('#home .container').removeClass('fixed');
		$('#home .content').css('padding-top', '0');
		$('.logo_1').css('display', 'block');
		$('.logo_2').css('display', 'none');
	}
	});
});