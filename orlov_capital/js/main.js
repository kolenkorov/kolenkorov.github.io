/* Dropdown */
	let user = $('.header__user-title');

	let toolbar_user = $('.header__user-toolbar');

	user.on('click', function() {
		toolbar_user.show();
	});


	$(document).mouseup(function(e) {
		if (toolbar_user.is(":visible")){
			if (!toolbar_user.is(e.target) && toolbar_user.has(e.target).length === 0)
			{
				toolbar_user.hide();
			}
		}
	});
/* Dropdown end */

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

/* Form Styler*/
	$('select').styler({
		fileBrowse: 'Replace file',
		filePlaceholder: ''
	});
/* Form Styler end */

/* Magnific popup */
	$(document).ready(function(){
		$('.main__referral-item').magnificPopup({
			items: [
				{
					src: '.popup__buy',
					type: 'inline'
				}
			],
		});

		$('.aside__menu-item:nth-child(5) a').magnificPopup({
			items: [
				{
					src: '.popup__reg',
					type: 'inline'
				}
			],
		});
		$('.aside__menu-item:last-child a, .popup__link.login a').magnificPopup({
			items: [
				{
					src: '.popup__login',
					type: 'inline'
				}
			],
		});

		$('.popup__link.forgot a').magnificPopup({
			items: [
				{
					src: '.popup__forgot',
					type: 'inline'
				}
			],
		});
	});
/*Magnific popup*/

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIERyb3Bkb3duICovXHJcblx0bGV0IHVzZXIgPSAkKCcuaGVhZGVyX191c2VyLXRpdGxlJyk7XHJcblxyXG5cdGxldCB0b29sYmFyX3VzZXIgPSAkKCcuaGVhZGVyX191c2VyLXRvb2xiYXInKTtcclxuXHJcblx0dXNlci5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdHRvb2xiYXJfdXNlci5zaG93KCk7XHJcblx0fSk7XHJcblxyXG5cclxuXHQkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICh0b29sYmFyX3VzZXIuaXMoXCI6dmlzaWJsZVwiKSl7XHJcblx0XHRcdGlmICghdG9vbGJhcl91c2VyLmlzKGUudGFyZ2V0KSAmJiB0b29sYmFyX3VzZXIuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0b29sYmFyX3VzZXIuaGlkZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcbi8qIERyb3Bkb3duIGVuZCAqL1xyXG5cclxuLyogVXBsb2FkIGltZyAqL1xyXG5cdGZ1bmN0aW9uIHJlYWRVUkwoaW5wdXQpIHtcclxuXHQgICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcblx0ICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcblx0ICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuXHQgICAgICAgICAgICAkKCcjaW1hZ2UnKS5hdHRyKCdzcmMnLCBlLnRhcmdldC5yZXN1bHQpLnNob3coKTtcclxuXHQgICAgICAgIH07XHJcblxyXG5cdCAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW5wdXQuZmlsZXNbMF0pO1xyXG5cdCAgICB9XHJcblx0fVxyXG5cclxuXHQkKFwiI2ltZ0lucHV0XCIpLmNoYW5nZShmdW5jdGlvbigpe1xyXG5cdCAgICByZWFkVVJMKHRoaXMpO1xyXG5cdH0pO1xyXG4vKiBVcGxvYWQgaW1nIGVuZCAqL1xyXG5cclxuLyogRm9ybSBTdHlsZXIqL1xyXG5cdCQoJ3NlbGVjdCcpLnN0eWxlcih7XHJcblx0XHRmaWxlQnJvd3NlOiAnUmVwbGFjZSBmaWxlJyxcclxuXHRcdGZpbGVQbGFjZWhvbGRlcjogJydcclxuXHR9KTtcclxuLyogRm9ybSBTdHlsZXIgZW5kICovXHJcblxyXG4vKiBNYWduaWZpYyBwb3B1cCAqL1xyXG5cdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0XHQkKCcubWFpbl9fcmVmZXJyYWwtaXRlbScpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogJy5wb3B1cF9fYnV5JyxcclxuXHRcdFx0XHRcdHR5cGU6ICdpbmxpbmUnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCgnLmFzaWRlX19tZW51LWl0ZW06bnRoLWNoaWxkKDUpIGEnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6ICcucG9wdXBfX3JlZycsXHJcblx0XHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdH0pO1xyXG5cdFx0JCgnLmFzaWRlX19tZW51LWl0ZW06bGFzdC1jaGlsZCBhLCAucG9wdXBfX2xpbmsubG9naW4gYScpLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0XHRpdGVtczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHNyYzogJy5wb3B1cF9fbG9naW4nLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2lubGluZSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHR9KTtcclxuXHJcblx0XHQkKCcucG9wdXBfX2xpbmsuZm9yZ290IGEnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdFx0aXRlbXM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRzcmM6ICcucG9wdXBfX2ZvcmdvdCcsXHJcblx0XHRcdFx0XHR0eXBlOiAnaW5saW5lJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG4vKk1hZ25pZmljIHBvcHVwKi9cclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
