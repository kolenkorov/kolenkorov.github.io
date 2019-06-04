/* Menu */

let menu = $(".menu");
let menu_btn = $(".header-menu");


var isEvent = false;
$(window).on('load resize', function() {
    if (!isEvent) {
        // this my code
        
       if($(window).width() <= 991) {
       		menu_btn.addClass('touch');

       } else {
       		menu_btn.removeClass('touch');
       }

        isEvent = true;
        setTimeout( function() {
            isEvent = false;
        }, 1000 );
    }
});

menu_btn.on('click', function(){
	menu.toggleClass('active');
});


/* Menu end */

/* Tooltip */

$('.tool').each(function(){
	$(this).parent().children('i').on('click', function(){
		$(this).parent().find('.tool').fadeIn(300);
	});
});

$('.tool .no').on('click', function(){
	$('.tool').fadeOut(300);
});

/* Tooltip end */

/* Dropdown nav */

$('.nav-items .nav-item').on('click', function(){
	$(this).toggleClass("nav-open");
	$(this).next('.nav-list').slideToggle(250);
});

/* Dropdown nav end */

/* Dropdown filter */

$('.open-text, .open-arrow').on('click', function(){
	$(this).parents(".head-filter").next(".head-items").slideToggle(250);
});

/* Dropdown filter end */

/* Popup open */

let overlay = $(".overlay");
let popup = $(".popup");

$(".tools-settings").on('click', function(){
	overlay.fadeIn(100);
	popup.fadeIn(300);

});

$(".popup-close i").on('click', function(){
	overlay.fadeOut(100);
	popup.fadeOut(300);
});

/* Popup open end */

/* Slick */

$('#slider_menu').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	rtl: true,
	arrows: true,
	prevArrow: '<button class="slick-prev"><i class="flaticon flaticon-right-arrow"></i></button>',
	nextArrow: '<button class="slick-next"><i class="flaticon flaticon-left-arrow"></i></button>',
});

/* Slick end */
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIE1lbnUgKi9cclxuXHJcbmxldCBtZW51ID0gJChcIi5tZW51XCIpO1xyXG5sZXQgbWVudV9idG4gPSAkKFwiLmhlYWRlci1tZW51XCIpO1xyXG5cclxuXHJcbnZhciBpc0V2ZW50ID0gZmFsc2U7XHJcbiQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbigpIHtcclxuICAgIGlmICghaXNFdmVudCkge1xyXG4gICAgICAgIC8vIHRoaXMgbXkgY29kZVxyXG4gICAgICAgIFxyXG4gICAgICAgaWYoJCh3aW5kb3cpLndpZHRoKCkgPD0gOTkxKSB7XHJcbiAgICAgICBcdFx0bWVudV9idG4uYWRkQ2xhc3MoJ3RvdWNoJyk7XHJcblxyXG4gICAgICAgfSBlbHNlIHtcclxuICAgICAgIFx0XHRtZW51X2J0bi5yZW1vdmVDbGFzcygndG91Y2gnKTtcclxuICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNFdmVudCA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlzRXZlbnQgPSBmYWxzZTtcclxuICAgICAgICB9LCAxMDAwICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubWVudV9idG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRtZW51LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxufSk7XHJcblxyXG5cclxuLyogTWVudSBlbmQgKi9cclxuXHJcbi8qIFRvb2x0aXAgKi9cclxuXHJcbiQoJy50b29sJykuZWFjaChmdW5jdGlvbigpe1xyXG5cdCQodGhpcykucGFyZW50KCkuY2hpbGRyZW4oJ2knKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcudG9vbCcpLmZhZGVJbigzMDApO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcbiQoJy50b29sIC5ubycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCgnLnRvb2wnKS5mYWRlT3V0KDMwMCk7XHJcbn0pO1xyXG5cclxuLyogVG9vbHRpcCBlbmQgKi9cclxuXHJcbi8qIERyb3Bkb3duIG5hdiAqL1xyXG5cclxuJCgnLm5hdi1pdGVtcyAubmF2LWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJuYXYtb3BlblwiKTtcclxuXHQkKHRoaXMpLm5leHQoJy5uYXYtbGlzdCcpLnNsaWRlVG9nZ2xlKDI1MCk7XHJcbn0pO1xyXG5cclxuLyogRHJvcGRvd24gbmF2IGVuZCAqL1xyXG5cclxuLyogRHJvcGRvd24gZmlsdGVyICovXHJcblxyXG4kKCcub3Blbi10ZXh0LCAub3Blbi1hcnJvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0JCh0aGlzKS5wYXJlbnRzKFwiLmhlYWQtZmlsdGVyXCIpLm5leHQoXCIuaGVhZC1pdGVtc1wiKS5zbGlkZVRvZ2dsZSgyNTApO1xyXG59KTtcclxuXHJcbi8qIERyb3Bkb3duIGZpbHRlciBlbmQgKi9cclxuXHJcbi8qIFBvcHVwIG9wZW4gKi9cclxuXHJcbmxldCBvdmVybGF5ID0gJChcIi5vdmVybGF5XCIpO1xyXG5sZXQgcG9wdXAgPSAkKFwiLnBvcHVwXCIpO1xyXG5cclxuJChcIi50b29scy1zZXR0aW5nc1wiKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdG92ZXJsYXkuZmFkZUluKDEwMCk7XHJcblx0cG9wdXAuZmFkZUluKDMwMCk7XHJcblxyXG59KTtcclxuXHJcbiQoXCIucG9wdXAtY2xvc2UgaVwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdG92ZXJsYXkuZmFkZU91dCgxMDApO1xyXG5cdHBvcHVwLmZhZGVPdXQoMzAwKTtcclxufSk7XHJcblxyXG4vKiBQb3B1cCBvcGVuIGVuZCAqL1xyXG5cclxuLyogU2xpY2sgKi9cclxuXHJcbiQoJyNzbGlkZXJfbWVudScpLnNsaWNrKHtcclxuXHRkb3RzOiBmYWxzZSxcclxuXHRpbmZpbml0ZTogdHJ1ZSxcclxuXHRzcGVlZDogMzAwLFxyXG5cdHNsaWRlc1RvU2hvdzogMSxcclxuXHRydGw6IHRydWUsXHJcblx0YXJyb3dzOiB0cnVlLFxyXG5cdHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1wcmV2XCI+PGkgY2xhc3M9XCJmbGF0aWNvbiBmbGF0aWNvbi1yaWdodC1hcnJvd1wiPjwvaT48L2J1dHRvbj4nLFxyXG5cdG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCI+PGkgY2xhc3M9XCJmbGF0aWNvbiBmbGF0aWNvbi1sZWZ0LWFycm93XCI+PC9pPjwvYnV0dG9uPicsXHJcbn0pO1xyXG5cclxuLyogU2xpY2sgZW5kICovIl0sImZpbGUiOiJtYWluLmpzIn0=
