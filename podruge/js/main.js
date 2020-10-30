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
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vINC70LjQv9C60L7QtSDQvNC10L3RjlxyXG4gICAgbGV0IGhlYWRlciA9ICQoXCIjaGVhZGVyXCIpO1xyXG4gICAgbGV0IGludHJvID0gJChcIiNpbnRyb1wiKTtcclxuICAgIGxldCBpbnRyb0g7XHJcbiAgICBsZXQgc2Nyb2xsUG9zID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICQod2luZG93KS5vbignc2Nyb2xsIGxvYWQgcmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGludHJvSCA9IGludHJvLmlubmVySGVpZ2h0KCk7XHJcbiAgICAgICAgc2Nyb2xsUG9zID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcclxuICAgICAgICB2YXIgZGlmZiA9IHNjcm9sbFBvcztcclxuICAgICAgICBpZihzY3JvbGxQb3MgPiA1NCl7XHJcbiAgICAgICAgICAgIHNjcm9sbFBvcyA9IDU0O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmIChzY3JvbGxQb3MgPiAwKSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5hZGRDbGFzcyhcImZpeGVkX1wiKTtcclxuICAgICAgICAgICAgaGVhZGVyLmFkZENsYXNzKFwiZml4ZWRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKFwiZml4ZWRfXCIpO1xyXG4gICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoXCJmaXhlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoICQod2luZG93KS53aWR0aCgpID4gNjQwICl7XHJcbiAgICAgICAgICAgIHNjcm9sbFBvcyA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoZWFkZXIuY3NzKHtcInRvcFwiOlwiLVwiK3Njcm9sbFBvcytcInB4XCJ9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtZW51ID0gJChcIiNtZW51XCIpO1xyXG4gICAgICAgICQoJ2EnLCBtZW51KS5ob3ZlcihcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnPnVsJywgdGhpcykuYXR0cignc3R5bGUnLCAnJykgLy/Rg9C00LDQu9C40Lwg0YHRgtC40LvQuCDQvtGB0YLQsNCy0YjQuNC10YHRjyDQv9C+0YHQu9C1IGhpZGUoKS9zaG93KClcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2ZhZGVJblVwJylcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoJz51bCcsIHRoaXMpLnNob3coMClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdmYWRlT3V0RG93bicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDEwMCkuaGlkZSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vINC/0YDQuNGB0LLQvtC10L3QuNC1INC60LvQsNGB0YHQsCAtLWFjdGl2ZSDQuCDQv9C+0LTRgdCy0LXRgtC60LAgINCy0YvQsdGA0LDQvdC90L7Qs9C+INC/0YPQvdC60YLQsCDQvNC10L3RjlxyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcInVsIC5tZW51X19saXN0LWl0ZW1cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ21lbnVfX2xpc3QtaXRlbS0tYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnbWVudV9fbGlzdC1pdGVtLS1hY3RpdmUnKVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcuaGVhZGVyX19pbnRyby1zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICAgICAgZmFkZTogdHJ1ZVxyXG4gICAgICAgICAgICAvLyBhdXRvcGxheTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuY2xpbmljc19fc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG5cclxuICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbGluaWNzX19zbGlkZXItYnRucHJldiBwcmV2X2J1dHRvbiBzbGlkZXJfX2Fycm93LWJ0blwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LWxlZnQuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbGluaWNzX19zbGlkZXItYnRubmV4dCBuZXh0X2J1dHRvbiBzbGlkZXJfX2Fycm93LWJ0blwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LXJpZ2h0LnN2Z1wiIGFsdD1cIlwiPjwvYnV0dG9uPicsXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMzAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU0MSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5jb3NtZXRvbG9nc19fc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICAgICAgICAgIHN3aXBlVG9TbGlkZTogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gc2xpZGVzVG9TY3JvbGw6IDEsXHJcblxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cImNsYXNzPVwiY29zbWV0b2xvZ3NfX3NsaWRlci1idG5wcmV2IHByZXZfYnV0dG9uIHNsaWRlcl9fYXJyb3ctYnRuXCI+PGltZyBzcmM9XCJpbWcvaWNvbnMvYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJcIj48L2J1dHRvbj4nLFxyXG4gICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cImNsYXNzPVwiY29zbWV0b2xvZ3NfX3NsaWRlci1idG5uZXh0IG5leHRfYnV0dG9uIHNsaWRlcl9fYXJyb3ctYnRuXCI+PGltZyBzcmM9XCJpbWcvaWNvbnMvYXJyb3ctcmlnaHQuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzMDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU0MSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5uZXdzX19zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiY2xhc3M9XCJuZXdzX19zbGlkZXItYnRucHJldiBwcmV2X2J1dHRvbiBzbGlkZXJfX2Fycm93LWJ0blwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LWxlZnQuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJjbGFzcz1cIm5ld3NfX3NsaWRlci1idG5uZXh0IG5leHRfYnV0dG9uIHNsaWRlcl9fYXJyb3ctYnRuXCI+PGltZyBzcmM9XCJpbWcvaWNvbnMvYXJyb3ctcmlnaHQuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzMDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuaW5uZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiB0cnVlLFxyXG5cclxuXHJcbiAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiY2xhc3M9XCJuZXdzX19zbGlkZXItYnRucHJldiBwcmV2X2J1dHRvbiBzbGlkZXJfX2Fycm93LWJ0blwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LWxlZnQuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJjbGFzcz1cIm5ld3NfX3NsaWRlci1idG5uZXh0IG5leHRfYnV0dG9uIHNsaWRlcl9fYXJyb3ctYnRuXCI+PGltZyBzcmM9XCJpbWcvaWNvbnMvYXJyb3ctcmlnaHQuc3ZnXCIgYWx0PVwiXCI+PC9idXR0b24+JyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnLmNsaW5pYy1pbmZvX19zbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiB0cnVlLFxyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cImNsYXNzPVwicHJldl9idXR0b24gc2xpZGVyX19hcnJvdy1idG5cIj48aW1nIHNyYz1cImltZy9pY29ucy9hcnJvdy1sZWZ0LnN2Z1wiIGFsdD1cIlwiPjwvYnV0dG9uPicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiY2xhc3M9XCJuZXh0X2J1dHRvbiBzbGlkZXJfX2Fycm93LWJ0blwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LXJpZ2h0LnN2Z1wiIGFsdD1cIlwiPjwvYnV0dG9uPicsXHJcblxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBjdXN0b21QYWdpbmcgOiBmdW5jdGlvbihzbGlkZXIsIGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aHVtYiA9ICQoc2xpZGVyLiRzbGlkZXNbaV0pLmRhdGEoJ2ltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIHN0eWxlPSdiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIrdGh1bWIrXCIpJz48L2E+XCI7XHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI0MSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDY0MSxcclxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vINCk0LvQsNCzINCy0LrQu9GO0YfRkdC90L3QvtGB0YLQuCDRgdC70LDQudC00LXRgNCwXHJcbiAgICB2YXIgc2xpY2tTbGlkZXJBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAvLyDQktC60LvRjtGH0LXQvdC40LUg0LjQu9C4INCy0YvQutC70Y7Rh9C10L3QuNC1INGB0LvQsNC50LTQtdGA0LAgKNCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDRiNC40YDQuNC90YspXHJcbiAgICBmdW5jdGlvbiBjaGVja1NsaWRlcigpIHtcclxuXHJcbiAgICAgICAgLy8g0JXRgdC70Lgg0LLRjNGO0L/QvtGA0YIg0YPQttC1INGH0LXQvCA1MTRcclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA1NDAgLSBnZXRTY3JvbGwoKSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChzbGlja1NsaWRlckFjdGl2ZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgJCgnI21vYmlsZU9ubHlTbGlkZXInKS5zbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcuY2xpbmljc19faXRlbXMnKS5hZGRDbGFzcygnY2xpbmljc19fc2xpZGVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLnJldmlld3NfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xpbmljc19fc2xpZGVyLWJ0bnByZXYgcHJldl9idXR0b24gc2xpZGVyX19hcnJvdy1idG5cIj48aW1nIHNyYz1cImltZy9pY29ucy9hcnJvdy1sZWZ0LnN2Z1wiIGFsdD1cIlwiPjwvYnV0dG9uPicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbGluaWNzX19zbGlkZXItYnRubmV4dCBuZXh0X2J1dHRvbiBzbGlkZXJfX2Fycm93LWJ0blwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LXJpZ2h0LnN2Z1wiIGFsdD1cIlwiPjwvYnV0dG9uPicsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzbGlja1NsaWRlckFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA2NDEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoc2xpY2tTbGlkZXJBY3RpdmUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICQoJy5yZXZpZXdzX19pdGVtcycpLnNsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsaW5pY3NfX3NsaWRlci1idG5wcmV2IHByZXZfYnV0dG9uIHNsaWRlcl9fYXJyb3ctYnRuXCI+PGltZyBzcmM9XCJpbWcvaWNvbnMvYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJcIj48L2J1dHRvbj4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xpbmljc19fc2xpZGVyLWJ0bm5leHQgbmV4dF9idXR0b24gc2xpZGVyX19hcnJvdy1idG5cIj48aW1nIHNyYz1cImltZy9pY29ucy9hcnJvdy1yaWdodC5zdmdcIiBhbHQ9XCJcIj48L2J1dHRvbj4nLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpY2tTbGlkZXJBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIC8vINCV0YHQu9C4INGE0LvQsNCzINCy0LrQu9GO0YfRkdC90L3QvtGB0YLQuCDQv9C+0LTQvdGP0YIsINCy0YvQutC70Y7Rh9Cw0LXQvCDQuCDQvtC/0YPRgdC60LDQtdC8INGE0LvQsNCzXHJcbiAgICAgICAgICAgIGlmIChzbGlja1NsaWRlckFjdGl2ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjbW9iaWxlT25seVNsaWRlcicpLnNsaWNrKCd1bnNsaWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLnJldmlld3NfX2l0ZW1zJykuc2xpY2soJ3Vuc2xpY2snKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJCgnLmNsaW5pY3NfX2l0ZW1zJykucmVtb3ZlQ2xhc3MoJ2NsaW5pY3NfX3NsaWRlcicpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNsaWNrU2xpZGVyQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDQn9C+INCz0L7RgtC+0LLQvdC+0YHRgtC4IERPTS4uLlxyXG4gICAgLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgIGNoZWNrU2xpZGVyKCk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyDQn9C+INC70Y7QsdC+0LzRgyDQuNC30LzQtdC90LXQvdC40Y4g0YDQsNC30LzQtdGA0LAg0LLRjNGO0L/QvtGA0YLQsC4uLlxyXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkIHJlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjaGVja1NsaWRlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsKCkge1xyXG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXYuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcbiAgICAgICAgLy8gICBkaXYuc3R5bGUud2lkdGggPSAnNTBweCc7XHJcbiAgICAgICAgLy8gICBkaXYuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xyXG4gICAgICAgIC8vICAgZGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgdmFyIHNjcm9sbFdpZHRoID0gZGl2Lm9mZnNldFdpZHRoIC0gZGl2LmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcclxuICAgICAgICByZXR1cm4gc2Nyb2xsV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLy/RgdC60YDQvtC70Lsg0LLQstC10YDRhSDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINGB0YLRgNC10LvQutGDXHJcbiAgICAkKFwiLnNjcm9sbHRvcFwiKS5oaWRlKCk7XHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEwMDApIHtcclxuICAgICAgICAgICAgJCgnLnNjcm9sbHRvcCcpLmZhZGVJbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5zY3JvbGx0b3AnKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLmdvdG90b3AnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBzZWxlY3Qg0YHQv9C10YbQuNCw0LvRjNC90L7RgdGC0YxcclxuXHJcbiAgICAkKCcuc2VsZWN0Jykub24oJ2NsaWNrJywgJy5zZWxlY3RfX2hlYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgICAgICQodGhpcykubmV4dCgpLmZhZGVPdXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0X19oZWFkJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgJCgnLnNlbGVjdF9fbGlzdCcpLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLm5leHQoKS5mYWRlSW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuc2VsZWN0Jykub24oJ2NsaWNrJywgJy5zZWxlY3RfX2l0ZW0nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLnNlbGVjdF9faGVhZCcpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5mYWRlT3V0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkudGV4dCgkKHRoaXMpLnRleHQoKSk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkucHJldigpLnZhbCgkKHRoaXMpLnRleHQoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnLnNlbGVjdCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKCcuc2VsZWN0X19oZWFkJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgJCgnLnNlbGVjdF9fbGlzdCcpLmZhZGVPdXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vICBlbmQgc2VsZWN0XHJcblxyXG4gICAgLy8g0LzQsNGB0LrQsCDQtNC70Y8g0YLQtdC70LXRhNC+0L3QsFxyXG5cclxuICAgICQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuaW5wdXQtcGhvbmVcIikubWFzayhcIis3ICg5OTkpIDk5OS05OTk5XCIsIHsgYXV0b2NsZWFyOiBmYWxzZSB9KTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyB3b3cganNcclxuICAgIHZhciB3b3cgPSBuZXcgV09XKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYm94Q2xhc3M6ICd3b3cnLCAgICAgIC8vIGFuaW1hdGVkIGVsZW1lbnQgY3NzIGNsYXNzIChkZWZhdWx0IGlzIHdvdylcclxuICAgICAgICAgICAgYW5pbWF0ZUNsYXNzOiAnYW5pbWF0ZWQnLCAvLyBhbmltYXRpb24gY3NzIGNsYXNzIChkZWZhdWx0IGlzIGFuaW1hdGVkKVxyXG4gICAgICAgICAgICBvZmZzZXQ6IDMwMCwgICAgICAgICAgLy8gZGlzdGFuY2UgdG8gdGhlIGVsZW1lbnQgd2hlbiB0cmlnZ2VyaW5nIHRoZSBhbmltYXRpb24gKGRlZmF1bHQgaXMgMClcclxuICAgICAgICAgICAgbW9iaWxlOiBmYWxzZSwgICAgICAgLy8gdHJpZ2dlciBhbmltYXRpb25zIG9uIG1vYmlsZSBkZXZpY2VzIChkZWZhdWx0IGlzIHRydWUpXHJcbiAgICAgICAgICAgIGxpdmU6IHRydWUsICAgICAgIC8vIGFjdCBvbiBhc3luY2hyb25vdXNseSBsb2FkZWQgY29udGVudCAoZGVmYXVsdCBpcyB0cnVlKVxyXG4gICAgICAgICAgICAvLyAgIGNhbGxiYWNrOiAgICAgZnVuY3Rpb24oYm94KSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGUgY2FsbGJhY2sgaXMgZmlyZWQgZXZlcnkgdGltZSBhbiBhbmltYXRpb24gaXMgc3RhcnRlZFxyXG4gICAgICAgICAgICAvLyAgICAgLy8gdGhlIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIGluIGlzIHRoZSBET00gbm9kZSBiZWluZyBhbmltYXRlZFxyXG4gICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgc2Nyb2xsQ29udGFpbmVyOiBudWxsIC8vIG9wdGlvbmFsIHNjcm9sbCBjb250YWluZXIgc2VsZWN0b3IsIG90aGVyd2lzZSB1c2Ugd2luZG93XHJcblxyXG4gICAgICAgIH1cclxuICAgICk7XHJcbiAgICB3b3cuaW5pdCgpO1xyXG5cclxuICAgIC8vICAgcG9wdXAg0LLRi9Cx0L7RgCDQs9C+0YDQvtC00LBcclxuXHJcbiAgICAkKFwiLm1vZGFsLWNpdHlcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS53cmFwKCc8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PicpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLm1vZGFsLWNsaW5pY3NcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS53cmFwKCc8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPjwvZGl2PicpXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKFwiLm9wZW4tbW9kYWxcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb247XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG1vZGFsID0gJCgkdGhpcykuZGF0YShcIm1vZGFsXCIpO1xyXG5cclxuICAgICAgICAkKG1vZGFsKS5wYXJlbnRzKFwiLm92ZXJsYXlcIikuYWRkQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKG1vZGFsKS5hZGRDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAgICAgfSwgMzUwKTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCQodGFyZ2V0KS5oYXNDbGFzcyhcIm92ZXJsYXlcIikpIHtcclxuICAgICAgICAgICAgICAgICQodGFyZ2V0KS5maW5kKFwiLm1vZGFsLWNpdHlcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQodGFyZ2V0KS5maW5kKFwiLm1vZGFsLWNsaW5pY3NcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGFyZ2V0KS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICB9LCAzNTApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuY2xvc2UtbW9kYWxcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb247XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgIG1vZGFsID0gJCgkdGhpcykuZGF0YShcIm1vZGFsXCIpO1xyXG5cclxuICAgICAgICAkKG1vZGFsKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQobW9kYWwpLnBhcmVudHMoXCIub3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAgICAgfSwgMzUwKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gLy8g0YHQutGA0L7Qu9C7XHJcbiAgICAvLyAgICAgJChmdW5jdGlvbigkKXtcclxuICAgIC8vICAgICAgICAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgICAgICAgICAkKFwiI21vZGFsKS5tQ3VzdG9tU2Nyb2xsYmFyKCk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLm9wZW4tbW9kYWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwibG9ja1wiKTtcclxuICAgIH0pXHJcblxyXG4gICAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5jbG9zZS1tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJsb2NrXCIpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLm92ZXJsYXkub3BlblwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJsb2NrXCIpO1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgJChcIi5tb2RhbC1jaXR5XCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyAkKCcuY29udGVudCcpLm1DdXN0b21TY3JvbGxiYXIoXCJ1cGRhdGVcIik7XHJcbiAgICAgICAgJCgnLmNvbnRlbnQnKS5tQ3VzdG9tU2Nyb2xsYmFyKFwidXBkYXRlXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vICQoXCIuY29udGVudFwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxuXHQkKCcudmlkZW8tc2xpZGVyJykuc2xpY2soe1xyXG5cdFx0c2xpZGVzVG9TaG93OiA0LFxyXG5cdFx0c3dpcGVUb1NsaWRlOiB0cnVlLFxyXG5cdFx0Ly8gc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJjbGFzcz1cIm5ld3NfX3NsaWRlci1idG5wcmV2IHByZXZfYnV0dG9uIHNsaWRlcl9fYXJyb3ctYnRuXCI+PGltZyBzcmM9XCJpbWcvaWNvbnMvYXJyb3ctbGVmdC5zdmdcIiBhbHQ9XCJcIj48L2J1dHRvbj4nLFxyXG4gICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiY2xhc3M9XCJuZXdzX19zbGlkZXItYnRubmV4dCBuZXh0X2J1dHRvbiBzbGlkZXJfX2Fycm93LWJ0blwiPjxpbWcgc3JjPVwiaW1nL2ljb25zL2Fycm93LXJpZ2h0LnN2Z1wiIGFsdD1cIlwiPjwvYnV0dG9uPicsXHJcblx0XHRyZXNwb25zaXZlOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRicmVha3BvaW50OiAxMzAxLFxyXG5cdFx0XHRcdHNldHRpbmdzOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDMsXHJcblx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR7XHJcblx0XHRcdGJyZWFrcG9pbnQ6IDk5MSxcclxuXHRcdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAyLFxyXG5cdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDFcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR7XHJcblx0XHRcdGJyZWFrcG9pbnQ6IDU4MCxcclxuXHRcdFx0XHRzZXR0aW5nczoge1xyXG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDFcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gVmlkZW9MYXVuY2goKXtcclxuXHRcdGxldCB2aWRlbyA9ICQoJy52LXNsaWRlcicpO1xyXG5cdFx0bGV0IHBsYXkgPSAkKCcudi1wbGF5Jyk7XHJcblx0XHRsZXQgc3RvcCA9ICQoJy52LXN0b3AnKTtcclxuXHRcdGxldCBtdXRlID0gJCgnLnYtbXV0ZScpO1xyXG5cdFx0bGV0IHJhc211dGUgPSAkKCcudi1yYXNtdXRlJyk7XHJcblxyXG5cdFx0cGxheS5jbGljayhmdW5jdGlvbihlKXtcclxuXHRcdFx0bGV0IHZfYmxvY2sgPSAkKHRoaXMpLnBhcmVudHMoJy52aWRlby1jb250cm9scycpLnNpYmxpbmdzKCcudi1zbGlkZXInKTtcclxuXHRcdFx0JCh0aGlzKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuXHRcdFx0JCh0aGlzKS5zaWJsaW5ncygnLnYtc3RvcCcpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuXHRcdFx0dl9ibG9ja1swXS5wbGF5KCk7XHJcblx0XHR9KTtcclxuXHRcdHN0b3AuY2xpY2soZnVuY3Rpb24oZSl7XHJcblx0XHRcdGxldCB2X2Jsb2NrID0gJCh0aGlzKS5wYXJlbnRzKCcudmlkZW8tY29udHJvbHMnKS5zaWJsaW5ncygnLnYtc2xpZGVyJyk7XHJcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblx0XHRcdCQodGhpcykuc2libGluZ3MoJy52LXBsYXknKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblx0XHRcdHZfYmxvY2tbMF0ucGF1c2UoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG11dGUuY2xpY2soZnVuY3Rpb24oZSl7XHJcblx0XHRcdGxldCB2X2Jsb2NrID0gJCh0aGlzKS5wYXJlbnRzKCcudmlkZW8tY29udHJvbHMnKS5zaWJsaW5ncygnLnYtc2xpZGVyJyk7XHJcblx0XHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblx0XHRcdCQodGhpcykuc2libGluZ3MoJy52LXJhc211dGUnKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcblx0XHRcdHZfYmxvY2tbMF0udm9sdW1lID0gMC4wO1xyXG5cdFx0fSk7XHJcblx0XHRyYXNtdXRlLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRsZXQgdl9ibG9jayA9ICQodGhpcykucGFyZW50cygnLnZpZGVvLWNvbnRyb2xzJykuc2libGluZ3MoJy52LXNsaWRlcicpO1xyXG5cdFx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG5cdFx0XHQkKHRoaXMpLnNpYmxpbmdzKCcudi1tdXRlJykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG5cdFx0XHR2X2Jsb2NrWzBdLnZvbHVtZSA9IDEuMDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRWaWRlb0xhdW5jaCgpO1xyXG4gICAgXHJcbiAgICAvKiBVcGxvYWQgaW1nICovXHJcbiAgICBmdW5jdGlvbiByZWFkVVJMKGlucHV0KSB7XHJcbiAgICAgICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjaW1hZ2UnKS5hdHRyKCdzcmMnLCBlLnRhcmdldC5yZXN1bHQpLnNob3coKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGlucHV0LmZpbGVzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJChcIiNpbWdJbnB1dFwiKS5jaGFuZ2UoZnVuY3Rpb24oKXtcclxuICAgICAgICByZWFkVVJMKHRoaXMpO1xyXG4gICAgfSk7XHJcbiAgICAvKiBVcGxvYWQgaW1nIGVuZCAqL1xyXG5cclxuICAgICQoJy50b2dnbGUtZmlsdGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaGlkZScpO1xyXG4gICAgICAgICQoJy5maWx0ZXJfX2NsZWFyJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAkKCcuZmlsdGVyX19ibG9jaycpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
