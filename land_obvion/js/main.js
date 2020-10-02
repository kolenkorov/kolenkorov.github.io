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
				scrollTop: h.offset().top
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlx0Ly8gbGV0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuXHRsZXQgcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbzsgXHJcbi8qXHRsZXQgZmYgPSAvZmlyZWZveC8udGVzdCh1c2VyQWdlbnQpO1xyXG5cdGxldCBjaCA9IC9jaHJvbWUvLnRlc3QodXNlckFnZW50KTtcclxuXHRsZXQgc2YgPSAvc2FmYXJpLy50ZXN0KHVzZXJBZ2VudCk7XHJcblx0bGV0IG9wICA9IC9vcGVyYS8udGVzdCh1c2VyQWdlbnQpO1xyXG5cclxuXHRpZihmZiA+IDApIHtcclxuXHRcdGNvbnNvbGUubG9nKCdmaXJlZm94Jyk7XHJcblx0fVxyXG5cclxuXHRpZiAoY2ggPiAwKSB7XHJcblx0XHRjb25zb2xlLmxvZygnY2hyb21lJyk7XHJcblx0fVxyXG5cclxuXHRpZiAoc2YgPiAwKSB7XHJcblx0XHRjb25zb2xlLmxvZygnc2FmYXJpJyk7XHJcblx0fSovXHJcblxyXG52YXIgQnJvd3NlckRldGVjdCA9IHtcclxuICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcblx0ICB0aGlzLmJyb3dzZXIgPSB0aGlzLnNlYXJjaFN0cmluZyh0aGlzLmRhdGFCcm93c2VyKSB8fCBcIkFuIHVua25vd24gYnJvd3NlclwiO1xyXG4gIH0sXHJcbiAgc2VhcmNoU3RyaW5nOiBmdW5jdGlvbiAoZGF0YSkge1xyXG5cdCAgZm9yICh2YXIgaT0wO2k8ZGF0YS5sZW5ndGg7aSsrKSB7XHJcblx0XHQgIHZhciBkYXRhU3RyaW5nID0gZGF0YVtpXS5zdHJpbmc7XHJcblx0XHQgIHZhciBkYXRhUHJvcCA9IGRhdGFbaV0ucHJvcDtcclxuXHRcdCAgdGhpcy52ZXJzaW9uU2VhcmNoU3RyaW5nID0gZGF0YVtpXS52ZXJzaW9uU2VhcmNoIHx8IGRhdGFbaV0uaWRlbnRpdHk7XHJcblx0XHQgIGlmIChkYXRhU3RyaW5nKSB7XHJcblx0XHQgIGlmIChkYXRhU3RyaW5nLmluZGV4T2YoZGF0YVtpXS5zdWJTdHJpbmcpICE9IC0xKVxyXG5cdFx0ICByZXR1cm4gZGF0YVtpXS5pZGVudGl0eTtcclxuXHRcdCAgfVxyXG5cdFx0ICBlbHNlIGlmIChkYXRhUHJvcClcclxuXHRcdCAgcmV0dXJuIGRhdGFbaV0uaWRlbnRpdHk7XHJcblx0ICB9XHJcbiAgfSxcclxuICBkYXRhQnJvd3NlcjogW1xyXG4gIHtcclxuXHQgIHN0cmluZzogbmF2aWdhdG9yLnVzZXJBZ2VudCxcclxuXHQgIHN1YlN0cmluZzogXCJDaHJvbWVcIixcclxuXHQgIGlkZW50aXR5OiBcIkNocm9tZVwiXHJcbiAgfSxcclxuICB7XHJcblx0ICBzdHJpbmc6IG5hdmlnYXRvci52ZW5kb3IsXHJcblx0ICBzdWJTdHJpbmc6IFwiQXBwbGVcIixcclxuXHQgIGlkZW50aXR5OiBcIlNhZmFyaVwiLFxyXG5cdCAgdmVyc2lvblNlYXJjaDogXCJWZXJzaW9uXCJcclxuICB9LFxyXG4gIHtcclxuXHQgIHByb3A6IHdpbmRvdy5vcGVyYSxcclxuXHQgIGlkZW50aXR5OiBcIk9wZXJhXCIsXHJcblx0ICB2ZXJzaW9uU2VhcmNoOiBcIlZlcnNpb25cIlxyXG4gIH0sXHJcbiAge1xyXG5cdCAgc3RyaW5nOiBuYXZpZ2F0b3IudXNlckFnZW50LFxyXG5cdCAgc3ViU3RyaW5nOiBcIkZpcmVmb3hcIixcclxuXHQgIGlkZW50aXR5OiBcIkZpcmVmb3hcIlxyXG4gIH0sXHJcbiAgXSxcclxuXHJcbn07XHJcbkJyb3dzZXJEZXRlY3QuaW5pdCgpO1xyXG5cclxubGV0IGZmO1xyXG5sZXQgc2Y7XHJcbmxldCBjaDtcclxuaWYoQnJvd3NlckRldGVjdC5icm93c2VyID09ICdGaXJlZm94Jykge1xyXG5cdGZmID0gKEJyb3dzZXJEZXRlY3QuYnJvd3NlciA9PSAnRmlyZWZveCcpO1xyXG59XHJcblxyXG5pZihCcm93c2VyRGV0ZWN0LmJyb3dzZXIgPT0gJ0Nocm9tZScpIHtcclxuXHRjaCA9IChCcm93c2VyRGV0ZWN0LmJyb3dzZXIgPT0gJ0Nocm9tZScpO1xyXG59XHJcblxyXG5pZihCcm93c2VyRGV0ZWN0LmJyb3dzZXIgPT0gJ1NhZmFyaScpIHtcclxuXHRzZiA9IChCcm93c2VyRGV0ZWN0LmJyb3dzZXIgPT0gJ1NhZmFyaScpO1xyXG59XHJcblxyXG5pZihmZikge1xyXG5cdGNvbnNvbGUubG9nKCdmaXJlbW94Jyk7XHJcbn1cclxuXHJcbmlmKGNoKSB7XHJcblx0Y29uc29sZS5sb2coJ2Nocm9tZScpO1xyXG59XHJcblxyXG5pZihzZikge1xyXG5cdGNvbnNvbGUubG9nKCdzYWZhcmknKTtcclxufVxyXG5cclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCl7XHJcblx0aWYoZmYgJiYgKHByID4gMSkgJiYgJCh3aW5kb3cpLndpZHRoKCkgPiAxMTAwKSB7XHJcblx0XHQkKCdoZWFkZXInKS5jc3Moe3RyYW5zZm9ybTogJ3NjYWxlKDAuOCknLCB3aWR0aDogJzEyNSUnfSk7XHJcblx0XHQkKCdoZWFkZXInKS5jc3MoJ3RyYW5zZm9ybS1vcmlnaW4nLCAnMCAwJyk7XHJcblx0XHQkKCcuY29udGFpbmVyJykuY3NzKHt0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyx3aWR0aDogJzEyNSUnLH0pO1xyXG5cdFx0JCgnLmNvbnRhaW5lcicpLmNzcygndHJhbnNmb3JtLW9yaWdpbicsICcwIDEwMCUnKTtcclxuXHJcblx0XHRsZXQgbXQgPSAtKCQoJ2h0bWwnKS5vdXRlckhlaWdodCgpIC8gMTAwICogMjApO1xyXG5cdFx0JCgnLmNvbnRhaW5lcicpLmNzcygnbWFyZ2luLXRvcCcsIG10KTtcclxuXHR9XHJcbn0pO1xyXG5cclxuLyogU2Nyb2xsICovXHJcblx0aWYoc2YgJiYgKCQod2luZG93KS53aWR0aCgpID4gOTYwKSkge1xyXG5cdFx0JCgnLmhlYWRlcl9fbWVudS1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHRcdGxldCBoID0gJChzZWxlY3Rvcik7XHJcblxyXG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0c2Nyb2xsVG9wOiBoLm9mZnNldCgpLnRvcFxyXG5cdFx0XHR9LCA4MDApO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRpZigocHIgPiAxKSAmJiAkKHdpbmRvdykud2lkdGgoKSA8PSA5NjApIHtcclxuXHRcdCQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRsZXQgaGggPSAkKCdoZWFkZXInKS5oZWlnaHQoKTtcclxuXHRcdFx0bGV0IGhtID0gJCgnLmhlYWRlcl9fbWVudScpLm91dGVySGVpZ2h0KCkgLSAxMjtcclxuXHJcblx0XHRcdCQoJy5oZWFkZXJfX21lbnUtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRsZXQgc2VsZWN0b3IgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHRcdFx0XHRsZXQgaCA9ICQoc2VsZWN0b3IpO1xyXG5cclxuXHRcdFx0XHRsZXQgb2Zmc2V0ID0gMztcclxuXHRcdFx0XHQkKGgpLnByZXZBbGwoKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0b2Zmc2V0ICs9IHBhcnNlRmxvYXQoJCh0aGlzKS5vdXRlckhlaWdodCgpKVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRpZihwciA+IDEpIHtcclxuXHRcdFx0XHRcdG9mZnNldCA9IG9mZnNldCAtIChvZmZzZXQgKiAwLjIpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG9mZnNldCA9IG9mZnNldFxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdFx0c2Nyb2xsVG9wOiBvZmZzZXRcclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdCQoJy5oZWFkZXJfX2xvZ28sIC51cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0XHRzY3JvbGxUb3A6IDBcclxuXHRcdH0sIDgwMCk7XHJcblx0fSk7XHJcblxyXG4vKiBTY3JvbGwgZW5kICovXHJcblxyXG4vKiBTZWxlY3QgKi9cclxuXHQkKCdzZWxlY3QnKS5zdHlsZXIoKTtcclxuLyogU2VsZWN0ICovXHJcblxyXG4vKiBNb3JlICovXHJcblx0JCgnLnRva2VuX19tb3JlLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCh0aGlzKS5wYXJlbnQoKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKCcudG9rZW5fX21vcmUtYmxvY2snKS5zbGlkZVRvZ2dsZSgzNTApO1xyXG5cdH0pO1xyXG5cclxuXHQkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKXtcclxuXHQgICAgbGV0IGRyb3Bkb3duID0gJCgnLnRva2VuX19tb3JlLWJsb2NrJyk7XHJcblx0ICAgIGlmICghZHJvcGRvd24uaXMoZS50YXJnZXQpIFxyXG5cdCAgICAgICAgJiYgZHJvcGRvd24uaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuXHQgICAgICAgIGlmICghJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3Rva2VuX19tb3JlLWJ1dHRvbicpKSB7XHJcblx0ICAgICAgICAgICAgZHJvcGRvd24uc2xpZGVVcCgpO1xyXG5cdCAgICAgICAgICAgIC8vIGRyb3Bkb3duLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0ICAgICAgICAgICAgJCgnLnRva2VuX19tb3JlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9XHJcblx0fSk7XHJcbi8qIE1vcmUgZW5kICovXHJcblxyXG4vKiBNZW51ICovXHJcblx0JCgnLmhlYWRlcl9fYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHQkKCcuaGVhZGVyX19tZW51JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0pO1xyXG4vKiBNZW51IGVuZCAqL1xyXG5cclxuLyogQW5pbWF0aW9uICovXHJcblx0JCgnLm1haW5fX2FuaW0nKS5hZGRDbGFzcygnYW5pbWF0ZScpO1xyXG5cdCQoJy5tYWluX19pdGVtLWltZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcubWFpbl9fYW5pbScpLmFkZENsYXNzKCdyZXZlcnNlJyk7XHJcblx0XHQkKCcubWFpbl9fYW5pbScpLnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQoJy5tYWluX19hbmltJykucmVtb3ZlQ2xhc3MoJ3JldmVyc2UnKTtcclxuXHRcdH0sMjAwMCk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHQkKCcubWFpbl9fYW5pbScpLmFkZENsYXNzKCdhbmltYXRlJyk7XHJcblx0XHR9LDMwMDApO1xyXG5cdH0pO1xyXG4vKiBBbmltYXRpb24gZW5kICovXHJcblxyXG4vKiBCdXR0b25zICovXHJcblx0JCgnYS52aWRlbycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IGN1cnJlbnQgPSAkKHRoaXMpXHJcblx0XHRjdXJyZW50LmFkZENsYXNzKCdoaWRlJyk7XHJcblx0XHRjdXJyZW50Lm5leHQoKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRjdXJyZW50Lm5leHQoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdGN1cnJlbnQucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcclxuXHRcdH0sIDU1MDApO1xyXG5cdH0pO1xyXG4vKiBCdXR0b25zIGVuZCAqL1xyXG5cclxuLyogVXAgKi9cclxuXHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcblx0XHRpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAxNTApIHtcclxuXHRcdFx0JCgnLnVwJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnLnVwJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG4vKiBVcCBlbmQgKi9cclxuXHJcblxyXG5cclxuXHJcbi8qIFNjcm9sbCAqL1xyXG4vKiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG5cdGxldCBoaCA9ICQoJ2hlYWRlcicpLm91dGVySGVpZ2h0KCk7XHJcblx0bGV0IGhtID0gJCgnLmhlYWRlcl9fbWVudScpLm91dGVySGVpZ2h0KCkgLSAxNTtcclxuXHJcblx0aWYoZmYpIHtcclxuXHRcdCQoJy5oZWFkZXJfX21lbnUtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGxldCBzZWxlY3RvciA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdFx0XHRsZXQgaCA9ICQoc2VsZWN0b3IpO1xyXG5cclxuXHRcdFx0bGV0IG9mZnNldCA9IDA7XHJcblx0XHRcdCQoaCkucHJldkFsbCgpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0b2Zmc2V0ICs9IHBhcnNlRmxvYXQoJCh0aGlzKS5vdXRlckhlaWdodCgpKVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmKHByID4gMSkge1xyXG5cdFx0XHRcdG9mZnNldCA9IG9mZnNldCAtIChvZmZzZXQgLyAxMDAgKiAyMCkgLSBobVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG9mZnNldCA9IG9mZnNldFxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdFx0c2Nyb2xsVG9wOiBvZmZzZXRcclxuXHRcdFx0fSwgODAwKTtcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKCdmZicpO1xyXG5cdFx0fSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoJy5oZWFkZXJfX21lbnUtbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGxldCBzZWxlY3RvciA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cdFx0XHRsZXQgaCA9ICQoc2VsZWN0b3IpO1xyXG5cclxuXHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdHNjcm9sbFRvcDogaC5vZmZzZXQoKS50b3AgLSBoaFxyXG5cdFx0XHR9LCA4MDApO1xyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coJ25lIGZmJyk7XHRcdFx0XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdCQoJy5oZWFkZXJfX2xvZ28sIC51cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0XHRzY3JvbGxUb3A6IDBcclxuXHRcdH0sIDgwMCk7XHJcblx0fSk7XHJcbn0pOyovXHJcbi8qIFNjcm9sbCBlbmQgKi9cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zjg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaUlpd2ljMjkxY21ObGN5STZXeUp0WVdsdUxtcHpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUpDNWpjM05PZFcxaVpYSXVlbTl2YlNBOUlIUnlkV1U3WEhKY2JtbG1JQ2doS0Z3aWVtOXZiVndpSUdsdUlHUnZZM1Z0Wlc1MExtSnZaSGt1YzNSNWJHVXBLU0I3WEhKY2JseDBKQzVqYzNOSWIyOXJjeTU2YjI5dElEMGdlMXh5WEc1Y2RGeDBaMlYwT2lCbWRXNWpkR2x2YmlobGJHVnRMQ0JqYjIxd2RYUmxaQ3dnWlhoMGNtRXBJSHRjY2x4dVhIUmNkRngwZG1GeUlIWmhiSFZsSUQwZ0pDaGxiR1Z0S1M1a1lYUmhLQ2Q2YjI5dEp5azdYSEpjYmx4MFhIUmNkSEpsZEhWeWJpQjJZV3gxWlNBaFBTQnVkV3hzSUQ4Z2RtRnNkV1VnT2lBeE8xeHlYRzVjZEZ4MGZTeGNjbHh1WEhSY2RITmxkRG9nWm5WdVkzUnBiMjRvWld4bGJTd2dkbUZzZFdVcElIdGNjbHh1WEhSY2RGeDBkbUZ5SUNSbGJHVnRJRDBnSkNobGJHVnRLVHRjY2x4dVhIUmNkRngwZG1GeUlITnBlbVVnUFNCN0lDOHZJSGRwZEdodmRYUWdiV0Z5WjJsdVhISmNibHgwWEhSY2RGeDBkMmxrZEdnNklDUmxiR1Z0TG05MWRHVnlWMmxrZEdnb0tTeGNjbHh1WEhSY2RGeDBYSFJvWldsbmFIUTZJQ1JsYkdWdExtOTFkR1Z5U0dWcFoyaDBLQ2xjY2x4dVhIUmNkRngwZlR0Y2NseHVYSFJjZEZ4MEpHVnNaVzB1WkdGMFlTZ25lbTl2YlNjc0lIWmhiSFZsS1R0Y2NseHVYSFJjZEZ4MGFXWWdLSFpoYkhWbElDRTlJREVwSUh0Y2NseHVYSFJjZEZ4MFhIUWtaV3hsYlM1amMzTW9lMXh5WEc1Y2RGeDBYSFJjZEZ4MFRXOTZWSEpoYm5ObWIzSnRPaUFuYzJOaGJHVW9KeUFySUhaaGJIVmxJQ3NnSnlrbkxGeHlYRzVjZEZ4MFhIUmNkRngwTHk4Z2JXRnlaMmx1VEdWbWREb2dLSE5wZW1VdWQybGtkR2dnS2lCMllXeDFaU0F0SUhOcGVtVXVkMmxrZEdncElDOGdNaXhjY2x4dVhIUmNkRngwWEhSY2RDOHZJRzFoY21kcGJsSnBaMmgwT2lBb2MybDZaUzUzYVdSMGFDQXFJSFpoYkhWbElDMGdjMmw2WlM1M2FXUjBhQ2tnTHlBeUxGeHlYRzVjZEZ4MFhIUmNkRngwTHk4Z2JXRnlaMmx1Vkc5d09pQXRLSE5wZW1VdWFHVnBaMmgwSUM4Z01UQXdJQ29nTWpBZ0t5QXlNQ2tnTHlBeUxGeHlYRzVjZEZ4MFhIUmNkRngwYldGeVoybHVRbTkwZEc5dE9pQXRLSE5wZW1VdWFHVnBaMmgwSUM4Z01UQXdJQ29nTWpBcEtqRXVOVnh5WEc1Y2RGeDBYSFJjZEgwcE8xeHlYRzVjZEZ4MFhIUjlJR1ZzYzJVZ2UxeHlYRzVjZEZ4MFhIUmNkQ1JsYkdWdExtTnpjeWg3WEhKY2JseDBYSFJjZEZ4MFhIUjBjbUZ1YzJadmNtMDZJRzUxYkd3c1hISmNibHgwWEhSY2RGeDBYSFJ0WVhKbmFXNDZJRzUxYkd4Y2NseHVYSFJjZEZ4MFhIUjlLVHRjY2x4dVhIUmNkRngwZlZ4eVhHNWNkRngwZlZ4eVhHNWNkSDA3WEhKY2JuMWNjbHh1S2k5Y2NseHVYSEpjYmx4eVhHNHZLaUJUWld4bFkzUWdLaTljY2x4dVhIUWtLQ2R6Wld4bFkzUW5LUzV6ZEhsc1pYSW9LVHRjY2x4dUx5b2dVMlZzWldOMElDb3ZYSEpjYmx4eVhHNHZLaUJUYkdsa1pYSWdLaTljY2x4dVhIUWtLQ2N1YldGcGJsOWZjMnhwWkdWeUp5a3ViM2RzUTJGeWIzVnpaV3dvZTF4eVhHNWNkRngwYVhSbGJYTTZJREVzWEhKY2JseDBYSFJzYjI5d09pQjBjblZsTEZ4eVhHNWNkRngwYldGeVoybHVPaUExTUN4Y2NseHVYSFJjZEc1aGRqb2dabUZzYzJVc1hISmNibHgwWEhSa2IzUnpPaUIwY25WbExGeHlYRzVjZEZ4MGNtVnpjRzl1YzJsMlpUcDdYSEpjYmx4MElDQWdJQ0FnSUNBd09udGNjbHh1WEhRZ0lDQWdJQ0FnSUNBZ0lDQnRZWEpuYVc0NklEQmNjbHh1WEhRZ0lDQWdJQ0FnSUgwc1hISmNibHgwSUNBZ0lDQWdJQ0E1T0RBNmUxeHlYRzVjZENBZ0lDQWdJQ0FnSUNCdFlYSm5hVzQ2SURJd01DQWdYSEpjYmx4MElDQWdJQ0FnSUNCOUxGeHlYRzVjZENBZ0lDQWdJQ0FnTVRJNE1EcDdYSEpjYmx4MElDQWdJQ0FnSUNBZ0lDQWdiV0Z5WjJsdU9pQTFNRnh5WEc1Y2RDQWdJQ0FnSUNBZ2ZWeHlYRzVjZENBZ0lDQjlYSEpjYmx4MGZTazdYSEpjYmk4cUlGTnNhV1JsY2lCbGJtUWdLaTljY2x4dVhISmNiaThxSUUxdmNtVWdLaTljY2x4dVhIUWtLQ2N1ZEc5clpXNWZYMjF2Y21VdFluVjBkRzl1SUdFbktTNXZiaWduWTJ4cFkyc25MQ0JtZFc1amRHbHZiaWhsS1h0Y2NseHVYSFJjZEdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2NseHVYSFJjZENRb2RHaHBjeWt1Y0dGeVpXNTBLQ2t1Y0dGeVpXNTBLQ2t1ZEc5bloyeGxRMnhoYzNNb0oyRmpkR2wyWlNjcE8xeHlYRzVjZEZ4MEpDZ25MblJ2YTJWdVgxOXRiM0psTFdKc2IyTnJKeWt1YzJ4cFpHVlViMmRuYkdVb0tUdGNjbHh1WEhSOUtUdGNjbHh1THlvZ1RXOXlaU0JsYm1RZ0tpOWNjbHh1WEhKY2JpOHFJRTFsYm5VZ0tpOWNjbHh1WEhRa0tDY3VhR1ZoWkdWeVgxOWlkWEpuWlhJbktTNXZiaWduWTJ4cFkyc25MQ0JtZFc1amRHbHZiaWdwZTF4eVhHNWNkRngwSkNoMGFHbHpLUzUwYjJkbmJHVkRiR0Z6Y3lnbllXTjBhWFpsSnlsY2NseHVYSFJjZENRb0p5NW9aV0ZrWlhKZlgyMWxiblVuS1M1MGIyZG5iR1ZEYkdGemN5Z25ZV04wYVhabEp5azdYSEpjYmx4MGZTazdYSEpjYmk4cUlFMWxiblVnWlc1a0lDb3ZYSEpjYmx4eVhHNHZLaUJUWTNKdmJHd2dLaTljY2x4dVhIUWtLQ2N1YUdWaFpHVnlYMTl0Wlc1MUxXeHBibXNuS1M1dmJpZ25ZMnhwWTJzbkxDQm1kVzVqZEdsdmJpaGxLWHRjY2x4dVhIUmNkR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjY2x4dVhIUmNkR3hsZENCb2FDQTlJQ1FvSjJobFlXUmxjaWNwTG1obGFXZG9kQ2dwTzF4eVhHNWNkRngwYkdWMElITmxiR1ZqZEc5eUlEMGdKQ2gwYUdsektTNWhkSFJ5S0Nkb2NtVm1KeWs3WEhKY2JseDBYSFJzWlhRZ2FDQTlJQ1FvYzJWc1pXTjBiM0lwTzF4eVhHNWNjbHh1WEhSY2RDUW9KMmgwYld3c0lHSnZaSGtuS1M1aGJtbHRZWFJsS0h0Y2NseHVYSFJjZEZ4MGMyTnliMnhzVkc5d09pQm9MbTltWm5ObGRDZ3BMblJ2Y0NBdElDaG9hQ0FySURVd0tTQmNjbHh1WEhSY2RIMHNJRGd3TUNrN1hISmNibHgwZlNrN1hISmNiaThxSUZOamNtOXNiQ0JsYm1RZ0tpOWNjbHh1WEhKY2JteGxkQ0IxYzJWeVFXZGxiblFnUFNCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MExuUnZURzkzWlhKRFlYTmxLQ2s3WEhKY2JteGxkQ0J3Y2lBOUlIZHBibVJ2ZHk1a1pYWnBZMlZRYVhobGJGSmhkR2x2T3lCY2NseHViR1YwSUdabUlEMGdMMlpwY21WbWIzZ3ZMblJsYzNRb2RYTmxja0ZuWlc1MEtUdGNjbHh1WEhKY2JpUW9kMmx1Wkc5M0tTNXZiaWduYkc5aFpDY3NJR1oxYm1OMGFXOXVLQ2w3WEhKY2JseDBhV1lvWm1ZZ0ppWWdLSEJ5SUQ0Z01Ta2dKaVlnSkNoM2FXNWtiM2NwTG5kcFpIUm9LQ2tnUGlBeE1UQXdLU0I3WEhKY2JseDBYSFFrS0Nkb1pXRmtaWEluS1M1amMzTW9lM1J5WVc1elptOXliVG9nSjNOallXeGxLREF1T0NrbkxDQjNhV1IwYURvZ0p6RXlOU1VuZlNrN1hISmNibHgwWEhRa0tDZG9aV0ZrWlhJbktTNWpjM01vSjNSeVlXNXpabTl5YlMxdmNtbG5hVzRuTENBbk1DQXdKeWs3WEhKY2JseDBYSFFrS0NjdVkyOXVkR0ZwYm1WeUp5a3VZM056S0h0MGNtRnVjMlp2Y20wNklDZHpZMkZzWlNnd0xqZ3BKeXgzYVdSMGFEb2dKekV5TlNVbkxIMHBPMXh5WEc1Y2RGeDBKQ2duTG1OdmJuUmhhVzVsY2ljcExtTnpjeWduZEhKaGJuTm1iM0p0TFc5eWFXZHBiaWNzSUNjd0lERXdNQ1VuS1R0Y2NseHVYSEpjYmx4MFhIUnNaWFFnYlhRZ1BTQXRLQ1FvSjJoMGJXd25LUzV2ZFhSbGNraGxhV2RvZENncElDOGdNVEF3SUNvZ01qQXBPMXh5WEc1Y2RGeDBKQ2duTG1OdmJuUmhhVzVsY2ljcExtTnpjeWduYldGeVoybHVMWFJ2Y0Njc0lHMTBLVHRjY2x4dVhIUjlYSEpjYm4wcE95SmRMQ0ptYVd4bElqb2liV0ZwYmk1cWN5SjlcclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
