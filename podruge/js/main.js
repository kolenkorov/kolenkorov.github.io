$(function () {

    // липкое меню
    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        var diff = scrollPos;
        if(scrollPos > 54){
            scrollPos = 54;
        }


        if (scrollPos > 0) {
            header.addClass("fixed_");
            header.addClass("fixed");
        } else {
            header.removeClass("fixed_");
            header.removeClass("fixed");
        }
        
        if( $(window).width() > 640 ){
            scrollPos = 0;
        }

        header.css({"top":"-"+scrollPos+"px"});

    });


    $(document).ready(function () {
        var menu = $("#menu");
        $('a', menu).hover(
            function () {
                $('>ul', this).attr('style', '') //удалим стили оставшиеся после hide()/show()
                    .removeClass('fadeInUp')

            },
            function () {
                $('>ul', this).show(0)

                    .addClass('fadeOutDown')
                    .delay(100).hide(0);
            }
        );
    });



    // присвоение класса --active и подсветка  выбранного пункта меню
    $(document).on("click", "ul .menu__list-item", function () {
        $(this).addClass('menu__list-item--active').siblings().removeClass('menu__list-item--active')
    });


    $(document).ready(function () {
        $('.header__intro-slider').slick({
            slidesToShow: 1,
            dots: true,
            arrows: false,
            fade: true
            // autoplay: true
        });

        $('.clinics__slider').slick({
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,

            prevArrow: '<button type="button" class="clinics__slider-btnprev prev_button slider__arrow-btn"><img src="img/icons/arrow-left.svg" alt=""></button>',
            nextArrow: '<button type="button" class="clinics__slider-btnnext next_button slider__arrow-btn"><img src="img/icons/arrow-right.svg" alt=""></button>',
            responsive: [
                {
                    breakpoint: 1301,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 541,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.cosmetologs__slider').slick({
            slidesToShow: 4,
            swipeToSlide: true,
            // slidesToScroll: 1,

            prevArrow: '<button type="button"class="cosmetologs__slider-btnprev prev_button slider__arrow-btn"><img src="img/icons/arrow-left.svg" alt=""></button>',
            nextArrow: '<button type="button"class="cosmetologs__slider-btnnext next_button slider__arrow-btn"><img src="img/icons/arrow-right.svg" alt=""></button>',
            responsive: [
                {
                    breakpoint: 1301,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                ,
                {
                    breakpoint: 701,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 541,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.news__slider').slick({
            slidesToShow: 3,
            swipeToSlide: true,
            autoplay: true,

            prevArrow: '<button type="button"class="news__slider-btnprev prev_button slider__arrow-btn"><img src="img/icons/arrow-left.svg" alt=""></button>',
            nextArrow: '<button type="button"class="news__slider-btnnext next_button slider__arrow-btn"><img src="img/icons/arrow-right.svg" alt=""></button>',
            responsive: [
                {
                    breakpoint: 1301,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });

        $('.inner').slick({
            slidesToShow: 4,
            swipeToSlide: true,


            prevArrow: '<button type="button"class="news__slider-btnprev prev_button slider__arrow-btn"><img src="img/icons/arrow-left.svg" alt=""></button>',
            nextArrow: '<button type="button"class="news__slider-btnnext next_button slider__arrow-btn"><img src="img/icons/arrow-right.svg" alt=""></button>',
        });

        $('.clinic-info__slider').slick({
            slidesToShow: 1,
            swipeToSlide: true,
            prevArrow: '<button type="button"class="prev_button slider__arrow-btn"><img src="img/icons/arrow-left.svg" alt=""></button>',
            nextArrow: '<button type="button"class="next_button slider__arrow-btn"><img src="img/icons/arrow-right.svg" alt=""></button>',

            dots: true,
            customPaging : function(slider, i) {
                var thumb = $(slider.$slides[i]).data('image');
                return "<button style='background-image: url("+thumb+")'></a>";
            },

            responsive: [
                {
                    breakpoint: 1241,
                    settings: {
                        dots: false,
                    }
                },
                {
                    breakpoint: 641,
                    settings: {
                        arrows: false,
                    }
                },
            ]
        });

        $('.article__slider-items').slick({
            slidesToShow: 1,
            dots: false,
            arrows: true,
            prevArrow: '<button type="button"class="prev_button slider__arrow-btn"><img src="img/icons/arrow-left.svg" alt=""></button>',
            nextArrow: '<button type="button"class="next_button slider__arrow-btn"><img src="img/icons/arrow-right.svg" alt=""></button>',
        });

        $('.article__reviews-items').slick({
            slidesToShow: 1,
            dots: true,
            arrows: false,
        });
    });

    // Флаг включённости слайдера
    var slickSliderActive = false;

    // Включение или выключение слайдера (в зависимости от ширины)
    function checkSlider() {

        // Если вьюпорт уже чем 514
        if ($(window).width() < 540 - getScroll()) {


            if (slickSliderActive == false) {
                $('#mobileOnlySlider').slick({
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,

                });

                $('.clinics__items').addClass('clinics__slider');

                $('.reviews__items').slick({
                    dots: false,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,

                    prevArrow: '<button type="button" class="clinics__slider-btnprev prev_button slider__arrow-btn"><img src="img/icons/arrow-left.svg" alt=""></button>',
                    nextArrow: '<button type="button" class="clinics__slider-btnnext next_button slider__arrow-btn"><img src="img/icons/arrow-right.svg" alt=""></button>',
                    adaptiveHeight: true,
                });

                slickSliderActive = true;
            }

        }

        if ($(window).width() < 641) {


            if (slickSliderActive == false) {
                $('.reviews__items').slick({
                    dots: false,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,

                    prevArrow: '<button type="button" class="clinics__slider-btnprev prev_button slider__arrow-btn"><img src="img/icons/arrow-left.svg" alt=""></button>',
                    nextArrow: '<button type="button" class="clinics__slider-btnnext next_button slider__arrow-btn"><img src="img/icons/arrow-right.svg" alt=""></button>',
                });

                slickSliderActive = true;
            }
        }

        else {

            // Если флаг включённости поднят, выключаем и опускаем флаг
            if (slickSliderActive == true) {
                $('#mobileOnlySlider').slick('unslick');

                $('.reviews__items').slick('unslick');
                
                $('.clinics__items').removeClass('clinics__slider');

                slickSliderActive = false;
            }

        }
    };

    // По готовности DOM...
    // $(document).ready(function(){
    checkSlider();
    // });

    // По любому изменению размера вьюпорта...
    $(window).on('load resize', function () {
        checkSlider();
    });

    function getScroll() {
        var div = document.createElement('div');
        div.style.overflowY = 'scroll';
        //   div.style.width = '50px';
        //   div.style.height = '50px';
        //   div.style.visibility = 'hidden';
        document.body.appendChild(div);
        var scrollWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
        return scrollWidth;
    }

    //скролл вверх при клике на стрелку
    $(".scrolltop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });

    $('.gototop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


    // select специальность

    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
    //  end select

    // маска для телефона

    $(function () {
        $(".input-phone").mask("+7 (999) 999-9999", { autoclear: false });
    });


    // wow js
    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 300,          // distance to the element when triggering the animation (default is 0)
            mobile: false,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            //   callback:     function(box) {
            //     // the callback is fired every time an animation is started
            //     // the argument that is passed in is the DOM node being animated
            //   },
            //   scrollContainer: null // optional scroll container selector, otherwise use window

        }
    );
    wow.init();

    //   popup выбор города

    $(".modal-city").each(function () {
        $(this).wrap('<div class="overlay"></div>')
    });

    $(".modal-clinics").each(function () {
        $(this).wrap('<div class="overlay"></div>')
    });

    $(".open-modal").on('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation;

        var $this = $(this),
            modal = $($this).data("modal");

        $(modal).parents(".overlay").addClass("open");
        setTimeout(function () {
            $(modal).addClass("open");
        }, 350);

        $(document).on('click', function (e) {
            var target = $(e.target);

            if ($(target).hasClass("overlay")) {
                $(target).find(".modal-city").each(function () {
                    $(this).removeClass("open");
                });
                $(target).find(".modal-clinics").each(function () {
                    $(this).removeClass("open");
                });
                setTimeout(function () {
                    $(target).removeClass("open");
                }, 350);
            }

        });

    });

    $(".close-modal").on('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation;

        var $this = $(this),
            modal = $($this).data("modal");

        $(modal).removeClass("open");
        setTimeout(function () {
            $(modal).parents(".overlay").removeClass("open");
        }, 350);

    });


    // // скролл
    //     $(function($){
    //         $(window).on("load",function(){
    //             $("#modal).mCustomScrollbar();
    //         });
    //     });


    $(document).on("click", ".open-modal", function () {
        $("body").toggleClass("lock");
    })

    $(document).on("click", ".close-modal", function () {
        $("body").removeClass("lock");
    })

    $(document).on("click", ".overlay.open", function () {
        $("body").removeClass("lock");
    })


    $(".modal-city").click(function () {
        // $('.content').mCustomScrollbar("update");
        $('.content').mCustomScrollbar("update");
        
        // $(".content").mCustomScrollbar({
    });
    
    
	$('.video-slider').slick({
		slidesToShow: 4,
		swipeToSlide: true,
		// slidesToScroll: 1,
        prevArrow: '<button type="button"class="news__slider-btnprev prev_button slider__arrow-btn"><img src="img/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button"class="news__slider-btnnext next_button slider__arrow-btn"><img src="img/icons/arrow-right.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 1301,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},

			{
			breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},

			{
			breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	function VideoLaunch(){
		let video = $('.v-slider');
		let play = $('.v-play');
		let stop = $('.v-stop');
		let mute = $('.v-mute');
		let rasmute = $('.v-rasmute');

		play.click(function(e){
			let v_block = $(this).parents('.video-controls').siblings('.v-slider');
			$(this).css("display", "none");
			$(this).siblings('.v-stop').css("display", "block");
			v_block[0].play();
		});
		stop.click(function(e){
			let v_block = $(this).parents('.video-controls').siblings('.v-slider');
			$(this).css("display", "none");
			$(this).siblings('.v-play').css("display", "block");
			v_block[0].pause();
		});

		mute.click(function(e){
			let v_block = $(this).parents('.video-controls').siblings('.v-slider');
			$(this).css("display", "none");
			$(this).siblings('.v-rasmute').css("display", "block");
			v_block[0].volume = 0.0;
		});
		rasmute.click(function(e){
			let v_block = $(this).parents('.video-controls').siblings('.v-slider');
			$(this).css("display", "none");
			$(this).siblings('.v-mute').css("display", "block");
			v_block[0].volume = 1.0;
		});
	}
	VideoLaunch();
    
    /* Upload img */
    function readURL(input) {
        if (input.files && input.files[0]) {
            let reader = new FileReader();

            reader.onload = function (e) {
                $('#image').attr('src', e.target.result).show();
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInput").change(function(){
        readURL(this);
    });
    /* Upload img end */

    $('.toggle-filter').on('click', function() {
        $(this).toggleClass('hide');
        $('.filter__clear').toggleClass('active');

        $('.filter__block').slideToggle();
    });


    $('.promotion__item-info .promotion__item-button a').on('click', function(e){
        e.preventDefault();
        $(this).parent().parent().parent().parent().addClass('active').find('.promotion__item-content').slideDown();
    });

    $('.promotion__item-content .promotion__item-button a').on('click', function(e){
        e.preventDefault();
        $(this).parent().parent().parent().removeClass('active').find('.promotion__item-content').slideUp();
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vINC70LjQv9C60L7QtSDQvNC10L3RjlxyXG4gICAgbGV0IGhlYWRlciA9ICQoXCIjaGVhZGVyXCIpO1xyXG4gICAgbGV0IGludHJvID0gJChcIiNpbnRyb1wiKTtcclxuICAgIGxldCBpbnRyb0g7XHJcbiAgICBsZXQgc2Nyb2xsUG9zID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICQod2luZG93KS5vbignc2Nyb2xsIGxvYWQgcmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGludHJvSCA9IGludHJvLmlubmVySGVpZ2h0KCk7XHJcbiAgICAgICAgc2Nyb2xsUG9zID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgICAgICB2YXIgZGlmZiA9IHNjcm9sbFBvcztcclxuICAgICAgICBpZihzY3JvbGxQb3MgPiA1NCl7XHJcbiAgICAgICAgICAgIHNjcm9sbFBvcyA9IDU0O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmIChzY3JvbGxQb3MgPiAwKSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcyhcImZpeGVkX1wiKTtcclxuICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKFwiZml4ZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKFwiZml4ZWRfXCIpO1xyXG4gICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoXCJmaXhlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoICQod2luZG93KS53aWR0aCgpID4gNjQwICl7XHJcbiAgICAgICAgICAgIHNjcm9sbFBvcyA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoZWFkZXIuY3NzKHtcInRvcFwiOlwiLVwiK3Njcm9sbFBvcytcInB4XCJ9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtZW51ID0gJChcIiNtZW51XCIpO1xyXG4gICAgICAgICQoJ2EnLCBtZW51KS5ob3ZlcihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnPnVsJywgdGhpcykuYXR0cignc3R5bGUnLCAnJykgLy/Rg9C00LDQu9C40Lwg0YHRgtC40LvQuCDQvtGB0YLQsNCy0YjQuNC10YHRjyDQv9C+0YHQu9C1IGhpZGUoKS9zaG93KClcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2ZhZGVJblVwJylcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoJz51bCcsIHRoaXMpLnNob3coMClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdmYWRlT3V0RG93bicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDEwMCkuaGlkZSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vINC/0YDQuNGB0LLQvtC10L3QuNC1INC60LvQsNGB0YHQsCAtLWFjdGl2ZSDQuCDQv9C+0LTRgdCy0LXRgtC60LAgINCy0YvQsdGA0LDQvdC90L7Qs9C+INC/0YPQvdC60YLQsCDQvNC10L3RjlxyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcInVsIC5tZW51X19saXN0LWl0ZW1cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ21lbnVfX2xpc3QtaXRlbS0tYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnbWVudV9fbGlzdC1pdGVtLS1hY3RpdmUnKVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuaGVhZGVyX19pbnRyby1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZVxyXG4gICAgICAgICAgICAvLyBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuY2xpbmljc19fc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbGluaWNzX19zbGlkZXItYnRucHJldiBwcmV2X2J1dHRvbiBzbGlkZXJfX2Fycm93LWJ0blwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LWxlZnQuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbGluaWNzX19zbGlkZXItYnRubmV4dCBuZXh0X2J1dHRvbiBzbGlkZXJfX2Fycm93LWJ0blwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LXJpZ2h0LnN2Z1wiIGFsdD1cIlwiPjwvYnV0dG9uPicsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMzAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU0MSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5jb3NtZXRvbG9nc19fc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHN3aXBlVG9TbGlkZTogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gc2xpZGVzVG9TY3JvbGw6IDEsXHJcblxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cImNsYXNzPVwiY29zbWV0b2xvZ3NfX3NsaWRlci1idG5wcmV2IHByZXZfYnV0dG9uIHNsaWRlcl9fYXJyb3ctYnRuXCI+PGltZyBzcmM9XCJpbWcvaWNvbnMvYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJcIj48L2J1dHRvbj4nLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cImNsYXNzPVwiY29zbWV0b2xvZ3NfX3NsaWRlci1idG5uZXh0IG5leHRfYnV0dG9uIHNsaWRlcl9fYXJyb3ctYnRuXCI+PGltZyBzcmM9XCJpbWcvaWNvbnMvYXJyb3ctcmlnaHQuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzMDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU0MSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5uZXdzX19zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiY2xhc3M9XCJuZXdzX19zbGlkZXItYnRucHJldiBwcmV2X2J1dHRvbiBzbGlkZXJfX2Fycm93LWJ0blwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LWxlZnQuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJjbGFzcz1cIm5ld3NfX3NsaWRlci1idG5uZXh0IG5leHRfYnV0dG9uIHNsaWRlcl9fYXJyb3ctYnRuXCI+PGltZyBzcmM9XCJpbWcvaWNvbnMvYXJyb3ctcmlnaHQuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzMDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuaW5uZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiB0cnVlLFxyXG5cclxuXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiY2xhc3M9XCJuZXdzX19zbGlkZXItYnRucHJldiBwcmV2X2J1dHRvbiBzbGlkZXJfX2Fycm93LWJ0blwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LWxlZnQuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJjbGFzcz1cIm5ld3NfX3NsaWRlci1idG5uZXh0IG5leHRfYnV0dG9uIHNsaWRlcl9fYXJyb3ctYnRuXCI+PGltZyBzcmM9XCJpbWcvaWNvbnMvYXJyb3ctcmlnaHQuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmNsaW5pYy1pbmZvX19zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cImNsYXNzPVwicHJldl9idXR0b24gc2xpZGVyX19hcnJvdy1idG5cIj48aW1nIHNyYz1cImltZy9pY29ucy9hcnJvdy1sZWZ0LnN2Z1wiIGFsdD1cIlwiPjwvYnV0dG9uPicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiY2xhc3M9XCJuZXh0X2J1dHRvbiBzbGlkZXJfX2Fycm93LWJ0blwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LXJpZ2h0LnN2Z1wiIGFsdD1cIlwiPjwvYnV0dG9uPicsXHJcblxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBjdXN0b21QYWdpbmcgOiBmdW5jdGlvbihzbGlkZXIsIGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aHVtYiA9ICQoc2xpZGVyLiRzbGlkZXNbaV0pLmRhdGEoJ2ltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIHN0eWxlPSdiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIrdGh1bWIrXCIpJz48L2E+XCI7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI0MSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDY0MSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmFydGljbGVfX3NsaWRlci1pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cImNsYXNzPVwicHJldl9idXR0b24gc2xpZGVyX19hcnJvdy1idG5cIj48aW1nIHNyYz1cImltZy9pY29ucy9hcnJvdy1sZWZ0LnN2Z1wiIGFsdD1cIlwiPjwvYnV0dG9uPicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiY2xhc3M9XCJuZXh0X2J1dHRvbiBzbGlkZXJfX2Fycm93LWJ0blwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LXJpZ2h0LnN2Z1wiIGFsdD1cIlwiPjwvYnV0dG9uPicsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5hcnRpY2xlX19yZXZpZXdzLWl0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQpNC70LDQsyDQstC60LvRjtGH0ZHQvdC90L7RgdGC0Lgg0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgdmFyIHNsaWNrU2xpZGVyQWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgLy8g0JLQutC70Y7Rh9C10L3QuNC1INC40LvQuCDQstGL0LrQu9GO0YfQtdC90LjQtSDRgdC70LDQudC00LXRgNCwICjQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0YjQuNGA0LjQvdGLKVxyXG4gICAgZnVuY3Rpb24gY2hlY2tTbGlkZXIoKSB7XHJcblxyXG4gICAgICAgIC8vINCV0YHQu9C4INCy0YzRjtC/0L7RgNGCINGD0LbQtSDRh9C10LwgNTE0XHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNTQwIC0gZ2V0U2Nyb2xsKCkpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoc2xpY2tTbGlkZXJBY3RpdmUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICQoJyNtb2JpbGVPbmx5U2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLmNsaW5pY3NfX2l0ZW1zJykuYWRkQ2xhc3MoJ2NsaW5pY3NfX3NsaWRlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5yZXZpZXdzX19pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsaW5pY3NfX3NsaWRlci1idG5wcmV2IHByZXZfYnV0dG9uIHNsaWRlcl9fYXJyb3ctYnRuXCI+PGltZyBzcmM9XCJpbWcvaWNvbnMvYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJcIj48L2J1dHRvbj4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xpbmljc19fc2xpZGVyLWJ0bm5leHQgbmV4dF9idXR0b24gc2xpZGVyX19hcnJvdy1idG5cIj48aW1nIHNyYz1cImltZy9pY29ucy9hcnJvdy1yaWdodC5zdmdcIiBhbHQ9XCJcIj48L2J1dHRvbj4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpY2tTbGlkZXJBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNjQxKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHNsaWNrU2xpZGVyQWN0aXZlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcucmV2aWV3c19faXRlbXMnKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbGluaWNzX19zbGlkZXItYnRucHJldiBwcmV2X2J1dHRvbiBzbGlkZXJfX2Fycm93LWJ0blwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LWxlZnQuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsaW5pY3NfX3NsaWRlci1idG5uZXh0IG5leHRfYnV0dG9uIHNsaWRlcl9fYXJyb3ctYnRuXCI+PGltZyBzcmM9XCJpbWcvaWNvbnMvYXJyb3ctcmlnaHQuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNsaWNrU2xpZGVyQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAvLyDQldGB0LvQuCDRhNC70LDQsyDQstC60LvRjtGH0ZHQvdC90L7RgdGC0Lgg0L/QvtC00L3Rj9GCLCDQstGL0LrQu9GO0YfQsNC10Lwg0Lgg0L7Qv9GD0YHQutCw0LXQvCDRhNC70LDQs1xyXG4gICAgICAgICAgICBpZiAoc2xpY2tTbGlkZXJBY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgJCgnI21vYmlsZU9ubHlTbGlkZXInKS5zbGljaygndW5zbGljaycpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5yZXZpZXdzX19pdGVtcycpLnNsaWNrKCd1bnNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICQoJy5jbGluaWNzX19pdGVtcycpLnJlbW92ZUNsYXNzKCdjbGluaWNzX19zbGlkZXInKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzbGlja1NsaWRlckFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8g0J/QviDQs9C+0YLQvtCy0L3QvtGB0YLQuCBET00uLi5cclxuICAgIC8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICBjaGVja1NsaWRlcigpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8g0J/QviDQu9GO0LHQvtC80YMg0LjQt9C80LXQvdC10L3QuNGOINGA0LDQt9C80LXRgNCwINCy0YzRjtC/0L7RgNGC0LAuLi5cclxuICAgICQod2luZG93KS5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2hlY2tTbGlkZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbCgpIHtcclxuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xyXG4gICAgICAgIC8vICAgZGl2LnN0eWxlLndpZHRoID0gJzUwcHgnO1xyXG4gICAgICAgIC8vICAgZGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcclxuICAgICAgICAvLyAgIGRpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIHZhciBzY3JvbGxXaWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XHJcbiAgICAgICAgcmV0dXJuIHNjcm9sbFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8v0YHQutGA0L7Qu9C7INCy0LLQtdGA0YUg0L/RgNC4INC60LvQuNC60LUg0L3QsCDRgdGC0YDQtdC70LrRg1xyXG4gICAgJChcIi5zY3JvbGx0b3BcIikuaGlkZSgpO1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgICQoJy5zY3JvbGx0b3AnKS5mYWRlSW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuc2Nyb2xsdG9wJykuZmFkZU91dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5nb3RvdG9wJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gc2VsZWN0INGB0L/QtdGG0LjQsNC70YzQvdC+0YHRgtGMXHJcblxyXG4gICAgJCgnLnNlbGVjdCcpLm9uKCdjbGljaycsICcuc2VsZWN0X19oZWFkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnLnNlbGVjdF9faGVhZCcpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICQoJy5zZWxlY3RfX2xpc3QnKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5uZXh0KCkuZmFkZUluKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnNlbGVjdCcpLm9uKCdjbGljaycsICcuc2VsZWN0X19pdGVtJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy5zZWxlY3RfX2hlYWQnKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuZmFkZU91dCgpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucHJldigpLnRleHQoJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucHJldigpLnByZXYoKS52YWwoJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoISQoZS50YXJnZXQpLmNsb3Nlc3QoJy5zZWxlY3QnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnLnNlbGVjdF9faGVhZCcpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICQoJy5zZWxlY3RfX2xpc3QnKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyAgZW5kIHNlbGVjdFxyXG5cclxuICAgIC8vINC80LDRgdC60LAg0LTQu9GPINGC0LXQu9C10YTQvtC90LBcclxuXHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiLmlucHV0LXBob25lXCIpLm1hc2soXCIrNyAoOTk5KSA5OTktOTk5OVwiLCB7IGF1dG9jbGVhcjogZmFsc2UgfSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gd293IGpzXHJcbiAgICB2YXIgd293ID0gbmV3IFdPVyhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJveENsYXNzOiAnd293JywgICAgICAvLyBhbmltYXRlZCBlbGVtZW50IGNzcyBjbGFzcyAoZGVmYXVsdCBpcyB3b3cpXHJcbiAgICAgICAgICAgIGFuaW1hdGVDbGFzczogJ2FuaW1hdGVkJywgLy8gYW5pbWF0aW9uIGNzcyBjbGFzcyAoZGVmYXVsdCBpcyBhbmltYXRlZClcclxuICAgICAgICAgICAgb2Zmc2V0OiAzMDAsICAgICAgICAgIC8vIGRpc3RhbmNlIHRvIHRoZSBlbGVtZW50IHdoZW4gdHJpZ2dlcmluZyB0aGUgYW5pbWF0aW9uIChkZWZhdWx0IGlzIDApXHJcbiAgICAgICAgICAgIG1vYmlsZTogZmFsc2UsICAgICAgIC8vIHRyaWdnZXIgYW5pbWF0aW9ucyBvbiBtb2JpbGUgZGV2aWNlcyAoZGVmYXVsdCBpcyB0cnVlKVxyXG4gICAgICAgICAgICBsaXZlOiB0cnVlLCAgICAgICAvLyBhY3Qgb24gYXN5bmNocm9ub3VzbHkgbG9hZGVkIGNvbnRlbnQgKGRlZmF1bHQgaXMgdHJ1ZSlcclxuICAgICAgICAgICAgLy8gICBjYWxsYmFjazogICAgIGZ1bmN0aW9uKGJveCkge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhlIGNhbGxiYWNrIGlzIGZpcmVkIGV2ZXJ5IHRpbWUgYW4gYW5pbWF0aW9uIGlzIHN0YXJ0ZWRcclxuICAgICAgICAgICAgLy8gICAgIC8vIHRoZSBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCBpbiBpcyB0aGUgRE9NIG5vZGUgYmVpbmcgYW5pbWF0ZWRcclxuICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAvLyAgIHNjcm9sbENvbnRhaW5lcjogbnVsbCAvLyBvcHRpb25hbCBzY3JvbGwgY29udGFpbmVyIHNlbGVjdG9yLCBvdGhlcndpc2UgdXNlIHdpbmRvd1xyXG5cclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgd293LmluaXQoKTtcclxuXHJcbiAgICAvLyAgIHBvcHVwINCy0YvQsdC+0YAg0LPQvtGA0L7QtNCwXHJcblxyXG4gICAgJChcIi5tb2RhbC1jaXR5XCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykud3JhcCgnPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj4nKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5tb2RhbC1jbGluaWNzXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykud3JhcCgnPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj48L2Rpdj4nKVxyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5vcGVuLW1vZGFsXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uO1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBtb2RhbCA9ICQoJHRoaXMpLmRhdGEoXCJtb2RhbFwiKTtcclxuXHJcbiAgICAgICAgJChtb2RhbCkucGFyZW50cyhcIi5vdmVybGF5XCIpLmFkZENsYXNzKFwib3BlblwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChtb2RhbCkuYWRkQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgICAgIH0sIDM1MCk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICgkKHRhcmdldCkuaGFzQ2xhc3MoXCJvdmVybGF5XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRhcmdldCkuZmluZChcIi5tb2RhbC1jaXR5XCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKHRhcmdldCkuZmluZChcIi5tb2RhbC1jbGluaWNzXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRhcmdldCkucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSwgMzUwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLmNsb3NlLW1vZGFsXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uO1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBtb2RhbCA9ICQoJHRoaXMpLmRhdGEoXCJtb2RhbFwiKTtcclxuXHJcbiAgICAgICAgJChtb2RhbCkucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKG1vZGFsKS5wYXJlbnRzKFwiLm92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgICAgIH0sIDM1MCk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIC8vINGB0LrRgNC+0LvQu1xyXG4gICAgLy8gICAgICQoZnVuY3Rpb24oJCl7XHJcbiAgICAvLyAgICAgICAgICQod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgICAgICAgICAgJChcIiNtb2RhbCkubUN1c3RvbVNjcm9sbGJhcigpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcblxyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5vcGVuLW1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcImxvY2tcIik7XHJcbiAgICB9KVxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuY2xvc2UtbW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibG9ja1wiKTtcclxuICAgIH0pXHJcblxyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5vdmVybGF5Lm9wZW5cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibG9ja1wiKTtcclxuICAgIH0pXHJcblxyXG5cclxuICAgICQoXCIubW9kYWwtY2l0eVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gJCgnLmNvbnRlbnQnKS5tQ3VzdG9tU2Nyb2xsYmFyKFwidXBkYXRlXCIpO1xyXG4gICAgICAgICQoJy5jb250ZW50JykubUN1c3RvbVNjcm9sbGJhcihcInVwZGF0ZVwiKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyAkKFwiLmNvbnRlbnRcIikubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgXHJcblx0JCgnLnZpZGVvLXNsaWRlcicpLnNsaWNrKHtcclxuXHRcdHNsaWRlc1RvU2hvdzogNCxcclxuXHRcdHN3aXBlVG9TbGlkZTogdHJ1ZSxcclxuXHRcdC8vIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiY2xhc3M9XCJuZXdzX19zbGlkZXItYnRucHJldiBwcmV2X2J1dHRvbiBzbGlkZXJfX2Fycm93LWJ0blwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LWxlZnQuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cImNsYXNzPVwibmV3c19fc2xpZGVyLWJ0bm5leHQgbmV4dF9idXR0b24gc2xpZGVyX19hcnJvdy1idG5cIj48aW1nIHNyYz1cImltZy9pY29ucy9hcnJvdy1yaWdodC5zdmdcIiBhbHQ9XCJcIj48L2J1dHRvbj4nLFxyXG5cdFx0cmVzcG9uc2l2ZTogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YnJlYWtwb2ludDogMTMwMSxcclxuXHRcdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAzLFxyXG5cdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0e1xyXG5cdFx0XHRicmVha3BvaW50OiA5OTEsXHJcblx0XHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMixcclxuXHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0e1xyXG5cdFx0XHRicmVha3BvaW50OiA1ODAsXHJcblx0XHRcdFx0c2V0dGluZ3M6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMSxcclxuXHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRdXHJcblx0fSk7XHJcblxyXG5cdGZ1bmN0aW9uIFZpZGVvTGF1bmNoKCl7XHJcblx0XHRsZXQgdmlkZW8gPSAkKCcudi1zbGlkZXInKTtcclxuXHRcdGxldCBwbGF5ID0gJCgnLnYtcGxheScpO1xyXG5cdFx0bGV0IHN0b3AgPSAkKCcudi1zdG9wJyk7XHJcblx0XHRsZXQgbXV0ZSA9ICQoJy52LW11dGUnKTtcclxuXHRcdGxldCByYXNtdXRlID0gJCgnLnYtcmFzbXV0ZScpO1xyXG5cclxuXHRcdHBsYXkuY2xpY2soZnVuY3Rpb24oZSl7XHJcblx0XHRcdGxldCB2X2Jsb2NrID0gJCh0aGlzKS5wYXJlbnRzKCcudmlkZW8tY29udHJvbHMnKS5zaWJsaW5ncygnLnYtc2xpZGVyJyk7XHJcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblx0XHRcdCQodGhpcykuc2libGluZ3MoJy52LXN0b3AnKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblx0XHRcdHZfYmxvY2tbMF0ucGxheSgpO1xyXG5cdFx0fSk7XHJcblx0XHRzdG9wLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRsZXQgdl9ibG9jayA9ICQodGhpcykucGFyZW50cygnLnZpZGVvLWNvbnRyb2xzJykuc2libGluZ3MoJy52LXNsaWRlcicpO1xyXG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG5cdFx0XHQkKHRoaXMpLnNpYmxpbmdzKCcudi1wbGF5JykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cdFx0XHR2X2Jsb2NrWzBdLnBhdXNlKCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRtdXRlLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRsZXQgdl9ibG9jayA9ICQodGhpcykucGFyZW50cygnLnZpZGVvLWNvbnRyb2xzJykuc2libGluZ3MoJy52LXNsaWRlcicpO1xyXG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG5cdFx0XHQkKHRoaXMpLnNpYmxpbmdzKCcudi1yYXNtdXRlJykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cdFx0XHR2X2Jsb2NrWzBdLnZvbHVtZSA9IDAuMDtcclxuXHRcdH0pO1xyXG5cdFx0cmFzbXV0ZS5jbGljayhmdW5jdGlvbihlKXtcclxuXHRcdFx0bGV0IHZfYmxvY2sgPSAkKHRoaXMpLnBhcmVudHMoJy52aWRlby1jb250cm9scycpLnNpYmxpbmdzKCcudi1zbGlkZXInKTtcclxuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuXHRcdFx0JCh0aGlzKS5zaWJsaW5ncygnLnYtbXV0ZScpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHRcdFx0dl9ibG9ja1swXS52b2x1bWUgPSAxLjA7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0VmlkZW9MYXVuY2goKTtcclxuICAgIFxyXG4gICAgLyogVXBsb2FkIGltZyAqL1xyXG4gICAgZnVuY3Rpb24gcmVhZFVSTChpbnB1dCkge1xyXG4gICAgICAgIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xyXG4gICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgJCgnI2ltYWdlJykuYXR0cignc3JjJywgZS50YXJnZXQucmVzdWx0KS5zaG93KCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbnB1dC5maWxlc1swXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoXCIjaW1nSW5wdXRcIikuY2hhbmdlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmVhZFVSTCh0aGlzKTtcclxuICAgIH0pO1xyXG4gICAgLyogVXBsb2FkIGltZyBlbmQgKi9cclxuXHJcbiAgICAkKCcudG9nZ2xlLWZpbHRlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICAkKCcuZmlsdGVyX19jbGVhcicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgJCgnLmZpbHRlcl9fYmxvY2snKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5wcm9tb3Rpb25fX2l0ZW0taW5mbyAucHJvbW90aW9uX19pdGVtLWJ1dHRvbiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpLmZpbmQoJy5wcm9tb3Rpb25fX2l0ZW0tY29udGVudCcpLnNsaWRlRG93bigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnByb21vdGlvbl9faXRlbS1jb250ZW50IC5wcm9tb3Rpb25fX2l0ZW0tYnV0dG9uIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuZmluZCgnLnByb21vdGlvbl9faXRlbS1jb250ZW50Jykuc2xpZGVVcCgpO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
