/* Sticky menu */

let header = $('.main__header');
let hh = $('.main__header').height();

$(window).scroll(function() {
	if($(this).scrollTop() >= 1) {
		header.addClass('main__header--sticky');
	}
	else{
		header.removeClass('main__header--sticky');
	}
});

/* Sticky menu end */

/* Scroll */

$('.header-menu__item a, .signup').on('click', function(e){
	
	let selector = $(this).attr('href');
	let h = $(selector);

	$('html, body').animate({
		scrollTop: h.offset().top
	}, 800);
});

/* Scroll end */

/* Authors */

let authors = $('.authors__img');
let author_1 = $('.authors__info-author1');
let author_2 = $('.authors__info-author2');
let names = $('.authors__name');
let name_1 = $('.name_1');
let name_2 = $('.name_2');


name_1.on('click', function(){
	names.addClass('hide');
	authors.addClass('hide');
	author_1.addClass('active');
});

$('.authors__info-author1 .authors__info-name').on('click', function(){
	names.removeClass('hide');
	authors.removeClass('hide');
	author_1.removeClass('active');
});

name_2.on('click', function(){
	names.addClass('hide');
	authors.addClass('hide2');
	author_2.addClass('active');
});

$('.authors__info-author2 .authors__info-name').on('click', function(){
	names.removeClass('hide');
	authors.removeClass('hide2');
	author_2.removeClass('active');
});

/* Authors end */


/* Owl Carousel */

$('.module-block__cover').owlCarousel({
	loop:true,
	margin:10,
	//mouseDrag: false,
	items:1,
	nav:true,
	navText: ['<span></span>','<span></span>'],
	dots:true
});

$('#slider_reviews').owlCarousel({
	loop:true,
	margin:10,
	//mouseDrag: false,
	items:1,
	nav:false,
	dots:true
});


/* Owl Carousel end */


/* Menu */

let burger_icon = $('.main__header-close');
let menu  = $('.main__header-menu');

if($(window).width() <= 992) {
	menu.removeClass("main__header-menu--active");
	burger_icon.removeClass("main__header-close--active");
}

burger_icon.on('click', function(){
	menu.toggleClass("main__header-menu--active");
	$(this).toggleClass('main__header-close--active');
})

/* Menu end */

/* Autoheight */

if($(window).width() >= 870) {
	let maxHeight = 0;
	$(".variants__item-title").each(function(){
		if ($(this).height() > maxHeight) {
			maxHeight = $(this).height();
		}
	});

	$(".variants__item-title").height(maxHeight);
}
/* Autoheight end */

/* Magnific popup */

$(document).ready(function(){
	$('.ask-open').magnificPopup({
		items: [
			{
				src: '.ask__popup',
				type: 'inline'
			}
		],
	});

	$('.signup-open1').magnificPopup({
		items: [
			{
				src: '.signup__popup1',
				type: 'inline'
			}
		],
	});
	$('.signup-open2').magnificPopup({
		items: [
			{
				src: '.signup__popup2',
				type: 'inline'
			}
		],
	});
	$('.signup-open3').magnificPopup({
		items: [
			{
				src: '.signup__popup3',
				type: 'inline'
			}
		],
	});
});

/*Magnific popup*/

/* Asks */

$('.asks__item-ask').on('click', function(){
	$(this).toggleClass("ask-active")
	$(this).next('.asks__item-answer').slideToggle(300);
});


/* Asks end */

/* Ajax form*/

$(document).ready(function() {	
	$("#form_1").submit(function() {
		$.ajax({
			type: "POST",
			url: "form/form-1.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form_1").trigger("reset");
		});
		return false;
	});
});

$(document).ready(function() {	
	$("#form_2-1").submit(function() {
		$.ajax({
			type: "POST",
			url: "form/form-2_1.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$(location).attr('href', "http://retail2x.onwiz.ru/buy/117");
			$("#form_2-1").trigger("reset");
		});
		return false;
	});
});

$(document).ready(function() {	
	$("#form_2-2").submit(function() {
		$.ajax({
			type: "POST",
			url: "form/form-2_2.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$(location).attr('href', "http://retail2x.onwiz.ru/buy/118");
			$("#form_2-2").trigger("reset");
		});
		return false;
	});
});

$(document).ready(function() {	
	$("#form_2-3").submit(function() {
		$.ajax({
			type: "POST",
			url: "form/form-2_3.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$(location).attr('href', "http://retail2x.onwiz.ru/buy/119");
			$("#form_2-3").trigger("reset");
		});
		return false;
	});
});

/* Ajax form end*/
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIFN0aWNreSBtZW51ICovXHJcblxyXG5sZXQgaGVhZGVyID0gJCgnLm1haW5fX2hlYWRlcicpO1xyXG5sZXQgaGggPSAkKCcubWFpbl9faGVhZGVyJykuaGVpZ2h0KCk7XHJcblxyXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cdGlmKCQodGhpcykuc2Nyb2xsVG9wKCkgPj0gMSkge1xyXG5cdFx0aGVhZGVyLmFkZENsYXNzKCdtYWluX19oZWFkZXItLXN0aWNreScpO1xyXG5cdH1cclxuXHRlbHNle1xyXG5cdFx0aGVhZGVyLnJlbW92ZUNsYXNzKCdtYWluX19oZWFkZXItLXN0aWNreScpO1xyXG5cdH1cclxufSk7XHJcblxyXG4vKiBTdGlja3kgbWVudSBlbmQgKi9cclxuXHJcbi8qIFNjcm9sbCAqL1xyXG5cclxuJCgnLmhlYWRlci1tZW51X19pdGVtIGEsIC5zaWdudXAnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcclxuXHRsZXQgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRsZXQgaCA9ICQoc2VsZWN0b3IpO1xyXG5cclxuXHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRzY3JvbGxUb3A6IGgub2Zmc2V0KCkudG9wXHJcblx0fSwgODAwKTtcclxufSk7XHJcblxyXG4vKiBTY3JvbGwgZW5kICovXHJcblxyXG4vKiBBdXRob3JzICovXHJcblxyXG5sZXQgYXV0aG9ycyA9ICQoJy5hdXRob3JzX19pbWcnKTtcclxubGV0IGF1dGhvcl8xID0gJCgnLmF1dGhvcnNfX2luZm8tYXV0aG9yMScpO1xyXG5sZXQgYXV0aG9yXzIgPSAkKCcuYXV0aG9yc19faW5mby1hdXRob3IyJyk7XHJcbmxldCBuYW1lcyA9ICQoJy5hdXRob3JzX19uYW1lJyk7XHJcbmxldCBuYW1lXzEgPSAkKCcubmFtZV8xJyk7XHJcbmxldCBuYW1lXzIgPSAkKCcubmFtZV8yJyk7XHJcblxyXG5cclxubmFtZV8xLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0bmFtZXMuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuXHRhdXRob3JzLmFkZENsYXNzKCdoaWRlJyk7XHJcblx0YXV0aG9yXzEuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbiQoJy5hdXRob3JzX19pbmZvLWF1dGhvcjEgLmF1dGhvcnNfX2luZm8tbmFtZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0bmFtZXMucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuXHRhdXRob3JzLnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcblx0YXV0aG9yXzEucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbm5hbWVfMi5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdG5hbWVzLmFkZENsYXNzKCdoaWRlJyk7XHJcblx0YXV0aG9ycy5hZGRDbGFzcygnaGlkZTInKTtcclxuXHRhdXRob3JfMi5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbn0pO1xyXG5cclxuJCgnLmF1dGhvcnNfX2luZm8tYXV0aG9yMiAuYXV0aG9yc19faW5mby1uYW1lJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRuYW1lcy5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG5cdGF1dGhvcnMucmVtb3ZlQ2xhc3MoJ2hpZGUyJyk7XHJcblx0YXV0aG9yXzIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbi8qIEF1dGhvcnMgZW5kICovXHJcblxyXG5cclxuLyogT3dsIENhcm91c2VsICovXHJcblxyXG4kKCcubW9kdWxlLWJsb2NrX19jb3ZlcicpLm93bENhcm91c2VsKHtcclxuXHRsb29wOnRydWUsXHJcblx0bWFyZ2luOjEwLFxyXG5cdC8vbW91c2VEcmFnOiBmYWxzZSxcclxuXHRpdGVtczoxLFxyXG5cdG5hdjp0cnVlLFxyXG5cdG5hdlRleHQ6IFsnPHNwYW4+PC9zcGFuPicsJzxzcGFuPjwvc3Bhbj4nXSxcclxuXHRkb3RzOnRydWVcclxufSk7XHJcblxyXG4kKCcjc2xpZGVyX3Jldmlld3MnKS5vd2xDYXJvdXNlbCh7XHJcblx0bG9vcDp0cnVlLFxyXG5cdG1hcmdpbjoxMCxcclxuXHQvL21vdXNlRHJhZzogZmFsc2UsXHJcblx0aXRlbXM6MSxcclxuXHRuYXY6ZmFsc2UsXHJcblx0ZG90czp0cnVlXHJcbn0pO1xyXG5cclxuXHJcbi8qIE93bCBDYXJvdXNlbCBlbmQgKi9cclxuXHJcblxyXG4vKiBNZW51ICovXHJcblxyXG5sZXQgYnVyZ2VyX2ljb24gPSAkKCcubWFpbl9faGVhZGVyLWNsb3NlJyk7XHJcbmxldCBtZW51ICA9ICQoJy5tYWluX19oZWFkZXItbWVudScpO1xyXG5cclxuaWYoJCh3aW5kb3cpLndpZHRoKCkgPD0gOTkyKSB7XHJcblx0bWVudS5yZW1vdmVDbGFzcyhcIm1haW5fX2hlYWRlci1tZW51LS1hY3RpdmVcIik7XHJcblx0YnVyZ2VyX2ljb24ucmVtb3ZlQ2xhc3MoXCJtYWluX19oZWFkZXItY2xvc2UtLWFjdGl2ZVwiKTtcclxufVxyXG5cclxuYnVyZ2VyX2ljb24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRtZW51LnRvZ2dsZUNsYXNzKFwibWFpbl9faGVhZGVyLW1lbnUtLWFjdGl2ZVwiKTtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdtYWluX19oZWFkZXItY2xvc2UtLWFjdGl2ZScpO1xyXG59KVxyXG5cclxuLyogTWVudSBlbmQgKi9cclxuXHJcbi8qIEF1dG9oZWlnaHQgKi9cclxuXHJcbmlmKCQod2luZG93KS53aWR0aCgpID49IDg3MCkge1xyXG5cdGxldCBtYXhIZWlnaHQgPSAwO1xyXG5cdCQoXCIudmFyaWFudHNfX2l0ZW0tdGl0bGVcIikuZWFjaChmdW5jdGlvbigpe1xyXG5cdFx0aWYgKCQodGhpcykuaGVpZ2h0KCkgPiBtYXhIZWlnaHQpIHtcclxuXHRcdFx0bWF4SGVpZ2h0ID0gJCh0aGlzKS5oZWlnaHQoKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0JChcIi52YXJpYW50c19faXRlbS10aXRsZVwiKS5oZWlnaHQobWF4SGVpZ2h0KTtcclxufVxyXG4vKiBBdXRvaGVpZ2h0IGVuZCAqL1xyXG5cclxuLyogTWFnbmlmaWMgcG9wdXAgKi9cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0JCgnLmFzay1vcGVuJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLmFza19fcG9wdXAnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblxyXG5cdCQoJy5zaWdudXAtb3BlbjEnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcuc2lnbnVwX19wb3B1cDEnLFxyXG5cdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0fSk7XHJcblx0JCgnLnNpZ251cC1vcGVuMicpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0aXRlbXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNyYzogJy5zaWdudXBfX3BvcHVwMicsXHJcblx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0fVxyXG5cdFx0XSxcclxuXHR9KTtcclxuXHQkKCcuc2lnbnVwLW9wZW4zJykubWFnbmlmaWNQb3B1cCh7XHJcblx0XHRpdGVtczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0c3JjOiAnLnNpZ251cF9fcG9wdXAzJyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG59KTtcclxuXHJcbi8qTWFnbmlmaWMgcG9wdXAqL1xyXG5cclxuLyogQXNrcyAqL1xyXG5cclxuJCgnLmFza3NfX2l0ZW0tYXNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHQkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYXNrLWFjdGl2ZVwiKVxyXG5cdCQodGhpcykubmV4dCgnLmFza3NfX2l0ZW0tYW5zd2VyJykuc2xpZGVUb2dnbGUoMzAwKTtcclxufSk7XHJcblxyXG5cclxuLyogQXNrcyBlbmQgKi9cclxuXHJcbi8qIEFqYXggZm9ybSovXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcdFxyXG5cdCQoXCIjZm9ybV8xXCIpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHR5cGU6IFwiUE9TVFwiLFxyXG5cdFx0XHR1cmw6IFwiZm9ybS9mb3JtLTEucGhwXCIsXHJcblx0XHRcdGRhdGE6ICQodGhpcykuc2VyaWFsaXplKClcclxuXHRcdH0pLmRvbmUoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQodGhpcykuZmluZChcImlucHV0XCIpLnZhbChcIlwiKTtcclxuXHRcdFx0YWxlcnQoXCLQodC/0LDRgdC40LHQviDQt9CwINC30LDRj9Cy0LrRgyEg0KHQutC+0YDQviDQvNGLINGBINCy0LDQvNC4INGB0LLRj9C20LXQvNGB0Y8uXCIpO1xyXG5cdFx0XHQkKFwiI2Zvcm1fMVwiKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcdFxyXG5cdCQoXCIjZm9ybV8yLTFcIikuc3VibWl0KGZ1bmN0aW9uKCkge1xyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dHlwZTogXCJQT1NUXCIsXHJcblx0XHRcdHVybDogXCJmb3JtL2Zvcm0tMl8xLnBocFwiLFxyXG5cdFx0XHRkYXRhOiAkKHRoaXMpLnNlcmlhbGl6ZSgpXHJcblx0XHR9KS5kb25lKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpLmZpbmQoXCJpbnB1dFwiKS52YWwoXCJcIik7XHJcblx0XHRcdCQobG9jYXRpb24pLmF0dHIoJ2hyZWYnLCBcImh0dHA6Ly9yZXRhaWwyeC5vbndpei5ydS9idXkvMTE3XCIpO1xyXG5cdFx0XHQkKFwiI2Zvcm1fMi0xXCIpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1x0XHJcblx0JChcIiNmb3JtXzItMlwiKS5zdWJtaXQoZnVuY3Rpb24oKSB7XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR0eXBlOiBcIlBPU1RcIixcclxuXHRcdFx0dXJsOiBcImZvcm0vZm9ybS0yXzIucGhwXCIsXHJcblx0XHRcdGRhdGE6ICQodGhpcykuc2VyaWFsaXplKClcclxuXHRcdH0pLmRvbmUoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQodGhpcykuZmluZChcImlucHV0XCIpLnZhbChcIlwiKTtcclxuXHRcdFx0JChsb2NhdGlvbikuYXR0cignaHJlZicsIFwiaHR0cDovL3JldGFpbDJ4Lm9ud2l6LnJ1L2J1eS8xMThcIik7XHJcblx0XHRcdCQoXCIjZm9ybV8yLTJcIikudHJpZ2dlcihcInJlc2V0XCIpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHRcclxuXHQkKFwiI2Zvcm1fMi0zXCIpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHR5cGU6IFwiUE9TVFwiLFxyXG5cdFx0XHR1cmw6IFwiZm9ybS9mb3JtLTJfMy5waHBcIixcclxuXHRcdFx0ZGF0YTogJCh0aGlzKS5zZXJpYWxpemUoKVxyXG5cdFx0fSkuZG9uZShmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5maW5kKFwiaW5wdXRcIikudmFsKFwiXCIpO1xyXG5cdFx0XHQkKGxvY2F0aW9uKS5hdHRyKCdocmVmJywgXCJodHRwOi8vcmV0YWlsMngub253aXoucnUvYnV5LzExOVwiKTtcclxuXHRcdFx0JChcIiNmb3JtXzItM1wiKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxufSk7XHJcblxyXG4vKiBBamF4IGZvcm0gZW5kKi8iXSwiZmlsZSI6Im1haW4uanMifQ==
