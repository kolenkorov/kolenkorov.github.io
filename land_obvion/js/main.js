	// let userAgent = navigator.userAgent.toLowerCase();
	let pr = window.devicePixelRatio; 
/*	let ff = /firefox/.test(userAgent);
	let ch = /chrome/.test(userAgent);
	let sf = /safari/.test(userAgent);
	let op  = /opera/.test(userAgent);

	if(ff > 0) {
		console.log('firefox');
	}

	if (ch > 0) {
		console.log('chrome');
	}

	if (sf > 0) {
		console.log('safari');
	}*/

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

if(ff) {
	console.log('firemox');
}

if(ch) {
	console.log('chrome');
}

if(sf) {
	console.log('safari');
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
	if(sf && ($(window).width() > 960)) {
		$('.header__menu-link').on('click', function(e){
			e.preventDefault();
			let selector = $(this).attr('href');
			let h = $(selector);

			$('html, body').animate({
				scrollTop: h.offset().top - (h.offset().top * 0.21)
			}, 800);
		});
	}

	if((pr > 1) && $(window).width() <= 960) {
		$(window).on('load', function() {
			let hh = $('header').height();
			let hm = $('.header__menu').outerHeight() - 12;

			$('.header__menu-link').on('click', function(e){
				e.preventDefault();
				let selector = $(this).attr('href');
				let h = $(selector);

				let offset = 3;
				$(h).prevAll().each(function() {
					offset += parseFloat($(this).outerHeight())
				});

				if(pr > 1) {
					offset = offset - (offset * 0.2)
				} else {
					offset = offset
				}

				$('html, body').animate({
					scrollTop: offset
				}, 1000);
			});

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
	            // dropdown.removeClass('open');
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




/* Scroll */
/*$(window).on('load', function() {
	let hh = $('header').outerHeight();
	let hm = $('.header__menu').outerHeight() - 15;

	if(ff) {
		$('.header__menu-link').on('click', function(e){
			e.preventDefault();
			let selector = $(this).attr('href');
			let h = $(selector);

			let offset = 0;
			$(h).prevAll().each(function() {
				offset += parseFloat($(this).outerHeight())
			});

			if(pr > 1) {
				offset = offset - (offset / 100 * 20) - hm
			} else {
				offset = offset
			}

			$('html, body').animate({
				scrollTop: offset
			}, 800);

			console.log('ff');
		});
	} else {
		$('.header__menu-link').on('click', function(e){
			e.preventDefault();
			let selector = $(this).attr('href');
			let h = $(selector);

			$('html, body').animate({
				scrollTop: h.offset().top - hh
			}, 800);

			console.log('ne ff');			
		});
	}

	$('.header__logo, .up').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	});
});*/
/* Scroll end */

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qJC5jc3NOdW1iZXIuem9vbSA9IHRydWU7XHJcbmlmICghKFwiem9vbVwiIGluIGRvY3VtZW50LmJvZHkuc3R5bGUpKSB7XHJcblx0JC5jc3NIb29rcy56b29tID0ge1xyXG5cdFx0Z2V0OiBmdW5jdGlvbihlbGVtLCBjb21wdXRlZCwgZXh0cmEpIHtcclxuXHRcdFx0dmFyIHZhbHVlID0gJChlbGVtKS5kYXRhKCd6b29tJyk7XHJcblx0XHRcdHJldHVybiB2YWx1ZSAhPSBudWxsID8gdmFsdWUgOiAxO1xyXG5cdFx0fSxcclxuXHRcdHNldDogZnVuY3Rpb24oZWxlbSwgdmFsdWUpIHtcclxuXHRcdFx0dmFyICRlbGVtID0gJChlbGVtKTtcclxuXHRcdFx0dmFyIHNpemUgPSB7IC8vIHdpdGhvdXQgbWFyZ2luXHJcblx0XHRcdFx0d2lkdGg6ICRlbGVtLm91dGVyV2lkdGgoKSxcclxuXHRcdFx0XHRoZWlnaHQ6ICRlbGVtLm91dGVySGVpZ2h0KClcclxuXHRcdFx0fTtcclxuXHRcdFx0JGVsZW0uZGF0YSgnem9vbScsIHZhbHVlKTtcclxuXHRcdFx0aWYgKHZhbHVlICE9IDEpIHtcclxuXHRcdFx0XHQkZWxlbS5jc3Moe1xyXG5cdFx0XHRcdFx0TW96VHJhbnNmb3JtOiAnc2NhbGUoJyArIHZhbHVlICsgJyknLFxyXG5cdFx0XHRcdFx0Ly8gbWFyZ2luTGVmdDogKHNpemUud2lkdGggKiB2YWx1ZSAtIHNpemUud2lkdGgpIC8gMixcclxuXHRcdFx0XHRcdC8vIG1hcmdpblJpZ2h0OiAoc2l6ZS53aWR0aCAqIHZhbHVlIC0gc2l6ZS53aWR0aCkgLyAyLFxyXG5cdFx0XHRcdFx0Ly8gbWFyZ2luVG9wOiAtKHNpemUuaGVpZ2h0IC8gMTAwICogMjAgKyAyMCkgLyAyLFxyXG5cdFx0XHRcdFx0bWFyZ2luQm90dG9tOiAtKHNpemUuaGVpZ2h0IC8gMTAwICogMjApKjEuNVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRlbGVtLmNzcyh7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06IG51bGwsXHJcblx0XHRcdFx0XHRtYXJnaW46IG51bGxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuKi9cclxuXHJcblxyXG4vKiBTZWxlY3QgKi9cclxuXHQkKCdzZWxlY3QnKS5zdHlsZXIoKTtcclxuLyogU2VsZWN0ICovXHJcblxyXG4vKiBTbGlkZXIgKi9cclxuXHQkKCcubWFpbl9fc2xpZGVyJykub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0aXRlbXM6IDEsXHJcblx0XHRsb29wOiB0cnVlLFxyXG5cdFx0bWFyZ2luOiA1MCxcclxuXHRcdG5hdjogZmFsc2UsXHJcblx0XHRkb3RzOiB0cnVlLFxyXG5cdFx0cmVzcG9uc2l2ZTp7XHJcblx0ICAgICAgICAwOntcclxuXHQgICAgICAgICAgICBtYXJnaW46IDBcclxuXHQgICAgICAgIH0sXHJcblx0ICAgICAgICA5ODA6e1xyXG5cdCAgICAgICAgICBtYXJnaW46IDIwMCAgXHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAgMTI4MDp7XHJcblx0ICAgICAgICAgICAgbWFyZ2luOiA1MFxyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblx0fSk7XHJcbi8qIFNsaWRlciBlbmQgKi9cclxuXHJcbi8qIE1vcmUgKi9cclxuXHQkKCcudG9rZW5fX21vcmUtYnV0dG9uIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQodGhpcykucGFyZW50KCkucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLnRva2VuX19tb3JlLWJsb2NrJykuc2xpZGVUb2dnbGUoKTtcclxuXHR9KTtcclxuLyogTW9yZSBlbmQgKi9cclxuXHJcbi8qIE1lbnUgKi9cclxuXHQkKCcuaGVhZGVyX19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuXHRcdCQoJy5oZWFkZXJfX21lbnUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcbi8qIE1lbnUgZW5kICovXHJcblxyXG4vKiBTY3JvbGwgKi9cclxuXHQkKCcuaGVhZGVyX19tZW51LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCBoaCA9ICQoJ2hlYWRlcicpLmhlaWdodCgpO1xyXG5cdFx0bGV0IHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHRsZXQgaCA9ICQoc2VsZWN0b3IpO1xyXG5cclxuXHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0c2Nyb2xsVG9wOiBoLm9mZnNldCgpLnRvcCAtIChoaCArIDUwKSBcclxuXHRcdH0sIDgwMCk7XHJcblx0fSk7XHJcbi8qIFNjcm9sbCBlbmQgKi9cclxuXHJcbmxldCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbmxldCBwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvOyBcclxubGV0IGZmID0gL2ZpcmVmb3gvLnRlc3QodXNlckFnZW50KTtcclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCl7XHJcblx0aWYoZmYgJiYgKHByID4gMSkgJiYgJCh3aW5kb3cpLndpZHRoKCkgPiAxMTAwKSB7XHJcblx0XHQkKCdoZWFkZXInKS5jc3Moe3RyYW5zZm9ybTogJ3NjYWxlKDAuOCknLCB3aWR0aDogJzEyNSUnfSk7XHJcblx0XHQkKCdoZWFkZXInKS5jc3MoJ3RyYW5zZm9ybS1vcmlnaW4nLCAnMCAwJyk7XHJcblx0XHQkKCcuY29udGFpbmVyJykuY3NzKHt0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyx3aWR0aDogJzEyNSUnLH0pO1xyXG5cdFx0JCgnLmNvbnRhaW5lcicpLmNzcygndHJhbnNmb3JtLW9yaWdpbicsICcwIDEwMCUnKTtcclxuXHJcblx0XHRsZXQgbXQgPSAtKCQoJ2h0bWwnKS5vdXRlckhlaWdodCgpIC8gMTAwICogMjApO1xyXG5cdFx0JCgnLmNvbnRhaW5lcicpLmNzcygnbWFyZ2luLXRvcCcsIG10KTtcclxuXHR9XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlx0Ly8gbGV0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuXHRsZXQgcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbzsgXHJcbi8qXHRsZXQgZmYgPSAvZmlyZWZveC8udGVzdCh1c2VyQWdlbnQpO1xyXG5cdGxldCBjaCA9IC9jaHJvbWUvLnRlc3QodXNlckFnZW50KTtcclxuXHRsZXQgc2YgPSAvc2FmYXJpLy50ZXN0KHVzZXJBZ2VudCk7XHJcblx0bGV0IG9wICA9IC9vcGVyYS8udGVzdCh1c2VyQWdlbnQpO1xyXG5cclxuXHRpZihmZiA+IDApIHtcclxuXHRcdGNvbnNvbGUubG9nKCdmaXJlZm94Jyk7XHJcblx0fVxyXG5cclxuXHRpZiAoY2ggPiAwKSB7XHJcblx0XHRjb25zb2xlLmxvZygnY2hyb21lJyk7XHJcblx0fVxyXG5cclxuXHRpZiAoc2YgPiAwKSB7XHJcblx0XHRjb25zb2xlLmxvZygnc2FmYXJpJyk7XHJcblx0fSovXHJcblxyXG52YXIgQnJvd3NlckRldGVjdCA9IHtcclxuICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcblx0ICB0aGlzLmJyb3dzZXIgPSB0aGlzLnNlYXJjaFN0cmluZyh0aGlzLmRhdGFCcm93c2VyKSB8fCBcIkFuIHVua25vd24gYnJvd3NlclwiO1xyXG4gIH0sXHJcbiAgc2VhcmNoU3RyaW5nOiBmdW5jdGlvbiAoZGF0YSkge1xyXG5cdCAgZm9yICh2YXIgaT0wO2k8ZGF0YS5sZW5ndGg7aSsrKSB7XHJcblx0XHQgIHZhciBkYXRhU3RyaW5nID0gZGF0YVtpXS5zdHJpbmc7XHJcblx0XHQgIHZhciBkYXRhUHJvcCA9IGRhdGFbaV0ucHJvcDtcclxuXHRcdCAgdGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nID0gZGF0YVtpXS52ZXJzaW9uU2VhcmNoIHx8IGRhdGFbaV0uaWRlbnRpdHk7XHJcblx0XHQgIGlmIChkYXRhU3RyaW5nKSB7XHJcblx0XHQgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoZGF0YVtpXS5zdWJTdHJpbmcpICE9IC0xKVxyXG5cdFx0ICByZXR1cm4gZGF0YVtpXS5pZGVudGl0eTtcclxuXHRcdCAgfVxyXG5cdFx0ICBlbHNlIGlmIChkYXRhUHJvcClcclxuXHRcdCAgcmV0dXJuIGRhdGFbaV0uaWRlbnRpdHk7XHJcblx0ICB9XHJcbiAgfSxcclxuICBkYXRhQnJvd3NlcjogW1xyXG4gIHtcclxuXHQgIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcclxuXHQgIHN1YlN0cmluZzogXCJDaHJvbWVcIixcclxuXHQgIGlkZW50aXR5OiBcIkNocm9tZVwiXHJcbiAgfSxcclxuICB7XHJcblx0ICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXHJcblx0ICBzdWJTdHJpbmc6IFwiQXBwbGVcIixcclxuXHQgIGlkZW50aXR5OiBcIlNhZmFyaVwiLFxyXG5cdCAgdmVyc2lvblNlYXJjaDogXCJWZXJzaW9uXCJcclxuICB9LFxyXG4gIHtcclxuXHQgIHByb3A6IHdpbmRvdy5vcGVyYSxcclxuXHQgIGlkZW50aXR5OiBcIk9wZXJhXCIsXHJcblx0ICB2ZXJzaW9uU2VhcmNoOiBcIlZlcnNpb25cIlxyXG4gIH0sXHJcbiAge1xyXG5cdCAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxyXG5cdCAgc3ViU3RyaW5nOiBcIkZpcmVmb3hcIixcclxuXHQgIGlkZW50aXR5OiBcIkZpcmVmb3hcIlxyXG4gIH0sXHJcbiAgXSxcclxuXHJcbn07XHJcbkJyb3dzZXJEZXRlY3QuaW5pdCgpO1xyXG5cclxubGV0IGZmO1xyXG5sZXQgc2Y7XHJcbmxldCBjaDtcclxuaWYoQnJvd3NlckRldGVjdC5icm93c2VyID09ICdGaXJlZm94Jykge1xyXG5cdGZmID0gKEJyb3dzZXJEZXRlY3QuYnJvd3NlciA9PSAnRmlyZWZveCcpO1xyXG59XHJcblxyXG5pZihCcm93c2VyRGV0ZWN0LmJyb3dzZXIgPT0gJ0Nocm9tZScpIHtcclxuXHRjaCA9IChCcm93c2VyRGV0ZWN0LmJyb3dzZXIgPT0gJ0Nocm9tZScpO1xyXG59XHJcblxyXG5pZihCcm93c2VyRGV0ZWN0LmJyb3dzZXIgPT0gJ1NhZmFyaScpIHtcclxuXHRzZiA9IChCcm93c2VyRGV0ZWN0LmJyb3dzZXIgPT0gJ1NhZmFyaScpO1xyXG59XHJcblxyXG5pZihmZikge1xyXG5cdGNvbnNvbGUubG9nKCdmaXJlbW94Jyk7XHJcbn1cclxuXHJcbmlmKGNoKSB7XHJcblx0Y29uc29sZS5sb2coJ2Nocm9tZScpO1xyXG59XHJcblxyXG5pZihzZikge1xyXG5cdGNvbnNvbGUubG9nKCdzYWZhcmknKTtcclxufVxyXG5cclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCl7XHJcblx0aWYoZmYgJiYgKHByID4gMSkgJiYgJCh3aW5kb3cpLndpZHRoKCkgPiAxMTAwKSB7XHJcblx0XHQkKCdoZWFkZXInKS5jc3Moe3RyYW5zZm9ybTogJ3NjYWxlKDAuOCknLCB3aWR0aDogJzEyNSUnfSk7XHJcblx0XHQkKCdoZWFkZXInKS5jc3MoJ3RyYW5zZm9ybS1vcmlnaW4nLCAnMCAwJyk7XHJcblx0XHQkKCcuY29udGFpbmVyJykuY3NzKHt0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyx3aWR0aDogJzEyNSUnLH0pO1xyXG5cdFx0JCgnLmNvbnRhaW5lcicpLmNzcygndHJhbnNmb3JtLW9yaWdpbicsICcwIDEwMCUnKTtcclxuXHJcblx0XHRsZXQgbXQgPSAtKCQoJ2h0bWwnKS5vdXRlckhlaWdodCgpIC8gMTAwICogMjApO1xyXG5cdFx0JCgnLmNvbnRhaW5lcicpLmNzcygnbWFyZ2luLXRvcCcsIG10KTtcclxuXHR9XHJcbn0pO1xyXG5cclxuLyogU2Nyb2xsICovXHJcblx0aWYoc2YgJiYgKCQod2luZG93KS53aWR0aCgpID4gOTYwKSkge1xyXG5cdFx0JCgnLmhlYWRlcl9fbWVudS1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHRcdGxldCBoID0gJChzZWxlY3Rvcik7XHJcblxyXG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0c2Nyb2xsVG9wOiBoLm9mZnNldCgpLnRvcCAtIChoLm9mZnNldCgpLnRvcCAqIDAuMjEpXHJcblx0XHRcdH0sIDgwMCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGlmKChwciA+IDEpICYmICQod2luZG93KS53aWR0aCgpIDw9IDk2MCkge1xyXG5cdFx0JCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCBoaCA9ICQoJ2hlYWRlcicpLmhlaWdodCgpO1xyXG5cdFx0XHRsZXQgaG0gPSAkKCcuaGVhZGVyX19tZW51Jykub3V0ZXJIZWlnaHQoKSAtIDEyO1xyXG5cclxuXHRcdFx0JCgnLmhlYWRlcl9fbWVudS1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGxldCBzZWxlY3RvciA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdFx0XHRcdGxldCBoID0gJChzZWxlY3Rvcik7XHJcblxyXG5cdFx0XHRcdGxldCBvZmZzZXQgPSAzO1xyXG5cdFx0XHRcdCQoaCkucHJldkFsbCgpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRvZmZzZXQgKz0gcGFyc2VGbG9hdCgkKHRoaXMpLm91dGVySGVpZ2h0KCkpXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdGlmKHByID4gMSkge1xyXG5cdFx0XHRcdFx0b2Zmc2V0ID0gb2Zmc2V0IC0gKG9mZnNldCAqIDAuMilcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0b2Zmc2V0ID0gb2Zmc2V0XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0XHRzY3JvbGxUb3A6IG9mZnNldFxyXG5cdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0JCgnLmhlYWRlcl9fbG9nbywgLnVwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogMFxyXG5cdFx0fSwgODAwKTtcclxuXHR9KTtcclxuXHJcbi8qIFNjcm9sbCBlbmQgKi9cclxuXHJcbi8qIFNlbGVjdCAqL1xyXG5cdCQoJ3NlbGVjdCcpLnN0eWxlcigpO1xyXG4vKiBTZWxlY3QgKi9cclxuXHJcbi8qIE1vcmUgKi9cclxuXHQkKCcudG9rZW5fX21vcmUtYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQoJy50b2tlbl9fbW9yZS1ibG9jaycpLnNsaWRlVG9nZ2xlKDM1MCk7XHJcblx0fSk7XHJcblxyXG5cdCQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpe1xyXG5cdCAgICBsZXQgZHJvcGRvd24gPSAkKCcudG9rZW5fX21vcmUtYmxvY2snKTtcclxuXHQgICAgaWYgKCFkcm9wZG93bi5pcyhlLnRhcmdldCkgXHJcblx0ICAgICAgICAmJiBkcm9wZG93bi5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xyXG5cdCAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5oYXNDbGFzcygndG9rZW5fX21vcmUtYnV0dG9uJykpIHtcclxuXHQgICAgICAgICAgICBkcm9wZG93bi5zbGlkZVVwKCk7XHJcblx0ICAgICAgICAgICAgLy8gZHJvcGRvd24ucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuXHQgICAgICAgICAgICAkKCcudG9rZW5fX21vcmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH1cclxuXHR9KTtcclxuLyogTW9yZSBlbmQgKi9cclxuXHJcbi8qIE1lbnUgKi9cclxuXHQkKCcuaGVhZGVyX19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJylcclxuXHRcdCQoJy5oZWFkZXJfX21lbnUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0fSk7XHJcbi8qIE1lbnUgZW5kICovXHJcblxyXG4vKiBBbmltYXRpb24gKi9cclxuXHQkKCcubWFpbl9fYW5pbScpLmFkZENsYXNzKCdhbmltYXRlJyk7XHJcblx0JCgnLm1haW5fX2l0ZW0taW1nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5tYWluX19hbmltJykuYWRkQ2xhc3MoJ3JldmVyc2UnKTtcclxuXHRcdCQoJy5tYWluX19hbmltJykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0JCgnLm1haW5fX2FuaW0nKS5yZW1vdmVDbGFzcygncmV2ZXJzZScpO1xyXG5cdFx0fSwyMDAwKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQoJy5tYWluX19hbmltJykuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcclxuXHRcdH0sMzAwMCk7XHJcblx0fSk7XHJcbi8qIEFuaW1hdGlvbiBlbmQgKi9cclxuXHJcbi8qIEJ1dHRvbnMgKi9cclxuXHQkKCdhLnZpZGVvJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgY3VycmVudCA9ICQodGhpcylcclxuXHRcdGN1cnJlbnQuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuXHRcdGN1cnJlbnQubmV4dCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdGN1cnJlbnQubmV4dCgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0Y3VycmVudC5yZW1vdmVDbGFzcygnaGlkZScpO1xyXG5cdFx0fSwgNTUwMCk7XHJcblx0fSk7XHJcbi8qIEJ1dHRvbnMgZW5kICovXHJcblxyXG4vKiBVcCAqL1xyXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuXHRcdGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDE1MCkge1xyXG5cdFx0XHQkKCcudXAnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCcudXAnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcbi8qIFVwIGVuZCAqL1xyXG5cclxuXHJcblxyXG5cclxuLyogU2Nyb2xsICovXHJcbi8qJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcblx0bGV0IGhoID0gJCgnaGVhZGVyJykub3V0ZXJIZWlnaHQoKTtcclxuXHRsZXQgaG0gPSAkKCcuaGVhZGVyX19tZW51Jykub3V0ZXJIZWlnaHQoKSAtIDE1O1xyXG5cclxuXHRpZihmZikge1xyXG5cdFx0JCgnLmhlYWRlcl9fbWVudS1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHRcdGxldCBoID0gJChzZWxlY3Rvcik7XHJcblxyXG5cdFx0XHRsZXQgb2Zmc2V0ID0gMDtcclxuXHRcdFx0JChoKS5wcmV2QWxsKCkuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRvZmZzZXQgKz0gcGFyc2VGbG9hdCgkKHRoaXMpLm91dGVySGVpZ2h0KCkpXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYocHIgPiAxKSB7XHJcblx0XHRcdFx0b2Zmc2V0ID0gb2Zmc2V0IC0gKG9mZnNldCAvIDEwMCAqIDIwKSAtIGhtXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0b2Zmc2V0ID0gb2Zmc2V0XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0XHRzY3JvbGxUb3A6IG9mZnNldFxyXG5cdFx0XHR9LCA4MDApO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coJ2ZmJyk7XHJcblx0XHR9KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0JCgnLmhlYWRlcl9fbWVudS1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHRcdGxldCBoID0gJChzZWxlY3Rvcik7XHJcblxyXG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0c2Nyb2xsVG9wOiBoLm9mZnNldCgpLnRvcCAtIGhoXHJcblx0XHRcdH0sIDgwMCk7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZygnbmUgZmYnKTtcdFx0XHRcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0JCgnLmhlYWRlcl9fbG9nbywgLnVwJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogMFxyXG5cdFx0fSwgODAwKTtcclxuXHR9KTtcclxufSk7Ki9cclxuLyogU2Nyb2xsIGVuZCAqL1xyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pSWl3aWMyOTFjbU5sY3lJNld5SnRZV2x1TG1weklsMHNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxSkM1amMzTk9kVzFpWlhJdWVtOXZiU0E5SUhSeWRXVTdYSEpjYm1sbUlDZ2hLRndpZW05dmJWd2lJR2x1SUdSdlkzVnRaVzUwTG1KdlpIa3VjM1I1YkdVcEtTQjdYSEpjYmx4MEpDNWpjM05JYjI5cmN5NTZiMjl0SUQwZ2UxeHlYRzVjZEZ4MFoyVjBPaUJtZFc1amRHbHZiaWhsYkdWdExDQmpiMjF3ZFhSbFpDd2daWGgwY21FcElIdGNjbHh1WEhSY2RGeDBkbUZ5SUhaaGJIVmxJRDBnSkNobGJHVnRLUzVrWVhSaEtDZDZiMjl0SnlrN1hISmNibHgwWEhSY2RISmxkSFZ5YmlCMllXeDFaU0FoUFNCdWRXeHNJRDhnZG1Gc2RXVWdPaUF4TzF4eVhHNWNkRngwZlN4Y2NseHVYSFJjZEhObGREb2dablZ1WTNScGIyNG9aV3hsYlN3Z2RtRnNkV1VwSUh0Y2NseHVYSFJjZEZ4MGRtRnlJQ1JsYkdWdElEMGdKQ2hsYkdWdEtUdGNjbHh1WEhSY2RGeDBkbUZ5SUhOcGVtVWdQU0I3SUM4dklIZHBkR2h2ZFhRZ2JXRnlaMmx1WEhKY2JseDBYSFJjZEZ4MGQybGtkR2c2SUNSbGJHVnRMbTkxZEdWeVYybGtkR2dvS1N4Y2NseHVYSFJjZEZ4MFhIUm9aV2xuYUhRNklDUmxiR1Z0TG05MWRHVnlTR1ZwWjJoMEtDbGNjbHh1WEhSY2RGeDBmVHRjY2x4dVhIUmNkRngwSkdWc1pXMHVaR0YwWVNnbmVtOXZiU2NzSUhaaGJIVmxLVHRjY2x4dVhIUmNkRngwYVdZZ0tIWmhiSFZsSUNFOUlERXBJSHRjY2x4dVhIUmNkRngwWEhRa1pXeGxiUzVqYzNNb2UxeHlYRzVjZEZ4MFhIUmNkRngwVFc5NlZISmhibk5tYjNKdE9pQW5jMk5oYkdVb0p5QXJJSFpoYkhWbElDc2dKeWtuTEZ4eVhHNWNkRngwWEhSY2RGeDBMeThnYldGeVoybHVUR1ZtZERvZ0tITnBlbVV1ZDJsa2RHZ2dLaUIyWVd4MVpTQXRJSE5wZW1VdWQybGtkR2dwSUM4Z01peGNjbHh1WEhSY2RGeDBYSFJjZEM4dklHMWhjbWRwYmxKcFoyaDBPaUFvYzJsNlpTNTNhV1IwYUNBcUlIWmhiSFZsSUMwZ2MybDZaUzUzYVdSMGFDa2dMeUF5TEZ4eVhHNWNkRngwWEhSY2RGeDBMeThnYldGeVoybHVWRzl3T2lBdEtITnBlbVV1YUdWcFoyaDBJQzhnTVRBd0lDb2dNakFnS3lBeU1Da2dMeUF5TEZ4eVhHNWNkRngwWEhSY2RGeDBiV0Z5WjJsdVFtOTBkRzl0T2lBdEtITnBlbVV1YUdWcFoyaDBJQzhnTVRBd0lDb2dNakFwS2pFdU5WeHlYRzVjZEZ4MFhIUmNkSDBwTzF4eVhHNWNkRngwWEhSOUlHVnNjMlVnZTF4eVhHNWNkRngwWEhSY2RDUmxiR1Z0TG1OemN5aDdYSEpjYmx4MFhIUmNkRngwWEhSMGNtRnVjMlp2Y20wNklHNTFiR3dzWEhKY2JseDBYSFJjZEZ4MFhIUnRZWEpuYVc0NklHNTFiR3hjY2x4dVhIUmNkRngwWEhSOUtUdGNjbHh1WEhSY2RGeDBmVnh5WEc1Y2RGeDBmVnh5WEc1Y2RIMDdYSEpjYm4xY2NseHVLaTljY2x4dVhISmNibHh5WEc0dktpQlRaV3hsWTNRZ0tpOWNjbHh1WEhRa0tDZHpaV3hsWTNRbktTNXpkSGxzWlhJb0tUdGNjbHh1THlvZ1UyVnNaV04wSUNvdlhISmNibHh5WEc0dktpQlRiR2xrWlhJZ0tpOWNjbHh1WEhRa0tDY3ViV0ZwYmw5ZmMyeHBaR1Z5SnlrdWIzZHNRMkZ5YjNWelpXd29lMXh5WEc1Y2RGeDBhWFJsYlhNNklERXNYSEpjYmx4MFhIUnNiMjl3T2lCMGNuVmxMRnh5WEc1Y2RGeDBiV0Z5WjJsdU9pQTFNQ3hjY2x4dVhIUmNkRzVoZGpvZ1ptRnNjMlVzWEhKY2JseDBYSFJrYjNSek9pQjBjblZsTEZ4eVhHNWNkRngwY21WemNHOXVjMmwyWlRwN1hISmNibHgwSUNBZ0lDQWdJQ0F3T250Y2NseHVYSFFnSUNBZ0lDQWdJQ0FnSUNCdFlYSm5hVzQ2SURCY2NseHVYSFFnSUNBZ0lDQWdJSDBzWEhKY2JseDBJQ0FnSUNBZ0lDQTVPREE2ZTF4eVhHNWNkQ0FnSUNBZ0lDQWdJQ0J0WVhKbmFXNDZJREl3TUNBZ1hISmNibHgwSUNBZ0lDQWdJQ0I5TEZ4eVhHNWNkQ0FnSUNBZ0lDQWdNVEk0TURwN1hISmNibHgwSUNBZ0lDQWdJQ0FnSUNBZ2JXRnlaMmx1T2lBMU1GeHlYRzVjZENBZ0lDQWdJQ0FnZlZ4eVhHNWNkQ0FnSUNCOVhISmNibHgwZlNrN1hISmNiaThxSUZOc2FXUmxjaUJsYm1RZ0tpOWNjbHh1WEhKY2JpOHFJRTF2Y21VZ0tpOWNjbHh1WEhRa0tDY3VkRzlyWlc1ZlgyMXZjbVV0WW5WMGRHOXVJR0VuS1M1dmJpZ25ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpaGxLWHRjY2x4dVhIUmNkR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dVhIUmNkQ1FvZEdocGN5a3VjR0Z5Wlc1MEtDa3VjR0Z5Wlc1MEtDa3VkRzluWjJ4bFEyeGhjM01vSjJGamRHbDJaU2NwTzF4eVhHNWNkRngwSkNnbkxuUnZhMlZ1WDE5dGIzSmxMV0pzYjJOckp5a3VjMnhwWkdWVWIyZG5iR1VvS1R0Y2NseHVYSFI5S1R0Y2NseHVMeW9nVFc5eVpTQmxibVFnS2k5Y2NseHVYSEpjYmk4cUlFMWxiblVnS2k5Y2NseHVYSFFrS0NjdWFHVmhaR1Z5WDE5aWRYSm5aWEluS1M1dmJpZ25ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpZ3BlMXh5WEc1Y2RGeDBKQ2gwYUdsektTNTBiMmRuYkdWRGJHRnpjeWduWVdOMGFYWmxKeWxjY2x4dVhIUmNkQ1FvSnk1b1pXRmtaWEpmWDIxbGJuVW5LUzUwYjJkbmJHVkRiR0Z6Y3lnbllXTjBhWFpsSnlrN1hISmNibHgwZlNrN1hISmNiaThxSUUxbGJuVWdaVzVrSUNvdlhISmNibHh5WEc0dktpQlRZM0p2Ykd3Z0tpOWNjbHh1WEhRa0tDY3VhR1ZoWkdWeVgxOXRaVzUxTFd4cGJtc25LUzV2YmlnblkyeHBZMnNuTENCbWRXNWpkR2x2YmlobEtYdGNjbHh1WEhSY2RHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1WEhSY2RHeGxkQ0JvYUNBOUlDUW9KMmhsWVdSbGNpY3BMbWhsYVdkb2RDZ3BPMXh5WEc1Y2RGeDBiR1YwSUhObGJHVmpkRzl5SUQwZ0pDaDBhR2x6S1M1aGRIUnlLQ2RvY21WbUp5azdYSEpjYmx4MFhIUnNaWFFnYUNBOUlDUW9jMlZzWldOMGIzSXBPMXh5WEc1Y2NseHVYSFJjZENRb0oyaDBiV3dzSUdKdlpIa25LUzVoYm1sdFlYUmxLSHRjY2x4dVhIUmNkRngwYzJOeWIyeHNWRzl3T2lCb0xtOW1abk5sZENncExuUnZjQ0F0SUNob2FDQXJJRFV3S1NCY2NseHVYSFJjZEgwc0lEZ3dNQ2s3WEhKY2JseDBmU2s3WEhKY2JpOHFJRk5qY205c2JDQmxibVFnS2k5Y2NseHVYSEpjYm14bGRDQjFjMlZ5UVdkbGJuUWdQU0J1WVhacFoyRjBiM0l1ZFhObGNrRm5aVzUwTG5SdlRHOTNaWEpEWVhObEtDazdYSEpjYm14bGRDQndjaUE5SUhkcGJtUnZkeTVrWlhacFkyVlFhWGhsYkZKaGRHbHZPeUJjY2x4dWJHVjBJR1ptSUQwZ0wyWnBjbVZtYjNndkxuUmxjM1FvZFhObGNrRm5aVzUwS1R0Y2NseHVYSEpjYmlRb2QybHVaRzkzS1M1dmJpZ25iRzloWkNjc0lHWjFibU4wYVc5dUtDbDdYSEpjYmx4MGFXWW9abVlnSmlZZ0tIQnlJRDRnTVNrZ0ppWWdKQ2gzYVc1a2IzY3BMbmRwWkhSb0tDa2dQaUF4TVRBd0tTQjdYSEpjYmx4MFhIUWtLQ2RvWldGa1pYSW5LUzVqYzNNb2UzUnlZVzV6Wm05eWJUb2dKM05qWVd4bEtEQXVPQ2tuTENCM2FXUjBhRG9nSnpFeU5TVW5mU2s3WEhKY2JseDBYSFFrS0Nkb1pXRmtaWEluS1M1amMzTW9KM1J5WVc1elptOXliUzF2Y21sbmFXNG5MQ0FuTUNBd0p5azdYSEpjYmx4MFhIUWtLQ2N1WTI5dWRHRnBibVZ5SnlrdVkzTnpLSHQwY21GdWMyWnZjbTA2SUNkelkyRnNaU2d3TGpncEp5eDNhV1IwYURvZ0p6RXlOU1VuTEgwcE8xeHlYRzVjZEZ4MEpDZ25MbU52Ym5SaGFXNWxjaWNwTG1OemN5Z25kSEpoYm5ObWIzSnRMVzl5YVdkcGJpY3NJQ2N3SURFd01DVW5LVHRjY2x4dVhISmNibHgwWEhSc1pYUWdiWFFnUFNBdEtDUW9KMmgwYld3bktTNXZkWFJsY2tobGFXZG9kQ2dwSUM4Z01UQXdJQ29nTWpBcE8xeHlYRzVjZEZ4MEpDZ25MbU52Ym5SaGFXNWxjaWNwTG1OemN5Z25iV0Z5WjJsdUxYUnZjQ2NzSUcxMEtUdGNjbHh1WEhSOVhISmNibjBwT3lKZExDSm1hV3hsSWpvaWJXRnBiaTVxY3lKOVxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
