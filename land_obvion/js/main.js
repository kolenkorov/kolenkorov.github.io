let pr = window.devicePixelRatio; 

var BrowserDetect = {
  init: function () {
	  this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
  },
  searchString: function (data) {
	  for (var i=0;i<data.length;i++) {
		  var dataString = data[i].string;
		  var dataProp = data[i].prop;
		  this.versionSearchString = data[i].versionSearch || data[i].identity;
		  if (dataString) {
		  if (dataString.indexOf(data[i].subString) != -1)
		  return data[i].identity;
		  }
		  else if (dataProp)
		  return data[i].identity;
	  }
  },
  dataBrowser: [
  {
	  string: navigator.userAgent,
	  subString: "Chrome",
	  identity: "Chrome"
  },
  {
	  string: navigator.vendor,
	  subString: "Apple",
	  identity: "Safari",
	  versionSearch: "Version"
  },
  {
	  prop: window.opera,
	  identity: "Opera",
	  versionSearch: "Version"
  },
  {
	  string: navigator.userAgent,
	  subString: "Firefox",
	  identity: "Firefox"
  },
  ],

};
BrowserDetect.init();

let ff;
let sf;
let ch;
if(BrowserDetect.browser == 'Firefox') {
	ff = (BrowserDetect.browser == 'Firefox');
}

if(BrowserDetect.browser == 'Chrome') {
	ch = (BrowserDetect.browser == 'Chrome');
}

if(BrowserDetect.browser == 'Safari') {
	sf = (BrowserDetect.browser == 'Safari');
}


$(window).on('load', function(){
	if(ff && (pr > 1) && $(window).width() > 1100) {
		$('header').css({transform: 'scale(0.8)', width: '125%'});
		$('header').css('transform-origin', '0 0');
		$('.container').css({transform: 'scale(0.8)',width: '125%',});
		$('.container').css('transform-origin', '0 100%');

		let mt = -($('html').outerHeight() / 100 * 20);
		$('.container').css('margin-top', mt);
	}
});

/* Scroll */
	if(!ff) {
		$('.header__menu-link').on('click', function(e){
			e.preventDefault();
			let selector = $(this).attr('href');
			let h = $(selector);

			$('html, body').animate({
				scrollTop: h.position().top - (h.position().top * 0.2) - 65
			}, 800);
		});
	} else if (ff) {
		$('.header__menu-link').on('click', function(e){
			e.preventDefault();
			let selector = $(this).attr('href');
			let h = $(selector);

			$('html, body').animate({
				scrollTop: h.position().top - 65
			}, 800);
		});
	}
	
	$('.header__logo, .up').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	});

/* Scroll end */

/* Select */
	$('select').styler();
/* Select */

/* More */
	$('.token__more-button').on('click', function(e){
		e.preventDefault();
		$(this).parent().toggleClass('active');
		$('.token__more-block').slideToggle(350);
	});

	$(document).mouseup(function (e){
	    let dropdown = $('.token__more-block');
	    if (!dropdown.is(e.target) 
	        && dropdown.has(e.target).length === 0) {
	        if (!$(e.target).hasClass('token__more-button')) {
	            dropdown.slideUp();
	            $('.token__more').removeClass('active');
	        }
	    }
	});
/* More end */

/* Menu */
	$('.header__burger').on('click', function(){
		$(this).toggleClass('active')
		$('.header__menu').toggleClass('active');
	});
/* Menu end */

/* Animation */
	$('.main__anim').addClass('animate');
	$('.main__item-img').on('click', function(){
		$('.main__anim').addClass('reverse');
		$('.main__anim').removeClass('animate');
		setTimeout(function(){
			$('.main__anim').removeClass('reverse');
		},2000);

		setTimeout(function(){
			$('.main__anim').addClass('animate');
		},3000);
	});
/* Animation end */

/* Buttons */
	$('a.video').on('click', function(e){
		e.preventDefault();
		let current = $(this)
		current.addClass('hide');
		current.next().addClass('active');

		setTimeout(function(){
			current.next().removeClass('active');
			current.removeClass('hide');
		}, 5500);
	});
/* Buttons end */

/* Up */
	$(window).scroll(function(){
		if($(window).scrollTop() > 150) {
			$('.up').addClass('active');
		} else {
			$('.up').removeClass('active');
		}
	});
/* Up end */