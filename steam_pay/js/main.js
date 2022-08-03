window.addEventListener('load', function(){
	let faq = document.querySelector('.work__faq')
	let popups = document.querySelectorAll('.popup')
	let close = document.querySelector('.popup__close')

	faq.addEventListener('click', function(e){
		if(e.target.classList.contains('work__faq-ask')){
			toogleItem(e.target);
		}
	});

	document.addEventListener('click', function(e){
		if(e.target.classList.contains('open')){
			e.preventDefault()

			let link = e.target
			let id = document.querySelector(link.hash)
			id.classList.add('active')
		}
	});

	this.document.addEventListener('click', function(e){
		if(e.target.classList.contains('popup__close')){
			e.preventDefault()

			e.target.parentNode.parentNode.classList.remove('active')
		}
	});

	function toogleItem(item){
		let ask = item.parentNode.querySelector('.work__faq-ask');
		let answer = item.parentNode.querySelector('.work__faq-answer');
		
		if(ask.classList.contains('active')){
			let animate = answer.animate([
				{ height: answer.clientHeight + 'px' },
				{ height: 0 }
			], { duration: 250 });

			animate.addEventListener('finish', function(){
				ask.classList.remove('active');
			});
		}
		else{
			ask.classList.add('active');

			answer.animate([
				{ height: 0 },
				{ height: answer.clientHeight + 'px' }
			], { duration: 250 });
		}
	}
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcclxuXHRsZXQgZmFxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtfX2ZhcScpXHJcblx0bGV0IHBvcHVwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cCcpXHJcblx0bGV0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zZScpXHJcblxyXG5cdGZhcS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0aWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3b3JrX19mYXEtYXNrJykpe1xyXG5cdFx0XHR0b29nbGVJdGVtKGUudGFyZ2V0KTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG5cdFx0XHRsZXQgbGluayA9IGUudGFyZ2V0XHJcblx0XHRcdGxldCBpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobGluay5oYXNoKVxyXG5cdFx0XHRpZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHR0aGlzLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX19jbG9zZScpKXtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG5cdFx0XHRlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gdG9vZ2xlSXRlbShpdGVtKXtcclxuXHRcdGxldCBhc2sgPSBpdGVtLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLndvcmtfX2ZhcS1hc2snKTtcclxuXHRcdGxldCBhbnN3ZXIgPSBpdGVtLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLndvcmtfX2ZhcS1hbnN3ZXInKTtcclxuXHRcdFxyXG5cdFx0aWYoYXNrLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG5cdFx0XHRsZXQgYW5pbWF0ZSA9IGFuc3dlci5hbmltYXRlKFtcclxuXHRcdFx0XHR7IGhlaWdodDogYW5zd2VyLmNsaWVudEhlaWdodCArICdweCcgfSxcclxuXHRcdFx0XHR7IGhlaWdodDogMCB9XHJcblx0XHRcdF0sIHsgZHVyYXRpb246IDI1MCB9KTtcclxuXHJcblx0XHRcdGFuaW1hdGUuYWRkRXZlbnRMaXN0ZW5lcignZmluaXNoJywgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRhc2suY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0YXNrLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0YW5zd2VyLmFuaW1hdGUoW1xyXG5cdFx0XHRcdHsgaGVpZ2h0OiAwIH0sXHJcblx0XHRcdFx0eyBoZWlnaHQ6IGFuc3dlci5jbGllbnRIZWlnaHQgKyAncHgnIH1cclxuXHRcdFx0XSwgeyBkdXJhdGlvbjogMjUwIH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
