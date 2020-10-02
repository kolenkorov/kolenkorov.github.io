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
				scrollTop: h.offset().top - (h.offset().top * 0.2)
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlx0Ly8gbGV0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuXHRsZXQgcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbzsgXHJcbi8qXHRsZXQgZmYgPSAvZmlyZWZveC8udGVzdCh1c2VyQWdlbnQpO1xyXG5cdGxldCBjaCA9IC9jaHJvbWUvLnRlc3QodXNlckFnZW50KTtcclxuXHRsZXQgc2YgPSAvc2FmYXJpLy50ZXN0KHVzZXJBZ2VudCk7XHJcblx0bGV0IG9wICA9IC9vcGVyYS8udGVzdCh1c2VyQWdlbnQpO1xyXG5cclxuXHRpZihmZiA+IDApIHtcclxuXHRcdGNvbnNvbGUubG9nKCdmaXJlZm94Jyk7XHJcblx0fVxyXG5cclxuXHRpZiAoY2ggPiAwKSB7XHJcblx0XHRjb25zb2xlLmxvZygnY2hyb21lJyk7XHJcblx0fVxyXG5cclxuXHRpZiAoc2YgPiAwKSB7XHJcblx0XHRjb25zb2xlLmxvZygnc2FmYXJpJyk7XHJcblx0fSovXHJcblxyXG52YXIgQnJvd3NlckRldGVjdCA9IHtcclxuICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcblx0ICB0aGlzLmJyb3dzZXIgPSB0aGlzLnNlYXJjaFN0cmluZyh0aGlzLmRhdGFCcm93c2VyKSB8fCBcIkFuIHVua25vd24gYnJvd3NlclwiO1xyXG4gIH0sXHJcbiAgc2VhcmNoU3RyaW5nOiBmdW5jdGlvbiAoZGF0YSkge1xyXG5cdCAgZm9yICh2YXIgaT0wO2k8ZGF0YS5sZW5ndGg7aSsrKSB7XHJcblx0XHQgIHZhciBkYXRhU3RyaW5nID0gZGF0YVtpXS5zdHJpbmc7XHJcblx0XHQgIHZhciBkYXRhUHJvcCA9IGRhdGFbaV0ucHJvcDtcclxuXHRcdCAgdGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nID0gZGF0YVtpXS52ZXJzaW9uU2VhcmNoIHx8IGRhdGFbaV0uaWRlbnRpdHk7XHJcblx0XHQgIGlmIChkYXRhU3RyaW5nKSB7XHJcblx0XHQgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoZGF0YVtpXS5zdWJTdHJpbmcpICE9IC0xKVxyXG5cdFx0ICByZXR1cm4gZGF0YVtpXS5pZGVudGl0eTtcclxuXHRcdCAgfVxyXG5cdFx0ICBlbHNlIGlmIChkYXRhUHJvcClcclxuXHRcdCAgcmV0dXJuIGRhdGFbaV0uaWRlbnRpdHk7XHJcblx0ICB9XHJcbiAgfSxcclxuICBkYXRhQnJvd3NlcjogW1xyXG4gIHtcclxuXHQgIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcclxuXHQgIHN1YlN0cmluZzogXCJDaHJvbWVcIixcclxuXHQgIGlkZW50aXR5OiBcIkNocm9tZVwiXHJcbiAgfSxcclxuICB7XHJcblx0ICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXHJcblx0ICBzdWJTdHJpbmc6IFwiQXBwbGVcIixcclxuXHQgIGlkZW50aXR5OiBcIlNhZmFyaVwiLFxyXG5cdCAgdmVyc2lvblNlYXJjaDogXCJWZXJzaW9uXCJcclxuICB9LFxyXG4gIHtcclxuXHQgIHByb3A6IHdpbmRvdy5vcGVyYSxcclxuXHQgIGlkZW50aXR5OiBcIk9wZXJhXCIsXHJcblx0ICB2ZXJzaW9uU2VhcmNoOiBcIlZlcnNpb25cIlxyXG4gIH0sXHJcbiAge1xyXG5cdCAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxyXG5cdCAgc3ViU3RyaW5nOiBcIkZpcmVmb3hcIixcclxuXHQgIGlkZW50aXR5OiBcIkZpcmVmb3hcIlxyXG4gIH0sXHJcbiAgXSxcclxuXHJcbn07XHJcbkJyb3dzZXJEZXRlY3QuaW5pdCgpO1xyXG5cclxubGV0IGZmO1xyXG5sZXQgc2Y7XHJcbmxldCBjaDtcclxuaWYoQnJvd3NlckRldGVjdC5icm93c2VyID09ICdGaXJlZm94Jykge1xyXG5cdGZmID0gKEJyb3dzZXJEZXRlY3QuYnJvd3NlciA9PSAnRmlyZWZveCcpO1xyXG59XHJcblxyXG5pZihCcm93c2VyRGV0ZWN0LmJyb3dzZXIgPT0gJ0Nocm9tZScpIHtcclxuXHRjaCA9IChCcm93c2VyRGV0ZWN0LmJyb3dzZXIgPT0gJ0Nocm9tZScpO1xyXG59XHJcblxyXG5pZihCcm93c2VyRGV0ZWN0LmJyb3dzZXIgPT0gJ1NhZmFyaScpIHtcclxuXHRzZiA9IChCcm93c2VyRGV0ZWN0LmJyb3dzZXIgPT0gJ1NhZmFyaScpO1xyXG59XHJcblxyXG5pZihmZikge1xyXG5cdGNvbnNvbGUubG9nKCdmaXJlbW94Jyk7XHJcbn1cclxuXHJcbmlmKGNoKSB7XHJcblx0Y29uc29sZS5sb2coJ2Nocm9tZScpO1xyXG59XHJcblxyXG5pZihzZikge1xyXG5cdGNvbnNvbGUubG9nKCdzYWZhcmknKTtcclxufVxyXG5cclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCl7XHJcblx0aWYoZmYgJiYgKHByID4gMSkgJiYgJCh3aW5kb3cpLndpZHRoKCkgPiAxMTAwKSB7XHJcblx0XHQkKCdoZWFkZXInKS5jc3Moe3RyYW5zZm9ybTogJ3NjYWxlKDAuOCknLCB3aWR0aDogJzEyNSUnfSk7XHJcblx0XHQkKCdoZWFkZXInKS5jc3MoJ3RyYW5zZm9ybS1vcmlnaW4nLCAnMCAwJyk7XHJcblx0XHQkKCcuY29udGFpbmVyJykuY3NzKHt0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyx3aWR0aDogJzEyNSUnLH0pO1xyXG5cdFx0JCgnLmNvbnRhaW5lcicpLmNzcygndHJhbnNmb3JtLW9yaWdpbicsICcwIDEwMCUnKTtcclxuXHJcblx0XHRsZXQgbXQgPSAtKCQoJ2h0bWwnKS5vdXRlckhlaWdodCgpIC8gMTAwICogMjApO1xyXG5cdFx0JCgnLmNvbnRhaW5lcicpLmNzcygnbWFyZ2luLXRvcCcsIG10KTtcclxuXHR9XHJcbn0pO1xyXG5cclxuLyogU2Nyb2xsICovXHJcblx0aWYoc2YgJiYgKCQod2luZG93KS53aWR0aCgpID4gOTYwKSkge1xyXG5cdFx0JCgnLmhlYWRlcl9fbWVudS1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHRcdGxldCBoID0gJChzZWxlY3Rvcik7XHJcblxyXG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0c2Nyb2xsVG9wOiBoLm9mZnNldCgpLnRvcCAtIChoLm9mZnNldCgpLnRvcCAqIDAuMilcclxuXHRcdFx0fSwgODAwKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0aWYoKHByID4gMSkgJiYgJCh3aW5kb3cpLndpZHRoKCkgPD0gOTYwKSB7XHJcblx0XHQkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0bGV0IGhoID0gJCgnaGVhZGVyJykuaGVpZ2h0KCk7XHJcblx0XHRcdGxldCBobSA9ICQoJy5oZWFkZXJfX21lbnUnKS5vdXRlckhlaWdodCgpIC0gMTI7XHJcblxyXG5cdFx0XHQkKCcuaGVhZGVyX19tZW51LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0bGV0IHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHRcdFx0bGV0IGggPSAkKHNlbGVjdG9yKTtcclxuXHJcblx0XHRcdFx0bGV0IG9mZnNldCA9IDM7XHJcblx0XHRcdFx0JChoKS5wcmV2QWxsKCkuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdG9mZnNldCArPSBwYXJzZUZsb2F0KCQodGhpcykub3V0ZXJIZWlnaHQoKSlcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0aWYocHIgPiAxKSB7XHJcblx0XHRcdFx0XHRvZmZzZXQgPSBvZmZzZXQgLSAob2Zmc2V0ICogMC4yKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRvZmZzZXQgPSBvZmZzZXRcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0XHRcdHNjcm9sbFRvcDogb2Zmc2V0XHJcblx0XHRcdFx0fSwgMTAwMCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHQkKCcuaGVhZGVyX19sb2dvLCAudXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0c2Nyb2xsVG9wOiAwXHJcblx0XHR9LCA4MDApO1xyXG5cdH0pO1xyXG5cclxuLyogU2Nyb2xsIGVuZCAqL1xyXG5cclxuLyogU2VsZWN0ICovXHJcblx0JCgnc2VsZWN0Jykuc3R5bGVyKCk7XHJcbi8qIFNlbGVjdCAqL1xyXG5cclxuLyogTW9yZSAqL1xyXG5cdCQoJy50b2tlbl9fbW9yZS1idXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnLnRva2VuX19tb3JlLWJsb2NrJykuc2xpZGVUb2dnbGUoMzUwKTtcclxuXHR9KTtcclxuXHJcblx0JChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSl7XHJcblx0ICAgIGxldCBkcm9wZG93biA9ICQoJy50b2tlbl9fbW9yZS1ibG9jaycpO1xyXG5cdCAgICBpZiAoIWRyb3Bkb3duLmlzKGUudGFyZ2V0KSBcclxuXHQgICAgICAgICYmIGRyb3Bkb3duLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcblx0ICAgICAgICBpZiAoISQoZS50YXJnZXQpLmhhc0NsYXNzKCd0b2tlbl9fbW9yZS1idXR0b24nKSkge1xyXG5cdCAgICAgICAgICAgIGRyb3Bkb3duLnNsaWRlVXAoKTtcclxuXHQgICAgICAgICAgICAvLyBkcm9wZG93bi5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cdCAgICAgICAgICAgICQoJy50b2tlbl9fbW9yZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfVxyXG5cdH0pO1xyXG4vKiBNb3JlIGVuZCAqL1xyXG5cclxuLyogTWVudSAqL1xyXG5cdCQoJy5oZWFkZXJfX2J1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG5cdFx0JCgnLmhlYWRlcl9fbWVudScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuLyogTWVudSBlbmQgKi9cclxuXHJcbi8qIEFuaW1hdGlvbiAqL1xyXG5cdCQoJy5tYWluX19hbmltJykuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcclxuXHQkKCcubWFpbl9faXRlbS1pbWcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JCgnLm1haW5fX2FuaW0nKS5hZGRDbGFzcygncmV2ZXJzZScpO1xyXG5cdFx0JCgnLm1haW5fX2FuaW0nKS5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHQkKCcubWFpbl9fYW5pbScpLnJlbW92ZUNsYXNzKCdyZXZlcnNlJyk7XHJcblx0XHR9LDIwMDApO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0JCgnLm1haW5fX2FuaW0nKS5hZGRDbGFzcygnYW5pbWF0ZScpO1xyXG5cdFx0fSwzMDAwKTtcclxuXHR9KTtcclxuLyogQW5pbWF0aW9uIGVuZCAqL1xyXG5cclxuLyogQnV0dG9ucyAqL1xyXG5cdCQoJ2EudmlkZW8nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCBjdXJyZW50ID0gJCh0aGlzKVxyXG5cdFx0Y3VycmVudC5hZGRDbGFzcygnaGlkZScpO1xyXG5cdFx0Y3VycmVudC5uZXh0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0Y3VycmVudC5uZXh0KCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRjdXJyZW50LnJlbW92ZUNsYXNzKCdoaWRlJyk7XHJcblx0XHR9LCA1NTAwKTtcclxuXHR9KTtcclxuLyogQnV0dG9ucyBlbmQgKi9cclxuXHJcbi8qIFVwICovXHJcblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cdFx0aWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMTUwKSB7XHJcblx0XHRcdCQoJy51cCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJy51cCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuLyogVXAgZW5kICovXHJcblxyXG5cclxuXHJcblxyXG4vKiBTY3JvbGwgKi9cclxuLyokKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuXHRsZXQgaGggPSAkKCdoZWFkZXInKS5vdXRlckhlaWdodCgpO1xyXG5cdGxldCBobSA9ICQoJy5oZWFkZXJfX21lbnUnKS5vdXRlckhlaWdodCgpIC0gMTU7XHJcblxyXG5cdGlmKGZmKSB7XHJcblx0XHQkKCcuaGVhZGVyX19tZW51LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdFx0bGV0IGggPSAkKHNlbGVjdG9yKTtcclxuXHJcblx0XHRcdGxldCBvZmZzZXQgPSAwO1xyXG5cdFx0XHQkKGgpLnByZXZBbGwoKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdG9mZnNldCArPSBwYXJzZUZsb2F0KCQodGhpcykub3V0ZXJIZWlnaHQoKSlcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZihwciA+IDEpIHtcclxuXHRcdFx0XHRvZmZzZXQgPSBvZmZzZXQgLSAob2Zmc2V0IC8gMTAwICogMjApIC0gaG1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvZmZzZXQgPSBvZmZzZXRcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdHNjcm9sbFRvcDogb2Zmc2V0XHJcblx0XHRcdH0sIDgwMCk7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZygnZmYnKTtcclxuXHRcdH0pO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCcuaGVhZGVyX19tZW51LWxpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdFx0bGV0IGggPSAkKHNlbGVjdG9yKTtcclxuXHJcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0XHRzY3JvbGxUb3A6IGgub2Zmc2V0KCkudG9wIC0gaGhcclxuXHRcdFx0fSwgODAwKTtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKCduZSBmZicpO1x0XHRcdFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQkKCcuaGVhZGVyX19sb2dvLCAudXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0c2Nyb2xsVG9wOiAwXHJcblx0XHR9LCA4MDApO1xyXG5cdH0pO1xyXG59KTsqL1xyXG4vKiBTY3JvbGwgZW5kICovXHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGY4O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lJaXdpYzI5MWNtTmxjeUk2V3lKdFlXbHVMbXB6SWwwc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFKQzVqYzNOT2RXMWlaWEl1ZW05dmJTQTlJSFJ5ZFdVN1hISmNibWxtSUNnaEtGd2llbTl2YlZ3aUlHbHVJR1J2WTNWdFpXNTBMbUp2WkhrdWMzUjViR1VwS1NCN1hISmNibHgwSkM1amMzTkliMjlyY3k1NmIyOXRJRDBnZTF4eVhHNWNkRngwWjJWME9pQm1kVzVqZEdsdmJpaGxiR1Z0TENCamIyMXdkWFJsWkN3Z1pYaDBjbUVwSUh0Y2NseHVYSFJjZEZ4MGRtRnlJSFpoYkhWbElEMGdKQ2hsYkdWdEtTNWtZWFJoS0NkNmIyOXRKeWs3WEhKY2JseDBYSFJjZEhKbGRIVnliaUIyWVd4MVpTQWhQU0J1ZFd4c0lEOGdkbUZzZFdVZ09pQXhPMXh5WEc1Y2RGeDBmU3hjY2x4dVhIUmNkSE5sZERvZ1puVnVZM1JwYjI0b1pXeGxiU3dnZG1Gc2RXVXBJSHRjY2x4dVhIUmNkRngwZG1GeUlDUmxiR1Z0SUQwZ0pDaGxiR1Z0S1R0Y2NseHVYSFJjZEZ4MGRtRnlJSE5wZW1VZ1BTQjdJQzh2SUhkcGRHaHZkWFFnYldGeVoybHVYSEpjYmx4MFhIUmNkRngwZDJsa2RHZzZJQ1JsYkdWdExtOTFkR1Z5VjJsa2RHZ29LU3hjY2x4dVhIUmNkRngwWEhSb1pXbG5hSFE2SUNSbGJHVnRMbTkxZEdWeVNHVnBaMmgwS0NsY2NseHVYSFJjZEZ4MGZUdGNjbHh1WEhSY2RGeDBKR1ZzWlcwdVpHRjBZU2duZW05dmJTY3NJSFpoYkhWbEtUdGNjbHh1WEhSY2RGeDBhV1lnS0haaGJIVmxJQ0U5SURFcElIdGNjbHh1WEhSY2RGeDBYSFFrWld4bGJTNWpjM01vZTF4eVhHNWNkRngwWEhSY2RGeDBUVzk2VkhKaGJuTm1iM0p0T2lBbmMyTmhiR1VvSnlBcklIWmhiSFZsSUNzZ0p5a25MRnh5WEc1Y2RGeDBYSFJjZEZ4MEx5OGdiV0Z5WjJsdVRHVm1kRG9nS0hOcGVtVXVkMmxrZEdnZ0tpQjJZV3gxWlNBdElITnBlbVV1ZDJsa2RHZ3BJQzhnTWl4Y2NseHVYSFJjZEZ4MFhIUmNkQzh2SUcxaGNtZHBibEpwWjJoME9pQW9jMmw2WlM1M2FXUjBhQ0FxSUhaaGJIVmxJQzBnYzJsNlpTNTNhV1IwYUNrZ0x5QXlMRnh5WEc1Y2RGeDBYSFJjZEZ4MEx5OGdiV0Z5WjJsdVZHOXdPaUF0S0hOcGVtVXVhR1ZwWjJoMElDOGdNVEF3SUNvZ01qQWdLeUF5TUNrZ0x5QXlMRnh5WEc1Y2RGeDBYSFJjZEZ4MGJXRnlaMmx1UW05MGRHOXRPaUF0S0hOcGVtVXVhR1ZwWjJoMElDOGdNVEF3SUNvZ01qQXBLakV1TlZ4eVhHNWNkRngwWEhSY2RIMHBPMXh5WEc1Y2RGeDBYSFI5SUdWc2MyVWdlMXh5WEc1Y2RGeDBYSFJjZENSbGJHVnRMbU56Y3loN1hISmNibHgwWEhSY2RGeDBYSFIwY21GdWMyWnZjbTA2SUc1MWJHd3NYSEpjYmx4MFhIUmNkRngwWEhSdFlYSm5hVzQ2SUc1MWJHeGNjbHh1WEhSY2RGeDBYSFI5S1R0Y2NseHVYSFJjZEZ4MGZWeHlYRzVjZEZ4MGZWeHlYRzVjZEgwN1hISmNibjFjY2x4dUtpOWNjbHh1WEhKY2JseHlYRzR2S2lCVFpXeGxZM1FnS2k5Y2NseHVYSFFrS0NkelpXeGxZM1FuS1M1emRIbHNaWElvS1R0Y2NseHVMeW9nVTJWc1pXTjBJQ292WEhKY2JseHlYRzR2S2lCVGJHbGtaWElnS2k5Y2NseHVYSFFrS0NjdWJXRnBibDlmYzJ4cFpHVnlKeWt1YjNkc1EyRnliM1Z6Wld3b2UxeHlYRzVjZEZ4MGFYUmxiWE02SURFc1hISmNibHgwWEhSc2IyOXdPaUIwY25WbExGeHlYRzVjZEZ4MGJXRnlaMmx1T2lBMU1DeGNjbHh1WEhSY2RHNWhkam9nWm1Gc2MyVXNYSEpjYmx4MFhIUmtiM1J6T2lCMGNuVmxMRnh5WEc1Y2RGeDBjbVZ6Y0c5dWMybDJaVHA3WEhKY2JseDBJQ0FnSUNBZ0lDQXdPbnRjY2x4dVhIUWdJQ0FnSUNBZ0lDQWdJQ0J0WVhKbmFXNDZJREJjY2x4dVhIUWdJQ0FnSUNBZ0lIMHNYSEpjYmx4MElDQWdJQ0FnSUNBNU9EQTZlMXh5WEc1Y2RDQWdJQ0FnSUNBZ0lDQnRZWEpuYVc0NklESXdNQ0FnWEhKY2JseDBJQ0FnSUNBZ0lDQjlMRnh5WEc1Y2RDQWdJQ0FnSUNBZ01USTRNRHA3WEhKY2JseDBJQ0FnSUNBZ0lDQWdJQ0FnYldGeVoybHVPaUExTUZ4eVhHNWNkQ0FnSUNBZ0lDQWdmVnh5WEc1Y2RDQWdJQ0I5WEhKY2JseDBmU2s3WEhKY2JpOHFJRk5zYVdSbGNpQmxibVFnS2k5Y2NseHVYSEpjYmk4cUlFMXZjbVVnS2k5Y2NseHVYSFFrS0NjdWRHOXJaVzVmWDIxdmNtVXRZblYwZEc5dUlHRW5LUzV2YmlnblkyeHBZMnNuTENCbWRXNWpkR2x2YmlobEtYdGNjbHh1WEhSY2RHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNjbHh1WEhSY2RDUW9kR2hwY3lrdWNHRnlaVzUwS0NrdWNHRnlaVzUwS0NrdWRHOW5aMnhsUTJ4aGMzTW9KMkZqZEdsMlpTY3BPMXh5WEc1Y2RGeDBKQ2duTG5SdmEyVnVYMTl0YjNKbExXSnNiMk5ySnlrdWMyeHBaR1ZVYjJkbmJHVW9LVHRjY2x4dVhIUjlLVHRjY2x4dUx5b2dUVzl5WlNCbGJtUWdLaTljY2x4dVhISmNiaThxSUUxbGJuVWdLaTljY2x4dVhIUWtLQ2N1YUdWaFpHVnlYMTlpZFhKblpYSW5LUzV2YmlnblkyeHBZMnNuTENCbWRXNWpkR2x2YmlncGUxeHlYRzVjZEZ4MEpDaDBhR2x6S1M1MGIyZG5iR1ZEYkdGemN5Z25ZV04wYVhabEp5bGNjbHh1WEhSY2RDUW9KeTVvWldGa1pYSmZYMjFsYm5VbktTNTBiMmRuYkdWRGJHRnpjeWduWVdOMGFYWmxKeWs3WEhKY2JseDBmU2s3WEhKY2JpOHFJRTFsYm5VZ1pXNWtJQ292WEhKY2JseHlYRzR2S2lCVFkzSnZiR3dnS2k5Y2NseHVYSFFrS0NjdWFHVmhaR1Z5WDE5dFpXNTFMV3hwYm1zbktTNXZiaWduWTJ4cFkyc25MQ0JtZFc1amRHbHZiaWhsS1h0Y2NseHVYSFJjZEdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2NseHVYSFJjZEd4bGRDQm9hQ0E5SUNRb0oyaGxZV1JsY2ljcExtaGxhV2RvZENncE8xeHlYRzVjZEZ4MGJHVjBJSE5sYkdWamRHOXlJRDBnSkNoMGFHbHpLUzVoZEhSeUtDZG9jbVZtSnlrN1hISmNibHgwWEhSc1pYUWdhQ0E5SUNRb2MyVnNaV04wYjNJcE8xeHlYRzVjY2x4dVhIUmNkQ1FvSjJoMGJXd3NJR0p2WkhrbktTNWhibWx0WVhSbEtIdGNjbHh1WEhSY2RGeDBjMk55YjJ4c1ZHOXdPaUJvTG05bVpuTmxkQ2dwTG5SdmNDQXRJQ2hvYUNBcklEVXdLU0JjY2x4dVhIUmNkSDBzSURnd01DazdYSEpjYmx4MGZTazdYSEpjYmk4cUlGTmpjbTlzYkNCbGJtUWdLaTljY2x4dVhISmNibXhsZENCMWMyVnlRV2RsYm5RZ1BTQnVZWFpwWjJGMGIzSXVkWE5sY2tGblpXNTBMblJ2VEc5M1pYSkRZWE5sS0NrN1hISmNibXhsZENCd2NpQTlJSGRwYm1SdmR5NWtaWFpwWTJWUWFYaGxiRkpoZEdsdk95QmNjbHh1YkdWMElHWm1JRDBnTDJacGNtVm1iM2d2TG5SbGMzUW9kWE5sY2tGblpXNTBLVHRjY2x4dVhISmNiaVFvZDJsdVpHOTNLUzV2YmlnbmJHOWhaQ2NzSUdaMWJtTjBhVzl1S0NsN1hISmNibHgwYVdZb1ptWWdKaVlnS0hCeUlENGdNU2tnSmlZZ0pDaDNhVzVrYjNjcExuZHBaSFJvS0NrZ1BpQXhNVEF3S1NCN1hISmNibHgwWEhRa0tDZG9aV0ZrWlhJbktTNWpjM01vZTNSeVlXNXpabTl5YlRvZ0ozTmpZV3hsS0RBdU9Da25MQ0IzYVdSMGFEb2dKekV5TlNVbmZTazdYSEpjYmx4MFhIUWtLQ2RvWldGa1pYSW5LUzVqYzNNb0ozUnlZVzV6Wm05eWJTMXZjbWxuYVc0bkxDQW5NQ0F3SnlrN1hISmNibHgwWEhRa0tDY3VZMjl1ZEdGcGJtVnlKeWt1WTNOektIdDBjbUZ1YzJadmNtMDZJQ2R6WTJGc1pTZ3dMamdwSnl4M2FXUjBhRG9nSnpFeU5TVW5MSDBwTzF4eVhHNWNkRngwSkNnbkxtTnZiblJoYVc1bGNpY3BMbU56Y3lnbmRISmhibk5tYjNKdExXOXlhV2RwYmljc0lDY3dJREV3TUNVbktUdGNjbHh1WEhKY2JseDBYSFJzWlhRZ2JYUWdQU0F0S0NRb0oyaDBiV3duS1M1dmRYUmxja2hsYVdkb2RDZ3BJQzhnTVRBd0lDb2dNakFwTzF4eVhHNWNkRngwSkNnbkxtTnZiblJoYVc1bGNpY3BMbU56Y3lnbmJXRnlaMmx1TFhSdmNDY3NJRzEwS1R0Y2NseHVYSFI5WEhKY2JuMHBPeUpkTENKbWFXeGxJam9pYldGcGJpNXFjeUo5XHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
