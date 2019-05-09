/*Owl Carousel */

$("#presentation, #presentation-v").owlCarousel({
	loop: true,
	slideBy: 4,
	dots: false,
	nav: true,
	navText: ['<i class="flaticon-play-arrow"></i> <span>пред. страница</span>','<span>след. страница</span> <i class="flaticon-play-arrow"></i>'],
	items: 1,
});


/*Owl Carousel end*/

let len =$('.main__sections-cover').children('.main__sections-item').length;

if(len <= 4) {
	$('.main__sections-cover').addClass('few');
} else if(len > 7) {
	$('.main__sections-cover').addClass('much').addClass('owl-carousel');
	$(".much").owlCarousel({
		loop:true,
	    margin:0,
	    nav:true,
	    navText: ['<i class="flaticon-play-arrow"></i>','<i class="flaticon-play-arrow"></i>'],
	    dots: false,
	    items: 7,
	});
}

let color = $('.main__sections-item:last').css("background-color");


if(color == 'rgb(230, 225, 216)') {
	$('.sections_bg').css('background-color', '#e2ddd2');
} else if(color == 'rgb(233, 229, 221)') {
	$('.sections_bg').css('background-color', '#e6e1d8');
} else if(color == 'rgb(237, 233, 227)') {
	$('.sections_bg').css('background-color', '#e9e5dd');
} else if(color == 'rgb(241, 238, 233)') {
	$('.sections_bg').css('background-color', '#ede9e3');
} else if(color == 'rgb(244, 242, 238)') {
	$('.sections_bg').css('background-color', '#f1eee9');
} else {
	$('.sections_bg').css('background-color', '#e2ddd2');
}



/* Magnific popup */

$(document).ready(function(){
	$('.content-grid__items a').magnificPopup({
		type : 'image',

		 gallery: {
			enabled: true
		},
	});


	$('.reg-open').magnificPopup({
		items: [
			{
				src: '.reg__popup',
				type: 'inline'
			}
		],
	});

	$('.login-open').magnificPopup({
		items: [
			{
				src: '.login__popup',
				type: 'inline'
			}
		],
	});

	$('.restore-pass').magnificPopup({
		items: [
			{
				src: '.password__popup',
				type: 'inline'
			}
		],
	});

	$('.presentation-open').magnificPopup({
		items: [
			{
				src: '.presentation__popup',
				type: 'inline'
			}
		],
	});

	$('.test-open').magnificPopup({
		items: [
			{
				src: '.test__popup',
				type: 'inline'
			}
		],
	});
});

/* Magnific popup */
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qT3dsIENhcm91c2VsICovXHJcblxyXG4kKFwiI3ByZXNlbnRhdGlvbiwgI3ByZXNlbnRhdGlvbi12XCIpLm93bENhcm91c2VsKHtcclxuXHRsb29wOiB0cnVlLFxyXG5cdHNsaWRlQnk6IDQsXHJcblx0ZG90czogZmFsc2UsXHJcblx0bmF2OiB0cnVlLFxyXG5cdG5hdlRleHQ6IFsnPGkgY2xhc3M9XCJmbGF0aWNvbi1wbGF5LWFycm93XCI+PC9pPiA8c3Bhbj7Qv9GA0LXQtC4g0YHRgtGA0LDQvdC40YbQsDwvc3Bhbj4nLCc8c3Bhbj7RgdC70LXQtC4g0YHRgtGA0LDQvdC40YbQsDwvc3Bhbj4gPGkgY2xhc3M9XCJmbGF0aWNvbi1wbGF5LWFycm93XCI+PC9pPiddLFxyXG5cdGl0ZW1zOiAxLFxyXG59KTtcclxuXHJcblxyXG4vKk93bCBDYXJvdXNlbCBlbmQqL1xyXG5cclxubGV0IGxlbiA9JCgnLm1haW5fX3NlY3Rpb25zLWNvdmVyJykuY2hpbGRyZW4oJy5tYWluX19zZWN0aW9ucy1pdGVtJykubGVuZ3RoO1xyXG5cclxuaWYobGVuIDw9IDQpIHtcclxuXHQkKCcubWFpbl9fc2VjdGlvbnMtY292ZXInKS5hZGRDbGFzcygnZmV3Jyk7XHJcbn0gZWxzZSBpZihsZW4gPiA3KSB7XHJcblx0JCgnLm1haW5fX3NlY3Rpb25zLWNvdmVyJykuYWRkQ2xhc3MoJ211Y2gnKS5hZGRDbGFzcygnb3dsLWNhcm91c2VsJyk7XHJcblx0JChcIi5tdWNoXCIpLm93bENhcm91c2VsKHtcclxuXHRcdGxvb3A6dHJ1ZSxcclxuXHQgICAgbWFyZ2luOjAsXHJcblx0ICAgIG5hdjp0cnVlLFxyXG5cdCAgICBuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmxhdGljb24tcGxheS1hcnJvd1wiPjwvaT4nLCc8aSBjbGFzcz1cImZsYXRpY29uLXBsYXktYXJyb3dcIj48L2k+J10sXHJcblx0ICAgIGRvdHM6IGZhbHNlLFxyXG5cdCAgICBpdGVtczogNyxcclxuXHR9KTtcclxufVxyXG5cclxubGV0IGNvbG9yID0gJCgnLm1haW5fX3NlY3Rpb25zLWl0ZW06bGFzdCcpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIik7XHJcblxyXG5cclxuaWYoY29sb3IgPT0gJ3JnYigyMzAsIDIyNSwgMjE2KScpIHtcclxuXHQkKCcuc2VjdGlvbnNfYmcnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2UyZGRkMicpO1xyXG59IGVsc2UgaWYoY29sb3IgPT0gJ3JnYigyMzMsIDIyOSwgMjIxKScpIHtcclxuXHQkKCcuc2VjdGlvbnNfYmcnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2U2ZTFkOCcpO1xyXG59IGVsc2UgaWYoY29sb3IgPT0gJ3JnYigyMzcsIDIzMywgMjI3KScpIHtcclxuXHQkKCcuc2VjdGlvbnNfYmcnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2U5ZTVkZCcpO1xyXG59IGVsc2UgaWYoY29sb3IgPT0gJ3JnYigyNDEsIDIzOCwgMjMzKScpIHtcclxuXHQkKCcuc2VjdGlvbnNfYmcnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2VkZTllMycpO1xyXG59IGVsc2UgaWYoY29sb3IgPT0gJ3JnYigyNDQsIDI0MiwgMjM4KScpIHtcclxuXHQkKCcuc2VjdGlvbnNfYmcnKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAnI2YxZWVlOScpO1xyXG59IGVsc2Uge1xyXG5cdCQoJy5zZWN0aW9uc19iZycpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsICcjZTJkZGQyJyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyogTWFnbmlmaWMgcG9wdXAgKi9cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0JCgnLmNvbnRlbnQtZ3JpZF9faXRlbXMgYScpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0dHlwZSA6ICdpbWFnZScsXHJcblxyXG5cdFx0IGdhbGxlcnk6IHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZVxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcblxyXG5cdCQoJy5yZWctb3BlbicpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy5yZWdfX3BvcHVwJyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cclxuXHQkKCcubG9naW4tb3BlbicpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy5sb2dpbl9fcG9wdXAnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblxyXG5cdCQoJy5yZXN0b3JlLXBhc3MnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucGFzc3dvcmRfX3BvcHVwJyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG5cclxuXHQkKCcucHJlc2VudGF0aW9uLW9wZW4nKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcucHJlc2VudGF0aW9uX19wb3B1cCcsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHJcblx0JCgnLnRlc3Qtb3BlbicpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy50ZXN0X19wb3B1cCcsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxufSk7XHJcblxyXG4vKiBNYWduaWZpYyBwb3B1cCAqLyJdLCJmaWxlIjoibWFpbi5qcyJ9
