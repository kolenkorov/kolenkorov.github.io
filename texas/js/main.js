$("#carousel_1").owlCarousel({
	loop: true,
	slideBy: 4,
	dots: true,
	nav: true,
	navText: ['<i class="flaticon-arrow"></i>','<i class="flaticon-angle-arrow-pointing-to-right"></i>'],
	items: 1,
});

$("#carousel_2").owlCarousel({
	loop: true,
	slideBy: 4,
	dots: false,
	nav: true,
	navText: ['<i class="flaticon-arrow"></i>','<i class="flaticon-angle-arrow-pointing-to-right"></i>'],
	items: 1,
});

// Dropdown

let dropdown = $('.header__dropdown');

$(".header__profile-avatar, .header__profile-more").on('click', function(){
	dropdown.show();
});

$(document).mouseup(function(e) {
	if (dropdown.is(":visible")) {
		if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
			dropdown.hide();
		}
	}
});

$('.header__dropdown-item a').on('click', function() {
	dropdown.hide();
});


let bill = $('.donat-block__bill');
let gift = $('.donat-block__gift');
let auth = $('.login-block__auth');
let recovery = $('.login-block__recovery');
let tab_bill = $('.tab-bill');
let tab_gift = $('.tab-gift');
let tab_auth = $('.tab-auth');
let tab_recovery = $('.tab-recovery');

tab_bill.on('click', function() {
	gift.removeClass('active');
	tab_gift.removeClass('active');
	$(this).addClass('active');
	bill.addClass('active')
});

tab_gift.on('click', function() {
	bill.removeClass('active');
	tab_bill.removeClass('active');
	$(this).addClass('active');
	gift.addClass('active')
});

$('.tab-auth, .auth').on('click', function() {
	recovery.removeClass('active');
	tab_recovery.removeClass('active');
	tab_auth.addClass('active');
	auth.addClass('active')
});

$('.tab-recovery, .recovery_pass').on('click', function() {
	auth.removeClass('active');
	tab_auth.removeClass('active');
	tab_recovery.addClass('active');
	recovery.addClass('active')
});

// Magnific popup

$(document).ready(function(){
	$('.login-open').magnificPopup({
		items: [
			{
				src: '.login__popup',
				type: 'inline'
			}
		],
	});
});

// Form Styler

$('select').styler();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoXCIjY2Fyb3VzZWxfMVwiKS5vd2xDYXJvdXNlbCh7XHJcblx0bG9vcDogdHJ1ZSxcclxuXHRzbGlkZUJ5OiA0LFxyXG5cdGRvdHM6IHRydWUsXHJcblx0bmF2OiB0cnVlLFxyXG5cdG5hdlRleHQ6IFsnPGkgY2xhc3M9XCJmbGF0aWNvbi1hcnJvd1wiPjwvaT4nLCc8aSBjbGFzcz1cImZsYXRpY29uLWFuZ2xlLWFycm93LXBvaW50aW5nLXRvLXJpZ2h0XCI+PC9pPiddLFxyXG5cdGl0ZW1zOiAxLFxyXG59KTtcclxuXHJcbiQoXCIjY2Fyb3VzZWxfMlwiKS5vd2xDYXJvdXNlbCh7XHJcblx0bG9vcDogdHJ1ZSxcclxuXHRzbGlkZUJ5OiA0LFxyXG5cdGRvdHM6IGZhbHNlLFxyXG5cdG5hdjogdHJ1ZSxcclxuXHRuYXZUZXh0OiBbJzxpIGNsYXNzPVwiZmxhdGljb24tYXJyb3dcIj48L2k+JywnPGkgY2xhc3M9XCJmbGF0aWNvbi1hbmdsZS1hcnJvdy1wb2ludGluZy10by1yaWdodFwiPjwvaT4nXSxcclxuXHRpdGVtczogMSxcclxufSk7XHJcblxyXG4vLyBEcm9wZG93blxyXG5cclxubGV0IGRyb3Bkb3duID0gJCgnLmhlYWRlcl9fZHJvcGRvd24nKTtcclxuXHJcbiQoXCIuaGVhZGVyX19wcm9maWxlLWF2YXRhciwgLmhlYWRlcl9fcHJvZmlsZS1tb3JlXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0ZHJvcGRvd24uc2hvdygpO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24oZSkge1xyXG5cdGlmIChkcm9wZG93bi5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcblx0XHRpZiAoIWRyb3Bkb3duLmlzKGUudGFyZ2V0KSAmJiBkcm9wZG93bi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRkcm9wZG93bi5oaWRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuXHJcbiQoJy5oZWFkZXJfX2Ryb3Bkb3duLWl0ZW0gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdGRyb3Bkb3duLmhpZGUoKTtcclxufSk7XHJcblxyXG5cclxubGV0IGJpbGwgPSAkKCcuZG9uYXQtYmxvY2tfX2JpbGwnKTtcclxubGV0IGdpZnQgPSAkKCcuZG9uYXQtYmxvY2tfX2dpZnQnKTtcclxubGV0IGF1dGggPSAkKCcubG9naW4tYmxvY2tfX2F1dGgnKTtcclxubGV0IHJlY292ZXJ5ID0gJCgnLmxvZ2luLWJsb2NrX19yZWNvdmVyeScpO1xyXG5sZXQgdGFiX2JpbGwgPSAkKCcudGFiLWJpbGwnKTtcclxubGV0IHRhYl9naWZ0ID0gJCgnLnRhYi1naWZ0Jyk7XHJcbmxldCB0YWJfYXV0aCA9ICQoJy50YWItYXV0aCcpO1xyXG5sZXQgdGFiX3JlY292ZXJ5ID0gJCgnLnRhYi1yZWNvdmVyeScpO1xyXG5cclxudGFiX2JpbGwub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0Z2lmdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0dGFiX2dpZnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdGJpbGwuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbn0pO1xyXG5cclxudGFiX2dpZnQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0YmlsbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0dGFiX2JpbGwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdGdpZnQuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbn0pO1xyXG5cclxuJCgnLnRhYi1hdXRoLCAuYXV0aCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdHJlY292ZXJ5LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR0YWJfcmVjb3ZlcnkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdHRhYl9hdXRoLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRhdXRoLmFkZENsYXNzKCdhY3RpdmUnKVxyXG59KTtcclxuXHJcbiQoJy50YWItcmVjb3ZlcnksIC5yZWNvdmVyeV9wYXNzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0YXV0aC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0dGFiX2F1dGgucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdHRhYl9yZWNvdmVyeS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0cmVjb3ZlcnkuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcbn0pO1xyXG5cclxuLy8gTWFnbmlmaWMgcG9wdXBcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0JCgnLmxvZ2luLW9wZW4nKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdGl0ZW1zOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRzcmM6ICcubG9naW5fX3BvcHVwJyxcclxuXHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHR9XHJcblx0XHRdLFxyXG5cdH0pO1xyXG59KTtcclxuXHJcbi8vIEZvcm0gU3R5bGVyXHJcblxyXG4kKCdzZWxlY3QnKS5zdHlsZXIoKTtcclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
